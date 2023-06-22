import React, { useState, useEffect } from 'react';


const Settings = () => {
    return ( 
        <div className="settings">
            <div className="top-bar">
                <h3>Settings</h3>
            </div>
            <div className="dark-light">
                <p>Dark / Light Mode</p>
                <p>ON <span>TOGGLE</span> OFF</p>
            </div>
            <div className="color-choices">
                <p>Choose Accent Colours</p>
                <div className="main-colour">
                    <p>Main Colour: <span>PICKER</span></p>
                </div>
                <div className="accent-colour">
                    <p>Main Colour: <span>PICKER</span></p>
                </div>
                <div className="background-colour">
                    <p>Main Colour: <span>PICKER</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default Settings;