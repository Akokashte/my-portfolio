import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    projectData: [
        // title: "",
        // visibility: "",
        // url: "",
        // categories: {},
        // featuredImage: "",
        // featuredImagePublicId: "",
        // author: "",
        // projectEditorBlocksData: [],
    ],
    recentProjectData:[],
    currentProjectData:{
        title: "",
        visibility: "",
        url: "",
        categories: {},
        featuredImage: "",
        featuredImagePublicId: "",
        author: "",
        projectEditorBlocksData: [],
    }
}

const projectSlice = new createSlice({
    name: "project",
    initialState,
    reducers: {
        setProjectData: (state, action) => {
            state.projectData = action.payload;
        },
        setRecentProjectData:(state,action)=>{
            state.recentProjectData = action.payload;
        },
        setCurrentProjectData:(state,action)=>{
            state.currentProjectData = action.payload;
        }
    }
})

export const { setProjectData, setRecentProjectData, setCurrentProjectData } = projectSlice.actions;

export default projectSlice.reducer;