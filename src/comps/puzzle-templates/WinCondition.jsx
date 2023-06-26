import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPuzzleCompleteStatus } from "../../store/features/contentSlice";

const WinCondition = ({ setWin }) => {
  const dispatch = useDispatch();
  return (
    <div className="win-condition">
      <div className="topbar"></div>
      <div className="content">
        <h1>Congratulations!</h1>
        <button
          onClick={() => {
            dispatch(setPuzzleCompleteStatus({ chapterId: 0, puzzleId: 0 }));
            setWin(false);
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
  );
};

export default WinCondition;
