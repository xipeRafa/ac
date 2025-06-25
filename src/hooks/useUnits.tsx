
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { messageView, clearAlertView } from  '../store/slices/alertSlice'
import { unitsCreateView, unitsEditView, defaultEditMode, unitsDeleteView, switchUnitsView } from  '../store/slices/unitsSlice'

import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils, editExplorer } from '../helpers'




export const useUnits = () => {


    const { unitsSlice, editMode } = useSelector(state => state.unitsSlice)

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    const { Modal, show, handleClose, handleShow } = useUtils(useState)


    const unitsGet = () => {
        if (ls('status') !== 'authenticated'){
            return
        }
        ls('unitsArray') === undefined && ls('unitsArray', [])
        dispatch(unitsCreateView(ls('unitsArray')))
    }


    const unitsPost = ({ descri, ne, idUnit, }) => {
        let posted = ls('unitsArray')      
        posted.push({ descri, ne, idUnit, uid:Date.now() })
        ls('unitsArray', posted)
        dispatch(unitsCreateView(ls('unitsArray')))
    }


    const setInfoToForm = (el) => {
        dispatch(unitsEditView(el))
    }


    const newDataEdit = (descri, ne, idUnit, uid) => { 
        const { editedUnit } = editExplorer() 
        ls('unitsArray', editedUnit({editMode, descri, ne, idUnit, uid}))
        dispatch(unitsCreateView(ls('unitsArray')))
        dispatch(defaultEditMode())   
    }


    const defaultModeEdith = () => {
        dispatch(defaultEditMode())
    }


    const unitsDelete = (operator) => {
        const { confirmDeleteAlerts } = useConfirmDeleteAlerts({ collection:'Unidad', dispatch, unitsCreateView })
        confirmDeleteAlerts(operator)
    }


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
