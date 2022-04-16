/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MapTheme.js":
/*!*************************!*\
  !*** ./src/MapTheme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MapTheme = (function () {\r\n    const CUSTOM_THEME = [\r\n      {\r\n        \"elementType\": \"geometry.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#5e5e5e\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#ccaa39\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"elementType\": \"labels.text.stroke\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#ccaa39\"\r\n          },\r\n          {\r\n            \"lightness\": -30\r\n          },\r\n          {\r\n            \"weight\": 0.5\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"landscape.natural\",\r\n        \"elementType\": \"labels.icon\",\r\n        \"stylers\": [\r\n          {\r\n            \"visibility\": \"off\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"poi\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n          {\r\n            \"visibility\": \"off\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"poi\",\r\n        \"elementType\": \"labels\",\r\n        \"stylers\": [\r\n          {\r\n            \"visibility\": \"off\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"poi\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#757575\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"poi.park\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#e5e5e5\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"poi.park\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#9e9e9e\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road\",\r\n        \"stylers\": [\r\n          {\r\n            \"visibility\": \"off\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#ffffff\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road\",\r\n        \"elementType\": \"geometry.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#dbdbdb\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road\",\r\n        \"elementType\": \"geometry.stroke\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#dbdbdb\"\r\n          },\r\n          {\r\n            \"weight\": 0.5\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road.arterial\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#757575\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road.highway\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#dadada\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road.highway\",\r\n        \"elementType\": \"geometry.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#fff942\"\r\n          },\r\n          {\r\n            \"weight\": 1\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road.highway\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#616161\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road.local\",\r\n        \"stylers\": [\r\n          {\r\n            \"visibility\": \"off\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"road.local\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#9e9e9e\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"transit.line\",\r\n        \"stylers\": [\r\n          {\r\n            \"visibility\": \"off\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"transit.line\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#e5e5e5\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"transit.station\",\r\n        \"stylers\": [\r\n          {\r\n            \"visibility\": \"off\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"transit.station\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#999494\"\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        \"featureType\": \"water\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n          {\r\n            \"color\": \"#2c364e\"\r\n          }\r\n        ]\r\n      }\r\n    ];\r\n\r\n\r\n    function MapTheme() { }\r\n\r\n    var prototype = {\r\n        getTheme: function () { return CUSTOM_THEME; }\r\n    };\r\n    MapTheme.prototype = prototype;\r\n\r\n\r\n    return MapTheme;\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapTheme);\n\n//# sourceURL=webpack://custom-google-map/./src/MapTheme.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/MapTheme.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;