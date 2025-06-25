
export function editExplorer(){


    const editedOp =({editMode, name, phone, idOperator, uid})=>{

        let arr = ls('operatorsArray')

        let editedOp = arr.map((el) => 
            (el.uid === uid ? {...editMode, name, phone, idOperator } : el)
        )

        return editedOp
    }


    const editedUnit =({editMode, descri, ne, idUnit, uid})=>{

        let arr = ls('unitsArray')

        let editedUnit = arr.map((el) => 
            (el.uid === uid ? {...editMode, descri, ne, idUnit } : el)
        )

        return editedUnit
    }


     
    return { 
        editedOp, 
        editedUnit 
    }   
     
 }








