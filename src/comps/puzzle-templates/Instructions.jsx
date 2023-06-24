import React, { useState, useEffect, useRef } from 'react';
import InstructionInput from './instructions-comps/InstructionInput';
import { instructionInputSelector, clearInstruction } from '../../store/features/currentInput';
import { useSelector, useDispatch } from 'react-redux';
import pirate from "../../assets/pirate.png"
import gold from '../../assets/gold-ingots.png';
import { animator, resetAnimation } from '../../utils/animations2d';
import { getLoc } from '../../utils/getLoc';

const Instructions = ({puzzle}) => {
    const [inputs, setInputs] = useState([])
    const charImg = useRef();
    const goalImg = useRef();
    const resultRef = useRef();
    const instructionInputs = useSelector(instructionInputSelector);
    const dispatch = useDispatch();
    const startLocs = puzzle.startLocations;

    const pushInputs = (type) =>{
        setInputs([...inputs, type]);
    }
    const reset = ()=>{
        dispatch(clearInstruction());
        setInputs([]);
        resetAnimation(charImg, startLocs);
    }
    const run = ()=>{
        const runComplete = animator(charImg, instructionInputs, 500, 500);
    }

    return ( 
        <div className="instructions-puzzle">
            <div className="content">
                <div className="input">
                    <InstructionInput inputs={inputs}/>
                    <div className="choices">
                        <button onClick={()=>{pushInputs(1)}}>Forward</button>
                        <button onClick={()=>{pushInputs(2)}}>Backwards</button>
                        <button onClick={()=>{pushInputs(3)}}>Right</button>
                        <button onClick={()=>{pushInputs(4)}}>Left</button>
                    </div>
                    <div className='logic'>
                        {/* <button onClick={()=>{pushInputs(5)}}>If</button> */}
                        <button onClick={()=>{pushInputs(6)}}>Repeat</button>
                        <button onClick={()=>{pushInputs(7)}}>End</button>
                    </div>
                </div>
                <div ref={resultRef} className="result">
                    <img 
                        ref={charImg}
                        style={{transform: `translate(${startLocs[0].x}px, ${startLocs[0].y}px`}} 
                        src={pirate} 
                        alt="" />
                    <img 
                        ref={goalImg}
                        style={{transform: `translate(${startLocs[1].x}px, ${startLocs[1].y}px`}} 
                        src={gold} 
                        alt="" />
                </div>
            </div>
            <div className="buttons">
                <button onClick={reset} className="reset">Reset</button>
                <button onClick={run} className="run">Run</button>
            </div>
        </div>
     );
}
 
export default Instructions;