//NOTE your service is all set up for the observer pattern but there is still work to be done
import Todo from "../models/todo.js";


// @ts-ignore
const _todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Gen/todos',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {

	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos.map(t => new Todo(t))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		_todoApi.get()
			.then(res => {
				_setState('todos', res.data)
			})
			.catch(err => _setState('error', err))
	}

	addTodo(todo) {
		_todoApi.post('', todo)
			.then(res => {
				_state.todos.push(new Todo(res.data.data.description))
				_setState('todos', _state.todos)
			})
			.catch(err => _setState('error', err))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				debugger
				this.getTodos()
				_setState('todos', _state.todos)
				//TODO do you care about this data? or should you go get something else?

			})
			.catch(err => _setState('error', err))
	}

	removeTodo(todoId) {
		_todoApi.delete(todoId)
			.then(res => { 
				let index = _state.todos.findIndex(todo => todo._id == todoId)
				_state.todos.splice(index, 1)
				_setState('todos', _state.todos)
			})

	}

}
