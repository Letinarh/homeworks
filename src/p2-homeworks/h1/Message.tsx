import React from 'react'
import s from './Message.module.css'


type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>

                <div className={s.container}>
                    <div className ={s.avatarArea}>
                        <img className={s.avatar} src={props.avatar} alt={"avatar"}/>
                    </div>
                    <div className={s.messageArea}>
                        <div className={s.name}> {props.name} </div>
                        <p className={s.messageText}> {props.message}  </p>

                    </div>
                    <div className={s.timeArea}> {props.time}</div>

                </div>

        </div>
    )
}

export default Message
