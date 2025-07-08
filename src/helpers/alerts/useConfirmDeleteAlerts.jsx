
import Swal from 'sweetalert2';





export const useConfirmDeleteAlerts = ({ collection, dispatch, opCreateView, 
  unitsCreateView, assCreateView, rutasCreateView, }) => {


  // let collection = args[0].collection
  // let dispatch = args[0].dispatch
  // let opCreateView = args[0].opCreateView
  // let unitsCreateView = args[0].unitsCreateView
  // let assCreateView = args[0].assCreateView


  const confirmDeleteAlerts = (COLLECTION)=>{


  	Swal.fire({
    	title: "Quieres Borrar?",
    	text: "UNA VEZ BORRADO NO PODRAS RECUPERARLO!",
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

            const collectionMap = {
              'Operador':    'operatorsArray',
              'Unidad':      'unitsArray',
              'Assignation': 'assignationsArray',
              'Rutas':       'rutasArray',
            }

            const arrayName = collectionMap[collection]

            if (arrayName) {
              let arr = ls(arrayName)
              let updatedArray = arr.filter((el) => el.uid !== COLLECTION.uid)
              ls(arrayName, updatedArray)
        
              const dispatchMap = {
                'Operador':    opCreateView,
                'Unidad':      unitsCreateView,
                'Assignation': assCreateView,
                'Rutas':       rutasCreateView,
              }


              dispatch(dispatchMap[collection](ls(arrayName)))

            }else{

              alert('no hay nombre de la coleccion')
              
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



