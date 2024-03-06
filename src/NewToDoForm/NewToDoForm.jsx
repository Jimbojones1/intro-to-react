import { useState } from 'react'

export default function NewToDoForm({handleAddTodo}){

	const [todo, setTodo] = useState('')

	function handleChange(e){
		console.log(e.target.value)
		setTodo(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault(); // stops the browser from making http requests
		// you'll always have this line of code for onSubmit handleres

		// call the prop function to lift state to app
		handleAddTodo(todo); // todo is from our state
	}
	return (
		<form action="" onSubmit={handleSubmit}>
			<input type="text" value={todo} onChange={handleChange}/>
			<button>Create Todo</button>
		</form>
	)
}