import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  puzzles: [],
};

const puzzleMakerSlice = createSlice({
  name: "puzzleMaker",
  initialState,
  reducers: {
    addNewPuzzle: (state, action) => {
      state.puzzles = [...state.puzzles, action.payload];
    },
  },
});

export const { addNewPuzzle } = puzzleMakerSlice.actions;

export const selectPuzzleMakerPuzzles = (state) => {
  return state.puzzleMaker.puzzles;
};

export default puzzleMakerSlice.reducer;
