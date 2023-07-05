import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import { activeChapterSelector } from "../../store/features/progressSlice";
import { readContent } from "../../store/features/contentSlice";
import { images } from "../../utils/images";

const NotifyChapters = () => {
  const content = useSelector(readContent);
  const activeChapter = useSelector(activeChapterSelector);
  const notifyRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      notifyRef.current,
      { top: 0, duration: 1 },
      { top: -200, delay: 5, duration: 1 }
    );
  }, []);

  return (
    <div ref={notifyRef} className="notify-chapters">
      <div className="topbar">
        <img src={images.uiAssets[0]} alt="" />
      </div>
      <h1>{content[activeChapter].chapterName}</h1>
      <p>{content[activeChapter].chapterDescription}</p>
    </div>
  );
};

export default NotifyChapters;
