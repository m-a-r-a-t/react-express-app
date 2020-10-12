import './chat.scss'
import React, { useEffect } from 'react'
import Message from './message/message'
import CreateMessage from './createMessage/createMessage'

let Chat = (props) => {
  return (
    <div className="container">
      <div className="messages-screen">
        {props.messages.map((item) => {
          return (
            <Message key={item.id} message={item.message} name={item.name} />
          )
        })}
        <div ref={props.messagesEndRef}></div>
      </div>
      <CreateMessage sendMessage={props.sendMessage} />
    </div>
  )
}

export default Chat
