import React, { useState, useEffect } from 'react';

const Change = () => {
    return ( 
        <div className="change-block">
            <p>Change <span><input type="text" /></span> by <span><input type="number" /></span> pixels</p>
        </div>
     );
}
 
export default Change;