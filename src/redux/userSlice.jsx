import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        save:(state,action)=>{
            return action.payload;
        },
        remove:(state,action)=>{
            return null;;
        }

    }
});

export default userSlice.reducer;

export const {save,remove} =userSlice.actions;



