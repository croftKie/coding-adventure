import React, { useState, useEffect } from "react";
import BugFixInput from "./bugFix-comps/bugFixInput";
import { useSelector, useDispatch } from "react-redux";
import { images } from "../../utils/images";

const BugFix = ({ activePuzzle, setWin }) => {
  const [inputs, setInputs] = useState([]);
  const assetTypes = Object.keys(activePuzzle.assets);
  const assetRefs = activePuzzle.assets.puzzleAssets;
  const startLocs = activePuzzle.startLocations;

  const pushInputs = (type) => {
    setInputs([...inputs, type]);
  };

  console.log(activePuzzle);

  return (
    <div className="bugFix-puzzle">
      <div className="content">
        <div className="input">
          <BugFixInput inputs={activePuzzle.inputs} />
        </div>
        <div
          style={{ backgroundImage: `url(${images[assetTypes[1]][0]})` }}
          className="result"
        >
          <img
            // ref={charImg}
            style={{
              transform: `translate(${startLocs[0].x}px, ${startLocs[0].y}px`,
            }}
            src={images[assetTypes[0]][assetRefs[0]]}
            alt=""
          />
          <img
            // ref={goalImg}
            style={{
              transform: `translate(${startLocs[1].x}px, ${startLocs[1].y}px`,
            }}
            src={images[assetTypes[0]][assetRefs[1]]}
            alt=""
          />
        </div>
      </div>
      <div className="buttons">
        <button className="reset">Reset</button>
        <button className="run">Run</button>
      </div>
    </div>
  );
};

export default BugFix;
