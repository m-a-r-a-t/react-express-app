import React, { useContext, useState } from 'react'
import './join.scss'
import { Button, Input ,Breadcrumb} from 'antd'
import { NavLink } from 'react-router-dom'
import { roomActionCreator } from '../../../redux/reducers/roomReducer'
const Join = ({dispatch}) => {
  let [inputValue,setInputValue]=useState('')
  let onChangeInput=(e)=>{
    e.preventDefault()
    setInputValue(e.target.value)

  }

 const onJoin=()=>{
  dispatch(roomActionCreator(inputValue))

  }

  return <div className="Join">
    <Breadcrumb>
      <Breadcrumb.Item>
          <NavLink  to="/menu">Menu</NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
          <NavLink to="/join" href="">Join</NavLink>
      </Breadcrumb.Item>
    </Breadcrumb>
    <div> 
       <Input onChange={onChangeInput} placeholder="Enter the room number"  value={inputValue}/>
    </div>
   <div>
     <NavLink to="/chat">
        <Button onClick={onJoin}  type="primary">Join </Button>
      </NavLink>
     </div>
  </div>
}

export default Join
