import { gsap } from "gsap";

import React, { useState, useRef } from "react";

import Instructions from "./puzzle-templates/Instructions";
import BugFix from "./puzzle-templates/BugFix";
import Cryptography from "./puzzle-templates/Cryptography";
import WinCondition from "./puzzle-templates/WinCondition";
import Topbar from "./util-comps/Topbar";
import { useDispatch } from "react-redux";
import { updateUi } from "../store/features/UiSlice";

const Popup = ({ activePuzzle }) => {
  // variable declarations
  const [win, setWin] = useState(false);
  const popupRef = useRef();
  const dispatch = useDispatch();

  // close popup on press
  const closeOnPress = () => {
    gsap.to(popupRef.current, { opacity: 0 });
    setTimeout(() => {
      dispatch(updateUi("popUp"));
    }, 1000);
  };

  return (
    <div ref={popupRef} className="popup">
      {win ? <WinCondition setWin={setWin} /> : <></>}
      <div className="nav">
        <Topbar close={closeOnPress} name={activePuzzle.type.puzzle_name} />
      </div>
      <div className="puzzleContent">
        {activePuzzle.type.puzzle_type === 1 ? (
          <Instructions setWin={setWin} activePuzzle={activePuzzle} />
        ) : activePuzzle.type.puzzle_type === 2 ? (
          <Cryptography setWin={setWin} activePuzzle={activePuzzle} />
        ) : activePuzzle.type.puzzle_type === 3 ? (
          <BugFix setWin={setWin} activePuzzle={activePuzzle} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Popup;
