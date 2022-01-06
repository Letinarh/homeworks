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
            <div >

                <div className={s.container}>
                    <div className ={s.avatarArea}>
                        <img className={s.avatar} src={props.avatar} alt={"avatar"}/>
                    </div>
                    <div className={s.messageArea}>
                        <div className={s.name}> {props.name} </div>
                        <p className={s.messageText}>Some text to message</p>

                    </div>
                    <div className={s.timeArea}> {props.time}</div>

                </div>




               {/* <div>
                    <span>
                        <figure>
                            <img className={s.avatar} src={props.avatar} alt={"avatar"}/>
                        </figure>
                    </span>
                    <span>
                        <div>
                             <div>{props.name}</div>
                             <div>
                                 <p>{props.message}</p>
                             </div>
                             <time>{props.time}</time>
                        </div>

                    </span>

                </div>*/}
            </div>


        </div>
    )
}

export default Message
