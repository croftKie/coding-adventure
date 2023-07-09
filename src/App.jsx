import "./css/App.min.css";
import { images } from "./utils/images.js";

// React and React Redux dependencies
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import statements for child components

import Splash from "./comps/Splash";
import Progress from "./comps/HUD/settings-comps/Progress";
import Leaderboard from "./comps/HUD/settings-comps/Leaderboard";
import Loading from "./comps/Loading";
import NotifyChapters from "./comps/story-comps/NotifyChapters";
import TutModal from "./comps/tutorial/TutModal.jsx";
import Puzzle from "./comps/Puzzle.jsx";

// State import for currently active chapters and puzzles
import {
  activeChapterSelector,
  activePuzzleSelector,
} from "./store/features/progressSlice";

// State import for UI toggles (bools)
import {
  SplashSelector,
  optionsSelector,
  introOpenSelector,
  updateUi,
} from "./store/features/UiSlice";

// State import for puzzle/chapter content
import {
  readContent, // all chapter & puzzle content
  setChapterCompleteStatus, // action to set chapter as complete
} from "./store/features/contentSlice";

import { tutorialOpenSelector } from "./store/features/tutorialSlice.js";
import Intro from "./comps/story-comps/Intro";

function App() {
  // variable declarations
  const barRef = useRef();
  const currentPuzzle = useSelector(activePuzzleSelector);
  const activeChapter = useSelector(activeChapterSelector);
  const splashStatus = useSelector(SplashSelector);
  const introOpenState = useSelector(introOpenSelector);
  const content = useSelector(readContent);

  const options = useSelector(optionsSelector);
  const tutOpen = useSelector(tutorialOpenSelector);
  const dispatch = useDispatch();
  const puzzles = content[activeChapter].chapterPuzzles;
  const [activePuzzle] = puzzles.filter(
    (puzzle) => puzzle.id === currentPuzzle
  );
  const [page, setPage] = useState(0);
  // Dispatch function for opening and closing UI elements
  const toggleUi = (type) => {
    dispatch(updateUi(type));
  };

  const switchBarStyling = (option) => {
    Array.from(barRef.current.children).forEach((child, i) => {
      child.classList.remove("active");
      if (child.classList.contains(option)) {
        child.classList.add("active");
      }
    });
  };

  // update function to monitor completed puzzles - dispatches chapter complete status
  useEffect(() => {
    const remaining = content[activeChapter].chapterPuzzles.filter((puzzle) => {
      return !puzzle.completed;
    });
    if (remaining.length === 0) {
      dispatch(setChapterCompleteStatus(activeChapter));
    }
  }, [content[activeChapter].chapterPuzzles]);

  // Returns based on splash screen status and chapter complete status and default return
  if (splashStatus) {
    return <Splash />;
  }
  if (introOpenState) {
    return <Intro />;
  }

  if (content[activeChapter].completedStatus) {
    return <Loading />;
  }

  return (
    <div className="contentWindow">
      <div className="topbar">
        <img src={images.uiAssets[0]} alt="" />
      </div>
      <div ref={barRef} className="lower-bar">
        <div
          onClick={() => {
            setPage(0);
            switchBarStyling("puzzles");
          }}
          className="puzzles active"
        >
          Chapter
        </div>
        <div
          onClick={() => {
            setPage(1);
            switchBarStyling("progress");
          }}
          className="progress"
        >
          Progress
        </div>
        <div
          onClick={() => {
            setPage(2);
            switchBarStyling("leaderboard");
          }}
          className="leaderboard"
        >
          Leaderboard
        </div>
      </div>
      {page === 0 ? (
        <Puzzle
          content={content}
          activePuzzle={activePuzzle}
          toggleUi={toggleUi}
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
  );
}

export default App;
