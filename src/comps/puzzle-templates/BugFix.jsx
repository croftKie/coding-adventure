import React, { useRef } from "react";
import BugFixInput from "./bugFix-comps/bugFixInput";
import { useDispatch } from "react-redux";
import { images } from "../../utils/images";
import {
  animator,
  isPathComplete,
  resetAnimationPath,
} from "../../path-animation-library/pathAnimation.js";
const BugFix = ({ activePuzzle, setWin }) => {
  const assetInfo = activePuzzle.data.slice(0, 2);
  const inputInfo = activePuzzle.data.filter((item) => {
    return item.asset_type === 1;
  });
  const inputs = inputInfo.map((input) => {
    return {
      type: input.input_type,
      value: input.input_value,
    };
  });
  const charImg = useRef();
  const goalImg = useRef();
  const dispatch = useDispatch();

  const run = () => {
    const isRunComplete = animator(
      charImg.current,
      inputs,
      500,
      500,
      [],
      () => {
        if (
          isPathComplete(charImg.current, isRunComplete, {
            x: assetInfo[1].x_position,
            y: assetInfo[1].y_position,
          })
        ) {
          setWin(true);
        }
      }
    );
  };
  const reset = () => {
    resetAnimationPath(charImg.current, {
      x: assetInfo[0].x_position,
      y: assetInfo[0].y_position,
    });
  };

  const changeInput = (payload) => {
    console.log(inputInfo[payload[0]].x_position);
    inputInfo[payload[0]].x_position = 10000;
    console.log(inputInfo[payload[0]].x_position);
  };

  console.log(activePuzzle);

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
              transform: `translate(${assetInfo[0].x_position}px, ${assetInfo[0].y_position}px`,
            }}
            src={images.puzzleAssets[assetInfo[0].asset_image]}
            alt=""
          />
          <img
            ref={goalImg}
            style={{
              transform: `translate(${assetInfo[1].x_position}px, ${assetInfo[1].y_position}px`,
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
