



export const AssignationsForm = ({ assignationsPost, editMode, newDataEdit, defaultModeEdith, 
                                    handleClose, useForm, useState, useEffect }) => {



    const[assState, setOperatorState]=useState({operator:'', unit:'', ruta:''})


    const { operator, unit, ruta, onInputChange: onPostInputChange, noSpace} = useForm(assState);


    useEffect(() => { 
        if(editMode !== undefined) {
            setOperatorState(editMode)
        }
    }, [editMode]) 


    const onSubmit = (event: any) => {
        event.preventDefault();

        if(editMode){
            newDataEdit(noSpace)
        }else{
            assignationsPost(noSpace)
        }
        handleClose()
    }
  
    const handleCancelEdit =()=>{
        defaultModeEdith()
        handleClose()
    }

    let oa = ls('operatorsArray')
    let ua = ls('unitsArray')

    oa.unshift({name:'Seleccione un Operador...'})
    ua.unshift({ne:'Seleccione una Unidad...'})


  return (
    <div className="container sombra mt-1">
      <div className="row">

            <form onSubmit={onSubmit} className={editMode ? 'mt-3': 'mt-5'}>

                <div>
                    <label>Operadores</label>
                    <select className="form-select mb-3" value={operator} name='operator' onChange={onPostInputChange}>
                            {oa.map((opcion, i) => (
                                    <option key={i+'ass'} value={opcion.name} >
                                        {opcion.name}
                                    </option>
                                )
                            )}
                    </select>    
                </div>

                <div>
                    <label>Unidades</label>
                    <select className="form-select mb-3" value={unit} name='unit' onChange={onPostInputChange}>
                        {ua.map((opcion, i) => (
                                <option key={i} value={opcion.ne}>
                                    {opcion.ne}
                                </option>
                            )
                        )}
                    </select>
                </div>

                <div>
                    <label>Rutas</label>
                    <select className="form-select mb-3" value={unit} name='ruta' onChange={onPostInputChange}>
                        {[].map((opcion, i) => (
                                <option key={i} value={opcion.ne}>
                                    {opcion.ne}
                                </option>
                            )
                        )}
                    </select>
                </div>





                <div className='btnContainer w-100'>

                        <input type="submit"
                            className={editMode ? "btn-w seb primary" : "btn-w sb primary" } 
                            value={ editMode ? 'Guardar Cambios ↑': "Guardar Assignación"} />

                        {editMode && 
                            <button type="reset" onClick={handleCancelEdit} className="btn-w scb primary-out">    
                                    Cancelar Edición <b style={{color:'red'}}>✘</b> 
                            </button>
                        }

                </div>

            </form>

            <br />
            <br />

    </div>
</div>
  )
}










 {/*   {!editMode &&     
                <div className="form-group mb-2">
                    <label>Fecha de Inicio</label>
                    <input
                        type='date'
                        className="form-control"
                        placeholder="Fecha de Inicio"
                        name="date"
                        onChange={onPostInputChange}
                    />
                </div>}*/}
               

               {/*<div className="form-group mb-2">
                    <select 
                        className="form-control"  
                        name="para"
                        onChange={onPostInputChange}>
                        <option>Para:</option>
                        <option value="Adultos">Adultos</option>
                        <option value="Matrimonios">Matrimonios</option>
                        <option value="Jovenes">Jovenes</option>
                    </select>
                </div> */}






