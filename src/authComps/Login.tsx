
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';


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

    const navigate = useNavigate();

    
    const loginSubmit = (event: any) => {
        event.preventDefault();
 
        if( loginEmail==='' || loginPassword==='' ){
            Swal.fire('Campo vacio', 'llenar todo por favor', 'error');
            return
        }  

        startLogin({ correo: loginEmail, password: loginPassword });
         
    }



    useEffect(() => { 

            if(localStorage.status === 'authenticated'){
                    navigate('/ac/')
            }else{
               navigate('/ac/auth/login/') 
               console.log('else login ====>>')
            }

    }, [])


   


    return (
        <div className="container login-container p-4" style={{border:'2px solid white'}}>
            {status !== 'not-authenticated' && ''}
            <div className="row">
                <div className="col-md-6 login-form-1">

                    <h3>Entrar</h3>

                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-3 form-floating">
                            <input
                                required
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
                                required
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