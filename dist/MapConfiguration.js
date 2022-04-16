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

/***/ "./src/MapConfiguration.js":
/*!*********************************!*\
  !*** ./src/MapConfiguration.js ***!
  \*********************************/
/***/ (() => {

eval("const MapConfiguration = (function () {\r\n\r\n\r\n\tfunction MapConfiguration(initial) {\r\n\t\tthis.apiKey = initial.apiKey;\r\n\t\tthis.target = initial.target;\r\n\t\tthis.repository = initial.repository;\r\n\t\tthis.mapOptions = initial.mapOptions;\r\n\t\tthis.enableHighAccuracy = initial.enableHighAccuracy;\r\n\t}\r\n\r\n\r\n\tfunction getGoogleMapConfiguration() {\r\n\t\treturn {\r\n\t\t\tzoom: this.mapOptions.zoom,\r\n\t\t\tcenter: { lat: this.mapOptions.center.lat, lng: this.mapOptions.center.lng },\r\n\t\t\tstyles: this.mapOptions.styles,\r\n\t\t\tdisableDefaultUI: true\r\n\t\t};\r\n\t}\r\n\r\n\r\n\r\n\tMapConfiguration.prototype = {\r\n\t\tgetConfig: getGoogleMapConfiguration\r\n\t};\r\n\r\n\r\n\treturn MapConfiguration;\r\n})();\n\n//# sourceURL=webpack://custom-google-map/./src/MapConfiguration.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/MapConfiguration.js"]();
/******/ 	
/******/ })()
;