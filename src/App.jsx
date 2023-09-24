// Main Component for Codeventure Application

// styling and image asset imports
import "./css/App.css";

// React and React Redux dependencies
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { SplashSelector } from "./store/features/UiSlice";

// Import statements for child components
import Landscape from "./comps/Landscape";
import FunctionsGame from "./comps/FunctionsGame";
import Splash from "./comps/Splash";

function App() {
  // component variable declarations
  const [screenSize, setScreenSize] = useState(getCurrentDimensions());
  const widthOffset = 200;
  const splashStatus = useSelector(SplashSelector);

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

  if (screenSize.width - widthOffset <= screenSize.height) {
    return <Landscape />;
  }

  if (splashStatus) {
    return <Splash />;
  }

  return <FunctionsGame />;
}

export default App;
