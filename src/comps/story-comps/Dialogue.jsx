import React from "react";
import { images } from "../../utils/images";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import Topbar from "../util-comps/Topbar";
import { toast } from "react-toastify";
import Msg from "../tutorial/TutModal";
import { byteTutorialSelector } from "../../store/features/tutorialSlice";
import { useSelector } from "react-redux";

gsap.registerPlugin(TextPlugin);

const Dialogue = ({ dialogue }) => {
  // variable declaration
  const byteTutorial = useSelector(byteTutorialSelector);
  const dialogueRef = useRef();
  const textRef = useRef();

  //set up GSAP timeline for dialogue box - init on final load
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

  // init and populate tutorial toast
  const showToastMessage = () => {
    toast(<Msg tutorial={byteTutorial} />, { autoClose: false });
  };
  return (
    <div ref={dialogueRef} className="dialogue-container">
      <Topbar show={showToastMessage} close={hideDialogueBox} />
      <div className="dialogue">
        <img src={images.puzzleAssets.byte_right} />
        <p ref={textRef}>Hey there, Alex!</p>
      </div>
    </div>
  );
};

export default Dialogue;
