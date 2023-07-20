import React, { useState, useEffect, useRef } from "react";
import BugFixInput from "./bugFix-comps/bugFixInput";
import { useSelector, useDispatch } from "react-redux";
import { images } from "../../utils/images";
import {
  animator,
  isPathComplete,
  resetAnimationPath,
} from "../../path-animation-library/pathAnimation.js";
import {
  changeBugFixInstructions,
  resetBugFixInstructions,
  setPuzzleCompleteStatus,
} from "../../store/features/contentSlice.js";
import { activeChapterSelector } from "../../store/features/progressSlice.js";
const BugFix = ({ activePuzzle, setWin }) => {
  const puzzleAssets = activePuzzle.puzzleAssets;
  const startLocs = activePuzzle.startLocations;
  const charImg = useRef();
  const goalImg = useRef();
  const activeChapter = useSelector(activeChapterSelector);
  const dispatch = useDispatch();
  const run = () => {
    const isRunComplete = animator(
      charImg.current,
      activePuzzle.inputs,
      500,
      500,
      [],
      () => {
        if (
          isPathComplete(
            charImg.current,
            isRunComplete,
            activePuzzle.endLocations[0]
          )
        ) {
          setWin(true);
          dispatch(
            setPuzzleCompleteStatus({
              chapterId: activeChapter,
              puzzleId: activePuzzle.id,
            })
          );
        }
      }
    );
  };
  const reset = () => {
    dispatch(
      resetBugFixInstructions({
        chapterIndex: activeChapter,
        puzzleIndex: activePuzzle.id,
      })
    );
    resetAnimationPath(charImg.current, startLocs[0]);
  };

  const changeInput = (payload) => {
    dispatch(
      changeBugFixInstructions({
        chapterIndex: activeChapter,
        puzzleIndex: activePuzzle.id,
        inputToChange: payload[0],
        change: payload[1],
      })
    );
  };

  return (
    <div className="bugFix-puzzle">
      <div className="content">
        <div className="input">
          <BugFixInput changeInput={changeInput} inputs={activePuzzle.inputs} />
        </div>
        <div
          style={{
            backgroundImage: `url(${
              images.puzzleBgAssets[puzzleAssets[1].puzzleBgAssets[1]]
            })`,
          }}
          className="result">
          <img
            ref={charImg}
            style={{
              transform: `translate(${startLocs[0].x}px, ${startLocs[0].y}px`,
            }}
            src={images.puzzleAssets[puzzleAssets[1].puzzleAssets[0]]}
            alt=""
          />
          <img
            ref={goalImg}
            style={{
              transform: `translate(${startLocs[1].x}px, ${startLocs[1].y}px`,
            }}
            src={images.puzzleAssets[puzzleAssets[1].puzzleAssets[1]]}
            alt=""
          />
        </div>
        <div className="buttons">
          <button className="reset" onClick={reset}>
            Reset
          </button>
          <button className="run" onClick={run}>
            Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default BugFix;
