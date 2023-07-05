import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";

import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { images } from "../utils/images";

import Instructions from "./puzzle-templates/Instructions";
import BugFix from "./puzzle-templates/BugFix";
import Cryptography from "./puzzle-templates/Cryptography";
import WinCondition from "./puzzle-templates/WinCondition";

const Popup = ({ activePuzzle, toggleUi }) => {
  // variable declarations
  const [win, setWin] = useState(false);
  const popupRef = useRef();
  const toastText = activePuzzle.puzzleDescription;

  // helper functions
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

  return (
    <div ref={popupRef} className="popup">
      <ToastContainer />
      {win ? <WinCondition setWin={setWin} toggleUi={toggleUi} /> : <></>}
      <div className="nav">
        <div className="topbar">
          <h1>{activePuzzle.puzzleName}</h1>
          <div className="buttons">
            <div onClick={showToastMessage} className="item">
              <img src={images.uiAssets[4]} alt="" />
            </div>
            <div onClick={closeOnPress} className="item">
              <img src={images.uiAssets[0]} alt="" />
            </div>
          </div>
        </div>
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
