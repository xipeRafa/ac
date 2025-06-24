
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        statusSlice: 'checking', // 'authenticated','not-authenticated',
        userSlice: {}
    },
    
    reducers: { 
        onCheckingView: (state) => {
            state.status = 'checking';
            state.user = {};
        },
        onLoginView: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
        },
        onLogoutView: (state) => {
            state.status = 'not-authenticated';
            state.user = {};
        }
    }

})





export const { onCheckingView, onLoginView, onLogoutView } = authSlice.actions;