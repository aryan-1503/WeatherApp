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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\nconsole.log(\"Weather App\")\r\nconsole.log('hello')\r\nfetchCityData('mumbai');\r\n\r\nasync function displayCityData(){\r\n\r\n}\r\n\r\nasync function fetchCityData(city='vadodara'){\r\n    const API_KEY = '13b158d1de104d9eb9a105827233012'\r\n    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`\r\n    try {\r\n        const response = await fetch(apiUrl,{mode: 'cors'});\r\n        if (!response.ok){\r\n            throw new Error(\"Network error\");\r\n        }\r\n        const responseData = await response.json();\r\n        console.log(responseData);\r\n        (0,_website__WEBPACK_IMPORTED_MODULE_0__.displayData)(responseData.location.name,responseData.current.temp_c,responseData.location.region,responseData.location.country,responseData.location.lat,responseData.location.lon,responseData.location.tz_id,responseData.location.localtime,responseData.current.condition.icon,responseData.current.condition.text,responseData.current.feelslike_c,responseData.current.humidity,responseData.current.precip_mm,responseData.current.wind_kph,responseData.current.gust_kph,responseData.current.vis_km,responseData.current.wind_dir)\r\n    } catch (e){\r\n        alert(`Error : ${e.message}`);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const temp = responseData.current.temp_c;\r\n// const state = responseData.location.region;\r\n// const country = responseData.location.country;\r\n// const lat = responseData.location.lat;\r\n// const lon = responseData.location.lon;\r\n// const tz = responseData.location.tz_id;\r\n// const ct = responseData.location.localtime;\r\n// const imageUrl = responseData.current.condition.icon;\r\n// const currentText = responseData.current.condition.text;\r\n// const temp_fl = responseData.current.feelslike_c;\r\n// const humidity = responseData.current.humidity;\r\n// const rain = responseData.current.precip_mm;\r\n// const windSpeed = responseData.current.wind_kph;\r\n// const gustSpeed = responseData.current.gust_kph;\r\n// const visibility = responseData.current.vis_km;\r\n// const windDirection = responseData.current.wind_dir;\r\n//\r\n// const content = document.getElementById('content');\r\n// const allInfo = createAllInfo(city,temp,state,country,lat,lon,tz,ct,imageUrl,currentText,temp_fl,humidity,rain,windSpeed,gustSpeed,visibility,windDirection);\r\n// content.append(allInfo);\r\n// function createAllInfo(city,temp,state,country,lat,lon,tz,ct,imageUrl,currentText,temp_fl,humidity,rain,windSpeed,gustSpeed,visibility,windDirection){\r\n//     const locationInfo = document.createElement('div');\r\n//     locationInfo.classList.add('location-info');\r\n//\r\n//     const cityName = document.createElement('div');\r\n//     cityName.id = 'city-name';\r\n//     cityName.innerHTML = city;\r\n//     locationInfo.append(cityName)\r\n//\r\n//     const locInfo = document.createElement('div');\r\n//     locInfo.classList.add('loc-info');\r\n//\r\n//     const temperature = document.createElement('div');\r\n//     temperature.innerHTML = `Temperature : ${temp}℃<hr>`;\r\n//\r\n//     const region = document.createElement('div');\r\n//     region.innerHTML = `State : ${state}<hr>`;\r\n//\r\n//     const countryName = document.createElement('div');\r\n//     countryName.innerHTML = `Country : ${country}<hr>`;\r\n//\r\n//     const latitude = document.createElement('div');\r\n//     latitude.innerHTML = `Latitude : ${lat}<hr>`;\r\n//\r\n//     const longitude = document.createElement('div');\r\n//     longitude.innerHTML = `Longitude : ${lon}<hr>`;\r\n//\r\n//     const timeZone = document.createElement('div');\r\n//     timeZone.innerHTML = `Time Zone : ${tz}<hr>`;\r\n//\r\n//     const currentTime = document.createElement('div');\r\n//     currentTime.innerHTML = `Local Time : ${ct}<hr>`;\r\n//\r\n//     locInfo.append(temperature,region,countryName,latitude,longitude,timeZone,currentTime);\r\n//\r\n//     locationInfo.append(locInfo);\r\n//     allInfo.append(locationInfo)\r\n//\r\n//     const currentInfo = document.createElement('div');\r\n//     currentInfo.classList.add('current-info');\r\n//\r\n//     const img = document.createElement('div');\r\n//     img.classList.add('img');\r\n//\r\n//     const Image = document.createElement('img');\r\n//     Image.src = imageUrl;\r\n//\r\n//     const wthrType = document.createElement('div');\r\n//     wthrType.id = 'wthr-type';\r\n//     wthrType.innerHTML = currentText;\r\n//\r\n//     img.append(Image,wthrType);\r\n//     currentInfo.append(img);\r\n//\r\n//     const curInfo = document.createElement('div');\r\n//     curInfo.classList.add('loc-info');\r\n//\r\n//     const temperatureFeelsLike = document.createElement('div');\r\n//     temperatureFeelsLike.innerHTML = `Temperature(feels like) : ${temp_fl}℃<hr>`;\r\n//\r\n//     const humidityDiv = document.createElement('div');\r\n//     humidityDiv.innerHTML = `Humidity : ${humidity}<hr>`;\r\n//\r\n//     const rainDiv = document.createElement('div');\r\n//     rainDiv.innerHTML = `Rain: ${rain}<hr>`;\r\n//\r\n//     const windSpeedDiv = document.createElement('div');\r\n//     windSpeedDiv.innerHTML = `Wind Speed : ${windSpeed}<hr>`;\r\n//\r\n//     const gustSpeedDiv = document.createElement('div');\r\n//     gustSpeedDiv.innerHTML = `Gust Speed : ${gustSpeed}<hr>`;\r\n//\r\n//     const visibilityDiv = document.createElement('div');\r\n//     visibilityDiv.innerHTML = `Visibility : ${visibility}<hr>`;\r\n//\r\n//     const windDirectionDiv = document.createElement('div');\r\n//     windDirectionDiv.innerHTML = `Wind Direction : ${windDirection}<hr>`;\r\n//\r\n//     curInfo.append(temperatureFeelsLike,humidityDiv,rainDiv,windSpeedDiv,gustSpeedDiv,visibilityDiv);\r\n//     currentInfo.append(curInfo);\r\n//\r\n//     allInfo.append(currentInfo);\r\n//\r\n//     return allInfo;\r\n// }\r\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayData: () => (/* binding */ displayData)\n/* harmony export */ });\nfunction displayData(city,temp,region,country,lat,lon,tz,ct,imageUrl,currentText,temp_fl,hum,rain,windSpeed,gustSpeed,vis_km,windDir,windDeg){\r\n\r\n    const cityName = document.getElementById('city-name');\r\n    cityName.innerHTML = `${city}`;\r\n\r\n    const temperature = document.getElementById('temp');\r\n    temperature.innerHTML = `Temperature : ${temp}℃<hr>`;\r\n\r\n    const state = document.getElementById('region');\r\n    state.innerHTML = `Region : ${region}<hr>`\r\n\r\n    const countryName = document.getElementById('country');\r\n    countryName.innerHTML = `Country : ${country}<hr>`\r\n\r\n    const latitude = document.getElementById('lat');\r\n    latitude.innerHTML = `Latitude : ${lat}<hr>`\r\n\r\n    const longitude = document.getElementById('lon');\r\n    longitude.innerHTML = `Longitude : ${lon}<hr>`\r\n\r\n    const timeZone = document.getElementById('tz');\r\n    timeZone.innerHTML = `Time Zone : ${tz}<hr>`\r\n\r\n    const localTime = document.getElementById('ct');\r\n    localTime.innerHTML = `Current Time : ${ct}<hr>`\r\n\r\n    const image = document.getElementById('image-url');\r\n    image.src = imageUrl;\r\n\r\n    const wthrType = document.getElementById('wthr-type');\r\n    wthrType.innerHTML = currentText;\r\n\r\n    const temperatureFeelsLike = document.getElementById('temp_fl');\r\n    temperatureFeelsLike.innerHTML = `Temperature : ${temp}℃<hr>`;\r\n\r\n    const humidity = document.getElementById('humidity');\r\n    humidity.innerHTML = `Humidity : ${hum}%<hr>`\r\n\r\n    const precipitation = document.getElementById('rain');\r\n    precipitation.innerHTML = `Rainfall : ${rain}mm<hr>`\r\n\r\n    const windSpd = document.getElementById('wind-speed');\r\n    windSpd.innerHTML = `Wind Speed : ${windSpeed}km/h<hr>`\r\n\r\n    const gustSpd = document.getElementById('gust-speed');\r\n    gustSpd.innerHTML = `Gust Speed : ${gustSpeed}km/h<hr>`\r\n\r\n    const visibility = document.getElementById('visibility');\r\n    visibility.innerHTML = `Visibility : ${vis_km}km<hr>`\r\n\r\n    const windDirection = document.getElementById('wind-dir');\r\n    windDirection.innerHTML = `Wind Direction : ${windDir} (${windDeg}°)<hr>`\r\n}\r\n\n\n//# sourceURL=webpack://weatherapp/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;