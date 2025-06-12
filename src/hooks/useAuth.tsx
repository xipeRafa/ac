import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { onChecking, onLogin, onLogout } from '../store/slices/authSlice'
import { errorConsoleCatch } from '../helpers'
import { clearAlertMessage, somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'

import { Navigate, Route, Routes } from 'react-router-dom';





export const useAuth = () => {



    let location = useLocation();

    const { status, user } = useSelector(state => state.authSlice);
    const { sweetAlertMessage } = useSelector(state => state.alertSlice);

    const dispatch = useDispatch();


    function SweetAlertError(){
        dispatch(somethingWentWrong(['Something Went Wrong', 'Algo Salio Mal' || 'working', 'error']))
    }




    function defaultAlert(){
        setTimeout(() => {
            dispatch(clearAlertMessage())
        }, 1000);
    }


    const hello=(NOMBRE)=>{
            localStorage.userName=NOMBRE
            localStorage.status = 'authenticated'
            location.pathname = '/ac/operators'
            setTimeout(()=>{
                location.pathname = '/ac/operators'
            },1000)
    }



    const startLogin = async ({ correo, password }) => {

        //dispatch(onChecking())

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







    const startRegister = async ({nombre, correo, password}) => {


            //dispatch(onChecking()); 


            if(localStorage.usersRegistered == undefined){
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







    // const checkLogin = async () => {
    //     const token = localStorage.getItem('token');
    //     if (!token){ 
    //         return dispatch(onLogout())
    //     }
        
    //     try {
    //         // const { data } = await axiosApi.get('auth/renew');
    //         // dispatch(onLogin({ nombre:data.nombre, uid:data.uid }));
    //     } catch (error) {
    //         errorConsoleCatch(error)
    //         localStorage.clear();
    //         dispatch(onLogout());
    //     }
    // } 






    const startLogout = () => {
        //localStorage.clear();
        localStorage.status = 'not-authenticated'
        localStorage.userName = ''
        dispatch(onLogout());
        pathname = '/*'
    }





    return {
        //* estado
        status,
        sweetAlertMessage,
        defaultAlert,
        user,

        //* Métodos
        //checkLogin, 
        startLogin,
        startLogout,
        startRegister,
    }

}