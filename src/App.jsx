// Main Component for Codeventure Application

// styling and image asset imports
import "./css/App.css";
import { images } from "./utils/images.js";

// React and React Redux dependencies
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

// Import statements for child components
import Splash from "./comps/Splash";
import Progress from "./comps/HUD/settings-comps/Progress";
import Leaderboard from "./comps/HUD/settings-comps/Leaderboard";
import Loading from "./comps/Loading";
import Puzzle from "./comps/Puzzle.jsx";
import Intro from "./comps/story-comps/Intro";
import Landscape from "./comps/Landscape";
// Store import statements
import {
  activeChapterSelector,
  activePuzzleSelector,
  allChaptersCompletedSelector,
} from "./store/features/progressSlice";
import {
  SplashSelector,
  exitOpenSelector,
  introOpenSelector,
  updateUi,
} from "./store/features/UiSlice";
import {
  readContent,
  setChapterCompleteStatus,
} from "./store/features/contentSlice";
import { puzzleTutorialSelector } from "./store/features/tutorialSlice";
import Msg from "./comps/tutorial/TutModal.jsx";
import Ending from "./comps/story-comps/Ending";

function App() {
  // component variable declarations
  const dispatch = useDispatch();
  const barRef = useRef();
  const currentPuzzle = useSelector(activePuzzleSelector);
  const activeChapter = useSelector(activeChapterSelector);
  const splashStatus = useSelector(SplashSelector);
  const introOpenState = useSelector(introOpenSelector);
  const exitOpenState = useSelector(exitOpenSelector);
  const allChaptersCompleted = useSelector(allChaptersCompletedSelector);
  const content = useSelector(readContent);
  const puzzles = content[activeChapter].chapterPuzzles;
  const [page, setPage] = useState(0);
  const [screenSize, setScreenSize] = useState(getCurrentDimensions());
  const puzzleTutorial = useSelector(puzzleTutorialSelector);

  function getCurrentDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimensions = () => {
      setScreenSize(getCurrentDimensions());
    };
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [screenSize]);

  // puzzle filter provides currently selected puzzle - prop drilled to child components
  const [activePuzzle] = puzzles.filter(
    (puzzle) => puzzle.id === currentPuzzle
  );

  const switchBarStyling = (option) => {
    Array.from(barRef.current.children).forEach((child, i) => {
      child.classList.remove("active");
      if (child.classList.contains(option)) {
        child.classList.add("active");
      }
    });
  };

  const showToastMessage = () => {
    console.log("hello");
    toast(<Msg tutorial={puzzleTutorial} />, { autoClose: false });
  };

  // update function to monitor completed puzzles - dispatches chapter complete status
  useEffect(() => {
    const remaining = content[activeChapter].chapterPuzzles.filter((puzzle) => {
      return !puzzle.completed;
    });
    if (remaining.length === 0) {
      dispatch(setChapterCompleteStatus(activeChapter));
    }
    if (allChaptersCompleted && allChaptersCompleted.length === 4) {
      dispatch(updateUi("exit"));
    }
  }, [content[activeChapter].chapterPuzzles]);

  if (screenSize.width - 200 <= screenSize.height) {
    return <Landscape />;
  }

  // Returns based on splash screen status and chapter complete status and default return
  if (splashStatus) {
    return <Splash />;
  }
  if (introOpenState) {
    return <Intro />;
  }
  if (exitOpenState) {
    return <Ending />;
  }
  if (content[activeChapter].completedStatus) {
    return <Loading />;
  }

  return (
    <>
      <ToastContainer />
      <div className="contentWindow">
        <div className="topbar">
          <div className="buttons">
            <div onClick={showToastMessage} className="item">
              <img src={images.uiAssets[4]} alt="" />
            </div>
            <div className="item">
              <img src={images.uiAssets[0]} alt="" />
            </div>
          </div>
        </div>
        <div ref={barRef} className="lower-bar">
          <div
            onClick={() => {
              setPage(0);
              switchBarStyling("puzzles");
            }}
            className="puzzles active">
            Chapter
          </div>
          <div
            onClick={() => {
              setPage(1);
              switchBarStyling("progress");
            }}
            className="progress">
            Progress
          </div>
          <div
            // onClick={() => {
            //   setPage(2);
            //   switchBarStyling("leaderboard");
            // }}
            className="leaderboard"
            style={{ backgroundColor: "lightgrey", cursor: "default" }}>
            Leaderboard
          </div>
        </div>
        {page === 0 ? (
          <Puzzle
            content={content}
            activePuzzle={activePuzzle}
            activeChapter={activeChapter}
          />
        ) : page === 1 ? (
          <Progress />
        ) : page === 2 ? (
          <Leaderboard />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
