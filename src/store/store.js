import { configureStore } from "@reduxjs/toolkit";
import progressSlice from "./features/progressSlice";
import UiSlice from "./features/UiSlice";
import currentInput from "./features/currentInput";
import contentSlice from "./features/contentSlice";
import tutorialSlice from "./features/tutorialSlice.js";
import storySlice from "./features/storySlice";

export const store = configureStore({
  reducer: {
    content: contentSlice,
    progress: progressSlice,
    ui: UiSlice,
    currentInput: currentInput,
    tutorial: tutorialSlice,
    story: storySlice,
  },
});
