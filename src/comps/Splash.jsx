import React from "react";
import Topbar from "./util-comps/Topbar";
import Login from "./util-comps/Login";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash-content">
        <Topbar />
        <Login />
      </div>
    </div>
  );
};

export default Splash;
