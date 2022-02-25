import React from 'react'
import Header from './Header'
import Routing from './Routing'
import {HashRouter} from "react-router-dom";
import s from "./Header.module.css"

function HW5() {
    return (
        <div className={s.HW5DIV}>
            <HashRouter>
                <Header/>
                <Routing/>
            </HashRouter>
        </div>
    )
}

export default HW5
