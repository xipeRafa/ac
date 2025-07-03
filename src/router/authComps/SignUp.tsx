
import { useAuth } from '../../hooks/useAuth'

import AC from '../../assets/imgs/AC.png'


const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}



export const SignUp = () => {


    const { 
        startRegister, useEffect, Link, dispatch, messageView, useForm,
        navigateTo, onCheckingRedirect,
    } = useAuth()


    const { 
        isValidEmail, registerEmail, registerName, registerPassword, 
        registerPassword2, onInputChange: onRegisterInputChange, 
    } = useForm(registerFormFields)


    useEffect(() => { 
        onCheckingRedirect(navigateTo)
    }, [])



    const registerSubmit = (event) => {

        event.preventDefault()

        const validations = [
            { condition: !isValidEmail(registerEmail), message: ['Correo ?', 'Correo No Válido !!!', 'error'] },
            { condition: registerPassword?.length < 4, message: ['Contraseña', 'Minimo 4 Caracteres', 'error'] },
            { condition: registerPassword !== registerPassword2, message: ['Error en registro', 'Contraseñas NO son Iguales', 'error'] }
        ]


        for (const validation of validations) {
            if (validation.condition) {
                dispatch(messageView(validation.message))
                return
            }
        }

        startRegister({ nombre: registerName.toLowerCase(), correo: registerEmail.toLowerCase(), password: registerPassword })
        
    }




    return (
        
        <div className="container login-container p-4" style={{border:'2px solid white'}}>

            <div className="row">
                <div className="col-lg-6 mb-4">

                    <h3 className='headerColor'>REGISTRO</h3>

                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-3 form-floating w-100 m-0">
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={capitalize(registerName)}
                                onChange={onRegisterInputChange}
                            />
                            <label>Nombre</label>
                        </div>
                        <div className="form-group mb-3 form-floating w-100 m-0">
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={registerEmail.toLowerCase()}
                                onChange={onRegisterInputChange}
                            />
                            <label>Correo</label>
                        </div>
                        <div className="form-group mb-3 form-floating w-100 m-0">
                            <input
                                required
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                            <label>Contraseña</label>
                        </div>

                        <div className="form-group mb-4 form-floating w-100 m-0">
                            <input
                                required
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
                                className="btn dark btn-lg mb-3 w-100"
                                value="CREAR CUENTA" />

                    </form>

                    <Link to="/ac/auth/login/">Entrar </Link>

                </div>

                 <div className="col-lg-6">
                           <img src={AC} className='AC-logo'/>
                </div>
            </div>
        </div>
    )
}