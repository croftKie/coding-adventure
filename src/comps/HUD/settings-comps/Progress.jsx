import React, { useState, useEffect } from "react";
import { images } from "../../../utils/images";

const Progress = () => {
  return (
    <div className="progress">
      <div className={"bg bg-1"}>
        <img src={images.progressAssets[0]} />
      </div>
      <div className={"bg bg-2"}>
        <img src={images.progressAssets[1]} />
      </div>
      <div className={"bg bg-3"}>
        <img src={images.progressAssets[2]} />
      </div>
      <div className={"bg bg-4"}>
        <img src={images.progressAssets[3]} />
      </div>
    </div>
  );
};

export default Progress;
