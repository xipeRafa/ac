import { useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
    
import { somethingWentWrong, somethingWentRigth } from  '../../store/slices/alertSlice'

import { useForm } from '../../helpers';

import { useAuth } from '../../hooks/useAuth';



const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}






export const SignUp = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { startRegister } = useAuth();


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




    const { registerEmail, registerName, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm(registerFormFields);

    

    const registerSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if( registerEmail==='' || registerName==='' || registerPassword==='' || registerPassword2==='' ){
            dispatch(somethingWentWrong(['Campo Vacio', 'llenar todo por favor', 'warning']))
            return
        }

        if (registerPassword !== registerPassword2) {
            dispatch(somethingWentWrong(['Error en registro', 'Contraseñas NO son Iguales', 'error']))
            return;
        }  

        startRegister({ nombre: registerName, correo: registerEmail, password: registerPassword });
        
    }




    return (
        
        <div className="container login-container p-4" style={{border:'2px solid white'}}>

            <div className="row">
                <div className="col-md-6">
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

                    <Link to="/ac/auth/login/">Entrar </Link>

                </div>
            </div>
        </div>
    )
}