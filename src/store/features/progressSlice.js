import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chaptersCompleted : [100],
    puzzlesComplete : [101, 102],
    currentPuzzle : -1
}

const progressSlice = createSlice({
    name : 'progress',
    initialState,
    reducers : {
        changeCurrentPuzzle : (state, action) =>{
            state.currentPuzzle = action.payload
        }
    }
});

export const {changeCurrentPuzzle} = progressSlice.actions;

export const currentPuzzleSelector = state => state.progress.currentPuzzle;

export default progressSlice.reducer;