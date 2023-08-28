import React, { useState } from "react";
import Topbar from "./util-comps/Topbar";
import StartGame from "./util-comps/startGame";
import Login from "./util-comps/Login";
import Maker from "./util-comps/Maker";

const Splash = () => {
  const [mode, setMode] = useState("login");
  const [loggedIn, setLoggedIn] = useState(true);
  const [loginSplashTimer, setLoginSplashTimer] = useState(false);
  const [email, setEmail] = useState(null);

  const loggedInButton = (mode, text, stylingClass) => {
    if (loggedIn) {
      return (
        <button
          className={stylingClass}
          onClick={() => {
            setMode(mode);
          }}
        >
          {text}
        </button>
      );
    } else {
      return <button className="inactive">{text}</button>;
    }
  };
  const loginSplash = (email_login) => {
    return (
      <div className="login-splash">
        <Topbar />
        <h3>{email_login}</h3>
      </div>
    );
  };

  const loginTimer = () => {
    setLoginSplashTimer(true);
    setTimeout(() => {
      setLoginSplashTimer(false);
    }, 3000);
  };

  return (
    <div className="splash">
      {loginSplashTimer ? loginSplash(email) : <></>}
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
          {loggedInButton("game", "Logic Games", "active")}
          {loggedInButton("maker", "Function Puzzles", "active")}
        </div>
        {mode === "login" ? (
          <Login
            setEmail={setEmail}
            setMode={setMode}
            loginTimer={loginTimer}
            setLoggedIn={setLoggedIn}
          />
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
