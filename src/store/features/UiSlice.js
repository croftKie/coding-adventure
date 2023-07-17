import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  splashScreen: true,
  popUp: false,
  intro: false,
  exit: false,
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
export const introOpenSelector = (state) => state.ui.intro;
export const exitOpenSelector = (state) => state.ui.exit;

export default UiSlice.reducer;
