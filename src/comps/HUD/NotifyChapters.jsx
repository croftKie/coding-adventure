import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSelector } from "react-redux";
import { chaptersSelector } from "../../store/features/chaptersSlice";
import { currentChapterSelector } from "../../store/features/progressSlice";
import close from '../../assets/close.png';

const NotifyChapters = () => {
    const chapters = useSelector(chaptersSelector);
    const currentChapter = useSelector(currentChapterSelector)
    const notifyRef = useRef();
    useLayoutEffect(()=>{
        gsap.fromTo(notifyRef.current, {top: 0, duration: 1}, {top: -200, delay: 5, duration: 1})
    },[])

    return ( 
        <div ref={notifyRef} className="notify-chapters">
            <div className="topbar"><img src={close} alt="" /></div>
            <h1>{chapters[currentChapter].chapterName}</h1>
            <p>{chapters[currentChapter].chapterDescription}</p>
        </div>
     );
}
 
export default NotifyChapters;