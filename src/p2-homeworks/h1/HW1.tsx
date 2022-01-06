import React from 'react'
import Message from "./Message";


const messageData = {
    avatar: 'https://i.pinimg.com/originals/ff/ae/4e/ffae4e028ebe60d38913eb8c8f2255ec.png',
    name: 'Vasiliy',
    message: "Hello, people!  I'm learning TypeScript. And enjoy that",
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}/>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
