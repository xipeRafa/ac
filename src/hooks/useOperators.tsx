
import { useDispatch, useSelector } from 'react-redux'

import { errorConsoleCatch, toggleExplorer, 
          editExplorer, finderExplorer, postExplorer,
          paginationExplorer, nextExplorer, deleteExplorer} from '../helpers'

import {operatorDataPush, editOperatorView, defaultEditMode, operatorDeleteView, switchOperatorView} from  '../store/slices/operatorsSlice'

import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'






export const useOperators = () => {

  const { operators, editMode } = useSelector(state => state.operatorsSlice)

  const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
  // function SweetAlertError(error){
  //     dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  // }


    





  const dataUsersGet = async (from=0, limit=8) => {




  let workshops = []
             if(localStorage.operatorsArray == undefined){
                 localStorage.operatorsArray = JSON.stringify(workshops)
                 dispatch(operatorDataPush(workshops)) 
            }  
            
               //localStorage.operatorsArray = JSON.stringify(workshops)
        
            dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.operatorsArray)}))

  }



  



/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */

// online solo arriba
// offline abajo + arriba 

  const postUser = async ({ name, phone, idOperator, dateStart }) => {

          let curretUsers = JSON.parse(localStorage.operatorsArray)
          
          curretUsers.push({ name, phone, idOperator, dateStart, uid:Date.now() })
          localStorage.operatorsArray = JSON.stringify(curretUsers)
          dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.operatorsArray)}))
 
  }



  const setInfoToForm = (el:Object) => {
       dispatch(editOperatorView(el))
   }





  const newDataEdit = async (name, phone, idOperator, uid) => { 

          let curretUsers = JSON.parse(localStorage.operatorsArray)

          let editedUsers = curretUsers.map((el) => (el.uid === uid ? {...editMode, name, phone, idOperator } : el))
         
          localStorage.operatorsArray = JSON.stringify(editedUsers)

          dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.operatorsArray)}))

          dispatch(defaultEditMode()) 
      
  }



  const defaultModeEdith = () => {
      dispatch(defaultEditMode())
  }




  const deleteUser = async (usuario: Object) => {

          let curretUsers = JSON.parse(localStorage.operatorsArray)
          let del = curretUsers.filter((el) => el.uid !== usuario.uid)
          localStorage.operatorsArray = JSON.stringify(del)
          dispatch(operatorDataPush({usuarios:JSON.parse(localStorage.operatorsArray)}))
          dispatch(somethingWentRigth(['Operador fue Borrado', usuario.name + ' ya no existe ', 'success']))

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
    //usersFinder,
    // paginationSelect,
    // paginationNext,


    //states
    editMode,
    operators,
  }
}
