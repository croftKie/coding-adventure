import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInstruction, instructionInputSelector } from '../../../store/features/currentInput';

const If = () => {
    const dispatch = useDispatch();
    return ( 
        <div className="move-block"> 
            <p>If <span><input type="number" onBlur={(e)=>{dispatch(addInstruction({type:'If', value:e.target.value}))}}/> </span> then</p> 
        </div>
     );
}
 
export default If;