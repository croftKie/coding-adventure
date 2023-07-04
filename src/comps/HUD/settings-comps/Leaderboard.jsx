import React, { useState, useEffect } from "react";
import { images } from "../../../utils/images";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="board">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div className="card">
              <div className="number">
                <h4>{item}</h4>
              </div>
              <h4>1,000,000</h4>
              <p>Username</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
