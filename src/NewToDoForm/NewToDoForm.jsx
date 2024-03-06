import { useState } from 'react'

export default function NewToDoForm(){

	const [todo, setTodo] = useState('')

	function handleChange(e){
		console.log(e.target.value)
		setTodo(e.target.value)
	}

	return (
		<form action="">
			<input type="text" value={todo} onChange={handleChange}/>
			<button>Create Todo</button>
		</form>
	)
}