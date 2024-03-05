import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import the ToDoList component
import ToDoList from './ToDoList/ToDoList'
import SayHello from './SayHello/SayHello'

function App() {
  
  const list = ['play guitar', 'practice spanish', 'clean room', 'wash dises', 'walk the dog', 'call dad']

  return (
    <div className='App'>
      <h1>Todo list 1</h1>
      <SayHello username={'kate'}/>
      <ToDoList toDoList={list} />
    
    </div>
  )
}

export default App
