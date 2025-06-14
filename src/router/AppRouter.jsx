



import { useEffect } from 'react'; 
import { Navigate, Route, Routes } from 'react-router-dom';

import { Login, SignUp} from '../authComps';
import { Operators, Units } from '../components';
import { useAuth } from '../hooks/useAuth';

import Swal from 'sweetalert2';
import { Nav } from '../partialComps';


const AppRouter = () => {


    const { status, checkLogin, startLogin, startRegister, startLogout, user, sweetAlertMessage, defaultAlert } = useAuth();



    useEffect(() => {
        if (sweetAlertMessage !== undefined) {
           Swal.fire(sweetAlertMessage[0], sweetAlertMessage[1], sweetAlertMessage[2]);
           defaultAlert()
       } 
       // console.log('AppRouter.tsx sa:', sweetAlertMessage)
    }, [sweetAlertMessage]) 


 
    //  useEffect(() => {
    //     checkLogin();
    // }, [])  

 
    // if (status === 'checking') {
    //     return <h3>Cargando...</h3>
    // }  
 





    return (
        <div>
            <Nav startLogout={startLogout} user={user.nombre} status={status} />
            <Routes>
                <Route path="/ac/auth/login"    element={<Login  startLogin={startLogin}       status={status} />} />
                <Route path="/ac/auth/register" element={<SignUp startRegister={startRegister} status={status} />} />

            {/*    <Route path="/categorias" element={<Categorias />} />
                <Route path="/productos"  element={<Productos  />} />*/}

                <Route path="/ac"  element={<Operators  />} />
                <Route path="/ac/units"  element={<Units />} />


                <Route path="/*" element={<Navigate to="/ac" />} /> 
            </Routes>
        </div>
    )
}

export default AppRouter


