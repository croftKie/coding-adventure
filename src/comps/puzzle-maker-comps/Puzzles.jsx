import React from "react";
import { images } from "../../utils/images.js";
import { selectPuzzleMakerPuzzles } from "../../store/features/puzzleMakerSlice.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import PlayPuzzle from "./PlayPuzzle.jsx";


const Puzzles = () => {
  const puzzles = useSelector(selectPuzzleMakerPuzzles);
  const [openPuzzle, setOpenPuzzle] = useState({status : false, id: 0});

  const [selectedPuzzle] = puzzles.filter((puzzle)=>{
    return puzzle.puzzleName === openPuzzle.id;
  })

  if(openPuzzle.status){
    return <PlayPuzzle selectedPuzzle={selectedPuzzle}/>
  }
  
  return (
    <div className="puzzle-manager">
      <div className="puzzle-list">
        {puzzles.map((puzzle)=>{
          return (
            <div className="card">
              <h3>{puzzle.puzzleName}</h3>
              <p>{puzzle.puzzleDescription}</p>
              <img onClick={()=>{setOpenPuzzle({status: true, id: puzzle.puzzleName})}} src={images.uiAssets[12]} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Puzzles;
