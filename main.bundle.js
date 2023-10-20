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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 50px;\n    background-color: rgb(147, 176, 176);\n    gap: 50px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\nh1 {\n    font-size: 3rem;\n    color:rgb(52, 87, 153)\n}\n\n.board-human,\n.board-ai {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    border-width: 1px;\n    border-color: rgba(108, 123, 120, 0.885);\n    border-style: solid;\n    border-width: 2px;\n    height: 500px;\n    width: 500px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.result {\n    display: flex;\n    flex-direction: column;\n    font-size: 3rem;\n    gap: 20px;\n    align-items: center;\n    margin-top: 40px;\n    color:rgb(52, 87, 153)\n}\n\n.result button {\n    height: 35px;\n    width: 100px;\n    border-radius: 0.2rem;\n    border-color: rgba(203, 212, 230, 0.897);\n    border-width: 1.5px;\n    background-color: rgb(193, 214, 219);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n.container {\n    display: flex;\n    gap: 50px;\n}\n\n.cell {\n    border-width: 1px;\n    border-color: rgba(113, 113, 113, 0.21);\n    border-style: solid;\n}\n\n.ship {\n    background-color: cadetblue;\n}\n\n.hit-ship {\n    background-color: rgba(161, 66, 66, 0.958);\n}\n\n.miss {\n    background-color: rgba(112, 113, 117, 0.713);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst render = {\n\n    board: (player, type) => {\n        const board = player.board.getBoard()\n        const container = document.querySelector('.container')\n        const playerBoard = document.createElement('div')\n        playerBoard.classList.add(`board-${type}`)\n\n        for (let i = 0 ; i < 10 ; i++) {\n            for (let j = 0 ; j < 10 ; j++) {\n                let cell = document.createElement('div')\n                cell.className = \"cell\"\n                cell.dataset.indexZero = i\n                cell.dataset.indexOne = j\n                playerBoard.appendChild(cell)\n            }\n        }\n        container.appendChild(playerBoard)\n    },\n    \n    ships: (player, shipList) => {\n        shipList.forEach(ship => {\n        \n            for (let i = 0 ; i < ship.length ; i++) {\n            \n                let shipCell = document.querySelector(`.board-${player} .cell[data-index-zero='${ship[i][0]}'][data-index-one='${ship[i][1]}']`)\n                if (player === \"human\") {\n                    shipCell.classList.add('ship')\n                }\n            }\n        });\n    },\n\n    misses: (player, playerType) => {\n        const missedShots = player.board.getMissedShots()\n        missedShots.forEach((miss) => {\n            let missedCell = document.querySelector(`.board-${playerType} .cell[data-index-zero='${miss[0]}'][data-index-one='${miss[1]}']`)\n            missedCell.classList.add('miss')\n        })\n\n    },\n\n    hits: (player, playerType) => {  \n        const hitShips = player.board.getHitShips()\n        hitShips.forEach((ship) => {\n            let hitCell = document.querySelector(`.board-${playerType} .cell[data-index-zero='${ship[0]}'][data-index-one='${ship[1]}']`)\n            hitCell.classList.add('hit-ship')\n        })\n    },\n\n    result: (type) => {\n        const body = document.querySelector('body')\n        const result = document.createElement('div')\n        const button = document.createElement('button')\n\n        result.classList.add('result')\n        result.textContent = `${type} WINS!`\n        button.textContent = \"New Game\"\n\n        body.appendChild(result)\n        result.appendChild(button)\n\n        button.addEventListener('click', (e) => {\n            const game = (0,_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n            game.end()\n            game.ship()\n            game.dom()\n            game.humanPlay()\n        })\n    },\n\n    clearBoards: () => {\n        const container = document.querySelector('.container')\n        const playerOne = document.querySelector('.board-human')\n        const playerTwo = document.querySelector('.board-ai')\n        const result = document.querySelector('.result')\n        document.body.removeChild(result)\n        container.removeChild(playerOne)\n        container.removeChild(playerTwo)\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n\nconst Ship = (shipLength) => {\n\n    let hits = 0;\n    const length = shipLength;\n\n    const getHits = () => hits;\n\n    const hit = () => {\n        hits++\n        return hits\n    };\n\n    const isSunk = () => {\n        if (hits < length) {\n            return false\n        } else {\n            return true\n        }\n    };\n\n    return { length, hit, getHits, isSunk };\n};\n\n\n// -- GAMEBOARD ---\n\nconst Gameboard = () => {\n\n    let board = [\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true],\n    [true, true, true, true, true, true, true, true, true, true] ];\n\n    const hitShips = [];\n    const shipList = [];\n    const missedShots = [];\n    const occupiedPositions = []\n    const randomStart = []\n\n    const sunkenStatus = () => {\n        for (let i = 0 ; i < shipList.length ; i++) {\n            if (shipList[i].isSunk() === false) {\n                return false\n            }\n        }\n        return true\n    };\n\n    const getRandomStart = () => {\n        return randomStart\n    }\n\n    const randomShipPlacement = (length) => {\n        let indexZero = getRandomInt(10)\n        let indexOne = getRandomInt(10)\n        let shipPosition = []\n        let shipCollision;\n        let axis = getRandomInt(2)\n\n        //  --- HORIZONTAL ---\n\n        if (axis === 0) {\n            if (indexOne + length > 10) {\n                    for (let i = 0 ; i < length ; i++) {      \n                        shipPosition.push([indexZero, indexOne - i])\n                    }\n                    const flatRandom = randomStart.flat()\n        \n                        for (let i = 0 ; i < shipPosition.length ; i++) {\n                            for (let j = 0 ; j < flatRandom.length ; j++) {\n                                if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {\n                                    shipCollision = true\n                                }\n                            }\n                        }\n                        if (!shipCollision) {\n                            randomStart.push(shipPosition)\n                        } else randomShipPlacement(length)\n        \n                } else {\n                    \n                    for (let i = 0 ; i < length ; i++) {      \n                        shipPosition.push([indexZero, indexOne + i])\n                    }\n                    const flatRandom = randomStart.flat()\n        \n                        for (let i = 0 ; i < shipPosition.length ; i++) {\n                            for (let j = 0 ; j < flatRandom.length ; j++) {\n                                if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {\n                                    shipCollision = true\n                                }\n                            }\n                        }\n                        if (!shipCollision) {\n                            randomStart.push(shipPosition)\n                        } else randomShipPlacement(length)\n                }\n        } else {\n\n        //  --- VERTICAL ---\n\n            if (indexZero + length > 10) {\n                for (let i = 0 ; i < length ; i++) {      \n                    shipPosition.push([indexZero - i, indexOne])\n                }\n                const flatRandom = randomStart.flat()\n\n                    for (let i = 0 ; i < shipPosition.length ; i++) {\n                        for (let j = 0 ; j < flatRandom.length ; j++) {\n                            if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {\n                                shipCollision = true\n                            }\n                        }\n                    }\n                    if (!shipCollision) {\n                        randomStart.push(shipPosition)\n                    } else randomShipPlacement(length)\n\n            } else {\n                \n                for (let i = 0 ; i < length ; i++) {      \n                    shipPosition.push([indexZero + i, indexOne])\n                }\n                const flatRandom = randomStart.flat()\n\n                    for (let i = 0 ; i < shipPosition.length ; i++) {\n                        for (let j = 0 ; j < flatRandom.length ; j++) {\n                            if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {\n                                shipCollision = true\n                            }\n                        }\n                    }\n                    if (!shipCollision) {\n                        randomStart.push(shipPosition)\n                    } else randomShipPlacement(length)\n            }\n        }\n\n        shipPosition = randomStart[randomStart.length - 1]\n        return shipPosition\n    };\n\n    const getRandomInt = (val) => {\n        return Math.floor(Math.random() * val);\n    };\n\n    const placeShip = (shipPosition, ship) => {\n        shipPosition.forEach(position => {\n            board[position[0]][position[1]] = ship\n        });\n        shipList.push(ship)\n        occupiedPositions.push(shipPosition)\n    };\n\n    const receiveAttack = (x, y) => {\n        \n        if (board[x][y] instanceof Object) {\n            board[x][y].hit()\n            hitShips.push([x, y]) // HITS\n        }\n        else missedShots.push([x, y]) // MISSES\n    };\n\n    const updateBoard = (player, coordinates) => {\n        const target = player.board.getBoard()[coordinates[0]][coordinates[1]]\n        player.board.getBoard()[coordinates[0]][coordinates[1]] = false\n    }\n\n    const getOccupiedPositions = () => occupiedPositions\n    const getShipList = () => shipList;\n    const getBoard = () => board;\n    const getMissedShots = () => missedShots;\n    const getHitShips = () => hitShips\n\n    return { updateBoard, getHitShips, getRandomStart, randomShipPlacement, getOccupiedPositions, getShipList, placeShip, getBoard, receiveAttack, getMissedShots, sunkenStatus }\n\n};\n\n// --- PLAYER ---\n\nconst Player = () => {\n\n    let board = Gameboard();\n\n    const attackEnemy = (enemy, coodOne, coodTwo) => {\n        enemy.board.receiveAttack(coodOne, coodTwo)\n    };\n\n    const viableTargets = [];\n\n    const random = () => { return Math.floor(Math.random() * viableTargets.length) }\n\n    const generateTargets = () => {\n        for (let i = 0 ; i < 10 ; i++) {\n            for (let j = 0 ; j < 10 ; j++) {\n                viableTargets.push([i,j])\n            }\n        } \n    };\n\n    const removeViableTarget = (index) => {\n        viableTargets.splice(index, 1)\n    };\n\n    const aiMove = (enemy) => {\n        const randomIndex = random()\n        const target = viableTargets[randomIndex]\n        attackEnemy(enemy, target[0], target[1])\n        removeViableTarget(randomIndex)\n    };\n\n    const getViableTargets = () => viableTargets;\n\n    return { board, aiMove, generateTargets, getViableTargets, removeViableTarget, attackEnemy }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/factories.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nconst newGame = () => {\n\n  let playerOne = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Player)();\n  let playerTwo = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Player)();\n\n  const ship = () => {\n    // Player One - HUMAN\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(4), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(4))\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(2), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(2))\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(1), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(1))\n    playerOne.board.placeShip(playerOne.board.randomShipPlacement(1), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(1))\n    // Player Two - AI\n    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(4), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(4))\n    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(3), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(3))\n    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(2), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(2))\n    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(1), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(1))\n    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(1), (0,_factories__WEBPACK_IMPORTED_MODULE_0__.Ship)(1))\n    // console.log(playerTwo.board.getBoard()) - for cheating, shh;)\n  };\n\n  const dom = () => {\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board(playerOne, \"human\")\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board(playerTwo, \"ai\")\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ships(\"human\", playerOne.board.getRandomStart())\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ships(\"ai\", playerTwo.board.getRandomStart())\n  };\n\n\n  const humanPlay = () => {\n    console.log(\"--- HUMAN ----\")\n    const human = document.querySelector('.board-ai')\n    human.addEventListener('click', function eventHandler(e) {\n      const coordinates = [Number(e.target.dataset.indexZero), Number(e.target.dataset.indexOne)]\n      const target = playerTwo.board.getBoard()[coordinates[0]][coordinates[1]]\n      if (target === false) {\n        console.log(\"nope!\")\n        return\n      }\n      playerOne.attackEnemy(playerTwo, coordinates[0], coordinates[1])\n      playerOne.board.updateBoard(playerTwo, coordinates)\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hits(playerTwo, \"ai\")\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].misses(playerTwo, \"ai\")\n      human.removeEventListener('click', eventHandler)\n      if (checkWinCon(playerTwo, \"HUMAN\")) {\n        return\n      } else aiPlay()\n    })\n  };\n\n  const aiPlay = () => {\n    console.log(\"--- AI ---\")\n    if (playerTwo.getViableTargets().length === 0) {\n      playerTwo.generateTargets()\n    }\n    playerTwo.aiMove(playerOne)\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hits(playerOne, \"human\")\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].misses(playerOne, \"human\")\n    if (checkWinCon(playerOne, \"AI\")) {\n      return\n    } else humanPlay()\n  };\n\n  const checkWinCon = (player, type) => {\n    if (player.board.sunkenStatus() === true) {\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].result(type)\n      return true\n    }\n  }\n\n  const start = () => {\n    ship()\n    dom()\n    humanPlay()\n  }\n\n  const end = () => {\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearBoards()\n  }\n  \n  return { end, start, checkWinCon, ship, dom, humanPlay }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGame);\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => { \n  \n    const game = (0,_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    game.ship()\n    game.dom()\n    game.humanPlay()\n})\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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