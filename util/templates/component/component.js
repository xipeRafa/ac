module.exports = (componentName) => ({
  content: `
import { ${componentName}Form } from './${componentName}Form'
import { use${componentName} } from '../../hooks'


export const ${componentName} = () => {


    const { 
        ${componentName.toLowerCase()}Slice, ${componentName.toLowerCase()}Get, ${componentName.toLowerCase()}Delete, ${componentName.toLowerCase()}Post, setInfoToForm,
        editMode, newDataEdit, defaultModeEdith, navigateTo, useForm, useEffect,
        useState, Modal, show, handleClose, handleShow, onCheckingRedirect, Acordion, 
    } = use${componentName}()
   

    useEffect(() => {
        onCheckingRedirect(navigateTo)
        ${componentName.toLowerCase()}Get()
    }, [])


    const handleDelete = (el) => {
        ${componentName.toLowerCase()}Delete(el)
    }


    const handleEdith = (el) => {
        setInfoToForm(el)
        handleShow()
    }


    
    return (
        <div className='mt-4'>

            <h2 className="header">
                ${componentName}
            </h2>

            <section className='sectionControls'>
                    <button className='btn-w secondary' onClick={()=>handleShow()}>
                        NUEVO ${componentName.toUpperCase()}
                    </button>
                    <button className='btn-w secondary-out'>
                        Buscar 🔍︎
                    </button>
            </section>


            {${componentName.toLowerCase()}Slice.map((el, i) => (
                <div key={i + '!@#'} className="list">

                    <h3>{el.name} {el.apellidoPaterno} {el.apellidoMaterno}</h3>

                    <p><span>ID:       </span> {el.idOperator} </p>
                    <p><span>Telefono: </span> {el.phone}      </p>
                    <p><span>Status:-- </span>                 </p>

                    {Acordion(i, 'Mas Información de ${componentName} ...', 
                        <div key={i}>

                            <p><span>Horario:--              </span>                      </p>
                            <p><span>Dirección:              </span> {el.direccion}       </p>
                            <p><span>Edad:                   </span> {el.edad}            </p>
                            <p><span>CURP:                   </span> {el.curp}            </p>
                            <p><span>RFC:                    </span> {el.rfc}             </p>
                            <p><span>Nacimiento:             </span> {el.fechaNacimiento} </p>
                            <p><span>Estado Civil:           </span> {el.estadoCivil}     </p>
                            <p><span>Licencia:               </span> {el.licencia}        </p>
                            <p><span>Venci. de Licencia:     </span> {el.veLicencia}      </p>
                            <p><span>Tipo de Sangre:         </span> {el.tipoSangre}      </p>
                            <p><span>Contacto de Emergencia: </span> {el.coEmergencia}    </p>
                            <p><span>Historial:--            </span>                      </p>

                            <hr />

                            <button className='btn-w me-4' onClick={() => handleDelete(el)}>
                                Eliminar
                            </button>
                            <button className='btn-w' onClick={() => handleEdith(el)}>
                                Editar ✎
                            </button>

                        </div>
                    )}

                </div>
            ))}




            <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>

                <Modal.Header className='modalColors' >
                    <Modal.Title>{editMode ? 'EDITAR ${componentName.toUpperCase()}' : 'NUEVO ${componentName.toUpperCase()}' }</Modal.Title> 
                    {!editMode && <b className='modal-btn-x' onClick={handleClose}>❌</b> }
                </Modal.Header>

                <Modal.Body className='modalColors'>
                        <${componentName}Form 
                            ${componentName.toLowerCase()}Post={${componentName.toLowerCase()}Post} 
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






`,
  extension: `${componentName}.jsx`
});