



export const OperatorsForm = ({ operatorsPost, editMode, newDataEdit, defaultModeEdith, 
                                    handleClose, useForm, useState, useEffect, }) => {



    const[operatorState, setOperatorState]=useState({
            name:'', 
            apellidoPaterno:'',
            apellidoMaterno:'',
            idOperator:'',
            phone:'',
            direccion:'',
            edad:'',
            licencia:'',
            veLicencia:'',
            rfc:'',
            curp:'',
            fechaNacimiento:'',
            estadoCivil:'',
            tipoSangre:'',
            coEmergencia:'',
    })


    const { name, 
            apellidoPaterno,
            apellidoMaterno,
            idOperator,
            phone,
            direccion,
            edad,
            licencia,
            veLicencia,
            rfc,
            curp,
            fechaNacimiento,
            estadoCivil,
            tipoSangre,
            coEmergencia,
            onInputChange: onPostInputChange, 
            noSpace,
    } = useForm(operatorState)


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
            operatorsPost(noSpace)
        }
        handleClose()
    }
  
    const handleCancelEdit =()=>{
        defaultModeEdith()
        handleClose()
    }



  return (
    <div className="container sombra mt-1 ">
      <div className="row">
        <div className="w-100" >


            <form onSubmit={onSubmit} className={editMode ? 'mt-4': 'mt-5'}>

                {[ 
                    [name,'Nombre', 'name'], 
                    [apellidoPaterno, 'Apellido Paterno', 'apellidoPaterno'], 
                    [apellidoMaterno, 'Apellido Materno', 'apellidoMaterno'], 
                    [idOperator, 'ID Operador', 'idOperator'], 
                    [phone, 'Telefono', 'phone'], 
                    [direccion, 'Direccion', 'direccion'],
                    [edad, 'Edad', 'edad'], 
                    [curp, 'CURP', 'curp'],
                    [rfc,             'RFC', 'rfc'],
                    [fechaNacimiento, 'Fecha de Nacimiento', 'fechaNacimiento'],
                    [estadoCivil, 'Estado Civil', 'estadoCivil'],
                    [licencia, 'Licencia', 'licencia'],
                    [veLicencia, 'Vencimiento de Licencia', 'veLicencia'],
                    [tipoSangre, 'Tipo de Sangre', 'tipoSangre'],
                    [coEmergencia, 'Contacto de Emergencia', 'coEmergencia'],

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

                        <input type="submit"
                            className={editMode ? "btn-w seb primary" : "btn-w sb primary" } 
                            value={ editMode ? 'Guardar Cambios ↑': "Guardar Operador ↑"} />

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






