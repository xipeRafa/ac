
import { createSlice } from '@reduxjs/toolkit';


export const assignationsSlice = createSlice({
    name: 'assignations',

    initialState: {
        assignationsSlice: [],
        editMode: undefined
    },

    reducers: {
        assCreateView: (state, { payload }) => {
            state.assignationsSlice = payload
        },
        assEditView:(state, {payload})=>{
            state.editMode = payload
        },
        defaultEditMode:(state)=>{
            state.editMode = undefined
        },
        assDeleteView: (state, { payload }) => {
            state.assignationsSlice = payload
        },
        assSwitchView:(state, {payload})=>{
            state.assignationsSlice = payload
        }
    }

})


export const { assCreateView, assEditView, defaultEditMode, assDeleteView, assSwitchView } = assignationsSlice.actions;