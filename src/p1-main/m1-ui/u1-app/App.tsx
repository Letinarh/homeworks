import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5/HW5";


function App() {
    return (
        <div className={s.App}>
            <div className={s.firstDiv}>
                <h2>React homeworks:</h2>
            </div>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>
            {/*<HW6/>*/}
            {/*<HW7/>*/}
            {/*<HW8/>*/}
            {/*<HW9/>*/}
            {/*<HW10/>*/}
            {/*<HW11/>*/}
            {/*<HW12/>*/}

        </div>
    )
}

export default App