
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { useForm, useConfirmDeleteAlerts, onCheckingRedirect  } from '../helpers'

import {opCreateView, opEditView, defaultEditMode, opDeleteView, opSwitchView} from  '../store/slices/operatorsSlice'

import { aMessageView, clearAlertView } from  '../store/slices/alertSlice'

import Modal from 'react-bootstrap/Modal';






export const useOperators = () => {


  const { operatorsSlice, editMode } = useSelector(state => state.operatorsSlice)

  const dispatch = useDispatch()

  const navigateTo = useNavigate()




  const dataUsersGet = () => {


      if(localStorage.status !== 'authenticated'){
          return
      }

      let workshops = []

      if(localStorage.operatorsArray === undefined){
            localStorage.operatorsArray = JSON.stringify(workshops)
            dispatch(opCreateView(workshops)) 
            return
      }  
            
        
      dispatch(opCreateView(JSON.parse(localStorage.operatorsArray)))

  }



  const postUser = ({ name, phone, idOperator, dateStart }) => {

          let curretUsers = JSON.parse(localStorage.operatorsArray)
          
          curretUsers.push({ name, phone, idOperator, dateStart, uid:Date.now() })
          localStorage.operatorsArray = JSON.stringify(curretUsers)
          dispatch(opCreateView(JSON.parse(localStorage.operatorsArray)))
 
  }



  const setInfoToForm = (el:Object) => {
       dispatch(opEditView(el))
   }





  const newDataEdit = (name, phone, idOperator, uid) => { 

          let curretUsers = JSON.parse(localStorage.operatorsArray)

          let editedUsers = curretUsers.map((el) => (el.uid === uid ? {...editMode, name, phone, idOperator } : el))
         
          localStorage.operatorsArray = JSON.stringify(editedUsers)

          dispatch(opCreateView(JSON.parse(localStorage.operatorsArray)))

          dispatch(defaultEditMode()) 
      
  }



  const defaultModeEdith = () => {
          dispatch(defaultEditMode())
  }




 const { confirmDeleteAlerts } = useConfirmDeleteAlerts(
       { collection:'Operador', dispatch, opCreateView } 
  )

  const deleteUser = (usuario: Object) => {
          confirmDeleteAlerts(usuario)
  }



  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  const capitalize=(v)=>{
        return v.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())
  }

 


  return {
    dataUsersGet,
    deleteUser,
    postUser,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,

    //states
    editMode,
    operatorsSlice,

    //react
    navigateTo,

    //helper
    useForm,
    onCheckingRedirect,
    capitalize,

    //react
    useEffect, 
    useState,

    //modal
    Modal,
    show,
    handleClose,
    handleShow,

  }
}
