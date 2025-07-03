
import { useUnits } from '../../hooks'
import { UnitsForm } from './UnitsForm';


export const Units = () => {


    const { 
        unitsGet, unitsSlice, unitsDelete, unitsPost, setInfoToForm, editMode,
        newDataEdit, defaultModeEdith, navigateTo, useEffect, useState, Modal,
        show, handleClose, handleShow, useForm, onCheckingRedirect, Acordion, 
    } = useUnits()


    useEffect(() => {
        onCheckingRedirect(navigateTo)
        unitsGet()
    }, [])


    const handleDelete = (el) => {
        unitsDelete(el)
    }


    const handleEdith = (el) => {
        setInfoToForm(el)
        handleShow()
    }



    return (
        <div className='mt-4'>

            <h2 className="header">
                UNIDADES
            </h2>


            <section className='sectionControls'>
                <button className='btn-w secondary' onClick={()=>handleShow()}>
                    Nueva Unidad
                </button>
                <button className='btn-w secondary-out'>
                    Buscar 🔍︎
                </button>
            </section>


            {unitsSlice.map((el, i) => (
                <div key={i + '!@'} className='list' >

                    <h3><span>Descripción:     </span> {el.descri}</h3>

                    <p><span>Numero Economico: </span> {el.ne}</p>
                    <p><span>ID:               </span> {el.idUnit}</p>
                    <p>Status:-- </p>
                    
                    {Acordion(i, 'Mas Información de la Unidad ...', 
                        <div key={i}>
                            <p><span>Placas:          </span> {el.placas}      </p>
                            <p><span>VIN:             </span> {el.vin}         </p>
                            <p><span>Nro de Serie:    </span> {el.NroSerie}    </p>
                            <p><span>Año:             </span> {el.anio}        </p>
                            <p><span>Modelo:          </span> {el.modelo}      </p>
                            <p><span>Marca:           </span> {el.marca}       </p>
                            <p><span>Nro de Pasajeros:</span> {el.NroPasajeros}</p>
                            <p><span>Años de Uso:     </span> {el.aniosUso}    </p>

                            <p>Historial de Trabajo:-- </p>
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
                        <Modal.Title>{editMode ? 'EDITAR UNIDAD' : 'NUEVA UNIDAD' }</Modal.Title> 
                        {!editMode && <b className='modal-btn-x' onClick={handleClose}>❌</b>}
                </Modal.Header>

                <Modal.Body className='modalColors'>

                        <UnitsForm 
                            handleClose={handleClose} 
                            unitsPost={unitsPost} 
                            useEffect={useEffect} 
                            useState={useState}
                            editMode={editMode} 
                            newDataEdit={newDataEdit} 
                            defaultModeEdith={defaultModeEdith} 
                            useForm={useForm} 
                        />

                </Modal.Body>

                <Modal.Footer className='modalColors'></Modal.Footer>

            </Modal>

        </div>
    )
}
