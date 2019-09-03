export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    this.city = data.name
    this.kelvin = Math.round((data.main.temp - 273) * 9 / 5 + 32) + '&deg;' + 'F'
  }

  get Template() {
    return `
      <div class="card" style="background-color:rgb(255, 255, 255,.6)" id="add">
        <div class="card-body">
           <h1 class="card-title">${this.city}</h1>
           <h3 class="card-text">${this.kelvin}</h3>
        </div>
      </div>`
  }
}