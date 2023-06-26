import React from "react";
import googleClassroom from "../../assets/google-classroom.png";
import gear from "../../assets/gear.png";
import podium from "../../assets/podium.png";
import process from "../../assets/process.png";
import chat from "../../assets/chat.png";
import close from "../../assets/close.png";

import { useSelector } from "react-redux";
import { activeChapterSelector } from "../../store/features/progressSlice";
import { readContent } from "../../store/features/contentSlice";

const LowerNav = ({ toggleUi }) => {
  const content = useSelector(readContent);
  const activeChapter = useSelector(activeChapterSelector);

  return (
    <div className="nav">
      <div className="topbar">
        <img src={close} alt="" />
      </div>
      <div className="lowerNav">
        <div>
          <div className="item">
            <img
              onClick={() => {
                toggleUi("classroom");
              }}
              src={googleClassroom}
              alt=""
            />
          </div>
          <div className="item">
            <img
              onClick={() => {
                toggleUi("chat");
              }}
              src={chat}
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
            src={podium}
            alt=""
          />
        </div>
        <div className="item">
          <img
            onClick={() => {
              toggleUi("progress");
            }}
            src={process}
            alt=""
          />
        </div>
        <div className="item">
          <img
            onClick={() => {
              toggleUi("settings");
            }}
            src={gear}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
