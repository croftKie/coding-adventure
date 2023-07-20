// React imports
import React, { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameManager } from "../kaboom/gameManager.js";

// asset imports
import { images } from "../utils/images.js";

// component imports
import Dialogue from "./story-comps/Dialogue";
import Popup from "./Popup";

// store imports
import { popUpSelector, updateUi } from "../store/features/UiSlice";
import {
  changeCurrentPuzzle,
  changeCurrentChapter,
} from "../store/features/progressSlice.js";
import {
  setChapterCompleteStatus,
  setPuzzleCompleteStatus,
} from "../store/features/contentSlice.js";
import {
  activeChapterSelector,
  activePuzzleSelector,
} from "../store/features/progressSlice.js";

const Puzzle = ({ content }) => {
  const dispatch = useDispatch();
  const gameRef = useRef();
  const popUpStatus = useSelector(popUpSelector);
  const activePuzzle = useSelector(activePuzzleSelector);
  const activeChapter = useSelector(activeChapterSelector);
  const puzzles = content[activeChapter].chapterPuzzles;

  // puzzle filter provides currently selected puzzle - prop drilled to child components
  const [activePuzzleContent] = puzzles.filter(
    (puzzle) => puzzle.id === activePuzzle
  );

  // Dispatch function for opening and closing UI elements
  const toggleUi = (type) => {
    dispatch(updateUi(type));
  };
  const changeActivePuzzle = (nextPuzzleId) => {
    dispatch(
      setPuzzleCompleteStatus({
        chapterId: activeChapter,
        puzzleId: activePuzzle,
      })
    );
    dispatch(changeCurrentPuzzle(nextPuzzleId));
  };
  const changeActiveChapter = (nextChapterIndex) => {
    dispatch(setChapterCompleteStatus(activeChapter));
    dispatch(changeCurrentChapter(nextChapterIndex));
  };

  useLayoutEffect(() => {
    const width = gameRef.current.parentNode.scrollWidth;
    const height = gameRef.current.parentNode.scrollHeight;
    gameManager(
      gameRef.current,
      width,
      height,
      toggleUi,
      changeActivePuzzle,
      changeActiveChapter
    );
  }, []);

  return (
    <>
      <div className="content">
        {/* <Dialogue dialogue={activePuzzle.puzzleDialogue} /> */}
        <canvas ref={gameRef}></canvas>;
      </div>
      {popUpStatus ? (
        <Popup activePuzzle={activePuzzleContent} toggleUi={toggleUi} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Puzzle;
