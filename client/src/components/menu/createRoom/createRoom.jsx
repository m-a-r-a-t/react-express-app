import React, { useContext } from 'react'
import './createRoom.scss'

import { Button, Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import { roomActionCreator } from '../../../redux/reducers/roomReducer'
const CreateRoom = ({ dispatch }) => {
  return (
    <div className="Join">
      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink to="/menu">Menu</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to="/createRoom" href="">
            Create room
          </NavLink>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <Button  type="primary">
         <NavLink to="/chat"> Create room</NavLink>
        </Button>
      </div>
    </div>
  )
}

export default CreateRoom
