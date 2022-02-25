import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './Greeting.module.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser: UserType = {_id: v1(), name}
        setUsers([newUser, ...users]) // need to fix
    }

    return (
        <div >
            <hr/>

            <h3> Homework 3</h3>
            <div className={s.cssSelector}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
                {/*should work (должно работать)*/}
            </div>




            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3