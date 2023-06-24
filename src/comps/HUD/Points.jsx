import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPuzzle, currentChapterSelector } from '../../store/features/progressSlice';
import { chaptersSelector } from '../../store/features/chaptersSlice';
import { gsap } from 'gsap';

const Points = ({puzzles, openPopup}) => {
    const dispatch = useDispatch();
    const chapters = useSelector(chaptersSelector);
    const currentChapters = useSelector(currentChapterSelector)

      const assignPuzzleId = (id)=>{
        dispatch(changeCurrentPuzzle(id));
      }

      const onEnter = (e)=>{
        gsap.to(e.target, {backgroundColor: "#9AD6FF", scale: 1.2, duration: 0.1})
      }
      const onLeave = (e)=>{
        gsap.to(e.target, {backgroundColor: "#5AA9E6", scale: 1, duration: 0.1})
      }
    return ( 
        <div className="points">
            {chapters[currentChapters].points.map((point, index)=>{
              return (
                <div 
                  style={{top:point.top, left:point.left}} 
                  onClick={()=>{assignPuzzleId(chapters[currentChapters].chapterPuzzles[index]); openPopup()}} 
                  className="point"
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}></div>
              )
            })}
        </div>
     );
}
 
export default Points;