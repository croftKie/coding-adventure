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
  const typeInfo = activePuzzle.type;
  const assetInfo = activePuzzle.data.slice(0, 2);
  const inputInfo = activePuzzle.data.filter((item) => {
    return item.asset_type === 1;
  });

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

  console.log(activePuzzle.type.puzzle_bg_asset);
  return (
    <div className="bugFix-puzzle">
      <div className="content">
        <div className="input">
          <BugFixInput changeInput={changeInput} inputs={inputInfo} />
        </div>
        <div
          style={{
            backgroundImage: `url(${
              images.puzzleAssets.backgrounds[activePuzzle.type.puzzle_bg_asset]
            })`,
          }}
          className="result"
        >
          <img
            ref={charImg}
            style={{
              transform: `translate(${assetInfo[0].x_position}px, ${assetInfo[1].y_position}px`,
            }}
            src={images.puzzleAssets[assetInfo[0].asset_image]}
            alt=""
          />
          <img
            ref={goalImg}
            style={{
              transform: `translate(${assetInfo[1].x_position}px, ${assetInfo[1].y_positio}px`,
            }}
            src={images.puzzleAssets[assetInfo[1].asset_image]}
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
