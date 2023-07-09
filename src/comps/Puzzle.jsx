import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../utils/images.js";
import Dialogue from "./story-comps/Dialogue";
import Popup from "./Popup";
import LowerNav from "./HUD/LowerNav";

import { popUpSelector } from "../store/features/UiSlice";

const Puzzle = ({ content, activePuzzle, toggleUi, activeChapter }) => {
  const popUp = useSelector(popUpSelector);
  const bg = `url(${images.bgAssets[activePuzzle.assets.puzzleBgAssets[0]]})`;
  return (
    <>
      <div style={{ backgroundImage: bg }} className="content">
        <Dialogue dialogue={activePuzzle.puzzleDialogue} />
      </div>
      <div className="hud">
        {content[activeChapter].completedStatus ? (
          <button>Complete Chapter</button>
        ) : (
          <></>
        )}
        <LowerNav activePuzzle={activePuzzle} toggleUi={toggleUi} />
      </div>
      {popUp ? (
        <Popup activePuzzle={activePuzzle} toggleUi={toggleUi} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Puzzle;
