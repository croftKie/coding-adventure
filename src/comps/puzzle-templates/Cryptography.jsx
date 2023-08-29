import React, { useState } from "react";
import Clues from "./cryptography-comps/Clues.jsx";
import { images } from "../../utils/images.js";

const Cryptography = ({ setWin, activePuzzle }) => {
  const [openPage, setOpenPage] = useState(0);
  const [attemptMade, setAttemptMade] = useState(false);
  const arr = [];
  const compareArr = [];
  activePuzzle.data.forEach((result) => {
    arr.push(result.user_input.split(""));
    compareArr.push(result.win_condition.split(""));
  });

  const results = [];
  arr.forEach((item, index) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === compareArr[index][i]) {
        results.push(true);
      } else {
        results.push(false);
      }
    }
  });

  const checkWin = () => {
    if (
      !results.find((el) => {
        return el === false;
      })
    ) {
      setWin(true);
    }
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
                attemptMade
                  ? results[0]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                attemptMade
                  ? results[1]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                attemptMade
                  ? results[2]
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
                attemptMade
                  ? results[3]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                attemptMade
                  ? results[4]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                attemptMade
                  ? results[5]
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
                attemptMade
                  ? results[6]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                attemptMade
                  ? results[7]
                    ? images.puzzleAssets.ui.light_success
                    : images.puzzleAssets.ui.light_fail
                  : images.puzzleAssets.ui.light_off
              }
              alt=""
            />
            <img
              src={
                attemptMade
                  ? results[8]
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
              setAttemptMade(true);
              checkWin();
            }}
            className="run"
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cryptography;
