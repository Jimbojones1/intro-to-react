


export default function ToDoListItem(props){
	// key todo, is defined in the parents component
	// when the component is being rendered, 
	// refer ToDoList, and look for the word todo
	return (
		<li>{props.todo}</li>
	)
}