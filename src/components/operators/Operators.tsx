


import { PostForm } from './PostForm';

import { useOperators } from '../../hooks'






export const Operators = () => {


    const { operators, dataUsersGet, deleteUser, postUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, navigateTo, useForm, 
            useEffect, useState, Modal, show, handleClose, handleShow } = useOperators()
    


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




    const handleDelete = (el: Object) => {
        deleteUser(el)
    }



    const handleEdith = (el: String) => {
        setInfoToForm(el)
        handleShow()
    }


     


    return (
        <div className='mt-4'>

        { localStorage?.status == 'authenticated' && <> 


            <Modal show={show} onHide={handleClose} fullscreen={true} animation={false}>

                {editMode 
                    ?
                        <Modal.Header className='modal2' >
                            <Modal.Title>EDITAR OPERADOR</Modal.Title>
                        </Modal.Header>

                    :
                        <Modal.Header className='modal2' >
                            <Modal.Title>NUEVO OPERADOR</Modal.Title> 
                            <b className='btn-closeX' onClick={handleClose}>❌</b>
                        </Modal.Header>
                }
                


                <Modal.Body className='modal2'>
                        <PostForm 
                            postUser={postUser} 
                            editMode={editMode} 
                            newDataEdit={newDataEdit} 
                            defaultModeEdith={defaultModeEdith}
                            handleClose={handleClose}
                            useForm={useForm}
                            useEffect={useEffect}
                            useState={useState}
                        />
                </Modal.Body>


                <Modal.Footer className='modal2'>
                        
                </Modal.Footer>


            </Modal>





            <h2 className="container-fluid text-center bg-white p-3">
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




            {operators?.usuarios?.map((el, i) => (
                <div key={i + '!@#'} className="usersList">

                    <h2>{el.name}</h2>

                    <p><span style={{fontWeight:'200'}}>ID: </span>      {el.idOperator}</p>
                    <p><span style={{fontWeight:'200'}}>Telefono:</span> {el.phone}</p>

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


        </>}


        </div>
    )
}
