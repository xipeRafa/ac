
import { useAuth } from '../hooks/useAuth';
import { Login, SignUp} from './authComps';
import { Operators, Units } from '../components';



const AppRouter = () => {

    const { useEffect, Navigate, Route, Routes, useSelector, Swal } = useAuth();

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


