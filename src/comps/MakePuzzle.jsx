import React, { useState, useEffect, useRef } from "react";
import { images } from "../utils/images";
import Puzzles from "./puzzle-maker-comps/Puzzles.jsx";
import Creator from "./puzzle-maker-comps/Creator.jsx";
import Preview from "./puzzle-maker-comps/Preview.jsx";

const MakePuzzle = ({ setMakePuzzle }) => {
  const [openPage, setOpenPage] = useState("puzzles");
  const settingsBarRef = useRef();
  const leaderboardBarRef = useRef();
  const progressBarRef = useRef();
  const barRefs = [settingsBarRef, leaderboardBarRef, progressBarRef];
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
            ref={settingsBarRef}
            onClick={() => {
              updateClass(settingsBarRef);
              setOpenPage("puzzles");
            }}
            className="puzzles active"
          >
            Puzzles
          </div>
          <div
            ref={leaderboardBarRef}
            onClick={() => {
              updateClass(leaderboardBarRef);
              setOpenPage("creator");
            }}
            className="features"
          >
            Creator
          </div>
          <div
            ref={progressBarRef}
            onClick={() => {
              updateClass(progressBarRef);
              setOpenPage("preview");
            }}
            className="preview"
          >
            Preview
          </div>
        </div>
        <div className="content">
          {openPage === "puzzles" ? (
            <Puzzles />
          ) : openPage === "creator" ? (
            <Creator />
          ) : openPage === "preview" ? (
            <Preview />
          ) : (
            <Puzzles />
          )}
        </div>
      </div>
    </div>
  );
};

export default MakePuzzle;
