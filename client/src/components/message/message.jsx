import React from 'react'
import './message.scss'
import { Tooltip, Comment } from 'antd'
import avatar from './../../assets/avatar.svg'
import { useEffect } from 'react'
import { useState } from 'react'

let Message = ({ name, message }) => {
  let date = () => {
    let date = new Date()
    return `${date.getHours()}:${date.getMinutes()}`
  }

  return (
    <div className="message">
      <Comment author={name} avatar={avatar} content={message} />
      <div className="date">{date()}</div>
    </div>
  )
}

export default Message
