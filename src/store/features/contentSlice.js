import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapters: [
    {
      chapterName: "Autumn",
      chapterDescription:
        "Following your map you believe there is a treasure chest hidden somewhere near that waterfall. You move cautiously to avoid drawing attention from the city.",
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
          startLocations: [
            { x: 50, y: 400 },
            { x: 350, y: 50 },
          ],
          endLocations: [{ x: 350, y: 50 }],
          completed: false,
          assets: { puzzleAssets: [1, 2], puzzleBgAssets: [0, 0] },
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
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [2] },
        },
      ],
      completedStatus: false,
    },
    {
      chapterName: "Winter",
      chapterDescription:
        "With the first treasure found you continue you to follow your map, this time it leads to a hole beneath that old tree across the lake.",
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
          startLocations: [
            { x: 400, y: 400 },
            { x: 100, y: 100 },
          ],
          endLocations: [{ x: 100, y: 100 }],
          completed: false,
          assets: { puzzleAssets: [0, 7], puzzleBgAssets: [3, 3] },
        },
        {
          puzzleName: "Getting into the shining skyscraper",
          id: 1,
          type: 2,
          puzzleDialogue: [
            "LLooks like the bugs have spotted us!",
            "We should get into the building quickly.",
            "Solve the riddle and crack the door code",
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
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [4] },
        },
        {
          puzzleName: "Fix the crazy elevator",
          id: 2,
          type: 3,
          puzzleDialogue: [
            "That was a close one!",
            "At least we can take a breath now... or you can, I don't really breath.",
            "But I can simulate it... in... out...in...out",
            "Let's take the elevator out of here...",
            "You should know, its a little crazy.",
            "We might have to fix the directions to reach the exit we want",
          ],
          startLocations: [
            { x: 400, y: 400 },
            { x: 100, y: 100 },
          ],
          endLocations: [{ x: 100, y: 100 }],
          completed: false,
          assets: { puzzleAssets: [0, 5], puzzleBgAssets: [5, 5] },
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
      assets: { bgAssets: [0] },
    },
    {
      chapterName: "Spring",
      chapterDescription:
        "That was easy! OK, the last X on your map leads right into the city, to the top of that tower with the sun shining down on it.",
      chapterId: 2,
      chapterPuzzles: [
        {
          puzzleName: "Climbing the tree!",
          id: 0,
          type: 1,
          puzzleDialogue: [
            "Oh no... we shouldn't have come here.",
            "This is the KOBOL forest",
            "Its the oldest kingdom in the land.",
            "The guards here are ruthless.",
            "They don't like any other code!",
            "We need to be sneaky to get through here.",
            "Lets start by the waterfall, I know a cave is around there.",
          ],
          startLocations: [
            { x: 400, y: 400 },
            { x: 100, y: 100 },
          ],
          endLocations: [{ x: 100, y: 100 }],
          completed: false,
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [6, 6] },
        },
        {
          puzzleName: "The Forest Maze",
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
          puzzleName: "The Stone Door",
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
      assets: { bgAssets: [0] },
    },
    {
      chapterName: "Summer",
      chapterDescription:
        "That was easy! OK, the last X on your map leads right into the city, to the top of that tower with the sun shining down on it.",
      chapterId: 2,
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
          startLocations: [
            { x: 400, y: 400 },
            { x: 100, y: 100 },
          ],
          endLocations: [{ x: 100, y: 100 }],
          completed: false,
          assets: { puzzleAssets: [0, 1], puzzleBgAssets: [9, 9] },
        },
        {
          puzzleName: "The Stone Door",
          id: 2,
          type: 2,
          puzzleDialogue: [
            "Welcome to CyberSpace!",
            "You'll have to beat all the puzzles if you want to escape",
            "Lets get started!",
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
          puzzleName: "The Forest Maze",
          id: 1,
          type: 3,
          puzzleDialogue: ["Welcome to CyberSpace!"],
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
      assets: { bgAssets: [0] },
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
      console.log(action.payload);
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
