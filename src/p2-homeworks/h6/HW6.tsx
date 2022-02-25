import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value)) // setValue()
    }

    return (
        <div className={s.HW6Area}>
            <hr/>
            <h3>Homework 6</h3>

            {/*should work (должно работать)*/}
            <div className={s.DivWithCode}>
                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <SuperButton className={s.MyButtons} onClick={save}>save</SuperButton>
                <SuperButton className={s.MyButtons} onClick={restore}>restore</SuperButton>

                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperEditableSpan/>*/}
            </div>

            <hr/>
        </div>
    )
}

export default HW6
