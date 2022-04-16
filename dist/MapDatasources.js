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

/***/ "./src/MapDatasources.js":
/*!*******************************!*\
  !*** ./src/MapDatasources.js ***!
  \*******************************/
/***/ (() => {

eval("const MapDatasources = (function () {\r\n\r\n\tlet positions = {\r\n\t\tlifetime: {\r\n\t\t\tlat: 44.719750,\r\n\t\t\tlng: -123.918090\r\n\t\t},\r\n\t\thonored: {\r\n\t\t\tlat: 44.939530,\r\n\t\t\tlng: -123.040300\r\n\t\t},\r\n\t\tregular: {\r\n\t\t\tlat: 44.939530,\r\n\t\t\tlng: -123.040300\r\n\t\t},\r\n\t\tsustaining: {\r\n\t\t\tlat: 44.059810,\r\n\t\t\tlng: -121.310770\r\n\t\t},\r\n\t\tcourts: {\r\n\t\t\tlat: 44.95175,\r\n\t\t\tlng: -123.035270\r\n\t\t},\r\n\t\tW: {\r\n\t\t\tlat: 45.504793,\r\n\t\t\tlng: -122.628375\r\n\t\t},\r\n\t\tO: {\r\n\t\t\tlat: 44.0472607,\r\n\t\t\tlng: -123.0909169\r\n\t\t},\r\n\t\tD: {\r\n\t\t\tlat: 45.518927,\r\n\t\t\tlng: -122.677148\r\n\t\t}\r\n\t};\r\n\r\n\t/**\r\n\t * Using a starting point, return a pseudo-randomized point \r\n\t *  within a given radius of `fromPoint`.\r\n\t * \tNot currently being used\r\n\t */\r\n\tfunction randomizeCoordinates(fromPoint, radius) {\r\n\t\tradius = radius || 2.5;\r\n\t\tlet returnedPosition = null;\r\n\r\n\t\tvar pt_angle = Math.random() * 2 * Math.PI;\r\n\t\tvar pt_radius_sq = Math.random() * radius * radius;\r\n\t\tvar pt_x = Math.sqrt(pt_radius_sq) * Math.cos(pt_angle);\r\n\t\tvar pt_y = Math.sqrt(pt_radius_sq) * Math.sin(pt_angle);\r\n\r\n\t\treturn {\r\n\t\t\tlat: fromPoint.lat + pt_x / 2,\r\n\t\t\tlng: fromPoint.lng + pt_y / 2,\r\n\t\t};\r\n\t}\r\n\r\n\t// @todo - make some notes about the shape of this Contact object.\r\n\t// c.Member_Type__c\r\n\t// c.Name, c.MailingXXX, c.Phone, c.Email, c.MailingLatitude, c.MailingLongitude\r\n\tlet forceMemberData = new Callout(function (feature) {\r\n\t\tvar callout = ForceRemoting.invokeAction(null);\r\n\t\t$contacts = callout(\"MapController\", \"getMembers\", memberTypes[label]);\r\n\t\tconsole.log($contacts);\r\n\r\n\t\t// Contacts 'cause simple reminder this is from the Salesforce Contact object.\r\n\t\t$members = $contacts.then(function (contacts) {\r\n\t\t\treturn contacts.map(function (contact) {\r\n\t\t\t\tcontact.position = { lat: contact.MailingLatitude, lng: contact.MailingLongitude };\r\n\t\t\t\treturn new Member(contact);\r\n\t\t\t});\r\n\t\t});\r\n\r\n\t\treturn $members;\r\n\t});\r\n\r\n\r\n\r\n\tlet mockMemberData = new Callout(function (feature) {\r\n\t\tlet members = [];\r\n\t\tlet start = positions[feature.name];\r\n\r\n\t\tconsole.log(\"Executing callout for feature: \", feature);\r\n\r\n\t\tfor (let i = 0; i < feature.count; i++) {\r\n\t\t\t// Add a new member to the array\r\n\t\t\tvar lat, lng;\r\n\r\n\t\t\t({ lat, lng } = randomizeCoordinates(start));\r\n\r\n\t\t\tlet contact = {\r\n\t\t\t\tMember_Type__c: \"R\",\r\n\t\t\t\tName: \"John Doe\",\r\n\t\t\t\tEmail: \"jdoe@gmail.com\",\r\n\t\t\t\tPhone: \"5412288481\",\r\n\t\t\t\tMailingAddress: {\r\n\t\t\t\t\tstreet: \"1234 Sandy Ln.\",\r\n\t\t\t\t\tcity: \"Eugene\",\r\n\t\t\t\t\tstate: \"Oregon\",\r\n\t\t\t\t\tcountry: \"United States\",\r\n\t\t\t\t\tpostalCode: \"97401\"\r\n\t\t\t\t},\r\n\t\t\t\tMailingLatitude: lat,\r\n\t\t\t\tMailingLongitude: lng\r\n\t\t\t};\r\n\r\n\t\t\tmembers[i] = new Member(contact);\r\n\t\t}\r\n\r\n\t\treturn members;\r\n\t});\r\n\r\n\r\n\r\n\tlet mockLocationData = new Callout(function (feature) {\r\n\t\tlet locations = [];\r\n\t\tlet position = positions[\"courts\"];\r\n\r\n\t\tfor (let i = 0; i < feature.count; i++) {\r\n\t\t\t// Add a new member to the array\r\n\t\t\tlocations[i] = new Location(randomizeCoordinates(position));\r\n\t\t}\r\n\r\n\t\treturn locations;\r\n\t});\r\n\r\n\r\n\r\n\tfunction MapDatasources() { }\r\n\r\n\tMapDatasources.index = function (fn) {\r\n\t\tlet repo = new Repository();\r\n\t\trepo.add(\"mockLocationData\", mockLocationData);\r\n\t\trepo.add(\"mockMemberData\", mockMemberData);\r\n\t\trepo.add(\"forceMemberData\", forceMemberData);\r\n\t\t//repo.add(\"phpMemberData\", phpMemberData);\r\n\r\n\t\tif (!!fn) repo.setIndex(fn);\r\n\r\n\t\treturn repo;\r\n\t};\r\n\r\n\treturn MapDatasources;\r\n})();\n\n//# sourceURL=webpack://custom-google-map/./src/MapDatasources.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/MapDatasources.js"]();
/******/ 	
/******/ })()
;