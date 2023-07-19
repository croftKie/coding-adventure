import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";

import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import Instructions from "./puzzle-templates/Instructions";
import BugFix from "./puzzle-templates/BugFix";
import Cryptography from "./puzzle-templates/Cryptography";
import WinCondition from "./puzzle-templates/WinCondition";
import Msg from "./tutorial/TutModal";
import Topbar from "./util-comps/Topbar";

import { popupTutorialSelector } from "../store/features/tutorialSlice";

const Popup = ({ activePuzzle, toggleUi }) => {
  // variable declarations
  const [win, setWin] = useState(false);
  const popupRef = useRef();
  const popupTutorial = useSelector(popupTutorialSelector);

  // init and populate toast
  const showToastMessage = () => {
    toast(<Msg tutorial={popupTutorial} />, { autoClose: false });
  };

  // close popup on press
  const closeOnPress = () => {
    gsap.to(popupRef.current, { opacity: 0 });
    setTimeout(() => {
      toggleUi("popUp");
    }, 1000);
  };

  return (
    <div ref={popupRef} className="popup">
      {win ? <WinCondition setWin={setWin} toggleUi={toggleUi} /> : <></>}
      <div className="nav">
        <Topbar
          show={showToastMessage}
          close={closeOnPress}
          name={activePuzzle.puzzleName}
        />
      </div>
      <div className="puzzleContent">
        {activePuzzle.type === 1 ? (
          <Instructions setWin={setWin} activePuzzle={activePuzzle} />
        ) : activePuzzle.type === 2 ? (
          <Cryptography setWin={setWin} activePuzzle={activePuzzle} />
        ) : activePuzzle.type === 3 ? (
          <BugFix setWin={setWin} activePuzzle={activePuzzle} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Popup;
