import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  splashTutorial: {
    name: "CodeVenture Tutorial",
    text: [
      "Click 'Start New' to begin a new game from Chapter 1.",
      "Click 'Continue' to carry on with your current game",
      "Click 'Make a puzzle' to create your own custom puzzles.",
    ],
  },
  puzzleScreen: {
    name: "Puzzle Tutorial",
    text: [
      "Explore the screen and learn a little about the story from Byte",
      "Click on 'Open Puzzle' to get started on the next puzzle",
      "Use the arrows below to swap between puzzles in this chapter",
      "Check out your progress in the progress tab on the navigation bar",
      "Check out the leaderboard and see how others are doing in the leaderboard tab",
    ],
  },
  instructionPuzzle: { name: "Instruction Puzzle Tutorial", text: [] },
  bugFixPuzzle: { name: "Bug Fix Tutorial", text: [] },
  cryptoPuzzle: { name: "Crack the Code Tutorial", text: [] },
  activeTutorial: 0,
};

const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {
    changeTutorial: (state, action) => {
      state.activeTutorial = action.payload;
    },
  },
});

export const { changeTutorial, toggleTutorial } = tutorialSlice.actions;

export const splashTutorialSelector = (state) => {
  return state.tutorial.splashTutorial;
};
export const puzzleTutorialSelector = (state) => {
  return state.tutorial.puzzleScreen;
};
export default tutorialSlice.reducer;
