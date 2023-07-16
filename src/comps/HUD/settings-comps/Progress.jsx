import React, { useState, useEffect } from "react";
import { images } from "../../../utils/images";
import { readContent } from "../../../store/features/contentSlice";
import { useSelector } from "react-redux";

const Progress = () => {
  const bg1 = `url(${images.progressAssets[[0]]})`;
  const bg2 = `url(${images.progressAssets[[1]]})`;
  const bg3 = `url(${images.progressAssets[[2]]})`;
  const bg4 = `url(${images.progressAssets[[3]]})`;
  const content = useSelector(readContent);

  return (
    <div className="progress">
      <div className={"bg bg-1"} style={{ backgroundImage: bg1 }}>
        <div className="info">
          <div className="title">
            <h2>Chapter 1</h2>
            <p>{content[0].chapterDescription}</p>
          </div>
          <div className="cards">
            <div
              className="card one"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div
              className="card two"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div
              className="card three"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg bg-2"} style={{ backgroundImage: bg2 }}>
        <div className="info">
          <div className="title">
            <h2>Chapter 1</h2>
            <p>{content[1].chapterDescription}</p>
          </div>
          <div className="cards">
            <div
              className="card one"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div
              className="card two"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div
              className="card three"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg bg-3"} style={{ backgroundImage: bg3 }}>
        <div className="info">
          <div className="title">
            <h2>Chapter 1</h2>
            <p>{content[2].chapterDescription}</p>
          </div>
          <div className="cards">
            <div
              className="card one"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div
              className="card two"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div
              className="card three"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg bg-4"} style={{ backgroundImage: bg4 }}>
        <div className="info">
          <div className="title">
            <h2>Chapter 1</h2>
            <p>{content[3].chapterDescription}</p>
          </div>
          <div className="cards">
            <div
              className="card one"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[0].puzzleName}</h3>
            </div>
            <div
              className="card two"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[1].puzzleName}</h3>
            </div>
            <div
              className="card three"
              style={
                content[0].chapterPuzzles[0].completed
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "pink" }
              }>
              <h3>{content[0].chapterPuzzles[2].puzzleName}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
