
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { PostFormUnits } from './PostFormUnits';
import { useUnits } from '../../hooks'



export const Units = () => {


    const navigate = useNavigate();


    
    const usersListCSS = {
        display: "block",
        border: "4px solid salmon",
        padding: "10px 30px 16px 20px",
        width: "90%",
        marginLeft: "5%",
        marginBottom: "20px",
        backgroundColor: "white",
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
    }

    const usersListCSS2 = {
        fontWeight:'200'
    }


    const { dataUsersGet, units, deleteUser, postUser, switchUser, setInfoToForm,
            editModeUnits, newDataEdit, defaultModeEdith, uploadUserImg, 
            paginationSelect, paginationNext } = useUnits()




    useEffect(() => {

        if(localStorage.status === undefined || localStorage.status === 'not-authenticated'){
                localStorage.usersRegistered = JSON.stringify([{correo:'noexiste'}])
                localStorage.userName=''
                localStorage.status = 'not-authenticated'
                navigate('/ac/auth/login/')
                return
        }

        dataUsersGet()

    }, [])


    const handleDelete = (el) => {
        deleteUser(el)
    }

    // const handleSwitch = (el) => {
    //     switchUser(el)
    // }

    const handleEdith = (el) => {
        console.log(el)
        setInfoToForm(el)
    }


    const handlePaginationSelect=(ps)=>{
        let step = Number(ps)
        paginationSelect(step)
    }


     


    return (
        <div className='mt-4'>
{ localStorage?.status == 'authenticated' && <> 

            <PostFormUnits postUser={postUser} editModeUnits={editModeUnits} newDataEdit={newDataEdit} defaultModeEdith={defaultModeEdith} />

            <h2 class="container-fluid text-center bg-white p-3">UNIDADES</h2>

            {units?.usuarios?.map((el, i) => (
                <div key={i + '!@#'} style={usersListCSS}>

                    <h2><span style={usersListCSS2}>Descripcion: </span> {el.name}</h2>

                    <p><span style={usersListCSS2}>Numero Economico: </span>      {el.idUnit}</p>
                    <p><span style={usersListCSS2}>ID: </span> {el.phone}</p>
                    <p>Historial de Trabajo: </p>
                    <p>Status: </p>


                    {/*<img src={el.img} width='100px' />*/}

                    <hr />

                    <button className='btn-w' onClick={() => handleDelete(el)}>Eliminar</button>
                    <button className='btn-w' onClick={() => handleEdith(el)}>Editar ✎</button>

                    {/*<button onClick={() => handleSwitch(el)}>Toggle</button>*/}
                    {/*<input type="file" id="file-upload" onChange={(e) => uploadUserImg(el.uid, e.target.files[0])} />*/}

                </div>
            ))}
</>}
        </div>
    )
}
