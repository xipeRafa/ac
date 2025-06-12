import { configureStore } from '@reduxjs/toolkit';


import { alertSlice } from './slices/alertSlice';
import { authSlice } from './slices/authSlice';
import { operatorsSlice } from './slices/operatorsSlice';




export const store = configureStore({

    reducer: {
        alertSlice: alertSlice.reducer,
        authSlice: authSlice.reducer,
        operatorsSlice: operatorsSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })

})
