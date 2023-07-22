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
import Msg from "./comps/tutorial/TutModal.jsx";
import Ending from "./comps/story-comps/Ending";

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

function App() {
  // component variable declarations
  const dispatch = useDispatch();
  const barRef = useRef();
  const activeChapter = useSelector(activeChapterSelector);
  const splashStatus = useSelector(SplashSelector);
  const introOpenState = useSelector(introOpenSelector);
  const exitOpenState = useSelector(exitOpenSelector);
  const allChaptersCompleted = useSelector(allChaptersCompletedSelector);
  const content = useSelector(readContent);
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
  // update function to monitor completed puzzles - dispatches chapter complete status
  // useEffect(() => {
  //   if (allChaptersCompleted && allChaptersCompleted.length === 4) {
  //     dispatch(updateUi("exit"));
  //   }
  // }, [content[activeChapter].chapterPuzzles]);

  // changes active tab styling on top bar
  const switchBarStyling = (option) => {
    Array.from(barRef.current.children).forEach((child, i) => {
      child.classList.remove("active");
      if (child.classList.contains(option)) {
        child.classList.add("active");
      }
    });
  };

  // populates and inits toast message
  const showToastMessage = () => {
    toast(<Msg tutorial={puzzleTutorial} />, { autoClose: false });
  };

  // Returns based on splash screen status and chapter complete status and default return
  if (screenSize.width - 200 <= screenSize.height) {
    return <Landscape />;
  }
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
              <img src={images.uiAssets.info} alt="" />
            </div>
            <div className="item">
              <img src={images.uiAssets.close} alt="" />
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
          <Puzzle content={content} activeChapter={activeChapter} />
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
