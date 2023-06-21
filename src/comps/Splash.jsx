import React, { useState, useEffect } from 'react';
import floppy from '../assets/floppy-disk.png';

const Splash = () => {
    return ( 
        <div className="splash">
            <div className="splash-content">
                <div className="topbar"></div>
                <img src={floppy} alt="" />
                <div className="nav">
                    <div className="new card">
                        <h3>Start New</h3>
                        <p>Start the challenge from the beginning and beat the bad guy...</p>
                    </div>
                    <div className="continue card">
                        <h3>Continue</h3>
                        <p>Continue where you last left off and beat the bad guy!</p>
                    </div>
                    <div className="stats card">
                        <h3>Statistics</h3>
                        <p>Take a look at how many challenges you've completed</p>
                    </div>
                    <div className="class card">
                        <h3>Google Classroom</h3>
                        <p>Check if you have any challenges set by your teacher</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Splash;