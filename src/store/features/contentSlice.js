import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapters: [
    {
      chapterName: "Autumn",
      chapterDescription:
        "An deep forest filled with mysterious creatures known as 'Programs', the forest is filled with puzzles to beat.",
      chapterId: 0,
      chapterPuzzles: [
        {
          puzzleName: "Climbing the tree!",
          id: 0,
          type: 1,
          puzzleDialogue: [
            "Welcome to Cyberspace!",
            "You'll have to beat all the puzzles if you want to escape.",
            "Looks like we landed on the edge of the forest",
            "We'll need to find the Stone Clearing to find you a way out of here.",
            "You're going to need me to interact with this world",
            "So I'll tag along to help you out.",
            "First up... we'll need to fetch my 'input program', its how I interact with the world...",
            "... I lost it up that tree!",
            "Could you give me instructions to get it back, whilst I climb the tree?",
          ],
          completed: false,
          puzzleAssets: [
            [
              {
                startLocation: [{ x: 50, y: 400 }],
                endLocation: { x: 350, y: 50 },
                asset: 1,
              },
              {
                startLocation: [{ x: 350, y: 50 }],
                asset: 2,
              },
            ],
            { puzzleBgAssets: [0, 0] },
          ],
        },
        {
          puzzleName: "The Forest Maze",
          id: 1,
          type: 3,
          puzzleDialogue: [
            "We have been wandering around the forest for a while...",
            "I think we might be lost...",
            "I used to have the location of the old cave in my programming.",
            "Looks like it got mixed up... these instructions don't make sense.",
            "Can you fix the instructions to help us find the old cave and escape this forest.",
          ],
          startLocations: [
            { x: 400, y: 400 },
            { x: 150, y: 150 },
          ],
          endLocations: [{ x: 150, y: 150 }],
          completed: false,
          assets: { puzzleAssets: [1, 4], puzzleBgAssets: [1, 1] },
          inputs: [
            { type: "forward", value: 200 },
            { type: "left", value: 200 },
            { type: "backwards", value: 100 },
            { type: "right", value: 100 },
          ],
          resetInputs: [
            { type: "forward", value: 200 },
            { type: "left", value: 200 },
            { type: "backwards", value: 100 },
            { type: "right", value: 100 },
          ],
        },
        {
          puzzleName: "The Stone Door",
          id: 2,
          type: 2,
          puzzleDialogue: [
            "I'm glad we got out of that forest!",
            "Oh. this is the old stone door.",
            "We will need to crack the code to open the door and escape the forest land.",
          ],
          clues: [
            "Take the first letter of your companions name, and combine it with 23 + 32",
            "You're Alex, right? Combine the letters in your name with 64 divided by 4",
            "Start with 0... add 100, subtract 40, and multiply by 2",
          ],
          winCondition: [
            ["B", "5", "5"],
            ["4", "1", "6"],
            ["1", "2", "0"],
          ],
          inputs: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          resetInputs: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          results: [],
          completed: false,
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [2] },
        },
      ],
      completedStatus: false,
    },
    {
      chapterName: "Winter",
      chapterDescription:
        "The Bug City is a scary place, code bugs hide around every corner waiting to ruin your 'Program'. It's wise not to hang around here.",
      chapterId: 1,
      chapterPuzzles: [
        {
          puzzleName: "The Bug City",
          id: 0,
          type: 1,
          puzzleDialogue: [
            "Welcome to Bug City!",
            "The city used to be beautiful and logical but now it is overrun with bugs!",
            "We should be careful here",
            "lets find a way through the city to the safe building.",
          ],
          completed: false,
          puzzleAssets: [
            [
              {
                startLocation: [{ x: 400, y: 400 }],
                endLocation: { x: 100, y: 100 },
                asset: 0,
              },
              {
                startLocation: [{ x: 100, y: 100 }],
                asset: 7,
              },
              {
                startLocation: [{ x: 200, y: 200 }],
                asset: 6,
              },
            ],
            { puzzleBgAssets: [3, 3] },
          ],
        },
        {
          puzzleName: "The Skyscraper",
          id: 1,
          type: 2,
          puzzleDialogue: [
            "Looks like the bugs have spotted us!",
            "We should get into the building quickly.",
            "Solve the riddle and crack the door code",
          ],
          clues: [
            "Add 60 to 90 and multiply the number by 5",
            "What creature roams the city?",
            "0 is false and 1 is true, what number am I thinking of... true, false, false",
          ],
          winCondition: [
            ["7", "5", "0"],
            ["B", "U", "G"],
            ["1", "0", "0"],
          ],
          inputs: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          resetInputs: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          results: [],
          completed: false,
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [4] },
          puzzleAssets: [[], { puzzleAssets: [0, 1], puzzleBgAssets: [4] }],
        },
        {
          puzzleName: "Fix the Elevator",
          id: 2,
          type: 3,
          puzzleDialogue: [
            "That was a close one!",
            "At least we can take a breath now... or you can, I don't really breath.",
            "But I can simulate it... in... out...in...out",
            "Let's take the elevator out of here...",
            "You should know, it's a little crazy.",
            "We might have to fix the directions to reach the exit we want",
          ],
          startLocations: [
            { x: 400, y: 400 },
            { x: 100, y: 100 },
          ],
          endLocations: [{ x: 100, y: 100 }],
          completed: false,
          inputs: [
            { type: "forward", value: 200 },
            { type: "left", value: 200 },
            { type: "backwards", value: 100 },
            { type: "right", value: 100 },
          ],
          resetInputs: [
            { type: "forward", value: 200 },
            { type: "left", value: 200 },
            { type: "backwards", value: 100 },
            { type: "right", value: 100 },
          ],
          puzzleAssets: [[], { puzzleAssets: [0, 5], puzzleBgAssets: [5, 5] }],
        },
      ],
      completedStatus: false,
    },
    {
      chapterName: "Spring",
      chapterDescription:
        "The shining city of KOBOL. The oldest in the land, and birthplace of Byte. Stay away from the guards, they don't like other code!",
      chapterId: 2,
      chapterPuzzles: [
        {
          puzzleName: "Entering the Cave!",
          id: 0,
          type: 1,
          puzzleDialogue: [
            "Oh no... we shouldn't have come here.",
            "This is KOBOL",
            "Its the oldest kingdom in the land.",
            "The guards here are ruthless.",
            "They don't like any other code!",
            "We need to be sneaky to get through here.",
            "Lets start by the waterfall, I know a cave is around there.",
          ],
          completed: false,
          puzzleAssets: [
            [
              {
                startLocation: [{ x: 400, y: 400 }],
                endLocation: { x: 100, y: 100 },
                asset: 0,
              },
              {
                startLocation: [{ x: 100, y: 100 }],
                asset: 7,
              },
              {
                startLocation: [{ x: 200, y: 200 }],
                asset: 6,
              },
            ],
            { puzzleBgAssets: [3, 3] },
          ],
        },
        {
          puzzleName: "Deep Dark Maze",
          id: 1,
          type: 3,
          puzzleDialogue: [
            "Oh no... the guards must have heard us!",
            "OK, we need to found our way through this cave without alerting the guards.",
            "It's been a long long time since I was here, the instructions are a little messed up in my memory.",
          ],
          startLocations: [
            { x: 400, y: 400 },
            { x: 150, y: 150 },
          ],
          endLocations: [{ x: 150, y: 150 }],
          completed: false,
          assets: { puzzleAssets: [1, 4], puzzleBgAssets: [1, 1] },
          inputs: [
            { type: "forward", value: 200 },
            { type: "left", value: 200 },
            { type: "backwards", value: 100 },
            { type: "right", value: 100 },
          ],
          resetInputs: [
            { type: "forward", value: 200 },
            { type: "left", value: 200 },
            { type: "backwards", value: 100 },
            { type: "right", value: 100 },
          ],
        },
        {
          puzzleName: "Dive through!",
          id: 2,
          type: 2,
          puzzleDialogue: [
            "We found the lake!",
            "we need to solve the riddle to open the door beneath the water and we can swim through.",
            "This should be easy... I set this code...",
            "Oh... ",
            "Looks like they changed the variables",
            "hmm, okay over to you Alex.",
          ],
          clues: [
            "Take the first letter of your companions name, and combine it with 23 + 32",
            "How many letter are in your name, combine that with 64 divided by 4",
            "Start with 0... add 100, subtract 40, and multiply by 2",
          ],
          winCondition: [
            ["B", "5", "5"],
            ["4", "2", "6"],
            ["1", "2", "0"],
          ],
          inputs: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          resetInputs: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          results: [],
          completed: false,
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [7] },
        },
      ],
      completedStatus: false,
    },
    {
      chapterName: "Summer",
      chapterDescription:
        "Node Beach, the gateway back to your world. Explore the palm trees and sand dunes to find a way out... or maybe go out to sea.",
      chapterId: 3,
      chapterPuzzles: [
        {
          puzzleName: "Finding a boat",
          id: 0,
          type: 1,
          puzzleDialogue: [
            "We made it!",
            "This is Node Beach... we are safe here.",
            "We can use one of the boats on the beach",
            "If we can get it running we can get you home",
            "But first, we need to find one!",
          ],
          completed: false,
          puzzleAssets: [
            [
              {
                startLocation: [{ x: 400, y: 400 }],
                endLocation: { x: 100, y: 100 },
                asset: 0,
              },
              {
                startLocation: [{ x: 100, y: 100 }],
                asset: 7,
              },
              {
                startLocation: [{ x: 200, y: 200 }],
                asset: 6,
              },
            ],
            { puzzleBgAssets: [3, 3] },
          ],
        },
        {
          puzzleName: "Fix it up!",
          id: 1,
          type: 2,
          puzzleDialogue: [
            "Looks great!",
            "Now... we just need to start it!",
            "Here are the instructions...",
            "Ofcourse... its another riddle!",
            "Over to you Alex.",
          ],
          clues: [
            "Take the first letter of your companions name, and combine it with 23 + 32",
            "How many letter are in your name, combine that with 64 divided by 4",
            "Start with 0... add 100, subtract 40, and multiply by 2",
          ],
          winCondition: [
            ["B", "5", "5"],
            ["4", "2", "6"],
            ["1", "2", "0"],
          ],
          inputs: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          resetInputs: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          results: [],
          completed: false,
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [10] },
        },
        {
          puzzleName: "Out to Sea",
          id: 2,
          type: 3,
          puzzleDialogue: [
            "It's running!",
            "Well done!",
            "Okay.. lets set sail.",
            "(4 Hours Later)",
            "Yep.. we are definitely going in circles.",
            "Check the map Alex, see if you can find something that looks like home",
          ],
          startLocations: [
            { x: 400, y: 400 },
            { x: 100, y: 100 },
          ],
          endLocations: [{ x: 100, y: 100 }],
          completed: false,
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [11, 11] },
          inputs: [
            { type: "forward", value: 200 },
            { type: "left", value: 200 },
            { type: "backwards", value: 100 },
            { type: "right", value: 100 },
          ],
          resetInputs: [
            { type: "forward", value: 200 },
            { type: "left", value: 200 },
            { type: "backwards", value: 100 },
            { type: "right", value: 100 },
          ],
        },
      ],
      completedStatus: false,
    },
  ],
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setChapterCompleteStatus: (state, action) => {
      const index = action.payload;
      state.chapters[index].completedStatus =
        !state.chapters[index].completedStatus;
    },
    setPuzzleCompleteStatus: (state, action) => {
      const chapterIndex = action.payload.chapterId;
      const puzzleIndex = action.payload.puzzleId;
      state.chapters[chapterIndex].chapterPuzzles[puzzleIndex].completed =
        !state.chapters[chapterIndex].chapterPuzzles[puzzleIndex].completed;
    },
    changeBugFixInstructions: (state, action) => {
      const chapterIndex = action.payload.chapterIndex;
      const puzzleIndex = action.payload.puzzleIndex;
      const inputToChange = action.payload.inputToChange;
      let loc =
        state.chapters[chapterIndex].chapterPuzzles[puzzleIndex].inputs[
          inputToChange
        ];

      loc.value = action.payload.change;
    },
    resetBugFixInstructions: (state, action) => {
      state.chapters[action.payload.chapterIndex].chapterPuzzles[
        action.payload.puzzleIndex
      ].inputs =
        state.chapters[action.payload.chapterIndex].chapterPuzzles[
          action.payload.puzzleIndex
        ].resetInputs;
    },
    changeCryptoInput: (state, action) => {
      state.chapters[action.payload.activeChapter].chapterPuzzles[
        action.payload.activePuzzle
      ].inputs[action.payload.part][action.payload.inputIndex] =
        action.payload.value;
    },
    resetCryptoInput: (state, action) => {
      state.chapters[action.payload.activeChapter].chapterPuzzles[
        action.payload.activePuzzle
      ].inputs =
        state.chapters[action.payload.activeChapter].chapterPuzzles[
          action.payload.activePuzzle
        ].resetInputs;
    },
    addCryptoResults: (state, action) => {
      state.chapters[action.payload.activeChapter].chapterPuzzles[
        action.payload.activePuzzle
      ].results = action.payload.result;
    },
  },
});

export const {
  setChapterCompleteStatus,
  setPuzzleCompleteStatus,
  changeBugFixInstructions,
  resetBugFixInstructions,
  changeCryptoInput,
  resetCryptoInput,
  addCryptoResults,
} = contentSlice.actions;

export const readContent = (state) => state.content.chapters;
export default contentSlice.reducer;
