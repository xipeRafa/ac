
import { createSlice } from '@reduxjs/toolkit';


export const rutasSlice = createSlice({
    name: 'rutas',

    initialState: {
        rutasSlice: [],
        editMode: undefined,
    },

    reducers: {
        rutasCreateView: (state, { payload }) => {
            state.rutasSlice = payload
        },
        rutasEditView:(state, {payload})=>{
            state.editMode = payload
        },
        defaultEditMode:(state)=>{
            state.editMode = undefined
        },
        rutasDeleteView: (state, { payload }) => {
            state.rutasSlice = payload
        },
        rutasSwitchView:(state, {payload})=>{
            state.rutasSlice = payload
        }
    }

})


export const { rutasCreateView, rutasEditView, defaultEditMode, rutasDeleteView, rutasSwitchView } = rutasSlice.actions;