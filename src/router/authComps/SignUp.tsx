
import { useAuth } from '../../hooks/useAuth';

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}



export const SignUp = () => {


    const { startRegister, 
        useEffect,
        Link,
        dispatch,
        aMessageView, 
        useForm,
        navigateTo,
        onCheckingRedirect,
    } = useAuth()


    const { 
        isValidEmail,
        registerEmail,
        registerName, 
        registerPassword, 
        registerPassword2, 
        onInputChange: onRegisterInputChange, 
    } = useForm(registerFormFields)


    useEffect(() => { 
            onCheckingRedirect(navigateTo)
    }, [])

    console.log(registerPassword.length)

    const registerSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();


        if( registerEmail==='' || registerName==='' || registerPassword==='' || registerPassword2==='' ){
            dispatch(aMessageView(['Campo Vacio', 'llenar todo por favor', 'warning']))
            return
        }

        // if(!isValidEmail(registerEmail)){
        //      dispatch(aMessageView(['Correo ?', 'Correo No Válido !!!', 'error']))
        //      return
        // }

        // if (registerPassword.length < 4) {
        //     dispatch(aMessageView(['Contraseña', 'Minimo 4 Caracteres', 'error']))
        //     return;
        // } 

        if (registerPassword !== registerPassword2) {
            dispatch(aMessageView(['Error en registro', 'Contraseñas NO son Iguales', 'error']))
            return;
        }  

        startRegister({ nombre: registerName.toLowerCase(), correo: registerEmail.toLowerCase(), password: registerPassword });
        
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
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={registerEmail.toLowerCase()}
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