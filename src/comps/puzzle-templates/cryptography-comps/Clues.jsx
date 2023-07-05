import React from "react";
import { activeChapterSelector } from "../../../store/features/progressSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { changeCryptoInput } from "../../../store/features/contentSlice.js";

const Clues = ({ activePuzzle, openPage }) => {
  const dispatch = useDispatch();
  const input = {
    activeChapter: useSelector(activeChapterSelector),
    activePuzzle: activePuzzle.id,
    openPage: openPage,
  };
  const onInput = (obj, inputIndex, value) => {
    obj["inputIndex"] = inputIndex;
    obj["value"] = value;
    dispatch(changeCryptoInput(obj));
  };
  return (
    <>
      <div className="cryptography-input">
        <div className="clues">
          <p>{activePuzzle.clues[openPage]}</p>
        </div>
      </div>
      <div className="input-values">
        <input
          placeholder={activePuzzle.inputs[openPage][0]}
          onBlur={(e) => {
            onInput(input, 0, e.target.value);
          }}
          type="text"
        />
        <input
          placeholder={activePuzzle.inputs[openPage][1]}
          onBlur={(e) => {
            onInput(input, 1, e.target.value);
          }}
          type="text"
        />
        <input
          placeholder={activePuzzle.inputs[openPage][2]}
          onBlur={(e) => {
            onInput(input, 2, e.target.value);
          }}
          type="text"
        />
      </div>
    </>
  );
};

export default Clues;
