import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./all.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)// stop
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())// setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }

    const stringTime = date?.toLocaleTimeString('en-GB') || <br/>//moment().format("hh:mm:ss") // fix with date
    const stringDate = date?.toLocaleDateString('en-GB') || <br/>//moment().format("MM Do YYYY") // fix with date

    return (
        <div className={s.container}>
            <div
                className={s.timeArea}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div className={s.dateArea}>
                    {stringDate}
                </div>
            ) : (
                <div className={s.dateArea}>
                    <br/>
                </div>
            )}
            <div className={s.buttonArea}>
                <SuperButton onClick={start} className={s.myButton}>start</SuperButton>
               <div></div>
                <SuperButton onClick={stop} className={s.myButton}>stop</SuperButton>
            </div>


        </div>
    )
}

export default Clock
