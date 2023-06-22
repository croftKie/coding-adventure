import React, { useState, useEffect, useRef } from 'react';
import InstructionInput from './instructions-comps/InstructionInput';
import { instructionInputSelector, clearInstruction } from '../../store/features/currentInput';
import { useSelector, useDispatch } from 'react-redux';
import pirate from "../../assets/pirate.png"
import gold from '../../assets/gold-ingots.png';
import { onClickAnim } from '../../utils/animations2d';

const Instructions = ({puzzle}) => {
    const [inputs, setInputs] = useState([])
    const imgRef = useRef();
    const instructionInputs = useSelector(instructionInputSelector);
    const dispatch = useDispatch();

    const pushInputs = (type) =>{
        setInputs([...inputs, type]);
    }
    const reset = ()=>{
        dispatch(clearInstruction());
        setInputs([]);
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
                <div className="result">
                    <img style={{top:puzzle.startLocations[0].top, left:puzzle.startLocations[0].right}} ref={imgRef} src={pirate} alt="" />
                    <img style={{top:puzzle.startLocations[1].top, left:puzzle.startLocations[1].right}} src={gold} alt="" />
                </div>
            </div>
            <div className="buttons">
                <button onClick={reset} className="reset">Reset</button>
                <button onClick={()=>{onClickAnim(imgRef, instructionInputs)}} className="run">Run</button>
            </div>
        </div>
     );
}
 
export default Instructions;