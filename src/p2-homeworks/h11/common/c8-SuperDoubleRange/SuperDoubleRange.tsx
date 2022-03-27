import Slider from '@material-ui/core/Slider'
import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}
type value1Type = [number, number]

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    const onChangeCallback = (event: ChangeEvent<{}>, value: number | number[]) => {
        //проверяем, в Пропсах 1 число или массив чисел
        let value1: value1Type
        if (typeof(value) === "number") {
            console.log("value is number")
        }else if (typeof(value) === "object") {
            value1 = [value[0],value[1]]
        }

        // @ts-ignore
        onChangeRange && onChangeRange(value1)

    }

    return (
        <>
            <Slider
                // getAriaLabel={() => 'Second slider'}
                value={value}
                onChange={onChangeCallback}
                //valueLabelDisplay="off"
                // getAriaValueText={"valuetext"}
            />
        </>
    )
}

export default SuperDoubleRange
