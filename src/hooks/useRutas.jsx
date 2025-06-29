
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { clearAlertView, messageView } from  '../store/slices/alertSlice'
import { rutasCreateView, rutasEditView, defaultEditMode, rutasDeleteView, rutasSwitchView } from  '../store/slices/rutasSlice'
import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils, editExplorer } from '../helpers'




export const useRutas = () => {


    const { rutasSlice, editMode } = useSelector(state => state.rutasSlice)

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    
    const { Modal, show, handleClose, handleShow, Acordion } = useUtils(useState)


    const rutasGet = () => {
        if (ls('status') !== 'authenticated'){
            return
        }
        ls('rutasArray') === undefined && ls('rutasArray', []) 
        dispatch(rutasCreateView(ls('rutasArray')))
    }


    const rutasPost = (el) => {
        let posted = ls('rutasArray')
        posted.push({...el, uid:Date.now()})
        ls('rutasArray', posted)
        dispatch(rutasCreateView(ls('rutasArray')))
    }


    const setInfoToForm = (el) => {
        dispatch(rutasEditView(el))
    }

    
    const newDataEdit = (el) => { 
        const { editedRutas } = editExplorer() 
        ls('rutasArray', editedRutas(el))
        dispatch(rutasCreateView(ls('rutasArray')))
        dispatch(defaultEditMode()) 
    }


    const defaultModeEdith = () => {
        dispatch(defaultEditMode())
    }


    const rutasDelete = (operator) => {
        const { confirmDeleteAlerts } = useConfirmDeleteAlerts({ collection:'Rutas', dispatch, rutasCreateView })
        confirmDeleteAlerts(operator)
    }


  return {
    //Metodos
    rutasGet,
    rutasDelete,
    rutasPost,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,

    //states
    rutasSlice,
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
