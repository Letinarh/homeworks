import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    type valueObserverType = (value: [number, number]) => void
    const valueObserver: valueObserverType = (value) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            <h3>Homework 11</h3>
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={valueObserver}
                        // сделать так чтоб value1 и value2 изменялось
                    />

                <span> - {value2}</span>
            </div>

            <hr/>
        </div>
    )
}

export default HW11
