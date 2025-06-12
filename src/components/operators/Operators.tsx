
import { useEffect } from 'react'
import { PostForm } from './PostForm';
import { useOperators } from '../../hooks'



export const Operators = () => {

    const usersListCSS = {
        display: "block",
        border: "4px solid salmon",
        paddingTop: "10px",
        paddingLeft: "20px",
        width: "90%",
        marginLeft: "5%",
        marginBottom: "10px",
        backgroundColor: "white"
    }

    const usersListCSS2 = {
        fontWeight:'200'
    }


    const { dataUsersGet, operators, deleteUser, postUser, switchUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, uploadUserImg, usersFinder, 
            paginationSelect, paginationNext } = useOperators()




    useEffect(() => {
        dataUsersGet()
    }, [])


    const handleDelete = (el: Object) => {
        deleteUser(el)
    }

    // const handleSwitch = (el) => {
    //     switchUser(el)
    // }

    const handleEdith = (el: String) => {
        //console.log(el)
        setInfoToForm(el)
    }


    const handlePaginationSelect=(ps)=>{
        let step = Number(ps)
        paginationSelect(step)
    }


     


    return (
        <div>







            <PostForm postUser={postUser} editMode={editMode} newDataEdit={newDataEdit} defaultModeEdith={defaultModeEdith} />



{/*
<div style={{width:'100%', textAlign:'center'}}>
            <input type="search" className='form-control col-12 my-4 mx-auto' 
                    style={{width:'90%'}} placeholder='Buscar en Lugares.. Centros... parroquias... etc' 
                    onChange={(e)=> usersFinder(e.target.value.trim())} 
            />

</div>*/}

{/*<div style={{width:'100%', textAlign:'center'}}>
            <input type="search" className='form-control col-12 my-4 mx-auto' 
                    style={{width:'90%'}} placeholder='Buscar por Colonias...' 
                    onChange={(e)=> usersFinder(e.target.value.trim(), 'colonia')} 
            />

</div>*/}

{/*<div style={{width:'100%', textAlign:'center'}}>
            <input type="button" value='Domicilios Particulares'  
                    onClick={(e)=> usersFinder('particular')} 
            />

</div>*/}




{/*<div style={{width:'100%', textAlign:'center'}}>
            <input type="button" value='Jovenes'  
                    style={{width:'90%'}}  
                    onClick={(e)=> usersFinder('jovenes', 'Jovenes')} 
            />

</div>*/}




{/*<div style={{width:'100%', textAlign:'center'}}>
            <input type="button" value='Matrimonios'
                    style={{width:'90%'}}  
                    onClick={(e)=> usersFinder('matrimonios', 'Matrimonios')} 
            />

</div>*/}






{/*<div style={{width:'100%', textAlign:'center'}}>
            <input type="button" value='Ver Todos Los Talleres' onClick={(e)=> usersFinder(' ')} />
</div>*/}





            {operators?.usuarios?.map((el, i) => (
                <div key={i + '!@#'} style={usersListCSS}>

                    <h2>{el.lugar}</h2>
                    <p><span style={usersListCSS2}>Calle:</span> {el.calle}</p>

                    <p><span style={usersListCSS2}>Colonia:</span>   {el.colonia}</p>
                    <p><span style={usersListCSS2}>Dia:</span>     {el.dia}</p>

                    <p><span style={usersListCSS2}>Hora:</span>  {el.hora }</p>
                    <p><span style={usersListCSS2}>Inicio:</span> {el.fechaDeInicio} </p>
                    <p><span style={usersListCSS2}>Para:</span> {el.para || 'Adultos' }</p>
                    <p><span style={usersListCSS2}>Informes:</span> {el.informes }</p>


                    {/*<img src={el.img} width='100px' />*/}

                    

                    <button onClick={() => handleDelete(el)}>Eliminar</button>
                    <button onClick={() => handleEdith(el)}>Editar</button>

                    {/*<button onClick={() => handleSwitch(el)}>Toggle</button>*/}
                    {/*<input type="file" id="file-upload" onChange={(e) => uploadUserImg(el.uid, e.target.files[0])} />*/}

                </div>
            ))}







        </div>
    )
}
