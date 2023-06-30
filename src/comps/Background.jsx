import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { images } from "../utils/images";
import { readContent } from "../store/features/contentSlice";
import { activeChapterSelector } from "../store/features/progressSlice";

const Background = () => {
  const activeChapter = useSelector(activeChapterSelector);
  const content = useSelector(readContent);
  const bgImage =
    images.chapterBgAssets[content[activeChapter].assets.bgAssets[0]];
  return (
    <div className="background">
      <img src={bgImage} alt="" />
    </div>
  );
};

export default Background;
