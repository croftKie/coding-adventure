import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  splashScreen: false,
  popUp: false,
  settings: false,
  leaderboard: false,
  classroom: false,
  progress: false,
  chat: false,
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
export const classroomSelector = (state) => state.ui.classroom;
export const progressSelector = (state) => state.ui.progress;
export const chatSelector = (state) => state.ui.progress;

export default UiSlice.reducer;
