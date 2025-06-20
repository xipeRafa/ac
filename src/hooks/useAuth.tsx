import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { onLogin, onLogout } from '../store/slices/authSlice'
import { clearAlertMessage, somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'

import { errorConsoleCatch, useForm } from '../helpers'






export const useAuth = () => {


    

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
                             
                    }else{
                            dispatch(somethingWentWrong(['Something Went Wrong', 'Contraseña Mal' || 'working', 'error']))
                    }       
  
            }else{
                    dispatch(somethingWentWrong(['Something Went Wrong', 'Correo Mal' || 'working', 'error']))
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

            }else{
                    dispatch(somethingWentWrong(['Correo ya existe', 'Correo ya existe' || 'working', 'error']))
            }


    }
 






    const startLogout = () => {
        //localStorage.clear();
        localStorage.status = 'not-authenticated'
        localStorage.userName = ''
        dispatch(onLogout())
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
        useForm,
        navigateTo,

        //alert
        somethingWentWrong, 
        somethingWentRigth,

    }

}