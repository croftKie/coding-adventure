import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInstruction, instructionInputSelector } from '../../../store/features/currentInput';

const Repeat = () => {
    const dispatch = useDispatch();
    return ( 
        <div className="move-block"> 
            <p>Repeat following <span><input type="number" onBlur={(e)=>{dispatch(addInstruction({type:'repeat', value:e.target.value}))}}/> </span> times</p> 
        </div>
     );
}
 
export default Repeat;