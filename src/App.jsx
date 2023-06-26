import { useMouse } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/App.css";

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

import {
  activeChapterSelector,
  activePuzzleSelector,
  changeCurrentChapter,
} from "./store/features/progressSlice";

import NotifyChapters from "./comps/HUD/NotifyChapters";
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
import {
  readContent,
  setChapterCompleteStatus,
} from "./store/features/contentSlice";

function App() {
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
  const chapterChange = false;

  const toggleUi = (type) => {
    dispatch(updateUi(type));
  };

  useEffect(() => {
    const remaining = content[activeChapter].chapterPuzzles.filter((puzzle) => {
      return !puzzle.completed;
    });
    if (remaining.length === 0) {
      dispatch(setChapterCompleteStatus(activeChapter));
    }
  }, [content[activeChapter].chapterPuzzles]);

  if (splashStatus) {
    return <Splash />;
  }

  if (content[activeChapter].completedStatus) {
    return (
      <button
        onClick={() => {
          dispatch(changeCurrentChapter(activeChapter + 1));
        }}
      >
        Go to next chapter
      </button>
    );
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
