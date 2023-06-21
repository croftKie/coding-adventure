import React, { useState, useEffect } from 'react';
import close from '../assets/close.png';
import info from '../assets/info.png';
import pirate from '../assets/pirate.png';
import gold from '../assets/gold-ingots.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Instructions from './puzzle-templates/Instructions';
import BugFix from './puzzle-templates/BugFix';
import Cryptography from './puzzle-templates/Cryptography';

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

    const type = puzzle.type;
    return ( 
        <div className="popup">
            <ToastContainer />
            <div className="nav">
                <div className='bar'>
                    <div onClick={showToastMessage} className="item"><img src={info} alt="" /></div>
                    <div onClick={openPopup} className="item"><img src={close} alt="" /></div>
                </div>
                <h1>{puzzle.puzzleName}</h1>
            </div>
            <div className="puzzleContent">
                {type === 1 ? <Instructions /> : 
                type === 2 ? <Cryptography /> :
                type === 3 ? <BugFix /> :
                type === 4 ? <Styling /> : <></>}
            </div>
        </div>
    );
}
 
export default Popup;