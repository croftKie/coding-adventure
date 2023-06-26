import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapters: [
    {
      chapterName: "The Forest",
      chapterDescription:
        "lorem ipsum text would have been good to include here but I am writing it in the state slice and do not have access to that shortcut",
      chapterId: 0,
      chapterPuzzles: [
        {
          puzzleName: "The Clearing",
          id: 0,
          type: 1,
          puzzleDescription:
            "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
          startLocations: [
            { image: "pirate", x: 400, y: 400 },
            { image: "gold", x: 100, y: 100 },
          ],
          endLocations: [{ image: "pirate", x: 100, y: 100 }, {}],
          completed: false,
        },
        {
          puzzleName: "The Tree",
          id: 1,
          type: 2,
          puzzleDescription:
            "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
          clues: [
            "this is clue number one",
            "this is clue number two",
            "this is clue number three",
          ],
          winCondition: ["XXX", "XXX", "XXX"],
          completed: false,
        },
        {
          puzzleName: "The Hidden Gold",
          id: 2,
          type: 3,
          puzzleDescription:
            "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
          startLocations: [{}, {}],
          endLocations: [{}, {}],
          completed: false,
        },
      ],
      points: [
        { top: "57%", left: "16%" },
        { top: "60%", left: "90%" },
        { top: "35%", left: "67%" },
      ],
      completedStatus: false,
    },
    {
      chapterName: "The City",
      chapterDescription:
        "lorem ipsum text would have been good to include here but I am writing it in the state slice and do not have access to that shortcut",
      chapterId: 1,
      chapterPuzzles: [
        {
          puzzleName: "The Clearing II",
          id: 201,
          type: 1,
          puzzleDescription:
            "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
          startLocations: [
            { image: "pirate", x: 200, y: 100 },
            { image: "gold", x: 300, y: 200 },
          ],
          endLocations: [{ image: "pirate", x: 100, y: 100 }, {}],
          completed: false,
        },
        {
          puzzleName: "The Tree II",
          id: 202,
          type: 2,
          puzzleDescription:
            "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
          clues: [
            "this is clue number one",
            "this is clue number two",
            "this is clue number three",
          ],
          winCondition: ["XXX", "XXX", "XXX"],
          completed: false,
        },
        {
          puzzleName: "The Hidden Gold II",
          id: 303,
          type: 3,
          puzzleDescription:
            "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
          startLocations: [{}, {}],
          endLocations: [{}, {}],
          completed: false,
        },
      ],
      points: [
        { top: "37%", left: "46%" },
        { top: "80%", left: "20%" },
        { top: "55%", left: "67%" },
      ],
      completedStatus: false,
    },
    {
      chapterName: "The Cave",
      chapterId: 2,
      chapterPuzzles: [],
      points: [
        { top: "57%", left: "16%" },
        { top: "60%", left: "90%" },
        { top: "35%", left: "67%" },
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
      console.log(action.payload);
      const chapterIndex = action.payload.chapterId;
      const puzzleIndex = action.payload.puzzleId;
      state.chapters[chapterIndex].chapterPuzzles[puzzleIndex].completed =
        !state.chapters[chapterIndex].chapterPuzzles[puzzleIndex].completed;
    },
  },
});

export const { setChapterCompleteStatus, setPuzzleCompleteStatus } =
  contentSlice.actions;

export const readContent = (state) => state.content.chapters;
export default contentSlice.reducer;
