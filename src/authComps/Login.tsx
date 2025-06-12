
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { useForm } from '../helpers';
import { useEffect } from 'react'


type loginFormFields = {
    loginEmail: String,
    loginPassword: String,
}

const loginFormFields:loginFormFields = {
    loginEmail:    '',
    loginPassword: '',
}


export const Login = ({ startLogin, status }) => {


    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);



    
    const loginSubmit = (event: any) => {
        event.preventDefault();
 
        if( loginEmail==='' || loginPassword==='' ){
            Swal.fire('Campo vacio', 'llenar todo por favor', 'error');
            return
        }  

        startLogin({ correo: loginEmail, password: loginPassword });
         
    }



    useEffect(() => {
         if(localStorage.UsersArray == undefined){
                 localStorage.usersRegistered = JSON.stringify([{correo:'noexiste'}])
                 localStorage.userName=''
                 localStorage.status = 'not-authenticated'
            } 
    }, [])


   


    return (
        <div className="container login-container p-4" style={{border:'2px solid white'}}>
            {status !== 'not-authenticated' && ''}
            <div className="row">
                <div className="col-md-6 login-form-1">

                    <h3>Entrar</h3>

                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2 form-floating">
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
                        <div className="form-group mb-2 form-floating">
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
                        <div className="d-grid gap-2">
                            <input type="submit" className="btn btn-outline-dark btn-lg mb-3" value="Entrar ➪" />
                        </div>
                    </form>

                    <Link to="/ac/auth/register">Registro</Link>

                </div>
            </div>
        </div>
    )
}