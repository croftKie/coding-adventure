import React from "react";
import { images } from "../../utils/images.js";
import {
  tutorialStepSelector,
  changeTutorial,
  activeTutorialSelector,
  toggleTutorial,
  tutorialOpenSelector,
} from "../../store/features/tutorialSlice.js";
import { useSelector, useDispatch } from "react-redux";

const TutModal = () => {
  const tutorialSteps = useSelector(tutorialStepSelector);
  const activeTutorial = useSelector(activeTutorialSelector);
  const tutOpen = useSelector(tutorialOpenSelector);
  const dispatch = useDispatch();

  console.log(tutOpen);

  const classes = `tutorial ${tutorialSteps[activeTutorial].class}`;
  switch (activeTutorial) {
    case 0:
      return (
        <div className={classes}>
          <div className="topbar">
            <h3>How to... 1/3</h3>
          </div>
          <p>{tutorialSteps[activeTutorial].text}</p>
          <button
            onClick={() => {
              dispatch(changeTutorial(1));
            }}
          >
            Next
          </button>
        </div>
      );
    case 1:
      return (
        <div className={classes}>
          <div className="topbar">
            <h3>How to... 2/3</h3>
          </div>
          <p>{tutorialSteps[activeTutorial].text}</p>
          <button
            onClick={() => {
              dispatch(changeTutorial(2));
            }}
          >
            Next
          </button>
        </div>
      );
    case 2:
      return (
        <div className={classes}>
          <div className="topbar">
            <h3>How to... 3/3</h3>
          </div>
          <p>{tutorialSteps[activeTutorial].text}</p>
          <button
            onClick={() => {
              dispatch(toggleTutorial());
              dispatch(changeTutorial(0));
            }}
          >
            Close
          </button>
        </div>
      );
    default:
      return <></>;
  }
};

export default TutModal;
