import {useEffect, useState} from 'react'
import { useForm } from '../../helpers';

//lugar,calle,colonia,dia,hora,informes,fechaDeInicio


export const PostFormUnits = ({ postUser, editModeUnits, newDataEdit, defaultModeEdith }) => {

    const[unitState, setUnitState]=useState({
        name:'', phone:'', idUnit:''
    })

console.log(unitState)


    const { name, phone, idUnit,
            onInputChange: onPostInputChange, onResetForm } = useForm(unitState);

  
// console.log('dia:', fechaDeInicio.slice(-2), 'mes:', fechaDeInicio.slice(5,7), 'Año:', fechaDeInicio.slice(0,4))






// function obtenerMes(n) {

//   const meses = {
//     '01': "Enero",
//     '02': "Febrero",
//     '03': "Marzo",
//     '04': "Abril",
//     '05': "Mayo",
//     '06': "Junio",
//     '07': "Julio",
//     '08': "Agosto",
//     '09': "Septiembre",
//     '10': "Octubre",
//     '11': "Noviembre",
//     '12': "Diciembre",
//     'default':'Falto Fecha'

//     //  "2025-06-13"  ====> 13 de Junio del 2025

//   };

//   return meses[n] || meses['default']
// }

//     let mesTexto = obtenerMes(date?.slice(5,7))



//     let dateStart = Math.trunc(date?.slice(-2)) + ' de ' + mesTexto + ' del ' + date?.slice(0,4)





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
            <h3>{editModeUnits ? 'Editar Unidad' : 'Nueva Unidad'}</h3>

            <form onSubmit={onSubmitUsers}>


                <div className="form-group mb-3">
                    {editModeUnits && <label>Descripción</label>}
                    <input
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
                        required
                        className="form-control"
                        placeholder="ID"
                        name="idUnit"
                        value={idUnit}
                        onChange={onPostInputChange}
                    />
                </div>

             {/*   {!editModeUnits &&     
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






                <div className="d-grid gap-2">
                    <input type="submit" className="btnSubmitPost" 
                        value={ editModeUnits ? 'Guardar Cambios ↑': "Nueva Unidad"} />

                    {editModeUnits && 
                        <input type="button" onClick={handleCancelEdit} className="editButton mt-4" value='Cancelar Edicion ✘' />
                    }
                </div>


            </form>
            <br />
        </div>
    </div>
</div>
  )
}
