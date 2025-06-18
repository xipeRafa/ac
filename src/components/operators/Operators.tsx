
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { PostForm } from './PostForm';
import { useOperators } from '../../hooks'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



export const Operators = () => {

 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const navigate = useNavigate();

    

    const usersListCSS2 = {
        fontWeight:'200'
    }


    const { dataUsersGet, operators, deleteUser, postUser, switchUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, uploadUserImg, usersFinder, 
            paginationSelect, paginationNext } = useOperators()




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


    const handleDelete = (el: Object) => {
        deleteUser(el)
    }

    // const handleSwitch = (el) => {
    //     switchUser(el)
    // }

    const handleEdith = (el: String) => {
        //console.log(el)
        setInfoToForm(el)
        handleShow()
    }


    const handlePaginationSelect=(ps)=>{
        let step = Number(ps)
        paginationSelect(step)
    }


     


    return (
        <div className='mt-4'>
{ localStorage?.status == 'authenticated' && <> 




        <Modal show={show} onHide={handleClose} fullscreen={true} >


                <Modal.Header className='modal2' closeButton>
                        <Modal.Title>{editMode ? 'EDITAR OPERADOR' : 'NUEVO OPERADOR'}</Modal.Title>
                </Modal.Header>


                <Modal.Body className='modal2'>
                        <PostForm 
                            postUser={postUser} 
                            editMode={editMode} 
                            newDataEdit={newDataEdit} 
                            defaultModeEdith={defaultModeEdith}
                            handleClose={handleClose}
                        />
                </Modal.Body>


                <Modal.Footer className='modal2'>
                        
                </Modal.Footer>


        </Modal>





        <h2 className="container-fluid text-center bg-white p-3">OPERADORES</h2>

        <section className='sectionControls'>
                <button className={!editMode ? 'btn-w secondary' : 'btn-w danger'} onClick={()=>handleShow()}>
                        {editMode ? 'EDICION PENDIENTE ✎' :'Nuevo Operador'}        
                </button>
                <button className='btn-w secondary-out'>Buscar 🔍︎</button>
        </section>







            {operators?.usuarios?.map((el, i) => (
                <div key={i + '!@#'} className="usersListCSS">

                    <h2>{el.name}</h2>

                    <p><span style={usersListCSS2}>ID: </span>      {el.idOperator}</p>
                    <p><span style={usersListCSS2}>Telefono:</span> {el.phone}</p>

                    {/*<img src={el.img} width='100px' />*/}

                    <hr />

                    <button className='btn-w' onClick={() => handleDelete(el)}>Eliminar</button>
                    <button className='btn-w' onClick={() => handleEdith(el)}>Editar ✎</button>

                    {/*<button className='btn-w primary'>Primary</button>
                    <button className='btn-w primary-out'>Primary-out</button>

                    <button className='btn-w secondary'>Secondary</button>
                    <button className='btn-w secondary-out'>Secondary-out</button>

                    <button className='btn-w success'>Success</button>
                    <button className='btn-w success-out'>Success-out</button>

                     <button className='btn-w danger'>Danger</button>
                    <button className='btn-w danger-out'>Danger-out</button>*/}


                    {/*<button onClick={() => handleSwitch(el)}>Toggle</button>*/}
                    {/*<input type="file" id="file-upload" onChange={(e) => uploadUserImg(el.uid, e.target.files[0])} />*/}

                </div>
            ))}
</>}
        </div>
    )
}
