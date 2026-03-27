/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /*цвета*/
  --primary-color: blue;
  --text-color: white;
  --bg-color: green;
  --shadow-text: 1px 1px 2px lightblue;
  --shadow-box: 1px 1px 9px rgb(65, 69, 68);
  --button-color: rgb(81, 81, 232);

  /*размеры шрифта*/
  --fs-sm: clamp(0.8rem, 2vw, 1rem);
  --fs-md: clamp(1rem, 3vw, 1.5rem);
  --fs-lg: clamp(1.5rem, 4vw, 2.5rem);

  /*шрифты*/
  --fm-logo: d;
  --fm-project: p;
  --fm--todo: j;

  /*отступы*/
  --spacing-sm: 0.5rem;
  --spasing-md: 1rem;
  --spasing-lg: 2rem;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(166, 217, 219);
  display: flex;
  gap: var(--spasing-md);
}
#project-box {
  box-shadow: var(--shadow-box);
  background-color: rgb(143, 205, 207);
  height: 100vh;
  width: 35vw;
}
#form-box {
  box-shadow: var(--shadow-box);
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  justify-content: center;

  align-self: center;
  border-radius: var(--spasing-lg);
  height: 50vh;
  width: 30vw;
  background-color: rgb(45, 167, 176);
}
#form-todo {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: var(--spacing-sm);
  width: 80%;
  height: 80%;
}
#box {
  box-shadow: var(--shadow-box);
  background-color: rgb(143, 205, 207);
  height: 100vh;
  width: 35vw;
}
.form-el {
  background-color: rgb(142, 225, 60);
  border: none;
  padding: var(--spacing-sm);
  border-radius: var(--spasing-lg);
}
.delete {
  background-color: red;
}
.edit-btn {
  background-color: chocolate;
}
#side-bar {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: start;
  gap: var(--spacing-sm);
  height: 100vh;
}
.project-container {
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
  gap: var(--spasing-lg);
  width: 80%;
  height: 80%;
}
.todo-item {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: var(--spacing-sm);

  height: 100%;
}
.btn-todo-box {
  flex-flow: wrap row-reverse;
  display: flex;
  justify-content: space-between;
}
.btn-todo {
  width: 48%;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,QAAQ;EACR,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAyC;EACzC,gCAAgC;;EAEhC,iBAAiB;EACjB,iCAAiC;EACjC,iCAAiC;EACjC,mCAAmC;;EAEnC,SAAS;EACT,YAAY;EACZ,eAAe;EACf,aAAa;;EAEb,UAAU;EACV,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,6BAA6B;EAC7B,oCAAoC;EACpC,aAAa;EACb,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;;EAEvB,kBAAkB;EAClB,gCAAgC;EAChC,YAAY;EACZ,WAAW;EACX,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,sBAAsB;EACtB,UAAU;EACV,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,oCAAoC;EACpC,aAAa;EACb,WAAW;AACb;AACA;EACE,mCAAmC;EACnC,YAAY;EACZ,0BAA0B;EAC1B,gCAAgC;AAClC;AACA;EACE,qBAAqB;AACvB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,UAAU;EACV,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,sBAAsB;;EAEtB,YAAY;AACd;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,UAAU;AACZ","sourcesContent":[":root {\r\n  /*цвета*/\r\n  --primary-color: blue;\r\n  --text-color: white;\r\n  --bg-color: green;\r\n  --shadow-text: 1px 1px 2px lightblue;\r\n  --shadow-box: 1px 1px 9px rgb(65, 69, 68);\r\n  --button-color: rgb(81, 81, 232);\r\n\r\n  /*размеры шрифта*/\r\n  --fs-sm: clamp(0.8rem, 2vw, 1rem);\r\n  --fs-md: clamp(1rem, 3vw, 1.5rem);\r\n  --fs-lg: clamp(1.5rem, 4vw, 2.5rem);\r\n\r\n  /*шрифты*/\r\n  --fm-logo: d;\r\n  --fm-project: p;\r\n  --fm--todo: j;\r\n\r\n  /*отступы*/\r\n  --spacing-sm: 0.5rem;\r\n  --spasing-md: 1rem;\r\n  --spasing-lg: 2rem;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(166, 217, 219);\r\n  display: flex;\r\n  gap: var(--spasing-md);\r\n}\r\n#project-box {\r\n  box-shadow: var(--shadow-box);\r\n  background-color: rgb(143, 205, 207);\r\n  height: 100vh;\r\n  width: 35vw;\r\n}\r\n#form-box {\r\n  box-shadow: var(--shadow-box);\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  align-self: center;\r\n  border-radius: var(--spasing-lg);\r\n  height: 50vh;\r\n  width: 30vw;\r\n  background-color: rgb(45, 167, 176);\r\n}\r\n#form-todo {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  justify-content: center;\r\n  gap: var(--spacing-sm);\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n#box {\r\n  box-shadow: var(--shadow-box);\r\n  background-color: rgb(143, 205, 207);\r\n  height: 100vh;\r\n  width: 35vw;\r\n}\r\n.form-el {\r\n  background-color: rgb(142, 225, 60);\r\n  border: none;\r\n  padding: var(--spacing-sm);\r\n  border-radius: var(--spasing-lg);\r\n}\r\n.delete {\r\n  background-color: red;\r\n}\r\n.edit-btn {\r\n  background-color: chocolate;\r\n}\r\n#side-bar {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  align-items: center;\r\n  justify-content: start;\r\n  gap: var(--spacing-sm);\r\n  height: 100vh;\r\n}\r\n.project-container {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  justify-content: start;\r\n  gap: var(--spasing-lg);\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n.todo-item {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  justify-content: center;\r\n  gap: var(--spacing-sm);\r\n\r\n  height: 100%;\r\n}\r\n.btn-todo-box {\r\n  flex-flow: wrap row-reverse;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.btn-todo {\r\n  width: 48%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/core/app-state.js"
/*!*******************************!*\
  !*** ./src/core/app-state.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   getActiveProject: () => (/* binding */ getActiveProject),
/* harmony export */   getState: () => (/* binding */ getState),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   setActiveProject: () => (/* binding */ setActiveProject)
/* harmony export */ });
//создаем данные state единственный источник истины
//и создаем активный проект со значением null
let state = [];
let active = null;

//создаем метод возврата копии state
const getState = () => {
  return [...state];
};

//создаем метод добавления проекта в state
const addProject = (project) => {
  //проверка на наличие проекта в state , если есть то ретерним, если нет то пушим в state
  if (state.includes(project)) return;
  state.push(project);
  return state;
};

//создаем метод удаления проекта из state
const removeProject = (project) => {
  //если его там нет то ретерним
  if (!state.includes(project)) return;

  //если есть то берем его индекс из state
  const index = state.indexOf(project);
  //и удаляем с помощью мутирующего метода splice, который принмает два аргумента : первый индекс с которого нужно начать удаление, второй сколько элементов нужно удалить
  state.splice(index, 1);
  //возвращаем обновленный state
  return state;
};

//cоздаем метод установки активного проекта
const setActiveProject = (project) => {
  active = project;
  return active;
};
//метод возврата активного проекта
const getActiveProject = () => {
  return active;
};



/***/ },

/***/ "./src/core/project.js"
/*!*****************************!*\
  !*** ./src/core/project.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
//функция создания проекта принимающая его название
function createProject(name, id = crypto.randomUUID()) {
  //сохжаем хранилище для будущих туду
  let arr = [];

  //создаем метод добавления туду в хранилище если его там нет
  const addTodo = (todo) => {
    if (arr.includes(todo)) return null;
    arr.push(todo);
  };

  //создаем метод удаления туду если оно там есть
  const removeTodo = (todo) => {
    if (!arr.includes(todo)) return null;
    //используем индексацию и метод splice
    const index = arr.indexOf(todo);
    arr.splice(index, 1);
    //возвращаем обновленное хранилище
    return arr;
  };

  //создаем метод перетаскивания туду с текущего проекта на другой
  //принимает туду который хотим перетащить и проект куда хотим перетащить
  const movieTodo = (todo, targetProject) => {
    if (targetProject.arr.includes(todo)) return null;
    targetProject.addTodo(todo);
    removeTodo(todo);
  };

  return { arr, name, addTodo, removeTodo, movieTodo, id };
}


/***/ },

/***/ "./src/core/storage.js"
/*!*****************************!*\
  !*** ./src/core/storage.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadState: () => (/* binding */ loadState),
/* harmony export */   saveState: () => (/* binding */ saveState)
/* harmony export */ });
//создаем метод сохранения state в хранилище lokalStorage
const saveState = (state) => {
  //используем встроенные функции добавляет в localStorage наш стейт
  //перед добавлением нужно создать ключ где значением будет наш state
  //преобразуем в json строки наш state иначе выйдет ошибка
  localStorage.setItem("state", JSON.stringify(state));
};
//создаем метод получения данных из localStorage
const loadState = () => {
  //создаем константу data со значением из локального хранилища
  const data = localStorage.getItem("state");
  //делаем проверку если оно пустое то возвращаем массив, чтобы наш код в дальнешем не ломался
  if (data === null) return [];
  //если не пустое возвращаем преобразованные данные из json строк в изначльный вид
  return JSON.parse(data);
};



/***/ },

/***/ "./src/core/todo.js"
/*!**************************!*\
  !*** ./src/core/todo.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
// функцию создания туду которая приниает в сеья объект с данными
function createTodo({
  title,
  description,
  dueDate,
  priority,
  id = crypto.randomUUID(),
}) {
  return { title, description, dueDate, priority, id };
}


/***/ },

/***/ "./src/render/controller.js"
/*!**********************************!*\
  !*** ./src/render/controller.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProjectHandle: () => (/* binding */ deleteProjectHandle),
/* harmony export */   editTodoHandle: () => (/* binding */ editTodoHandle),
/* harmony export */   handleSelectOptions: () => (/* binding */ handleSelectOptions),
/* harmony export */   handleTodo: () => (/* binding */ handleTodo),
/* harmony export */   renderSelectOptions: () => (/* binding */ renderSelectOptions),
/* harmony export */   selectProject: () => (/* binding */ selectProject),
/* harmony export */   sideBar: () => (/* binding */ sideBar)
/* harmony export */ });
/* harmony import */ var _core_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/todo.js */ "./src/core/todo.js");
/* harmony import */ var _core_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/project.js */ "./src/core/project.js");
/* harmony import */ var _render_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-project.js */ "./src/render/render-project.js");
/* harmony import */ var _core_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/storage.js */ "./src/core/storage.js");
/* harmony import */ var _core_app_state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/app-state.js */ "./src/core/app-state.js");







const selectProject = document.getElementById("select-project");
const projectName = document.getElementById("project-name");

const sideBar = document.getElementById("side-bar");

const add = document.getElementById("add");
const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("due-date");
const selectTodo = document.getElementById("select-todo");

