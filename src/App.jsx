// Main Component for Codeventure Application

// styling and image asset imports
import "./css/App.css";
import { images } from "./utils/images.js";

// React and React Redux dependencies
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import statements for child components
import Splash from "./comps/Splash";
import Progress from "./comps/HUD/settings-comps/Progress";
import Leaderboard from "./comps/HUD/settings-comps/Leaderboard";
import Loading from "./comps/Loading";
import Puzzle from "./comps/Puzzle.jsx";
import Intro from "./comps/story-comps/Intro";
import Landscape from "./comps/Landscape";
import Ending from "./comps/story-comps/Ending";

// Store import statements
import { activeChapterSelector } from "./store/features/progressSlice";
import {
  SplashSelector,
  exitOpenSelector,
  functionGameOpenSelector,
  introOpenSelector,
  updateUi,
} from "./store/features/UiSlice";
import { readContent } from "./store/features/contentSlice";
import FunctionsGame from "./comps/FunctionsGame";

function App() {
  // component variable declarations
  const dispatch = useDispatch();
  const barRef = useRef();
  const activeChapter = useSelector(activeChapterSelector);
  const splashStatus = useSelector(SplashSelector);
  const introOpenState = useSelector(introOpenSelector);
  const exitOpenState = useSelector(exitOpenSelector);
  const functionGameOpenState = useSelector(functionGameOpenSelector);
  const content = useSelector(readContent);
  const [page, setPage] = useState(0);
  const [screenSize, setScreenSize] = useState(getCurrentDimensions());

  function getCurrentDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  content.forEach((chapter) => {
    chapter.chapterPuzzles.forEach((puzzle) => {});
  });

  useEffect(() => {
    const updateDimensions = () => {
      setScreenSize(getCurrentDimensions());
    };
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [screenSize]);

  const endGame = () => {
    dispatch(updateUi("exit"));
  };

  console.log(functionGameOpenState);
  // Returns based on splash screen status and chapter complete status and default return
  if (functionGameOpenState) {
    console.log("fired");
    return <FunctionsGame />;
  }

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
      <div className="contentWindow">
        <div className="topbar">
          <div className="buttons">
            <div className="item">
              <img
                onClick={() => {
                  dispatch(updateUi("splashScreen"));
                }}
                src={images.uiAssets.close}
                alt=""
              />
            </div>
          </div>
        </div>
        {page === 0 ? (
          <Puzzle
            endGame={endGame}
            content={content}
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
