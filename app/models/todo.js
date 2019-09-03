export default class Todo {
    constructor(data) {
        this._id = data._id
        this.description = data.description
    }

    get Template() {

        return`
       
            <div class="card" style="background-color:rgb(255, 255, 255,.2)>
                <div class="card-body">
                <h1 class="card-title">${this.description}</h1>
                <button class="btn-sm" type="reset" onclick="app.controllers.todoController.removeTodo('${this._id}')">delete</button>
                </div>
            </div>

      `
    }
}