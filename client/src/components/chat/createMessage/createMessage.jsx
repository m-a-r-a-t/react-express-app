import React from 'react'

import { Button, Input } from 'antd'

const { TextArea } = Input
const CreateMessage = (props) => {
  return (
    <div className="bottom">
      <TextArea
        rows={1}
        placeholder="Введите сообщение"
        onChange={props.onChangeMessage}
        onKeyPress={(e) => (e.key === 'Enter' ? props.sendMessage() : null)}
        value={props.inputValue}
      />
      <Button onClick={props.sendMessage} type="primary">
        Отправить
      </Button>
    </div>
  )
}

export default CreateMessage
