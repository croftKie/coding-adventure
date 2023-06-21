import React, { useState, useEffect } from 'react';
import BugFixInput from './bugFix-comps/bugFixInput';

const BugFix = () => {
    const [inputs, setInputs] = useState([])

    const pushInputs = (type) =>{
        setInputs([...inputs, type]);
    }
    return ( 
        <div className="bugFix-puzzle">
            <div className="content">
                <div className="input">
                    {/* <BugFixInput /> */}
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
 
export default BugFix;