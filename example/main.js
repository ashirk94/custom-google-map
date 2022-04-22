/*
 * Main entry point to initialize a MapApplication.
 */

import MapApplication from '../MapApplication.js';
import UrlMarker from '../markers/UrlMarker.js';


// Instantiate the app and pass in the mapConfig obj
const myMap = new MapApplication(config);


// Render the map to the page
// After the map finished initializing, get and set the users 

let init = myMap.init(mapinit).then(function () {
	//console.log("map loaded");
	
	let Icon = new UrlMarker('./marker.png');
	myMap.render(Icon);

	// Set up the features and load in the data

	myMap.loadFeatures(features);
	myMap.loadFeatureData();

});

export default myMap;