import React from 'react'
import Message from "./Message";
import s from './Message.module.css'


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Vasiliy',
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa cum dolores eveniet expedita illo officia placeat quo   reiciendis repudiandae, sed sequi soluta tenetur vero voluptate,    voluptatibus! Cumque cupiditate provident tempore.",
    time: '22:00',
}

function HW1() {

    return (
        <div className={s.HW1}>
            <hr/>
            <h3>Homework 1</h3>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}/>



            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
