import React from 'react'
import './chat.scss'
import { Button, Input } from 'antd'
import Message from './message/message'
import { useState } from 'react'

const { TextArea } = Input
let Chat = () => {
  let [messages, setMessages] = useState([
    { name: 'Марат', id: 1, message: 'Hello, how old are you ?' },
    { name: 'Даша', id: 2, message: 'Hello' },
  ])

  let [inputValue, setInputValue] = useState()
  let onChangeMessage = (e) => {
    setInputValue(e.target.value)
  }

  let sendMessage = (key) => {
    if (key === '') return
    setMessages(() => {
      return [
        ...messages,
        {
          name: 'Марат',
          id: messages.length + 1,
          message: inputValue,
        },
      ]
    })
    setInputValue('')
  }

  return (
    <div className="container">
      <div className="messages-screen">
        {messages.map((item) => {
          return (
            <Message key={item.id} message={item.message} name={item.name} />
          )
        })}
      </div>
      <div className="bottom">
        <TextArea
          rows={1}
          placeholder="Введите сообщение"
          onChange={onChangeMessage}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e.key) : null)}
          value={inputValue}
        />
        <Button onClick={sendMessage} type="primary">
          Отправить
        </Button>
      </div>
    </div>
  )
}

export default Chat
