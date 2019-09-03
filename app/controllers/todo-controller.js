import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let todo = _todoService.Todo
	let template = ''
	todo.forEach(t => {
		template += t.Template
	})
	document.getElementById("add-todo").innerHTML = template
}

//NOTE Keep an eye on your console for any of these errors
// function _drawError() {
// 	console.error('[TODO ERROR]', _todoService.TodoError)
// }


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		// _todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
		}
		form.reset()
		//TODO build the todo object from the data that comes into this method
		_todoService.addTodo(todo)
	}


	// //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		if (!todo) {
			alert('Todo not found')
			return false
		}
		_todoService.toggleTodoStatus(todoId)
		
	}


	// //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}
}