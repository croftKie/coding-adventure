import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addNewPuzzle,
  selectPuzzleMakerPuzzles,
} from "../../store/features/puzzleMakerSlice";

import InstructionForm from "./form-comps/InstructionForm.jsx";
import BugFixForm from "./form-comps/BugFixForm.jsx";
import CryptoForm from "./form-comps/CryptoForm.jsx";

const Creator = () => {
  const [form, setForm] = useState(0);
  const [puzzleType, setPuzzleType] = useState();
  const dispatch = useDispatch();
  const barRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {};
    Array.from(e.target.form).forEach((item, i) => {
      if (
        item.type !== "reset" &&
        item.type !== "submit" &&
        item.localName !== "button"
      ) {
        if (item.type === "file") {
          console.log(item.files);
        } else {
          obj[item.name] = item.value;
        }
      }
    });
    dispatch(addNewPuzzle(obj));
  };

  const switchBarStyling = (option) => {
    Array.from(barRef.current.children).forEach((child, i) => {
      child.classList.remove("active");
      if (child.classList.contains(option)) {
        child.classList.add("active");
      }
    });
  };

  return (
    <div className={"creator"}>
      <div ref={barRef} className={"puzzleTypePicker"}>
        <div
          onClick={() => {
            setForm(0);
            switchBarStyling("instruction");
            setPuzzleType("instruction");
          }}
          className={"card instruction active"}>
          <h2>Instruction Puzzle</h2>
        </div>
        <div
          onClick={() => {
            setForm(1);
            switchBarStyling("crypto");
            setPuzzleType("crypto");
          }}
          className={"card crypto"}>
          <h2>Crack the Code Puzzle</h2>
        </div>
        <div
          onClick={() => {
            setForm(2);
            switchBarStyling("bugFix");
            setPuzzleType("bugFix");
          }}
          className={"card bugFix"}>
          <h2>Fix the Bug Puzzle</h2>
        </div>
      </div>
      <div className={"puzzleCreatorForm"}>
        {form === 0 ? (
          <InstructionForm
            puzzleType={puzzleType}
            handleSubmit={handleSubmit}
          />
        ) : form === 1 ? (
          <CryptoForm puzzleType={puzzleType} handleSubmit={handleSubmit} />
        ) : form === 2 ? (
          <BugFixForm puzzleType={puzzleType} handleSubmit={handleSubmit} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Creator;
