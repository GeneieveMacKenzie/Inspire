export default class Quote {
    constructor(data) {
        this.body = data.quote.body
        this.author = data.quote.author
    }

    get Template() {
        return `
          <div class="card" style="background-color:rgb(255, 255, 255,.6)">
            <div class="card-body">
               <h4 class="card-title">${this.body}</h4>
               <h5 class="card-text">${this.author}</h5>
            </div>
          </div>`
    }
}