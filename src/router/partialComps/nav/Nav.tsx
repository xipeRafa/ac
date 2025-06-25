
import './nav.css'
import { useAuth } from '../../../hooks/useAuth';
import colors from '../../../assets/pico.json'    
import A from '../../../assets/a.png'




export const Nav = () => {

    const { startLogout, useState, Link, useEffect, useLocation } = useAuth()


    const { pathname } = useLocation()
  
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto", })
    }, [pathname])


    const [isActive, setIsActive] = useState(true)

    const windowWidth = window.innerWidth



    return (
    
    <div>

        { ls('status') === 'authenticated' && <> 

            <div className="hamburger" onClick={() => setIsActive(!isActive)} >

                <img src={A} className='logo-A'/>

                <span className='menuX'>
                    {isActive 
                        ?   <div className="menu-barras">
                                <div className="uno" />
                                <div className="dos" />
                                <div className="tres" />
                            </div>
                        :   <span className='cruzCerrar'>✕</span>
                    }
                </span>
                
            </div>


            <div className={isActive ? "menu" : "menu display"} onClick={()=>windowWidth < 999 && setIsActive(true)} style={{color:"white"}}>

                <span><img src={A} className='logo-A-menu'/></span>

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
