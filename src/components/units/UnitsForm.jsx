
export const UnitsForm = ({ unitsPost, editMode, newDataEdit, defaultModeEdith, 
                                handleClose, useEffect, useState, useForm }) => {


    const[unitState, setUnitState]=useState({
        descri:'', 
        ne:'', 
        placas:'', 
        vin:'', 
        marca:'', 
        modelo:'', 
        anio:'', 
        NroSerie:'', 
        NroPasajeros:'', 
        aniosUso:'', 
    })


    const { 
        descri,
        ne, 
        placas, 
        vin, 
        marca, 
        modelo, 
        anio, 
        NroSerie, 
        NroPasajeros, 
        aniosUso, 
        onInputChange: onPostInputChange, 
        noSpace 
    } = useForm(unitState)


    useEffect(() => { 
        if(editMode !== undefined) {
            setUnitState(editMode)
        }
    }, [editMode]) 


    const onSubmit = () => {
        event.preventDefault();

        if(editMode){
            newDataEdit(noSpace)
        }else{
            unitsPost(noSpace)
        }

        handleClose()
    }

 
    const handleCancelEdit = () => {
        defaultModeEdith()
        handleClose()
    }

  


  return (
    <div className="container sombra mt-1">
    <div className="row">
        <div className="">

            <form onSubmit={onSubmit} className={editMode ? 'mt-4': 'mt-5'}>

                {[ 

                    [descri,'Descripción', 'descri'], 
                    [ne, 'Numero Economico', 'ne'], 
                    [placas, 'Placas', 'placas'],
                    [vin, 'VIN', 'vin'],
                    [marca, 'Marca', 'marca'],
                    [modelo, 'Modelo', 'modelo'],
                    [anio, 'año', 'anio'],
                    [NroSerie, 'Nro de Serie', 'NroSerie'],
                    [NroPasajeros, 'Nro de Pasajeros', 'NroPasajeros'],
                    [aniosUso, 'Años de Uso', 'aniosUso'],

                ].map((el, i)=>(
                        <div key={i} className="form-group mb-3">
                                {editMode && <label>{el[1]}</label>}
                                <input
                                    required
                                    type='text'
                                    className="form-control"
                                    placeholder={el[1]+'...'}
                                    name={el[2]}
                                    value={el[0]}
                                    onChange={onPostInputChange}
                                />
                        </div>
                ))}



                <div className='btnContainer w-100'>

                        <input 
                            type="submit"
                            className={editMode ? "btn-w seb primary" : "btn-w sb primary" } 
                            value={ editMode ? 'Guardar Cambios ↑': "Guardar Unidad ↑"} />

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
