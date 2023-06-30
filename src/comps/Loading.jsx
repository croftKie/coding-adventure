import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { readContent } from "../store/features/contentSlice";

import {
  changeCurrentChapter,
  activeChapterSelector,
} from "../store/features/progressSlice";

const Loading = () => {
  const dispatch = useDispatch();
  const activeChapter = useSelector(activeChapterSelector);
  const content = useSelector(readContent);
  return (
    <div className="loading">
      <h1>
        You completed chapter {activeChapter + 1} -{" "}
        {content[activeChapter].chapterName}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa officia
        harum, veniam minima ea nobis. Odio officia error minima cupiditate
        doloremque ipsa cumque aliquid beatae! Fugit similique fugiat eligendi
        iure.
      </p>
      <p>The next challenge awaits you!</p>
      <button
        onClick={() => {
          dispatch(changeCurrentChapter(activeChapter + 1));
        }}
      >
        Go to next chapter
      </button>
    </div>
  );
};

export default Loading;
