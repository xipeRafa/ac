
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { messageView, clearAlertView } from  '../store/slices/alertSlice'
import { unitsCreateView, unitsEditView, defaultEditMode, unitsDeleteView, switchUnitsView } from  '../store/slices/unitsSlice'

import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils, editExplorer} from 'helperssssss'




export const useUnits = () => {


    const { unitsSlice, editMode } = useSelector(state => state.unitsSlice)

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    const { Modal, show, handleClose, handleShow, Acordion, } = useUtils(useState)


    const unitsGet = () => {
        if (ls('status') !== 'authenticated'){
            return
        }
        ls('unitsArray') === undefined && ls('unitsArray', [])
        dispatch(unitsCreateView(ls('unitsArray')))
    }


    const unitsPost = (el) => {
        let posted = ls('unitsArray')      
        posted.push({ ...el, uid:Date.now() })
        ls('unitsArray', posted)
        dispatch(unitsCreateView(ls('unitsArray')))
    }


    const setInfoToForm = (el) => {
        dispatch(unitsEditView(el))
    }


    const newDataEdit = (el) => { 
        const { editedUnit } = editExplorer() 
        ls('unitsArray', editedUnit(el))
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
    Acordion,
  }

}
