import Marker from './Marker.js'

//count of markers is the amount of available data
class MapFeature {
	constructor(feature) {
		this.isInitialized = false
		this.name = feature.name
		this.label = feature.label
		this.data = feature.data
		this.markers = []
		this.markerStyle = feature.markerStyle
		this.status = feature.status
		this.datasource = feature.datasource && feature.datasource.bind(this)
	}

	setMap(map) {
		this.map = map
	}
	/*
	 * Consistently returns Promises for use with .then().
	 */
	loadData() {
		this.data = this.datasource()
		return this.data
	}

	initialize() {
		this.isInitialized = true
		this.loadData()
		this.markers = this.loadMarkers()
	}

	render(targetMap) {
		this.markers.forEach(function (marker) {
			marker.setMap(targetMap)
		})
	}

	clone() {
		return new MapFeature(this.config)
	}

	hide() {
		this.markers.forEach(function (marker) {
			marker.setMap(null)
		})
	}

	getMarkers() {
		return this.markers
	}
	setDatasource(source) {
		this.datasource = source
	}

	loadMarkers() {
		return this.data.then((sources) => {
			let errors = []

			for (let i = 0; i < sources.length; i++) {
				// Get the dataset
				let item = sources[i]
				let label = this.getLabel()
				if (item.position.lat == null) continue

				// Set the source for the marker URL
				item.markerUrl = this.markerStyle

				let marker = new Marker(item)
				let customMarker = marker.createMarker()

				//Push the new marker to the marker array

				this.markers.push(customMarker)
			}
		})
	}

	getLabel() {
		return this.markerLabel
	}
}

export default MapFeature
