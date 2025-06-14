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

{ localStorage?.status == 'authenticated' && <> 

          <div onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-barras">
                    <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                </div>
                <span className='menuX'>{isActive ? "MENU" : "✘"}</span>
          </div>


          <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>
                <span>{localStorage.userName}</span>

                
                <Link style={{color:"white"}} to="/ac/"      className='mx-5'>Operadores    </Link>
                <Link style={{color:"white"}} to="/ac/units"      className='mx-5'>Unidades    </Link>
                

                <Link className="btn btn-outline-danger" style={{border:'none'}} to="ac/auth/login" onClick={ startLogout }>
                    salir ➪
                </Link>

          </div>

</>} 

    </div>
 
  )

}
