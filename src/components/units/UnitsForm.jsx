
export const UnitsForm = ({ unitsPost, editMode, newDataEdit, defaultModeEdith, 
                                handleClose, useEffect, useState, useForm }) => {


    const[unitState, setUnitState]=useState({
        descri:'', ne:'', idUnit:''
    })


    const { 
        descri, ne, idUnit, onInputChange: onPostInputChange, noSpace 
    } = useForm(unitState)


    useEffect(() => { 
        if(editMode !== undefined) {
            const { descri, ne, idUnit } = editMode
            setUnitState({descri, ne, idUnit})
        }
    }, [editMode]) 


    const onSubmit = () => {
        event.preventDefault();

        if(editMode){
            const { descri, ne, idUnit } = noSpace
            newDataEdit(descri, ne, idUnit, editMode.uid)
        }else{
            const { descri, ne, idUnit } = noSpace
            unitsPost({descri, ne, idUnit })
        }

        handleClose()
    }

 
    const handleCancelEdit = () => {
        defaultModeEdith()
        handleClose()
    }

  


  return (
    <div className="container sombra mt-5">
    <div className="row">
        <div className="col-lg-8 offset-lg-2">

            <form onSubmit={onSubmit} className={editMode ? 'mt-3': 'mt-4'}>


                <div className="form-group mb-3 pt-3">
                    {editMode && <label>Descripción</label>}
                    <input
                        type='text'
                        required
                        className="form-control"
                        placeholder="Descripción"
                        name="descri"
                        value={capitalize(descri)}
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
                        name="ne"
                        value={capitalize(ne)}
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


                <div className='btnContainer'>

                        <input 
                            type="submit"
                            className={editMode ? "btn-w seb primary" : "btn-w sb primary" } 
                            value={ editMode ? 'Guardar Cambios ↑': "Guardar Unidad"} />

                        {editMode && 
                            <button type="reset" onClick={handleCancelEdit} className="btn-w scb primary-out">    
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
