import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/actions'

function Form() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")

  const likedList = useSelector(state => state.like)

  function handleSubmit(e) {
    e.preventDefault()
    const data = { username, age }
    dispatch({ type: ACTIONS.create, payload: data })
    setUsername("")
    setAge("")
  }

  return (
    <form onSubmit={handleSubmit} className='w-[500px] mx-auto mt-10 space-y-3'>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} size='large' type='text' allowClear placeholder='Enter your name' />
      <Input value={age} onChange={(e) => setAge(e.target.value)} size='large' type='number' allowClear placeholder='Enter your age' />
      <Button className='w-full' htmlType='submit' size='large' type='primary'>Subit</Button>
      </form>
  )
}
export default Form
