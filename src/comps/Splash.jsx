import React, { useState, useEffect } from 'react';
import floppy from '../assets/floppy-disk.png';

const Splash = () => {
    return ( 
        <div className="splash">
            <div className="splash-content">
                <div className="topbar"></div>
                <img src={floppy} alt="" />
                <div className="nav">
                    <button>New</button>
                    <button>Continue</button>
                    <button>Stats</button>
                    <button>Google Classroom</button>
                </div>
            </div>
        </div>
     );
}
 
export default Splash;