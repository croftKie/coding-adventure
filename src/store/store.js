import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./features/UiSlice";
import settingsSlice from "./features/settingsSlice";
import challengeSlice from "./features/challengeSlice";

export const store = configureStore({
  reducer: {
    ui: UiSlice,
    settings: settingsSlice,
    challenge: challengeSlice,
  },
});
