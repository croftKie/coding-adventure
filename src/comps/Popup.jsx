import React, { useState, useEffect } from "react";
import close from "../assets/close.png";
import info from "../assets/info.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Instructions from "./puzzle-templates/Instructions";
import BugFix from "./puzzle-templates/BugFix";
import Cryptography from "./puzzle-templates/Cryptography";

import { useSelector } from "react-redux";

import { gsap } from "gsap";
import { useRef } from "react";
import { readContent } from "../store/features/contentSlice";
import {
  activeChapterSelector,
  activePuzzleSelector,
} from "../store/features/progressSlice";
import WinCondition from "./puzzle-templates/WinCondition";

const Popup = ({ toggleUi }) => {
  const popupRef = useRef();
  const content = useSelector(readContent);
  const activeChapter = useSelector(activeChapterSelector);
  const puzzles = content[activeChapter].chapterPuzzles;
  const activePuzzleId = useSelector(activePuzzleSelector);
  const [activePuzzle] = puzzles.filter(
    (puzzle) => puzzle.id === activePuzzleId
  );
  const [win, setWin] = useState(false);

  const toastText = activePuzzle.puzzleDescription;
  const showToastMessage = () => {
    toast.info(toastText, {
      position: toast.POSITION.TOP_LEFT,
      allowHTML: true,
    });
  };

  const closeOnPress = () => {
    gsap.to(popupRef.current, { height: 0, width: 0, opacity: 0 });
    setTimeout(() => {
      toggleUi("popUp");
    }, 1000);
  };
  console.log(win);
  return (
    <div ref={popupRef} className="popup">
      <ToastContainer />
      {win ? <WinCondition setWin={setWin} /> : <></>}
      <div className="nav">
        <div className="topbar">
          <h1>{activePuzzle.puzzleName}</h1>
          <div className="buttons">
            <div onClick={showToastMessage} className="item">
              <img src={info} alt="" />
            </div>
            <div onClick={closeOnPress} className="item">
              <img src={close} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="puzzleContent">
        {activePuzzle.type === 1 ? (
          <Instructions setWin={setWin} activePuzzle={activePuzzle} />
        ) : activePuzzle.type === 2 ? (
          <Cryptography />
        ) : activePuzzle.type === 3 ? (
          <BugFix />
        ) : activePuzzle.type === 4 ? (
          <Styling />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Popup;
