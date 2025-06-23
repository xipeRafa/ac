
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























// esto se importa en todos los hooks de los componentes padre:

// import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'

  //"warning", "error", "success","info"
  /* function SweetAlertError(error){
    dispatch(somethingWentWrong(['Something Went Wrong', error?.response.data.errors[0].msg || 'working', 'error']))
  } */


/* } catch (error) {
    errorConsoleCatch(error)
    SweetAlertError(error)
} */