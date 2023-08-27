import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import { images } from "../../utils/images";
import { updateUi } from "../../store/features/UiSlice";

const Maker = () => {
  const cardOne = useRef();
  const logoRef = useRef();
  const dispatch = useDispatch();

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
            dispatch(updateUi("functionGame"));
          }}
          className="new card"
        >
          <h3>Open Function Puzzles</h3>
          <p>
            Test your skills against some brain teaser puzzles. See if you can
            create an algorithm to solve each one.
          </p>
        </div>
      </div>
    </>
  );
};

export default Maker;
