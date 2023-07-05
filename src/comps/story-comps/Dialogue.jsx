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
    tl.to(dialogueRef.current, { top: 10, delay: 1 });
    dialogue.forEach((line) => {
      tl.to(textRef.current, { text: line, duration: 3, delay: 1 });
    });
  }, []);
  const hideDialogueBox = () => {
    gsap.to(dialogueRef.current, { top: "-22%" });
  };

  console.log(dialogue);
  return (
    <div ref={dialogueRef} className="dialogue-container">
      <div className="topbar">
        <img onClick={hideDialogueBox} src={images.uiAssets[0]} alt="" />
      </div>
      <div className="dialogue">
        <img src={images.uiAssets[15]} />
        <p ref={textRef}>Hey there, Alex!</p>
      </div>
    </div>
  );
};

export default Dialogue;
