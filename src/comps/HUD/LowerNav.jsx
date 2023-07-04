import React from "react";
import { images } from "../../utils/images";

import { useSelector, useDispatch } from "react-redux";
import { activeChapterSelector } from "../../store/features/progressSlice";
import { readContent } from "../../store/features/contentSlice";
import { toggleTutorial } from "../../store/features/tutorialSlice.js";
const LowerNav = ({ toggleUi }) => {
  const uiAssets = images.uiAssets;
  const content = useSelector(readContent);
  const activeChapter = useSelector(activeChapterSelector);
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="topbar">
        <img src={uiAssets[0]} alt="" />
      </div>
      <div className="lowerNav">
        <h3>
          0 out of {content[activeChapter].chapterPuzzles.length} challenges
          completed
        </h3>
      </div>
      <div className="side-nav">
        <div className="item">
          <img
            onClick={() => {
              dispatch(toggleTutorial());
            }}
            src={uiAssets[4]}
            alt=""
          />
        </div>
        <div className="item">
          <img
            onClick={() => {
              toggleUi("options");
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
