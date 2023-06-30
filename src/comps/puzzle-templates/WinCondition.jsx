import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPuzzleCompleteStatus } from "../../store/features/contentSlice";
import {
  activeChapterSelector,
  activePuzzleSelector,
} from "../../store/features/progressSlice";
import { images } from "../../utils/images";

const WinCondition = ({ setWin, toggleUi }) => {
  const dispatch = useDispatch();
  const activeChapter = useSelector(activeChapterSelector);
  const activePuzzle = useSelector(activePuzzleSelector);

  return (
    <div className="win-condition">
      <div className="topbar"></div>
      <div className="content">
        <div className="info">
          <h1>Congratulations, you beat the INSERT PUZZLE NAME!</h1>
          <p>LITTLE BLURB THAT EXPLAINS MORE OF THE STORY</p>
        </div>
        <div className="win-image">
          <img src={images.puzzleAssets[0]} alt="" />
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              dispatch(
                setPuzzleCompleteStatus({
                  chapterId: activeChapter,
                  puzzleId: activePuzzle,
                })
              );
              toggleUi("popUp");
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
    </div>
  );
};

export default WinCondition;
