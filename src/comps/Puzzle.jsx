// React imports
import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameManager } from "../kaboom/game.js";

// component imports
import Popup from "./Popup";

// store imports
import {
  addNewPuzzle,
  selectT1Puzzle,
  selectT2Puzzle,
  selectT3Puzzle,
} from "../store/features/puzzleSlice.js";

const Puzzle = ({ content, endGame }) => {
  const [currentType, setCurrentType] = useState(null);
  const dispatch = useDispatch();
  const gameRef = useRef();
  const t1Selected = useSelector(selectT1Puzzle);
  const t2Selected = useSelector(selectT2Puzzle);
  const t3Selected = useSelector(selectT3Puzzle);

  const updatePuzzle = (type, puzzleData) => {
    dispatch(addNewPuzzle({ type: type, data: puzzleData }));
    setCurrentType(type.puzzle_type);
  };

  useLayoutEffect(() => {
    gameManager(gameRef.current, 1408, 768, endGame, updatePuzzle);
  }, []);

  return (
    <>
      <div className="content">
        <canvas ref={gameRef}></canvas>
      </div>
      {currentType ? (
        <Popup
          activePuzzle={
            currentType === 1
              ? t1Selected
              : currentType === 2
              ? t2Selected
              : t3Selected
          }
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Puzzle;
