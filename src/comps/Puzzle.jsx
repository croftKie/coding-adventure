// React imports
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameManager } from "../kaboom/gameManager.js";

// asset imports
import { images } from "../utils/images.js";

// component imports
import Dialogue from "./story-comps/Dialogue";
import Popup from "./Popup";
import LowerNav from "./HUD/LowerNav";

// store imports
import { popUpSelector, updateUi } from "../store/features/UiSlice";
import { useLayoutEffect } from "react";

const Puzzle = ({ content, activePuzzle, activeChapter }) => {
  const dispatch = useDispatch();
  const popUpStatus = useSelector(popUpSelector);
  const gameRef = useRef();

  // concat dynamic image data for component styling
  const bg = `url(${
    images.bgAssets[activePuzzle.puzzleAssets[1].puzzleBgAssets[0]]
  })`;

  // Dispatch function for opening and closing UI elements
  const toggleUi = (type) => {
    console.log("fired");
    dispatch(updateUi(type));
  };

  // useLayoutEffect(() => {
  //   const width = gameRef.current.parentNode.scrollWidth;
  //   const height = gameRef.current.parentNode.scrollHeight;
  //   gameManager(gameRef.current, width, height, toggleUi);
  // });
  return (
    <>
      <div style={{ backgroundImage: bg }} className="content">
        <Dialogue dialogue={activePuzzle.puzzleDialogue} />
        {/* <canvas ref={gameRef}></canvas> */}
      </div>
      <div className="hud">
        {content[activeChapter].completedStatus ? (
          <button>Complete Chapter</button>
        ) : (
          <></>
        )}
        <LowerNav activePuzzle={activePuzzle} toggleUi={toggleUi} />
      </div>
      {popUpStatus ? (
        <Popup activePuzzle={activePuzzle} toggleUi={toggleUi} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Puzzle;
