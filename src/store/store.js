import { configureStore } from "@reduxjs/toolkit";
import puzzlesSlice from "./features/puzzlesSlice";
import chaptersSlice from "./features/chaptersSlice";
import progressSlice from "./features/progressSlice";

export const store = configureStore({
    reducer : {
        puzzles : puzzlesSlice,
        chapters : chaptersSlice,
        progress : progressSlice
    }
})