import React from 'react'

type typeOfMessage = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}
const Message: React.FC<typeOfMessage> = ({
                                              avatar,
                                              name,
                                              message,
                                              time
                                          }) => {
    return (
        <div>

        </div>
    )
}

export default Message
