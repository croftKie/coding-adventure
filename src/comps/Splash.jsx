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
import Topbar from "./util-comps/Topbar";

const Splash = () => {
  const [stats, setStats] = useState(false);
  const [makePuzzle, setMakePuzzle] = useState(false);
  const cardOne = useRef();
  const cardTwo = useRef();
  const cardThree = useRef();
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
        <Topbar show={showToastMessage} />
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
              A visual novel for learning <br /> to think like a coder
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
            ref={cardThree}
            // onMouseEnter={() => {
            //   onEnter(cardThree);
            // }}
            // onMouseLeave={() => {
            //   onLeave(cardThree);
            // }}
            // onClick={() => {
            //   setMakePuzzle(true);
            // }}
            className="class card"
            style={{ backgroundColor: "lightgrey" }}>
            <h3>Make your own puzzles</h3>
            <p>COMING SOON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
