module.exports = (componentName) => ({
  content: `
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { clearAlertView, messageView } from  '../store/slices/alertSlice'
import { ${componentName.toLowerCase()}CreateView,  ${componentName.toLowerCase()}EditView, defaultEditMode,  ${componentName.toLowerCase()}DeleteView,  ${componentName.toLowerCase()}SwitchView } from  '../store/slices/${componentName.toLowerCase()}Slice'
import { useForm, useConfirmDeleteAlerts, onCheckingRedirect, useUtils, editExplorer } from '../helpers'




export const use${componentName} = () => {


    const {${componentName.toLowerCase()}Slice, editMode } = useSelector(state => state. ${componentName.toLowerCase()}Slice)

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    
    const { Modal, show, handleClose, handleShow, Acordion } = useUtils(useState)


    const ${componentName.toLowerCase()}Get = () => {
        if (ls('status') !== 'authenticated'){
            return
        }
        ls('${componentName.toLowerCase()}Array') === undefined && ls('${componentName.toLowerCase()}Array', []) 
        dispatch(${componentName.toLowerCase()}CreateView(ls('${componentName.toLowerCase()}Array')))
    }


    const ${componentName.toLowerCase()}Post = (el) => {
        let posted = ls('${componentName.toLowerCase()}Array')
        posted.push({...el, uid:Date.now()})
        ls('${componentName.toLowerCase()}Array', posted)
        dispatch(${componentName.toLowerCase()}CreateView(ls('${componentName.toLowerCase()}Array')))
    }


    const setInfoToForm = (el) => {
        dispatch(${componentName.toLowerCase()}EditView(el))
    }

    
    const newDataEdit = (el) => { 
        const { edited${componentName} } = editExplorer() 
        ls('${componentName.toLowerCase()}Array', edited${componentName}(el))
        dispatch(${componentName.toLowerCase()}CreateView(ls('${componentName.toLowerCase()}Array')))
        dispatch(defaultEditMode()) 
    }


    const defaultModeEdith = () => {
        dispatch(defaultEditMode())
    }


    const ${componentName.toLowerCase()}Delete = (${componentName.toLowerCase()}) => {
        const { confirmDeleteAlerts } = useConfirmDeleteAlerts({ collection:'${componentName}', dispatch, ${componentName.toLowerCase()}CreateView })
        confirmDeleteAlerts(${componentName.toLowerCase()})
    }


  return {
    //Metodos
    ${componentName.toLowerCase()}Get,
    ${componentName.toLowerCase()}Delete,
    ${componentName.toLowerCase()}Post,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,

    //states
    ${componentName.toLowerCase()}Slice,
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









`,
  extension: `use${componentName}.jsx`
});


