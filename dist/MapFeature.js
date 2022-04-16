/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MapFeature.js":
/*!***************************!*\
  !*** ./src/MapFeature.js ***!
  \***************************/
/***/ (() => {

eval("const MapFeature = (function () {\r\n\r\n\tfunction MapFeature(feature) {\r\n\t\tthis.isInitialized = false;\r\n\t\tthis.name = feature.name;\r\n\t\tthis.label = feature.label;\r\n\t\tthis.data = feature.data || [];\r\n\t\tthis.markers = [];\r\n\t\tthis.markerStyle = feature.markerStyle;\r\n\t\tthis.status = feature.status;\r\n\t\tthis.datasource = feature.datasource && feature.datasource.bind(this);\r\n\t}\r\n\r\n    function setMap(map) {\r\n        this.map = map;\r\n    }\r\n\t/*\r\n\t * Consistently returns Promises for use with .then().\r\n\t */\r\n\tfunction loadData() {\r\n\t\tthis.data = this.datasource();\r\n\t\treturn this.data;\r\n\t}\r\n\r\n\tfunction initialize() {\r\n\t\tthis.isInitialized = true;\r\n\t\tthis.loadData();\r\n\t\tthis.markers = this.loadMarkers();\r\n\t}\r\n\r\n\r\n\tfunction render(targetMap) {\r\n\t\tthis.markers.forEach(function (marker) { marker.setMap(targetMap); });\r\n\t}\r\n\r\n\tfunction clone() {\r\n\t\treturn new MapFeature(this.config)\r\n\t}\r\n\r\n\tfunction hide() {\r\n\t\tthis.markers.forEach(function (marker) {\r\n\t\t\tmarker.setMap(null);\r\n\t\t});\r\n\t}\r\n\r\n\r\n\tfunction getMarkers() {\r\n\t\treturn this.markers;\r\n\t}\r\n\r\n\tfunction loadMarkers(){\r\n        return this.data.then((sources) =>{\r\n\t\t\tlet errors =[];\r\n\r\n\t\t\tfor (let i = 0; i < sources.length; i++) {\r\n\t\t\t\t// Get the dataset\r\n\t\t\t\tlet item = sources[i];\r\n\t\t\t\tlet label = this.getLabel();\r\n\t\t\t\tif (item.position.lat == null) continue;\r\n\t\t\t\t\t\r\n\t\t\t\t// Set the source for the marker URL\r\n\t\t\t\titem.markerUrl = this.markerStyle;\r\n\r\n\r\n\t\t\t\tlet urlMarker = new UrlMarker(item);\r\n\t\t\t\tlet googleMarker = urlMarker.createMarker();\r\n\r\n\t\t\t\t\r\n\t\t\t\t//Push the new marker to the marker array\r\n\t\t\t\t \r\n\t\t\t\tthis.markers.push(googleMarker);\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tfunction getLabel()\r\n\t{\r\n\t\treturn this.markerLabel;\r\n\t}\r\n\r\n\r\n\tvar prototype = {\r\n\t\tloadData: loadData,\r\n\t\tloadMarkers: loadMarkers,\r\n\t\tgetLabel: getLabel,\r\n        setMap: setMap,\r\n\t\tgetMarkers: getMarkers,\r\n\t\trender: render,\r\n\t\thide: hide,\r\n\t\tinitialize: initialize\r\n\t};\r\n\r\n\tMapFeature.prototype = prototype;\r\n\r\n\treturn MapFeature;\r\n})();\n\n//# sourceURL=webpack://custom-google-map/./src/MapFeature.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/MapFeature.js"]();
/******/ 	
/******/ })()
;