// Main Component for Codeventure Application

// styling and image asset imports
import "./css/App.css";

// React and React Redux dependencies
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Import statements for child components
import Splash from "./comps/Splash";
import Landscape from "./comps/Landscape";

// Store import statements
import { SplashSelector } from "./store/features/UiSlice";
import FunctionsGame from "./comps/FunctionsGame";

function App() {
  // component variable declarations
  const splashStatus = useSelector(SplashSelector);
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

  if (screenSize.width - 200 <= screenSize.height) {
    return <Landscape />;
  }
  if (splashStatus) {
    return <Splash />;
  }

  return <FunctionsGame />;
}

export default App;
