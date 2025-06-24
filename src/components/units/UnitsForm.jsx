




export const UnitsForm = ({ unitsPost, editMode, newDataEdit, defaultModeEdith, handleClose, useEffect, useState, useForm }) => {



    const[unitState, setUnitState]=useState({
        name:'', phone:'', idUnit:''
    })




    const { name, phone, idUnit, onInputChange: onPostInputChange, noSpace } = useForm(unitState);



    useEffect(() => { 
        if(editMode !== undefined) {
            const { name, phone, idUnit } = editMode
            setUnitState({name, phone, idUnit})
        }
    }, [editMode]) 





    const onSubmitUsers = () => {
        event.preventDefault();

        if(editMode){
            const { name, phone, idUnit } = noSpace
            newDataEdit(name, phone, idUnit, editMode.uid)
            setUnitState({name:'', phone:'', idUnit:'' })
        }else{
            const { name, phone, idUnit } = noSpace
            unitsPost({name, phone, idUnit })
        }

        handleClose()
    }


    
    const handleCancelEdit =()=>{
        defaultModeEdith()
        setUnitState({name:'', phone:'', idUnit:''})
        handleClose()
    }

  


  return (
    <div className="container sombra mt-5">
    <div className="row">
        <div className="col-lg-8 offset-lg-2">

            <form onSubmit={onSubmitUsers}>


                <div className="form-group mb-3 mt-4 pt-3">
                    {editMode && <label>Descripción</label>}
                    <input
                        type='text'
                        required
                        className="form-control"
                        placeholder="Descripción"
                        name="name"
                        value={capitalize(name)}
                        onChange={onPostInputChange}
                    />
                </div>

                <div className="form-group mb-3">
                    {editMode && <label>Numero Economico</label>}
                    <input
                        type='text'
                        required
                        className="form-control"
                        placeholder="Numero Economico"
                        name="phone"
                        value={capitalize(phone)}
                        onChange={onPostInputChange}
                    />
                </div>

                 <div className="form-group mb-3">
                    {editMode && <label>Identificador</label>}
                    <input
                        type='text'
                        required
                        className="form-control"
                        placeholder="ID"
                        name="idUnit"
                        value={capitalize(idUnit)}
                        onChange={onPostInputChange}
                    />
                </div>


                    <div className='d-flex flex-column flex-sm-row mb-2 pt-2'>

                        <input 
                            type="submit"
                            className={editMode ? "btn-w w-100 me-5 mb-3 mt-4 primary" : "btn-w w-100 mb-2 mt-3 primary" } 
                            value={ editMode ? 'Guardar Cambios ↑': "Guardar Unidad"} />

                        {editMode && 
                            <button type="reset" onClick={handleCancelEdit} className="btn-w w-100 mt-4 primary-out">    
                                    Cancelar Edición <b style={{color:'red'}}>✘</b> 
                            </button>
                        }

                </div>



            </form>
            <br />
        </div>
    </div>
</div>
  )
}
