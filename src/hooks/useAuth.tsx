
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, Navigate, Route, Routes } from 'react-router-dom';

import { onLoginView, onLogoutView } from '../store/slices/authSlice'
import { clearAlertView, messageView } from  '../store/slices/alertSlice'
import { useForm, onCheckingRedirect, useAuthAlerts } from '../helpers'

import Swal from 'sweetalert2'; 




export const useAuth = () => {


    const { statusSlice, userSlice } = useSelector(state => state.authSlice)
    const { toastLoginAlert, toastRegisterAlert, alertLogout }= useAuthAlerts(Swal)

    const navigateTo = useNavigate()
    const dispatch = useDispatch()


    const hello = (name) => {
        ls('userName', name)
        ls('status', 'authenticated')
        navigateTo('/ac/')
    }



    const startLogin = ({ correo, password }) => {

        let isThere = ls('usersRegister').some(el => el.correo === correo)

        if(isThere){

            let user = ls('usersRegister').filter((el) => el.correo === correo)

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

        let isThere = ls('usersRegister').some(el => el.correo === correo)

        if(!isThere){

            let usersLS = ls('usersRegister')
            usersLS.push({ nombre, correo, password, uid:Date.now() })
            ls('usersRegister' , usersLS) 
            dispatch(onLoginView({ nombre: nombre }));
            hello(nombre)
            toastRegisterAlert()

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