
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


    const editedAss =(EL)=>{

        let arr = ls('assignationsArray')

        let editedAss = arr.map((el) => 
            (el.uid === EL.uid ? EL : el)
        )

        return editedAss
    }

    const editedRutas =(EL)=>{

        let arr = ls('rutasArray')

        let editedRutas = arr.map((el) => 
            (el.uid === EL.uid ? EL : el)
        )

        return editedRutas
    }


     
    return { 
        editedOp, 
        editedUnit,
        editedAss,
        editedRutas 
    }   
     
 }








