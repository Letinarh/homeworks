import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from "./Routing";

function Header() {
    const setActive = ({isActive}:any)=>isActive ? s.acive : '';
    return (
        <div>
            <nav className={s.nawBar}>
                <NavLink to={PATH.PRE_JUNIOR} className={setActive}> pre-junior </NavLink>
                <NavLink to={PATH.JUNIOR} className={setActive}> junior </NavLink>
                <NavLink to={PATH.JUNIOR_PLUSE} className={setActive}> junior-plus </NavLink>
            </nav>
        </div>
    )
}

export default Header
