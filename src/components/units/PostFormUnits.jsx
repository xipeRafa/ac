




export const PostFormUnits = ({ postUser, editModeUnits, newDataEdit, defaultModeEdith, handleClose, useEffect, useState, useForm }) => {



    const[unitState, setUnitState]=useState({
        name:'', phone:'', idUnit:''
    })




    const { name, phone, idUnit,
            onInputChange: onPostInputChange, noSpace } = useForm(unitState);



    useEffect(() => { 
        if(editModeUnits !== undefined) {
            const { name, phone, idUnit } = editModeUnits
            setUnitState({name, phone, idUnit})
        }
    }, [editModeUnits]) 





    const onSubmitUsers = () => {
        event.preventDefault();

        if(editModeUnits){
            const { name, phone, idUnit } = noSpace
            newDataEdit(name, phone, idUnit, editModeUnits.uid)
            setUnitState({name:'', phone:'', idUnit:'' })
        }else{
            const { name, phone, idUnit } = noSpace
            postUser({name, phone, idUnit })
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
                    {editModeUnits && <label>Descripción</label>}
                    <input
                        type='text'
                        required
                        className="form-control"
                        placeholder="Descripción"
                        name="name"
                        value={name}
                        onChange={onPostInputChange}
                    />
                </div>

                <div className="form-group mb-3">
                    {editModeUnits && <label>Numero Economico</label>}
                    <input
                        type='text'
                        required
                        className="form-control"
                        placeholder="Numero Economico"
                        name="phone"
                        value={phone}
                        onChange={onPostInputChange}
                    />
                </div>

                 <div className="form-group mb-3">
                    {editModeUnits && <label>Identificador</label>}
                    <input
                        type='text'
                        required
                        className="form-control"
                        placeholder="ID"
                        name="idUnit"
                        value={idUnit}
                        onChange={onPostInputChange}
                    />
                </div>


                    <div className='d-flex flex-column flex-sm-row mb-2 pt-2'>

                        <input 
                            type="submit"
                            className={editModeUnits ? "btn-w w-100 me-5 mb-3 mt-4 primary" : "btn-w w-100 mb-2 mt-3 primary" } 
                            value={ editModeUnits ? 'Guardar Cambios ↑': "Guardar Unidad"} />

                        {editModeUnits && 
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
