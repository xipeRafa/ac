
import { AssignationsForm } from './AssignationsForm';
import { useAssignations } from '../../hooks'


export const Assignations = () => {


    const { 
        assignationsSlice, assignationsGet, assDelete, assignationsPost, setInfoToForm,
        editMode, newDataEdit, defaultModeEdith, navigateTo, useForm, useEffect, useState,
        Modal, show, handleClose, handleShow, onCheckingRedirect, Acordion, avoidEmpty,
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
                    ASIGNACIÓNES
            </h2>

            <section className='sectionControls'>
                    <button className='btn-w secondary' onClick={()=>handleShow()}>
                        NUEVA ASIGNACIÓN
                    </button>
                    <button className='btn-w secondary-out'>
                        Buscar 🔍︎
                    </button>
            </section>


            {assignationsSlice.map((el, i) => (
                <div key={i + '!#'} className="list">

                    <h5><b>Ruta:    </b> {el.ruta}    </h5>
                    <h5><b>Unidad:  </b> {el.unit}    </h5>
                    <h5><b>Operador:</b> {el.operator}</h5>
                    <h5><b>Folio:   </b> {el.uid}     </h5>

                    {Acordion(i, 'Mas Información de la Asignación ...', 
                        <div key={i} className='assignationsContent'>


                          <div>

                            <div>
                                <h3>RUTA</h3>

                                <p><b>Punto de Partida:   </b> {el.puntoPartida}  </p>
                                <p><b>Punto Final:        </b> {el.puntoFinal}    </p>
                                <p><b>Fecha de Partida:   </b> {el.fechaPartida}  </p>
                                <p><b>Fecha Final:        </b> {el.fechaFinal}    </p>
                                <p><b>Hora de Partida:    </b> {el.horaPartida}   </p>
                                <p><b>Hora Final:         </b> {el.horaFinal}     </p>
                                <p><b>Intermedio 1:       </b> {el.puntoInt1}     </p>
                                <p><b>Fecha Intermedio 1: </b> {el.fechaPuntoInt1}</p>
                                <p><b>Hora Intermedio 1:  </b> {el.horaPuntoInt1} </p>
                            </div>

                            <div>
                                <h3>UNIDAD</h3>

                                <p><b>Descripción:      </b>{el.descri}      </p>
                                <p><b>Nro Economico:    </b>{el.ne}          </p>
                                <p><b>Placas:           </b>{el.placas}      </p>
                                <p><b>VIN:              </b>{el.vin}         </p>
                                <p><b>Nro de Serie:     </b>{el.NroSerie}    </p>
                                <p><b>Año:              </b>{el.anio}        </p>
                                <p><b>Modelo:           </b>{el.modelo}      </p>
                                <p><b>Marca:            </b>{el.marca}       </p>
                                <p><b>Nro de Pasajeros: </b>{el.NroPasajeros}</p>
                                <p><b>Años de Uso:      </b>{el.aniosUso}    </p>
                            </div>  

                            <div>
                                <h3>OPERADOR</h3> 

                                <p>{el.name} {el.apellidoPaterno} {el.apellidoMaterno}</p>

                                <p><b>ID:                     </b> {el.idOperator}  </p>
                                <p><b>Celular:                </b> {el.phone}       </p>
                                <p><b>Direccion:              </b> {el.direccion}   </p>
                                <p><b>Edad:                   </b> {el.edad}        </p>
                                <p><b>Licencia:               </b> {el.licencia}    </p>
                                <p><b>Venc. Licencia:         </b> {el.veLicencia}  </p>
                                <p><b>RFC:                    </b> {el.rfc}         </p>
                                <p><b>CURP:                   </b> {el.curp}        </p>
                                <p><b>Tipo de Sangre:         </b> {el.tipoSangre}  </p>
                                <p><b>Contacto de Emergencia: </b> {el.coEmergencia}</p>
                            </div> 
                          </div>


                          <div className='btns-Assignations'>

                                <button className='btn-w me-4' onClick={() => handleDelete(el)}>
                                        Eliminar
                                </button>


                                <button className='btn-w' onClick={() => handleEdith(el)}>
                                        Editar ✎
                                </button>
  
                          </div>


                        </div>
                    )}

                  

                </div>
            ))}




            <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>

                <Modal.Header className='modalColors' >
                    <Modal.Title>{editMode ? 'EDITAR ASIGNACIÓN' : 'NUEVA ASIGNACIÓN' }</Modal.Title> 
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
                            avoidEmpty={avoidEmpty}
                        />
                </Modal.Body>

                <Modal.Footer className='modalColors'></Modal.Footer>

            </Modal>





        </div>
    )
}
