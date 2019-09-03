import WeatherService from "../services/weather-service.js";

var _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function _drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)

	document.getElementById('weather').innerHTML = _weatherService.Weather.Template
}
// Subtract 273.15 from your Kelvin temperature
// Multiply this number by 1.8 (this is the decimal value of 9/5).
// Add 32 to this number.


export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', _drawWeather)
		_weatherService.getWeather()
	}

}
