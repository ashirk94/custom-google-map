import MapConfiguration from './MapConfiguration.js'
import MapFeature from './MapFeature.js'

class MapApplication {
	constructor(conf) {
		this.config = new MapConfiguration(conf)
		this.features = [] // array of MapFeature objects.
		this.map = null
		this.defaultMarkerCoordinates = this.config.mapOptions.center
		this.defaultMarkerSize =
			this.config.mapOptions.defaultMarkerStyles.icon.scaledSize
		this.getFeature = this.getFeature.bind(this)
		this.cache = []
	}

	// Set up the maps script and initialize the map object
	// Return the Promise
	init(fn) {
		//load feature data after map
		let results
		if (!!fn) {
			results = Promise.all(
				fn.map((func) => {
					return func(this)
				})
			)
		}

		var apiKey = this.config.apiKey

		var p = new Promise(function (resolve) {
			let mapElement = document.createElement('script')
			mapElement.async = true
			mapElement.defer = true
			mapElement.src =
				'https://maps.googleapis.com/maps/api/js?key=' + apiKey
			mapElement.onload = resolve

			document.head.appendChild(mapElement)
		})

		var mapReady = p.then(() => {
			results.then(() => {
				this.map = new google.maps.Map(
					document.getElementById('map'),
					this.config.mapOptions
				)
			})
		})

		return mapReady
	}

	getCache(key) {
		return cache[key]
	}

	setCache(key, data) {
		cache[key] = data
	}

	// This gets called during startup
	// Loads in the data for each feature
	// Does not initialize all features, just prepares the data for each feature
	loadFeatureData() {
		for (var MapFeature in this.features) {
			// Set up the new feature
			let feature = this.features[MapFeature]
			//load markers after data, awaiting
			feature.loadData().then(() => feature.loadMarkers())
			feature.isInitialized = true
		}
	}
	addFeature(f) {
		f.setMap(this)
		this.features.push(f)
	}

	loadFeatures(config) {
		for (var name in config) {
			// Set up the new feature
			let f = new MapFeature(config[name])
			f.setMap(this)
			this.features.push(f)
		}
	}
	addFeature(f) {
		f.setMap(this)
		this.features.push(f)
	}

	// Google maps requires "lat" & "lng" fields
	setLocation(lat, lng) {
		let coords = null == lng ? lat : this.toCoordinates(lat, lng)

		return {
			lat: coords.latitude,
			lng: coords.longitude
		}
	}

	toCoordinates(lat, lng) {
		return {
			lat: lat,
			lng: lng
		}
	}

	// Pan will set the center point for the map
	pan(coordinates) {
		let pos = {
			lat: coordinates.latitude,
			lng: coordinates.longitude
		}

		// Set the new center position
		this.map.setCenter(pos)
	}

	isVisible(feature) {
		// find the feature
		let f = this.features.find((element) => element.name == feature)

		//console.log(f); feature check
		// check its map property
		if (f.markers[0].map !== null) {
			return true
		}
		return false
	}

	/**
	 * Render any number of map features, layers, geometry or markers.
	 */

	showFeature(name) {
		let feature = this.getFeature(name)

		if (!feature) {
			console.error('Could not locate Feature, ', name)
			return
		}
		feature.render(this.map)
	}
	hideFilters() {
		document.getElementById('filters').style.display = 'none'
	}
	showFilters() {
		document.getElementById('filters').style.display = 'block'
	}
	/**
	 * Hide keeps the data and the feature is still yet initialized.
	 */
	hideFeature(name) {
		let f = this.getFeature(name)

		if (!f) {
			console.error('Could not locate Feature, ', name)
			return
		}
		f.hide()
	}

	getFeature(name) {
		let feature = this.features.find((feature) => feature.name == name)
		return feature
	}

	// Hide multiple features, i.e., all of this map's features.
	hideFeatures() {
		// Set the map for each marker to null
		for (let i = 0; i < this.features.length; i++) {
			this.features[i].hide()
		}
	}

	getRoot() {
		return document.getElementById(this.config.get('target'))
	}

	// This will work through an array of coordinates and recenter the map to the coordinates
	// Meant to replicate a users moving position
	replay(positions) {
		// Set up a counter and a timer to replicate user movements
		let counter = 0
		let replayTimer = setInterval(function () {
			// Test to see if the end of the array has been met
			if (counter == positions.length - 1) {
				// Clear the timer, console log needed messages, and exit the function
				clearInterval(replayTimer)
				console.log(counter)
				console.log('User position tracking has finished')
				return
			}

			// Close any currently open userInfoWindows, pan to the new position
			// Console.log the counter to keep track of positions and increment the counter
			window.userInfoWindow.close()
			pan(positions[counter])
			console.log(counter)
			counter++
		}, 5000)
	}

	// Testing render here using new marker classes
	render(markers) {
		markers = Array.isArray(markers) ? markers : [markers]

		for (let i = 0; i < markers.length; i++) {
			let marker = markers[i]
			if (null == marker.position.lat && null == marker.position.lng) {
				marker.setPosition(this.defaultMarkerCoordinates)
			}
			marker.setIconSize(this.defaultMarkerSize)
			marker.createMarker().setMap(this.map)
		}
	}
}

export default MapApplication
