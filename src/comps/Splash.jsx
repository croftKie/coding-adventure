import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap";

import { images } from "../utils/images";

import {
  changeCurrentChapter,
  activeChapterSelector,
} from "../store/features/progressSlice";
import { updateUi } from "../store/features/UiSlice";
import MakePuzzle from "./MakePuzzle";
import { ToastContainer, toast } from "react-toastify";
import Msg from "./tutorial/TutModal";
import { splashTutorialSelector } from "../store/features/tutorialSlice";

const Splash = () => {
  const [stats, setStats] = useState(false);
  const [makePuzzle, setMakePuzzle] = useState(false);
  const cardOne = useRef();
  const cardTwo = useRef();
  const cardThree = useRef();
  const cardFour = useRef();
  const logoRef = useRef();
  const activeChapter = useSelector(activeChapterSelector);
  const dispatch = useDispatch();
  const splashTutorial = useSelector(splashTutorialSelector);

  const onEnter = (ref) => {
    gsap.to(ref.current, { scale: 1.1, backgroundColor: "#5AA9E6" });
  };
  const onLeave = (ref) => {
    gsap.to(ref.current, { scale: 1, backgroundColor: "#9AD6FF" });
  };
  const spin = (ref) => {
    gsap.to(ref.current, { rotation: 360, repeat: 4, yoyo: true });
  };

  const assignChapter = (chapter) => {
    dispatch(changeCurrentChapter(chapter));
  };

  const showToastMessage = () => {
    toast(<Msg tutorial={splashTutorial} />, { autoClose: false });
  };

  if (stats) {
    return <Statistics setStats={setStats} />;
  }
  if (makePuzzle) {
    return <MakePuzzle setMakePuzzle={setMakePuzzle} />;
  }

  return (
    <div className="splash">
      <ToastContainer />
      <div className="splash-content">
        <div className="topbar">
          <div className="buttons">
            <div onClick={showToastMessage} className="item">
              <img src={images.uiAssets[4]} alt="" />
            </div>
            <div className="item">
              <img src={images.uiAssets[0]} alt="" />
            </div>
          </div>
        </div>
        <div className="logo-bar">
          <img
            onClick={() => {
              spin(logoRef);
            }}
            ref={logoRef}
            src={images.charAssets[0]}
            alt=""
          />
          <div className="logo-text">
            <h1>CodeVenture</h1>
            <h3>
              A visual novel for <br /> learning to code
            </h3>
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
            className="new card">
            <h3>Start New</h3>
            <p>
              Start the challenge from the beginning and beat the bad guy...
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
            className="continue card">
            <h3>Continue</h3>
            <p>Continue where you last left off and beat the bad guy!</p>
          </div>
          <div
            ref={cardFour}
            onMouseEnter={() => {
              onEnter(cardFour);
            }}
            onMouseLeave={() => {
              onLeave(cardFour);
            }}
            onClick={() => {
              setMakePuzzle(true);
            }}
            className="class card">
            <h3>Make your own puzzles</h3>
            <p>
              Use the puzzle builder to create your own logic puzzles and share
              them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
