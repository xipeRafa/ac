
import { createSlice } from '@reduxjs/toolkit';

export const unitsSlice = createSlice({
    name: 'units',

    initialState: {
        units: [],
        editModeUnits: undefined,
    },

    reducers: {
        unitsDataPush: (state, { payload }) => {
            state.units = payload;
        },
        editUnitsView:(state, {payload})=>{
            state.editModeUnits = payload
        },
        defaultEditMode:(state)=>{
            state.editModeUnits = undefined
        },
        unitsDeleteView: (state, { payload }) => {
            state.units = payload;
        },
        switchUnitsView:(state, {payload})=>{
            state.units = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { unitsDataPush, editUnitsView, defaultEditMode, unitsDeleteView, switchUnitsView } = unitsSlice.actions;