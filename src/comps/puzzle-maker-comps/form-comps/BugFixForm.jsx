import React from "react";

const BugFixForm = ({ puzzleType, handleSubmit }) => {
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
      <h2>Bug Fix Puzzle Options</h2>
      <div className={"instructionFormElements"}>
        <div>
          <label htmlFor={"firstChar"}>Your Character: </label>
          <input name={"firstChar"} type={"file"}></input>
        </div>
        <div>
          <label htmlFor={"locX"}>Location (X Axis): </label>
          <input name={"locX"} type={"number"}></input>
        </div>
        <div>
          <label htmlFor={"secondChar"}>Goal Image: </label>
          <input name={"PuzzleType"} type={"file"}></input>
        </div>
        <div>
          <label htmlFor={"locY"}>Location (Y Axis): </label>
          <input name={"locY"} type={"number"}></input>
        </div>
        <div>
          <label htmlFor={"obstacleOne"}>Obstacle One </label>
          <input name={"obstacleOne"} type={"file"}></input>
        </div>
        <div>
          <label htmlFor={"obstacleOneLoc"}>Location (Obstacle One): </label>
          <input name={"obstacleOneLoc"} type={"number"}></input>
        </div>
        <div>
          <label htmlFor={"obstacleTwo"}>Obstacle Two </label>
          <input name={"obstacleTwo"} type={"file"}></input>
        </div>
        <div>
          <label htmlFor={"obstacletwoLoc"}>Location (Obstacle Two): </label>
          <input name={"obstacleTwoLoc"} type={"number"}></input>
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

export default BugFixForm;
