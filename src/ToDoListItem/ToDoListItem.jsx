
import './ToDoListItem.css'

export default function ToDoListItem({todo, index}){

	// key todo, is defined in the parents component
	// when the component is being rendered, 
	// refer ToDoList, and look for the word todo

	const styles = {
		backgroundColor: index % 2 ? 'lavender' : 'plum'
	}
	return (
		<li 
			className={'ToDoListItem'}
			style={styles}>
			<div className='flex-ctr-ctr'>{index +1 }</div>
			{todo}
		</li>
	)
}