import React, { useState } from 'react'
import './App.css'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }

  return (
    <div>
      <h1>USER DETAILS</h1>
      <AddUser onAddUser={addUserHandler} />
      <h3>USERS LIST</h3>
      <UsersList users={usersList} />
    </div>
  )
}

export default App
