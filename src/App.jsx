import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import the ToDoList component
import ToDoList from './ToDoList/ToDoList'

function App() {
  
  const list = ['play guitar', 'practice spanish', 'clean room', 'wash dises', 'walk the dog', 'call dad']
  const listTwo = ['play mandolin', 'clean dishes', 'call mom']

  return (
    <div className='App'>
      <h1>Todo list 1</h1>
      <ToDoList toDoList={list} />
      <h1>Todo List 2</h1>
      <ToDoList toDoList={listTwo}/>
    </div>
  )
}

export default App
