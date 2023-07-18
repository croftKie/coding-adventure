import React from "react";
import { activeChapterSelector } from "../../../store/features/progressSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { changeCryptoInput } from "../../../store/features/contentSlice.js";

const Clues = ({ activePuzzle, openPage }) => {
  const dispatch = useDispatch();
  const input = {
    activeChapter: useSelector(activeChapterSelector),
    activePuzzle: activePuzzle.id,
  };
  const onInput = (obj, inputIndex, value, part) => {
    obj["inputIndex"] = inputIndex;
    obj["value"] = value;
    obj["part"] = part;
    console.log(obj);
    dispatch(changeCryptoInput(obj));
  };
  return (
    <>
      <div className="cryptography-input">
        <div className="clues">
          {activePuzzle.clues.map((clue, index) => {
            return <p>{`Part ${index + 1}: ${clue}`}</p>;
          })}
        </div>
      </div>
      <div className="input-values">
        <div className={"inputPartOne"}>
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 0, e.target.value, 0);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 1, e.target.value, 0);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 2, e.target.value, 0);
            }}
            type="text"
          />
        </div>
        <div className={"inputPartTwo"}>
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 0, e.target.value, 1);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 1, e.target.value, 1);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 2, e.target.value, 1);
            }}
            type="text"
          />
        </div>
        <div className={"inputPartThree"}>
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 0, e.target.value, 2);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 1, e.target.value, 2);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(input, 2, e.target.value, 2);
            }}
            type="text"
          />
        </div>
        <h3>Part 1</h3>
        <h3>Part 2</h3>
        <h3>Part 3</h3>
      </div>
    </>
  );
};

export default Clues;
