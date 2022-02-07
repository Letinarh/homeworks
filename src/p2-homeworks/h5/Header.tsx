import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from "./Routing";

function Header() {
    const classNameOfNavLink = (navData: {isActive:boolean})=>{
    return navData.isActive ? s.aciveLink : s.bn5
    };
    return (
        <div>
            <nav className={s.nawBar}>

                <NavLink
                    to={PATH.PRE_JUNIOR}
                    className={classNameOfNavLink}>
                    pre-junior
                </NavLink>
                <NavLink
                    to={PATH.JUNIOR}
                    className={classNameOfNavLink}>
                    junior
                </NavLink>
                <NavLink
                    to={PATH.JUNIOR_PLUSE}
                    className={classNameOfNavLink}>
                    junior-plus
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
