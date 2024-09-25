import { configureStore } from "@reduxjs/toolkit";
import techStackReducer from "../features/techStackSlice";
import projectReducer from "../features/projectSlice";
import contactReducer from "../features/contactSlice";

export const store = new configureStore({
    reducer:{
        techStack:techStackReducer,
        project:projectReducer,
        contact:contactReducer
    },
})