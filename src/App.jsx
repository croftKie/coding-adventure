// Main Component for Codeventure Application

// styling and image asset imports
import "./css/App.css";
import { images } from "./utils/images.js";

// React and React Redux dependencies
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import statements for child components
import Splash from "./comps/Splash";
import Loading from "./comps/Loading";
import Puzzle from "./comps/Puzzle.jsx";
import Intro from "./comps/story-comps/Intro";
import Landscape from "./comps/Landscape";
import Ending from "./comps/story-comps/Ending";

// Store import statements
import {
  SplashSelector,
  exitOpenSelector,
  functionGameOpenSelector,
  introOpenSelector,
  updateUi,
} from "./store/features/UiSlice";
import FunctionsGame from "./comps/FunctionsGame";

function App() {
  // component variable declarations
  const dispatch = useDispatch();
  const splashStatus = useSelector(SplashSelector);
  const introOpenState = useSelector(introOpenSelector);
  const exitOpenState = useSelector(exitOpenSelector);
  const functionGameOpenState = useSelector(functionGameOpenSelector);
  const [screenSize, setScreenSize] = useState(getCurrentDimensions());

  function getCurrentDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimensions = () => {
      setScreenSize(getCurrentDimensions());
    };
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [screenSize]);

  const endGame = () => {
    dispatch(updateUi("exit"));
  };

  // Returns based on splash screen status and chapter complete status and default return
  if (functionGameOpenState) {
    console.log("fired");
    return <FunctionsGame />;
  }

  if (screenSize.width - 200 <= screenSize.height) {
    return <Landscape />;
  }
  if (splashStatus) {
    return <Splash />;
  }
  if (introOpenState) {
    return <Intro />;
  }

  if (exitOpenState) {
    return <Ending />;
  }

  // if (content[activeChapter].completedStatus) {
  //   return <Loading />;
  // }

  return (
    <>
      <div className="contentWindow">
        <div className="topbar">
          <div className="buttons">
            <div className="item">
              <img
                onClick={() => {
                  dispatch(updateUi("splashScreen"));
                }}
                src={images.uiAssets.close}
                alt=""
              />
            </div>
          </div>
        </div>
        <Puzzle endGame={endGame} />
      </div>
    </>
  );
}

export default App;
