import React from "react";
import { useDispatch } from "react-redux";

const Loading = () => {
  // variable declarations
  const dispatch = useDispatch();

  return (
    <div className="loading">
      <h1>
        You completed chapter {activeChapter + 1} -{" "}
        {content[activeChapter].chapterName}
      </h1>
      <p>The next challenge awaits you!</p>
      <button
        onClick={() => {
          dispatch(changeCurrentChapter(activeChapter + 1));
          dispatch(addCompletedChapter(activeChapter));
        }}
      >
        Go to next chapter
      </button>
    </div>
  );
};

export default Loading;
