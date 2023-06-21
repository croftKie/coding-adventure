import React, { useState, useEffect } from 'react';
import Move from './move';
import Turn from './Turn';
import Change from './Change';

const InstructionInput = ({inputs}) => {
    return ( 
        <div className="instruction-input">
            {inputs.map((input)=>{
                switch (input) {
                    case 1:
                        return (
                            <Move/>
                        )
                    case 2:
                        return (
                            <Turn />
                        )
                    case 3:
                        return (
                            <Change />
                        )
                    default:
                        break
                }
            })}
        </div>
     );
}
 
export default InstructionInput;