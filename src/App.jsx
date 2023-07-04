import "./css/App.css";
import { images } from "./utils/images.js";

// React and React Redux dependencies
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import statements for child components
import Popup from "./comps/Popup";
import Background from "./comps/Background";
import LowerNav from "./comps/HUD/LowerNav";
import Points from "./comps/HUD/Points";
import Splash from "./comps/Splash";
import Settings from "./comps/HUD/settings-comps/Settings";
import Progress from "./comps/HUD/settings-comps/Progress";
import Leaderboard from "./comps/HUD/settings-comps/Leaderboard";
import Loading from "./comps/Loading";
import NotifyChapters from "./comps/HUD/NotifyChapters";
import Options from "./comps/HUD/settings-comps/Options.jsx";
import TutModal from "./comps/tutorial/TutModal.jsx";

// State import for currently active chapters and puzzles
import {
  activeChapterSelector,
  activePuzzleSelector,
} from "./store/features/progressSlice";

// State import for UI toggles (bools)
import {
  SplashSelector,
  optionsSelector,
  popUpSelector,
  updateUi,
} from "./store/features/UiSlice";

// State import for puzzle/chapter content
import {
  readContent, // all chapter & puzzle content
  setChapterCompleteStatus, // action to set chapter as complete
} from "./store/features/contentSlice";

import { tutorialOpenSelector } from "./store/features/tutorialSlice.js";

function App() {
  // variable declarations
  const currentPuzzle = useSelector(activePuzzleSelector);
  const activeChapter = useSelector(activeChapterSelector);
  const splashStatus = useSelector(SplashSelector);
  const content = useSelector(readContent);
  const popUp = useSelector(popUpSelector);
  const options = useSelector(optionsSelector);
  const tutOpen = useSelector(tutorialOpenSelector);
  const dispatch = useDispatch();

  // Dispatch function for opening and closing UI elements
  const toggleUi = (type) => {
    dispatch(updateUi(type));
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

  if (content[activeChapter].completedStatus) {
    return <Loading />;
  }
  console.log(tutOpen);
  return (
    <>
      <Background />

      {popUp ? (
        <Popup currentPuzzle={currentPuzzle} toggleUi={toggleUi} />
      ) : (
        <></>
      )}

      {options ? <Options /> : <></>}

      <div className="hud">
        <img src={images.uiAssets[14]} alt="" className="open-chapter-info" />
        {tutOpen ? <TutModal /> : <></>}
        <Points toggleUi={toggleUi} />
        <NotifyChapters />
        <LowerNav toggleUi={toggleUi} />
      </div>
    </>
  );
}

export default App;
