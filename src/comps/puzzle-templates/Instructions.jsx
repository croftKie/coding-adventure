import React, { useState, useEffect, useRef } from 'react';
import InstructionInput from './instructions-comps/InstructionInput';
import { instructionInputSelector } from '../../store/features/currentInput';
import { useSelector } from 'react-redux';
import pirate from "../../assets/pirate.png"
import { gsap } from 'gsap';

const Instructions = () => {
    const [inputs, setInputs] = useState([])
    const imgRef = useRef();
    const instructionInputs = useSelector(instructionInputSelector);

    const pushInputs = (type) =>{
        setInputs([...inputs, type]);
    }
    const onClickAnim = ()=>{
        console.log(imgRef.current)
        gsap.to(imgRef.current, {x: instructionInputs[0].value})
        gsap.to(imgRef.current, {x: instructionInputs[1].value, delay: 2})
    }
    
    console.log(instructionInputs)
    return ( 
        <div className="instructions-puzzle">
            <div className="content">
                <div className="input">
                    <InstructionInput inputs={inputs}/>
                    <div className="choices">
                        <button onClick={()=>{pushInputs(1)}}>Move</button>
                        <button onClick={()=>{pushInputs(2)}}>Turn</button>
                        <button onClick={()=>{pushInputs(3)}}>Change</button>
                    </div>
                </div>
                <div className="result">
                    <img ref={imgRef} src={pirate} alt="" />
                </div>
            </div>
            <div className="buttons">
                <button className="reset">Reset</button>
                <button onClick={onClickAnim} className="run">Run</button>
            </div>
        </div>
     );
}
 
export default Instructions;