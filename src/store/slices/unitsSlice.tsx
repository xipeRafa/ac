
import { createSlice } from '@reduxjs/toolkit';

export const unitsSlice = createSlice({
    name: 'units',

    initialState: {
        unitsSlice: [],
        editModeUnits: undefined,
    },

    reducers: {
        unitsCreateView: (state, { payload }) => {
            state.unitsSlice = payload;
        },
        unitsEditView:(state, {payload})=>{
            state.editModeUnits = payload
        },
        defaultEditMode:(state)=>{
            state.editModeUnits = undefined
        },
        unitsDeleteView: (state, { payload }) => {
            state.unitsSlice = payload;
        },
        switchUnitsView:(state, {payload})=>{
            state.unitsSlice = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { unitsCreateView, unitsEditView, defaultEditMode, unitsDeleteView, switchUnitsView } = unitsSlice.actions;