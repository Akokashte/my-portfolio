import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    techStackData : [],
    recentTechStackData:[]
}

const techStackSlice = new createSlice({
    name:"techStack",
    initialState,
    reducers:{
        setTechStackData:(state,action)=>{
            state.techStackData = action.payload;
        },
        setRecentTechStack:(state,action)=>{
            state.recentTechStackData = action.payload;
        }
    }
})


export const {setTechStackData,setRecentTechStack} = techStackSlice.actions
export default techStackSlice.reducer