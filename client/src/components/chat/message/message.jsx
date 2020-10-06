import React from 'react'
import './message.scss'
import { Tooltip, Comment } from 'antd'
import avatar from './../../../assets/avatar.svg'

let Message = ({ name, message }) => {
  let date = () => {
    let date = new Date()
    return `${date.getHours()}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }`
  }
  return (
    <div className="message">
      <Comment style={name==='SERVER'?{color:'red'}:{}} author={name} avatar={avatar} content={message} />
      <div className="date">{date()}</div>
    </div>
  )
}

export default Message
