import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrentPuzzle } from '../store/features/progressSlice';

const Points = ({puzzles, openPopup}) => {
    const dispatch = useDispatch();


      const assignPuzzleId = (id)=>{
        dispatch(changeCurrentPuzzle(id));
      }

    return ( 
        <div className="points">
            <div onClick={()=>{assignPuzzleId(puzzles[0].id); openPopup()}} className="point one"></div>
            <div onClick={()=>{assignPuzzleId(puzzles[1].id); openPopup()}} className="point two"></div>
            <div onClick={()=>{assignPuzzleId(puzzles[2].id); openPopup()}} className="point three"></div>
        </div>
     );
}
 
export default Points;