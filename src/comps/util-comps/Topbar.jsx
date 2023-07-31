import React from "react";
import { images } from "../../utils/images";

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
          <img onClick={close} src={images.uiAssets.close} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
