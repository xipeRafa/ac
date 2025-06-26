
import { configureStore } from '@reduxjs/toolkit'

import { alertSlice } from './slices/alertSlice'
import { authSlice } from './slices/authSlice'
import { operatorsSlice } from './slices/operatorsSlice'
import { unitsSlice } from './slices/unitsSlice'
import { assignationsSlice } from './slices/assignationsSlice'


export const store = configureStore({

    reducer: {
        alertSlice: alertSlice.reducer,
        authSlice: authSlice.reducer,
        operatorsSlice: operatorsSlice.reducer,
        unitsSlice: unitsSlice.reducer,
        assignationsSlice: assignationsSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })

})
