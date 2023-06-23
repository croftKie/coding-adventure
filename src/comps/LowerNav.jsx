import React from "react";
import googleClassroom from '../assets/google-classroom.png'
import gear from '../assets/gear.png';
import podium from '../assets/podium.png';
import process from '../assets/process.png';
import chat from '../assets/chat.png';
import close from '../assets/close.png';

import { useSelector } from "react-redux";
import { chaptersSelector } from "../store/features/chaptersSlice";
import { currentChapterSelector } from "../store/features/progressSlice";

const LowerNav = ({openSettings, openClassroom, openSave})=>{
    const chapters = useSelector(chaptersSelector);
    const currentChapter = useSelector(currentChapterSelector)

    return (
        <div className="nav">
            <div className="topbar"><img src={close} alt="" /></div>
            <div className="lowerNav">
                <div>
                    <div className="item"><img onClick={openClassroom} src={googleClassroom} alt="" /></div>
                    <div className="item"><img onClick={openClassroom} src={chat} alt="" /></div>
                </div>
                <h3>0 out of {chapters[currentChapter].chapterPuzzles.length} challenges completed</h3>
            </div>
            <div className="side-nav">
                <div className="item"><img onClick={openSettings} src={podium} alt="" /></div>
                <div className="item"><img onClick={openSettings} src={process} alt="" /></div>
                <div className="item"><img onClick={openSettings} src={gear} alt="" /></div>
            </div>
        </div>
    )
}

export default LowerNav;