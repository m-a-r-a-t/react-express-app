import React, { useState, useEffect } from 'react'
import Chat from './chat'
import io from 'socket.io-client'
import { Redirect } from 'react-router-dom'
import { messagesActionCreator } from './../../redux/reducers/messagesReducer'
import { roomActionCreator } from '../../redux/reducers/roomReducer'
let socket

let ChatContainer = ({ state, dispatch }) => {
  let [inputValue, setInputValue] = useState('')

  let onChangeMessage = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  useEffect(() => {
    socket = io('https://mysterious-reaches-73136.herokuapp.com/')
    let action =state.room? 'JOIN' : 'CREATE'
    socket.emit('join', { name: state.name,room:state.room,action}, ({ name, id, message },room) => {
      dispatch(messagesActionCreator(name, message, id))
      dispatch(roomActionCreator(room))
      dispatch(messagesActionCreator(name, `Room key : ${room}`, id))
    
    })

    socket.on('refreshMessages', ({ name, id, message }) => {
      dispatch(messagesActionCreator(name, message, id))
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [])

  useEffect(() => {}, [state.messages])

  let sendMessage = () => {
    socket.emit('sendMessage', { message: inputValue, name: state.name,room:state.room })
    setInputValue('')
  }

  if (!state.isAuth) return <Redirect to="/login" />
  return (
    <Chat
      onChangeMessage={onChangeMessage}
      inputValue={inputValue}
      messages={state.messages}
      sendMessage={sendMessage}
    />
  )
}

export default ChatContainer
