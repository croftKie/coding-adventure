import React, { useReducer, useRef } from "react";
import Settings from "./Settings.jsx";
import Leaderboard from "./Leaderboard.jsx";
import Progress from "./Progress.jsx";
import {
  leaderboardSelector,
  progressSelector,
  settingsSelector,
} from "../../../store/features/UiSlice.js";
import { useSelector } from "react-redux";
import { images } from "../../../utils/images.js";

const Options = () => {
  const settings = useSelector(settingsSelector);
  const leaderboard = useSelector(leaderboardSelector);
  const progress = useSelector(progressSelector);
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
    <div className="options">
      <div className="top-bar">
        <img src={images.uiAssets[0]} alt="" />
      </div>
      <div className="lower-bar">
        <div
          ref={settingsBarRef}
          onClick={() => {
            updateClass(settingsBarRef);
          }}
          className="settings active"
        >
          <p>Settings</p>
        </div>
        <div
          ref={leaderboardBarRef}
          onClick={() => {
            updateClass(leaderboardBarRef);
          }}
          className="leaderboard"
        >
          <p>Leaderboard</p>
        </div>
        <div
          ref={progressBarRef}
          onClick={() => {
            updateClass(progressBarRef);
          }}
          className="progress"
        >
          <p>Progress</p>
        </div>
      </div>
      {settings ? (
        <Settings />
      ) : leaderboard ? (
        <Leaderboard />
      ) : progress ? (
        <Progress />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Options;
