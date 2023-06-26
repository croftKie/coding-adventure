import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chaptersCompleted: [],
  activeChapter: 0,
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
      state.chaptersCompleted = [...state.chaptersCompleted, action.payload];
    },
  },
});

export const { changeCurrentPuzzle, changeCurrentChapter } =
  progressSlice.actions;

export const activePuzzleSelector = (state) => state.progress.activePuzzle;
export const activeChapterSelector = (state) => state.progress.activeChapter;

export default progressSlice.reducer;
