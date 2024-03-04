import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import the ToDoList component
import ToDoList from './ToDoList/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>React To-Do</h1>
      <ToDoList />
    </div>
  )
}

export default App
