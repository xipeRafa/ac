



export const RutasForm = ({ rutasPost, editMode, newDataEdit, defaultModeEdith, 
                                    handleClose, useForm, useState, useEffect }) => {



    const[rutasState, setRutasState]=useState({
            nameRuta:'', 
            puntoPartida:'',
            fechaPartida:'',
            horaPartida:'',
            puntoFinal:'',
            fechaFinal:'',
            horaFinal:'',
            puntoInt1:'',
            fechaPuntoInt1:'',
            horaPuntoInt1:'',
    })


    const {  
        nameRuta, 
        puntoPartida,
        fechaPartida,
        horaPartida,
        puntoFinal,
        fechaFinal,
        horaFinal,
        puntoInt1,
        fechaPuntoInt1,
        horaPuntoInt1,
        onInputChange: onPostInputChange, 
        noSpace,
    } = useForm(rutasState)


    useEffect(() => { 
        if(editMode !== undefined) {
            setRutasState(editMode)
        }
    }, [editMode]) 


    const onSubmit = (event: any) => {
        event.preventDefault();

        if(editMode){
            newDataEdit(noSpace)
        }else{
            rutasPost(noSpace)
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

                    [ nameRuta,       'Nombre de la Ruta',        'nameRuta'      ], 
                    [ puntoPartida,   'Punto de Partida',         'puntoPartida'  ], 
                    [ puntoFinal,     'Punto Final',              'puntoFinal'    ],
                    [ fechaPartida,   'Fecha de Partida',         'fechaPartida'  ], 
                    [ fechaFinal,     'Fecha Final',              'fechaFinal'    ],
                    [ horaPartida,    'Hora de Partida',          'horaPartida'   ], 
                    [ horaFinal,      'Hora Final',               'horaFinal'     ], 
                    [ puntoInt1,      'Punto Intermedio 1',       'puntoInt1'     ],
                    [ fechaPuntoInt1, 'Fecha Punto Intermedio 1', 'fechaPuntoInt1'],
                    [ horaPuntoInt1,  'Hora Punto Intermedio 1',  'horaPuntoInt1' ],

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
                            value={ editMode ? 'Guardar Cambios ↑': "Guardar Ruta ↑"} />

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






