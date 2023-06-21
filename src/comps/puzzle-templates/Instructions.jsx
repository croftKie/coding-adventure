import React, { useState, useEffect } from 'react';
import InstructionInput from './instructions-comps/InstructionInput';

const Instructions = () => {
    const [inputs, setInputs] = useState([])

    const pushInputs = (type) =>{
        setInputs([...inputs, type]);
    }
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
                    
                </div>
            </div>
            <div className="buttons">
                <button className="reset">Reset</button>
                <button className="run">Run</button>
            </div>
        </div>
     );
}
 
export default Instructions;