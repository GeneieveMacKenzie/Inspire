export default class Todo {
    constructor(data) {
        this._id = data.Id
        this.description = data.description
    }

    get Template() {

        return`
        <div class="card" style="background-color:rgb(255, 255, 255,.2)">
            <div class="card-body">
               <h1 class="card-title">${this.description}</h1>
            </div>
          </div>
      `






        


        
    }
}