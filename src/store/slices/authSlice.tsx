
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        status: 'checking', // 'authenticated','not-authenticated',
        user: {}
    },
    
    reducers: { 
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            localStorage.authSlice = 'slice'
        },
        onLogin: (state, { payload }) => {
            console.log('payload', payload)
            state.status = 'authenticated';
            state.user = payload;
            localStorage.authSlice = 'onLogin'
        },
        onLogout: (state) => {
            state.status = 'not-authenticated';
            state.user = {};
            localStorage.authSlice = 'onLogout'
        }
    }
});



// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout } = authSlice.actions;