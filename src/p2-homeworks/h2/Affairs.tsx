import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // --- need to fix any
    data: Array<AffairType>
    setFilter: (priority:FilterType)=>void
    deleteAffairCallback: (_id:number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // --- should work
            key={a._id} //--- кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
const styleHelperButtons = {
    display : 'inline-block',
    width:"50px",
    height:"10px",
}
    const styleHelperButtons2 = {
        width: "55px",
        margin:"4px"
    }
    const setAll = () => {props.setFilter("all")}// need to fix
    const setHigh = () => {props.setFilter("high")}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}
    

    return (
        <div>

            {mappedAffairs}
            <div style={styleHelperButtons}></div>
            <button style={styleHelperButtons2} onClick={setAll}>All</button>
            <button style={styleHelperButtons2} onClick={setHigh}>High</button>
            <button style={styleHelperButtons2} onClick={setMiddle}>Middle</button>
            <button style={styleHelperButtons2} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
