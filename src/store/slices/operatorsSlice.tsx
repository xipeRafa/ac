
import { createSlice } from '@reduxjs/toolkit';



export const operatorsSlice = createSlice({
    name: 'operators',

    initialState: {
        operatorsSlice: [],
        editMode: undefined
    },

    reducers: {
        opCreateView: (state, { payload }) => {
            state.operatorsSlice = payload
        },
        opEditView:(state, {payload})=>{
            state.editMode = payload
        },
        defaultEditMode:(state)=>{
            state.editMode = undefined
        },
        opDeleteView: (state, { payload }) => {
            state.operatorsSlice = payload
        },
        opSwitchView:(state, {payload})=>{
            state.operatorsSlice = payload
        }
    }
    
})




export const { opCreateView, opEditView, defaultEditMode, opDeleteView, opSwitchView } = operatorsSlice.actions;