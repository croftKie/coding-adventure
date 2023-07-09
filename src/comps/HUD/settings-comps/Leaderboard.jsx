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
              <h4>Username:</h4>
              <p>score</p>
            </div>
          );
        })}
      </div>
      <div className={"addToBoard"}>
        <div className={"title"}>
          <h1>CodeVenture Leaderboard</h1>
          <p>Add your name to the leaderboard</p>
        </div>
        <div className={"nameInput"}>
          <p>What is your name?</p>
          <input type={"text"} />
        </div>
        <div className={"currentScore"}>
          <p>Current Score:</p>
          <p>1000</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
