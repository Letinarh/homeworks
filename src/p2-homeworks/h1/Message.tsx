import React from 'react'



type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
function Message (props: MessagePropsType) {
    return (
        <div>
            <section className="chat">
                <div className="message message--user-1">
                    <time className="message__time">{props.time}</time>
                    <figure className="message__author-pic">
                        <img src={props.avatar} alt={"avatar"}/>
                    </figure>
                    <div className="message__text">
                        <p>{props.message}</p>
                    </div>
                    <div>{props.name}</div>
                </div>
            </section>




        </div>
    )
}

export default Message
