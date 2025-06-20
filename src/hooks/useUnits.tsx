
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { errorConsoleCatch, toggleExplorer, 
          editExplorer, finderExplorer, postExplorer,
          paginationExplorer, nextExplorer, deleteExplorer, useForm} from '../helpers'

import {unitsDataPush, editUnitsView, defaultEditMode, unitsDeleteView, switchUnitsView} from  '../store/slices/unitsSlice'

import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'

import { useNavigate } from 'react-router-dom';
 
import Modal from 'react-bootstrap/Modal';




export const useUnits = () => {

  const { units, editModeUnits} = useSelector(state => state.unitsSlice)

  const dispatch = useDispatch()
  
  const navigateTo = useNavigate()

  //"warning", "error", "success","info"
  // function SweetAlertError(error){
  //     dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
  // }


    


  const dataUsersGet = () => {

        let workshops = []
        
        if(localStorage.unitsArray === undefined){
              localStorage.unitsArray = JSON.stringify(workshops)
              dispatch(unitsDataPush(workshops)) 
        }  
            
        
        dispatch(unitsDataPush({usuarios:JSON.parse(localStorage.unitsArray)}))

  }



  



/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */



  const postUser = ({ name, phone, idUnit, dateStart }) => {

          let curretUsers = JSON.parse(localStorage.unitsArray)
          
          curretUsers.push({ name, phone, idUnit, dateStart, uid:Date.now() })
          localStorage.unitsArray = JSON.stringify(curretUsers)
          dispatch(unitsDataPush({usuarios:JSON.parse(localStorage.unitsArray)}))
 
  }





  const setInfoToForm = (el) => {
        dispatch(editUnitsView(el))
  }





  const newDataEdit = (name, phone, idUnit, uid) => { 

          let curretUsers = JSON.parse(localStorage.unitsArray)

          let editedUsers = curretUsers.map((el) => (el.uid === uid ? {...editModeUnits, name, phone, idUnit } : el))
         
          localStorage.unitsArray = JSON.stringify(editedUsers)

          dispatch(unitsDataPush({usuarios:JSON.parse(localStorage.unitsArray)}))

          dispatch(defaultEditMode()) 
      
  }



  const defaultModeEdith = () => {
      dispatch(defaultEditMode())
  }




  const deleteUser = (usuario) => {

          let curretUsers = JSON.parse(localStorage.unitsArray)
          let del = curretUsers.filter((el) => el.uid !== usuario.uid)
          localStorage.unitsArray = JSON.stringify(del)
          dispatch(unitsDataPush({usuarios:JSON.parse(localStorage.unitsArray)}))
          dispatch(somethingWentRigth(['Unidad fue Borrada', usuario.name + ' ya no existe ', 'success']))

  }




   const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)






  return {
    dataUsersGet,
    deleteUser,
    postUser,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,

    //states
    editModeUnits,
    units,

    //react
    navigateTo,
    useEffect, 
    useState,

     //modal
    Modal,
    show,
    handleClose,
    handleShow,

    //helpers
    useForm

  }
}
