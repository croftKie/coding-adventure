import React from "react";
import { images } from "../../utils/images";

import { useSelector } from "react-redux";
import { activeChapterSelector } from "../../store/features/progressSlice";
import { readContent } from "../../store/features/contentSlice";

const LowerNav = ({ toggleUi }) => {
  const uiAssets = images.uiAssets;
  const content = useSelector(readContent);
  const activeChapter = useSelector(activeChapterSelector);

  return (
    <div className="nav">
      <div className="topbar">
        <img src={uiAssets[0]} alt="" />
      </div>
      <div className="lowerNav">
        <div>
          <div className="item">
            <img
              onClick={() => {
                toggleUi("classroom");
              }}
              src={uiAssets[3]}
              alt=""
            />
          </div>
          <div className="item">
            <img
              onClick={() => {
                toggleUi("chat");
              }}
              src={uiAssets[8]}
              alt=""
            />
          </div>
        </div>
        <h3>
          0 out of {content[activeChapter].chapterPuzzles.length} challenges
          completed
        </h3>
      </div>
      <div className="side-nav">
        <div className="item">
          <img
            onClick={() => {
              toggleUi("leaderboard");
            }}
            src={uiAssets[5]}
            alt=""
          />
        </div>
        <div className="item">
          <img
            onClick={() => {
              toggleUi("progress");
            }}
            src={uiAssets[6]}
            alt=""
          />
        </div>
        <div className="item">
          <img
            onClick={() => {
              toggleUi("settings");
            }}
            src={uiAssets[9]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
