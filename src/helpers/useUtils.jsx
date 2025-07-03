

import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion'




export const useUtils = (useState, dispatch, messageView) => {

	Modal

	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)


	const Acordion =(i, text, ...args)=>(

			<Accordion defaultActiveKey="0" >

				<Accordion.Item eventKey={i} >

                    <Accordion.Header>
                        {text}
                    </Accordion.Header>

                    <Accordion.Body>
                       	{args}
                    </Accordion.Body>

                </Accordion.Item>

            </Accordion>

    )


    const avoidEmpty = (v) => {

    	c(v)

        let a = Object.values(v).some((x) => {
        	if(x.slice(0, 10) === 'Seleccione' || x.charAt() === ''){
        		return true
        	}else{
        		return false
        	}
        })

        if(a){
        	dispatch(messageView(['Campo Vacio','Seleccione Todo!','warning']))
        }

        return a

    }


	return{
		handleClose,
		handleShow, 
		show, 
		Modal,
		Acordion,
		avoidEmpty,
	}

}











// function obtenerMes(n) {

//   const meses = {
//     '01': "Enero",
//     '02': "Febrero",
//     '03': "Marzo",
//     '04': "Abril",
//     '05': "Mayo",
//     '06': "Junio",
//     '07': "Julio",
//     '08': "Agosto",
//     '09': "Septiembre",
//     '10': "Octubre",
//     '11': "Noviembre",
//     '12': "Diciembre",
//     'default':'Falto Fecha'

//     //  "2025-06-13"  ====> 13 de Junio del 2025

//   };

//   return meses[n] || meses['default']
// }

//     let mesTexto = obtenerMes(date?.slice(5,7))



//     let dateStart = Math.trunc(date?.slice(-2)) + ' de ' + mesTexto + ' del ' + date?.slice(0,4)


// console.log('dia:', fechaDeInicio.slice(-2), 'mes:', fechaDeInicio.slice(5,7), 'Año:', fechaDeInicio.slice(0,4))