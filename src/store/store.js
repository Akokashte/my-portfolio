import { configureStore } from "@reduxjs/toolkit";
import techStackReducer from "../features/techStackSlice";
import projectReducer from "../features/projectSlice";

export const store = new configureStore({
    reducer:{
        techStack:techStackReducer,
        project:projectReducer
    },
})