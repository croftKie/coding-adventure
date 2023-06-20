import React from "react";
import save from '../assets/floppy-disk.png'
import googleClassroom from '../assets/google-classroom.png'
import gear from '../assets/gear.png';
import podium from '../assets/podium.png';
import process from '../assets/process.png';

const LowerNav = ()=>{
    return (
    <>
        <div className="lowerNav">
            <div>
                <div className="item"><img src={googleClassroom} alt="" /></div>
                <div className="item"><img src={save} alt="" /></div>
            </div>
            <h3>0 out of 3 challenges completed</h3>
        </div>
        <div className="side-nav">
            <div className="item"><img src={podium} alt="" /></div>
            <div className="item"><img src={process} alt="" /></div>
            <div className="item"><img src={gear} alt="" /></div>
        </div>
    </>
    )
}

export default LowerNav;