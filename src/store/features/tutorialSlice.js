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
    name: "UI Tutorial",
    text: [
      "Explore the screen and learn a little about the story from Byte",
      "Click on 'Open Puzzle' to get started on the next puzzle",
      "Use the arrows below to swap between puzzles in this chapter",
      "Check out your progress in the progress tab on the navigation bar",
      "Check out the leaderboard and see how others are doing in the leaderboard tab",
    ],
  },
  byteText: {
    name: "Byte Tutorial",
    text: [
      "Byte is your faithful companion on your journey.",
      "He will be able to teach you a little about the world.",
      "He will also be how you interact with the world.",
      "You will be guiding Byte through the puzzles of this world.",
      "He'll pop up whenever you enter a new puzzle of chapter",
    ],
  },
  popupTutorial: {
    name: "Puzzle Tutorial",
    text: [
      "Each chapter will have a series of puzzles",
      "It's your job to solve them.",
      "There are three puzzle types",
      "Instruction Puzzles require you to give steps to reach a goal",
      "Bug Fix puzzles require you to fix some instructions that don't work",
      "Code puzzles require you to use logical thinking to solve a riddle",
    ],
  },
  instructionPuzzle: {
    name: "Instruction Puzzles",
    text: [
      "Use the arrow buttons and option buttons to complete the puzzle.",
      "MoveForward() - Moves your character forward by a number of steps.",
      "MoveLeft() - Moves your character left by a number of steps.",
      "MoveBackwards() - Moves your character left by a number of steps.",
      "MoveRight() - Moves your character right by a number of steps.",
      "Repeat() - repeat the follow instructions X times.",
      "End() - Tells the Repeat() block where to stop.",
      "To use Repeat(), add it before the instructions you wish to repeat, and add an End() after the instructions.",
    ],
  },
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
export const byteTutorialSelector = (state) => {
  return state.tutorial.byteText;
};
export const popupTutorialSelector = (state) => {
  return state.tutorial.popupTutorial;
};
export const instructionPuzzleTutorialSelector = (state) => {
  return state.tutorial.instructionPuzzle;
};
export default tutorialSlice.reducer;
