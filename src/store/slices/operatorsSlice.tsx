
import { createSlice } from '@reduxjs/toolkit';

export const operatorsSlice = createSlice({
    name: 'operators',

    initialState: {
        operators: [],
        editMode: undefined
    },

    reducers: {
        operatorDataPush: (state, { payload }) => {
            state.operators = payload;
        },
        editOperatorView:(state, {payload})=>{
            state.editMode = payload
        },
        defaultEditMode:(state)=>{
            state.editMode = undefined
        },
        operatorDeleteView: (state, { payload }) => {
            state.operators = payload;
        },
        switchOperatorView:(state, {payload})=>{
            state.operators = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { operatorDataPush, editOperatorView, defaultEditMode, operatorDeleteView, switchOperatorView } = operatorsSlice.actions;