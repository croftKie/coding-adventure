import React from "react";
import { images } from "../../utils/images";
import { setPuzzleCompletedStatus } from "../../utils/fetchData";

const WinCondition = ({ activePuzzle, setWin }) => {
  return (
    <div className="win-condition">
      <div className="topbar"></div>
      <div className="content">
        <div className="info">
          <h1>Congratulations, you completed the puzzle!</h1>
        </div>
        <div className="win-image">
          <img src={images.puzzleAssets.byte_left} alt="" />
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              setWin(false);
              setPuzzleCompletedStatus(activePuzzle.type.puzzle_id);
            }}
          >
            Mark as Complete
          </button>
          <button
            onClick={() => {
              setWin(false);
            }}
          >
            Improve your answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinCondition;
