import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const affairsTitleStyle = {
    display : 'inline-block',
    width:"164px",
    height:"30px",

}
    const affairsPriorityStyle = {
        display : 'inline-block',
        width:"55px",
        height:"30px",
        background:"transparent",
    }
    
    return (
        <div>
            <div style={affairsPriorityStyle}>   </div>
            <div style={affairsTitleStyle}>{props.affair.name}</div>
            <div style={affairsPriorityStyle}> {props.affair.priority} </div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
