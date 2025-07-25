
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { clearAlertView, messageView } from  '../store/slices/alertSlice'
import { assCreateView, assEditView, defaultEditMode, assDeleteView, assSwitchView } from  '../store/slices/assignationsSlice'

import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils, editExplorer} from 'helperssssss'



export const useAssignations = () => {


    const { assignationsSlice, editMode } = useSelector(state => state.assignationsSlice)

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    
    const { 
        Modal,
        show, 
        handleClose, 
        handleShow, 
        Acordion, 
        avoidEmpty 
    } = useUtils(useState, dispatch, messageView)


    const assignationsGet = () => {
        if (ls('status') !== 'authenticated'){
            return
        }
        ls('assignationsArray') === undefined && ls('assignationsArray', []) 
        dispatch(assCreateView(ls('assignationsArray')))
    }


    const assignationsPost = (el) => {
        c(el)
        let posted = ls('assignationsArray')
        posted.push({...el, uid:Date.now() })
        ls('assignationsArray', posted)
        dispatch(assCreateView(ls('assignationsArray')))  
    }


    const setInfoToForm = (el) => {
        dispatch(assEditView(el))
    }


    const newDataEdit = (el) => { 
        const { editedAss } = editExplorer() 
        ls('assignationsArray', editedAss(el))
        dispatch(assCreateView(ls('assignationsArray')))
        dispatch(defaultEditMode())
    }


    const defaultModeEdith = () => {
        dispatch(defaultEditMode())
    }


    const assDelete = (operator) => {
        const { confirmDeleteAlerts } = useConfirmDeleteAlerts({ collection:'Assignation', dispatch, assCreateView })
        confirmDeleteAlerts(operator)
    }


  return {
    //Metodos
    assignationsGet,
    assDelete,
    assignationsPost,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,

    //states
    assignationsSlice,
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
    avoidEmpty,

  }
}
