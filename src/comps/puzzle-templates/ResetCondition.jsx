import React, { useState, useEffect } from "react";
import { images } from "../../utils/images";

const ResetCondition = ({ toggleUi }) => {
  return (
    <div className="win-condition">
      <div className="topbar"></div>
      <div className="content">
        <div className="info">
          <h1>Oh no! You got caught by the bugs!</h1>
          <p>Click below to reset and try again!</p>
        </div>
        <div className="win-image">
          <img src={images.puzzleAssets[0]} alt="" />
        </div>
        <div className="buttons">
          <button>Try Again!</button>
        </div>
      </div>
    </div>
  );
};

export default ResetCondition;
