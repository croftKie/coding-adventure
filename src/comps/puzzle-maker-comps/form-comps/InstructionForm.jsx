import React from "react";

const InstructionForm = ({ puzzleType, handleSubmit }) => {
  return (
    <form>
      <h2>Puzzle Details</h2>
      <div className={"commonFormElements"}>
        <label htmlFor={"puzzleName"}>Puzzle Name: </label>
        <input name={"puzzleName"} type={"text"}></input>
        <label htmlFor={"PuzzleType"}>Puzzle Type: </label>
        <input name={"PuzzleType"} type={"text"} value={puzzleType}></input>
        <label htmlFor={"puzzleDescription"}>Puzzle Description: </label>
        <textarea name="puzzleDescription" rows="4" cols="50"></textarea>
      </div>
      <h2>Instruction Puzzle Options</h2>
      <div className={"instructionFormElements"}>
        <div className="puzzleBackground">
          <label htmlFor={"bg"}>Background Image: </label>
          <input name={"bg"} type={"file"}></input>
        </div>
        <div className="charOne">
          <div>
            <label htmlFor={"firstChar"}>Your Character: </label>
            <input name={"firstChar"} type={"file"}></input>
          </div>
          <div>
            <label htmlFor={"locX-1"}>Location (X Axis): </label>
            <input name={"locX-1"} type={"number"}></input>
          </div>
          <div>
            <label htmlFor={"locY-1"}>Location (Y Axis): </label>
            <input name={"locY-1"} type={"number"}></input>
          </div>
        </div>
        <div className="charTwo">
          <div>
            <label htmlFor={"secondChar"}>Your Goal: </label>
            <input name={"secondChar"} type={"file"}></input>
          </div>
          <div>
            <label htmlFor={"locX-2"}>Location (X Axis): </label>
            <input name={"locX-2"} type={"number"}></input>
          </div>
          <div>
            <label htmlFor={"locY-2"}>Location (Y Axis): </label>
            <input name={"locY-2"} type={"number"}></input>
          </div>
        </div>
        <div className="ob-1">
          <div>
            <label htmlFor={"obstacle-1"}>First Obstacle: </label>
            <input name={"obstacle-1"} type={"file"}></input>
          </div>
          <div>
            <label htmlFor={"locX-3"}>Location (X Axis): </label>
            <input name={"locX-3"} type={"number"}></input>
          </div>
          <div>
            <label htmlFor={"locY-4"}>Location (Y Axis): </label>
            <input name={"locY-4"} type={"number"}></input>
          </div>
        </div>
        <div className="ob-2">
          <div>
            <label htmlFor={"obstacle-2"}>Second Obstacle: </label>
            <input name={"obstacle-2"} type={"file"}></input>
          </div>
          <div>
            <label htmlFor={"locX-5"}>Location (X Axis): </label>
            <input name={"locX-5"} type={"number"}></input>
          </div>
          <div>
            <label htmlFor={"locY-6"}>Location (Y Axis): </label>
            <input name={"locY-6"} type={"number"}></input>
          </div>
        </div>
      </div>
      <div className={"buttons"}>
        <input type="reset" />
        <input onClick={handleSubmit} type="submit" value="Save Puzzle" />
        <button>Preview</button>
      </div>
    </form>
  );
};

export default InstructionForm;
