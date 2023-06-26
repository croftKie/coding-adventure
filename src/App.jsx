import { useMouse } from "@uidotdev/usehooks";
import { useState } from "react";

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

import "./css/App.css";

import { useSelector } from "react-redux";
import {
  activeChapterSelector,
  activePuzzleSelector,
} from "./store/features/progressSlice";

import NotifyChapters from "./comps/HUD/NotifyChapters";
import { SplashSelector } from "./store/features/UiSlice";
import { useEffect } from "react";

function App() {
  const [popUp, setPopup] = useState(false);
  const [settings, setSettings] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);
  const [classroom, setClassroom] = useState(false);
  const [progress, setProgress] = useState(false);
  const [chat, setChat] = useState(false);

  const currentPuzzle = useSelector(activePuzzleSelector);
  const splashStatus = useSelector(SplashSelector);
  const currentChapter = useSelector(activeChapterSelector);

  useEffect(() => {
    console.log(currentChapter);
  }, [currentChapter]);

  const openPopup = () => {
    setPopup(!popUp);
  };
  const openSettings = () => {
    setSettings(!settings);
  };
  const openLeaderboard = () => {
    setLeaderboard(!leaderboard);
  };
  const openClassroom = () => {
    setClassroom(!classroom);
  };
  const openProgress = () => {
    setProgress(!progress);
  };
  const openChat = () => {
    setChat(!chat);
  };

  if (splashStatus) {
    return <Splash />;
  }

  return (
    <>
      <Background />

      {popUp ? (
        <Popup currentPuzzle={currentPuzzle} openPopup={openPopup} />
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
        <Points openPopup={openPopup} />
        <NotifyChapters />
        <LowerNav
          openClassroom={openClassroom}
          openSettings={openSettings}
          openLeaderboard={openLeaderboard}
          openProgress={openProgress}
          openChat={openChat}
        />
      </div>
    </>
  );
}

export default App;
