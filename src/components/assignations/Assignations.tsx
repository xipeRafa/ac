
import { AssignationsForm } from './AssignationsForm';
import { useAssignations } from '../../hooks'


export const Assignations = () => {


    const { 
        assignationsSlice, assignationsGet, assDelete, assignationsPost, setInfoToForm,
        editMode, newDataEdit, defaultModeEdith, navigateTo, useForm, useEffect,
        useState, Modal, show, handleClose, handleShow, onCheckingRedirect, Acordion
    } = useAssignations()
   

    useEffect(() => {
        onCheckingRedirect(navigateTo)
        assignationsGet()
    }, [])


    const handleDelete = (el) => {
        assDelete(el)
    }


    const handleEdith = (el) => {
        setInfoToForm(el)
        handleShow()
    }


    
    return (
        <div className='mt-4'>

            <h2 className="header">
                    ASSIGNATIONS
            </h2>

            <section className='sectionControls'>
                    <button className='btn-w secondary' onClick={()=>handleShow()}>
                        NUEVO ASSIGNATIONS
                    </button>
                    <button className='btn-w secondary-out'>
                        Buscar 🔍︎
                    </button>
            </section>


            {assignationsSlice.map((el, i) => (
                <div key={i + '!#'} className="list">

                    <p><span>Operador: </span>      {el.operator}</p>

                    <p><span>Unidad: </span>      {el.unit}</p>
                    <p><span>Ruta:</span> {el.ruta}</p>


                     {Acordion(i, 'Mas Información de la Ruta ...', 
                        <div key={i}>
                            <p><span>punto de partida:</span> </p>
                            <p><span>punto Uno:</span> </p>
                            <p><span>punto Dos:</span> </p>
                            <p><span>punto Tres:</span> </p>
                            <p><span>punto final:</span> </p>

                            
                            <hr />
                            <button className='btn-w me-4' onClick={() => handleDelete(el)}>Eliminar</button>
                            <button className='btn-w' onClick={() => handleEdith(el)}>Editar ✎</button>
                        </div>
                    )}

                </div>
            ))}




            <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>

                <Modal.Header className='modalColors' >
                    <Modal.Title>{editMode ? 'EDITAR ASSIGNATIONS' : 'NUEVO ASSIGNATIONS' }</Modal.Title> 
                    {!editMode && <b className='modal-btn-x' onClick={handleClose}>❌</b> }
                </Modal.Header>

                <Modal.Body className='modalColors'>
                        <AssignationsForm 
                            assignationsPost={assignationsPost} 
                            editMode={editMode} 
                            newDataEdit={newDataEdit} 
                            defaultModeEdith={defaultModeEdith}
                            handleClose={handleClose}
                            useForm={useForm}
                            useEffect={useEffect}
                            useState={useState}
                        />
                </Modal.Body>

                <Modal.Footer className='modalColors'></Modal.Footer>

            </Modal>

        </div>
    )
}
