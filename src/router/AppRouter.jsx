

import { useEffect } from 'react'; 
import { Navigate, Route, Routes } from 'react-router-dom';

import Swal from 'sweetalert2';

import { useAuth } from '../hooks/useAuth';

import { Login, SignUp} from './authComps';
import { Operators, Units } from '../components';




const AppRouter = () => {


    const { status, checkLogin, startLogin, startRegister, startLogout, user, sweetAlertMessage, defaultAlert } = useAuth();



    useEffect(() => {
        if (sweetAlertMessage !== undefined) {
           Swal.fire(sweetAlertMessage[0], sweetAlertMessage[1], sweetAlertMessage[2]);
           defaultAlert()
       } 
    }, [sweetAlertMessage]) 


 
    //  useEffect(() => {
    //     checkLogin();
    // }, [])  

 
    // if (status === 'checking') {
    //     return <h3>Cargando...</h3>
    // }  
 





    return (
        <div className='appContariner'>

            <Routes>

                <Route path="/ac/auth/login/"    element={<Login  startLogin={startLogin}       status={status} />} />
                <Route path="/ac/auth/register/" element={<SignUp startRegister={startRegister} status={status} />} />

                <Route path="/ac/"  element={<Operators />} />
                <Route path="/ac/units/"  element={<Units />} />


                <Route path="/*" element={<Navigate to="/ac/" />} /> 

            </Routes>

        </div>
    )
}

export default AppRouter


