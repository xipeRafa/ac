



export const AssignationsForm = ({ assignationsPost, editMode, newDataEdit, defaultModeEdith, 
                                    handleClose, useForm, useState, useEffect, avoidEmpty }) => {



    const[assState, setAssState]=useState({operator:'', unit:'', ruta:''})




    const { operator, unit, ruta, onInputChange: onPostInputChange, noSpace} = useForm(assState);




    useEffect(() => { 
        if(editMode !== undefined) {
            setAssState(editMode)
        }
    }, [editMode]) 



    let oa = ls('operatorsArray')
    let ua = ls('unitsArray')
    let ra = ls('rutasArray')

    let opArraySelect = oa.filter(el => el.name === operator)
    let unitsArraySelect = ua.filter(el => el.ne === unit)
    let rutaArraySelect = ra.filter(el => el.nameRuta === ruta)

    oa?.unshift({name:'seleccione un operador...'})
    ua?.unshift({ne:'seleccione una unidad...'})
    ra?.unshift({nameRuta:'seleccione una ruta...'})




    const onSubmit = (event: any) => {
        event.preventDefault();

        if(avoidEmpty({operator, unit, ruta})){
            return
        } 

        if(editMode){
            newDataEdit(noSpace)
        }else{
            assignationsPost({...noSpace, ...rutaArraySelect[0], ...unitsArraySelect[0], ...opArraySelect[0]})
        }

        handleClose()
    }
  
    const handleCancelEdit =()=>{
        defaultModeEdith()
        handleClose()
    }




  return (
    <div className="container sombra mt-1">
      <div className="row">

            <form onSubmit={onSubmit} className='mt-4'>









                <div>
                    <label>RUTAS</label>
                    <select className="form-select mb-3" value={ruta} name='ruta' onChange={onPostInputChange}>
                        {ra.map((opcion, i) => {
                             return   <option key={i} value={opcion.nameRuta}>
                                    {opcion.nameRuta.toUpperCase()}
                                </option>
                            }
                        )}
                    </select>

                    <div className='assignationsSelect'>
                        {rutaArraySelect.map((el, i)=>(
                            <div key={i}>
                                <p>{el.nameRuta}</p>

                                <p><b>Punto de Partida:</b>   {el.puntoPartida}</p>
                                <p><b>Punto Final:</b>        {el.puntoFinal}</p>
                                <p><b>Fecha de Partida:</b>   {el.fechaPartida}</p>
                                <p><b>Fecha Final:</b>        {el.fechaFinal}</p>
                                <p><b>Hora de Partida:</b>    {el.horaPartida}</p>
                                <p><b>Hora Final:</b>         {el.horaFinal}</p>
                                <p><b>Punto Intermedio 1:</b> {el.puntoInt1}</p>
                                <p><b>Fecha Intermedio 1:</b> {el.fechaPuntoInt1}</p>
                                <p><b>Hora Intermedio 1:</b>  {el.horaPuntoInt1}</p>
                            </div>    
                        ))}
                    </div>
                </div>









               

                <div>
                    <label>UNIDADES</label>
                    <select className="form-select mb-3" value={unit} name='unit' onChange={onPostInputChange}>
                        {ua.map((opcion, i) => (
                                <option key={i} value={opcion.ne}>
                                    {opcion.ne.toUpperCase()}
                                </option>
                            )
                        )}
                    </select>

                    <div className='assignationsSelect'>
                        {unitsArraySelect.map((el, i)=>(
                            <div key={i}>
                                <p><b>Descripción:</b>      {el.descri}</p>
                                <p><b>Nro Economico:</b>    {el.ne}</p>
                                <p><b>ID:</b>               {el.idUnit}</p>
                                <p><b>Placas:</b>           {el.placas}</p>
                                <p><b>VIN:</b>              {el.vin}</p>
                                <p><b>Nro de Serie:</b>     {el.NroSerie}</p>
                                <p><b>Año:</b>              {el.anio}</p>
                                <p><b>Modelo:</b>           {el.modelo}</p>
                                <p><b>Marca:</b>            {el.marca}</p>
                                <p><b>Nro de Pasajeros:</b> {el.NroPasajeros}</p>
                                <p><b>Años de Uso:</b>      {el.aniosUso}</p>
                            </div>    
                        ))}
                    </div>
                </div>










                 <div>
                    <label>OPERADORES</label>
                    <select className="form-select mb-3" value={operator} name='operator' onChange={onPostInputChange}>
                            {oa.map((opcion, i) => (
                                    <option key={i+'ass'} value={opcion.name} >
                                        {opcion.name.toUpperCase()} 
                                    </option>
                                )
                            )}
                    </select>  

                    <div className='assignationsSelect'>
                    {opArraySelect.map((el, i)=>(
                            <div key={i}>
                                <p>{el.name} {el.apellidoPaterno} {el.apellidoMaterno}</p>

                                <p><b>ID Operador: </b> {el.idOperator}</p>
                                <p><b>Celular:     </b> {el.phone}     </p>
                                <p><b>Direccion:   </b> {el.direccion} </p>
                                <p><b>Edad:        </b> {el.edad}      </p>
                                <p><b>RFC:         </b> {el.rfc}       </p>
                                <p><b>CURP:        </b> {el.curp}      </p>
                                <p><b>Licencia:    </b> {el.licencia}  </p>

                                <p><b>Venc. Licencia:     </b> {el.veLicencia}  </p>
                                <p><b>Tipo de Sangre:     </b> {el.tipoSangre}  </p>
                                <p><b>Cont. de Emergencia:</b> {el.coEmergencia}</p>
                            </div>    
                    ))} 
                    </div> 
                </div>










                <div className='btnContainer w-100 mb-4'>

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
















