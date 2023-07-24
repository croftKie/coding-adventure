import React, { useState } from "react";
import Clues from "./cryptography-comps/Clues.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addCryptoResults,
  resetCryptoInput,
  setPuzzleCompleteStatus,
} from "../../store/features/contentSlice.js";
import { activeChapterSelector } from "../../store/features/progressSlice.js";
import { images } from "../../utils/images.js";

const Cryptography = ({ setWin, activePuzzle }) => {
  const [openPage, setOpenPage] = useState(0);
  const dispatch = useDispatch();
  const activeChapter = useSelector(activeChapterSelector);

  const checkWin = () => {
    const results = activePuzzle.winCondition.map((condition, i) => {
      return condition.map((figure, j) => {
        return figure === activePuzzle.inputs[i][j];
      });
    });
    const test = results.filter((step) => {
      return step.includes(false);
    });
    if (test.length === 0) {
      setWin(true);
    }
    dispatch(
      addCryptoResults({
        activeChapter: activeChapter,
        activePuzzle: activePuzzle.id,
        result: results,
      })
    );
    dispatch(
      setPuzzleCompleteStatus({
        chapterId: activeChapter,
        puzzleId: activePuzzle.id,
      })
    );
  };

  return (
    <div className="cryptography-puzzle">
      <div className="content">
        <div className="input">
          <Clues activePuzzle={activePuzzle} openPage={openPage} />
        </div>
        <div className="result">
          <div className="part-one">
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[0][0]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[0][1]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[0][2]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
          </div>
          <div className="part-two">
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[1][0]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[1][1]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[1][2]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
          </div>
          <div className="part-three">
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[2][0]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[2][1]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                activePuzzle.results.length > 0
                  ? activePuzzle.results[2][2]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
          </div>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              dispatch(
                resetCryptoInput({
                  activeChapter: activeChapter,
                  activePuzzle: activePuzzle.id,
                })
              );
            }}
            className="reset"
          >
            Reset
          </button>
          <button onClick={checkWin} className="run">
            Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cryptography;
