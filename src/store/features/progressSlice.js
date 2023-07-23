import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Holds state on how many chapters have been completed and which is the active chapter and puzzle
  chaptersCompleted: [],
  activeChapter: localStorage.getItem("lastChapterCompleted")
    ? parseInt(localStorage.getItem("lastChapterCompleted")) + 1
    : 0,
  lastChapterCompleted: localStorage.getItem("lastChapterCompleted")
    ? parseInt(localStorage.getItem("lastChapterCompleted"))
    : 0,
  activePuzzle: 0,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    changeCurrentPuzzle: (state, action) => {
      state.activePuzzle = action.payload;
    },
    changeCurrentChapter: (state, action) => {
      state.activeChapter = action.payload;
    },
    addCompletedChapter: (state, action) => {
      localStorage.setItem("lastChapterCompleted", action.payload);
      state.chaptersCompleted = [...state.chaptersCompleted, action.payload];
    },
  },
});

export const {
  changeCurrentPuzzle,
  changeCurrentChapter,
  addCompletedChapter,
} = progressSlice.actions;

export const activePuzzleSelector = (state) => state.progress.activePuzzle;
export const activeChapterSelector = (state) => state.progress.activeChapter;
export const allChaptersCompletedSelector = (state) => {
  return state.progress.lastChapterCompleted;
};

export default progressSlice.reducer;
