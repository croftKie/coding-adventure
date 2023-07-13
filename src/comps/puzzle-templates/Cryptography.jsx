import React, { useState } from "react";
import Clues from "./cryptography-comps/Clues.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addCryptoResults,
  resetCryptoInput,
  setPuzzleCompleteStatus,
} from "../../store/features/contentSlice.js";
import { activeChapterSelector } from "../../store/features/progressSlice.js";

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
            <p>
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[0][0]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[0][0]}
              </span>{" "}
              -{" "}
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[0][1]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[0][1]}
              </span>{" "}
              -{" "}
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[0][2]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[0][2]}
              </span>
            </p>
          </div>
          <div className="part-two">
            <p>
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[1][0]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[1][0]}
              </span>{" "}
              -{" "}
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[1][1]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[1][1]}
              </span>{" "}
              -{" "}
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[1][2]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[1][2]}
              </span>
            </p>
          </div>
          <div className="part-three">
            <p>
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[2][0]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[2][0]}
              </span>{" "}
              -{" "}
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[2][1]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[2][1]}
              </span>{" "}
              -{" "}
              <span
                className={
                  activePuzzle.results.length > 0
                    ? activePuzzle.results[2][2]
                      ? "green"
                      : "red"
                    : "none"
                }>
                {activePuzzle.inputs[2][2]}
              </span>
            </p>
          </div>
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
          className="reset">
          Reset
        </button>
        <button onClick={checkWin} className="run">
          Run
        </button>
      </div>
    </div>
  );
};

export default Cryptography;
