import React, { useState, useEffect } from "react";
import { images } from "../../../utils/images";
import { readContent } from "../../../store/features/contentSlice";
import { useSelector } from "react-redux";

const Progress = () => {
  const bg1 = `url(${images.progressAssets[[3]]})`;
  const bg2 = `url(${images.progressAssets[[1]]})`;
  const bg3 = `url(${images.progressAssets[[0]]})`;
  const bg4 = `url(${images.progressAssets[[2]]})`;
  const content = useSelector(readContent);

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
      <div className={"bg bg-2"} style={{ backgroundImage: bg2 }}>
        <div className="info">
          <div className="title">
            <h2>Bug City</h2>
            <p>{content[1].chapterDescription}</p>
          </div>
          <div className="cards">
            <div className="card one">
              <h3>{content[1].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div className="card two">
              <h3>{content[1].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div className="card three">
              <h3>{content[1].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg bg-3"} style={{ backgroundImage: bg3 }}>
        <div className="info">
          <div className="title">
            <h2>KOBOL Kingdom</h2>
            <p>{content[2].chapterDescription}</p>
          </div>
          <div className="cards">
            <div className="card one">
              <h3>{content[2].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div className="card two">
              <h3>{content[2].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div className="card three">
              <h3>{content[2].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg bg-4"} style={{ backgroundImage: bg4 }}>
        <div className="info">
          <div className="title">
            <h2>Node Beach</h2>
            <p>{content[3].chapterDescription}</p>
          </div>
          <div className="cards">
            <div className="card one">
              <h3>{content[3].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div className="card two">
              <h3>{content[3].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div className="card three">
              <h3>{content[3].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
