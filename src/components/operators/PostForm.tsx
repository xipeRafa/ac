import {useEffect, useState} from 'react'
import { useForm } from '../../helpers';

//lugar,calle,colonia,dia,hora,informes,fechaDeInicio


export const PostForm = ({ postUser, editMode, newDataEdit, defaultModeEdith }) => {

    const[name2, setName2]=useState({
        lugar:'',calle:'',colonia:'',dia:'',hora:'',informes:'',fechaDeInicio:'',para:''
    })




    const { lugar, calle, colonia, dia, hora, informes, fechaDeInicio, para, 
            onInputChange: onPostInputChange, onResetForm } = useForm(name2);

  
// console.log('dia:', fechaDeInicio.slice(-2), 'mes:', fechaDeInicio.slice(5,7), 'Año:', fechaDeInicio.slice(0,4))






function obtenerMes(n) {

  const meses = {
    '01': "Enero",
    '02': "Febrero",
    '03': "Marzo",
    '04': "Abril",
    '05': "Mayo",
    '06': "Junio",
    '07': "Julio",
    '08': "Agosto",
    '09': "Septiembre",
    '10': "Octubre",
    '11': "Noviembre",
    '12': "Diciembre",
    'default':'Falto Fecha'

  };

  return meses[n] || meses['default']
}

    let mesTexto = obtenerMes(fechaDeInicio.slice(5,7))



    let FI = Math.trunc(fechaDeInicio.slice(-2)) + ' de ' + mesTexto + ' del ' + fechaDeInicio.slice(0,4)

     useEffect(() => { 
        if(editMode !== undefined) {
            const { lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para } = editMode
            setName2({lugar,calle,colonia,dia,hora,informes,fechaDeInicio:FI,para})
        }
    }, [editMode]) 



    const onSubmitUsers = (event: any) => {
        event.preventDefault();

        if(editMode){
            newDataEdit(lugar,calle,colonia,dia,hora,informes,FI,para, editMode.uid)
            setName2({lugar:'',calle:'',colonia:'',dia:'',hora:'',informes:'', fechaDeInicio:'',para:''})
        }else{
            postUser({lugar,calle,colonia,dia,hora,informes,fechaDeInicio:FI,para})
        }

        onResetForm()
    }


    
    const handleCancelEdit =()=>{
        defaultModeEdith()
        setName2({lugar:'',calle:'',colonia:'',dia:'',hora:'',informes:'',fechaDeInicio:'',para:''})
    }

  



  return (
    <div className="container login-container fix">
    <div className="row">
        <div className="col-md-6 login-form-1 fixed">
            <h3>{editMode ? 'Editar Operador' : 'Nuevo Operador'}</h3>

            <form onSubmit={onSubmitUsers}>


                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="Lugar"
                        name="lugar"
                        value={lugar}
                        onChange={onPostInputChange}
                    />
                </div>

                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="Calle y Numero"
                        name="calle"
                        value={calle}
                        onChange={onPostInputChange}
                    />
                </div>
                

                <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="Colonia"
                        name="colonia"
                        value={colonia}
                        onChange={onPostInputChange}
                    />
                </div>

                 <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="Dia"
                        name="dia"
                        value={dia}
                        onChange={onPostInputChange}
                    />
                </div>


                 <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="Hora"
                        name="hora"
                        value={hora}
                        onChange={onPostInputChange}
                    />
                </div>

                 <div className="form-group mb-2">
                    <input
                        className="form-control"
                        placeholder="# Informes"
                        name="informes"
                        value={informes}
                        onChange={onPostInputChange}
                    />
                </div>

                 <div className="form-group mb-2">
                    <input
                        required
                        type='date'
                        className="form-control"
                        placeholder="Fecha de Inicio"
                        name="fechaDeInicio"
                        onChange={onPostInputChange}
                    />
                </div>
               

               <div className="form-group mb-2">
                    <select 
                        className="form-control"  
                        name="para"
                        onChange={onPostInputChange}>
                        <option>Para:</option>
                        <option value="Adultos">Adultos</option>
                        <option value="Matrimonios">Matrimonios</option>
                        <option value="Jovenes">Jovenes</option>
                    </select>
                </div> 






                <div className="d-grid gap-2">
                    <input type="submit" className="btn btn-outline-dark btn-lg mb-3" 
                        value={ editMode ? 'Editar Operador': "Nuevo Operador"} />

                    {editMode && 
                        <input type="button" onClick={handleCancelEdit} className="editButton mt-5" value={ editMode ? 'Cancelar':'oko'} />
                    }
                </div>


            </form>
            <br />
        </div>
    </div>
</div>
  )
}
