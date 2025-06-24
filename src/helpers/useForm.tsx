import { useEffect, useState } from 'react';


//import { useDebounce } from "./useDebounce";





export const useForm = (initialForm = {}, formValidations = {}) => {



    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({ target }) => {

        const { name, value } = target;

        let lastChar = value.slice(-1)
        let secondLastChar = value.slice(-2, -1)

        if (!(lastChar === ' ' && secondLastChar === ' ')) {
                setFormState({ ...formState, [name]: value.trimStart() })
        }


    }


    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])



    localStorage.obj = JSON.stringify(formState)
    let stateInLS = JSON.parse(localStorage.obj)


    const quitarEspaciosFinales=(obj)=> {
            for (const key in obj) {
                    if (Object.hasOwn(obj, key) && typeof obj[key] === 'string') {
                            obj[key] = obj[key].trimEnd().toLowerCase()
                    }
            }
    }


    quitarEspaciosFinales(stateInLS)

    localStorage.sinEspacios = JSON.stringify(stateInLS)

    let noSpace = JSON.parse(localStorage.sinEspacios)


    const isValidEmail = ( email: string ) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
    }





   // const [formValidation, setFormValidation] = useState({});



    // useEffect(() => {
    //     createValidators();
    // }, [formState])




   





    // const isFormValid = useMemo(() => {

    //     for (const formValue of Object.keys(formValidation)) {
    //         if (formValidation[formValue] !== null) 
    //             return false;
    //     }

    //     return true;
    // }, [formValidation])

 
    

   /*  function debounce(fun, time){
        let timeoutId;
        return function(){
            if(timeoutId){ 
                clearTimeout(timeoutId)
            }

            const context = this;
            const args = arguments;
            timeoutId = setTimeout(() => {
                return fun.apply(context, args)
            }, time)
        }
    }  */



    //const lastValue = useDebounce(formState, 3000);





   

 /*     debounce(onInputChange, 3000) */
 /*   console.log('ddd', lastValue)
   console.log('formState', formState) */







    // const onResetForm = () => {
    //     setFormState({})
    // }





    // const createValidators = () => {

    //     const formCheckedValues = {};


    //     for (const formField of Object.keys(formValidations)) {
    //         const [fn, errorMessage] = formValidations[formField];

    //         formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    //     }

    //     setFormValidation(formCheckedValues);
    // }
    



        // if(lastChar === ' ' && secondLastChar === ' '){

        // }else{
        //     setFormState({ ...formState, [name]: value.trimStart() })
        // }




   



    return {
        ...formState,
        formState,
        onInputChange,
        //onResetForm,
        noSpace,

       // ...formValidation,
       //isFormValid,
        isValidEmail, // retorna true or false, resive el email text input 
    }
}
