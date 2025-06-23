
import { useUnits } from '../../hooks'

import { PostFormUnits } from './PostFormUnits';




export const Units = () => {



    const { dataUsersGet, unitsSlice, deleteUser, postUser, setInfoToForm,
            editModeUnits, newDataEdit, defaultModeEdith, navigateTo, useEffect, capitalize,
                useState, Modal, show, handleClose, handleShow, useForm, onCheckingRedirect } = useUnits()




    useEffect(() => {

        onCheckingRedirect(navigateTo)

        dataUsersGet()

    }, [])


    const handleDelete = (el) => {
        deleteUser(el)
    }



    const handleEdith = (el) => {
        setInfoToForm(el)
        handleShow()
    }



     


    return (
        <div className='mt-4'>

{ localStorage?.status == 'authenticated' && <> 


        <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>

                <Modal.Header className='modal2' >
                        <Modal.Title>{editModeUnits ? 'EDITAR UNIDAD' : 'NUEVA UNIDAD' }</Modal.Title> 
                        {editModeUnits ? '' : <b className='btn-closeX' onClick={handleClose}>❌</b> }
                </Modal.Header>

                <Modal.Body className='modal2'>

                        <PostFormUnits 
                            handleClose={handleClose} 
                            postUser={postUser} 
                            useEffect={useEffect} 
                            useState={useState}
                            editModeUnits={editModeUnits} 
                            newDataEdit={newDataEdit} 
                            defaultModeEdith={defaultModeEdith} 
                            useForm={useForm} 
                        />

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


            {unitsSlice.map((el, i) => (
                <div key={i + '!@#'} className='usersList' >

                    <h2><span style={{fontWeight:'200'}}>Descripcion: </span> {capitalize(el.name)}</h2>

                    <p><span style={{fontWeight:'200'}}>Numero Economico: </span> {capitalize(el.idUnit)}</p>
                    <p><span style={{fontWeight:'200'}}>ID: </span> {capitalize(el.phone)}</p>
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
