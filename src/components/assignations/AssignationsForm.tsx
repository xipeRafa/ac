



export const AssignationsForm = ({ assignationsPost, editMode, newDataEdit, defaultModeEdith, 
                                    handleClose, useForm, useState, useEffect }) => {



    const[operatorState, setOperatorState]=useState({name:'', phone:'', idOperator:'' })


    const { name, phone, idOperator,
            onInputChange: onPostInputChange, noSpace} = useForm(operatorState);


    useEffect(() => { 
        if(editMode !== undefined) {
            const { name, phone, idOperator } = editMode
            setOperatorState({name, phone, idOperator})
        }
    }, [editMode]) 


    const onSubmit = (event: any) => {
        event.preventDefault();

        if(editMode){
            const { name, phone, idOperator } = noSpace
            newDataEdit(name, phone, idOperator, editMode.uid)
        }else{
            const { name, phone, idOperator } = noSpace
            assignationsPost({name, phone, idOperator })
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

                <div className="form-group mb-3 pt-3 ">
                    {editMode && <label>Nombre</label>}
                    <input
                        required
                        type='text'
                        className="form-control"
                        placeholder="Nombre"
                        name="name"
                        value={capitalize(name)}
                        onChange={onPostInputChange}
                    />
                </div>

                <div className="form-group mb-3">
                    {editMode && <label>Identificador</label>}
                    <input
                        required
                        type='text'
                        className="form-control"
                        placeholder="ID"
                        name="idOperator"
                        value={capitalize(idOperator)}
                        onChange={onPostInputChange}
                    />
                </div>

                <div className="form-group mb-3">
                    {editMode && <label>Telefono</label>}
                    <input
                        required
                        type='text'
                        className="form-control"
                        placeholder="# Telefono"
                        name="phone"
                        value={capitalize(phone)}
                        onChange={onPostInputChange}
                    />
                </div>


                <div className='btnContainer'>

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






