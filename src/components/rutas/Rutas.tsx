
import { RutasForm } from './RutasForm'
import { useRutas } from '../../hooks'


export const Rutas = () => {


    const { 
        rutasSlice, rutasGet, rutasDelete, rutasPost, setInfoToForm,
        editMode, newDataEdit, defaultModeEdith, navigateTo, useForm, useEffect,
        useState, Modal, show, handleClose, handleShow, onCheckingRedirect, Acordion, 
    } = useRutas()
   

    useEffect(() => {
        onCheckingRedirect(navigateTo)
        rutasGet()
    }, [])


    const handleDelete = (el) => {
        rutasDelete(el)
    }


    const handleEdith = (el) => {
        setInfoToForm(el)
        handleShow()
    }


    
    return (
        <div className='mt-4'>

            <h2 className="header">
                    RUTAS
            </h2>

            <section className='sectionControls'>
                    <button className='btn-w secondary' onClick={()=>handleShow()}>
                        NUEVA RUTA
                    </button>
                    <button className='btn-w secondary-out'>
                        Buscar 🔍︎
                    </button>
            </section>


            {rutasSlice?.map((el, i) => (
                <div key={i + '!@#'} className="list">

                    <h3>{el.nameRuta}</h3>

                    <p><span> Punto de Partida: </span> {el.puntoPartida} </p>
                    <p><span> Punto Final:      </span> {el.puntoFinal}   </p>
                    <p><span> Fecha de Partida: </span> {el.fechaPartida} </p>
                    <p><span> Fecha Final:      </span> {el.fechaFinal}   </p>
                    <p><span> Hora de Partida:  </span> {el.horaPartida}  </p>
                    <p><span> Hora Final:       </span> {el.horaFinal}    </p>

                    {Acordion(i, 'Mas Información de la Ruta...', 
                        <div key={i}>
                            <p><span>Punto Intermedio 1:          </span> {el.puntoInt1}     </p>
                            <p><span>Fecha de Punto Intermedio 1: </span> {el.fechaPuntoInt1}</p>
                            <p><span>Hora de Punto Intermedio 1:  </span> {el.horaPuntoInt1} </p>
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
                    <Modal.Title>{editMode ? 'EDITAR RUTA' : 'NUEVA RUTA' }</Modal.Title> 
                    {!editMode && <b className='modal-btn-x' onClick={handleClose}>❌</b> }
                </Modal.Header>

                <Modal.Body className='modalColors'>
                        <RutasForm 
                            rutasPost={rutasPost} 
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
