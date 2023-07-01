import React, { useState, useEffect } from "react";
import { images } from "../utils/images";

const Statistics = ({ setStats }) => {
  return (
    <div className="stats">
      <div className="stats-content">
        <div className="topbar">
          <h3>Statistics</h3>
          <img
            src={images.uiAssets[0]}
            onClick={() => {
              setStats(false);
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
