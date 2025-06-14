
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { PostForm } from './PostForm';
import { useOperators } from '../../hooks'






export const Operators = () => {




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


    const { dataUsersGet, operators, deleteUser, postUser, switchUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, uploadUserImg, usersFinder, 
            paginationSelect, paginationNext } = useOperators()




    useEffect(() => {

        dataUsersGet()

        if(localStorage.status === 'not-authenticated'){
                setTimeout(()=>{
                        navigate('/ac/auth/login')
                },500)
        }

    }, [])


    const handleDelete = (el: Object) => {
        deleteUser(el)
    }

    // const handleSwitch = (el) => {
    //     switchUser(el)
    // }

    const handleEdith = (el: String) => {
        //console.log(el)
        setInfoToForm(el)
    }


    const handlePaginationSelect=(ps)=>{
        let step = Number(ps)
        paginationSelect(step)
    }


     


    return (
        <div className='mt-4'>
{ localStorage?.status == 'authenticated' && <> 
            <PostForm postUser={postUser} editMode={editMode} newDataEdit={newDataEdit} defaultModeEdith={defaultModeEdith} />

            {operators?.usuarios?.map((el, i) => (
                <div key={i + '!@#'} style={usersListCSS}>

                    <h2>{el.name}</h2>

                    <p><span style={usersListCSS2}>ID: </span>      {el.idOperator}</p>
                    <p><span style={usersListCSS2}>Telefono:</span> {el.phone}</p>

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
