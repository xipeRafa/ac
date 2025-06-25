
import { createSlice } from '@reduxjs/toolkit';


export const alertSlice = createSlice({
    name: 'alert',

    initialState: {
        SwalSlice: undefined
    },

    reducers: {
        messageView:(state, {payload})=>{
            state.SwalSlice = payload
        },
        clearAlertView: (state) => {
            state.SwalSlice = undefined;
        }
    }
    
})


export const { messageView, clearAlertView } = alertSlice.actions;




