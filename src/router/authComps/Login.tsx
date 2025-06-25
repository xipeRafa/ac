
import { useAuth } from '../../hooks/useAuth';
import AC from '../../assets/AC.png'


const loginFormFields = {
    loginEmail:'',
    loginPassword: '',
}



export const Login = () => {


    const { 
        startLogin, useEffect, Link, dispatch, messageView, 
        useForm, navigateTo, onCheckingRedirect,
    } = useAuth()


    const { 
        isValidEmail,loginEmail, loginPassword, 
        onInputChange: onLoginInputChange 
    } = useForm(loginFormFields)


    useEffect(() => { 
        onCheckingRedirect(navigateTo)
    }, [])




    const loginSubmit = (event: any) => {

        event.preventDefault()

        const validations = [
            { condition: loginEmail==='' || loginPassword==='', message: ['Campo Vacio', 'Llenar todo por favor', 'warning'] },
            { condition: !isValidEmail(loginEmail), message: ['Correo ?', 'Correo No Válido !!!', 'error'] },
            { condition: loginPassword?.length < 4, message: ['Contraseña', 'Minimo 4 Caracteres', 'error'] },
        ]

        for (const validation of validations) {
            if (validation.condition) {
                dispatch(messageView(validation.message))
                return
            }
        } 
        
        startLogin({ correo: loginEmail.toLowerCase(), password: loginPassword });
         
    }



    return (
        <div className="container p-4" style={{border:'2px solid white'}}>

            <div className="row">
                <div className="col-lg-6 mb-4">

                    <h3>ENTRAR</h3>

                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-3 form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={loginEmail.toLowerCase()}
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

                    <Link to="/ac/auth/register/">Crear Cuenta</Link>

                </div>


                <div className="col-lg-6">
                           <img src={AC} className='AC-logo'/>
                </div>
            </div>



              


        </div>
    )
}