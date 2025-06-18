import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';


import {useForm} from '../helpers';

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}






export const SignUp = ({ startRegister, status }) => {

    useEffect(() => { 

            if(localStorage.status === 'authenticated' || localStorage.status === undefined){
                    navigate('/ac/')
            }

    }, [])




    const { registerEmail, registerName, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm(registerFormFields);

    const navigate = useNavigate();


    const registerSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if( registerEmail==='' || registerName==='' || registerPassword==='' || registerPassword2==='' ){
            Swal.fire('Campo Vacio', 'llenar todo por favor', 'error');
            return
        }

        if (registerPassword !== registerPassword2) {
            Swal.fire('Error en registro', 'Contraseñas NO son Iguales', 'error');
            return;
        }  

        startRegister({ nombre: registerName, correo: registerEmail, password: registerPassword });
        
    }




    return (
        
        <div className="container login-container p-4" style={{border:'2px solid white'}}>
            { status !== 'not-authenticated' &&
            <div className="row">
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>

                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-3 form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                            <label>Nombre</label>
                        </div>
                        <div className="form-group mb-3 form-floating">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                            <label>Correo</label>
                        </div>
                        <div className="form-group mb-3 form-floating">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                            <label>Contraseña</label>
                        </div>

                        <div className="form-group mb-4 form-floating">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="registerPassword2"
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                            <label>Repita la contraseña</label>
                        </div>

                            <input
                                type="submit"
                                className="btn btn-dark btn-lg mb-3 w-100"
                                value="Crear Cuenta" />

                    </form>

                    <Link to="/ac/auth/login">Entrar </Link>

                </div>
            </div>}
        </div>
    )
}