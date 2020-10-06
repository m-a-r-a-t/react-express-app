import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'
import Login from './components/login/login'
import Background from './components/particles'
import MyMenu from './components/menu/menu'
import ChatContainer from './components/chat/chatContainer'
import Join from './components/menu/joinToRoom/join'
import CreateRoom from './components/menu/createRoom/createRoom'


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Background />
        <Switch>
          <Route
            path={`/login`}
            render={() => (
              <Login isAuth={props.state.isAuth} dispatch={props.dispatch} />
            )}
          />

          <Route
            path={`/menu`}
            render={() => <MyMenu isAuth={props.state.isAuth} />}
          />

          <Route
            path={`/chat`}
            render={() =>
              props.state.isAuth ? (
                <ChatContainer dispatch={props.dispatch} state={props.state} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            path={`/join`}
            render={() =>
              props.state.isAuth ? (
                <Join dispatch={props.dispatch} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            path={`/createRoom`}
            render={() =>
              props.state.isAuth ? (
                <CreateRoom dispatch={props.dispatch} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            path={`/`}
            render={() =>
              props.state.isAuth ? null : <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
