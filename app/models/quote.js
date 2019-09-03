export default class Quote {
    constructor(data) {
        this.body = data.quote.body
        this.author = data.quote.author
    }

    get Template() {
        return `
          <div class="card" style="background-color:rgb(255, 255, 255,.2)">
            <div class="card-body">
               <h1 class="card-title">${this.body}</h1>
               <h3 class="card-text">${this.author}</h3>
            </div>
          </div>`
    }
}