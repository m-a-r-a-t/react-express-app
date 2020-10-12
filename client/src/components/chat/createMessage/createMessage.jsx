import React, { useState } from 'react'
import { Button, Input } from 'antd'

const CreateMessage = (props) => {
  let [inputValue, setInputValue] = useState('')

  let onChangeMessage = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const onSendMessage = () => {
    props.sendMessage(inputValue)
    setInputValue('')
  }

  return (
    <div className="bottom">
      <Input
        
        placeholder="Введите сообщение"
        onChange={onChangeMessage}
        onKeyPress={(e) => (e.key === 'Enter' ? onSendMessage() : null)}
        value={inputValue}
      />
      <Button onClick={onSendMessage} type="primary">
        Отправить
      </Button>
    </div>
  )
}

export default CreateMessage
