import React from 'react'
import { Form, Input, Button } from 'antd'
import './login.scss'
import { Redirect } from 'react-router-dom'
import { nameActionCreator } from './../../redux/reducers/nameReducer'
const Login = ({ isAuth, dispatch }) => {
  const onFinish = (values) => {
    let json = JSON.stringify(values)
    fetch('/login', {
      body: json,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        dispatch(nameActionCreator(values.username))
        dispatch({ type: 'IS-AUTH' })
      }
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  if (isAuth) return <Redirect to="/menu" />
  return (
    <div className="Login">
      <h1>Log in</h1>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name="basic"
        initialValues={{
          remember: true,
        }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
