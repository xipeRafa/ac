module.exports = (componentName) => ({
  content: `
export const ${componentName}Form = ({ ${componentName.toLowerCase()}Post, editMode, newDataEdit, defaultModeEdith, 
                                    handleClose, useForm, useState, useEffect, }) => {



    const[${componentName.toLowerCase()}State, set${componentName}State]=useState({
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
    } = useForm(${componentName.toLowerCase()}State)


    useEffect(() => { 
        if(editMode !== undefined) {
            set${componentName}State(editMode)
        }
    }, [editMode]) 


    const onSubmit = () => {
        event.preventDefault();

        if(editMode){
            newDataEdit(noSpace)
        }else{
            ${componentName.toLowerCase()}Post(noSpace)
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

                        <input 
                            type="submit"
                            className={editMode ? "btn-w seb primary" : "btn-w sb primary" } 
                            value={ editMode ? 'Guardar Cambios ↑': "Guardar ${componentName} ↑"} 
                        />

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















`,
  extension: `${componentName}Form.jsx`
});