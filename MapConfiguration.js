class MapConfiguration  {
	constructor(initial) {
		this.apiKey = initial.apiKey
		this.mapOptions = initial.mapOptions
		this.enableHighAccuracy = initial.enableHighAccuracy
	}

	getConfig() {
		return {
			zoom: this.mapOptions.zoom,
			center: {
				lat: this.mapOptions.center.lat,
				lng: this.mapOptions.center.lng
			},
			styles: this.mapOptions.styles,
			disableDefaultUI: true
		}
	}
}

export default MapConfiguration
