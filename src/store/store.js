import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./features/UiSlice";
import currentInput from "./features/currentInput";
import contentSlice from "./features/contentSlice";
import storySlice from "./features/storySlice";
import puzzleSlice from "./features/puzzleSlice";
import settingsSlice from "./features/settingsSlice";
import challengeSlice from "./features/challengeSlice";

export const store = configureStore({
  reducer: {
    content: contentSlice,
    ui: UiSlice,
    currentInput: currentInput,
    story: storySlice,
    puzzle: puzzleSlice,
    settings: settingsSlice,
    challenge: challengeSlice,
  },
});
