import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { onLogin, onLogout } from '../store/slices/authSlice'
import { clearAlertMessage, messageView } from  '../store/slices/alertSlice'

import { errorConsoleCatch, useForm, onCheckingRedirect, useAuthAlerts } from '../helpers'




export const useAuth = () => {


    const { ToastLogin, ToastRegistred, alertLogout }= useAuthAlerts()

    const { status, user } = useSelector(state => state.authSlice);

    const navigateTo = useNavigate();
    
    const dispatch = useDispatch();


    const hello=(NOMBRE)=>{
            localStorage.userName=NOMBRE
            localStorage.status = 'authenticated'
            navigateTo('/ac/')
    }



    const startLogin = ({ correo, password }) => {

            let isThere = JSON.parse(localStorage.usersRegistered).some(el => el.correo === correo)


            if(isThere){

                    let user = JSON.parse(localStorage.usersRegistered).filter((el) => el.correo === correo)

                    if(user[0].password === password){
                       
                            dispatch(onLogin({ nombre: user[0].nombre, uid: user[0].uid }));
                            hello(user[0].nombre)

                            ToastLogin()
                             
                    }else{
                            dispatch(messageView(['Error', 'Contraseña Mal' || 'working', 'error']))
                    }       
  
            }else{
                    dispatch(messageView(['Error', 'Correo Incorrecto' || 'working', 'error']))
            }

    }







    const startRegister = ({nombre, correo, password}) => {

            if(localStorage.usersRegistered === undefined){
                    localStorage.usersRegistered = JSON.stringify([])
            }


            let isThere = JSON.parse(localStorage.usersRegistered).some(el => el.correo === correo)

            if(!isThere){

                    let usersLS = JSON.parse(localStorage.usersRegistered)
                    usersLS.push({ nombre, correo, password, uid:Date.now() })

                    localStorage.usersRegistered = JSON.stringify(usersLS)
                    dispatch(onLogin({ nombre: nombre }));

                    hello(nombre)

                    ToastRegistred()

            }else{
                    dispatch(messageView(['Correo ya existe', 'Correo ya existe' || 'working', 'error']))
            }


    }
 






    const startLogout = () => {
            alertLogout(dispatch, navigateTo, onLogout)
    }





    return {
        //* estado
        status,
        user,

        //* Métodos
        startLogin,
        startLogout,
        startRegister,

        //react
        useEffect,
        Link,
        dispatch,
        navigateTo,

        //alert
        messageView,

        //herpers
        onCheckingRedirect,
        useForm, 

    }

}