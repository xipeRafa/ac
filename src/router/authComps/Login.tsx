

import { useAuth } from '../../hooks/useAuth';


const loginFormFields = {
    loginEmail:'',
    loginPassword: '',
}



export const Login = () => {


    const { 
        startLogin, 
        useEffect,
        Link,
        dispatch,
        aMessageView, 
        useForm,
        navigateTo,
    } = useAuth()



    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields)



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
                    navigateTo('/ac/')
            }

    }, [])




    const loginSubmit = (event: any) => {
        event.preventDefault();
 
        if( loginEmail==='' || loginPassword==='' ){
            dispatch(aMessageView(['Campo Vacio', 'llenar todo por favor', 'warning']))
            return
        }  

        startLogin({ correo: loginEmail, password: loginPassword });
         
    }



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