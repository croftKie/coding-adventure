import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUserInput } from "../../../store/features/puzzleSlice.js";

const Clues = ({ activePuzzle, openPage }) => {
  const partOneRef = useRef();
  const partTwoRef = useRef();
  const partThreeRef = useRef();
  const dispatch = useDispatch();

  const onInput = (index, ref) => {
    const results = Array.from(ref.current.children).map((child) => {
      return child.value || 0;
    });
    dispatch(addUserInput({ input: index, value: results.join("") }));
  };
  return (
    <>
      <div className="cryptography-input">
        <div className="clues">
          {activePuzzle.data.map((clue) => {
            return <p>{`Part ${clue.clue_number}: ${clue.clue_text}`}</p>;
          })}
        </div>
      </div>
      <div className="input-values">
        <div ref={partOneRef} className={"inputPartOne"}>
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(0, partOneRef);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(0, partOneRef);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(0, partOneRef);
            }}
            type="text"
          />
        </div>
        <div ref={partTwoRef} className={"inputPartTwo"}>
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(1, partTwoRef);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(1, partTwoRef);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(1, partTwoRef);
            }}
            type="text"
          />
        </div>
        <div ref={partThreeRef} className={"inputPartThree"}>
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(2, partThreeRef);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(2, partThreeRef);
            }}
            type="text"
          />
          <input
            placeholder={0}
            onBlur={(e) => {
              onInput(2, partThreeRef);
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
