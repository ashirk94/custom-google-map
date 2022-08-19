/**
 * Main entry point to initialize a MapApplication.
 *
 * This example uses a data source from a web api
 */
import { config, mapinit, features } from './config.js'
import MapApplication from '../MapApplication.js'
import MapFeature from '../MapFeature.js'

// Instantiate the app and pass in the mapConfig obj
window.myMap = new MapApplication(config)

//example feature
let feature = new MapFeature(features.example)

myMap.addFeature(feature)
// Render the map to the page
// After the map finished initializing, get data
let objects = () => {
	let objs = fetch('http://localhost:5000/data').then((resp) => {
		return resp.json()
	})
	return objs
}
myMap.init(mapinit).then(function () {
	feature.setDatasource(objects)

	// Load the feature's data.
	feature.loadData()

	// Load the feature's markers.
	feature.loadMarkers().then(function () {
		//console.log("Markers loaded");
		myMap.showFeature(feature.name)
	})
})

export default null
