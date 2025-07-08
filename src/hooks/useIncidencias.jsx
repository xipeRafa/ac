
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { clearAlertView, messageView } from  '../store/slices/alertSlice'
import { incidenciasCreateView,  incidenciasEditView, defaultEditMode,  incidenciasDeleteView,  incidenciasSwitchView } from  '../store/slices/incidenciasSlice'
import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils, editExplorer } from '../helpers'




export const useIncidencias = () => {


    const {incidenciasSlice, editMode } = useSelector(state => state. incidenciasSlice)

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    
    const { Modal, show, handleClose, handleShow, Acordion } = useUtils(useState)


    const incidenciasGet = () => {
        if (ls('status') !== 'authenticated'){
            return
        }
        ls('incidenciasArray') === undefined && ls('incidenciasArray', []) 
        dispatch(incidenciasCreateView(ls('incidenciasArray')))
    }


    const incidenciasPost = (el) => {
        let posted = ls('incidenciasArray')
        posted.push({...el, uid:Date.now()})
        ls('incidenciasArray', posted)
        dispatch(incidenciasCreateView(ls('incidenciasArray')))
    }


    const setInfoToForm = (el) => {
        dispatch(incidenciasEditView(el))
    }

    
    const newDataEdit = (el) => { 
        const { editedIncidencias } = editExplorer() 
        ls('incidenciasArray', editedIncidencias(el))
        dispatch(incidenciasCreateView(ls('incidenciasArray')))
        dispatch(defaultEditMode()) 
    }


    const defaultModeEdith = () => {
        dispatch(defaultEditMode())
    }


    const incidenciasDelete = (incidencias) => {
        const { confirmDeleteAlerts } = useConfirmDeleteAlerts({ collection:'Incidencias', dispatch, incidenciasCreateView })
        confirmDeleteAlerts(incidencias)
    }


  return {
    //Metodos
    incidenciasGet,
    incidenciasDelete,
    incidenciasPost,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,

    //states
    incidenciasSlice,
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
    Acordion,

  }
}









