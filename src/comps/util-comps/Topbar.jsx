import React from "react";
import close from "../../assets/close.png";

const Topbar = ({
  show,
  close = () => {
    return;
  },
  name = "",
}) => {
  return (
    <div className="topbar">
      <h1>{name}</h1>
      <div className="buttons">
        <div className="item">
          <img onClick={close} src={close} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
