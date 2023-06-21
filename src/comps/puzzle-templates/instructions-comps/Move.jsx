import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInstruction, instructionInputSelector } from '../../../store/features/currentInput';

const Move = () => {
    const dispatch = useDispatch();
    console.log(useSelector(instructionInputSelector));
    return ( 
        <div className="move-block"> 
            <p>Move <span><input type="number" onBlur={(e)=>{dispatch(addInstruction({type:'move', value:e.target.value}))}}/> </span> steps</p> 
        </div>
     );
}
 
export default Move;