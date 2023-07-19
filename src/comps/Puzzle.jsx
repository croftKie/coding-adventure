// React imports
import React, { useLayoutEffect, useRef } from "react";
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
import { changeCurrentPuzzle } from "../store/features/progressSlice.js";

const Puzzle = ({ content, activePuzzle, activeChapter }) => {
  const dispatch = useDispatch();
  const gameRef = useRef();
  const popUpStatus = useSelector(popUpSelector);

  // concat dynamic image data for component styling
  const bg = `url(${
    images.bgAssets[activePuzzle.puzzleAssets[1].puzzleBgAssets[0]]
  })`;

  // Dispatch function for opening and closing UI elements
  const toggleUi = (type) => {
    dispatch(updateUi(type));
  };
  const changeActivePuzzle = () => {
    dispatch(changeCurrentPuzzle(activePuzzle.id + 1));
  };

  useLayoutEffect(() => {
    const width = gameRef.current.parentNode.scrollWidth;
    const height = gameRef.current.parentNode.scrollHeight;
    gameManager(gameRef.current, width, height, toggleUi, changeActivePuzzle);
  });

  return (
    <>
      <div style={{ backgroundImage: bg }} className="content">
        {/* <Dialogue dialogue={activePuzzle.puzzleDialogue} /> */}
        <canvas ref={gameRef}></canvas>;
      </div>
      <div className="hud">
        {content[activeChapter].completedStatus ? (
          <button>Complete Chapter</button>
        ) : (
          <></>
        )}
        {/* <LowerNav activePuzzle={activePuzzle} toggleUi={toggleUi} /> */}
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
