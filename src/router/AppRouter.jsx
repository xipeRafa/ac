
import { useEffect } from 'react'; 
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Swal from 'sweetalert2'; //"warning", "error", "success","info", "question"

import { Login, SignUp} from './authComps';
import { Operators, Units } from '../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'


const AppRouter = () => {

    const { SwalSlice } = useSelector(state => state.alertSlice);

    useEffect(() => {
            if (SwalSlice !== undefined) {
                    Swal.fire(SwalSlice[0], SwalSlice[1], SwalSlice[2])
            } 
    }, [SwalSlice]) 
 



    return (
        <div className='appContariner'>
            <Routes>

                <Route path="/ac/auth/login/"    element={<Login />} />
                <Route path="/ac/auth/register/" element={<SignUp />} />


                <Route path="/ac/"               element={<Operators />} />
                <Route path="/ac/units/"         element={<Units />} />


                <Route path="/*"                 element={<Navigate to="/ac/" />} /> 

            </Routes>
        </div>
    )
}


export default AppRouter


