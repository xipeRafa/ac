
import { useUnits } from '../../hooks'

import { PostFormUnits } from './PostFormUnits';




export const Units = () => {



    const { dataUsersGet, units, deleteUser, postUser, setInfoToForm,
            editModeUnits, newDataEdit, defaultModeEdith, navigateTo, useEffect, 
                useState, Modal, show, handleClose, handleShow, useForm } = useUnits()




    useEffect(() => {

        if(localStorage.status === undefined || localStorage.status === 'not-authenticated'){

                localStorage.userName=''
                localStorage.status = 'not-authenticated'
                navigateTo('/ac/auth/login/')

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



    const handleEdith = (el) => {
        setInfoToForm(el)
        handleShow()
    }


    const handlePaginationSelect=(ps)=>{
        let step = Number(ps)
        paginationSelect(step)
    }


     


    return (
        <div className='mt-4'>


        <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>


                {editModeUnits 
                    ?
                        <Modal.Header className='modal2' >
                            <Modal.Title>EDITAR UNIDAD</Modal.Title>
                        </Modal.Header>

                    :
                        <Modal.Header className='modal2'>
                            <Modal.Title>NUEVA UNIDAD</Modal.Title>
                            <b className='btn-closeX' onClick={handleClose}>❌</b>
                        </Modal.Header>
                }


                <Modal.Body className='modal2'>

            <PostFormUnits handleClose={handleClose} postUser={postUser} useEffect={useEffect} useState={useState}
                editModeUnits={editModeUnits} newDataEdit={newDataEdit} defaultModeEdith={defaultModeEdith} useForm={useForm} />

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


            {units.map((el, i) => (
                <div key={i + '!@#'} className='usersList' >

                    <h2><span style={{fontWeight:'200'}}>Descripcion: </span> {el.name}</h2>

                    <p><span style={{fontWeight:'200'}}>Numero Economico: </span>      {el.idUnit}</p>
                    <p><span style={{fontWeight:'200'}}>ID: </span> {el.phone}</p>
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

        </div>
    )
}
