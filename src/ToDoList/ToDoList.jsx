// Defining and exporting a component from this file
// to be rendered by another component
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import './ToDoList.css'
// ALL components must capitalized!
export default function ToDoList({toDoList}) {
  // The point of our components
  // is to return some UI (what the user sees on the screen)
  const todosLi = toDoList.map((item, idx) => {
	return (<ToDoListItem key={idx} todo={item} index={idx} />)
  })

  return (
    <ul className="ToDoList">
		{todosLi}
    </ul>
  );
}
