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
  exit: [
    {
      class: "one",
      text: "You suddenly fall through the water!",
    },
    { class: "two", text: "You hear the crashing of water" },
    { class: "three", text: "Then in a moment, it stops." },
    { class: "four", text: "You feel the fabric of a chair beneath you." },
    {
      class: "five",
      text: "You open your eyes again and your at your desk.",
    },
    {
      class: "six",
      text: "You made it home! A voice says in your head",
    },
    {
      class: "seven",
      text: "Looks like I got pulled through with you.",
    },
    {
      class: "eight",
      text: "You sigh with relief and smile, what an adventure!",
    },
    {
      class: "nine",
      text: "Lets look for another one! You hear Byte say.",
    },
  ],
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {},
});

export const introSelector = (state) => state.story.intro;
export const exitSelector = (state) => state.story.exit;

export default storySlice.reducer;
