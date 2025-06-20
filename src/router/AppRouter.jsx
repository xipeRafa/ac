

import { useEffect } from 'react'; 

import { Navigate, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Swal from 'sweetalert2'; //"warning", "error", "success","info"

import { Login, SignUp} from './authComps';

import { Operators, Units } from '../components';





const AppRouter = () => {



    const { sweetAlertMessage } = useSelector(state => state.alertSlice);

    

    useEffect(() => {
        if (sweetAlertMessage !== undefined) {
           Swal.fire(sweetAlertMessage[0], sweetAlertMessage[1], sweetAlertMessage[2]);
           console.log('alerta')
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

                <Route path="/ac/auth/login/"    element={<Login />} />
                <Route path="/ac/auth/register/" element={<SignUp />} />

                <Route path="/ac/"  element={<Operators />} />
                <Route path="/ac/units/"  element={<Units />} />


                <Route path="/*" element={<Navigate to="/ac/" />} /> 

            </Routes>

        </div>
    )
}

export default AppRouter


