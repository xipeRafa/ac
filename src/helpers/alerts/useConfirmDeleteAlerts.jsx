
import Swal from 'sweetalert2';





export const useConfirmDeleteAlerts = (...args) => {


  let collection = args[0].collection
  let dispatch = args[0].dispatch
  let opCreateView = args[0].opCreateView
  let unitsCreateView = args[0].unitsCreateView


  const confirmDeleteAlerts =(COLLECTION)=>{


  	Swal.fire({
    	title: "Quieres Borrar?",
    	text: "Una Vez Borrado NO Podras Recuperarlo!",
    	icon: "question",
      //showCloseButton: true,
    	// buttons: true,
    	//dangerMode: true,
    	showCancelButton: true,
    	confirmButtonColor: "#015887",
    	cancelButtonColor: "#d93526",
    	confirmButtonText: "Confirmar",
    	cancelButtonText: 'Cancelar',
	    //color: "#716add",
    	background:'linear-gradient(var(--slate-100), var(--slate-50),#fff,#fff,#fff,#fff,#fff,#fff,#fff,#fff, var(--slate-50), var(--slate-150)',
	})
  	.then((result) => {

    	if (result.isConfirmed) {

        	Swal.fire({
          	title: `${ collection } Fue Borrado!`,
		        // text: capitalize(COLLECTION.name) || capitalize(COLLECTION.ne),
            //showCloseButton: true,
    		    icon: "success",
        	  confirmButtonColor: "#015887", // ok button
    			  background:'linear-gradient(var(--slate-100), var(--slate-50),#fff,#fff,#fff,#fff,#fff,#fff,#fff,#fff, var(--slate-50), var(--slate-150)',
        	})


          if(collection==='Operador'){
              let arr = ls('operatorsArray')
              let del = arr.filter((el) => el.uid !== COLLECTION.uid)
              ls('operatorsArray', del)
              dispatch(opCreateView(ls('operatorsArray')))
          }


          if(collection==='Unidad'){
              let arr = ls('unitsArray')
              let del = arr.filter((el) => el.uid !== COLLECTION.uid)
              ls('unitsArray', del)
              dispatch(unitsCreateView(ls('unitsArray')))
          }

        	  

    	} else {	

      		Swal.fire({
        		title: 'No Fue Borrado',
	        	text: "Esta a Salvo",
            //showCloseButton: true,
		        // icon: "success",
    		    confirmButtonColor: "#015887",
    			  background:'linear-gradient(var(--slate-100), var(--slate-50),#fff,#fff,#fff,#fff,#fff,#fff,#fff,#fff, var(--slate-50), var(--slate-150)',
      		})

    	}

  	})

  }


  return {
  	 	confirmDeleteAlerts
  }

}












//   if (confirm("Are you sure you want to delete this item?")) {}

  //let userConfirmed = confirm("Do you want to save your changes?");
    // if (userConfirmed) {
    //   // Code to save changes
    // } else {
    //   // Code to handle cancellation
    // }


















