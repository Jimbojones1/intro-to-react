// Defining and exporting a component from this file
// to be rendered by another component
import ToDoListItem from "../ToDoListItem/ToDoListItem";
// ALL components must capitalized!
export default function ToDoList() {
  // The point of our components
  // is to return some UI (what the user sees on the screen)
  return (
    <ul>
		<ToDoListItem />
		<ToDoListItem />
		<ToDoListItem />
    </ul>
  );
}
