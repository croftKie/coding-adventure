import "./css/App.css";

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
import Chat from "./comps/HUD/settings-comps/Chat";
import Classroom from "./comps/HUD/settings-comps/Classroom";
import Loading from "./comps/Loading";
import NotifyChapters from "./comps/HUD/NotifyChapters";

// State import for currently active chapters and puzzles
import {
  activeChapterSelector,
  activePuzzleSelector,
} from "./store/features/progressSlice";

// State import for UI toggles (bools)
import {
  SplashSelector,
  chatSelector,
  classroomSelector,
  leaderboardSelector,
  popUpSelector,
  progressSelector,
  settingsSelector,
  updateUi,
} from "./store/features/UiSlice";

// State import for puzzle/chapter content
import {
  readContent, // all chapter & puzzle content
  setChapterCompleteStatus, // action to set chapter as complete
} from "./store/features/contentSlice";

function App() {
  // variable declarations
  const currentPuzzle = useSelector(activePuzzleSelector);
  const activeChapter = useSelector(activeChapterSelector);
  const splashStatus = useSelector(SplashSelector);
  const content = useSelector(readContent);
  const popUp = useSelector(popUpSelector);
  const settings = useSelector(settingsSelector);
  const leaderboard = useSelector(leaderboardSelector);
  const progress = useSelector(progressSelector);
  const classroom = useSelector(classroomSelector);
  const chat = useSelector(chatSelector);
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

  console.log(chat);

  // Returns based on splash screen status and chapter complete status and default return
  if (splashStatus) {
    return <Splash />;
  }

  if (content[activeChapter].completedStatus) {
    return <Loading />;
  }
  return (
    <>
      <Background />

      {popUp ? (
        <Popup currentPuzzle={currentPuzzle} toggleUi={toggleUi} />
      ) : (
        <></>
      )}

      {settings ? (
        <Settings />
      ) : classroom ? (
        <Classroom />
      ) : leaderboard ? (
        <Leaderboard />
      ) : progress ? (
        <Progress />
      ) : chat ? (
        <Chat />
      ) : (
        <></>
      )}

      <div className="hud">
        <Points toggleUi={toggleUi} />
        <NotifyChapters />
        <LowerNav toggleUi={toggleUi} />
      </div>
    </>
  );
}

export default App;