// создаем функцию отрисовки проекта которая принимает в себя аргументом данные из createTodo
function handleProject(todo) {
  // создаем переменную и записываем туда данные из валью инпута ,убираем лишние пробелы и приводим все к нижнему регистру для исключения дуюликатов
  const name = projectName.value.toLowerCase().trim();
  if (!name) return; // Если имя пустое, ничего не делаем

  const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)(); // создаем переменную и кладем в нее данные из источника истины state

  // 1. Ищем проект в данных state ОДИН РАЗ в самом начале
  const existingProject = state.find((project) => project.name === name);

  if (existingProject) {
    // ЕСЛИ НАШЛИ: работаем с существующим
    existingProject.addTodo(todo); // добавляем в существующий проект новый туду
    (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.setActiveProject)(existingProject); // делаем этот проект активным

    // Перерисовываем проект целиком, чтобы всё было актуально
    sideBar.innerHTML = "";
    sideBar.append((0,_render_project_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(existingProject));
    return; // Выходим
  }

  // 2. ЕСЛИ НЕ НАШЛИ: создаем новый (этот код выполнится, только если return не сработал)
  const newProject = (0,_core_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(name);
  newProject.addTodo(todo); // добавляем туду в новый проект
  (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.addProject)(newProject); // добавляем этот проект в state

  (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.setActiveProject)(newProject); // делаем его активным
  renderSelectOptions(); // Обновляем список выбора проектов в селекте

  sideBar.innerHTML = ""; // очищаем сайд бар
  sideBar.append((0,_render_project_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(newProject)); // и добавляем туда наш проект
}

//создаем функцию отрисовки туду
function handleTodo() {
  // вешаем событие слушателя на кнопку add
  add.addEventListener("click", (e) => {
    // отменяем дефолтное поведение отправки
    e.preventDefault();

    // делаем проверку на ввод : если эти поля пустые то кидаем всплывающуб надпись и прекращаем работу функции
    if (!title.value || !description.value || !dueDate.value) {
      alert("Заполните поля");
      return;
    }

    // создаем туду с помощью createTodo помещаяю туда дааные из формы
    const todo = (0,_core_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)({
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
      priority: selectTodo.value,
    });

    // создаем переменную и записываем туда данные из валью инпута ,убираем лишние пробелы и приводим все к нижнему регистру для исключения дуюликатов
    const nameValue = projectName.value?.toLowerCase().trim();

    // если оно пустое :
    if (!nameValue) {
      // создаем переменную в которую записываем активный проект
      let project = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getActiveProject)();

      // если активного проекта нет  или в state нет объектов :
      if (!project || (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)().length === 0) {
        // создаем дефолтный проект и добавляем его в state затем делаем активным
        project = (0,_core_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("General");
        (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.addProject)(project);
        (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.setActiveProject)(project);
      }

      // добавляем в проект todo
      project.addTodo(todo);

      // очищаем сайд бар и добавляем в него отрендированный проект
      sideBar.innerHTML = "";
      sideBar.append((0,_render_project_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(project));

      // Обновляем список выбора проектов в селекте
      renderSelectOptions();

      // если есть активный проект и state не пустой то вызываем handleProject с аргументом todo
    } else {
      handleProject(todo);
    }

    // сохраняем в localStorage наш текущий стейт и очищаем инпуты
    (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveState)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)());
    resetInputs();
  });
}
function resetInputs() {
  selectTodo.value = "low";
  title.value = "";
  description.value = "";
  projectName.value = "";
  dueDate.value = "";
}

// создаем функцию удаления проекта
function deleteProjectHandle() {
  // вешаем событие слушателя на сайд бар потому что кнопка удаления добавляется туда при рендере проекта
  sideBar.addEventListener("click", (e) => {
    // если кликнули не по кнопке удаления то завершаем работу функции
    if (!e.target.classList.contains("delete-project-btn")) return;

    // если клик был по кнопке то :
    // создаем константу id со значением датасета из кликнутой кнопки
    const id = e.target.dataset.id;

    // создаем константу с текущими данными из источника истины
    const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)();

    // ищем совпадение датасета кнопки в стейте у проекта с таким же id и присваеваем булево константе
    const projectToRemove = state.find((p) => p.id === id);

    // если такой проект есть то:
    if (projectToRemove) {
      // удалаем этот проект из стейта
      (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.removeProject)(projectToRemove);

      // обновляем localStorage
      (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveState)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)());

      // Обновляем список выбора проектов в селекте
      renderSelectOptions();

      // если id активного проекта равно датасету кликнутой кнопки то
      if ((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getActiveProject)()?.id === id) {
        sideBar.innerHTML = ""; // очищаем сайд бар
        const newState = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)(); // берем стейт и записываем его в переменную
        if (newState.length > 0) {
          // если стейт не пустой
          (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.setActiveProject)(newState[0]); // устанавоиваем активным проектом первый объект в стейте
          sideBar.append((0,_render_project_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(newState[0])); // добавляем первый объект в стейте в сайд бар с помощью рендера проектов
        }
      } else {
        // если айди активного проекта не равно датасету кнопки то
        sideBar.innerHTML = ""; // очищаем сайд бар
        sideBar.append((0,_render_project_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getActiveProject)())); // рендерим активный проект
      }
    }
  });
}

// создаем функцию удаления туду
function deleteTodo() {
  // вешаем слушатель событий на сайдбар
  sideBar.addEventListener("click", (e) => {
    // если кликнули по кнопке удаления туду то
    if (e.target.classList.contains("deleteTodoBtn")) {
      // cоздаем переменную id  и присваеваем ей датасет кликнутой кнопки
      const id = e.target.dataset.id;
      const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)(); // берем текущий стейт и записываем его в переменную
      for (let i = 0; i < state.length; i++) {
        const projects = state[i]; // на каждой итерации создаем проект из стейта

        for (let todo of projects.arr) {
          // добавляем еще один цикл чтобы пройтись по туду в проекте
          if (id === todo.id) {
            // если датасет кнопки равен id туду из проекта то
            projects.removeTodo(todo); // удаляем это туду из проекта
            e.target.closest(".todo-item").remove(); // удаляем див с этим туду
            (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveState)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)()); // сохраняем текущее state в localStorage
            break; // останавливаем цикл
          }
        }
      }
    }
  });
}

// создаем функцию рендера опций селекта проектов
function renderSelectOptions() {
  selectProject.innerHTML = ""; // очищаем селект
  let stateName = []; // создаем массив и для складывания имен проектов из стейта
  const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)(); // создаем переменную с текущим стейт
  for (let i = 0; i < state.length; i++) {
    stateName.push(state[i].name); // пушим  имя  проектов на каждой итерации
  }
  for (let j = 0; j < stateName.length; j++) {
    // создаем на каждой итерции опцию и присваеваем ей значения из нашего массива имен
    const option = document.createElement("option");
    option.textContent = stateName[j];
    option.value = stateName[j];
    selectProject.append(option);
  }
}

// создаем функцию отрисовки опций селекта проектов
function handleSelectOptions() {
  selectProject.addEventListener("change", (e) => {
    // вешаем слушатель событий реагирующий на изменение на селект проектов
    const name = selectProject.value; // создаем переменную с значением валью из выбранной опции в селекте проектов
    const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)(); // берем текущий стейт
    for (let i = 0; i < state.length; i++) {
      if (name === state[i].name) {
        // если текущий выбранный проект в селекте есть в стейте то
        (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.setActiveProject)(state[i]); // делаем его активным
        const active = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getActiveProject)(); // записываем его в переменную
        const project = (0,_render_project_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(active); // рендерим наш проект
        sideBar.innerHTML = ""; // очищаем сайдбар
        sideBar.append(project); // и добавляем в него наш проект
      }
    }
  });
}

//создаем функцию редактирования туду
function editTodoHandle() {
  let enable = false; // создаем флаг состояния
  sideBar.addEventListener("click", (e) => {
    if (!e.target.classList.contains("edit-btn")) return; // если клик не по кнопке редактирования - завершаем функцию
    e.preventDefault(); // останавливаем дефолтное поведение

    if (!enable) {
      // если false то находим родительский див кликнутой кнопки
      const todoEl = e.target.closest(".todo-item");
      const editTable = todoEl.querySelectorAll(".editable"); //находим все элементы в диве с классом editable
      for (let edit of editTable) {
        edit.disabled = false; // делаем их редактируемыми
      }
      enable = true; // меняем флаг состояния на true
    } else {
      // если кликнули второй раз то
      const id = e.target.dataset.id; // берем датасет кликнутой кнопки
      const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)(); // берем текущий стейт
      for (let projects of state) {
        for (let todo of projects.arr) {
          if (id === todo.id) {
            // если есть совпадение то
            // присваиваем всем елементам новые значения из валью
            const todoEl = e.target.closest(".todo-item");
            const editTable = todoEl.querySelectorAll(".editable");
            todo.title = todoEl.querySelector(".titleTodo").value;
            todo.description = todoEl.querySelector(".description").value;
            todo.dueDate = todoEl.querySelector(".dueDateTodo").value;
            todo.priority = todoEl.querySelector(".priorityTodo").value;

            (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveState)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_4__.getState)()); //обновляем localStorage
            enable = false; // меняем состояние
            for (let edit of editTable) {
              edit.disabled = true; // делаем не редактируемыми наши элементы
            }

            break; // останавоиваем цикл
          }
        }
      }
    }
  });
}

function movieTodoHandler() {
  sideBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      //добавить создание дом елемента со списком всех доступных проектов и при нажатии на какой-то из них использование метода movieProject();
    }
  });
}

deleteTodo();



/***/ },

/***/ "./src/render/render-project.js"
/*!**************************************!*\
  !*** ./src/render/render-project.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProject: () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var _render_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-todo.js */ "./src/render/render-todo.js");


//создаем функцию рендера проекта которая принимает объект с методами из createProject
function renderProject(project) {
  //создаем родительский див куда будем складывать все туду
  const projectEl = document.createElement("div");
  projectEl.classList.add("project-container");

  //создаем заголовок с названием взятым из имени проекта и добавляем его в родительский див
  const title = document.createElement("h2");
  title.textContent = project.name;
  projectEl.append(title);

  //создаем кнопку удаления проекта.
  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.add("delete-project-btn");
  deleteProjectBtn.classList.add("delete");
  deleteProjectBtn.classList.add("form-el");
  deleteProjectBtn.textContent = "Удалить проект";
  //присваиваем ей датасет айди из айди проекта
  deleteProjectBtn.dataset.id = project.id;
  projectEl.append(deleteProjectBtn);

  //создаем туду лист для размещения в нем всех туду содержащихся в проекте
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");

  //делаем цикл для перебора всех туду содержащихся в хранилище проекта
  for (let todo of project.arr) {
    //рендерим туду и добавляем на кажжой итерации в наш туду лист див
    todoList.append((0,_render_todo_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(todo));
  }
  //добавляем в родительский див тудулист и ретерним родительский див
  projectEl.append(todoList);

  return projectEl;
}


/***/ },

/***/ "./src/render/render-todo.js"
/*!***********************************!*\
  !*** ./src/render/render-todo.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodo: () => (/* binding */ renderTodo)
/* harmony export */ });
//создаем фукцию рендера туду, которая принимает обьект методов из createTodo, далее передадим его в контроллере
function renderTodo(todo) {
  //создаем див куда будем помещать другие елементы
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo-item");
  const btnTodo = document.createElement("div");
  btnTodo.classList.add("btn-todo-box");
  //создаем кнопку удаления туду
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.classList.add("btn-todo");
  deleteTodoBtn.classList.add("form-el");
  //присваиваем ей датасет айди из нашего объекта методов туду, чтобы в дальнейшем при нажатии на кнопку удалялся туду с таким айди из хранилища в проекте
  deleteTodoBtn.dataset.id = todo.id;
  deleteTodoBtn.textContent = "X";
  deleteTodoBtn.classList.add("deleteTodoBtn");
  deleteTodoBtn.classList.add("delete");
  //создаем элемент textarea  и делаем его нередактируемым disabled = true;
  const description = document.createElement("textarea");
  description.classList.add("text");
  description.classList.add("form-el");
  description.classList.add("editable");
  description.disabled = true;
  description.classList.add("description");

  //берем значение из todo и записываем его в наш элемент
  description.textContent = todo.description;

  //создаем инпут с типом text и делаем его disabled для того чтобы пользователь не мог изменить тект без нажатия на кнопку редакторивания
  const titleTodo = document.createElement("input");
  titleTodo.classList.add("text");
  titleTodo.classList.add("form-el");
  titleTodo.type = "text";
  titleTodo.classList.add("editable");
  titleTodo.disabled = true;
  titleTodo.classList.add("titleTodo");

  //берем значение из туду и записываем его в валью нашего элемента
  titleTodo.value = todo.title;

  //создаем селект и три опции также делаем их disabled
  const priorityTodo = document.createElement("select");
  priorityTodo.classList.add("editable");
  priorityTodo.classList.add("form-el");
  priorityTodo.classList.add("priorityTodo");
  priorityTodo.disabled = true;
  const option1 = document.createElement("option");
  option1.textContent = "low";
  option1.value = "low";
  const option2 = document.createElement("option");
  option2.textContent = "medium";
  option2.value = "medium";
  const option3 = document.createElement("option");
  option3.textContent = "high";
  option3.value = "high";

  priorityTodo.append(option1);
  priorityTodo.append(option2);
  priorityTodo.append(option3);

  //берем значение из туду и присваеваем его нашему селекту
  priorityTodo.value = todo.priority;

  //создаем инпут с типом date и делаем его disabled
  const dueDateTodo = document.createElement("input");
  dueDateTodo.classList.add("dueDateTodo");
  dueDateTodo.classList.add("form-el");
  dueDateTodo.classList.add("editable");
  dueDateTodo.disabled = true;
  dueDateTodo.type = "date";

  //берем значение из туду и присваеваем его в валью нашего элемента
  dueDateTodo.value = todo.dueDate;

  //создаем кнопку редакторования , в будущем при нажатии на которую все неактивные поля disabled = true станут disabled = false;
  const editBtn = document.createElement("button");
  editBtn.dataset.id = todo.id;
  editBtn.textContent = "edit";
  editBtn.classList.add("edit-btn");
  editBtn.classList.add("btn-todo");
  editBtn.classList.add("form-el");

  //добавляем все созданные элементы в див туду и ретерним его
  todoEl.append(titleTodo);
  todoEl.append(description);
  todoEl.append(priorityTodo);

  todoEl.append(dueDateTodo);
  btnTodo.append(deleteTodoBtn);
  btnTodo.append(editBtn);
  todoEl.append(btnTodo);

  return todoEl;
}


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _render_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/controller.js */ "./src/render/controller.js");
/* harmony import */ var _core_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/project.js */ "./src/core/project.js");
/* harmony import */ var _render_render_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render/render-project.js */ "./src/render/render-project.js");
/* harmony import */ var _core_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/storage.js */ "./src/core/storage.js");
/* harmony import */ var _core_app_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/app-state.js */ "./src/core/app-state.js");
/* harmony import */ var _core_todo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/todo.js */ "./src/core/todo.js");








