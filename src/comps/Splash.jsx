import React, { useState } from "react";
import functionImg from "../assets/function.png";
import { useDispatch } from "react-redux";
import { updateUi } from "../store/features/UiSlice";

const Splash = () => {
  const [infoMode, setInfoMode] = useState(false);
  const dispatch = useDispatch();
  const splashContent = (
    <>
      {" "}
      <div className="upper">
        <img src={functionImg} alt="" />
        <h2>Welcome to CodeVenture</h2>
        <p>
          A retro-style puzzle game for practicing your coding skills. Create
          pure functions to solve algorithms and code challenges.
        </p>
      </div>
      <div className="lower">
        <button
          onClick={() => {
            setInfoMode(true);
          }}
        >
          How it works
        </button>
        <button
          onClick={() => {
            dispatch(updateUi("splashScreen"));
            localStorage.setItem("splash", 1);
          }}
        >
          Start the Challenge
        </button>
        <a href="https://www.kierancroft.com">
          <button>My other work</button>
        </a>
      </div>
    </>
  );

  const infoContent = (
    <>
      <div className="infocontent">
        <div className="button">
          <button
            onClick={() => {
              setInfoMode(false);
            }}
          >
            Go Back
          </button>
        </div>
        <div className="item">
          <h2>Item one</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            velit itaque assumenda veniam officiis officia cupiditate, quis
            temporibus praesentium sapiente. Incidunt alias quisquam reiciendis
            optio praesentium? Quam officiis voluptatem eligendi!
          </p>
        </div>
        <div className="item">
          <h2>Item one</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            velit itaque assumenda veniam officiis officia cupiditate, quis
            temporibus praesentium sapiente. Incidunt alias quisquam reiciendis
            optio praesentium? Quam officiis voluptatem eligendi!
          </p>
        </div>
        <div className="item">
          <h2>Item one</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            velit itaque assumenda veniam officiis officia cupiditate, quis
            temporibus praesentium sapiente. Incidunt alias quisquam reiciendis
            optio praesentium? Quam officiis voluptatem eligendi!
          </p>
        </div>
        <div className="item">
          <h2>Item one</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            velit itaque assumenda veniam officiis officia cupiditate, quis
            temporibus praesentium sapiente. Incidunt alias quisquam reiciendis
            optio praesentium? Quam officiis voluptatem eligendi!
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="landscape">
      <div className="landscape-content">
        <div className="topbar"></div>
        <div className="content">{!infoMode ? splashContent : infoContent}</div>
      </div>
    </div>
  );
};

export default Splash;
