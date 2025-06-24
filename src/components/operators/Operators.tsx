

import { OperatorsForm } from './OperatorsForm';
import { useOperators } from '../../hooks'



export const Operators = () => {


    const { operatorsSlice, operatorsGet, operatorsDelete, operatorsPost, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, navigateTo, useForm, 
            useEffect, useState, Modal, show,
            handleClose, handleShow, onCheckingRedirect
    } = useOperators()
    
    useEffect(() => {
        onCheckingRedirect(navigateTo)
        operatorsGet()
    }, [])

    const handleDelete = (el: Object) => {
        operatorsDelete(el)
    }

    const handleEdith = (el: String) => {
        setInfoToForm(el)
        handleShow()
    }


    
    return (
        <div className='mt-4'>

        { localStorage?.status == 'authenticated' && <> 

            <h2 className="container-fluid text-center bg-white p-3">OPERADORES</h2>

            <section className='sectionControls'>
                    <button className='btn-w secondary' onClick={()=>handleShow()}>
                            NUEVO OPERADOR
                    </button>
                    <button className='btn-w secondary-out'>
                            Buscar 🔍︎
                    </button>
            </section>


            {operatorsSlice.map((el, i) => (
                <div key={i + '!@#'} className="usersList">

                    <h2>{capitalize(el.name)}</h2>

                    <p><span style={{fontWeight:'200'}}>ID: </span>      {capitalize(el.idOperator)}</p>
                    <p><span style={{fontWeight:'200'}}>Telefono:</span> {capitalize(el.phone)}</p>

                    {/*<img src={el.img} width='100px' />*/}

                    <hr />

                    <button className='btn-w' onClick={() => handleDelete(el)}>Eliminar</button>
                    <button className='btn-w' onClick={() => handleEdith(el)}>Editar ✎</button>

                   {/* <button className='btn-w primary'>Primary</button>
                    <button className='btn-w primary-out'>Primary-out</button>

                    <button className='btn-w secondary'>Secondary</button>
                    <button className='btn-w secondary-out'>Secondary-out</button>

                    <button className='btn-w success'>Success</button>
                    <button className='btn-w success-out'>Success-out</button>

                     <button className='btn-w danger'>Danger</button>
                    <button className='btn-w danger-out'>Danger-out</button>*/}


                    {/*<button onClick={() => handleSwitch(el)}>Toggle</button>*/}
                    {/*<input type="file" id="file-upload" onChange={(e) => uploadUserImg(el.uid, e.target.files[0])} />*/}

                </div>
            ))}




            <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>

                <Modal.Header className='modal2' >
                    <Modal.Title>{editMode ? 'EDITAR OPERADOR' : 'NUEVO OPERADOR' }</Modal.Title> 
                    {editMode ? '' : <b className='btn-closeX' onClick={handleClose}>❌</b> }
                </Modal.Header>

                <Modal.Body className='modal2'>
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

                <Modal.Footer className='modal2'></Modal.Footer>

            </Modal>


        </>}


        </div>
    )
}
