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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    padding: 50px;\n}\n\n.board {\n    border-width: 1px;\n    border-color: black;\n    border-style: solid;\n    height: 500px;\n    width: 500px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.container {\n    display: flex;\n    gap: 50px;\n}\n\n.cell {\n    border-width: 1px;\n    border-color: rgba(0, 0, 0, 0.278);\n    border-style: solid;\n}\n\n\n.ship {\n    background-color: cadetblue;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nconst render = {\n\n    board: (player) => {\n     //   console.log(player)\n    const board = player.board.getBoard()\n     //   console.log(board)\n\n    const container = document.querySelector('.container')\n    const playerBoard = document.createElement('board')\n    playerBoard.classList.add('board')\n\n    for (let i = 0 ; i < 10 ; i++) {\n        for (let j = 0 ; j < 10 ; j++) {\n            let cell = document.createElement('div')\n            cell.className = \"cell\"\n            cell.dataset.indexZero = i\n            cell.dataset.indexOne = j\n            playerBoard.appendChild(cell)\n        }\n    }\n\n    container.appendChild(playerBoard)\n    \n    },\n    \n    ships: (player, shipList) => {\n        \n        shipList.forEach(ship => {\n        \n            for (let i = 0 ; i < ship.length ; i++) {\n            \n                let shipCell = document.querySelector(`.cell[data-index-zero='${ship[i][0]}'][data-index-one='${ship[i][1]}']`)\n                if (player === \"human\") {\n                    shipCell.classList.add('ship')\n                }\n            }\n        });\n    },\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render); \n\n\n// ships: (player, shipList) => {\n//     console.log(shipList)\n//     shipList.forEach(ship => {\n//         console.log(ship)\n        \n//         for (let i = 0 ; i < shipList[0].length ; i++) {\n        \n//             let shipCell = document.querySelector(`.cell[data-index-zero='${shipList[0][i][0]}'][data-index-one='${shipList[0][i][1]}']`)\n//             if (player === \"human\") {\n//                 shipCell.classList.add('ship')\n//             }\n//         }\n//     });\n// },\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n\nconst Ship = (shipLength) => {\n\n    let hits = 0;\n\n    const length = shipLength;\n\n    const getHits = () => hits;\n\n    const hit = () => {\n        hits++\n        return hits\n    };\n\n    const isSunk = () => {\n        if (hits < length) {\n            return false\n        } else return true\n    };\n\n    return { length, hit, getHits, isSunk };\n};\n\n\nconst Gameboard = () => { // will take player/comp name\n\n    let board = [\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true] ];\n\n    const occupiedPositions = []\n    const hitShips = [];\n\n    const viablePositions = [];\n    const shipList = [];\n    const shotsFired = [];\n\n    const randomStart = []\n\n    const sunkenStatus = () => {\n        for (let i = 0 ; i < shipList.length ; i++) {\n            if (shipList[i].isSunk() === false) {\n                return false\n            }\n        }\n        return true\n    };\n\n\n    const randomShipPlacement = (length) => {\n        let indexZero = getRandomInt(10)\n        let indexOne = getRandomInt(10)\n        let shipPosition = []\n        let check;\n\n        if (randomStart.length === 4) return\n\n        if (indexZero + length > 10) {\n            console.log(\"plus\")\n\n            for (let i = 0 ; i < length ; i++) {      \n                shipPosition.push([indexZero - i, indexOne])\n            }\n            const flatRandom = randomStart.flat()\n\n          //  if (randomStart.length === 0) {\n         //       randomStart.push(shipPosition)\n         //   } else {\n\n                for (let i = 0 ; i < shipPosition.length ; i++) {\n                    for (let j = 0 ; j < flatRandom.length ; j++) {\n                        if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {\n                            check = true\n                            console.log(\"clash\")\n                            break\n                        }\n                    }\n                }\n                if (!check) {\n                    randomStart.push(shipPosition)\n                } else randomShipPlacement(length)\n         //   }\n\n        } else {\n            console.log(\"minus\")\n            \n            for (let i = 0 ; i < length ; i++) {      \n                shipPosition.push([indexZero + i, indexOne])\n            }\n            const flatRandom = randomStart.flat()\n            console.log(randomStart, shipPosition)\n\n         //   if (randomStart.length === 0) {\n         //       randomStart.push(shipPosition)\n         //   } else {\n\n                for (let i = 0 ; i < shipPosition.length ; i++) {\n                    for (let j = 0 ; j < flatRandom.length ; j++) {\n                        if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {\n                            check = true\n                            console.log(\"clash\")\n                            break\n                        }\n                    }\n                }\n                if (!check) {\n                    randomStart.push(shipPosition)\n                } else randomShipPlacement(length)\n         //   }\n        }\n        return randomStart\n    };\n\n    // const randomShipPlacement = (length) => {\n    //     let indexZero = getRandomInt(10)\n    //     let indexOne = getRandomInt(10)\n    //    // let shipPosition = []\n    //     console.log(\"==========\")\n    //     console.log(indexZero, indexOne)\n    //     if (indexZero + length > 10) {\n    //         console.log(\"plus\")\n\n    //         const positions = getPositions(length, \"plus\", indexZero, indexOne, )\n           \n    //         for (let i = 0 ; i < randomStart.length ; i++) {\n    //             for (let j = 0 ; j < positions.length ; j++) {\n    //                 if (randomStart[i][0] === positions[j][0] && randomStart[i][1] === positions[j][1]) {\n    //                     console.log(\"clash \", randomStart[i][0], positions[j][0], randomStart[i][1], positions[j][1])\n                    \n    //                 }\n    //             }\n    //         }\n    //         //     if (ele.includes(indexZero + 1) && ele.includes(indexOne)) {\n    //         //         console.log(\"clash\", ele)\n    //         //         shipPosition = []\n    //         //         //randomShipPlacement(length)\n    //         //     }\n    //         // })\n    //         console.log(\"positions \", positions)\n    //         // const test = [...positions]\n    //         // console.log(\"test \", test)\n    //         randomStart.push(...positions)\n\n    //     } else {\n    //         console.log(\"minus\")\n            \n    //         const positions = getPositions(length, \"minus\", indexZero, indexOne)\n\n    //         for (let i = 0 ; i < randomStart.length ; i++) {\n    //             for (let j = 0 ; j < positions.length ; j++) {\n    //                 if (randomStart[i][0] === positions[j][0] && randomStart[i][1] === positions[j][1]) {\n    //                     console.log(\"clash \", randomStart[i][0], positions[j][0], randomStart[i][1], positions[j][1])\n                   \n    //                 }\n    //             }\n    //         }\n\n    //         console.log(\"positions \", positions)\n    //         // const test = [...positions]\n    //         // console.log(\"test \", test)\n    //         randomStart.push(...positions)\n    //     }\n     \n    //     return randomStart\n    // };\n\n    // const getPositions = (length, operator, indexZero = getRandomInt(10), indexOne = getRandomInt(10)) => {\n    //     let shipPosition = []\n\n    //     if (operator === \"plus\") {\n\n    //         for (let i = 0 ; i < length ; i++) {\n    //             randomStart.forEach((ele) => {\n    //                 if (ele.includes(indexZero - i) && ele.includes(indexOne)) {\n                     \n    //                 }\n    //             })\n    //             shipPosition.push([indexZero - i, indexOne])\n    //         }\n    //     } else if (operator === \"minus\") {\n\n    //         for (let i = 0 ; i < length ; i++) {\n    //             randomStart.forEach((ele) => {\n    //                 if (ele.includes(indexZero + 1) && ele.includes(indexOne)) {\n                   \n    //                 }\n    //             })\n    //             shipPosition.push([indexZero + i, indexOne])\n    //         }\n    //     }\n    //     console.log(shipPosition)\n    //     return shipPosition\n    // };\n\n    const getRandomInt = (val) => {\n        return Math.floor(Math.random() * val);\n    };\n\n    const placeShip = (shipPosition, ship) => { \n        const flatShips = shipPosition.flat()\n        flatShips.forEach(position => {\n           \n            board[position[0]][position[1]] = ship\n        });\n        shipList.push(ship)\n        occupiedPositions.push(flatShips)\n    };\n\n    const receiveAttack = (x, y) => {\n        if (board[x][y] instanceof Object) {\n            board[x][y].hit()\n            hitShips.push(board[x][y])\n        }\n        else shotsFired.push([x, y])\n\n    };\n\n    const getOccupiedPositions = () => occupiedPositions\n    const getShipList = () => shipList;\n    const getBoard = () => board;\n    const getShotsFired = () => shotsFired;\n\n    return { randomShipPlacement, getOccupiedPositions, getShipList, placeShip, getBoard, receiveAttack, getShotsFired, sunkenStatus }\n\n};\n\nconst Player = () => {\n\n    let board = Gameboard();\n\n    const attackEnemy = (enemy, coodOne, coodTwo) => {\n        enemy.board.receiveAttack(coodOne, coodTwo)\n    };\n\n    const viableTargets = [];\n\n    const random = () => { return Math.floor(Math.random() * viableTargets.length) }\n\n    const generateTargets = () => {\n        for (let i = 0 ; i < 10 ; i++) {\n            for (let j = 0 ; j < 10 ; j++) {\n                vi   // shipPosition.forEach((pos) => {\n                    //     console.log(pos)\n                    //     flatRandom.forEach(ele => {\n                    //         console.log(ele)\n                    //         if (ele[0] !== pos[0] && ele[1] !== pos[1]) {\n                    //             console.log(\"push\")\n                    //             randomStart.push(shipPosition)\n                    //         } else randomShipPlacement(length)\n                    //     });      \n                    // })ableTargets.push([i,j])\n            }\n        } \n    };\n\n    const removeViableTarget = (index) => {\n        viableTargets.splice(index, 1)\n    };\n\n    const aiMove = (enemy) => {\n        const randomIndex = random()\n        const target = viableTargets[randomIndex]\n        attackEnemy(enemy, target[0], target[1])\n        removeViableTarget(randomIndex)\n\n    };\n\n    const getViableTargets = () => viableTargets;\n\n    return { board, aiMove, generateTargets, getViableTargets, removeViableTarget, attackEnemy }\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/factories.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nfunction newGame() {\n    let playerOne = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Player)()\n    let playerTwo = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Player)()\n   \n   // playerOne.board.placeShip([[0, 0]], Ship(1))\n   // playerOne.board.placeShip([[1, 1]], Ship(1))\n\n    //playerTwo.board.placeShip([[2, 2]], Ship(1))\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n\n\n\n\n\n\n //   console.log(playerOne.board.getOccupiedPositions())\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board(playerOne)\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board(playerTwo)\n\n//console.log(playerOne.board.getBoard())\n\n   // render.ships(\"ai\", playerTwo.board.getOccupiedPositions())\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ships(\"human\", playerOne.board.getOccupiedPositions())\n\n\n //   console.log(playerOne.board.getBoard())\n //   console.log(playerOne, PlayerTwo)\n}\n\n// first move: human/playerOne\n// eventListener => player.attackEnemy()\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGame);\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => { \n    (0,_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n   // render.board() \n})\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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