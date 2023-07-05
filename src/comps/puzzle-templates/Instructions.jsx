import React, { useState, useEffect, useRef } from "react";
import InstructionInput from "./instructions-comps/InstructionInput";
import {
  instructionInputSelector,
  clearInstruction,
} from "../../store/features/currentInput";
import { useSelector, useDispatch } from "react-redux";
import {
  isPathComplete,
  animator,
  resetAnimationPath,
  timelineComplete,
} from "../../path-animation-library/pathAnimation";
import { activeChapterSelector } from "../../store/features/progressSlice";
import { images } from "../../utils/images";

const Instructions = ({ activePuzzle, setWin }) => {
  const [inputs, setInputs] = useState([]);
  const charImg = useRef();
  const goalImg = useRef();
  const resultRef = useRef();
  const instructionInputs = useSelector(instructionInputSelector);
  const activeChapter = useSelector(activeChapterSelector);
  const dispatch = useDispatch();
  const startLocs = activePuzzle.startLocations;
  const assetTypes = Object.keys(activePuzzle.assets);
  const assetRefs = activePuzzle.assets.puzzleAssets;

  const pushInputs = (type) => {
    setInputs([...inputs, type]);
  };
  const reset = () => {
    dispatch(clearInstruction());
    setInputs([]);
    resetAnimationPath(charImg.current, startLocs[0]);
  };
  const run = () => {
    const isRunComplete = animator(
      charImg.current,
      instructionInputs,
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

  return (
    <div className="instructions-puzzle">
      <div className="content">
        <div className="input">
          <InstructionInput inputs={inputs} />
          <div className="input-buttons">
            <div className="choices">
              <button
                onClick={() => {
                  pushInputs(1);
                }}
              >
                <img src={images.uiAssets[11]} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(2);
                }}
              >
                <img src={images.uiAssets[10]} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(3);
                }}
              >
                <img src={images.uiAssets[12]} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(4);
                }}
              >
                <img src={images.uiAssets[13]} alt="" />
              </button>
            </div>
            <div className="logic">
              <button
                onClick={() => {
                  pushInputs(5);
                }}
              >
                Repeat
              </button>
              <button
                onClick={() => {
                  pushInputs(6);
                }}
              >
                End
              </button>
            </div>
          </div>
        </div>
        <div className="result-container">
          <div
            style={{ backgroundImage: `url(${images[assetTypes[1]][0]})` }}
            ref={resultRef}
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
          <div className="buttons">
            <button onClick={reset} className="reset">
              Reset
            </button>
            <button onClick={run} className="run">
              Run
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
