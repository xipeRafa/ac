import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { onLogin, onLogout } from '../store/slices/authSlice'
import { clearAlertMessage, aMessageView } from  '../store/slices/alertSlice'

import { errorConsoleCatch, useForm } from '../helpers'


import Swal from 'sweetalert2';



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

                            const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 6000,
  theme:'dark',
  timerProgressBar: true,
  //draggable: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});


Toast.fire({
  icon: "success",
  title: "Signed in Successfully"
});
                             
                    }else{
                            dispatch(aMessageView(['Something Went Wrong', 'Contraseña Mal' || 'working', 'error']))
                    }       
  
            }else{
                    dispatch(aMessageView(['Something Went Wrong', 'Correo Mal' || 'working', 'error']))
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
                    dispatch(aMessageView(['Correo ya existe', 'Correo ya existe' || 'working', 'error']))
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
        aMessageView, 

    }

}