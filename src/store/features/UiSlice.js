import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  splashScreen: false,
  functionGame: true,
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
export const functionGameOpenSelector = (state) => state.ui.functionGame;

export default UiSlice.reducer;
