import { DeleteOutlined, EditOutlined, LikeOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/actions'

// useSelector(state => state) => initialState
function List() {
    const [updateModal, setUpdateModal] = useState(false)
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.todo)

    // update part
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")

    const [updateAge, setUpdateAge] = useState(null)
    function handleUpdateBtnClick(age) {
        setUpdateModal(true)
        setUpdateAge(age)
        const findUpdateUser = usersList.find(item => item.age == age)
        setUsername(findUpdateUser.username)
        setAge(findUpdateUser.age)
    }

    function handleUpdateUser() {
        const data = {username, age}
        dispatch({type:ACTIONS.update, payload:{newData:data, age:updateAge}})
        setUpdateModal(false)
    }
    // update end

    // Like start
    function handleLikeBtnClick(item) {
        dispatch({type:ACTIONS.like, payload:item})
    }
    // Like end

    LocalStorage.setItem("todos", JSON.stringify(usersList))
    return (
        <>
         <ul className='w-[500px] space-y-4 mx-auto  mt-10'>
             {userList?.map((item,index) =>(
                 <li key={index} className='p-4 bg-blue-100 flex items-center justify-between border-[1px] border-blue-400 rounded-md'>
                     <div className='flex items-center space-x-1'>
                         <span className='text-[20px] font-medium'>{index + 1}</span>
                         <strong className='text-[20px] font-medium'>{item.username} - {item.age}</strong>
                     </div>
                     <div className='flex items-center space-x-2'>
                         <Button onClick={() => dispatch({type:ACTIONS.delete,payload:item.age})} style={{borderColor: "red"}}>
                             <DeleteOutlined/>
                         </Button>
                         <Button onClick={() => handleUpdateBtnClick(item.age)} style={{borderColor: "blue"}}>
                             <EditOutlined/>
                         </Button>
                         <Button onClick={() => handleLikeBtnClick(item)} style={{borderColor: "cyan"}}>
                             <LikeOutlined/>
                         </Button>
                         <Button style={{borderColor: "green"}}>
                             <MoreOutlined/>
                         </Button>
                     </div>
                 </li>
             ))}
         </ul>
         <Modal title='Update User' open={updateModal} onCancel={() => setUpdateModal(false)} onOk={handleUpdateUser}>
             <Input className='mb-3' value={username} onChange={(e) => setUsername(e.target.value)} size='large' type='text' allowClear placeholder='Enter Your Name...' />
             <Input className='mb-3' value={age} onChange={(e) => setAge(e.target.value)} size='large' type='number' allowClear placeholder='Enter Your Age...' />
         </Modal>
        </>
       )
     }
     
     export default List
  