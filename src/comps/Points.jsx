import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPuzzle, currentChapterSelector } from '../store/features/progressSlice';
import { chaptersSelector } from '../store/features/chaptersSlice';

const Points = ({puzzles, openPopup}) => {
    const dispatch = useDispatch();
    const chapters = useSelector(chaptersSelector);
    const currentChapters = useSelector(currentChapterSelector)


      const assignPuzzleId = (id)=>{
        dispatch(changeCurrentPuzzle(id));
      }

    return ( 
        <div className="points">
            {chapters[currentChapters].points.map((point, index)=>{
              return (
                <div style={{top:point.top, left:point.left}} onClick={()=>{assignPuzzleId(chapters[currentChapters].chapterPuzzles[index]); openPopup()}} className="point"></div>
              )
            })}
        </div>
     );
}
 
export default Points;