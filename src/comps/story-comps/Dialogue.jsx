import React from "react";
import { images } from "../../utils/images";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { useLayoutEffect } from "react";
gsap.registerPlugin(TextPlugin);

const Dialogue = ({ dialogue }) => {
  const dialogueRef = useRef();
  const textRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(dialogueRef.current, { top: 10, delay: 2 });
    dialogue.forEach((line) => {
      tl.to(textRef.current, { text: line, duration: 3, delay: 2 });
    });
  });
  const hideDialogueBox = () => {
    gsap.to(dialogueRef.current, { top: "-22%" });
  };
  return (
    <div ref={dialogueRef} className="dialogue-container">
      <div className="topbar">
        <div className="buttons">
          <div className="item">
            <img src={images.uiAssets[4]} alt="" />
          </div>
          <div className="item">
            <img src={images.uiAssets[0]} alt="" />
          </div>
        </div>
      </div>
      <div className="dialogue">
        <img src={images.charAssets[0]} />
        <p ref={textRef}>Hey there, Alex!</p>
      </div>
    </div>
  );
};

export default Dialogue;
