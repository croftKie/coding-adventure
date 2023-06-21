import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    instruction : []
}

const currentInput = createSlice({
    name : 'currentInput',
    initialState,
    reducers : {
        addInstruction : (state, action)=>{
            state.instruction = [...state.instruction, action.payload]
        }
    }
});

export const {addInstruction} = currentInput.actions;

export const instructionInputSelector = state => state.currentInput.instruction;

export default currentInput.reducer;