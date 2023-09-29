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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst section = () => {\n  const contactSect = document.createElement(\"section\");\n  contactSect.classList.add(\"contact-section\");\n\n  const title = document.createElement(\"h1\");\n  const subTitleOne = document.createElement(\"h6\");\n  const subTitleTwo = document.createElement(\"h6\");\n  const subTitleThree = document.createElement(\"h6\");\n\n  title.textContent = \"We would love to hear from you!\";\n  subTitleOne.textContent = \"Phone: 555.555.1234\";\n  subTitleTwo.textContent = \"Email: info@theopentable.com\";\n  subTitleThree.textContent = \"Address: 123 Main St\";\n\n  contactSect.appendChild(title);\n  contactSect.appendChild(subTitleOne);\n  contactSect.appendChild(subTitleTwo);\n  contactSect.appendChild(subTitleThree);\n\n  return contactSect;\n};\n\nconst contactActive = () => {\n  const btns = Array.from(document.querySelectorAll(\".btn\"));\n  btns.forEach((btn) => {\n    if (btn.classList.contains(\"active\")) {\n      btn.classList.remove(\"active\");\n    }\n  });\n  const contactBtn = document.getElementById(\"contact\");\n  contactBtn.classList.add(\"active\");\n};\n\nconst contact = () => {\n  contactActive();\n  let sectionAppend = section();\n  let sectionRemove = document.querySelector(\"section\");\n\n  const content = document.getElementById(\"content\");\n  content.removeChild(sectionRemove);\n  content.appendChild(sectionAppend);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://restaurantpagenew/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst section = () => {\n  const homeSect = document.createElement(\"section\");\n  homeSect.classList.add(\"home-section\");\n\n  const title = document.createElement(\"h1\");\n  const subTitleOne = document.createElement(\"h6\");\n  const subTitleTwo = document.createElement(\"h6\");\n\n  title.textContent = \"Come dine with us for a truly memorable experience\";\n  subTitleOne.textContent = \"at The Open Table we have a seat waiting for you\";\n  subTitleTwo.textContent = \"and we guarantee you will love it\";\n\n  homeSect.appendChild(title);\n  homeSect.appendChild(subTitleOne);\n  homeSect.appendChild(subTitleTwo);\n\n  return homeSect;\n};\n\nconst homeActive = () => {\n  const btns = Array.from(document.querySelectorAll(\".btn\"));\n  btns.forEach((btn) => {\n    if (btn.classList.contains(\"active\")) {\n      btn.classList.remove(\"active\");\n    }\n  });\n  const homeBtn = document.getElementById(\"home\");\n  homeBtn.classList.add(\"active\");\n};\n\nconst home = () => {\n  homeActive();\n  let sectionAppend = section();\n  let sectionRemove = document.querySelector(\"section\");\n\n  const content = document.getElementById(\"content\");\n  content.removeChild(sectionRemove);\n  content.appendChild(sectionAppend);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurantpagenew/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst clickListening = () => {\n  const homeBtn = document.getElementById(\"home\");\n  const menuBtn = document.getElementById(\"menu\");\n  const contactBtn = document.getElementById(\"contact\");\n\n  homeBtn.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  menuBtn.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  contactBtn.addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n};\n\n(0,_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nclickListening();\n\n\n//# sourceURL=webpack://restaurantpagenew/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\n  const head = document.createElement(\"header\");\n  const restaurant = document.createElement(\"div\");\n  restaurant.classList.add(\"title\");\n\n  const title = document.createElement(\"h1\");\n  let restaurantName = \"The Open Table\";\n  title.textContent = restaurantName;\n  const subTitle = document.createElement(\"h6\");\n  let subText = \"Where you never eat alone\";\n  subTitle.textContent = subText;\n\n  restaurant.appendChild(title);\n  restaurant.appendChild(subTitle);\n  head.appendChild(restaurant);\n\n  const tabs = document.createElement(\"div\");\n  tabs.classList.add(\"tabs\");\n  const tabList = document.createElement(\"ul\");\n  const homeTab = document.createElement(\"li\");\n  homeTab.classList.add(\"btn\");\n  homeTab.classList.add(\"active\");\n  homeTab.setAttribute(\"id\", \"home\");\n  homeTab.textContent = \"Home\";\n  const menuTab = document.createElement(\"li\");\n  menuTab.classList.add(\"btn\");\n  menuTab.setAttribute(\"id\", \"menu\");\n  menuTab.textContent = \"Menu\";\n  const contactTab = document.createElement(\"li\");\n  contactTab.classList.add(\"btn\");\n  contactTab.setAttribute(\"id\", \"contact\");\n  contactTab.textContent = \"Contact\";\n\n  tabList.appendChild(homeTab);\n  tabList.appendChild(menuTab);\n  tabList.appendChild(contactTab);\n\n  tabs.appendChild(tabList);\n  head.appendChild(tabs);\n\n  return head;\n};\n\nconst section = () => {\n  const homeSect = document.createElement(\"section\");\n  homeSect.classList.add(\"home-section\");\n\n  const title = document.createElement(\"h1\");\n  const subTitleOne = document.createElement(\"h6\");\n  const subTitleTwo = document.createElement(\"h6\");\n\n  title.textContent = \"Come dine with us for a truly memorable experience\";\n  subTitleOne.textContent = \"at The Open Table we have a seat waiting for you\";\n  subTitleTwo.textContent = \"and we guarantee you will love it\";\n\n  homeSect.appendChild(title);\n  homeSect.appendChild(subTitleOne);\n  homeSect.appendChild(subTitleTwo);\n\n  return homeSect;\n};\n\nconst footer = () => {\n  const foot = document.createElement(\"footer\");\n  const para = document.createElement(\"p\");\n  para.classList.add(\"footer\");\n  para.textContent = \"Made by aewhite90\";\n\n  foot.appendChild(para);\n\n  return foot;\n};\n\nconst loadPage = () => {\n  let headerAppend = header();\n  let sectionAppend = section();\n  let footerAppend = footer();\n\n  const content = document.getElementById(\"content\");\n  content.appendChild(headerAppend);\n  content.appendChild(sectionAppend);\n  content.appendChild(footerAppend);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://restaurantpagenew/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(item, price, foodClass) {\n  const card = document.createElement(\"div\");\n  card.classList.add(\"card\", foodClass);\n\n  const food = document.createElement(\"h5\");\n  food.textContent = item;\n\n  const cost = document.createElement(\"h6\");\n  cost.textContent = price;\n\n  card.appendChild(food);\n  card.appendChild(cost);\n\n  return card;\n}\n\nconst section = () => {\n  const menuSect = document.createElement(\"section\");\n  menuSect.classList.add(\"menu-section\");\n\n  const salads = document.createElement(\"div\");\n  const salad = document.createElement(\"h3\");\n  salad.textContent = \"Salads\";\n  salads.classList.add(\"title\");\n  salads.appendChild(salad);\n\n  const entrees = document.createElement(\"div\");\n  const entree = document.createElement(\"h3\");\n  entree.textContent = \"Entrees\";\n  entrees.classList.add(\"title\");\n  entrees.appendChild(entree);\n\n  const desserts = document.createElement(\"div\");\n  const dessert = document.createElement(\"h3\");\n  dessert.textContent = \"Desserts\";\n  desserts.classList.add(\"title\");\n  desserts.appendChild(dessert);\n\n  const cardsOne = document.createElement(\"div\");\n  cardsOne.classList.add(\"card-container\");\n  cardsOne.appendChild(createMenu(\"Asparagus Salad\", \"$20\", \"asparagus\"));\n  cardsOne.appendChild(createMenu(\"Spinich Salad\", \"$20\", \"spinich\"));\n  const cardsTwo = document.createElement(\"div\");\n  cardsTwo.classList.add(\"card-container\");\n  cardsTwo.appendChild(createMenu(\"Filet Mignon\", \"$35\", \"filet-mignon\"));\n  cardsTwo.appendChild(createMenu(\"Pork Chops\", \"$25\", \"pork-chops\"));\n  cardsTwo.appendChild(createMenu(\"Grilled Chicken\", \"$25\", \"grilled-chicken\"));\n  cardsTwo.appendChild(createMenu(\"Burger\", \"$17\", \"burger\"));\n  const cardsThree = document.createElement(\"div\");\n  cardsThree.classList.add(\"card-container\");\n  cardsThree.appendChild(createMenu(\"Ice Cream\", \"$10\", \"ice-cream\"));\n  cardsThree.appendChild(createMenu(\"Apple Pie\", \"$15\", \"apple-pie\"));\n\n  menuSect.appendChild(salads);\n  menuSect.appendChild(cardsOne);\n  menuSect.appendChild(entrees);\n  menuSect.appendChild(cardsTwo);\n  menuSect.appendChild(desserts);\n  menuSect.appendChild(cardsThree);\n\n  return menuSect;\n};\n\nconst menuActive = () => {\n  const btns = Array.from(document.querySelectorAll(\".btn\"));\n  btns.forEach((btn) => {\n    if (btn.classList.contains(\"active\")) {\n      btn.classList.remove(\"active\");\n    }\n  });\n  const menuBtn = document.getElementById(\"menu\");\n  menuBtn.classList.add(\"active\");\n};\n\nconst menu = () => {\n  menuActive();\n  let sectionAppend = section();\n  let sectionRemove = document.querySelector(\"section\");\n\n  const content = document.getElementById(\"content\");\n  content.removeChild(sectionRemove);\n  content.appendChild(sectionAppend);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurantpagenew/./src/menu.js?");

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