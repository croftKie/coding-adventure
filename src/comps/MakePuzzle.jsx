import React, { useState, useEffect, useRef } from "react";
import { images } from "../utils/images";
import Puzzles from "./puzzle-maker-comps/Puzzles.jsx";
import Creator from "./puzzle-maker-comps/Creator.jsx";
import Preview from "./puzzle-maker-comps/Preview.jsx";

const MakePuzzle = ({ setMakePuzzle }) => {
  const [openPage, setOpenPage] = useState("puzzles");
  const previewBarRef = useRef();
  const creatorBarRef = useRef();
  const barRefs = [previewBarRef, creatorBarRef];

  const updateClass = (currentElement) => {
    barRefs.forEach((element) => {
      if (element.current.classList.contains("active")) {
        element.current.classList.remove("active");
      }
    });
    currentElement.current.classList.add("active");
  };
  return (
    <div className="make-puzzle">
      <div className="make-puzzle-content">
        <div className="topbar">
          <h3>Make your own puzzle</h3>
          <img
            src={images.uiAssets[0]}
            onClick={() => {
              setMakePuzzle(false);
            }}
            alt=""
          />
        </div>
        <div className="lower-bar">
          <div
            ref={previewBarRef}
            onClick={() => {
              updateClass(previewBarRef);
              setOpenPage("puzzles");
            }}
            className="puzzles active"
          >
            Puzzles
          </div>
          <div
            ref={creatorBarRef}
            onClick={() => {
              updateClass(creatorBarRef);
              setOpenPage("creator");
            }}
            className="features"
          >
            Creator
          </div>
        </div>
        <div className="content">
          {openPage === "puzzles" ? (
            <Puzzles />
          ) : openPage === "creator" ? (
            <Creator />
          ) : (
            <Puzzles />
          )}
        </div>
      </div>
    </div>
  );
};

export default MakePuzzle;
