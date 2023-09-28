import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        showGpt:false
    },
    reducers:{
        changeShowGpt:(state)=>{
            state.showGpt=!state.showGpt;
        }
    }
});

export default configSlice.reducer;

export const {changeShowGpt} =configSlice.actions;



