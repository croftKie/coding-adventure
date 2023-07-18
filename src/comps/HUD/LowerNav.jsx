import React from "react";
import { images } from "../../utils/images";

import { useSelector, useDispatch } from "react-redux";
import { activeChapterSelector } from "../../store/features/progressSlice";
import { changeCurrentPuzzle } from "../../store/features/progressSlice";
import { readContent } from "../../store/features/contentSlice";
const LowerNav = ({ activePuzzle, toggleUi }) => {
  const content = useSelector(readContent);
  const activeChapter = useSelector(activeChapterSelector);
  const dispatch = useDispatch();

  const style = activePuzzle.completed ? { backgroundColor: "#97feb3" } : {};
  return (
    <div style={style} className="nav">
      <div className="info">
        {content[activeChapter].chapterPuzzles[activePuzzle.id - 1] ? (
          <img
            onClick={() => {
              dispatch(changeCurrentPuzzle(activePuzzle.id - 1));
            }}
            src={images.uiAssets[13]}
            alt=""
          />
        ) : (
          <></>
        )}
        <div>
          <h3>{activePuzzle.puzzleName}</h3>
          <h3>
            {
              content[activeChapter].chapterPuzzles.filter((puzzle) => {
                return puzzle.completed;
              }).length
            }{" "}
            out of {content[activeChapter].chapterPuzzles.length} puzzles
            completed
          </h3>
        </div>
        {content[activeChapter].chapterPuzzles[activePuzzle.id + 1] ? (
          <img
            onClick={() => {
              dispatch(changeCurrentPuzzle(activePuzzle.id + 1));
            }}
            src={images.uiAssets[12]}
            alt=""
          />
        ) : (
          <></>
        )}
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            toggleUi("popUp");
          }}>
          Open Puzzle
        </button>
      </div>
    </div>
  );
};

export default LowerNav;
