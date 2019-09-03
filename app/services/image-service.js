import Image from "../Models/image.js"

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 5000
});

let _state = {
	images: {}
}

let _subscribers = {
	images: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}


//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	get Images() {
		return _state.images
	}
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		imgApi.get()
			.then(res => {
			_setState('images', new Image(res.data))
		})
	}

}
