
import './nav.css'
import { useAuth } from '../../../hooks/useAuth';
import colors from '../../../assets/pico.json'    
import A from '../../../assets/imgs/a.png'




export const Nav = () => {



    const { startLogout, useState, Link, useEffect, pathname } = useAuth()
  
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto", })
    }, [pathname])

    const [isActive, setIsActive] = useState(true)



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


            <div className={isActive ? "menu" : "menu display"} 
                 onClick={()=>window.innerWidth < 999 && setIsActive(true)} >

                    <span><img src={A} className='logo-A-menu'/></span>

                    <Link to="/ac/rutas/">Rutas</Link>

                    <Link to="/ac/units/">Unidades</Link>

                    <Link to="/ac/"      >Operadores</Link>

                    <Link to="/ac/assignations/">ASIGNACIONES</Link>
                
                    <Link   to="#" onClick={startLogout}> SALIR ➪ </Link>

            </div>

        </>} 

    </div>
 
    )

}
