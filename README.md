## Overview
A series of classes that make customization of a Google Maps API map simple and straightforward.

## What you need to implement this package

* A main.js file that imports MapApplication and Marker <br>
* A config.js file that contains a Google Maps API key <br>
* JSON data source (optional) <br>

## Map Marker Features

Create a config.js file in your project that contains a list of "features" objects to be passed to the MapApplication.js file in the package.
LoadFeatures and LoadFeatureData will be called from main to populate these objects with data and the loadMarkers function will generate the object markers on the map based on these objects.

Config should contain a const MapInit array that has multiple functions that fetch the json data and copies it to the "cache" Array at a designated index.
This array and all of its functions are passed through main to MapApplication.
The MapInit should look similar to the following:
```
const mapinit = [
  function() {
      cache["data1"] = fetch("WEB API URL HERE").then(resp => {
        return resp.json();
      });
    },
      function() {
      cache["data2"] = fetch("WEB API URL HERE").then(resp => {
        return resp.json();
      });
    },
];
```

Each feature object must contain a Data array and a datasource property that takes in a function designed by the user to pass the data from the Cache to the data array on the individual object. This function looks similar to the following:
```
function populateData()
{ 
  $example= cache["data1"];

  $objects = $example.then(examples => {
    return examples.map(example => {
      let newObject = new Object(example);
      return newObject;
    });
  });
  return $objects;
};
```
A feature object looks similar to the following:

```
const features = {
  object: {
    name: "objectName",
    label: "objectLabel",
    markerLabel: "O",
    data: [],
    markerStyle:
      "/markers/Example-Marker.png",
    datasource: populateData,
  },
  }
  ```
  
  ### Example Main.js
  
  ```
import MapApplication from './node_modules/custom-google-map/MapApplication.js';
import Marker from './node_modules/custom-google-map/markers/Marker';


// Instantiate the app and pass in the Config
const myMap = new MapApplication(config);

// Render the map to the page

// mapinit is the array of data functions contained in config.js
let init = myMap.init(mapinit).then(function () {

	//console.log("map loaded");

	// Set up the features and load in the data

	myMap.loadFeatures(features);
	myMap.loadFeatureData();

});
export default myMap;
```
  
