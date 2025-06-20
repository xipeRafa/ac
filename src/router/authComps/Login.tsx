
import { useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { useForm } from '../../helpers';

import { somethingWentWrong, somethingWentRigth } from  '../../store/slices/alertSlice'

import { useAuth } from '../../hooks/useAuth';




type loginFormFields = {
    loginEmail: String,
    loginPassword: String,
}

const loginFormFields:loginFormFields = {
    loginEmail:    '',
    loginPassword: '',
}


export const Login = () => {


    const dispatch = useDispatch();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);

    const navigate = useNavigate();

    const { startLogin } = useAuth();

    const loginSubmit = (event: any) => {
        event.preventDefault();
 
        if( loginEmail==='' || loginPassword==='' ){
            dispatch(somethingWentWrong(['Campo Vacio', 'llenar todo por favor', 'warning']))
            return
        }  

        startLogin({ correo: loginEmail, password: loginPassword });
         
    }



    useEffect(() => { 

            if(localStorage.status === undefined || localStorage.status === 'not-authenticated'){

                localStorage.userName=''
                localStorage.status = 'not-authenticated'

                if(localStorage.usersRegistered === undefined){
                        localStorage.usersRegistered = JSON.stringify([{correo:'noexiste'}])    
                }    
                
                return
            }

            if(localStorage.status === 'authenticated'){
                    navigate('/ac/')
            }

    }, [])


   


    return (
        <div className="container login-container p-4" style={{border:'2px solid white'}}>

            <div className="row">
                <div className="col-md-6">

                    <h3>Entrar</h3>

                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-3 form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                            <label>Correo</label>
                        </div>
                        <div className="form-group mb-4 form-floating">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                            <label>Contraseña</label>
                        </div>

                        <input type="submit" className="btn btn-dark btn-lg mb-3 w-100" value="Entrar ➪" />

                    </form>

                    <Link to="/ac/auth/register/">ir a Registro</Link>

                </div>
            </div>

        </div>
    )
}