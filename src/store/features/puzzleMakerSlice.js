import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  puzzles: JSON.parse(localStorage.getItem("puzzles")) || [],
};

const puzzleMakerSlice = createSlice({
  name: "puzzleMaker",
  initialState,
  reducers: {
    addNewPuzzle: (state, action) => {
      const array = [...state.puzzles, action.payload];
      state.puzzles = array;
      localStorage.setItem("puzzles", JSON.stringify(array));
    },
  },
});

export const { addNewPuzzle } = puzzleMakerSlice.actions;

export const selectPuzzleMakerPuzzles = (state) => {
  return state.puzzleMaker.puzzles;
};

export default puzzleMakerSlice.reducer;
