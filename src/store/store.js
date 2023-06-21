import { configureStore } from "@reduxjs/toolkit";
import puzzlesSlice from "./features/puzzlesSlice";
import chaptersSlice from "./features/chaptersSlice";
import progressSlice from "./features/progressSlice";
import UiSlice from "./features/UiSlice";
import currentInput from "./features/currentInput";

export const store = configureStore({
    reducer : {
        puzzles : puzzlesSlice,
        chapters : chaptersSlice,
        progress : progressSlice,
        ui : UiSlice,
        currentInput : currentInput
    }
})