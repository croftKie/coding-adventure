import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type1_puzzle: {},
  type2_puzzle: {},
  type3_puzzle: {},
};

const puzzleSlice = createSlice({
  name: "puzzle",
  initialState,
  reducers: {
    addNewPuzzle: (state, action) => {
      state[`type${action.payload.type.puzzle_type}_puzzle`] = action.payload;
    },
  },
});

export const { addNewPuzzle } = puzzleSlice.actions;

export const selectT1Puzzle = (state) => {
  return state.puzzle.type1_puzzle;
};
export const selectT2Puzzle = (state) => {
  return state.puzzle.type2_puzzle;
};
export const selectT3Puzzle = (state) => {
  return state.puzzle.type3_puzzle;
};

export default puzzleSlice.reducer;
