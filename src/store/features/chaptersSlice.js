import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chapters : [
        {
            chapterName : 'The Forest',
            chapterId : 100,
            chapterPuzzles : [101,102,103,104]
        },
        {
            chapterName : 'The City',
            chapterId : 200,
            chapterPuzzles : [201,202,203,204]
        },
        {
            chapterName : 'The Cave',
            chapterId : 300,
            chapterPuzzles : [301,302,303,304]
        }
    ],
    chapterSelected : -1
}

const chaptersSlice = createSlice({
    name : 'chapters',
    initialState,
    reducers : {

    }
});

export const chaptersSelector = state => state.chapters.chapters;


export default chaptersSlice.reducer;