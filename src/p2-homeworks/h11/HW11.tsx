import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    type valueObserverType = (value: [number, number]) => void
    const valueObserver: valueObserverType = (value) => {
        if (value[0] < value[1]) {
            setValue1(value[0])
            setValue2(value[1])
        }

    }

    return (
        <div>
            <hr/>
            <h3>Homework 11</h3>
            {/*should work (должно работать)*/}
            <div className={s.secondRangeDiv}>


                <div>
                    <span>{value1}</span>
                    <SuperRange
                        onChangeRange={setValue1}
                        value={value1}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div>

                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={valueObserver}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span>{value1}</span>
                    <span> - {value2}</span>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default HW11
