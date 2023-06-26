import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPuzzle,
  activeChapterSelector,
} from "../../store/features/progressSlice";
import { readContent } from "../../store/features/contentSlice";
import { gsap } from "gsap";

const Points = ({ openPopup }) => {
  const dispatch = useDispatch();
  const content = useSelector(readContent);
  const activeChapter = useSelector(activeChapterSelector);
  const puzzles = content[activeChapter].chapterPuzzles;

  const assignPuzzleId = (id) => {
    dispatch(changeCurrentPuzzle(id));
  };
  const onEnter = (e, completedStatus) => {
    if (completedStatus) {
      gsap.to(e.target, {
        backgroundColor: "#5efc88",
        scale: 1.2,
        duration: 0.1,
      });
    } else {
      gsap.to(e.target, {
        backgroundColor: "#9AD6FF",
        scale: 1.2,
        duration: 0.1,
      });
    }
  };
  const onLeave = (e, completedStatus) => {
    if (completedStatus) {
      gsap.to(e.target, {
        backgroundColor: "#97feb3",
        scale: 1,
        duration: 0.1,
      });
    } else {
      gsap.to(e.target, {
        backgroundColor: "#5AA9E6",
        scale: 1,
        duration: 0.1,
      });
    }
  };
  return (
    <div className="points">
      {content[activeChapter].points.map((point, index) => {
        return (
          <div
            key={puzzles[index].id}
            style={{
              top: point.top,
              left: point.left,
              backgroundColor: puzzles[index].completed ? "#97feb3" : "#5AA9E6",
            }}
            onClick={() => {
              assignPuzzleId(puzzles[index].id);
              openPopup();
            }}
            className="point"
            onMouseEnter={(e) => {
              onEnter(e, puzzles[index].completed);
            }}
            onMouseLeave={(e) => {
              onLeave(e, puzzles[index].completed);
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Points;
