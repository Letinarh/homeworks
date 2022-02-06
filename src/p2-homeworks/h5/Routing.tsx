import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from './pages/Junior';
import Error404 from "./pages/Error404";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUSE: '/junior-pluse',
    // add paths
}

function Routing() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUSE} element={<JuniorPlus/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    )

}
    export default Routing