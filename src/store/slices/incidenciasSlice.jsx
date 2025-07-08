
import { createSlice } from '@reduxjs/toolkit';


export const incidenciasSlice = createSlice({
    name: 'incidencias',

    initialState: {
        incidenciasSlice: [],
        editMode: undefined,
    },

    reducers: {
        incidenciasCreateView: (state, { payload }) => {
            state.incidenciasSlice = payload
        },
        incidenciasEditView:(state, {payload})=>{
            state.editMode = payload
        },
        defaultEditMode:(state)=>{
            state.editMode = undefined
        },
        incidenciasDeleteView: (state, { payload }) => {
            state.incidenciasSlice = payload
        },
        incidenciasSwitchView:(state, {payload})=>{
            state.incidenciasSlice = payload
        }
    }

})


export const { incidenciasCreateView, incidenciasEditView, defaultEditMode, incidenciasDeleteView, incidenciasSwitchView } = incidenciasSlice.actions;

