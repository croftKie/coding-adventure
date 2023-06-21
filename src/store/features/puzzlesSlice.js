import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    puzzles : [
        {
            puzzleName : "The Clearing",
            id : 101,
            type : 1,
            puzzleDescription : "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
            assetId : [1,2]
        },
        {
            puzzleName : "The Tree",
            id : 102,
            type : 2,
            puzzleDescription : "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
            assetId : [1,2]
        },
        {
            puzzleName : "The Hidden Gold",
            id : 103,
            type : 3,
            puzzleDescription : "lorem ipsum text would be useful here but I can't be bothered going to google it and my autocomplete isn't working.",
            assetId : [1,2]
        }
    ],
}

const puzzleSlice = createSlice({
    name : 'puzzles',
    initialState,
    reducers : {
        
    }
});

export const {changeSelectedPuzzle} = puzzleSlice.actions;

export const puzzleSelector = (state) => state.puzzles.puzzles;

export default puzzleSlice.reducer;