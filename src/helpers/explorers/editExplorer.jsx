
export function editExplorer(){


    const editedOp =(EL)=>{

        let arr = ls('operatorsArray')

        let editedOp = arr.map(
            (el) => (el.uid === EL.uid ? EL : el)
        )

        return editedOp
    }


    const editedUnit =(EL)=>{



        let arr = ls('unitsArray')

        let editedUnit = arr.map(
            (el) => (el.uid === EL.uid ? EL : el)
        )
        
        return editedUnit
    }


    const editedAss =({editMode, name, phone, idAss, uid})=>{

        let arr = ls('assignationsArray')

        let editedAss = arr.map((el) => 
            (el.uid === uid ? {...editMode, name, phone, idAss } : el)
        )

        return editedAss
    }


     
    return { 
        editedOp, 
        editedUnit,
        editedAss 
    }   
     
 }








