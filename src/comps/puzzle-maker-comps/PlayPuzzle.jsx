import React from "react";

const PlayPuzzle = ({ selectedPuzzle }) => {
  console.log(selectedPuzzle);
  return (
    <div>
      <h1>This is the puzzle page for your puzzle!</h1>
      <h2>{selectedPuzzle.puzzleName}</h2>
      <h2>{selectedPuzzle.puzzleDescription}</h2>
    </div>
  );
};

export default PlayPuzzle;
