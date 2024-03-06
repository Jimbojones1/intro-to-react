import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import the ToDoList component
import ToDoList from "./ToDoList/ToDoList";
import SayHello from "./SayHello/SayHello";
import NewToDoForm from "./NewToDoForm/NewToDoForm";
function App() {
  // Show or hide our todoList

  const [backgroundColor, setBackgroundColor] = useState(false)

  const [showTodos, setShowTodos] = useState(false);
  const [todos, setTodos] = useState([
    "play guitar",
    "practice spanish"
  ]);

  // This function is being passed as a prop to NewToDoFOrm, 
  // in order to lift the state from the form to the App component 
  function handleAddTodo(){

  }


  function handeClick() {
    console.log("handle click is being called!");

    setShowTodos(!showTodos); // flipping whatever the current
    // value of the showTodos state is
  }

  function handleChangeBgColor(){
    setBackgroundColor(!backgroundColor) 
  }

  return (
    <div className="App" style={{backgroundColor: backgroundColor ? 'red' : 'yellow'}}>
      <button onClick={handleChangeBgColor}>Change Background Color</button>


      <h1>Todo list 1</h1>
      <NewToDoForm />
      <button onClick={handeClick}>
        {showTodos ? "hide todos" : "show todos"}
      </button>
      {showTodos ? <ToDoList toDoList={todos} /> : null}
    </div>
  );
}

export default App;
