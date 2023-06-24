import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInstruction, instructionInputSelector } from '../../../store/features/currentInput';

const Left = () => {
    const dispatch = useDispatch();
    return ( 
        <div className="move-block"> 
            <p>Move left by <span><input type="number" onBlur={(e)=>{dispatch(addInstruction({type:'left', value:parseInt(e.target.value)}))}}/> </span> steps</p> 
        </div>
     );
}
 
export default Left;