
import { OperatorsForm } from './OperatorsForm'
import { useOperators } from '../../hooks'


export const Operators = () => {


    const { 
        operatorsSlice, operatorsGet, operatorsDelete, operatorsPost, setInfoToForm,
        editMode, newDataEdit, defaultModeEdith, navigateTo, useForm, useEffect,
        useState, Modal, show, handleClose, handleShow, onCheckingRedirect, Acordion, 
    } = useOperators()
   

    useEffect(() => {
        onCheckingRedirect(navigateTo)
        operatorsGet()
    }, [])


    const handleDelete = (el) => {
        operatorsDelete(el)
    }


    const handleEdith = (el) => {
        setInfoToForm(el)
        handleShow()
    }


    
    return (
        <div className='mt-4'>

            <h2 className="header">
                    OPERADORES
            </h2>

            <section className='sectionControls'>
                    <button className='btn-w secondary' onClick={()=>handleShow()}>
                        NUEVO OPERADOR
                    </button>
                    <button className='btn-w secondary-out'>
                        Buscar 🔍︎
                    </button>
            </section>


            {operatorsSlice.map((el, i) => (
                <div key={i + '!@#'} className="list">

                    <h2>{el.name} {el.apellidoPaterno} {el.apellidoMaterno}</h2>

                    <p><span>ID: </span>      {el.idOperator}</p>
                    <p>Horario:-- </p>
                    <p>Status:-- </p>

                    {Acordion(i, 'Mas Información ...', 
                        <div key={i}>
                            <p><span>Telefono:</span> {el.phone}</p>
                            <p><span>Dirección:   </span> {el.direccion}</p>
                            <p><span>Edad:        </span> {el.edad}</p>
                            <p><span>CURP:        </span> {el.curp}</p>
                            <p className='rfc'>   <span>RFC:</span> {el.rfc}</p>
                            <p><span>Nacimiento:  </span> {el.fechaNacimiento}</p>
                            <p><span>Estado Civil:</span> {el.estadoCivil}</p>
                            <p><span>Licencia:    </span> {el.licencia}</p>
                            <p><span>Vencimiento de Licencia:</span> {el.vencimientoLicencia}</p>
                            <p><span>Tipo de Sangre:         </span> {el.tipoSangre}</p>
                            <p><span>Contacto de Emergencia: </span> {el.contactoEmergencia}</p>
                            <hr />
                            <button className='btn-w me-4' onClick={() => handleDelete(el)}>Eliminar</button>
                            <button className='btn-w' onClick={() => handleEdith(el)}>Editar ✎</button>
                        </div>
                    )}

                    {/*<img src={el.img} width='100px' />*/}

                    {/*<input type="file" id="file-upload" className='fileImg' onChange={(e) => uploadUserImg(el.uid, e.target.files[0])} />*/}

                </div>
            ))}




            <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>

                <Modal.Header className='modalColors' >
                    <Modal.Title>{editMode ? 'EDITAR OPERADOR' : 'NUEVO OPERADOR' }</Modal.Title> 
                    {!editMode && <b className='modal-btn-x' onClick={handleClose}>❌</b> }
                </Modal.Header>

                <Modal.Body className='modalColors'>
                        <OperatorsForm 
                            operatorsPost={operatorsPost} 
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
