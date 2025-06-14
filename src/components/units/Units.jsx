
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { PostFormUnits } from './PostFormUnits';
import { useUnits } from '../../hooks'



export const Units = () => {


    const navigate = useNavigate();


    const usersListCSS = {
        display: "block",
        border: "4px solid salmon",
        paddingTop: "10px",
        paddingLeft: "20px",
        width: "90%",
        marginLeft: "5%",
        marginBottom: "10px",
        backgroundColor: "white"
    }

    const usersListCSS2 = {
        fontWeight:'200'
    }


    const { dataUsersGet, units, deleteUser, postUser, switchUser, setInfoToForm,
            editModeUnits, newDataEdit, defaultModeEdith, uploadUserImg, 
            paginationSelect, paginationNext } = useUnits()




    useEffect(() => {
        dataUsersGet()

        if(localStorage.status === 'not-authenticated'){
                navigate('/ac/auth/login')
        }

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

            {units?.usuarios?.map((el, i) => (
                <div key={i + '!@#'} style={usersListCSS}>

                    <h2><span style={usersListCSS2}>Descripcion: </span> {el.name}</h2>

                    <p><span style={usersListCSS2}>Numero Economico: </span>      {el.idUnit}</p>
                    <p><span style={usersListCSS2}>ID: </span> {el.phone}</p>
                    <p>Historial de Trabajo: </p>
                    <p>Status: </p>


                    {/*<img src={el.img} width='100px' />*/}

                    

                    <button className='m-1' onClick={() => handleDelete(el)}>Eliminar</button>
                    <button className='m-1' onClick={() => handleEdith(el)}>Editar</button>

                    {/*<button onClick={() => handleSwitch(el)}>Toggle</button>*/}
                    {/*<input type="file" id="file-upload" onChange={(e) => uploadUserImg(el.uid, e.target.files[0])} />*/}

                </div>
            ))}
</>}
        </div>
    )
}
