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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst render = {\n\n    board: () => {\n    const test = document.querySelector('.container')\n    test.textContent = \"tests\"\n\n    }\n\n//     const thing = document.createElement('div')\n//     test.appendChild(thing)\n }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n\nconst Ship = (shipLength) => {\n\n    let hits = 0;\n\n    const length = shipLength;\n\n    const getHits = () => hits;\n\n    const hit = () => {\n        hits++\n        return hits\n    };\n\n    const isSunk = () => {\n        if (hits < length) {\n            return false\n        } else return true\n    };\n\n    return { length, hit, getHits, isSunk };\n};\n\n\nconst Gameboard = () => { // will take player/comp name\n\n    let board = [\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true] ];\n\n    // const occupiedPositions = [] probably don't need since board already marked\n    const hitShips = [];\n\n    const viablePositions = [];\n    const shipList = [];\n    const shotsFired = [];\n\n    const sunkenStatus = () => {\n        for (let i = 0 ; i < shipList.length ; i++) {\n            if (shipList[i].isSunk() === false) {\n                return false\n            }\n        }\n        return true\n    };\n\n    // private fn\n    // const getRandomInt = () => {\n    //     return Math.floor(Math.random() * 10);\n    // }\n\n    const placeShip = (shipPosition, ship) => {\n        shipPosition.forEach(position => {\n            board[position[0]][position[1]] = ship\n        });\n        shipList.push(ship)\n    };\n\n    const receiveAttack = (x, y) => {\n        if (board[x][y] instanceof Object) {\n            board[x][y].hit()\n            hitShips.push(board[x][y])\n        }\n        else shotsFired.push([x, y])\n\n    };\n\n    const getBoard = () => board;\n    const getShotsFired = () => shotsFired;\n\n    return { placeShip, getBoard, receiveAttack, getShotsFired, sunkenStatus }\n\n};\n\nconst Player = () => {\n\n    let location = Gameboard();\n\n    const attackEnemy = (enemy, coodOne, coodTwo) => {\n        enemy.location.receiveAttack(coodOne, coodTwo)\n    };\n\n    const viableTargets = [];\n\n    const random = () => { return Math.floor(Math.random() * viableTargets.length) }\n\n    const generateTargets = () => {\n        for (let i = 0 ; i < 10 ; i++) {\n            for (let j = 0 ; j < 10 ; j++) {\n                viableTargets.push([i,j])\n            }\n        } \n    };\n\n    const removeViableTarget = (index) => {\n        viableTargets.splice(index, 1)\n    };\n\n    const aiMove = (enemy) => {\n        const randomIndex = random()\n        const target = viableTargets[randomIndex]\n        attackEnemy(enemy, target[0], target[1])\n        removeViableTarget(randomIndex)\n\n    };\n\n    const getViableTargets = () => viableTargets;\n\n    return { location, aiMove, generateTargets, getViableTargets, removeViableTarget, attackEnemy }\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/factories.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n\n\nfunction newGame() {\n    let playerOne = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Player)()\n    let PlayerTwo = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Player)()\n    console.log(playerOne.location.getBoard())\n    console.log(playerOne, PlayerTwo)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGame);\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => { \n    (0,_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board() \n})\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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