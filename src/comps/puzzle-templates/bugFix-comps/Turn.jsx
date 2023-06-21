import React, { useState, useEffect } from 'react';

const Turn = () => {
    return ( 
        <div className="turn-block">
            <p>Turn <span><input type="text" /></span> degrees <span><input type="text" /></span></p>
        </div>
     );
}
 
export default Turn;