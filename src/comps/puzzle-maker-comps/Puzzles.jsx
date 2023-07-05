import React from "react";
import { images } from "../../utils/images.js";

const Puzzles = () => {
  return (
    <div className="puzzle-manager">
      <div className="puzzle-list">
        <div className="card">
          <h3>Puzzle Name</h3>
          <p>a custom puzzle description would be written here</p>
          <img src={images.uiAssets[12]} alt="" />
        </div>
        <div className="card">
          <h3>Puzzle Name</h3>
          <p>a custom puzzle description would be written here</p>
          <img src={images.uiAssets[12]} alt="" />
        </div>
        <div className="card">
          <h3>Puzzle Name</h3>
          <p>a custom puzzle description would be written here</p>
          <img src={images.uiAssets[12]} alt="" />
        </div>
      </div>
      <div className="puzzle-info"></div>
    </div>
  );
};

export default Puzzles;
