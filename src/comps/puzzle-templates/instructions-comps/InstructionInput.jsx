import React, { useState, useEffect } from 'react';
import Forward from './Forward';
import Backwards from './Backwards';
import Right from './Right';
import Left from './Left';
import If from './If';
import Repeat from './Repeat'
import End from './End'

const InstructionInput = ({inputs}) => {
    return ( 
        <div className="instruction-input">
            {inputs.map((input)=>{
                switch (input) {
                    case 1:
                        return (
                            <Forward/>
                        )
                    case 2:
                        return (
                            <Backwards />
                        )
                    case 3:
                        return (
                            <Right />
                        )
                    case 4:
                        return (
                            <Left />
                        )
                    case 5:
                        return (
                            <If />
                        )
                    case 6:
                        return (
                            <Repeat />
                        )
                    case 7:
                        return (
                            <End />
                        )
                    default:
                        break
                }
            })}
        </div>
     );
}
 
export default InstructionInput;