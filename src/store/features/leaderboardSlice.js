import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderboard: [],
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    addLeaderboardData: (state, action) => {
      state.leaderboard = action.payload;
    },
  },
});

export const { addLeaderboardData } = leaderboardSlice.actions;

export const getLeaderboard = (state) => state.leaderboard.leaderboard;

export default leaderboardSlice.reducer;
