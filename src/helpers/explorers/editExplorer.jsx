


export function editExplorer() {

    const editEntity = (entityArrayName) => (EL) => {
        let arr = ls(entityArrayName)
        return arr.map((el) => (el.uid === EL.uid ? EL : el))
    }

    return {
        editedOp: editEntity('operatorsArray'),
        editedUnit: editEntity('unitsArray'),
        editedAss: editEntity('assignationsArray'),
        editedRutas: editEntity('rutasArray'),
    }
}







                 