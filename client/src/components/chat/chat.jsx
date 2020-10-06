import './chat.scss'
import React from 'react'
import Message from './message/message'
import CreateMessage from './createMessage/createMessage'

let Chat = (props) => {
  return (
    <div className="container">
      <div className="messages-screen">
        {props.messages.map((item) => {
          return (
            <Message key={item.id}  message={item.message} name={item.name} />
          )
        })}
      </div>
      <CreateMessage
        onChangeMessage={props.onChangeMessage}
        inputValue={props.inputValue}
        sendMessage={props.sendMessage}
      />
    </div>
  )
}

export default Chat
