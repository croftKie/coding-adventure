import React, { useState, useRef } from "react";
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
} from "../../path-animation-library/pathAnimation";
import { images } from "../../utils/images";
import ResetCondition from "./ResetCondition";
import { setPuzzleCompleteStatus } from "../../store/features/contentSlice";

const Instructions = ({ activePuzzle, setWin }) => {
  const [inputs, setInputs] = useState([]);
  const [toggleResetScreen, setToggleResetScreen] = useState(false);
  const resultRef = useRef();
  const tutorialRef = useRef();
  const instructionInputs = useSelector(instructionInputSelector);
  const dispatch = useDispatch();

  const pushInputs = (type) => {
    setInputs([...inputs, type]);
  };
  const reset = () => {
    if (toggleResetScreen) {
      setToggleResetScreen(false);
    }
    dispatch(clearInstruction());
    setInputs([]);
    resetAnimationPath(
      resultRef.current.children[0],
      puzzleAssets[0][0].startLocation[0]
    );
  };
  const run = () => {
    const assets = resultRef.current.children;
    const isRunComplete = animator(
      assets[0],
      instructionInputs,
      500,
      500,
      [puzzleAssetsCopy.slice(2)],
      () => {
        if (isRunComplete.hitStatus) {
          setToggleResetScreen(true);
        }
        if (
          isPathComplete(
            assets[0],
            isRunComplete,
            puzzleAssets[0][0].endLocation
          )
        ) {
          setWin(true);
        }
      }
    );
  };

  console.log(activePuzzle);

  return (
    <div className="instructions-puzzle">
      <div className="content">
        {toggleResetScreen ? <ResetCondition reset={reset} /> : <></>}
        <div className="input">
          <InstructionInput inputs={inputs} />
        </div>
        <div className="result-container">
          <div
            ref={resultRef}
            style={{
              backgroundImage: `url(${
                images.puzzleAssets.backgrounds[
                  activePuzzle.type.puzzle_bg_asset
                ]
              })`,
            }}
            className="result"
          >
            {activePuzzle.data.map((assetRef) => {
              return (
                <div
                  style={{
                    transform: `translate(${assetRef.x_position}px, ${assetRef.y_position}px`,
                  }}
                >
                  <img src={images.puzzleAssets[assetRef.asset_image]} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="controls">
          <img
            ref={tutorialRef}
            className="tutorial"
            src={images.uiAssets.info}
            alt=""
          />
          <div className="input-buttons">
            <div className="choices">
              <button
                onClick={() => {
                  pushInputs(1);
                }}
              >
                <img src={images.puzzleAssets.ui.up} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(2);
                }}
              >
                <img src={images.puzzleAssets.ui.right} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(3);
                }}
              >
                <img src={images.puzzleAssets.ui.down} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(4);
                }}
              >
                <img src={images.puzzleAssets.ui.left} alt="" />
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
