import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { introSelector } from "../../store/features/storySlice";
import { gsap } from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { images } from "../../utils/images";
import { updateUi } from "../../store/features/UiSlice";

const Ending = () => {
  const introContent = useSelector(introSelector);
  const textRef = useRef();
  const imgRef = useRef();
  const dispatch = useDispatch();

  // creates GSAP timeline for text and inits after load
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    Array.from(textRef.current.children).forEach((child) => {
      if (
        child.classList.contains("three") ||
        child.classList.contains("eight")
      ) {
        tl.fromTo(
          child,
          { color: "#333333", duration: 2 },
          { color: "#97feb3", duration: 2 }
        );
      } else {
        tl.fromTo(
          child,
          { color: "#333333", duration: 2 },
          { color: "#fff8ef", duration: 2 }
        );
      }
    });
    tl.to(imgRef.current, { opacity: 1 });
  });

  return (
    <div ref={textRef} className="intro">
      {introContent.map((line) => {
        return <h2 className={line.class}>{line.text}</h2>;
      })}
      <img
        onClick={() => {
          dispatch(updateUi("intro"));
        }}
        ref={imgRef}
        src={images.charAssets[1]}
      />
    </div>
  );
};

export default Ending;
