
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { messageView, clearAlertView } from  '../store/slices/alertSlice'
import {unitsCreateView, unitsEditView, defaultEditMode, unitsDeleteView, switchUnitsView} from  '../store/slices/unitsSlice'

import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils } from '../helpers'




export const useUnits = () => {


  const { unitsSlice, editMode } = useSelector(state => state.unitsSlice)
  const dispatch = useDispatch()
  const navigateTo = useNavigate()


  const unitsGet = (a) => {

        if(localStorage.status !== 'authenticated'){
            return
        }
        
        if(localStorage.unitsArray === undefined){
              localStorage.unitsArray = JSON.stringify([])
              dispatch(unitsCreateView([])) 
        }  
            
        dispatch(unitsCreateView(JSON.parse(localStorage.unitsArray)))
  }



  const unitsPost = ({ name, phone, idUnit, dateStart }) => {
          let curretUsers = JSON.parse(localStorage.unitsArray)      
          curretUsers.push({ name, phone, idUnit, dateStart, uid:Date.now() })
          localStorage.unitsArray = JSON.stringify(curretUsers)
          dispatch(unitsCreateView(JSON.parse(localStorage.unitsArray)))
  }


  const setInfoToForm = (el) => {
        dispatch(unitsEditView(el))
  }

  const newDataEdit = (name, phone, idUnit, uid) => { 
          let curretUsers = JSON.parse(localStorage.unitsArray)
          let editedUsers = curretUsers.map((el) => (el.uid === uid ? {...editMode, name, phone, idUnit } : el))    
          localStorage.unitsArray = JSON.stringify(editedUsers)
          dispatch(unitsCreateView(JSON.parse(localStorage.unitsArray)))
          dispatch(defaultEditMode())   
  }



  const defaultModeEdith = () => {
          dispatch(defaultEditMode())
  }



  const { confirmDeleteAlerts } = useConfirmDeleteAlerts({ collection:'Unidad', dispatch, unitsCreateView })

  const unitsDelete = (usuario: Object) => {
          confirmDeleteAlerts(usuario)
  }





  const { Modal, show, handleClose, handleShow } = useUtils(useState)





  return {
    unitsGet,
    unitsDelete,
    unitsPost,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,

    //states
    editMode,
    unitsSlice,

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
    useForm,
    onCheckingRedirect,


  }
}
