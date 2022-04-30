import Marker from "./Marker.js";

//count of markers is the amount of available data
const MapFeature = (function () {
  function MapFeature(feature) {
    this.isInitialized = false;
    this.name = feature.name;
    this.label = feature.label;
    this.data = feature.data;
    this.markers = [];
    this.markerStyle = feature.markerStyle;
    this.status = feature.status;
    this.datasource = feature.datasource && feature.datasource.bind(this);
  }

  function setMap(map) {
    this.map = map;
  }
  /*
   * Consistently returns Promises for use with .then().
   */
  function loadData() {
    this.data = this.datasource();
    return this.data;
  }

  function initialize() {
    this.isInitialized = true;
    this.loadData();
    this.markers = this.loadMarkers();
  }

  function render(targetMap) {
    this.markers.forEach(function (marker) {
      marker.setMap(targetMap);
    });
  }

  function clone() {
    return new MapFeature(this.config);
  }

  function hide() {
    this.markers.forEach(function (marker) {
      marker.setMap(null);
    });
  }

  function getMarkers() {
    return this.markers;
  }

  function loadMarkers() {
      //console.log(this.data);
    return this.data.then((sources) => {
      let errors = [];

        // Get the dataset
        let item = sources;
        console.log(item);
        
        // Set the source for the marker URL
        //item.markerUrl = this.markerStyle;

        let marker = new Marker(item);
        let newMarker = marker.createMarker();
        console.log(newMarker);

        //Push the new marker to the marker array

        this.markers.push(newMarker);
    });
  }

  function getLabel() {
    return this.markerLabel;
  }

  var prototype = {
    loadData: loadData,
    loadMarkers: loadMarkers,
    getLabel: getLabel,
    setMap: setMap,
    getMarkers: getMarkers,
    render: render,
    hide: hide,
    initialize: initialize,
  };

  MapFeature.prototype = prototype;

  return MapFeature;
})();

export default MapFeature;
