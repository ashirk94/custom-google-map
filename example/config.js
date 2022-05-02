import MapTheme from "../MapTheme.js";

const mapTheme = new MapTheme();

const mapKey = Keys.mapKey;

// Starting/default position for the center of the map
const startingMapPosition = {
  latitude: 41.9028,
  longitude: 12.4964,
};

// Set up a MapConfiguration object
const config = {
  apiKey: mapKey,
  target: "map",
  mapOptions: {
    zoom: 6,
    styles: mapTheme.theme(),
    center: {
      lat: startingMapPosition.latitude,
      lng: startingMapPosition.longitude,
    },
    defaultMarkerStyles: {
      icon: {
        scaledSize: {
          height: 50,
          width: 50,
        },
      },
    },
  },
  enableHighAccuracy: true,
};

const cache = [];

const mapinit = [
  function () {
    cache[0] = fetch("http://localhost:5000/data").then((resp) => {
      return resp.json();
    });
  },
];

//custom datasources
const features = {
    example: {
    name: "example",
    type: "example",
    data: [],
    markerStyle: "./map-pin.png",
    datasource: null,
  }
};

export { config, mapinit, features };
