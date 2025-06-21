
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { useForm } from '../helpers'

import {opCreateView, opEditView, defaultEditMode, opDeleteView, opSwitchView} from  '../store/slices/operatorsSlice'

import { aMessageView, clearAlertView } from  '../store/slices/alertSlice'

import Modal from 'react-bootstrap/Modal';

import Swal from 'sweetalert2';




export const useOperators = () => {


  const { operatorsSlice, editMode } = useSelector(state => state.operatorsSlice)

  const dispatch = useDispatch()

  const navigateTo = useNavigate()




  const dataUsersGet = () => {

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




  const deleteUser = (usuario: Object) => {
//   if (confirm("Are you sure you want to delete this item?")) {}

    //     let userConfirmed = confirm("Do you want to save your changes?");
    // if (userConfirmed) {
    //   // Code to save changes
    // } else {
    //   // Code to handle cancellation
    // }

  Swal.fire({
    title: "Quiere Borrar?",
    text: "Una Vez Borrado NO Podras Recuperarlo!",
    icon: "question",
    // buttons: true,
    // dangerMode: true,
    showCancelButton: true,
    confirmButtonColor: "#014063",
    cancelButtonColor: "#d93526",
    confirmButtonText: "Confirmar Borrar",
    cancelButtonText: 'Cancelar',
    //color: "#716add",
    //background:'red',
  })
  .then((result) => {

    if (result.isConfirmed) {


        Swal.fire({
          title: `Operador Fue Borrado!`,
          text: usuario.name,
          icon: "success",
          buttonColor: "#014063",
        })



          let curretUsers = JSON.parse(localStorage.operatorsArray)

          let del = curretUsers.filter((el) => el.uid !== usuario.uid)

          localStorage.operatorsArray = JSON.stringify(del)

          dispatch(opCreateView(JSON.parse(localStorage.operatorsArray)))
          // dispatch(aMessageView(['Operador fue Borrado', usuario.name + ' ya no existe ', 'success']))



    } else {

      Swal.fire({
        title: 'No Fue Borrado',
        text: "Está a Salvo",
        // icon: "success",
         okButtonColor: "#014063",
      })

    }

  })

          

  }



  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  






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
