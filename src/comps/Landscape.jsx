import React from "react";
import logo from "../assets/binary-code.png";
import close from "../assets/close.png";

const Landscape = () => {
  return (
    <div className="landscape">
      <div className="landscape-content">
        <div className="topbar">
          <img src={close} alt="" />
        </div>
        <div className="logo-bar">
          <img src={logo} alt="" />
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
