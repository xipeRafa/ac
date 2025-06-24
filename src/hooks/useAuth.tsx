import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, Navigate, Route, Routes } from 'react-router-dom';

import Swal from 'sweetalert2'; //"warning", "error", "success","info", "question"

import { onLoginView, onLogoutView } from '../store/slices/authSlice'
import { clearAlertView, messageView } from  '../store/slices/alertSlice'

import { errorConsoleCatch, useForm, onCheckingRedirect, useAuthAlerts } from '../helpers'





export const useAuth = () => {


    const { statusSlice, userSlice } = useSelector(state => state.authSlice)

    const navigateTo = useNavigate()
    const dispatch = useDispatch()

    const { toastLoginAlert, toastRegistredAlert, alertLogout }= useAuthAlerts(Swal)

    const hello = (NAME) => {
            localStorage.userName=NAME
            localStorage.status = 'authenticated'
            navigateTo('/ac/')
    }



    const startLogin = ({ correo, password }) => {

            let isThere = JSON.parse(localStorage.usersRegistered).some(el => el.correo === correo)


            if(isThere){

                    let user = JSON.parse(localStorage.usersRegistered).filter((el) => el.correo === correo)

                    if(user[0].password === password){
                       
                            dispatch(onLoginView({ nombre: user[0].nombre, uid: user[0].uid }));
                            hello(user[0].nombre)

                            toastLoginAlert()
                             
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
                    dispatch(onLoginView({ nombre: nombre }));

                    hello(nombre)

                    toastRegistredAlert()

            }else{
                    dispatch(messageView(['Correo ya existe', 'Correo ya existe' || 'working', 'error']))
            }


    }
 

    const startLogout = () => {
            alertLogout(dispatch, navigateTo, onLogoutView)
    }




    return {
        //* estado
        statusSlice,
        userSlice,

        //* Métodos
        startLogin,
        startLogout,
        startRegister,

        //react
        useEffect,
        Link,
        dispatch,
        navigateTo,
        useState,
        Navigate, 
        Route, 
        Routes,
        useSelector,

        //alert
        messageView,

        //herpers
        onCheckingRedirect,
        useForm, 

        Swal,

    }

}