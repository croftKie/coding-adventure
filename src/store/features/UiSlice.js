import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    splashScreen : true
}

const UiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers : {
        closeSplash : (state, action)=>{
            state.splashScreen = action.payload;
        }
    }
})

export const { closeSplash } = UiSlice.actions;

export const SplashSelector = state => state.ui.splashScreen;

export default UiSlice.reducer;