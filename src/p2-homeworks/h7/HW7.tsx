import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from "./HW7.module.css"

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>

            <h2>Homework 7</h2>
            <div className={s.MainArea}>
                {/*should work (должно работать)*/}
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                        className={s.selectClass}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>


                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperSelect/>*/}
                {/*<AlternativeSuperRadio/>*/}
            </div>
        </div>
    )
}

export default HW7
