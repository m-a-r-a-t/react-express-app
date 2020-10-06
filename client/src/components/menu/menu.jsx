import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import './menu.scss'

let MyMenu = ({ isAuth }) => {
  if (!isAuth) return <Redirect to="/login" />
  return (
    <div className="menu">
      <div className="changeOptionButtons">
      <NavLink to="/createRoom">
        <div>
           Create room
        </div>
        </NavLink>
      </div>
      
      <div className="changeOptionButtons">
      <NavLink to="/join">
        <div>
           Join to room
        </div>
        </NavLink>
      </div>
     
    </div>
  )
}

export default MyMenu
