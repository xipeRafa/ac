import {useEffect, useState} from 'react'
import { useForm } from '../../helpers';




export const PostFormUnits = ({ postUser, editModeUnits, newDataEdit, defaultModeEdith, handleClose }) => {

    const[unitState, setUnitState]=useState({
        name:'', phone:'', idUnit:''
    })




    const { name, phone, idUnit,
            onInputChange: onPostInputChange, onResetForm } = useForm(unitState);



    useEffect(() => { 
        if(editModeUnits !== undefined) {
            const { name, phone, idUnit } = editModeUnits
            setUnitState({name, phone, idUnit})
        }
    }, [editModeUnits]) 





    const onSubmitUsers = () => {
        event.preventDefault();

        if(editModeUnits){
            newDataEdit(name, phone, idUnit, editModeUnits.uid)
            setUnitState({name:'', phone:'', idUnit:'' })
            onResetForm()
        }else{
            postUser({name, phone, idUnit })
        }

        onResetForm()
        handleClose()
    }


    
    const handleCancelEdit =()=>{
        defaultModeEdith()
        setUnitState({name:'', phone:'', idUnit:''})
        onResetForm()
        handleClose()
    }

  


  return (
    <div className="container login-container fix">
    <div className="row">
        <div className="col-md-12 login-form-1 fixed">

            <form onSubmit={onSubmitUsers}>


                <div className="form-group mb-3 mt-4">
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


                    <div className='d-flex flex-column flex-sm-row'>

                        <input 
                            type="submit"
                            className={editModeUnits ? "btn-w w-100 me-4 mb-3 mt-4 primary" : "btn-w w-100 mt-4 primary" } 
                            value={ editModeUnits ? 'Guardar Cambios ↑': "Guardar Unidad"} />

                        {editModeUnits && 
                            <button onClick={handleCancelEdit} className="btn-w w-100 mt-4 primary-out">    
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
