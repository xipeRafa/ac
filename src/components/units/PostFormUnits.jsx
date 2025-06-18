import {useEffect, useState} from 'react'
import { useForm } from '../../helpers';




export const PostFormUnits = ({ postUser, editModeUnits, newDataEdit, defaultModeEdith }) => {

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
    }


    
    const handleCancelEdit =()=>{
        defaultModeEdith()
        setUnitState({name:'', phone:'', idUnit:''})
        onResetForm()
    }

  


  return (
    <div className="container login-container fix">
    <div className="row">
        <div className="col-md-6 login-form-1 fixed">
            <h3>{editModeUnits ? 'EDITAR UNIDAD' : 'NUEVA UNIDAD'}</h3>

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


                    <input type="submit" className="btn-w w-100" value={ editModeUnits ? 'Guardar Cambios ↑': "Nueva Unidad"} />

                    {editModeUnits && 
                         <button onClick={handleCancelEdit} className="btn-w w-100 mt-3"> Cancelar Edicion <b style={{color:'red'}}>✘</b> </button>
                    }



            </form>
            <br />
        </div>
    </div>
</div>
  )
}
