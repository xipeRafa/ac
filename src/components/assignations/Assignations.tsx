
import { AssignationsForm } from './AssignationsForm';
import { useAssignations } from '../../hooks'


export const Assignations = () => {


    const { 
        assignationsSlice, assignationsGet, assDelete, assignationsPost, setInfoToForm,
        editMode, newDataEdit, defaultModeEdith, navigateTo, useForm, useEffect,
         useState, Modal, show, handleClose, handleShow, onCheckingRedirect
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
                <div key={i + '!@#'} className="usersList">

                    <h2>{capitalize(el.name)}</h2>

                    <p><span>ID: </span>      {capitalize(el.idOperator)}</p>
                    <p><span>Telefono:</span> {capitalize(el.phone)}</p>

                    {/*<img src={el.img} width='100px' />*/}

                    <hr />

                    <button className='btn-w' onClick={() => handleDelete(el)}>Eliminar</button>
                    <button className='btn-w' onClick={() => handleEdith(el)}>Editar ✎</button>

                    {/*<button onClick={() => handleSwitch(el)}>Toggle</button>*/}
                    {/*<input type="file" id="file-upload" onChange={(e) => uploadUserImg(el.uid, e.target.files[0])} />*/}

                </div>
            ))}




            <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>

                <Modal.Header className='modal2' >
                    <Modal.Title>{editMode ? 'EDITAR ASSIGNATIONS' : 'NUEVO ASSIGNATIONS' }</Modal.Title> 
                    {!editMode && <b className='btn-closeX' onClick={handleClose}>❌</b> }
                </Modal.Header>

                <Modal.Body className='modal2'>
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

                <Modal.Footer className='modal2'></Modal.Footer>

            </Modal>

        </div>
    )
}
