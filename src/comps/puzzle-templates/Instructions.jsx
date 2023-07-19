import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { toast } from "react-toastify";
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
import { activeChapterSelector } from "../../store/features/progressSlice";
import { images } from "../../utils/images";
import ResetCondition from "./ResetCondition";
import Msg from "../tutorial/TutModal";
import { instructionPuzzleTutorialSelector } from "../../store/features/tutorialSlice";

const Instructions = ({ activePuzzle, setWin }) => {
  const [inputs, setInputs] = useState([]);
  const [toggleResetScreen, setToggleResetScreen] = useState(false);
  const resultRef = useRef();
  const tutorialRef = useRef();
  const instructionInputs = useSelector(instructionInputSelector);
  const activeChapter = useSelector(activeChapterSelector);
  const instructionPuzzleTutorial = useSelector(
    instructionPuzzleTutorialSelector
  );
  const dispatch = useDispatch();
  const puzzleAssets = activePuzzle.puzzleAssets;
  const puzzleAssetsCopy = [...puzzleAssets[0]];

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
  const showToastMessage = () => {
    toast(<Msg tutorial={instructionPuzzleTutorial} />, { autoClose: false });
  };
  useLayoutEffect(() => {
    Array.from(resultRef.current.children).forEach((child) => {
      gsap.to(child, { duration: 0.5, scale: 1.2, repeat: 4, yoyo: true });
    });
  }, []);
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
                images.puzzleBgAssets[puzzleAssets[1].puzzleBgAssets[1]]
              })`,
            }}
            className="result">
            {puzzleAssets[0].map((assetRef) => {
              return (
                <img
                  style={{
                    transform: `translate(${assetRef.startLocation[0].x}px, ${assetRef.startLocation[0].y}px`,
                  }}
                  src={images.puzzleAssets[assetRef.asset]}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div className="controls">
          <img
            ref={tutorialRef}
            onClick={showToastMessage}
            className="tutorial"
            src={images.uiAssets[4]}
            alt=""
          />
          <div className="input-buttons">
            <div className="choices">
              <button
                onClick={() => {
                  pushInputs(1);
                }}>
                <img src={images.uiAssets[11]} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(2);
                }}>
                <img src={images.uiAssets[10]} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(3);
                }}>
                <img src={images.uiAssets[12]} alt="" />
              </button>
              <button
                onClick={() => {
                  pushInputs(4);
                }}>
                <img src={images.uiAssets[13]} alt="" />
              </button>
            </div>
            <div className="logic">
              <button
                onClick={() => {
                  pushInputs(5);
                }}>
                Repeat
              </button>
              <button
                onClick={() => {
                  pushInputs(6);
                }}>
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
