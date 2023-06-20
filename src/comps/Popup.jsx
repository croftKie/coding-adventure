import React, { useState, useEffect } from 'react';
import close from '../assets/close.png';
import info from '../assets/info.png';
import pirate from '../assets/pirate.png';
import gold from '../assets/gold-ingots.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';
import { puzzleSelector } from '../store/features/puzzlesSlice';


const Popup = ({currentPuzzle, openPopup}) => {
    const puzzles = useSelector(puzzleSelector);
    const [puzzle] = puzzles.filter(puzzle => puzzle.id === currentPuzzle);
    
    const toastText = puzzle.puzzleDescription
    const showToastMessage = () => {
        toast.info(toastText, {
            position: toast.POSITION.TOP_LEFT,
            allowHTML: true,
        });
    };


    return ( 
        <div className="popup">
            <ToastContainer />
            <div className="nav">
                <h1>{puzzle.puzzleName}</h1>
                <div>
                    <div onClick={showToastMessage} className="item"><img src={info} alt="" /></div>
                    <div onClick={openPopup} className="item"><img src={close} alt="" /></div>
                </div>
            </div>
            <div className="puzzleContent">
                <div className="code">
                    <h4>Move <span><input type="text" /></span> steps forward</h4>
                    <h4>Turn <span><input type="text" /></span> degrees to the <span><input type="text" /></span> </h4>
                    <h4>Move <span><input type="text" /></span> steps forward</h4>
                    <h4>If character is on gold chest</h4>
                    <h4>Print <span><input type="text" /></span> </h4>
                </div>
                <div className="result">
                    <div className="grid-column">
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"><div className="item"><img src={pirate} alt="" /></div></div>
                    </div>
                    <div className="grid-column">
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                    </div>
                    <div className="grid-column">
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                    </div>
                    <div className="grid-column">
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                    </div>
                    <div className="grid-column">
                        <div className="grid-col-item"><div className="item"><img src={gold} alt="" /></div></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                    </div>
                    <div className="grid-column">
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                        <div className="grid-col-item"></div>
                    </div>
                </div>
            </div>
            <div className="submitBox">
                <input type="text" />
                <button>Send</button>
            </div>
        </div>
    );
}
 
export default Popup;