import { Link } from 'react-router-dom';
import { useState } from "react";



export const Nav = ({ startLogout, status, user }) => {

   const [isActive, setIsActive] = useState(true);

    const windowWidth = window.innerWidth;

    const InWidth = () => {
        if (windowWidth < 999) {
            setIsActive(true);
        }
    };

  return (
    <div className="navbar2">

      <div onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-barras">
                    <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                </div>
                <span className='menuX'>{isActive ? "MENU" : "✘"}</span>
            </div>



      {/*  <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>&nbsp;
             { localStorage.userName } Control App
        </span>*/}
{/*
        { status &&
        
        }*/}

      { localStorage.status == 'authenticated' && 


          <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>
                
                    <Link style={{color:"white"}} to="/ac/operators"      className='mx-5'>Operadores    </Link>
                    <Link style={{color:"white"}} to="/ac/units"      className='mx-5'>Unidades    </Link>
                    {/*<Link style={{color:"white"}} to="/productos"  className='mx-5'>Productos </Link>
                    <Link style={{color:"white"}} to="/categorias" className='mx-5'>Categorias</Link>*/}
                

                <Link className="btn btn-outline-danger" to="ac/auth/login" onClick={ startLogout }>
                    <i className="fas fa-sign-out-alt"></i>salir
                </Link>

             
          </div>


        }

    </div>
  )

}
