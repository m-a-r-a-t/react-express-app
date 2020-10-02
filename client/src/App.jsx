import React, { useState, useEffect } from 'react'
import './App.css'
import Chat from './components/chat'
import 'antd/dist/antd.css';
let App = () => {
  return (
    <div className="app">
      <Chat />
    </div>
  )
}

export default App
