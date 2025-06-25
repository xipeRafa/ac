
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { clearAlertView, messageView } from  '../store/slices/alertSlice'
import { opCreateView, opEditView, defaultEditMode, opDeleteView, opSwitchView } from  '../store/slices/operatorsSlice'
import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils, editExplorer } from '../helpers'




export const useOperators = () => {


    const { operatorsSlice, editMode } = useSelector(state => state.operatorsSlice)

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    
    const { Modal, show, handleClose, handleShow } = useUtils(useState)


    const operatorsGet = () => {
        if(ls('status') !== 'authenticated'){
            return
        }
        ls('operatorsArray') === undefined && ls('operatorsArray', []) 
        dispatch(opCreateView(ls('operatorsArray')))
    }


    const operatorsPost = ({ name, phone, idOperator, dateStart }) => {
        let posted = ls('operatorsArray')
        posted.push({ name, phone, idOperator, dateStart, uid:Date.now() })
        ls('operatorsArray', posted)
        dispatch(opCreateView(ls('operatorsArray')))
    }


    const setInfoToForm = (el) => {
        dispatch(opEditView(el))
    }

    

    const newDataEdit = (name, phone, idOperator, uid) => { 
        const { editedOp } = editExplorer() 
        ls('operatorsArray', editedOp({editMode, name, phone, idOperator, uid}))
        dispatch(opCreateView(ls('operatorsArray')))
        dispatch(defaultEditMode()) 
    }


    const defaultModeEdith = () => {
        dispatch(defaultEditMode())
    }


    const operatorsDelete = (operator) => {
        const { confirmDeleteAlerts } = useConfirmDeleteAlerts({ collection:'Operador', dispatch, opCreateView })
        confirmDeleteAlerts(operator)
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
