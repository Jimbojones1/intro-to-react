
import './ToDoListItem.css'

export default function ToDoListItem({todo, age, name}){

	// key todo, is defined in the parents component
	// when the component is being rendered, 
	// refer ToDoList, and look for the word todo
	return (
		<li className='ToDoListItem'>{todo}</li>
	)
}