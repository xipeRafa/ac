
import { useDispatch, useSelector } from 'react-redux'
import axiosApi from '../api/api'

import { errorConsoleCatch, toggleExplorer, 
          editExplorer, finderExplorer, postExplorer,
          paginationExplorer, nextExplorer, deleteExplorer} from '../helpers'

import {operatorDataPush, editOperatorView, defaultEditMode, operatorDeleteView, switchOperatorView} from  '../store/slices/operatorsSlice'

import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'






export const useOperators = () => {

  const { operators, editMode } = useSelector(state => state.operatorsSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  function SweetAlertError(error){
      dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  }


    





  const dataUsersGet = async (from=0, limit=8) => {




  let workshops = []
             if(localStorage.UsersArray == undefined){
                 localStorage.UsersArray = JSON.stringify(workshops)
                 dispatch(operatorDataPush(workshops)) 
            }  
            
               //localStorage.UsersArray = JSON.stringify(workshops)
        
            dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))

  }



  



/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */

// online solo arriba
// offline abajo + arriba 

  const postUser = async ({ lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para }) => {

          let curretUsers = JSON.parse(localStorage.UsersArray)
          

          curretUsers.push({ lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para, uid:Date.now() })
          localStorage.UsersArray = JSON.stringify(curretUsers)
          dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
 
  }



















  const setInfoToForm = (el:Object) => {
       dispatch(editOperatorView(el))
   }





  const newDataEdit = async (lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para, uid) => { 


          let curretUsers = JSON.parse(localStorage.UsersArray)

          let editedUsers = curretUsers.map((el) => (el.uid === uid ? {...editMode, lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para} : el))
         
          localStorage.UsersArray = JSON.stringify(editedUsers)

          dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))

          dispatch(defaultEditMode()) 

  
      
  }



  const defaultModeEdith = () => {
      dispatch(defaultEditMode())
  }




  const deleteUser = async (usuario: Object) => {

          let curretUsers = JSON.parse(localStorage.UsersArray)
          let del = curretUsers.filter((el) => el.uid !== usuario.uid)
          localStorage.UsersArray = JSON.stringify(del)
          dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
          dispatch(somethingWentRigth(['Taller fue Borrado', usuario.colonia + ' ya no existe ', 'success']))

  }




  // const switchUser = async (usuario) => {

  //         let curretUsers = JSON.parse(localStorage.UsersArray)
         
  //         curretUsers.map((el) => (el.uid === usuario.uid ? (el.toggle = !el.toggle) : el))
  //         localStorage.UsersArray = JSON.stringify(curretUsers)

  //         dispatch(switchOperatorView({usuarios:JSON.parse(localStorage.UsersArray)}))
  //         dispatch(somethingWentRigth(['Usuario switched', usuario.toggle + ' to ' + !usuario.toggle , 'success']))

  //     try {
  //         // const { objTarget } = toggleExplorer(false, {uid}, usuario, 'toggle', usersLSArr, fallUsersArr) 
  //         // dispatch(switchOperatorView({usuarios:[objTarget]})) 
          
  //         // await axiosApi.patch(`/usuarios/toggle/${usuario.uid}`)
  //         // dispatch(somethingWentRigth(['Usuario switched', usuario.toggle + ' to ' + objTarget.toggle , 'success']))

  //         // UpDateDB()
  //     } catch (error) {
  //         console.log('switchUser error :>>', error)
  //         const { objTarget } = toggleExplorer(true, {uid}, usuario, 'toggle', usersLSArr, fallUsersArr)
  //         dispatch(switchOperatorView({usuarios:[objTarget]}))  
  //         //SweetAlertError(error) 
  //         errorConsoleCatch(error) 
  //     } 
  // }
  



  // const uploadUserImg = async(uid, file) => {

  //   console.log(file)
  //   localStorage.setItem("urlImgLSRedux", URL.createObjectURL(file));
  //     try {
  //         // const { data } = await axiosApi.put(`/uploads/usuarios/${uid}`, {file},{
  //         // headers: {
  //         //   "Content-Type": "multipart/form-data",
  //         // }})

  //         // dispatch(somethingWentRigth(['Foto fue Actualizada', 'Con Exito!!', 'success']))  

  //         // let img = data.img
  //         // const { objTarget } = editExplorer(false, {uid}, [], users.usuarios, {img})
  //         // dispatch(operatorDataPush({ usuarios:[objTarget] })) 
  //         // UpDateDB()  
  //     } catch (error) {
  //         console.log('switchUser error :>>', error)
  //         SweetAlertError(error)
  //         errorConsoleCatch(error)
  //     }
  // }






  const usersFinder = async (v:String, colonia) => {



        if(colonia==='colonia'){

            if(v.length > 3){
                const { upFirstLe, upperCase, lowerCase } = finderExplorer(v, colonia)

                // console.log(upFirstLe, upperCase, lowerCase)
              
                dispatch(operatorDataPush( {usuarios:[...upFirstLe, ...upperCase, ...lowerCase ]} ))
 
            }else{
                dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
            }


        }else{





                if(colonia==='Jovenes' || colonia==='Matrimonios'){

                            const { upFirstLe } = finderExplorer(v, colonia)

                            dispatch(operatorDataPush( {usuarios:upFirstLe} ))

                }else{
                       // LUGAR ============
                    if(v.length > 3){
                        const { upFirstLe, upperCase, lowerCase } = finderExplorer(v)

                            // console.log(upFirstLe, upperCase, lowerCase)

                            // upFirstLe.length>=1 ? dispatch(operatorDataPush({usuarios:upFirstLe})): null
                            // upperCase.length>=1 ? dispatch(operatorDataPush({usuarios:upperCase})): null
                            // lowerCase.length>=1 ? dispatch(operatorDataPush({usuarios:lowerCase})): null
                          // emailFind.length>=1 ? dispatch(operatorDataPush({usuarios:emailFind})): null
              
                                dispatch(operatorDataPush( {usuarios:[...upFirstLe, ...upperCase, ...lowerCase ]} ))
              
                            /*const {data} = await axiosApi.get(`/buscar/usuarios/${v}`) 
                            dispatch(operatorDataPush({usuarios:data.results}))  */ 
                      }else{
                                dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
                      }
                }

           


        }

          




      // try {

      // } catch (error) {
      //     console.log('usersFinder error :>>', error)
      //     SweetAlertError(error)
      //     errorConsoleCatch(error)
      // }
  }








  return {
    dataUsersGet,
    deleteUser,
    // switchUser,
    postUser,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,
    // uploadUserImg,
    //finder
    usersFinder,
    // paginationSelect,
    // paginationNext,


    //states
    editMode,
    operators,
  }
}
