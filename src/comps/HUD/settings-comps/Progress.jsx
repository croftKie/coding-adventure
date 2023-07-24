import React, { useState, useEffect } from "react";
import { images } from "../../../utils/images";
import { readContent } from "../../../store/features/contentSlice";
import { useSelector } from "react-redux";

const Progress = () => {
  const bg1 = `url(${images.progressAssets.autumn})`;
  const bg2 = `url(${images.progressAssets.winter})`;
  const bg3 = `url(${images.progressAssets.spring})`;
  const bg4 = `url(${images.progressAssets.summer})`;
  const content = useSelector(readContent);

  const backgroundManager = (chapterNumber) => {
    if (content[chapterNumber - 1].completed) {
      return {
        backgroundImage:
          chapterNumber === 1 ? bg2 : chapterNumber === 2 ? bg3 : bg4,
      };
    }
    return { backgroundColor: "rgb(41, 41, 41)" };
  };

  const buttonBgManager = (chapterNumber) => {
    if (content[chapterNumber - 1].completed) {
      return { backgroundColor: "white" };
    }
    return { backgroundColor: "rgb(31, 31, 31)" };
  };

  return (
    <div className="progress">
      <div className={"bg bg-1"} style={{ backgroundImage: bg1 }}>
        <div className="info">
          <div className="title">
            <h2>Autumn Forest</h2>
            <p>{content[0].chapterDescription}</p>
          </div>
          <div className="cards">
            <div className="card one">
              <h3>{content[0].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div className="card two">
              <h3>{content[0].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div className="card three">
              <h3>{content[0].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg bg-2"} style={backgroundManager(1)}>
        <div className="info">
          <div className="title" style={buttonBgManager(1)}>
            <h2>Bug City</h2>
            <p>{content[1].chapterDescription}</p>
          </div>
          <div className="cards">
            <div className="card one" style={buttonBgManager(1)}>
              <h3>{content[1].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div className="card two" style={buttonBgManager(1)}>
              <h3>{content[1].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div className="card three" style={buttonBgManager(1)}>
              <h3>{content[1].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg bg-3"} style={backgroundManager(2)}>
        <div className="info">
          <div className="title" style={buttonBgManager(1)}>
            <h2>KOBOL Kingdom</h2>
            <p>{content[2].chapterDescription}</p>
          </div>
          <div className="cards">
            <div className="card one" style={buttonBgManager(2)}>
              <h3>{content[2].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div className="card two" style={buttonBgManager(2)}>
              <h3>{content[2].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div className="card three" style={buttonBgManager(2)}>
              <h3>{content[2].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg bg-4"} style={backgroundManager(3)}>
        <div className="info">
          <div className="title" style={buttonBgManager(1)}>
            <h2>Node Beach</h2>
            <p>{content[3].chapterDescription}</p>
          </div>
          <div className="cards">
            <div className="card one" style={buttonBgManager(3)}>
              <h3>{content[3].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div className="card two" style={buttonBgManager(3)}>
              <h3>{content[3].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div className="card three" style={buttonBgManager(3)}>
              <h3>{content[3].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
