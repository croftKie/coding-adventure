import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intro: [
    {
      class: "one",
      text: "Everything is black around you, you can't see a thing!",
    },
    { class: "two", text: "Suddenly you hear a voice in your head." },
    { class: "three", text: "Your name is Alex, right?" },
    { class: "four", text: "Welcome to Cyberspace..." },
    {
      class: "five",
      text: "Looks like you fell into the old computer program!",
    },
    {
      class: "six",
      text: "This is a world of puzzles, logic and code.",
    },
    {
      class: "seven",
      text: "You'll need to solve the puzzles you find to escape.",
    },
    {
      class: "eight",
      text: "Luckily, you'll have some help!",
    },
    {
      class: "nine",
      text: "Click me to start your adventure",
    },
  ],
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {},
});

export const introSelector = (state) => state.story.intro;

export default storySlice.reducer;
