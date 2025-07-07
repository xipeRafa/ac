module.exports = (componentName) => ({
  content: `
import { createSlice } from '@reduxjs/toolkit';


export const ${componentName.toLowerCase()}Slice = createSlice({
    name: '${componentName.toLowerCase()}',

    initialState: {
        ${componentName.toLowerCase()}Slice: [],
        editMode: undefined,
    },

    reducers: {
        ${componentName.toLowerCase()}CreateView: (state, { payload }) => {
            state.${componentName.toLowerCase()}Slice = payload
        },
        ${componentName.toLowerCase()}EditView:(state, {payload})=>{
            state.editMode = payload
        },
        defaultEditMode:(state)=>{
            state.editMode = undefined
        },
        ${componentName.toLowerCase()}DeleteView: (state, { payload }) => {
            state.${componentName.toLowerCase()}Slice = payload
        },
        ${componentName.toLowerCase()}SwitchView:(state, {payload})=>{
            state.${componentName.toLowerCase()}Slice = payload
        }
    }

})


export const { ${componentName.toLowerCase()}CreateView, ${componentName.toLowerCase()}EditView, defaultEditMode, ${componentName.toLowerCase()}DeleteView, ${componentName.toLowerCase()}SwitchView } = ${componentName.toLowerCase()}Slice.actions;

`,
  extension: `${componentName.toLowerCase()}Slice.jsx`
});
