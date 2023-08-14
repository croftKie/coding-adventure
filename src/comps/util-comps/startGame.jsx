import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCurrentChapter,
  activeChapterSelector,
} from "../../store/features/progressSlice";
import { gsap } from "gsap";
import { images } from "../../utils/images";
import { updateUi } from "../../store/features/UiSlice";

const StartGame = () => {
  const cardOne = useRef();
  const cardTwo = useRef();
  const logoRef = useRef();
  const dispatch = useDispatch();
  const activeChapter = useSelector(activeChapterSelector);

  // Splash card animations
  const onEnter = (ref) => {
    gsap.to(ref.current, { scale: 1.1, backgroundColor: "#5AA9E6" });
  };
  const onLeave = (ref) => {
    gsap.to(ref.current, { scale: 1, backgroundColor: "#9AD6FF" });
  };
  const spin = (ref) => {
    gsap.to(ref.current, { rotation: 360, repeat: 4, yoyo: true });
  };

  // assigns 0 chapter on "start new" or fetches active from local storage
  const assignChapter = (chapter) => {
    dispatch(changeCurrentChapter(chapter));
  };
  return (
    <>
      <div className="logo-bar">
        <img
          onClick={() => {
            spin(logoRef);
          }}
          ref={logoRef}
          src={images.puzzleAssets.byte_right}
          alt=""
        />
        <div className="logo-text">
          <h1>CodeVenture</h1>
          <h3>Learn to think like a coder</h3>
        </div>
      </div>
      <div className="nav">
        <div
          ref={cardOne}
          onMouseEnter={() => {
            onEnter(cardOne);
          }}
          onMouseLeave={() => {
            onLeave(cardOne);
          }}
          onClick={() => {
            assignChapter(0);
            dispatch(updateUi("intro"));
            dispatch(updateUi("splashScreen"));
          }}
          className="new card"
        >
          <h3>Start New</h3>
          <p>
            Start a new game as you dive into a world of logic and puzzles.
            Begins a new game with all puzzles incomplete.
          </p>
        </div>
        <div
          ref={cardTwo}
          onMouseEnter={() => {
            onEnter(cardTwo);
          }}
          onMouseLeave={() => {
            onLeave(cardTwo);
          }}
          onClick={() => {
            assignChapter(activeChapter), dispatch(updateUi("splashScreen"));
          }}
          className="continue card"
        >
          <h3>Continue</h3>
          <p>
            Continue where you previously left off, and solve the next chapter
            of puzzles to reach the exit and escape CyberSpace.
          </p>
        </div>
      </div>
    </>
  );
};

export default StartGame;
