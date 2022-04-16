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

/***/ "./src/custom.js":
/*!***********************!*\
  !*** ./src/custom.js ***!
  \***********************/
/***/ (() => {

eval("\r\n// Permanent marker for the OCDLA office location in Eugene, OR\r\nfunction initOCDLAHome() {\r\n    let iconUrl = 'https://ocdla.s3-us-west-2.amazonaws.com/ocdla-logo-soft-marker-black.svg';\r\n\r\n    marker = new google.maps.Marker({\r\n        animation: google.maps.Animation.DROP,\r\n        position: {\r\n            lat: 44.044570,\r\n            lng: -123.090780\r\n        },\r\n        map: myApp.getMap(),\r\n        icon: {\r\n            url: iconUrl,\r\n            scaledSize: new google.maps.Size(55, 70)\r\n        }\r\n    });\r\n}\r\n\r\n\r\n\r\n// Recenter map to the users position\r\nfunction panToUserPosition() {\r\n    // Get the users coordinates and pan to that position\r\n    let position = user.getCoordinates();\r\n    myApp.pan(position);\r\n\r\n    // Info Window to show position\r\n    window.userInfoWindow = new google.maps.InfoWindow({\r\n        content: \"User Found.\",\r\n        position: {\r\n            lat: position.latitude,\r\n            lng: position.longitude,\r\n        },\r\n    });\r\n    // Open the info window\r\n    window.userInfoWindow.open(myApp.getMap());\r\n    myApp.getMap().setZoom(16);\r\n}\r\n\r\n// Example to show a users moving position\r\n// Setting up an array of 10 coordinates\r\n// This is just for testing, nothing to fancy here\r\nfunction movingUserTest() {\r\n    let positions = [];\r\n    let lat = 45.633331;\r\n    let lng = -122.599998;\r\n    let randomNum;\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n        randomNum = Math.random();\r\n        positions[i] = {\r\n            latitude: lat + randomNum,\r\n            longitude: lng + randomNum,\r\n        };\r\n    }\r\n    // Replay takes an array of coordinates\r\n    myApp.replay(positions);\r\n}\n\n//# sourceURL=webpack://custom-google-map/./src/custom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/custom.js"]();
/******/ 	
/******/ })()
;