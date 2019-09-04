export default class Todo {
    constructor(data) {
        this._id = data._id
        this.description = data.description
        this.completed = data.completed
    }

    //FIXME add a input type checkbox, on change toggle todo status , 
        //use a turnary to add the 'checked' attribute if completed ${this.completed ? 'checked' : ''}
    get Template() {
        return`
            <div class="card" style="background-color:rgb(255, 255, 255,.2)>
                <div class="card-body">
                <h4 class="card-title">${this.description} <input type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"></h4>
                <button class="btn-sm" type="reset" onclick="app.controllers.todoController.removeTodo('${this._id}')">delete</button>
                </div>
            </div>
      `
    }
}

