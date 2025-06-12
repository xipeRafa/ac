import { Link } from 'react-router-dom';

export const Nav = ({ startLogout, status, user }) => {


  return (
    <div className="navbar navbar-dark bg-black mb-4 px-4">

        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>&nbsp;
             { localStorage.userName } Control App
        </span>
{/*
        { status &&
        
        }*/}

      { localStorage.status == 'authenticated' && 
          <div>
                <span>
                    <Link style={{color:"white"}} to="/ac/operators"      className='mx-5'>Operadores    </Link>
                    {/*<Link style={{color:"white"}} to="/productos"  className='mx-5'>Productos </Link>
                    <Link style={{color:"white"}} to="/categorias" className='mx-5'>Categorias</Link>*/}
                </span> 

                <Link className="btn btn-outline-danger" to="ac/auth/login" onClick={ startLogout }>
                    <i className="fas fa-sign-out-alt"></i>salir
                </Link>

             
          </div>

        }

    </div>
  )

}
