import React, { useState, useEffect } from "react";

const Progress = () => {
  return (
    <div className="progress">
      <div className="top-bar">
        <h3>Progress</h3>
      </div>
      <div className="progress-points">
        <div className="one">
          <div className="point"></div>
          <p>The Waterfall</p>
        </div>
        <div className="two">
          <p>The Waterfall</p>
          <div className="point"></div>
        </div>
        <div className="three">
          <div className="point"></div>
          <p>The Waterfall</p>
        </div>
        <div className="four">
          <p>The Waterfall</p>
          <div className="point"></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
