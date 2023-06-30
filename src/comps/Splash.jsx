import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";

import { images } from "../utils/images";

import { changeCurrentChapter } from "../store/features/progressSlice";
import { updateUi } from "../store/features/UiSlice";

const Splash = () => {
  const cardOne = useRef();
  const cardTwo = useRef();
  const cardThree = useRef();
  const cardFour = useRef();
  const logoRef = useRef();
  const dispatch = useDispatch();

  const onEnter = (ref) => {
    gsap.to(ref.current, { scale: 1.1, backgroundColor: "#5AA9E6" });
  };
  const onLeave = (ref) => {
    gsap.to(ref.current, { scale: 1, backgroundColor: "#9AD6FF" });
  };
  const spin = (ref) => {
    gsap.to(ref.current, { rotation: 360, repeat: 4, yoyo: true });
  };

  const assignChapter = () => {
    dispatch(changeCurrentChapter(0));
  };

  return (
    <div className="splash">
      <div className="splash-content">
        <div className="topbar">
          <img src={images.uiAssets[0]} alt="" />
        </div>
        <div className="logo-bar">
          <img
            onClick={() => {
              spin(logoRef);
            }}
            ref={logoRef}
            src={images.uiAssets[7]}
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
              assignChapter(), dispatch(updateUi("splashScreen"));
            }}
            className="new card"
          >
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
            className="continue card"
          >
            <h3>Continue</h3>
            <p>Continue where you last left off and beat the bad guy!</p>
          </div>
          <div
            ref={cardThree}
            onMouseEnter={() => {
              onEnter(cardThree);
            }}
            onMouseLeave={() => {
              onLeave(cardThree);
            }}
            className="stats card"
          >
            <h3>Statistics</h3>
            <p>Take a look at how many challenges you've completed</p>
          </div>
          <div
            ref={cardFour}
            onMouseEnter={() => {
              onEnter(cardFour);
            }}
            onMouseLeave={() => {
              onLeave(cardFour);
            }}
            className="class card"
          >
            <h3>Google Classroom</h3>
            <p>Check if you have any challenges set by your teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
