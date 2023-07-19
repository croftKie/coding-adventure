import React from "react";

const Landscape = () => {
  return (
    <div className="landscape">
      <div className="landscape-content">
        <div className="topbar"></div>
        <div className="logo-bar">
          <div className="logo-text">
            <h1>CodeVenture</h1>
            <h3>
              A visual novel for <br /> learning to code
            </h3>
          </div>
        </div>
        <div className="error-message">
          <h1>Your screen is too small</h1>
          <h2>
            Expand your browser or switch to landscape mode to play CodeVenture
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landscape;
