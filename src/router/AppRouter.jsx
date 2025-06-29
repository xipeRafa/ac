
import { useAuth } from '../hooks/useAuth'
import { Login, SignUp} from './authComps'
import { Operators, Units, Assignations, Rutas } from '../components'




const AppRouter = () => {

    const { useEffect, Navigate, Route, Routes, useSelector, Swal } = useAuth();

    const { SwalSlice } = useSelector(state => state.alertSlice);

    useEffect(() => {
        if (SwalSlice !== undefined) {
            Swal.fire(SwalSlice[0], SwalSlice[1], SwalSlice[2])
        } 
    }, [SwalSlice]) 
 

    let status = (ls('status') === 'not-authenticated' || ls('status') === undefined)



    return (
        <div className='appContariner'>
            <Routes>

                <Route path="/ac/auth/login/"    element={<Login />} />
                <Route path="/ac/auth/register/" element={<SignUp />} />
            

                <Route path="/ac/"              element={<Operators />} />
                <Route path="/ac/units/"        element={<Units />} />
                <Route path="/ac/rutas/"        element={<Rutas />} />
                <Route path="/ac/assignations/" element={<Assignations />} />


                <Route path="/*" element={ status ? <Navigate to="/ac/auth/login/" /> : <Navigate to="/ac/" /> } /> 
            
            </Routes>
        </div>
    )
}


export default AppRouter


