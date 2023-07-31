import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap";
import { toast } from "react-toastify";

import { images } from "../utils/images";

import Topbar from "./util-comps/Topbar";
import Egg from "./HUD/settings-comps/Egg";
import MakePuzzle from "./MakePuzzle";
import Msg from "./tutorial/TutModal";

import {
  changeCurrentChapter,
  activeChapterSelector,
} from "../store/features/progressSlice";
import { updateUi } from "../store/features/UiSlice";
import { splashTutorialSelector } from "../store/features/tutorialSlice";

const Splash = () => {
  const dispatch = useDispatch();
  const [makePuzzle, setMakePuzzle] = useState(false);
  const [egg, setEgg] = useState(false);
  const cardOne = useRef();
  const cardTwo = useRef();
  const cardThree = useRef();
  const logoRef = useRef();
  const activeChapter = useSelector(activeChapterSelector);
  const splashTutorial = useSelector(splashTutorialSelector);

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

  // init and populate toast message
  const showToastMessage = () => {
    toast(<Msg tutorial={splashTutorial} />, { autoClose: false });
  };

  // returns for other modes
  if (makePuzzle) {
    return <MakePuzzle setMakePuzzle={setMakePuzzle} />;
  }

  if (egg) {
    return <Egg />;
  }

  return (
    <div className="splash">
      <div className="splash-content">
        <Topbar show={showToastMessage} />
        <div className="logo-bar">
          <img
            onClick={() => {
              spin(logoRef);
              setEgg(true);
            }}
            ref={logoRef}
            src={images.puzzleAssets.byte_right}
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
        </div>
      </div>
    </div>
  );
};

export default Splash;
