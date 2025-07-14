
import { createSlice } from '@reduxjs/toolkit';


export const operatorsSlice = createSlice({
    name: 'operators',

    initialState: {
        operatorsSlice: [],
        editMode: undefined,
    },

    reducers: {
        operatorsCreateView: (state, { payload }) => {
            state.operatorsSlice = payload
        },
        operatorsEditView:(state, {payload})=>{
            state.editMode = payload
        },
        defaultEditMode:(state)=>{
            state.editMode = undefined
        },
        operatorsDeleteView: (state, { payload }) => {
            state.operatorsSlice = payload
        },
        operatorsSwitchView:(state, {payload})=>{
            state.operatorsSlice = payload
        }
    }

})


export const { operatorsCreateView, operatorsEditView, defaultEditMode, operatorsDeleteView, operatorsSwitchView } = operatorsSlice.actions;