// Только создаем объект
function createDefault() {
  return (0,_core_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("General");
}

// создаем функцию загрузки данных из localstorage
function storageLoad() {
  const projects = (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_4__.loadState)(); // берем все объекты из localStorage

  if (projects.length === 0) {
    // 1. Создаем General, если пусто
    const project = createDefault();
    (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.addProject)(project);
  } else {
    // 2. Восстанавливаем данные из localStorage
    for (let i = 0; i < projects.length; i++) {
      const projectData = projects[i];
      const project = (0,_core_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(projectData.name);

      for (let todoData of projectData.arr) {
        const todo = (0,_core_todo_js__WEBPACK_IMPORTED_MODULE_6__.createTodo)(todoData);
        project.addTodo(todo);
      }
      (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.addProject)(project);
    }
  }

  // 3. ЕДИНАЯ ТОЧКА РЕНДЕРА ПОСЛЕ ЗАГРУЗКИ
  const allProjects = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)();
  if (allProjects.length > 0) {
    const firstProject = allProjects[0];
    (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.setActiveProject)(firstProject);

    _render_controller_js__WEBPACK_IMPORTED_MODULE_1__.sideBar.innerHTML = "";
    _render_controller_js__WEBPACK_IMPORTED_MODULE_1__.sideBar.append((0,_render_render_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(firstProject));

    (0,_render_controller_js__WEBPACK_IMPORTED_MODULE_1__.renderSelectOptions)();
  }
}

(0,_render_controller_js__WEBPACK_IMPORTED_MODULE_1__.editTodoHandle)();
(0,_render_controller_js__WEBPACK_IMPORTED_MODULE_1__.handleTodo)();
storageLoad();
(0,_render_controller_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectHandle)();
(0,_render_controller_js__WEBPACK_IMPORTED_MODULE_1__.handleSelectOptions)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsZ0NBQWdDLDJDQUEyQywwQkFBMEIsd0JBQXdCLDJDQUEyQyxnREFBZ0QsdUNBQXVDLG9FQUFvRSx3Q0FBd0MsMENBQTBDLHVDQUF1QyxzQkFBc0Isb0JBQW9CLGdEQUFnRCx5QkFBeUIseUJBQXlCLEtBQUssT0FBTyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixLQUFLLGNBQWMsMkNBQTJDLG9CQUFvQiw2QkFBNkIsS0FBSyxrQkFBa0Isb0NBQW9DLDJDQUEyQyxvQkFBb0Isa0JBQWtCLEtBQUssZUFBZSxvQ0FBb0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLDZCQUE2Qix1Q0FBdUMsbUJBQW1CLGtCQUFrQiwwQ0FBMEMsS0FBSyxnQkFBZ0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLGlCQUFpQixrQkFBa0IsS0FBSyxVQUFVLG9DQUFvQywyQ0FBMkMsb0JBQW9CLGtCQUFrQixLQUFLLGNBQWMsMENBQTBDLG1CQUFtQixpQ0FBaUMsdUNBQXVDLEtBQUssYUFBYSw0QkFBNEIsS0FBSyxlQUFlLGtDQUFrQyxLQUFLLGVBQWUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsNkJBQTZCLDZCQUE2QixvQkFBb0IsS0FBSyx3QkFBd0IsMEJBQTBCLG9CQUFvQiw2QkFBNkIsNkJBQTZCLDZCQUE2QixpQkFBaUIsa0JBQWtCLEtBQUssZ0JBQWdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDZCQUE2Qix1QkFBdUIsS0FBSyxtQkFBbUIsa0NBQWtDLG9CQUFvQixxQ0FBcUMsS0FBSyxlQUFlLGlCQUFpQixLQUFLLHVCQUF1QjtBQUMvaEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4SDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9FOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJoQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDZDO0FBQ007QUFDQztBQUNMO0FBQy9DO0FBTzhCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsZ0JBQWdCLDREQUFRLElBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLElBQUksb0VBQWdCLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQWE7QUFDaEMsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrREFBYTtBQUNsQyw0QkFBNEI7QUFDNUIsRUFBRSw4REFBVSxjQUFjO0FBQzFCO0FBQ0EsRUFBRSxvRUFBZ0IsY0FBYztBQUNoQyx5QkFBeUI7QUFDekI7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCLGlFQUFhLGVBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0VBQWdCO0FBQ3BDO0FBQ0E7QUFDQSxzQkFBc0IsNERBQVE7QUFDOUI7QUFDQSxrQkFBa0IsK0RBQWE7QUFDL0IsUUFBUSw4REFBVTtBQUNsQixRQUFRLG9FQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpRUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBUyxDQUFDLDREQUFRO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0REFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUVBQWE7QUFDbkI7QUFDQTtBQUNBLE1BQU0sMkRBQVMsQ0FBQyw0REFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvRUFBZ0I7QUFDMUIsZ0NBQWdDO0FBQ2hDLHlCQUF5Qiw0REFBUSxJQUFJO0FBQ3JDO0FBQ0E7QUFDQSxVQUFVLG9FQUFnQixlQUFlO0FBQ3pDLHlCQUF5QixpRUFBYSxnQkFBZ0I7QUFDdEQ7QUFDQSxRQUFRO0FBQ1I7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCLGlFQUFhLENBQUMsb0VBQWdCLE1BQU07QUFDM0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBUSxJQUFJO0FBQ2hDLHNCQUFzQixrQkFBa0I7QUFDeEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMscURBQXFEO0FBQ3JELFlBQVksMkRBQVMsQ0FBQyw0REFBUSxLQUFLO0FBQ25DLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIsZ0JBQWdCLDREQUFRLElBQUk7QUFDNUIsa0JBQWtCLGtCQUFrQjtBQUNwQyxtQ0FBbUM7QUFDbkM7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxrQkFBa0IsNERBQVEsSUFBSTtBQUM5QixvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQSxRQUFRLG9FQUFnQixZQUFZO0FBQ3BDLHVCQUF1QixvRUFBZ0IsSUFBSTtBQUMzQyx3QkFBd0IsaUVBQWEsVUFBVTtBQUMvQyxnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSwwREFBMEQ7QUFDMUQsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EscUJBQXFCO0FBQ3JCLE1BQU07QUFDTjtBQUNBLHNDQUFzQztBQUN0QyxvQkFBb0IsNERBQVEsSUFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFTLENBQUMsNERBQVEsS0FBSztBQUNuQyw0QkFBNEI7QUFDNUI7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFTRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RTNEM7QUFDOUM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQVFVO0FBQ2tCO0FBQ1M7QUFDYjtBQUMrQjtBQUNqQztBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTLCtEQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFTLElBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFVO0FBQ2QsSUFBSTtBQUNKO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBLHNCQUFzQiwrREFBYTtBQUNuQztBQUNBO0FBQ0EscUJBQXFCLHlEQUFVO0FBQy9CO0FBQ0E7QUFDQSxNQUFNLDhEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDREQUFRO0FBQzlCO0FBQ0E7QUFDQSxJQUFJLG9FQUFnQjtBQUNwQjtBQUNBLElBQUksMERBQU87QUFDWCxJQUFJLDBEQUFPLFFBQVEsd0VBQWE7QUFDaEM7QUFDQSxJQUFJLDBFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxxRUFBYztBQUNkLGlFQUFVO0FBQ1Y7QUFDQSwwRUFBbUI7QUFDbkIsMEVBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29yZS9hcHAtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb3JlL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb3JlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb3JlL3RvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9yZW5kZXIvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3JlbmRlci9yZW5kZXItcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3JlbmRlci9yZW5kZXItdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLyrRhtCy0LXRgtCwKi9cclxuICAtLXByaW1hcnktY29sb3I6IGJsdWU7XHJcbiAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcclxuICAtLWJnLWNvbG9yOiBncmVlbjtcclxuICAtLXNoYWRvdy10ZXh0OiAxcHggMXB4IDJweCBsaWdodGJsdWU7XHJcbiAgLS1zaGFkb3ctYm94OiAxcHggMXB4IDlweCByZ2IoNjUsIDY5LCA2OCk7XHJcbiAgLS1idXR0b24tY29sb3I6IHJnYig4MSwgODEsIDIzMik7XHJcblxyXG4gIC8q0YDQsNC30LzQtdGA0Ysg0YjRgNC40YTRgtCwKi9cclxuICAtLWZzLXNtOiBjbGFtcCgwLjhyZW0sIDJ2dywgMXJlbSk7XHJcbiAgLS1mcy1tZDogY2xhbXAoMXJlbSwgM3Z3LCAxLjVyZW0pO1xyXG4gIC0tZnMtbGc6IGNsYW1wKDEuNXJlbSwgNHZ3LCAyLjVyZW0pO1xyXG5cclxuICAvKtGI0YDQuNGE0YLRiyovXHJcbiAgLS1mbS1sb2dvOiBkO1xyXG4gIC0tZm0tcHJvamVjdDogcDtcclxuICAtLWZtLS10b2RvOiBqO1xyXG5cclxuICAvKtC+0YLRgdGC0YPQv9GLKi9cclxuICAtLXNwYWNpbmctc206IDAuNXJlbTtcclxuICAtLXNwYXNpbmctbWQ6IDFyZW07XHJcbiAgLS1zcGFzaW5nLWxnOiAycmVtO1xyXG59XHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjYsIDIxNywgMjE5KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3Bhc2luZy1tZCk7XHJcbn1cclxuI3Byb2plY3QtYm94IHtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYm94KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAyMDUsIDIwNyk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMzV2dztcclxufVxyXG4jZm9ybS1ib3gge1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ib3gpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiB3cmFwIGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3Bhc2luZy1sZyk7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgMTY3LCAxNzYpO1xyXG59XHJcbiNmb3JtLXRvZG8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuI2JveCB7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJveCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjA1LCAyMDcpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDM1dnc7XHJcbn1cclxuLmZvcm0tZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDIsIDIyNSwgNjApO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zcGFzaW5nLWxnKTtcclxufVxyXG4uZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLmVkaXQtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XHJcbn1cclxuI3NpZGUtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ucHJvamVjdC1jb250YWluZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgZ2FwOiB2YXIoLS1zcGFzaW5nLWxnKTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcbi50b2RvLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJ0bi10b2RvLWJveCB7XHJcbiAgZmxleC1mbG93OiB3cmFwIHJvdy1yZXZlcnNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5idG4tdG9kbyB7XHJcbiAgd2lkdGg6IDQ4JTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyx5Q0FBeUM7RUFDekMsZ0NBQWdDOztFQUVoQyxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGlDQUFpQztFQUNqQyxtQ0FBbUM7O0VBRW5DLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7O0VBRWIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjs7RUFFdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC8q0YbQstC10YLQsCovXFxyXFxuICAtLXByaW1hcnktY29sb3I6IGJsdWU7XFxyXFxuICAtLXRleHQtY29sb3I6IHdoaXRlO1xcclxcbiAgLS1iZy1jb2xvcjogZ3JlZW47XFxyXFxuICAtLXNoYWRvdy10ZXh0OiAxcHggMXB4IDJweCBsaWdodGJsdWU7XFxyXFxuICAtLXNoYWRvdy1ib3g6IDFweCAxcHggOXB4IHJnYig2NSwgNjksIDY4KTtcXHJcXG4gIC0tYnV0dG9uLWNvbG9yOiByZ2IoODEsIDgxLCAyMzIpO1xcclxcblxcclxcbiAgLyrRgNCw0LfQvNC10YDRiyDRiNGA0LjRhNGC0LAqL1xcclxcbiAgLS1mcy1zbTogY2xhbXAoMC44cmVtLCAydncsIDFyZW0pO1xcclxcbiAgLS1mcy1tZDogY2xhbXAoMXJlbSwgM3Z3LCAxLjVyZW0pO1xcclxcbiAgLS1mcy1sZzogY2xhbXAoMS41cmVtLCA0dncsIDIuNXJlbSk7XFxyXFxuXFxyXFxuICAvKtGI0YDQuNGE0YLRiyovXFxyXFxuICAtLWZtLWxvZ286IGQ7XFxyXFxuICAtLWZtLXByb2plY3Q6IHA7XFxyXFxuICAtLWZtLS10b2RvOiBqO1xcclxcblxcclxcbiAgLyrQvtGC0YHRgtGD0L/RiyovXFxyXFxuICAtLXNwYWNpbmctc206IDAuNXJlbTtcXHJcXG4gIC0tc3Bhc2luZy1tZDogMXJlbTtcXHJcXG4gIC0tc3Bhc2luZy1sZzogMnJlbTtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY2LCAyMTcsIDIxOSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFzaW5nLW1kKTtcXHJcXG59XFxyXFxuI3Byb2plY3QtYm94IHtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ib3gpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjA1LCAyMDcpO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAzNXZ3O1xcclxcbn1cXHJcXG4jZm9ybS1ib3gge1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJveCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiB3cmFwIGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNwYXNpbmctbGcpO1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDE2NywgMTc2KTtcXHJcXG59XFxyXFxuI2Zvcm0tdG9kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuI2JveCB7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYm94KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDIwNSwgMjA3KTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMzV2dztcXHJcXG59XFxyXFxuLmZvcm0tZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiwgMjI1LCA2MCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNwYXNpbmctbGcpO1xcclxcbn1cXHJcXG4uZGVsZXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLmVkaXQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXHJcXG59XFxyXFxuI3NpZGUtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBnYXA6IHZhcigtLXNwYXNpbmctbGcpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcclxcblxcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uYnRuLXRvZG8tYm94IHtcXHJcXG4gIGZsZXgtZmxvdzogd3JhcCByb3ctcmV2ZXJzZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5idG4tdG9kbyB7XFxyXFxuICB3aWR0aDogNDglO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy/RgdC+0LfQtNCw0LXQvCDQtNCw0L3QvdGL0LUgc3RhdGUg0LXQtNC40L3RgdGC0LLQtdC90L3Ri9C5INC40YHRgtC+0YfQvdC40Log0LjRgdGC0LjQvdGLXHJcbi8v0Lgg0YHQvtC30LTQsNC10Lwg0LDQutGC0LjQstC90YvQuSDQv9GA0L7QtdC60YIg0YHQviDQt9C90LDRh9C10L3QuNC10LwgbnVsbFxyXG5sZXQgc3RhdGUgPSBbXTtcclxubGV0IGFjdGl2ZSA9IG51bGw7XHJcblxyXG4vL9GB0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0LLQvtC30LLRgNCw0YLQsCDQutC+0L/QuNC4IHN0YXRlXHJcbmNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xyXG4gIHJldHVybiBbLi4uc3RhdGVdO1xyXG59O1xyXG5cclxuLy/RgdC+0LfQtNCw0LXQvCDQvNC10YLQvtC0INC00L7QsdCw0LLQu9C10L3QuNGPINC/0YDQvtC10LrRgtCwINCyIHN0YXRlXHJcbmNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gIC8v0L/RgNC+0LLQtdGA0LrQsCDQvdCwINC90LDQu9C40YfQuNC1INC/0YDQvtC10LrRgtCwINCyIHN0YXRlICwg0LXRgdC70Lgg0LXRgdGC0Ywg0YLQviDRgNC10YLQtdGA0L3QuNC8LCDQtdGB0LvQuCDQvdC10YIg0YLQviDQv9GD0YjQuNC8INCyIHN0YXRlXHJcbiAgaWYgKHN0YXRlLmluY2x1ZGVzKHByb2plY3QpKSByZXR1cm47XHJcbiAgc3RhdGUucHVzaChwcm9qZWN0KTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG4vL9GB0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0YPQtNCw0LvQtdC90LjRjyDQv9GA0L7QtdC60YLQsCDQuNC3IHN0YXRlXHJcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gIC8v0LXRgdC70Lgg0LXQs9C+INGC0LDQvCDQvdC10YIg0YLQviDRgNC10YLQtdGA0L3QuNC8XHJcbiAgaWYgKCFzdGF0ZS5pbmNsdWRlcyhwcm9qZWN0KSkgcmV0dXJuO1xyXG5cclxuICAvL9C10YHQu9C4INC10YHRgtGMINGC0L4g0LHQtdGA0LXQvCDQtdCz0L4g0LjQvdC00LXQutGBINC40Lcgc3RhdGVcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4T2YocHJvamVjdCk7XHJcbiAgLy/QuCDRg9C00LDQu9GP0LXQvCDRgSDQv9C+0LzQvtGJ0YzRjiDQvNGD0YLQuNGA0YPRjtGJ0LXQs9C+INC80LXRgtC+0LTQsCBzcGxpY2UsINC60L7RgtC+0YDRi9C5INC/0YDQuNC90LzQsNC10YIg0LTQstCwINCw0YDQs9GD0LzQtdC90YLQsCA6INC/0LXRgNCy0YvQuSDQuNC90LTQtdC60YEg0YEg0LrQvtGC0L7RgNC+0LPQviDQvdGD0LbQvdC+INC90LDRh9Cw0YLRjCDRg9C00LDQu9C10L3QuNC1LCDQstGC0L7RgNC+0Lkg0YHQutC+0LvRjNC60L4g0Y3Qu9C10LzQtdC90YLQvtCyINC90YPQttC90L4g0YPQtNCw0LvQuNGC0YxcclxuICBzdGF0ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIC8v0LLQvtC30LLRgNCw0YnQsNC10Lwg0L7QsdC90L7QstC70LXQvdC90YvQuSBzdGF0ZVxyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbi8vY9C+0LfQtNCw0LXQvCDQvNC10YLQvtC0INGD0YHRgtCw0L3QvtCy0LrQuCDQsNC60YLQuNCy0L3QvtCz0L4g0L/RgNC+0LXQutGC0LBcclxuY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgYWN0aXZlID0gcHJvamVjdDtcclxuICByZXR1cm4gYWN0aXZlO1xyXG59O1xyXG4vL9C80LXRgtC+0LQg0LLQvtC30LLRgNCw0YLQsCDQsNC60YLQuNCy0L3QvtCz0L4g0L/RgNC+0LXQutGC0LBcclxuY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IHtcclxuICByZXR1cm4gYWN0aXZlO1xyXG59O1xyXG5leHBvcnQge1xyXG4gIGdldFN0YXRlLFxyXG4gIGdldEFjdGl2ZVByb2plY3QsXHJcbiAgc2V0QWN0aXZlUHJvamVjdCxcclxuICByZW1vdmVQcm9qZWN0LFxyXG4gIGFkZFByb2plY3QsXHJcbn07XHJcbiIsIi8v0YTRg9C90LrRhtC40Y8g0YHQvtC30LTQsNC90LjRjyDQv9GA0L7QtdC60YLQsCDQv9GA0LjQvdC40LzQsNGO0YnQsNGPINC10LPQviDQvdCw0LfQstCw0L3QuNC1XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUsIGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKSkge1xyXG4gIC8v0YHQvtGF0LbQsNC10Lwg0YXRgNCw0L3QuNC70LjRidC1INC00LvRjyDQsdGD0LTRg9GJ0LjRhSDRgtGD0LTRg1xyXG4gIGxldCBhcnIgPSBbXTtcclxuXHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDQvNC10YLQvtC0INC00L7QsdCw0LLQu9C10L3QuNGPINGC0YPQtNGDINCyINGF0YDQsNC90LjQu9C40YnQtSDQtdGB0LvQuCDQtdCz0L4g0YLQsNC8INC90LXRglxyXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgaWYgKGFyci5pbmNsdWRlcyh0b2RvKSkgcmV0dXJuIG51bGw7XHJcbiAgICBhcnIucHVzaCh0b2RvKTtcclxuICB9O1xyXG5cclxuICAvL9GB0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0YPQtNCw0LvQtdC90LjRjyDRgtGD0LTRgyDQtdGB0LvQuCDQvtC90L4g0YLQsNC8INC10YHRgtGMXHJcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICBpZiAoIWFyci5pbmNsdWRlcyh0b2RvKSkgcmV0dXJuIG51bGw7XHJcbiAgICAvL9C40YHQv9C+0LvRjNC30YPQtdC8INC40L3QtNC10LrRgdCw0YbQuNGOINC4INC80LXRgtC+0LQgc3BsaWNlXHJcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHRvZG8pO1xyXG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvL9Cy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC+0LHQvdC+0LLQu9C10L3QvdC+0LUg0YXRgNCw0L3QuNC70LjRidC1XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH07XHJcblxyXG4gIC8v0YHQvtC30LTQsNC10Lwg0LzQtdGC0L7QtCDQv9C10YDQtdGC0LDRgdC60LjQstCw0L3QuNGPINGC0YPQtNGDINGBINGC0LXQutGD0YnQtdCz0L4g0L/RgNC+0LXQutGC0LAg0L3QsCDQtNGA0YPQs9C+0LlcclxuICAvL9C/0YDQuNC90LjQvNCw0LXRgiDRgtGD0LTRgyDQutC+0YLQvtGA0YvQuSDRhdC+0YLQuNC8INC/0LXRgNC10YLQsNGJ0LjRgtGMINC4INC/0YDQvtC10LrRgiDQutGD0LTQsCDRhdC+0YLQuNC8INC/0LXRgNC10YLQsNGJ0LjRgtGMXHJcbiAgY29uc3QgbW92aWVUb2RvID0gKHRvZG8sIHRhcmdldFByb2plY3QpID0+IHtcclxuICAgIGlmICh0YXJnZXRQcm9qZWN0LmFyci5pbmNsdWRlcyh0b2RvKSkgcmV0dXJuIG51bGw7XHJcbiAgICB0YXJnZXRQcm9qZWN0LmFkZFRvZG8odG9kbyk7XHJcbiAgICByZW1vdmVUb2RvKHRvZG8pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGFyciwgbmFtZSwgYWRkVG9kbywgcmVtb3ZlVG9kbywgbW92aWVUb2RvLCBpZCB9O1xyXG59XHJcbiIsIi8v0YHQvtC30LTQsNC10Lwg0LzQtdGC0L7QtCDRgdC+0YXRgNCw0L3QtdC90LjRjyBzdGF0ZSDQsiDRhdGA0LDQvdC40LvQuNGJ0LUgbG9rYWxTdG9yYWdlXHJcbmNvbnN0IHNhdmVTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gIC8v0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LLRgdGC0YDQvtC10L3QvdGL0LUg0YTRg9C90LrRhtC40Lgg0LTQvtCx0LDQstC70Y/QtdGCINCyIGxvY2FsU3RvcmFnZSDQvdCw0Ygg0YHRgtC10LnRglxyXG4gIC8v0L/QtdGA0LXQtCDQtNC+0LHQsNCy0LvQtdC90LjQtdC8INC90YPQttC90L4g0YHQvtC30LTQsNGC0Ywg0LrQu9GO0Ycg0LPQtNC1INC30L3QsNGH0LXQvdC40LXQvCDQsdGD0LTQtdGCINC90LDRiCBzdGF0ZVxyXG4gIC8v0L/RgNC10L7QsdGA0LDQt9GD0LXQvCDQsiBqc29uINGB0YLRgNC+0LrQuCDQvdCw0Yggc3RhdGUg0LjQvdCw0YfQtSDQstGL0LnQtNC10YIg0L7RiNC40LHQutCwXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG59O1xyXG4vL9GB0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhSDQuNC3IGxvY2FsU3RvcmFnZVxyXG5jb25zdCBsb2FkU3RhdGUgPSAoKSA9PiB7XHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDQutC+0L3RgdGC0LDQvdGC0YMgZGF0YSDRgdC+INC30L3QsNGH0LXQvdC40LXQvCDQuNC3INC70L7QutCw0LvRjNC90L7Qs9C+INGF0YDQsNC90LjQu9C40YnQsFxyXG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpO1xyXG4gIC8v0LTQtdC70LDQtdC8INC/0YDQvtCy0LXRgNC60YMg0LXRgdC70Lgg0L7QvdC+INC/0YPRgdGC0L7QtSDRgtC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC80LDRgdGB0LjQsiwg0YfRgtC+0LHRiyDQvdCw0Ygg0LrQvtC0INCyINC00LDQu9GM0L3QtdGI0LXQvCDQvdC1INC70L7QvNCw0LvRgdGPXHJcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBbXTtcclxuICAvL9C10YHQu9C4INC90LUg0L/Rg9GB0YLQvtC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC90YvQtSDQtNCw0L3QvdGL0LUg0LjQtyBqc29uINGB0YLRgNC+0Log0LIg0LjQt9C90LDRh9C70YzQvdGL0Lkg0LLQuNC0XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbn07XHJcbmV4cG9ydCB7IHNhdmVTdGF0ZSwgbG9hZFN0YXRlIH07XHJcbiIsIi8vINGE0YPQvdC60YbQuNGOINGB0L7Qt9C00LDQvdC40Y8g0YLRg9C00YMg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNCw0LXRgiDQsiDRgdC10YzRjyDQvtCx0YrQtdC60YIg0YEg0LTQsNC90L3Ri9C80LhcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oe1xyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGR1ZURhdGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG59KSB7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4uL2NvcmUvdG9kby5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4uL2NvcmUvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0IH0gZnJvbSBcIi4vcmVuZGVyLXByb2plY3QuanNcIjtcclxuaW1wb3J0IHsgc2F2ZVN0YXRlIH0gZnJvbSBcIi4uL2NvcmUvc3RvcmFnZS5qc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRTdGF0ZSxcclxuICBnZXRBY3RpdmVQcm9qZWN0LFxyXG4gIHNldEFjdGl2ZVByb2plY3QsXHJcbiAgcmVtb3ZlUHJvamVjdCxcclxuICBhZGRQcm9qZWN0LFxyXG59IGZyb20gXCIuLi9jb3JlL2FwcC1zdGF0ZS5qc1wiO1xyXG5cclxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XHJcblxyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWJhclwiKTtcclxuXHJcbmNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcclxuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIik7XHJcbmNvbnN0IHNlbGVjdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC10b2RvXCIpO1xyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0L7RgtGA0LjRgdC+0LLQutC4INC/0YDQvtC10LrRgtCwINC60L7RgtC+0YDQsNGPINC/0YDQuNC90LjQvNCw0LXRgiDQsiDRgdC10LHRjyDQsNGA0LPRg9C80LXQvdGC0L7QvCDQtNCw0L3QvdGL0LUg0LjQtyBjcmVhdGVUb2RvXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3QodG9kbykge1xyXG4gIC8vINGB0L7Qt9C00LDQtdC8INC/0LXRgNC10LzQtdC90L3Rg9GOINC4INC30LDQv9C40YHRi9Cy0LDQtdC8INGC0YPQtNCwINC00LDQvdC90YvQtSDQuNC3INCy0LDQu9GM0Y4g0LjQvdC/0YPRgtCwICzRg9Cx0LjRgNCw0LXQvCDQu9C40YjQvdC40LUg0L/RgNC+0LHQtdC70Ysg0Lgg0L/RgNC40LLQvtC00LjQvCDQstGB0LUg0Log0L3QuNC20L3QtdC80YMg0YDQtdCz0LjRgdGC0YDRgyDQtNC70Y8g0LjRgdC60LvRjtGH0LXQvdC40Y8g0LTRg9GO0LvQuNC60LDRgtC+0LJcclxuICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWUudmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgaWYgKCFuYW1lKSByZXR1cm47IC8vINCV0YHQu9C4INC40LzRjyDQv9GD0YHRgtC+0LUsINC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LXQvFxyXG5cclxuICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7IC8vINGB0L7Qt9C00LDQtdC8INC/0LXRgNC10LzQtdC90L3Rg9GOINC4INC60LvQsNC00LXQvCDQsiDQvdC10LUg0LTQsNC90L3Ri9C1INC40Lcg0LjRgdGC0L7Rh9C90LjQutCwINC40YHRgtC40L3RiyBzdGF0ZVxyXG5cclxuICAvLyAxLiDQmNGJ0LXQvCDQv9GA0L7QtdC60YIg0LIg0LTQsNC90L3Ri9GFIHN0YXRlINCe0JTQmNCdINCg0JDQlyDQsiDRgdCw0LzQvtC8INC90LDRh9Cw0LvQtVxyXG4gIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IHN0YXRlLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gIGlmIChleGlzdGluZ1Byb2plY3QpIHtcclxuICAgIC8vINCV0KHQm9CYINCd0JDQqNCb0Jg6INGA0LDQsdC+0YLQsNC10Lwg0YEg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC8XHJcbiAgICBleGlzdGluZ1Byb2plY3QuYWRkVG9kbyh0b2RvKTsgLy8g0LTQvtCx0LDQstC70Y/QtdC8INCyINGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQv9GA0L7QtdC60YIg0L3QvtCy0YvQuSDRgtGD0LTRg1xyXG4gICAgc2V0QWN0aXZlUHJvamVjdChleGlzdGluZ1Byb2plY3QpOyAvLyDQtNC10LvQsNC10Lwg0Y3RgtC+0YIg0L/RgNC+0LXQutGCINCw0LrRgtC40LLQvdGL0LxcclxuXHJcbiAgICAvLyDQn9C10YDQtdGA0LjRgdC+0LLRi9Cy0LDQtdC8INC/0YDQvtC10LrRgiDRhtC10LvQuNC60L7QvCwg0YfRgtC+0LHRiyDQstGB0ZEg0LHRi9C70L4g0LDQutGC0YPQsNC70YzQvdC+XHJcbiAgICBzaWRlQmFyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBzaWRlQmFyLmFwcGVuZChyZW5kZXJQcm9qZWN0KGV4aXN0aW5nUHJvamVjdCkpO1xyXG4gICAgcmV0dXJuOyAvLyDQktGL0YXQvtC00LjQvFxyXG4gIH1cclxuXHJcbiAgLy8gMi4g0JXQodCb0Jgg0J3QlSDQndCQ0KjQm9CYOiDRgdC+0LfQtNCw0LXQvCDQvdC+0LLRi9C5ICjRjdGC0L7RgiDQutC+0LQg0LLRi9C/0L7Qu9C90LjRgtGB0Y8sINGC0L7Qu9GM0LrQviDQtdGB0LvQuCByZXR1cm4g0L3QtSDRgdGA0LDQsdC+0YLQsNC7KVxyXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xyXG4gIG5ld1Byb2plY3QuYWRkVG9kbyh0b2RvKTsgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGC0YPQtNGDINCyINC90L7QstGL0Lkg0L/RgNC+0LXQutGCXHJcbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTsgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGN0YLQvtGCINC/0YDQvtC10LrRgiDQsiBzdGF0ZVxyXG5cclxuICBzZXRBY3RpdmVQcm9qZWN0KG5ld1Byb2plY3QpOyAvLyDQtNC10LvQsNC10Lwg0LXQs9C+INCw0LrRgtC40LLQvdGL0LxcclxuICByZW5kZXJTZWxlY3RPcHRpb25zKCk7IC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRgdC/0LjRgdC+0Log0LLRi9Cx0L7RgNCwINC/0YDQvtC10LrRgtC+0LIg0LIg0YHQtdC70LXQutGC0LVcclxuXHJcbiAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiOyAvLyDQvtGH0LjRidCw0LXQvCDRgdCw0LnQtCDQsdCw0YBcclxuICBzaWRlQmFyLmFwcGVuZChyZW5kZXJQcm9qZWN0KG5ld1Byb2plY3QpKTsgLy8g0Lgg0LTQvtCx0LDQstC70Y/QtdC8INGC0YPQtNCwINC90LDRiCDQv9GA0L7QtdC60YJcclxufVxyXG5cclxuLy/RgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDQvtGC0YDQuNGB0L7QstC60Lgg0YLRg9C00YNcclxuZnVuY3Rpb24gaGFuZGxlVG9kbygpIHtcclxuICAvLyDQstC10YjQsNC10Lwg0YHQvtCx0YvRgtC40LUg0YHQu9GD0YjQsNGC0LXQu9GPINC90LAg0LrQvdC+0L/QutGDIGFkZFxyXG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIC8vINC+0YLQvNC10L3Rj9C10Lwg0LTQtdGE0L7Qu9GC0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8g0LTQtdC70LDQtdC8INC/0YDQvtCy0LXRgNC60YMg0L3QsCDQstCy0L7QtCA6INC10YHQu9C4INGN0YLQuCDQv9C+0LvRjyDQv9GD0YHRgtGL0LUg0YLQviDQutC40LTQsNC10Lwg0LLRgdC/0LvRi9Cy0LDRjtGJ0YPQsSDQvdCw0LTQv9C40YHRjCDQuCDQv9GA0LXQutGA0LDRidCw0LXQvCDRgNCw0LHQvtGC0YMg0YTRg9C90LrRhtC40LhcclxuICAgIGlmICghdGl0bGUudmFsdWUgfHwgIWRlc2NyaXB0aW9uLnZhbHVlIHx8ICFkdWVEYXRlLnZhbHVlKSB7XHJcbiAgICAgIGFsZXJ0KFwi0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9GPXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0YLRg9C00YMg0YEg0L/QvtC80L7RidGM0Y4gY3JlYXRlVG9kbyDQv9C+0LzQtdGJ0LDRj9GOINGC0YPQtNCwINC00LDQsNC90YvQtSDQuNC3INGE0L7RgNC80YtcclxuICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKHtcclxuICAgICAgdGl0bGU6IHRpdGxlLnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICAgIGR1ZURhdGU6IGR1ZURhdGUudmFsdWUsXHJcbiAgICAgIHByaW9yaXR5OiBzZWxlY3RUb2RvLnZhbHVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0L/QtdGA0LXQvNC10L3QvdGD0Y4g0Lgg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0YLRg9C00LAg0LTQsNC90L3Ri9C1INC40Lcg0LLQsNC70YzRjiDQuNC90L/Rg9GC0LAgLNGD0LHQuNGA0LDQtdC8INC70LjRiNC90LjQtSDQv9GA0L7QsdC10LvRiyDQuCDQv9GA0LjQstC+0LTQuNC8INCy0YHQtSDQuiDQvdC40LbQvdC10LzRgyDRgNC10LPQuNGB0YLRgNGDINC00LvRjyDQuNGB0LrQu9GO0YfQtdC90LjRjyDQtNGD0Y7Qu9C40LrQsNGC0L7QslxyXG4gICAgY29uc3QgbmFtZVZhbHVlID0gcHJvamVjdE5hbWUudmFsdWU/LnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cclxuICAgIC8vINC10YHQu9C4INC+0L3QviDQv9GD0YHRgtC+0LUgOlxyXG4gICAgaWYgKCFuYW1lVmFsdWUpIHtcclxuICAgICAgLy8g0YHQvtC30LTQsNC10Lwg0L/QtdGA0LXQvNC10L3QvdGD0Y4g0LIg0LrQvtGC0L7RgNGD0Y4g0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LDQutGC0LjQstC90YvQuSDQv9GA0L7QtdC60YJcclxuICAgICAgbGV0IHByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XHJcblxyXG4gICAgICAvLyDQtdGB0LvQuCDQsNC60YLQuNCy0L3QvtCz0L4g0L/RgNC+0LXQutGC0LAg0L3QtdGCICDQuNC70Lgg0LIgc3RhdGUg0L3QtdGCINC+0LHRitC10LrRgtC+0LIgOlxyXG4gICAgICBpZiAoIXByb2plY3QgfHwgZ2V0U3RhdGUoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyDRgdC+0LfQtNCw0LXQvCDQtNC10YTQvtC70YLQvdGL0Lkg0L/RgNC+0LXQutGCINC4INC00L7QsdCw0LLQu9GP0LXQvCDQtdCz0L4g0LIgc3RhdGUg0LfQsNGC0LXQvCDQtNC10LvQsNC10Lwg0LDQutGC0LjQstC90YvQvFxyXG4gICAgICAgIHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwiR2VuZXJhbFwiKTtcclxuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQsiDQv9GA0L7QtdC60YIgdG9kb1xyXG4gICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XHJcblxyXG4gICAgICAvLyDQvtGH0LjRidCw0LXQvCDRgdCw0LnQtCDQsdCw0YAg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCyINC90LXQs9C+INC+0YLRgNC10L3QtNC40YDQvtCy0LDQvdC90YvQuSDQv9GA0L7QtdC60YJcclxuICAgICAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBzaWRlQmFyLmFwcGVuZChyZW5kZXJQcm9qZWN0KHByb2plY3QpKTtcclxuXHJcbiAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRgdC/0LjRgdC+0Log0LLRi9Cx0L7RgNCwINC/0YDQvtC10LrRgtC+0LIg0LIg0YHQtdC70LXQutGC0LVcclxuICAgICAgcmVuZGVyU2VsZWN0T3B0aW9ucygpO1xyXG5cclxuICAgICAgLy8g0LXRgdC70Lgg0LXRgdGC0Ywg0LDQutGC0LjQstC90YvQuSDQv9GA0L7QtdC60YIg0Lggc3RhdGUg0L3QtSDQv9GD0YHRgtC+0Lkg0YLQviDQstGL0LfRi9Cy0LDQtdC8IGhhbmRsZVByb2plY3Qg0YEg0LDRgNCz0YPQvNC10L3RgtC+0LwgdG9kb1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGFuZGxlUHJvamVjdCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDRgdC+0YXRgNCw0L3Rj9C10Lwg0LIgbG9jYWxTdG9yYWdlINC90LDRiCDRgtC10LrRg9GJ0LjQuSDRgdGC0LXQudGCINC4INC+0YfQuNGJ0LDQtdC8INC40L3Qv9GD0YLRi1xyXG4gICAgc2F2ZVN0YXRlKGdldFN0YXRlKCkpO1xyXG4gICAgcmVzZXRJbnB1dHMoKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiByZXNldElucHV0cygpIHtcclxuICBzZWxlY3RUb2RvLnZhbHVlID0gXCJsb3dcIjtcclxuICB0aXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xyXG4gIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YPQtNCw0LvQtdC90LjRjyDQv9GA0L7QtdC60YLQsFxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0SGFuZGxlKCkge1xyXG4gIC8vINCy0LXRiNCw0LXQvCDRgdC+0LHRi9GC0LjQtSDRgdC70YPRiNCw0YLQtdC70Y8g0L3QsCDRgdCw0LnQtCDQsdCw0YAg0L/QvtGC0L7QvNGDINGH0YLQviDQutC90L7Qv9C60LAg0YPQtNCw0LvQtdC90LjRjyDQtNC+0LHQsNCy0LvRj9C10YLRgdGPINGC0YPQtNCwINC/0YDQuCDRgNC10L3QtNC10YDQtSDQv9GA0L7QtdC60YLQsFxyXG4gIHNpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC90LUg0L/QviDQutC90L7Qv9C60LUg0YPQtNCw0LvQtdC90LjRjyDRgtC+INC30LDQstC10YDRiNCw0LXQvCDRgNCw0LHQvtGC0YMg0YTRg9C90LrRhtC40LhcclxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpKSByZXR1cm47XHJcblxyXG4gICAgLy8g0LXRgdC70Lgg0LrQu9C40Log0LHRi9C7INC/0L4g0LrQvdC+0L/QutC1INGC0L4gOlxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0LrQvtC90YHRgtCw0L3RgtGDIGlkINGB0L4g0LfQvdCw0YfQtdC90LjQtdC8INC00LDRgtCw0YHQtdGC0LAg0LjQtyDQutC70LjQutC90YPRgtC+0Lkg0LrQvdC+0L/QutC4XHJcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0LrQvtC90YHRgtCw0L3RgtGDINGBINGC0LXQutGD0YnQuNC80Lgg0LTQsNC90L3Ri9C80Lgg0LjQtyDQuNGB0YLQvtGH0L3QuNC60LAg0LjRgdGC0LjQvdGLXHJcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgLy8g0LjRidC10Lwg0YHQvtCy0L/QsNC00LXQvdC40LUg0LTQsNGC0LDRgdC10YLQsCDQutC90L7Qv9C60Lgg0LIg0YHRgtC10LnRgtC1INGDINC/0YDQvtC10LrRgtCwINGBINGC0LDQutC40Lwg0LbQtSBpZCDQuCDQv9GA0LjRgdCy0LDQtdCy0LDQtdC8INCx0YPQu9C10LLQviDQutC+0L3RgdGC0LDQvdGC0LVcclxuICAgIGNvbnN0IHByb2plY3RUb1JlbW92ZSA9IHN0YXRlLmZpbmQoKHApID0+IHAuaWQgPT09IGlkKTtcclxuXHJcbiAgICAvLyDQtdGB0LvQuCDRgtCw0LrQvtC5INC/0YDQvtC10LrRgiDQtdGB0YLRjCDRgtC+OlxyXG4gICAgaWYgKHByb2plY3RUb1JlbW92ZSkge1xyXG4gICAgICAvLyDRg9C00LDQu9Cw0LXQvCDRjdGC0L7RgiDQv9GA0L7QtdC60YIg0LjQtyDRgdGC0LXQudGC0LBcclxuICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0VG9SZW1vdmUpO1xyXG5cclxuICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8IGxvY2FsU3RvcmFnZVxyXG4gICAgICBzYXZlU3RhdGUoZ2V0U3RhdGUoKSk7XHJcblxyXG4gICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0YHQv9C40YHQvtC6INCy0YvQsdC+0YDQsCDQv9GA0L7QtdC60YLQvtCyINCyINGB0LXQu9C10LrRgtC1XHJcbiAgICAgIHJlbmRlclNlbGVjdE9wdGlvbnMoKTtcclxuXHJcbiAgICAgIC8vINC10YHQu9C4IGlkINCw0LrRgtC40LLQvdC+0LPQviDQv9GA0L7QtdC60YLQsCDRgNCw0LLQvdC+INC00LDRgtCw0YHQtdGC0YMg0LrQu9C40LrQvdGD0YLQvtC5INC60L3QvtC/0LrQuCDRgtC+XHJcbiAgICAgIGlmIChnZXRBY3RpdmVQcm9qZWN0KCk/LmlkID09PSBpZCkge1xyXG4gICAgICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gXCJcIjsgLy8g0L7Rh9C40YnQsNC10Lwg0YHQsNC50LQg0LHQsNGAXHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBnZXRTdGF0ZSgpOyAvLyDQsdC10YDQtdC8INGB0YLQtdC50YIg0Lgg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LXQs9C+INCyINC/0LXRgNC10LzQtdC90L3Rg9GOXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vINC10YHQu9C4INGB0YLQtdC50YIg0L3QtSDQv9GD0YHRgtC+0LlcclxuICAgICAgICAgIHNldEFjdGl2ZVByb2plY3QobmV3U3RhdGVbMF0pOyAvLyDRg9GB0YLQsNC90LDQstC+0LjQstCw0LXQvCDQsNC60YLQuNCy0L3Ri9C8INC/0YDQvtC10LrRgtC+0Lwg0L/QtdGA0LLRi9C5INC+0LHRitC10LrRgiDQsiDRgdGC0LXQudGC0LVcclxuICAgICAgICAgIHNpZGVCYXIuYXBwZW5kKHJlbmRlclByb2plY3QobmV3U3RhdGVbMF0pKTsgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC/0LXRgNCy0YvQuSDQvtCx0YrQtdC60YIg0LIg0YHRgtC10LnRgtC1INCyINGB0LDQudC0INCx0LDRgCDRgSDQv9C+0LzQvtGJ0YzRjiDRgNC10L3QtNC10YDQsCDQv9GA0L7QtdC60YLQvtCyXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vINC10YHQu9C4INCw0LnQtNC4INCw0LrRgtC40LLQvdC+0LPQviDQv9GA0L7QtdC60YLQsCDQvdC1INGA0LDQstC90L4g0LTQsNGC0LDRgdC10YLRgyDQutC90L7Qv9C60Lgg0YLQvlxyXG4gICAgICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gXCJcIjsgLy8g0L7Rh9C40YnQsNC10Lwg0YHQsNC50LQg0LHQsNGAXHJcbiAgICAgICAgc2lkZUJhci5hcHBlbmQocmVuZGVyUHJvamVjdChnZXRBY3RpdmVQcm9qZWN0KCkpKTsgLy8g0YDQtdC90LTQtdGA0LjQvCDQsNC60YLQuNCy0L3Ri9C5INC/0YDQvtC10LrRglxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vINGB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINGD0LTQsNC70LXQvdC40Y8g0YLRg9C00YNcclxuZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcclxuICAvLyDQstC10YjQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5INC90LAg0YHQsNC50LTQsdCw0YBcclxuICBzaWRlQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgLy8g0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQv9C+INC60L3QvtC/0LrQtSDRg9C00LDQu9C10L3QuNGPINGC0YPQtNGDINGC0L5cclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVUb2RvQnRuXCIpKSB7XHJcbiAgICAgIC8vIGPQvtC30LTQsNC10Lwg0L/QtdGA0LXQvNC10L3QvdGD0Y4gaWQgINC4INC/0YDQuNGB0LLQsNC10LLQsNC10Lwg0LXQuSDQtNCw0YLQsNGB0LXRgiDQutC70LjQutC90YPRgtC+0Lkg0LrQvdC+0L/QutC4XHJcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpOyAvLyDQsdC10YDQtdC8INGC0LXQutGD0YnQuNC5INGB0YLQtdC50YIg0Lgg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LXQs9C+INCyINC/0LXRgNC10LzQtdC90L3Rg9GOXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlW2ldOyAvLyDQvdCwINC60LDQttC00L7QuSDQuNGC0LXRgNCw0YbQuNC4INGB0L7Qt9C00LDQtdC8INC/0YDQvtC10LrRgiDQuNC3INGB0YLQtdC50YLQsFxyXG5cclxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3RzLmFycikge1xyXG4gICAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC10YnQtSDQvtC00LjQvSDRhtC40LrQuyDRh9GC0L7QsdGLINC/0YDQvtC50YLQuNGB0Ywg0L/QviDRgtGD0LTRgyDQsiDQv9GA0L7QtdC60YLQtVxyXG4gICAgICAgICAgaWYgKGlkID09PSB0b2RvLmlkKSB7XHJcbiAgICAgICAgICAgIC8vINC10YHQu9C4INC00LDRgtCw0YHQtdGCINC60L3QvtC/0LrQuCDRgNCw0LLQtdC9IGlkINGC0YPQtNGDINC40Lcg0L/RgNC+0LXQutGC0LAg0YLQvlxyXG4gICAgICAgICAgICBwcm9qZWN0cy5yZW1vdmVUb2RvKHRvZG8pOyAvLyDRg9C00LDQu9GP0LXQvCDRjdGC0L4g0YLRg9C00YMg0LjQtyDQv9GA0L7QtdC60YLQsFxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRvZG8taXRlbVwiKS5yZW1vdmUoKTsgLy8g0YPQtNCw0LvRj9C10Lwg0LTQuNCyINGBINGN0YLQuNC8INGC0YPQtNGDXHJcbiAgICAgICAgICAgIHNhdmVTdGF0ZShnZXRTdGF0ZSgpKTsgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INGC0LXQutGD0YnQtdC1IHN0YXRlINCyIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICBicmVhazsgLy8g0L7RgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0YbQuNC60LtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YDQtdC90LTQtdGA0LAg0L7Qv9GG0LjQuSDRgdC10LvQtdC60YLQsCDQv9GA0L7QtdC60YLQvtCyXHJcbmZ1bmN0aW9uIHJlbmRlclNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgc2VsZWN0UHJvamVjdC5pbm5lckhUTUwgPSBcIlwiOyAvLyDQvtGH0LjRidCw0LXQvCDRgdC10LvQtdC60YJcclxuICBsZXQgc3RhdGVOYW1lID0gW107IC8vINGB0L7Qt9C00LDQtdC8INC80LDRgdGB0LjQsiDQuCDQtNC70Y8g0YHQutC70LDQtNGL0LLQsNC90LjRjyDQuNC80LXQvSDQv9GA0L7QtdC60YLQvtCyINC40Lcg0YHRgtC10LnRgtCwXHJcbiAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpOyAvLyDRgdC+0LfQtNCw0LXQvCDQv9C10YDQtdC80LXQvdC90YPRjiDRgSDRgtC10LrRg9GJ0LjQvCDRgdGC0LXQudGCXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgc3RhdGVOYW1lLnB1c2goc3RhdGVbaV0ubmFtZSk7IC8vINC/0YPRiNC40LwgINC40LzRjyAg0L/RgNC+0LXQutGC0L7QsiDQvdCwINC60LDQttC00L7QuSDQuNGC0LXRgNCw0YbQuNC4XHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgc3RhdGVOYW1lLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQvdCwINC60LDQttC00L7QuSDQuNGC0LXRgNGG0LjQuCDQvtC/0YbQuNGOINC4INC/0YDQuNGB0LLQsNC10LLQsNC10Lwg0LXQuSDQt9C90LDRh9C10L3QuNGPINC40Lcg0L3QsNGI0LXQs9C+INC80LDRgdGB0LjQstCwINC40LzQtdC9XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3RhdGVOYW1lW2pdO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gc3RhdGVOYW1lW2pdO1xyXG4gICAgc2VsZWN0UHJvamVjdC5hcHBlbmQob3B0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbi8vINGB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINC+0YLRgNC40YHQvtCy0LrQuCDQvtC/0YbQuNC5INGB0LXQu9C10LrRgtCwINC/0YDQvtC10LrRgtC+0LJcclxuZnVuY3Rpb24gaGFuZGxlU2VsZWN0T3B0aW9ucygpIHtcclxuICBzZWxlY3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgIC8vINCy0LXRiNCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Lkg0YDQtdCw0LPQuNGA0YPRjtGJ0LjQuSDQvdCwINC40LfQvNC10L3QtdC90LjQtSDQvdCwINGB0LXQu9C10LrRgiDQv9GA0L7QtdC60YLQvtCyXHJcbiAgICBjb25zdCBuYW1lID0gc2VsZWN0UHJvamVjdC52YWx1ZTsgLy8g0YHQvtC30LTQsNC10Lwg0L/QtdGA0LXQvNC10L3QvdGD0Y4g0YEg0LfQvdCw0YfQtdC90LjQtdC8INCy0LDQu9GM0Y4g0LjQtyDQstGL0LHRgNCw0L3QvdC+0Lkg0L7Qv9GG0LjQuCDQsiDRgdC10LvQtdC60YLQtSDQv9GA0L7QtdC60YLQvtCyXHJcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7IC8vINCx0LXRgNC10Lwg0YLQtdC60YPRidC40Lkg0YHRgtC10LnRglxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobmFtZSA9PT0gc3RhdGVbaV0ubmFtZSkge1xyXG4gICAgICAgIC8vINC10YHQu9C4INGC0LXQutGD0YnQuNC5INCy0YvQsdGA0LDQvdC90YvQuSDQv9GA0L7QtdC60YIg0LIg0YHQtdC70LXQutGC0LUg0LXRgdGC0Ywg0LIg0YHRgtC10LnRgtC1INGC0L5cclxuICAgICAgICBzZXRBY3RpdmVQcm9qZWN0KHN0YXRlW2ldKTsgLy8g0LTQtdC70LDQtdC8INC10LPQviDQsNC60YLQuNCy0L3Ri9C8XHJcbiAgICAgICAgY29uc3QgYWN0aXZlID0gZ2V0QWN0aXZlUHJvamVjdCgpOyAvLyDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQtdCz0L4g0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y5cclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcmVuZGVyUHJvamVjdChhY3RpdmUpOyAvLyDRgNC10L3QtNC10YDQuNC8INC90LDRiCDQv9GA0L7QtdC60YJcclxuICAgICAgICBzaWRlQmFyLmlubmVySFRNTCA9IFwiXCI7IC8vINC+0YfQuNGJ0LDQtdC8INGB0LDQudC00LHQsNGAXHJcbiAgICAgICAgc2lkZUJhci5hcHBlbmQocHJvamVjdCk7IC8vINC4INC00L7QsdCw0LLQu9GP0LXQvCDQsiDQvdC10LPQviDQvdCw0Ygg0L/RgNC+0LXQutGCXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy/RgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINGC0YPQtNGDXHJcbmZ1bmN0aW9uIGVkaXRUb2RvSGFuZGxlKCkge1xyXG4gIGxldCBlbmFibGUgPSBmYWxzZTsgLy8g0YHQvtC30LTQsNC10Lwg0YTQu9Cw0LMg0YHQvtGB0YLQvtGP0L3QuNGPXHJcbiAgc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idG5cIikpIHJldHVybjsgLy8g0LXRgdC70Lgg0LrQu9C40Log0L3QtSDQv9C+INC60L3QvtC/0LrQtSDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPIC0g0LfQsNCy0LXRgNGI0LDQtdC8INGE0YPQvdC60YbQuNGOXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC00LXRhNC+0LvRgtC90L7QtSDQv9C+0LLQtdC00LXQvdC40LVcclxuXHJcbiAgICBpZiAoIWVuYWJsZSkge1xyXG4gICAgICAvLyDQtdGB0LvQuCBmYWxzZSDRgtC+INC90LDRhdC+0LTQuNC8INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQtNC40LIg0LrQu9C40LrQvdGD0YLQvtC5INC60L3QvtC/0LrQuFxyXG4gICAgICBjb25zdCB0b2RvRWwgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRvZG8taXRlbVwiKTtcclxuICAgICAgY29uc3QgZWRpdFRhYmxlID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdGFibGVcIik7IC8v0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LIg0LTQuNCy0LUg0YEg0LrQu9Cw0YHRgdC+0LwgZWRpdGFibGVcclxuICAgICAgZm9yIChsZXQgZWRpdCBvZiBlZGl0VGFibGUpIHtcclxuICAgICAgICBlZGl0LmRpc2FibGVkID0gZmFsc2U7IC8vINC00LXQu9Cw0LXQvCDQuNGFINGA0LXQtNCw0LrRgtC40YDRg9C10LzRi9C80LhcclxuICAgICAgfVxyXG4gICAgICBlbmFibGUgPSB0cnVlOyAvLyDQvNC10L3Rj9C10Lwg0YTQu9Cw0LMg0YHQvtGB0YLQvtGP0L3QuNGPINC90LAgdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQstGC0L7RgNC+0Lkg0YDQsNC3INGC0L5cclxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkOyAvLyDQsdC10YDQtdC8INC00LDRgtCw0YHQtdGCINC60LvQuNC60L3Rg9GC0L7QuSDQutC90L7Qv9C60LhcclxuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpOyAvLyDQsdC10YDQtdC8INGC0LXQutGD0YnQuNC5INGB0YLQtdC50YJcclxuICAgICAgZm9yIChsZXQgcHJvamVjdHMgb2Ygc3RhdGUpIHtcclxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3RzLmFycikge1xyXG4gICAgICAgICAgaWYgKGlkID09PSB0b2RvLmlkKSB7XHJcbiAgICAgICAgICAgIC8vINC10YHQu9C4INC10YHRgtGMINGB0L7QstC/0LDQtNC10L3QuNC1INGC0L5cclxuICAgICAgICAgICAgLy8g0L/RgNC40YHQstCw0LjQstCw0LXQvCDQstGB0LXQvCDQtdC70LXQvNC10L3RgtCw0Lwg0L3QvtCy0YvQtSDQt9C90LDRh9C10L3QuNGPINC40Lcg0LLQsNC70YzRjlxyXG4gICAgICAgICAgICBjb25zdCB0b2RvRWwgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRvZG8taXRlbVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZWRpdFRhYmxlID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdGFibGVcIik7XHJcbiAgICAgICAgICAgIHRvZG8udGl0bGUgPSB0b2RvRWwucXVlcnlTZWxlY3RvcihcIi50aXRsZVRvZG9cIikudmFsdWU7XHJcbiAgICAgICAgICAgIHRvZG8uZGVzY3JpcHRpb24gPSB0b2RvRWwucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdG9kby5kdWVEYXRlID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVRvZG9cIikudmFsdWU7XHJcbiAgICAgICAgICAgIHRvZG8ucHJpb3JpdHkgPSB0b2RvRWwucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVRvZG9cIikudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBzYXZlU3RhdGUoZ2V0U3RhdGUoKSk7IC8v0L7QsdC90L7QstC70Y/QtdC8IGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICBlbmFibGUgPSBmYWxzZTsgLy8g0LzQtdC90Y/QtdC8INGB0L7RgdGC0L7Rj9C90LjQtVxyXG4gICAgICAgICAgICBmb3IgKGxldCBlZGl0IG9mIGVkaXRUYWJsZSkge1xyXG4gICAgICAgICAgICAgIGVkaXQuZGlzYWJsZWQgPSB0cnVlOyAvLyDQtNC10LvQsNC10Lwg0L3QtSDRgNC10LTQsNC60YLQuNGA0YPQtdC80YvQvNC4INC90LDRiNC4INGN0LvQtdC80LXQvdGC0YtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7IC8vINC+0YHRgtCw0L3QsNCy0L7QuNCy0LDQtdC8INGG0LjQutC7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmllVG9kb0hhbmRsZXIoKSB7XHJcbiAgc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWJ0blwiKSkge1xyXG4gICAgICAvL9C00L7QsdCw0LLQuNGC0Ywg0YHQvtC30LTQsNC90LjQtSDQtNC+0Lwg0LXQu9C10LzQtdC90YLQsCDRgdC+INGB0L/QuNGB0LrQvtC8INCy0YHQtdGFINC00L7RgdGC0YPQv9C90YvRhSDQv9GA0L7QtdC60YLQvtCyINC4INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60LDQutC+0Lkt0YLQviDQuNC3INC90LjRhSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQvNC10YLQvtC00LAgbW92aWVQcm9qZWN0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRlbGV0ZVRvZG8oKTtcclxuZXhwb3J0IHtcclxuICBoYW5kbGVUb2RvLFxyXG4gIHNpZGVCYXIsXHJcbiAgc2VsZWN0UHJvamVjdCxcclxuICByZW5kZXJTZWxlY3RPcHRpb25zLFxyXG4gIGhhbmRsZVNlbGVjdE9wdGlvbnMsXHJcbiAgZGVsZXRlUHJvamVjdEhhbmRsZSxcclxuICBlZGl0VG9kb0hhbmRsZSxcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuL3JlbmRlci10b2RvLmpzXCI7XHJcblxyXG4vL9GB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINGA0LXQvdC00LXRgNCwINC/0YDQvtC10LrRgtCwINC60L7RgtC+0YDQsNGPINC/0YDQuNC90LjQvNCw0LXRgiDQvtCx0YrQtdC60YIg0YEg0LzQtdGC0L7QtNCw0LzQuCDQuNC3IGNyZWF0ZVByb2plY3RcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xyXG4gIC8v0YHQvtC30LTQsNC10Lwg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC00LjQsiDQutGD0LTQsCDQsdGD0LTQtdC8INGB0LrQu9Cw0LTRi9Cy0LDRgtGMINCy0YHQtSDRgtGD0LTRg1xyXG4gIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDQt9Cw0LPQvtC70L7QstC+0Log0YEg0L3QsNC30LLQsNC90LjQtdC8INCy0LfRj9GC0YvQvCDQuNC3INC40LzQtdC90Lgg0L/RgNC+0LXQutGC0LAg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10LPQviDQsiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LTQuNCyXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgcHJvamVjdEVsLmFwcGVuZCh0aXRsZSk7XHJcblxyXG4gIC8v0YHQvtC30LTQsNC10Lwg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0L/RgNC+0LXQutGC0LAuXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xyXG4gIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcclxuICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsXCIpO1xyXG4gIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcItCj0LTQsNC70LjRgtGMINC/0YDQvtC10LrRglwiO1xyXG4gIC8v0L/RgNC40YHQstCw0LjQstCw0LXQvCDQtdC5INC00LDRgtCw0YHQtdGCINCw0LnQtNC4INC40Lcg0LDQudC00Lgg0L/RgNC+0LXQutGC0LBcclxuICBkZWxldGVQcm9qZWN0QnRuLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xyXG4gIHByb2plY3RFbC5hcHBlbmQoZGVsZXRlUHJvamVjdEJ0bik7XHJcblxyXG4gIC8v0YHQvtC30LTQsNC10Lwg0YLRg9C00YMg0LvQuNGB0YIg0LTQu9GPINGA0LDQt9C80LXRidC10L3QuNGPINCyINC90LXQvCDQstGB0LXRhSDRgtGD0LTRgyDRgdC+0LTQtdGA0LbQsNGJ0LjRhdGB0Y8g0LIg0L/RgNC+0LXQutGC0LVcclxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb0xpc3QuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdFwiKTtcclxuXHJcbiAgLy/QtNC10LvQsNC10Lwg0YbQuNC60Lsg0LTQu9GPINC/0LXRgNC10LHQvtGA0LAg0LLRgdC10YUg0YLRg9C00YMg0YHQvtC00LXRgNC20LDRidC40YXRgdGPINCyINGF0YDQsNC90LjQu9C40YnQtSDQv9GA0L7QtdC60YLQsFxyXG4gIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC5hcnIpIHtcclxuICAgIC8v0YDQtdC90LTQtdGA0LjQvCDRgtGD0LTRgyDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0L3QsCDQutCw0LbQttC+0Lkg0LjRgtC10YDQsNGG0LjQuCDQsiDQvdCw0Ygg0YLRg9C00YMg0LvQuNGB0YIg0LTQuNCyXHJcbiAgICB0b2RvTGlzdC5hcHBlbmQocmVuZGVyVG9kbyh0b2RvKSk7XHJcbiAgfVxyXG4gIC8v0LTQvtCx0LDQstC70Y/QtdC8INCyINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQtNC40LIg0YLRg9C00YPQu9C40YHRgiDQuCDRgNC10YLQtdGA0L3QuNC8INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQtNC40LJcclxuICBwcm9qZWN0RWwuYXBwZW5kKHRvZG9MaXN0KTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RFbDtcclxufVxyXG4iLCIvL9GB0L7Qt9C00LDQtdC8INGE0YPQutGG0LjRjiDRgNC10L3QtNC10YDQsCDRgtGD0LTRgywg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNC80LDQtdGCINC+0LHRjNC10LrRgiDQvNC10YLQvtC00L7QsiDQuNC3IGNyZWF0ZVRvZG8sINC00LDQu9C10LUg0L/QtdGA0LXQtNCw0LTQuNC8INC10LPQviDQsiDQutC+0L3RgtGA0L7Qu9C70LXRgNC1XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2RvKHRvZG8pIHtcclxuICAvL9GB0L7Qt9C00LDQtdC8INC00LjQsiDQutGD0LTQsCDQsdGD0LTQtdC8INC/0L7QvNC10YnQsNGC0Ywg0LTRgNGD0LPQuNC1INC10LvQtdC80LXQvdGC0YtcclxuICBjb25zdCB0b2RvRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9FbC5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xyXG4gIGNvbnN0IGJ0blRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ0blRvZG8uY2xhc3NMaXN0LmFkZChcImJ0bi10b2RvLWJveFwiKTtcclxuICAvL9GB0L7Qt9C00LDQtdC8INC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINGC0YPQtNGDXHJcbiAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXRvZG9cIik7XHJcbiAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbFwiKTtcclxuICAvL9C/0YDQuNGB0LLQsNC40LLQsNC10Lwg0LXQuSDQtNCw0YLQsNGB0LXRgiDQsNC50LTQuCDQuNC3INC90LDRiNC10LPQviDQvtCx0YrQtdC60YLQsCDQvNC10YLQvtC00L7QsiDRgtGD0LTRgywg0YfRgtC+0LHRiyDQsiDQtNCw0LvRjNC90LXQudGI0LXQvCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvRj9C70YHRjyDRgtGD0LTRgyDRgSDRgtCw0LrQuNC8INCw0LnQtNC4INC40Lcg0YXRgNCw0L3QuNC70LjRidCwINCyINC/0YDQvtC10LrRgtC1XHJcbiAgZGVsZXRlVG9kb0J0bi5kYXRhc2V0LmlkID0gdG9kby5pZDtcclxuICBkZWxldGVUb2RvQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVG9kb0J0blwiKTtcclxuICBkZWxldGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDRjdC70LXQvNC10L3RgiB0ZXh0YXJlYSAg0Lgg0LTQtdC70LDQtdC8INC10LPQviDQvdC10YDQtdC00LDQutGC0LjRgNGD0LXQvNGL0LwgZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsXCIpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKTtcclxuICBkZXNjcmlwdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAvL9Cx0LXRgNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3IHRvZG8g0Lgg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LXQs9C+INCyINC90LDRiCDRjdC70LXQvNC10L3RglxyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuXHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDQuNC90L/Rg9GCINGBINGC0LjQv9C+0LwgdGV4dCDQuCDQtNC10LvQsNC10Lwg0LXQs9C+IGRpc2FibGVkINC00LvRjyDRgtC+0LPQviDRh9GC0L7QsdGLINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INC80L7QsyDQuNC30LzQtdC90LjRgtGMINGC0LXQutGCINCx0LXQtyDQvdCw0LbQsNGC0LjRjyDQvdCwINC60L3QvtC/0LrRgyDRgNC10LTQsNC60YLQvtGA0LjQstCw0L3QuNGPXHJcbiAgY29uc3QgdGl0bGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRpdGxlVG9kby5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICB0aXRsZVRvZG8uY2xhc3NMaXN0LmFkZChcImZvcm0tZWxcIik7XHJcbiAgdGl0bGVUb2RvLnR5cGUgPSBcInRleHRcIjtcclxuICB0aXRsZVRvZG8uY2xhc3NMaXN0LmFkZChcImVkaXRhYmxlXCIpO1xyXG4gIHRpdGxlVG9kby5kaXNhYmxlZCA9IHRydWU7XHJcbiAgdGl0bGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVRvZG9cIik7XHJcblxyXG4gIC8v0LHQtdGA0LXQvCDQt9C90LDRh9C10L3QuNC1INC40Lcg0YLRg9C00YMg0Lgg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LXQs9C+INCyINCy0LDQu9GM0Y4g0L3QsNGI0LXQs9C+INGN0LvQtdC80LXQvdGC0LBcclxuICB0aXRsZVRvZG8udmFsdWUgPSB0b2RvLnRpdGxlO1xyXG5cclxuICAvL9GB0L7Qt9C00LDQtdC8INGB0LXQu9C10LrRgiDQuCDRgtGA0Lgg0L7Qv9GG0LjQuCDRgtCw0LrQttC1INC00LXQu9Cw0LXQvCDQuNGFIGRpc2FibGVkXHJcbiAgY29uc3QgcHJpb3JpdHlUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBwcmlvcml0eVRvZG8uY2xhc3NMaXN0LmFkZChcImVkaXRhYmxlXCIpO1xyXG4gIHByaW9yaXR5VG9kby5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbFwiKTtcclxuICBwcmlvcml0eVRvZG8uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5VG9kb1wiKTtcclxuICBwcmlvcml0eVRvZG8uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gIG9wdGlvbjEudGV4dENvbnRlbnQgPSBcImxvd1wiO1xyXG4gIG9wdGlvbjEudmFsdWUgPSBcImxvd1wiO1xyXG4gIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gIG9wdGlvbjIudGV4dENvbnRlbnQgPSBcIm1lZGl1bVwiO1xyXG4gIG9wdGlvbjIudmFsdWUgPSBcIm1lZGl1bVwiO1xyXG4gIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gIG9wdGlvbjMudGV4dENvbnRlbnQgPSBcImhpZ2hcIjtcclxuICBvcHRpb24zLnZhbHVlID0gXCJoaWdoXCI7XHJcblxyXG4gIHByaW9yaXR5VG9kby5hcHBlbmQob3B0aW9uMSk7XHJcbiAgcHJpb3JpdHlUb2RvLmFwcGVuZChvcHRpb24yKTtcclxuICBwcmlvcml0eVRvZG8uYXBwZW5kKG9wdGlvbjMpO1xyXG5cclxuICAvL9Cx0LXRgNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3INGC0YPQtNGDINC4INC/0YDQuNGB0LLQsNC10LLQsNC10Lwg0LXQs9C+INC90LDRiNC10LzRgyDRgdC10LvQtdC60YLRg1xyXG4gIHByaW9yaXR5VG9kby52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XHJcblxyXG4gIC8v0YHQvtC30LTQsNC10Lwg0LjQvdC/0YPRgiDRgSDRgtC40L/QvtC8IGRhdGUg0Lgg0LTQtdC70LDQtdC8INC10LPQviBkaXNhYmxlZFxyXG4gIGNvbnN0IGR1ZURhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGR1ZURhdGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlVG9kb1wiKTtcclxuICBkdWVEYXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbFwiKTtcclxuICBkdWVEYXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZWRpdGFibGVcIik7XHJcbiAgZHVlRGF0ZVRvZG8uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGR1ZURhdGVUb2RvLnR5cGUgPSBcImRhdGVcIjtcclxuXHJcbiAgLy/QsdC10YDQtdC8INC30L3QsNGH0LXQvdC40LUg0LjQtyDRgtGD0LTRgyDQuCDQv9GA0LjRgdCy0LDQtdCy0LDQtdC8INC10LPQviDQsiDQstCw0LvRjNGOINC90LDRiNC10LPQviDRjdC70LXQvNC10L3RgtCwXHJcbiAgZHVlRGF0ZVRvZG8udmFsdWUgPSB0b2RvLmR1ZURhdGU7XHJcblxyXG4gIC8v0YHQvtC30LTQsNC10Lwg0LrQvdC+0L/QutGDINGA0LXQtNCw0LrRgtC+0YDQvtCy0LDQvdC40Y8gLCDQsiDQsdGD0LTRg9GJ0LXQvCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC+0YLQvtGA0YPRjiDQstGB0LUg0L3QtdCw0LrRgtC40LLQvdGL0LUg0L/QvtC70Y8gZGlzYWJsZWQgPSB0cnVlINGB0YLQsNC90YPRgiBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGVkaXRCdG4uZGF0YXNldC5pZCA9IHRvZG8uaWQ7XHJcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xyXG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xyXG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi10b2RvXCIpO1xyXG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tZWxcIik7XHJcblxyXG4gIC8v0LTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDRgdC+0LfQtNCw0L3QvdGL0LUg0Y3Qu9C10LzQtdC90YLRiyDQsiDQtNC40LIg0YLRg9C00YMg0Lgg0YDQtdGC0LXRgNC90LjQvCDQtdCz0L5cclxuICB0b2RvRWwuYXBwZW5kKHRpdGxlVG9kbyk7XHJcbiAgdG9kb0VsLmFwcGVuZChkZXNjcmlwdGlvbik7XHJcbiAgdG9kb0VsLmFwcGVuZChwcmlvcml0eVRvZG8pO1xyXG5cclxuICB0b2RvRWwuYXBwZW5kKGR1ZURhdGVUb2RvKTtcclxuICBidG5Ub2RvLmFwcGVuZChkZWxldGVUb2RvQnRuKTtcclxuICBidG5Ub2RvLmFwcGVuZChlZGl0QnRuKTtcclxuICB0b2RvRWwuYXBwZW5kKGJ0blRvZG8pO1xyXG5cclxuICByZXR1cm4gdG9kb0VsO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgaGFuZGxlVG9kbyxcclxuICBzaWRlQmFyLFxyXG4gIHJlbmRlclNlbGVjdE9wdGlvbnMsXHJcbiAgaGFuZGxlU2VsZWN0T3B0aW9ucyxcclxuICBkZWxldGVQcm9qZWN0SGFuZGxlLFxyXG4gIGVkaXRUb2RvSGFuZGxlLFxyXG59IGZyb20gXCIuL3JlbmRlci9jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9jb3JlL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3JlbmRlci9yZW5kZXItcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RhdGUgfSBmcm9tIFwiLi9jb3JlL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldEFjdGl2ZVByb2plY3QsIGFkZFByb2plY3QgfSBmcm9tIFwiLi9jb3JlL2FwcC1zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vY29yZS90b2RvLmpzXCI7XHJcblxyXG4vLyDQotC+0LvRjNC60L4g0YHQvtC30LTQsNC10Lwg0L7QsdGK0LXQutGCXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHQoKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVByb2plY3QoXCJHZW5lcmFsXCIpO1xyXG59XHJcblxyXG4vLyDRgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDQt9Cw0LPRgNGD0LfQutC4INC00LDQvdC90YvRhSDQuNC3IGxvY2Fsc3RvcmFnZVxyXG5mdW5jdGlvbiBzdG9yYWdlTG9hZCgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGxvYWRTdGF0ZSgpOyAvLyDQsdC10YDQtdC8INCy0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3IGxvY2FsU3RvcmFnZVxyXG5cclxuICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAxLiDQodC+0LfQtNCw0LXQvCBHZW5lcmFsLCDQtdGB0LvQuCDQv9GD0YHRgtC+XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlRGVmYXVsdCgpO1xyXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gMi4g0JLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC00LDQvdC90YvQtSDQuNC3IGxvY2FsU3RvcmFnZVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IHByb2plY3RzW2ldO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHRvZG9EYXRhIG9mIHByb2plY3REYXRhLmFycikge1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKHRvZG9EYXRhKTtcclxuICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIDMuINCV0JTQmNCd0JDQryDQotCe0KfQmtCQINCg0JXQndCU0JXQoNCQINCf0J7QodCb0JUg0JfQkNCT0KDQo9CX0JrQmFxyXG4gIGNvbnN0IGFsbFByb2plY3RzID0gZ2V0U3RhdGUoKTtcclxuICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgZmlyc3RQcm9qZWN0ID0gYWxsUHJvamVjdHNbMF07XHJcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGZpcnN0UHJvamVjdCk7XHJcblxyXG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc2lkZUJhci5hcHBlbmQocmVuZGVyUHJvamVjdChmaXJzdFByb2plY3QpKTtcclxuXHJcbiAgICByZW5kZXJTZWxlY3RPcHRpb25zKCk7XHJcbiAgfVxyXG59XHJcblxyXG5lZGl0VG9kb0hhbmRsZSgpO1xyXG5oYW5kbGVUb2RvKCk7XHJcbnN0b3JhZ2VMb2FkKCk7XHJcbmRlbGV0ZVByb2plY3RIYW5kbGUoKTtcclxuaGFuZGxlU2VsZWN0T3B0aW9ucygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=