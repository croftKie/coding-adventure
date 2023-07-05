import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  splashScreen: true,
  popUp: false,
  settings: false,
  leaderboard: false,
  progress: false,
  options: false,
  intro: false,
};

const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateUi: (state, action) => {
      if (state[action.payload] === true) {
        state[action.payload] = false;
      } else {
        state[action.payload] = true;
      }
    },
  },
});

export const { updateUi } = UiSlice.actions;

export const SplashSelector = (state) => state.ui.splashScreen;
export const popUpSelector = (state) => state.ui.popUp;
export const settingsSelector = (state) => state.ui.settings;
export const leaderboardSelector = (state) => state.ui.leaderboard;
export const progressSelector = (state) => state.ui.progress;
export const optionsSelector = (state) => state.ui.options;
export const introOpenSelector = (state) => state.ui.intro;

export default UiSlice.reducer;
