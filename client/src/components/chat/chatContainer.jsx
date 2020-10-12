import React, { useState, useEffect, useRef } from 'react'
import Chat from './chat'
import io from 'socket.io-client'
import { Redirect } from 'react-router-dom'
import { messagesActionCreator } from './../../redux/reducers/messagesReducer'
import { roomActionCreator } from '../../redux/reducers/roomReducer'
let socket

let ChatContainer = ({ state, dispatch }) => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }


  useEffect(() => {
    socket = io('https://mysterious-reaches-73136.herokuapp.com/')
    let action = state.room ? 'JOIN' : 'CREATE'
    socket.emit(
      'join',
      { name: state.name, room: state.room, action,length: state.messages},
      ({ name, id, message }, room) => {
        dispatch(messagesActionCreator(name, message, id))
        dispatch(roomActionCreator(room))
        dispatch(messagesActionCreator(name, `Room key : ${room}`, 2))
      }
    )

    socket.on('refreshMessages', ({ name, id, message }) => {
      dispatch(messagesActionCreator(name, message, id))
      scrollToBottom()
    })
  
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [])

  let sendMessage = (value) => {
    socket.emit('sendMessage', {
      message: value,
      name: state.name,
      room: state.room,
      length: state.messages,
    })
  }

  if (!state.isAuth) return <Redirect to="/login" />
  return (
    <Chat
      messagesEndRef={messagesEndRef}
      messages={state.messages}
      sendMessage={sendMessage}
    />
  )
}

export default ChatContainer
