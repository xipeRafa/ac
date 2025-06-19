
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { PostFormUnits } from './PostFormUnits';
import { useUnits } from '../../hooks'

import Modal from 'react-bootstrap/Modal';


export const Units = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

                localStorage.userName=''
                localStorage.status = 'not-authenticated'
                navigate('/ac/auth/login/')

                if(localStorage.usersRegistered === undefined){
                        localStorage.usersRegistered = JSON.stringify([{correo:'noexiste'}])    
                }    
                
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
        handleShow()
    }


    const handlePaginationSelect=(ps)=>{
        let step = Number(ps)
        paginationSelect(step)
    }


     


    return (
        <div className='mt-4'>
{ localStorage?.status == 'authenticated' && <> 


        <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>


                {editModeUnits 
                    ?
                        <Modal.Header className='modal2' >
                            <Modal.Title>EDITAR UNIDAD</Modal.Title>
                        </Modal.Header>

                    :
                        <Modal.Header className='modal2'>
                            <Modal.Title>NUEVA UNIDAD</Modal.Title>
                            <b className='btn-closeX' onClick={handleClose}>✘</b>
                        </Modal.Header>
                }


                <Modal.Body className='modal2'>

            <PostFormUnits handleClose={handleClose} postUser={postUser} editModeUnits={editModeUnits} newDataEdit={newDataEdit} defaultModeEdith={defaultModeEdith} />

             </Modal.Body>


                <Modal.Footer className='modal2'>
                        
                </Modal.Footer>


        </Modal>



            <h2 className="container-fluid text-center bg-white p-3">UNIDADES</h2>

            <section className='sectionControls'>
                <button className='btn-w secondary' onClick={()=>handleShow()}>
                        Nueva Unidad
                </button>
                <button className='btn-w secondary-out'>Buscar 🔍︎</button>
            </section>

            {units?.usuarios?.map((el, i) => (
                <div key={i + '!@#'} className='usersListCSS' >

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
