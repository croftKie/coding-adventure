import React, { useState, useEffect, useRef } from "react";
import BugFixInput from "./bugFix-comps/bugFixInput";
import { useSelector, useDispatch } from "react-redux";
import { images } from "../../utils/images";
import {
  animator,
  isPathComplete,
  resetAnimationPath,
} from "../../path-animation-library/pathAnimation.js";
import { clearInstruction } from "../../store/features/currentInput.js";
import {
  changeBugFixInstructions,
  resetBugFixInstructions,
} from "../../store/features/contentSlice.js";
import { activeChapterSelector } from "../../store/features/progressSlice.js";

const BugFix = ({ activePuzzle, setWin }) => {
  const assetTypes = Object.keys(activePuzzle.assets);
  const assetRefs = activePuzzle.assets.puzzleAssets;
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
      () => {
        if (
          isPathComplete(
            charImg.current,
            isRunComplete,
            activePuzzle.endLocations[0]
          )
        ) {
          setWin(true);
          // dispatch(setPuzzleCompleteStatus({ chapterId: 0, puzzleId: 0 }));
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

  console.log(activePuzzle.inputs);

  return (
    <div className="bugFix-puzzle">
      <div className="content">
        <div className="input">
          <BugFixInput changeInput={changeInput} inputs={activePuzzle.inputs} />
        </div>
        <div
          style={{ backgroundImage: `url(${images[assetTypes[1]][0]})` }}
          className="result"
        >
          <img
            ref={charImg}
            style={{
              transform: `translate(${startLocs[0].x}px, ${startLocs[0].y}px`,
            }}
            src={images[assetTypes[0]][assetRefs[0]]}
            alt=""
          />
          <img
            ref={goalImg}
            style={{
              transform: `translate(${startLocs[1].x}px, ${startLocs[1].y}px`,
            }}
            src={images[assetTypes[0]][assetRefs[1]]}
            alt=""
          />
        </div>
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
  );
};

export default BugFix;
