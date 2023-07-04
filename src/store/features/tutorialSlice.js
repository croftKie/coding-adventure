import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tutorialComplete: false,
  tutorialOpen: false,
  tutorialSteps: [
    { text: "lorem ipsum text is useful for this exact reason", class: "one" },
    { text: "lorem ipsum text is useful for this exact reason", class: "two" },
    {
      text: "lorem ipsum text is useful for this exact reason",
      class: "three",
    },
  ],
  activeTutorial: 0,
};

const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {
    changeTutorial: (state, action) => {
      state.activeTutorial = action.payload;
    },
    toggleTutorial: (state) => {
      state.tutorialOpen = !state.tutorialOpen;
    },
  },
});

export const { changeTutorial, toggleTutorial } = tutorialSlice.actions;

export const tutorialStepSelector = (state) => {
  return state.tutorial.tutorialSteps;
};
export const activeTutorialSelector = (state) => {
  return state.tutorial.activeTutorial;
};
export const tutorialOpenSelector = (state) => {
  return state.tutorial.tutorialOpen;
};
export default tutorialSlice.reducer;
