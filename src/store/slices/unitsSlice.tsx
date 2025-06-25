
import { createSlice } from '@reduxjs/toolkit';


export const unitsSlice = createSlice({
    name: 'units',

    initialState: {
        unitsSlice: [],
        editMode: undefined,
    },

    reducers: {
        unitsCreateView: (state, { payload }) => {
            state.unitsSlice = payload;
        },
        unitsEditView:(state, {payload})=>{
            state.editMode = payload
        },
        defaultEditMode:(state)=>{
            state.editMode = undefined
        },
        unitsDeleteView: (state, { payload }) => {
            state.unitsSlice = payload;
        },
        switchUnitsView:(state, {payload})=>{
            state.unitsSlice = payload
        }
    }

})


export const { unitsCreateView, unitsEditView, defaultEditMode, unitsDeleteView, switchUnitsView } = unitsSlice.actions;