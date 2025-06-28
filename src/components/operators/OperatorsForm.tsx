



export const OperatorsForm = ({ operatorsPost, editMode, newDataEdit, defaultModeEdith, 
                                    handleClose, useForm, useState, useEffect, formInputsOperators }) => {



    const[operatorState, setOperatorState]=useState({
            name:'', 
            apellidoPaterno:'',
            apellidoMaterno:'',
            idOperator:'',
            phone:'',
            direccion:'',
            edad:'',
            licencia:'',
            fechaVencimientoLicencia:'',
            rfc:'',
            curp:'',
            fechaNacimiento:'',
            estadoCivil:'',
            estadoCivil:'',
            tipoSangre:'',
            contactoEmergencia:'',
    })


    const { name, 
            apellidoPaterno,
            apellidoMaterno,
            idOperator,
            phone,
            direccion,
            edad,
            licencia,
            fechaVencimientoLicencia,
            rfc,
            curp,
            fechaNacimiento,
            estadoCivil,
            tipoSangre,
            contactoEmergencia,
            onInputChange: onPostInputChange, 
            noSpace,
    } = useForm(operatorState);


    useEffect(() => { 
        if(editMode !== undefined) {
            // const { name, phone, idOperator } = editMode
            setOperatorState(editMode)
        }
    }, [editMode]) 


    const onSubmit = (event: any) => {
        event.preventDefault();

        if(editMode){
            // const { name, phone, idOperator } = noSpace
            newDataEdit({...noSpace, ...editMode.uid})
        }else{
            // const { name, phone, idOperator } = noSpace
            operatorsPost(noSpace)
        }
        handleClose()
    }
  
    const handleCancelEdit =()=>{
        defaultModeEdith()
        handleClose()
    }



  return (
    <div className="container sombra mt-5 ">
      <div className="row">
        <div className="col-lg-8 offset-lg-2" >


            <form onSubmit={onSubmit} className={editMode ? 'mt-3': 'mt-4'}>

                {[ 
                    ['Nombre', 'name', name], 
                    ['Apellido Paterno', 'apellidoPaterno', apellidoPaterno], 
                    ['Apellido Materno', 'apellidoMaterno', apellidoMaterno], 
                    ['ID Operador', 'idOperator', idOperator], 
                    ['Telefono', 'phone', phone], 
                    ['Direccion', 'direccion', direccion],
                    ['Edad', 'edad', edad], 
                    ['CURP', 'curp', curp],
                    ['Fecha de Nacimiento', 'fechaNacimiento', fechaNacimiento],
                    ['Estado Civil', 'estadoCivil', estadoCivil],
                    ['Licencia', 'licencia', licencia],
                    ['Fecha de Vencimiento Licencia', 'fechaVencimientoLicencia', fechaVencimientoLicencia],
                    ['Tipo de Sangre', 'tipoSangre', tipoSangre],
                    ['Contacto de Emergencia', 'contactoEmergencia', contactoEmergencia],

                ].map((el, i)=>{

                        return <div key={i} className="form-group mb-3">
                                    {editMode && <label>{capitalize(String(el[0]))}</label>}
                                        <input
                                            required
                                            type='text'
                                            className="form-control"
                                            placeholder={el[0]}
                                            name={el[1]}
                                            value={capitalize(el[2])}
                                            onChange={onPostInputChange}
                                        />
                                </div>
                    })
                }

               
                <div className='btnContainer'>

                        <input type="submit"
                            className={editMode ? "btn-w seb primary" : "btn-w sb primary" } 
                            value={ editMode ? 'Guardar Cambios ↑': "Guardar Operador"} />

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






