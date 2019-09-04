export default class Quote {
  constructor(data) {
    this.body = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return `
            <div class="col-12 text-center">
              <h4>${this.body}</h4>
              <h5>${this.author}</h5>
            </div>`
  }
}