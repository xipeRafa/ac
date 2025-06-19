import { Link } from 'react-router-dom';
import { useState } from "react";
import colors from '../assets/pico-color-palette.json'
import './nav.css'

import { useAuth } from '../../../hooks/useAuth';
    

export const Nav = () => {

    const { status, checkLogin, startLogin, startRegister, startLogout, user, sweetAlertMessage, defaultAlert } = useAuth();

   const [isActive, setIsActive] = useState(true);

    const windowWidth = window.innerWidth;

    const InWidth = () => {
        if (windowWidth < 999) {
            setIsActive(true);
        }
    };



    //  red pink fuchsia purple violet indigo blue azure cyan jade 
    //  green lime yellow amber pumpkin orange sand grey zinc slate
    // https://picocss.com/docs/colors



  return (
    
    <div className="navbar2">

        { localStorage?.status == 'authenticated' && <> 

            <div onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-barras">
                   <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                    {/*☰*/}
                </div>
                <span className='menuX'>{isActive ? "MENU" : "✘"}</span>
            </div>


            <div className={isActive ? "menu" : "menu display"} onClick={InWidth} style={{color:"white"}}>

                <span>{localStorage.userName}</span>

                
                <Link to="/ac/"      >Operadores  </Link>
                <Link to="/ac/units/">Unidades    </Link>
                

                <Link  to="/ac/auth/login/" style={{textDecoration:'none'}} onClick={startLogout}>
                    salir ➪
                </Link>

            </div>

        </>} 

    </div>
 
  )

}
