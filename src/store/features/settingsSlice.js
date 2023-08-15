import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state[email] = action.payload;
    },
  },
});

export const { setEmail } = settingsSlice.actions;

export const selectEmail = (state) => {
  return state.settings.email;
};

export default settingsSlice.reducer;
