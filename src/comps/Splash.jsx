import React, { useState } from "react";

import Topbar from "./util-comps/Topbar";

import StartGame from "./util-comps/startGame";
import Login from "./util-comps/Login";
import Maker from "./util-comps/Maker";

const Splash = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="splash">
      <div className="login-splash">
        <Topbar />
        <h3>Welcome, guest!</h3>
      </div>
      <div className="splash-content">
        <Topbar />
        <div className="lower-bar">
          <button
            onClick={() => {
              setMode("login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setMode("game");
            }}
          >
            Play Game
          </button>
          <button
            onClick={() => {
              setMode("maker");
            }}
          >
            Puzzle Maker
          </button>
        </div>
        {mode === "login" ? (
          <Login />
        ) : mode === "game" ? (
          <StartGame />
        ) : mode === "maker" ? (
          <Maker />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default Splash;
