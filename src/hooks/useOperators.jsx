
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { clearAlertView, messageView } from  '../store/slices/alertSlice'
import { opCreateView, opEditView, defaultEditMode, opDeleteView, opSwitchView } from  '../store/slices/operatorsSlice'
import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils } from '../helpers'




export const useOperators = () => {


    const { operatorsSlice, editMode } = useSelector(state => state.operatorsSlice)

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    const { confirmDeleteAlerts } = useConfirmDeleteAlerts({ collection:'Operador', dispatch, opCreateView })
    const { Modal, show, handleClose, handleShow } = useUtils(useState)


    const operatorsGet = () => {

        if(localStorage.status !== 'authenticated'){
            return
        }

        if(localStorage.operatorsArray === undefined){
                localStorage.operatorsArray = JSON.stringify([])
                dispatch(opCreateView([])) 
        } 

        dispatch(opCreateView(JSON.parse(localStorage.operatorsArray)))

    }


    const operatorsPost = ({ name, phone, idOperator, dateStart }) => {
        let curretUsers = JSON.parse(localStorage.operatorsArray)
        curretUsers.push({ name, phone, idOperator, dateStart, uid:Date.now() })
        localStorage.operatorsArray = JSON.stringify(curretUsers)
        dispatch(opCreateView(JSON.parse(localStorage.operatorsArray)))
    }


    const setInfoToForm = (el) => {
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


    const operatorsDelete = (usuario) => {
        confirmDeleteAlerts(usuario)
    }


  return {
    //Metodos
    operatorsGet,
    operatorsDelete,
    operatorsPost,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,

    //states
    operatorsSlice,
    editMode,

    //react
    navigateTo,
    useEffect, 
    useState,

    //helper
    useForm,
    onCheckingRedirect,

    //modal
    Modal,
    show,
    handleClose,
    handleShow,

  }
}
