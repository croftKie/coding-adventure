import React, { useState, useEffect } from 'react';
import forest from '../assets/pxfuel.jpg';

const Background = () => {
    return ( 
        <div className="background">
            <img src={forest} alt="" />
        </div>
     );
}
 
export default Background;