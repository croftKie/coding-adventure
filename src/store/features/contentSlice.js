import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapters: [
    {
      chapterName: "The Waterfall",
      chapterDescription:
        "Following your map you believe there is a treasure chest hidden somewhere near that waterfall. You move cautiously to avoid drawing attention from the city.",
      chapterId: 0,
      chapterPuzzles: [
        {
          puzzleName: "Cold Cold Gold",
          id: 0,
          type: 1,
          puzzleDescription:
            "Use the direction buttons to add instructions, plan out your path to reach the goal.",
          startLocations: [
            { image: "pirate", x: 400, y: 400 },
            { image: "gold", x: 100, y: 100 },
          ],
          endLocations: [{ image: "pirate", x: 100, y: 100 }],
          completed: false,
        },
        // {
        //   puzzleName: "The Tree",
        //   id: 1,
        //   type: 2,
        //   puzzleDescription:
        //     "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
        //   clues: [
        //     "this is clue number one",
        //     "this is clue number two",
        //     "this is clue number three",
        //   ],
        //   winCondition: ["XXX", "XXX", "XXX"],
        //   completed: false,
        // },
        // {
        //   puzzleName: "The Hidden Gold",
        //   id: 2,
        //   type: 3,
        //   puzzleDescription:
        //     "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
        //   startLocations: [{}, {}],
        //   endLocations: [{}, {}],
        //   completed: false,
        // },
      ],
      points: [
        { top: "57%", left: "10%" },
        // { top: "60%", left: "90%" },
        // { top: "35%", left: "67%" },
      ],
      completedStatus: false,
    },
    {
      chapterName: "The Weathered Tree",
      chapterDescription:
        "With the first treasure found you continue you to follow your map, this time it leads to a hole beneath that old tree across the lake.",
      chapterId: 1,
      chapterPuzzles: [
        {
          puzzleName: "The Deep Dark",
          id: 0,
          type: 1,
          puzzleDescription:
            "Use the direction buttons to add instructions, plan out your path to reach the goal.",
          startLocations: [
            { image: "pirate", x: 200, y: 100 },
            { image: "gold", x: 300, y: 200 },
          ],
          endLocations: [{ image: "pirate", x: 300, y: 200 }, {}],
          completed: false,
        },
        // {
        //   puzzleName: "The Tree II",
        //   id: 202,
        //   type: 2,
        //   puzzleDescription:
        //     "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
        //   clues: [
        //     "this is clue number one",
        //     "this is clue number two",
        //     "this is clue number three",
        //   ],
        //   winCondition: ["XXX", "XXX", "XXX"],
        //   completed: false,
        // },
        // {
        //   puzzleName: "The Hidden Gold II",
        //   id: 303,
        //   type: 3,
        //   puzzleDescription:
        //     "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
        //   startLocations: [{}, {}],
        //   endLocations: [{}, {}],
        //   completed: false,
        // },
      ],
      points: [
        { top: "70%", left: "83%" },
        // { top: "80%", left: "20%" },
        // { top: "55%", left: "67%" },
      ],
      completedStatus: false,
    },
    {
      chapterName: "The City",
      chapterDescription:
        "That was easy! OK, the last X on your map leads right into the city, to the top of that tower with the sun shining down on it.",
      chapterId: 2,
      chapterPuzzles: [
        {
          puzzleName: "Jewelled Tower",
          id: 0,
          type: 1,
          puzzleDescription:
            "Use the direction buttons to add instructions, plan out your path to reach the goal.",
          startLocations: [
            { image: "pirate", x: 50, y: 300 },
            { image: "gold", x: 400, y: 100 },
          ],
          endLocations: [{ image: "pirate", x: 400, y: 100 }],
          completed: false,
        },
      ],
      points: [
        { top: "45%", left: "60%" },
        // { top: "60%", left: "90%" },
        // { top: "35%", left: "67%" },
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
  },
});

export const { setChapterCompleteStatus, setPuzzleCompleteStatus } =
  contentSlice.actions;

export const readContent = (state) => state.content.chapters;
export default contentSlice.reducer;
