import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chaptersCompleted: [],
  activeChapter: localStorage.getItem("lastChapterCompleted")
    ? parseInt(localStorage.getItem("lastChapterCompleted")) + 1
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
  return state.progress.chaptersCompleted;
};

export default progressSlice.reducer;
