
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


import { useForm, useConfirmDeleteAlerts, onCheckingRedirect } from '../helpers'

import {unitsDataPush, editUnitsView, defaultEditMode, unitsDeleteView, switchUnitsView} from  '../store/slices/unitsSlice'

import { aMessageView, clearAlertView } from  '../store/slices/alertSlice'

 
import Modal from 'react-bootstrap/Modal';




export const useUnits = () => {



  const { units, editModeUnits} = useSelector(state => state.unitsSlice)

  const dispatch = useDispatch()
  
  const navigateTo = useNavigate()


    


  const dataUsersGet = (a) => {

        if(localStorage.status !== 'authenticated'){
            return
        }

        let workshops = []
        
        if(localStorage.unitsArray === undefined){
              localStorage.unitsArray = JSON.stringify(workshops)
              dispatch(unitsDataPush(workshops)) 
        }  
            
        
        dispatch(unitsDataPush(JSON.parse(localStorage.unitsArray)))

  }



  const postUser = ({ name, phone, idUnit, dateStart }) => {

          let curretUsers = JSON.parse(localStorage.unitsArray)
          
          curretUsers.push({ name, phone, idUnit, dateStart, uid:Date.now() })
          localStorage.unitsArray = JSON.stringify(curretUsers)
          dispatch(unitsDataPush(JSON.parse(localStorage.unitsArray)))
 
  }





  const setInfoToForm = (el) => {
        dispatch(editUnitsView(el))
  }





  const newDataEdit = (name, phone, idUnit, uid) => { 

          let curretUsers = JSON.parse(localStorage.unitsArray)

          let editedUsers = curretUsers.map((el) => (el.uid === uid ? {...editModeUnits, name, phone, idUnit } : el))
         
          localStorage.unitsArray = JSON.stringify(editedUsers)

          dispatch(unitsDataPush(JSON.parse(localStorage.unitsArray)))

          dispatch(defaultEditMode()) 
      
  }



  const defaultModeEdith = () => {
      dispatch(defaultEditMode())
  }



  const { confirmDeleteAlerts } = useConfirmDeleteAlerts(
       { collection:'Unidad', dispatch, unitsDataPush } 
  )

  const deleteUser = (usuario: Object) => {
          confirmDeleteAlerts(usuario)
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

    //react
    useEffect, 
    useState,

     //modal
    Modal,
    show,
    handleClose,
    handleShow,

    //helpers
    useForm,
    onCheckingRedirect,

  }
}
