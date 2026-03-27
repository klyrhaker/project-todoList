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
  return state;
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
function createProject(name) {
  //сохжаем хранилище для будущих туду
  let arr = [];

  //создаем уникальный id
  const id = crypto.randomUUID();

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
function createTodo({ title, description, dueDate, priority }) {
  //создаем уникальный id
  const id = crypto.randomUUID();

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
          // добавляем еще один сикл чтобы пройтись по туду в проекте
          if (id === todo.id) {
            // если датасет кнопки равен id туду из проекта то
            projects.removeTodo(todo); // удаляем это туду из проекта
            e.target.closest("div").remove(); // удаляем див с этим туду
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsZ0NBQWdDLDJDQUEyQywwQkFBMEIsd0JBQXdCLDJDQUEyQyxnREFBZ0QsdUNBQXVDLG9FQUFvRSx3Q0FBd0MsMENBQTBDLHVDQUF1QyxzQkFBc0Isb0JBQW9CLGdEQUFnRCx5QkFBeUIseUJBQXlCLEtBQUssT0FBTyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixLQUFLLGNBQWMsMkNBQTJDLG9CQUFvQiw2QkFBNkIsS0FBSyxrQkFBa0Isb0NBQW9DLDJDQUEyQyxvQkFBb0Isa0JBQWtCLEtBQUssZUFBZSxvQ0FBb0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLDZCQUE2Qix1Q0FBdUMsbUJBQW1CLGtCQUFrQiwwQ0FBMEMsS0FBSyxnQkFBZ0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLGlCQUFpQixrQkFBa0IsS0FBSyxVQUFVLG9DQUFvQywyQ0FBMkMsb0JBQW9CLGtCQUFrQixLQUFLLGNBQWMsMENBQTBDLG1CQUFtQixpQ0FBaUMsdUNBQXVDLEtBQUssYUFBYSw0QkFBNEIsS0FBSyxlQUFlLGtDQUFrQyxLQUFLLGVBQWUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsNkJBQTZCLDZCQUE2QixvQkFBb0IsS0FBSyx3QkFBd0IsMEJBQTBCLG9CQUFvQiw2QkFBNkIsNkJBQTZCLDZCQUE2QixpQkFBaUIsa0JBQWtCLEtBQUssZ0JBQWdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDZCQUE2Qix1QkFBdUIsS0FBSyxtQkFBbUIsa0NBQWtDLG9CQUFvQixxQ0FBcUMsS0FBSyxlQUFlLGlCQUFpQixLQUFLLHVCQUF1QjtBQUMvaEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4SDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9FOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJoQztBQUNPLHNCQUFzQix1Q0FBdUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNNO0FBQ0M7QUFDTDtBQUMvQztBQU84QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGdCQUFnQiw0REFBUSxJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxJQUFJLG9FQUFnQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFhO0FBQ2hDLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0RBQWE7QUFDbEMsNEJBQTRCO0FBQzVCLEVBQUUsOERBQVUsY0FBYztBQUMxQjtBQUNBLEVBQUUsb0VBQWdCLGNBQWM7QUFDaEMseUJBQXlCO0FBQ3pCO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQixpRUFBYSxlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9FQUFnQjtBQUNwQztBQUNBO0FBQ0Esc0JBQXNCLDREQUFRO0FBQzlCO0FBQ0Esa0JBQWtCLCtEQUFhO0FBQy9CLFFBQVEsOERBQVU7QUFDbEIsUUFBUSxvRUFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUVBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVMsQ0FBQyw0REFBUTtBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNERBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFhO0FBQ25CO0FBQ0E7QUFDQSxNQUFNLDJEQUFTLENBQUMsNERBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0VBQWdCO0FBQzFCLGdDQUFnQztBQUNoQyx5QkFBeUIsNERBQVEsSUFBSTtBQUNyQztBQUNBO0FBQ0EsVUFBVSxvRUFBZ0IsZUFBZTtBQUN6Qyx5QkFBeUIsaUVBQWEsZ0JBQWdCO0FBQ3REO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QixpRUFBYSxDQUFDLG9FQUFnQixNQUFNO0FBQzNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNERBQVEsSUFBSTtBQUNoQyxzQkFBc0Isa0JBQWtCO0FBQ3hDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLDhDQUE4QztBQUM5QyxZQUFZLDJEQUFTLENBQUMsNERBQVEsS0FBSztBQUNuQyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsc0JBQXNCO0FBQ3RCLGdCQUFnQiw0REFBUSxJQUFJO0FBQzVCLGtCQUFrQixrQkFBa0I7QUFDcEMsbUNBQW1DO0FBQ25DO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsa0JBQWtCLDREQUFRLElBQUk7QUFDOUIsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0EsUUFBUSxvRUFBZ0IsWUFBWTtBQUNwQyx1QkFBdUIsb0VBQWdCLElBQUk7QUFDM0Msd0JBQXdCLGlFQUFhLFVBQVU7QUFDL0MsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsMERBQTBEO0FBQzFELHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLHFCQUFxQjtBQUNyQixNQUFNO0FBQ047QUFDQSxzQ0FBc0M7QUFDdEMsb0JBQW9CLDREQUFRLElBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBUyxDQUFDLDREQUFRLEtBQUs7QUFDbkMsNEJBQTRCO0FBQzVCO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBU0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UzRDO0FBQzlDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFRVTtBQUNrQjtBQUNTO0FBQ2I7QUFDK0I7QUFDakM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsU0FBUywrREFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBUyxJQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBVTtBQUNkLElBQUk7QUFDSjtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQSxzQkFBc0IsK0RBQWE7QUFDbkM7QUFDQTtBQUNBLHFCQUFxQix5REFBVTtBQUMvQjtBQUNBO0FBQ0EsTUFBTSw4REFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBUTtBQUM5QjtBQUNBO0FBQ0EsSUFBSSxvRUFBZ0I7QUFDcEI7QUFDQSxJQUFJLDBEQUFPO0FBQ1gsSUFBSSwwREFBTyxRQUFRLHdFQUFhO0FBQ2hDO0FBQ0EsSUFBSSwwRUFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EscUVBQWM7QUFDZCxpRUFBVTtBQUNWO0FBQ0EsMEVBQW1CO0FBQ25CLDBFQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2NvcmUvYXBwLXN0YXRlLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29yZS9wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29yZS9zdG9yYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29yZS90b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvcmVuZGVyL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9yZW5kZXIvcmVuZGVyLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9yZW5kZXIvcmVuZGVyLXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC8q0YbQstC10YLQsCovXHJcbiAgLS1wcmltYXJ5LWNvbG9yOiBibHVlO1xyXG4gIC0tdGV4dC1jb2xvcjogd2hpdGU7XHJcbiAgLS1iZy1jb2xvcjogZ3JlZW47XHJcbiAgLS1zaGFkb3ctdGV4dDogMXB4IDFweCAycHggbGlnaHRibHVlO1xyXG4gIC0tc2hhZG93LWJveDogMXB4IDFweCA5cHggcmdiKDY1LCA2OSwgNjgpO1xyXG4gIC0tYnV0dG9uLWNvbG9yOiByZ2IoODEsIDgxLCAyMzIpO1xyXG5cclxuICAvKtGA0LDQt9C80LXRgNGLINGI0YDQuNGE0YLQsCovXHJcbiAgLS1mcy1zbTogY2xhbXAoMC44cmVtLCAydncsIDFyZW0pO1xyXG4gIC0tZnMtbWQ6IGNsYW1wKDFyZW0sIDN2dywgMS41cmVtKTtcclxuICAtLWZzLWxnOiBjbGFtcCgxLjVyZW0sIDR2dywgMi41cmVtKTtcclxuXHJcbiAgLyrRiNGA0LjRhNGC0YsqL1xyXG4gIC0tZm0tbG9nbzogZDtcclxuICAtLWZtLXByb2plY3Q6IHA7XHJcbiAgLS1mbS0tdG9kbzogajtcclxuXHJcbiAgLyrQvtGC0YHRgtGD0L/RiyovXHJcbiAgLS1zcGFjaW5nLXNtOiAwLjVyZW07XHJcbiAgLS1zcGFzaW5nLW1kOiAxcmVtO1xyXG4gIC0tc3Bhc2luZy1sZzogMnJlbTtcclxufVxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY2LCAyMTcsIDIxOSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYXNpbmctbWQpO1xyXG59XHJcbiNwcm9qZWN0LWJveCB7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJveCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjA1LCAyMDcpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDM1dnc7XHJcbn1cclxuI2Zvcm0tYm94IHtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYm94KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogd3JhcCBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNwYXNpbmctbGcpO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICB3aWR0aDogMzB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDE2NywgMTc2KTtcclxufVxyXG4jZm9ybS10b2RvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcbiNib3gge1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ib3gpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDIwNSwgMjA3KTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAzNXZ3O1xyXG59XHJcbi5mb3JtLWVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQyLCAyMjUsIDYwKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3Bhc2luZy1sZyk7XHJcbn1cclxuLmRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbi5lZGl0LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xyXG59XHJcbiNzaWRlLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnByb2plY3QtY29udGFpbmVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGdhcDogdmFyKC0tc3Bhc2luZy1sZyk7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG4udG9kby1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5idG4tdG9kby1ib3gge1xyXG4gIGZsZXgtZmxvdzogd3JhcCByb3ctcmV2ZXJzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uYnRuLXRvZG8ge1xyXG4gIHdpZHRoOiA0OCU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMseUNBQXlDO0VBQ3pDLGdDQUFnQzs7RUFFaEMsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsbUNBQW1DOztFQUVuQyxTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhOztFQUViLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2QixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7O0VBRXRCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAvKtGG0LLQtdGC0LAqL1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiBibHVlO1xcclxcbiAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tYmctY29sb3I6IGdyZWVuO1xcclxcbiAgLS1zaGFkb3ctdGV4dDogMXB4IDFweCAycHggbGlnaHRibHVlO1xcclxcbiAgLS1zaGFkb3ctYm94OiAxcHggMXB4IDlweCByZ2IoNjUsIDY5LCA2OCk7XFxyXFxuICAtLWJ1dHRvbi1jb2xvcjogcmdiKDgxLCA4MSwgMjMyKTtcXHJcXG5cXHJcXG4gIC8q0YDQsNC30LzQtdGA0Ysg0YjRgNC40YTRgtCwKi9cXHJcXG4gIC0tZnMtc206IGNsYW1wKDAuOHJlbSwgMnZ3LCAxcmVtKTtcXHJcXG4gIC0tZnMtbWQ6IGNsYW1wKDFyZW0sIDN2dywgMS41cmVtKTtcXHJcXG4gIC0tZnMtbGc6IGNsYW1wKDEuNXJlbSwgNHZ3LCAyLjVyZW0pO1xcclxcblxcclxcbiAgLyrRiNGA0LjRhNGC0YsqL1xcclxcbiAgLS1mbS1sb2dvOiBkO1xcclxcbiAgLS1mbS1wcm9qZWN0OiBwO1xcclxcbiAgLS1mbS0tdG9kbzogajtcXHJcXG5cXHJcXG4gIC8q0L7RgtGB0YLRg9C/0YsqL1xcclxcbiAgLS1zcGFjaW5nLXNtOiAwLjVyZW07XFxyXFxuICAtLXNwYXNpbmctbWQ6IDFyZW07XFxyXFxuICAtLXNwYXNpbmctbGc6IDJyZW07XFxyXFxufVxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NiwgMjE3LCAyMTkpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogdmFyKC0tc3Bhc2luZy1tZCk7XFxyXFxufVxcclxcbiNwcm9qZWN0LWJveCB7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYm94KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDIwNSwgMjA3KTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMzV2dztcXHJcXG59XFxyXFxuI2Zvcm0tYm94IHtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ib3gpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogd3JhcCBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zcGFzaW5nLWxnKTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAxNjcsIDE3Nik7XFxyXFxufVxcclxcbiNmb3JtLXRvZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcbiNib3gge1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJveCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAyMDUsIDIwNyk7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDM1dnc7XFxyXFxufVxcclxcbi5mb3JtLWVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDIsIDIyNSwgNjApO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zcGFzaW5nLWxnKTtcXHJcXG59XFxyXFxuLmRlbGV0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi5lZGl0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XFxyXFxufVxcclxcbiNzaWRlLWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFzaW5nLWxnKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmJ0bi10b2RvLWJveCB7XFxyXFxuICBmbGV4LWZsb3c6IHdyYXAgcm93LXJldmVyc2U7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uYnRuLXRvZG8ge1xcclxcbiAgd2lkdGg6IDQ4JTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8v0YHQvtC30LTQsNC10Lwg0LTQsNC90L3Ri9C1IHN0YXRlINC10LTQuNC90YHRgtCy0LXQvdC90YvQuSDQuNGB0YLQvtGH0L3QuNC6INC40YHRgtC40L3Ri1xyXG4vL9C4INGB0L7Qt9C00LDQtdC8INCw0LrRgtC40LLQvdGL0Lkg0L/RgNC+0LXQutGCINGB0L4g0LfQvdCw0YfQtdC90LjQtdC8IG51bGxcclxubGV0IHN0YXRlID0gW107XHJcbmxldCBhY3RpdmUgPSBudWxsO1xyXG5cclxuLy/RgdC+0LfQtNCw0LXQvCDQvNC10YLQvtC0INCy0L7Qt9Cy0YDQsNGC0LAg0LrQvtC/0LjQuCBzdGF0ZVxyXG5jb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG4vL9GB0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0LTQvtCx0LDQstC70LXQvdC40Y8g0L/RgNC+0LXQutGC0LAg0LIgc3RhdGVcclxuY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgLy/Qv9GA0L7QstC10YDQutCwINC90LAg0L3QsNC70LjRh9C40LUg0L/RgNC+0LXQutGC0LAg0LIgc3RhdGUgLCDQtdGB0LvQuCDQtdGB0YLRjCDRgtC+INGA0LXRgtC10YDQvdC40LwsINC10YHQu9C4INC90LXRgiDRgtC+INC/0YPRiNC40Lwg0LIgc3RhdGVcclxuICBpZiAoc3RhdGUuaW5jbHVkZXMocHJvamVjdCkpIHJldHVybjtcclxuICBzdGF0ZS5wdXNoKHByb2plY3QpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbi8v0YHQvtC30LTQsNC10Lwg0LzQtdGC0L7QtCDRg9C00LDQu9C10L3QuNGPINC/0YDQvtC10LrRgtCwINC40Lcgc3RhdGVcclxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgLy/QtdGB0LvQuCDQtdCz0L4g0YLQsNC8INC90LXRgiDRgtC+INGA0LXRgtC10YDQvdC40LxcclxuICBpZiAoIXN0YXRlLmluY2x1ZGVzKHByb2plY3QpKSByZXR1cm47XHJcblxyXG4gIC8v0LXRgdC70Lgg0LXRgdGC0Ywg0YLQviDQsdC10YDQtdC8INC10LPQviDQuNC90LTQtdC60YEg0LjQtyBzdGF0ZVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhPZihwcm9qZWN0KTtcclxuICAvL9C4INGD0LTQsNC70Y/QtdC8INGBINC/0L7QvNC+0YnRjNGOINC80YPRgtC40YDRg9GO0YnQtdCz0L4g0LzQtdGC0L7QtNCwIHNwbGljZSwg0LrQvtGC0L7RgNGL0Lkg0L/RgNC40L3QvNCw0LXRgiDQtNCy0LAg0LDRgNCz0YPQvNC10L3RgtCwIDog0L/QtdGA0LLRi9C5INC40L3QtNC10LrRgSDRgSDQutC+0YLQvtGA0L7Qs9C+INC90YPQttC90L4g0L3QsNGH0LDRgtGMINGD0LTQsNC70LXQvdC40LUsINCy0YLQvtGA0L7QuSDRgdC60L7Qu9GM0LrQviDRjdC70LXQvNC10L3RgtC+0LIg0L3Rg9C20L3QviDRg9C00LDQu9C40YLRjFxyXG4gIHN0YXRlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgLy/QstC+0LfQstGA0LDRidCw0LXQvCDQvtCx0L3QvtCy0LvQtdC90L3Ri9C5IHN0YXRlXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuLy9j0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0YPRgdGC0LDQvdC+0LLQutC4INCw0LrRgtC40LLQvdC+0LPQviDQv9GA0L7QtdC60YLQsFxyXG5jb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICBhY3RpdmUgPSBwcm9qZWN0O1xyXG4gIHJldHVybiBhY3RpdmU7XHJcbn07XHJcbi8v0LzQtdGC0L7QtCDQstC+0LfQstGA0LDRgtCwINCw0LrRgtC40LLQvdC+0LPQviDQv9GA0L7QtdC60YLQsFxyXG5jb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBhY3RpdmU7XHJcbn07XHJcbmV4cG9ydCB7XHJcbiAgZ2V0U3RhdGUsXHJcbiAgZ2V0QWN0aXZlUHJvamVjdCxcclxuICBzZXRBY3RpdmVQcm9qZWN0LFxyXG4gIHJlbW92ZVByb2plY3QsXHJcbiAgYWRkUHJvamVjdCxcclxufTtcclxuIiwiLy/RhNGD0L3QutGG0LjRjyDRgdC+0LfQtNCw0L3QuNGPINC/0YDQvtC10LrRgtCwINC/0YDQuNC90LjQvNCw0Y7RidCw0Y8g0LXQs9C+INC90LDQt9Cy0LDQvdC40LVcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xyXG4gIC8v0YHQvtGF0LbQsNC10Lwg0YXRgNCw0L3QuNC70LjRidC1INC00LvRjyDQsdGD0LTRg9GJ0LjRhSDRgtGD0LTRg1xyXG4gIGxldCBhcnIgPSBbXTtcclxuXHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDRg9C90LjQutCw0LvRjNC90YvQuSBpZFxyXG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuXHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDQvNC10YLQvtC0INC00L7QsdCw0LLQu9C10L3QuNGPINGC0YPQtNGDINCyINGF0YDQsNC90LjQu9C40YnQtSDQtdGB0LvQuCDQtdCz0L4g0YLQsNC8INC90LXRglxyXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgaWYgKGFyci5pbmNsdWRlcyh0b2RvKSkgcmV0dXJuIG51bGw7XHJcbiAgICBhcnIucHVzaCh0b2RvKTtcclxuICB9O1xyXG5cclxuICAvL9GB0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0YPQtNCw0LvQtdC90LjRjyDRgtGD0LTRgyDQtdGB0LvQuCDQvtC90L4g0YLQsNC8INC10YHRgtGMXHJcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICBpZiAoIWFyci5pbmNsdWRlcyh0b2RvKSkgcmV0dXJuIG51bGw7XHJcbiAgICAvL9C40YHQv9C+0LvRjNC30YPQtdC8INC40L3QtNC10LrRgdCw0YbQuNGOINC4INC80LXRgtC+0LQgc3BsaWNlXHJcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHRvZG8pO1xyXG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvL9Cy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC+0LHQvdC+0LLQu9C10L3QvdC+0LUg0YXRgNCw0L3QuNC70LjRidC1XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH07XHJcblxyXG4gIC8v0YHQvtC30LTQsNC10Lwg0LzQtdGC0L7QtCDQv9C10YDQtdGC0LDRgdC60LjQstCw0L3QuNGPINGC0YPQtNGDINGBINGC0LXQutGD0YnQtdCz0L4g0L/RgNC+0LXQutGC0LAg0L3QsCDQtNGA0YPQs9C+0LlcclxuICAvL9C/0YDQuNC90LjQvNCw0LXRgiDRgtGD0LTRgyDQutC+0YLQvtGA0YvQuSDRhdC+0YLQuNC8INC/0LXRgNC10YLQsNGJ0LjRgtGMINC4INC/0YDQvtC10LrRgiDQutGD0LTQsCDRhdC+0YLQuNC8INC/0LXRgNC10YLQsNGJ0LjRgtGMXHJcbiAgY29uc3QgbW92aWVUb2RvID0gKHRvZG8sIHRhcmdldFByb2plY3QpID0+IHtcclxuICAgIGlmICh0YXJnZXRQcm9qZWN0LmFyci5pbmNsdWRlcyh0b2RvKSkgcmV0dXJuIG51bGw7XHJcbiAgICB0YXJnZXRQcm9qZWN0LmFkZFRvZG8odG9kbyk7XHJcbiAgICByZW1vdmVUb2RvKHRvZG8pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGFyciwgbmFtZSwgYWRkVG9kbywgcmVtb3ZlVG9kbywgbW92aWVUb2RvLCBpZCB9O1xyXG59XHJcbiIsIi8v0YHQvtC30LTQsNC10Lwg0LzQtdGC0L7QtCDRgdC+0YXRgNCw0L3QtdC90LjRjyBzdGF0ZSDQsiDRhdGA0LDQvdC40LvQuNGJ0LUgbG9rYWxTdG9yYWdlXHJcbmNvbnN0IHNhdmVTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gIC8v0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LLRgdGC0YDQvtC10L3QvdGL0LUg0YTRg9C90LrRhtC40Lgg0LTQvtCx0LDQstC70Y/QtdGCINCyIGxvY2FsU3RvcmFnZSDQvdCw0Ygg0YHRgtC10LnRglxyXG4gIC8v0L/QtdGA0LXQtCDQtNC+0LHQsNCy0LvQtdC90LjQtdC8INC90YPQttC90L4g0YHQvtC30LTQsNGC0Ywg0LrQu9GO0Ycg0LPQtNC1INC30L3QsNGH0LXQvdC40LXQvCDQsdGD0LTQtdGCINC90LDRiCBzdGF0ZVxyXG4gIC8v0L/RgNC10L7QsdGA0LDQt9GD0LXQvCDQsiBqc29uINGB0YLRgNC+0LrQuCDQvdCw0Yggc3RhdGUg0LjQvdCw0YfQtSDQstGL0LnQtNC10YIg0L7RiNC40LHQutCwXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG59O1xyXG4vL9GB0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhSDQuNC3IGxvY2FsU3RvcmFnZVxyXG5jb25zdCBsb2FkU3RhdGUgPSAoKSA9PiB7XHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDQutC+0L3RgdGC0LDQvdGC0YMgZGF0YSDRgdC+INC30L3QsNGH0LXQvdC40LXQvCDQuNC3INC70L7QutCw0LvRjNC90L7Qs9C+INGF0YDQsNC90LjQu9C40YnQsFxyXG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpO1xyXG4gIC8v0LTQtdC70LDQtdC8INC/0YDQvtCy0LXRgNC60YMg0LXRgdC70Lgg0L7QvdC+INC/0YPRgdGC0L7QtSDRgtC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC80LDRgdGB0LjQsiwg0YfRgtC+0LHRiyDQvdCw0Ygg0LrQvtC0INCyINC00LDQu9GM0L3QtdGI0LXQvCDQvdC1INC70L7QvNCw0LvRgdGPXHJcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBbXTtcclxuICAvL9C10YHQu9C4INC90LUg0L/Rg9GB0YLQvtC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC90YvQtSDQtNCw0L3QvdGL0LUg0LjQtyBqc29uINGB0YLRgNC+0Log0LIg0LjQt9C90LDRh9C70YzQvdGL0Lkg0LLQuNC0XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbn07XHJcbmV4cG9ydCB7IHNhdmVTdGF0ZSwgbG9hZFN0YXRlIH07XHJcbiIsIi8vINGE0YPQvdC60YbQuNGOINGB0L7Qt9C00LDQvdC40Y8g0YLRg9C00YMg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNCw0LXRgiDQsiDRgdC10YzRjyDQvtCx0YrQtdC60YIg0YEg0LTQsNC90L3Ri9C80LhcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH0pIHtcclxuICAvL9GB0L7Qt9C00LDQtdC8INGD0L3QuNC60LDQu9GM0L3Ri9C5IGlkXHJcbiAgY29uc3QgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG5cclxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi4vY29yZS90b2RvLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi4vY29yZS9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3QgfSBmcm9tIFwiLi9yZW5kZXItcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBzYXZlU3RhdGUgfSBmcm9tIFwiLi4vY29yZS9zdG9yYWdlLmpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFN0YXRlLFxyXG4gIGdldEFjdGl2ZVByb2plY3QsXHJcbiAgc2V0QWN0aXZlUHJvamVjdCxcclxuICByZW1vdmVQcm9qZWN0LFxyXG4gIGFkZFByb2plY3QsXHJcbn0gZnJvbSBcIi4uL2NvcmUvYXBwLXN0YXRlLmpzXCI7XHJcblxyXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdFwiKTtcclxuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKTtcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtYmFyXCIpO1xyXG5cclxuY29uc3QgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIik7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcclxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xyXG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKTtcclxuY29uc3Qgc2VsZWN0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXRvZG9cIik7XHJcblxyXG4vLyDRgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDQvtGC0YDQuNGB0L7QstC60Lgg0L/RgNC+0LXQutGC0LAg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNC80LDQtdGCINCyINGB0LXQsdGPINCw0YDQs9GD0LzQtdC90YLQvtC8INC00LDQvdC90YvQtSDQuNC3IGNyZWF0ZVRvZG9cclxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdCh0b2RvKSB7XHJcbiAgLy8g0YHQvtC30LTQsNC10Lwg0L/QtdGA0LXQvNC10L3QvdGD0Y4g0Lgg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0YLRg9C00LAg0LTQsNC90L3Ri9C1INC40Lcg0LLQsNC70YzRjiDQuNC90L/Rg9GC0LAgLNGD0LHQuNGA0LDQtdC8INC70LjRiNC90LjQtSDQv9GA0L7QsdC10LvRiyDQuCDQv9GA0LjQstC+0LTQuNC8INCy0YHQtSDQuiDQvdC40LbQvdC10LzRgyDRgNC10LPQuNGB0YLRgNGDINC00LvRjyDQuNGB0LrQu9GO0YfQtdC90LjRjyDQtNGD0Y7Qu9C40LrQsNGC0L7QslxyXG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZS52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICBpZiAoIW5hbWUpIHJldHVybjsgLy8g0JXRgdC70Lgg0LjQvNGPINC/0YPRgdGC0L7QtSwg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdC8XHJcblxyXG4gIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTsgLy8g0YHQvtC30LTQsNC10Lwg0L/QtdGA0LXQvNC10L3QvdGD0Y4g0Lgg0LrQu9Cw0LTQtdC8INCyINC90LXQtSDQtNCw0L3QvdGL0LUg0LjQtyDQuNGB0YLQvtGH0L3QuNC60LAg0LjRgdGC0LjQvdGLIHN0YXRlXHJcblxyXG4gIC8vIDEuINCY0YnQtdC8INC/0YDQvtC10LrRgiDQsiDQtNCw0L3QvdGL0YUgc3RhdGUg0J7QlNCY0J0g0KDQkNCXINCyINGB0LDQvNC+0Lwg0L3QsNGH0LDQu9C1XHJcbiAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gc3RhdGUuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgaWYgKGV4aXN0aW5nUHJvamVjdCkge1xyXG4gICAgLy8g0JXQodCb0Jgg0J3QkNCo0JvQmDog0YDQsNCx0L7RgtCw0LXQvCDRgSDRgdGD0YnQtdGB0YLQstGD0Y7RidC40LxcclxuICAgIGV4aXN0aW5nUHJvamVjdC5hZGRUb2RvKHRvZG8pOyAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INC/0YDQvtC10LrRgiDQvdC+0LLRi9C5INGC0YPQtNGDXHJcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGV4aXN0aW5nUHJvamVjdCk7IC8vINC00LXQu9Cw0LXQvCDRjdGC0L7RgiDQv9GA0L7QtdC60YIg0LDQutGC0LjQstC90YvQvFxyXG5cclxuICAgIC8vINCf0LXRgNC10YDQuNGB0L7QstGL0LLQsNC10Lwg0L/RgNC+0LXQutGCINGG0LXQu9C40LrQvtC8LCDRh9GC0L7QsdGLINCy0YHRkSDQsdGL0LvQviDQsNC60YLRg9Cw0LvRjNC90L5cclxuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHNpZGVCYXIuYXBwZW5kKHJlbmRlclByb2plY3QoZXhpc3RpbmdQcm9qZWN0KSk7XHJcbiAgICByZXR1cm47IC8vINCS0YvRhdC+0LTQuNC8XHJcbiAgfVxyXG5cclxuICAvLyAyLiDQldCh0JvQmCDQndCVINCd0JDQqNCb0Jg6INGB0L7Qt9C00LDQtdC8INC90L7QstGL0LkgKNGN0YLQvtGCINC60L7QtCDQstGL0L/QvtC70L3QuNGC0YHRjywg0YLQvtC70YzQutC+INC10YHQu9C4IHJldHVybiDQvdC1INGB0YDQsNCx0L7RgtCw0LspXHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmFtZSk7XHJcbiAgbmV3UHJvamVjdC5hZGRUb2RvKHRvZG8pOyAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YLRg9C00YMg0LIg0L3QvtCy0YvQuSDQv9GA0L7QtdC60YJcclxuICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpOyAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0Y3RgtC+0YIg0L/RgNC+0LXQutGCINCyIHN0YXRlXHJcblxyXG4gIHNldEFjdGl2ZVByb2plY3QobmV3UHJvamVjdCk7IC8vINC00LXQu9Cw0LXQvCDQtdCz0L4g0LDQutGC0LjQstC90YvQvFxyXG4gIHJlbmRlclNlbGVjdE9wdGlvbnMoKTsgLy8g0J7QsdC90L7QstC70Y/QtdC8INGB0L/QuNGB0L7QuiDQstGL0LHQvtGA0LAg0L/RgNC+0LXQutGC0L7QsiDQsiDRgdC10LvQtdC60YLQtVxyXG5cclxuICBzaWRlQmFyLmlubmVySFRNTCA9IFwiXCI7IC8vINC+0YfQuNGJ0LDQtdC8INGB0LDQudC0INCx0LDRgFxyXG4gIHNpZGVCYXIuYXBwZW5kKHJlbmRlclByb2plY3QobmV3UHJvamVjdCkpOyAvLyDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0YLRg9C00LAg0L3QsNGIINC/0YDQvtC10LrRglxyXG59XHJcblxyXG4vL9GB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINC+0YLRgNC40YHQvtCy0LrQuCDRgtGD0LTRg1xyXG5mdW5jdGlvbiBoYW5kbGVUb2RvKCkge1xyXG4gIC8vINCy0LXRiNCw0LXQvCDRgdC+0LHRi9GC0LjQtSDRgdC70YPRiNCw0YLQtdC70Y8g0L3QsCDQutC90L7Qv9C60YMgYWRkXHJcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgLy8g0L7RgtC80LXQvdGP0LXQvCDQtNC10YTQvtC70YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1INC+0YLQv9GA0LDQstC60LhcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyDQtNC10LvQsNC10Lwg0L/RgNC+0LLQtdGA0LrRgyDQvdCwINCy0LLQvtC0IDog0LXRgdC70Lgg0Y3RgtC4INC/0L7Qu9GPINC/0YPRgdGC0YvQtSDRgtC+INC60LjQtNCw0LXQvCDQstGB0L/Qu9GL0LLQsNGO0YnRg9CxINC90LDQtNC/0LjRgdGMINC4INC/0YDQtdC60YDQsNGJ0LDQtdC8INGA0LDQsdC+0YLRgyDRhNGD0L3QutGG0LjQuFxyXG4gICAgaWYgKCF0aXRsZS52YWx1ZSB8fCAhZGVzY3JpcHRpb24udmFsdWUgfHwgIWR1ZURhdGUudmFsdWUpIHtcclxuICAgICAgYWxlcnQoXCLQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70Y9cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDRgtGD0LTRgyDRgSDQv9C+0LzQvtGJ0YzRjiBjcmVhdGVUb2RvINC/0L7QvNC10YnQsNGP0Y4g0YLRg9C00LAg0LTQsNCw0L3Ri9C1INC40Lcg0YTQvtGA0LzRi1xyXG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oe1xyXG4gICAgICB0aXRsZTogdGl0bGUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgZHVlRGF0ZTogZHVlRGF0ZS52YWx1ZSxcclxuICAgICAgcHJpb3JpdHk6IHNlbGVjdFRvZG8udmFsdWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQv9C10YDQtdC80LXQvdC90YPRjiDQuCDQt9Cw0L/QuNGB0YvQstCw0LXQvCDRgtGD0LTQsCDQtNCw0L3QvdGL0LUg0LjQtyDQstCw0LvRjNGOINC40L3Qv9GD0YLQsCAs0YPQsdC40YDQsNC10Lwg0LvQuNGI0L3QuNC1INC/0YDQvtCx0LXQu9GLINC4INC/0YDQuNCy0L7QtNC40Lwg0LLRgdC1INC6INC90LjQttC90LXQvNGDINGA0LXQs9C40YHRgtGA0YMg0LTQu9GPINC40YHQutC70Y7Rh9C10L3QuNGPINC00YPRjtC70LjQutCw0YLQvtCyXHJcbiAgICBjb25zdCBuYW1lVmFsdWUgPSBwcm9qZWN0TmFtZS52YWx1ZT8udG9Mb3dlckNhc2UoKS50cmltKCk7XHJcblxyXG4gICAgLy8g0LXRgdC70Lgg0L7QvdC+INC/0YPRgdGC0L7QtSA6XHJcbiAgICBpZiAoIW5hbWVWYWx1ZSkge1xyXG4gICAgICAvLyDRgdC+0LfQtNCw0LXQvCDQv9C10YDQtdC80LXQvdC90YPRjiDQsiDQutC+0YLQvtGA0YPRjiDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC/0YDQvtC10LrRglxyXG4gICAgICBsZXQgcHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcclxuXHJcbiAgICAgIC8vINC10YHQu9C4INCw0LrRgtC40LLQvdC+0LPQviDQv9GA0L7QtdC60YLQsCDQvdC10YIgINC40LvQuCDQsiBzdGF0ZSDQvdC10YIg0L7QsdGK0LXQutGC0L7QsiA6XHJcbiAgICAgIGlmICghcHJvamVjdCB8fCBnZXRTdGF0ZSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vINGB0L7Qt9C00LDQtdC8INC00LXRhNC+0LvRgtC90YvQuSDQv9GA0L7QtdC60YIg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10LPQviDQsiBzdGF0ZSDQt9Cw0YLQtdC8INC00LXQu9Cw0LXQvCDQsNC60YLQuNCy0L3Ri9C8XHJcbiAgICAgICAgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJHZW5lcmFsXCIpO1xyXG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INCyINC/0YDQvtC10LrRgiB0b2RvXHJcbiAgICAgIHByb2plY3QuYWRkVG9kbyh0b2RvKTtcclxuXHJcbiAgICAgIC8vINC+0YfQuNGJ0LDQtdC8INGB0LDQudC0INCx0LDRgCDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0L3QtdCz0L4g0L7RgtGA0LXQvdC00LjRgNC+0LLQsNC90L3Ri9C5INC/0YDQvtC10LrRglxyXG4gICAgICBzaWRlQmFyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHNpZGVCYXIuYXBwZW5kKHJlbmRlclByb2plY3QocHJvamVjdCkpO1xyXG5cclxuICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INGB0L/QuNGB0L7QuiDQstGL0LHQvtGA0LAg0L/RgNC+0LXQutGC0L7QsiDQsiDRgdC10LvQtdC60YLQtVxyXG4gICAgICByZW5kZXJTZWxlY3RPcHRpb25zKCk7XHJcblxyXG4gICAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQsNC60YLQuNCy0L3Ri9C5INC/0YDQvtC10LrRgiDQuCBzdGF0ZSDQvdC1INC/0YPRgdGC0L7QuSDRgtC+INCy0YvQt9GL0LLQsNC10LwgaGFuZGxlUHJvamVjdCDRgSDQsNGA0LPRg9C80LXQvdGC0L7QvCB0b2RvXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoYW5kbGVQcm9qZWN0KHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINGB0L7RhdGA0LDQvdGP0LXQvCDQsiBsb2NhbFN0b3JhZ2Ug0L3QsNGIINGC0LXQutGD0YnQuNC5INGB0YLQtdC50YIg0Lgg0L7Rh9C40YnQsNC10Lwg0LjQvdC/0YPRgtGLXHJcbiAgICBzYXZlU3RhdGUoZ2V0U3RhdGUoKSk7XHJcbiAgICByZXNldElucHV0cygpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXRzKCkge1xyXG4gIHNlbGVjdFRvZG8udmFsdWUgPSBcImxvd1wiO1xyXG4gIHRpdGxlLnZhbHVlID0gXCJcIjtcclxuICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XHJcbiAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG4vLyDRgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDRg9C00LDQu9C10L3QuNGPINC/0YDQvtC10LrRgtCwXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RIYW5kbGUoKSB7XHJcbiAgLy8g0LLQtdGI0LDQtdC8INGB0L7QsdGL0YLQuNC1INGB0LvRg9GI0LDRgtC10LvRjyDQvdCwINGB0LDQudC0INCx0LDRgCDQv9C+0YLQvtC80YMg0YfRgtC+INC60L3QvtC/0LrQsCDRg9C00LDQu9C10L3QuNGPINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0YLRg9C00LAg0L/RgNC4INGA0LXQvdC00LXRgNC1INC/0YDQvtC10LrRgtCwXHJcbiAgc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIC8vINC10YHQu9C4INC60LvQuNC60L3Rg9C70Lgg0L3QtSDQv9C+INC60L3QvtC/0LrQtSDRg9C00LDQu9C10L3QuNGPINGC0L4g0LfQsNCy0LXRgNGI0LDQtdC8INGA0LDQsdC+0YLRgyDRhNGD0L3QutGG0LjQuFxyXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvamVjdC1idG5cIikpIHJldHVybjtcclxuXHJcbiAgICAvLyDQtdGB0LvQuCDQutC70LjQuiDQsdGL0Lsg0L/QviDQutC90L7Qv9C60LUg0YLQviA6XHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQutC+0L3RgdGC0LDQvdGC0YMgaWQg0YHQviDQt9C90LDRh9C10L3QuNC10Lwg0LTQsNGC0LDRgdC10YLQsCDQuNC3INC60LvQuNC60L3Rg9GC0L7QuSDQutC90L7Qv9C60LhcclxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuXHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQutC+0L3RgdGC0LDQvdGC0YMg0YEg0YLQtdC60YPRidC40LzQuCDQtNCw0L3QvdGL0LzQuCDQuNC3INC40YHRgtC+0YfQvdC40LrQsCDQuNGB0YLQuNC90YtcclxuICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAvLyDQuNGJ0LXQvCDRgdC+0LLQv9Cw0LTQtdC90LjQtSDQtNCw0YLQsNGB0LXRgtCwINC60L3QvtC/0LrQuCDQsiDRgdGC0LXQudGC0LUg0YMg0L/RgNC+0LXQutGC0LAg0YEg0YLQsNC60LjQvCDQttC1IGlkINC4INC/0YDQuNGB0LLQsNC10LLQsNC10Lwg0LHRg9C70LXQstC+INC60L7QvdGB0YLQsNC90YLQtVxyXG4gICAgY29uc3QgcHJvamVjdFRvUmVtb3ZlID0gc3RhdGUuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xyXG5cclxuICAgIC8vINC10YHQu9C4INGC0LDQutC+0Lkg0L/RgNC+0LXQutGCINC10YHRgtGMINGC0L46XHJcbiAgICBpZiAocHJvamVjdFRvUmVtb3ZlKSB7XHJcbiAgICAgIC8vINGD0LTQsNC70LDQtdC8INGN0YLQvtGCINC/0YDQvtC10LrRgiDQuNC3INGB0YLQtdC50YLQsFxyXG4gICAgICByZW1vdmVQcm9qZWN0KHByb2plY3RUb1JlbW92ZSk7XHJcblxyXG4gICAgICAvLyDQvtCx0L3QvtCy0LvRj9C10LwgbG9jYWxTdG9yYWdlXHJcbiAgICAgIHNhdmVTdGF0ZShnZXRTdGF0ZSgpKTtcclxuXHJcbiAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRgdC/0LjRgdC+0Log0LLRi9Cx0L7RgNCwINC/0YDQvtC10LrRgtC+0LIg0LIg0YHQtdC70LXQutGC0LVcclxuICAgICAgcmVuZGVyU2VsZWN0T3B0aW9ucygpO1xyXG5cclxuICAgICAgLy8g0LXRgdC70LggaWQg0LDQutGC0LjQstC90L7Qs9C+INC/0YDQvtC10LrRgtCwINGA0LDQstC90L4g0LTQsNGC0LDRgdC10YLRgyDQutC70LjQutC90YPRgtC+0Lkg0LrQvdC+0L/QutC4INGC0L5cclxuICAgICAgaWYgKGdldEFjdGl2ZVByb2plY3QoKT8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiOyAvLyDQvtGH0LjRidCw0LXQvCDRgdCw0LnQtCDQsdCw0YBcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IGdldFN0YXRlKCk7IC8vINCx0LXRgNC10Lwg0YHRgtC10LnRgiDQuCDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQtdCz0L4g0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y5cclxuICAgICAgICBpZiAobmV3U3RhdGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8g0LXRgdC70Lgg0YHRgtC10LnRgiDQvdC1INC/0YPRgdGC0L7QuVxyXG4gICAgICAgICAgc2V0QWN0aXZlUHJvamVjdChuZXdTdGF0ZVswXSk7IC8vINGD0YHRgtCw0L3QsNCy0L7QuNCy0LDQtdC8INCw0LrRgtC40LLQvdGL0Lwg0L/RgNC+0LXQutGC0L7QvCDQv9C10YDQstGL0Lkg0L7QsdGK0LXQutGCINCyINGB0YLQtdC50YLQtVxyXG4gICAgICAgICAgc2lkZUJhci5hcHBlbmQocmVuZGVyUHJvamVjdChuZXdTdGF0ZVswXSkpOyAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L/QtdGA0LLRi9C5INC+0LHRitC10LrRgiDQsiDRgdGC0LXQudGC0LUg0LIg0YHQsNC50LQg0LHQsNGAINGBINC/0L7QvNC+0YnRjNGOINGA0LXQvdC00LXRgNCwINC/0YDQvtC10LrRgtC+0LJcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g0LXRgdC70Lgg0LDQudC00Lgg0LDQutGC0LjQstC90L7Qs9C+INC/0YDQvtC10LrRgtCwINC90LUg0YDQsNCy0L3QviDQtNCw0YLQsNGB0LXRgtGDINC60L3QvtC/0LrQuCDRgtC+XHJcbiAgICAgICAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiOyAvLyDQvtGH0LjRidCw0LXQvCDRgdCw0LnQtCDQsdCw0YBcclxuICAgICAgICBzaWRlQmFyLmFwcGVuZChyZW5kZXJQcm9qZWN0KGdldEFjdGl2ZVByb2plY3QoKSkpOyAvLyDRgNC10L3QtNC10YDQuNC8INCw0LrRgtC40LLQvdGL0Lkg0L/RgNC+0LXQutGCXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YPQtNCw0LvQtdC90LjRjyDRgtGD0LTRg1xyXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xyXG4gIC8vINCy0LXRiNCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Lkg0L3QsCDRgdCw0LnQtNCx0LDRgFxyXG4gIHNpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC/0L4g0LrQvdC+0L/QutC1INGD0LTQsNC70LXQvdC40Y8g0YLRg9C00YMg0YLQvlxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVRvZG9CdG5cIikpIHtcclxuICAgICAgLy8gY9C+0LfQtNCw0LXQvCDQv9C10YDQtdC80LXQvdC90YPRjiBpZCAg0Lgg0L/RgNC40YHQstCw0LXQstCw0LXQvCDQtdC5INC00LDRgtCw0YHQtdGCINC60LvQuNC60L3Rg9GC0L7QuSDQutC90L7Qv9C60LhcclxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7IC8vINCx0LXRgNC10Lwg0YLQtdC60YPRidC40Lkg0YHRgtC10LnRgiDQuCDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQtdCz0L4g0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gc3RhdGVbaV07IC8vINC90LAg0LrQsNC20LTQvtC5INC40YLQtdGA0LDRhtC40Lgg0YHQvtC30LTQsNC10Lwg0L/RgNC+0LXQutGCINC40Lcg0YHRgtC10LnRgtCwXHJcblxyXG4gICAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdHMuYXJyKSB7XHJcbiAgICAgICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LXRidC1INC+0LTQuNC9INGB0LjQutC7INGH0YLQvtCx0Ysg0L/RgNC+0LnRgtC40YHRjCDQv9C+INGC0YPQtNGDINCyINC/0YDQvtC10LrRgtC1XHJcbiAgICAgICAgICBpZiAoaWQgPT09IHRvZG8uaWQpIHtcclxuICAgICAgICAgICAgLy8g0LXRgdC70Lgg0LTQsNGC0LDRgdC10YIg0LrQvdC+0L/QutC4INGA0LDQstC10L0gaWQg0YLRg9C00YMg0LjQtyDQv9GA0L7QtdC60YLQsCDRgtC+XHJcbiAgICAgICAgICAgIHByb2plY3RzLnJlbW92ZVRvZG8odG9kbyk7IC8vINGD0LTQsNC70Y/QtdC8INGN0YLQviDRgtGD0LTRgyDQuNC3INC/0YDQvtC10LrRgtCwXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZcIikucmVtb3ZlKCk7IC8vINGD0LTQsNC70Y/QtdC8INC00LjQsiDRgSDRjdGC0LjQvCDRgtGD0LTRg1xyXG4gICAgICAgICAgICBzYXZlU3RhdGUoZ2V0U3RhdGUoKSk7IC8vINGB0L7RhdGA0LDQvdGP0LXQvCDRgtC10LrRg9GJ0LXQtSBzdGF0ZSDQsiBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgYnJlYWs7IC8vINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INGG0LjQutC7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vINGB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINGA0LXQvdC00LXRgNCwINC+0L/RhtC40Lkg0YHQtdC70LXQutGC0LAg0L/RgNC+0LXQutGC0L7QslxyXG5mdW5jdGlvbiByZW5kZXJTZWxlY3RPcHRpb25zKCkge1xyXG4gIHNlbGVjdFByb2plY3QuaW5uZXJIVE1MID0gXCJcIjsgLy8g0L7Rh9C40YnQsNC10Lwg0YHQtdC70LXQutGCXHJcbiAgbGV0IHN0YXRlTmFtZSA9IFtdOyAvLyDRgdC+0LfQtNCw0LXQvCDQvNCw0YHRgdC40LIg0Lgg0LTQu9GPINGB0LrQu9Cw0LTRi9Cy0LDQvdC40Y8g0LjQvNC10L0g0L/RgNC+0LXQutGC0L7QsiDQuNC3INGB0YLQtdC50YLQsFxyXG4gIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTsgLy8g0YHQvtC30LTQsNC10Lwg0L/QtdGA0LXQvNC10L3QvdGD0Y4g0YEg0YLQtdC60YPRidC40Lwg0YHRgtC10LnRglxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgIHN0YXRlTmFtZS5wdXNoKHN0YXRlW2ldLm5hbWUpOyAvLyDQv9GD0YjQuNC8ICDQuNC80Y8gINC/0YDQvtC10LrRgtC+0LIg0L3QsCDQutCw0LbQtNC+0Lkg0LjRgtC10YDQsNGG0LjQuFxyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IHN0YXRlTmFtZS5sZW5ndGg7IGorKykge1xyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0L3QsCDQutCw0LbQtNC+0Lkg0LjRgtC10YDRhtC40Lgg0L7Qv9GG0LjRjiDQuCDQv9GA0LjRgdCy0LDQtdCy0LDQtdC8INC10Lkg0LfQvdCw0YfQtdC90LjRjyDQuNC3INC90LDRiNC10LPQviDQvNCw0YHRgdC40LLQsCDQuNC80LXQvVxyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHN0YXRlTmFtZVtqXTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHN0YXRlTmFtZVtqXTtcclxuICAgIHNlbGVjdFByb2plY3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDRgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDQvtGC0YDQuNGB0L7QstC60Lgg0L7Qv9GG0LjQuSDRgdC10LvQtdC60YLQsCDQv9GA0L7QtdC60YLQvtCyXHJcbmZ1bmN0aW9uIGhhbmRsZVNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgc2VsZWN0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAvLyDQstC10YjQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNC5INGA0LXQsNCz0LjRgNGD0Y7RidC40Lkg0L3QsCDQuNC30LzQtdC90LXQvdC40LUg0L3QsCDRgdC10LvQtdC60YIg0L/RgNC+0LXQutGC0L7QslxyXG4gICAgY29uc3QgbmFtZSA9IHNlbGVjdFByb2plY3QudmFsdWU7IC8vINGB0L7Qt9C00LDQtdC8INC/0LXRgNC10LzQtdC90L3Rg9GOINGBINC30L3QsNGH0LXQvdC40LXQvCDQstCw0LvRjNGOINC40Lcg0LLRi9Cx0YDQsNC90L3QvtC5INC+0L/RhtC40Lgg0LIg0YHQtdC70LXQutGC0LUg0L/RgNC+0LXQutGC0L7QslxyXG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpOyAvLyDQsdC10YDQtdC8INGC0LXQutGD0YnQuNC5INGB0YLQtdC50YJcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKG5hbWUgPT09IHN0YXRlW2ldLm5hbWUpIHtcclxuICAgICAgICAvLyDQtdGB0LvQuCDRgtC10LrRg9GJ0LjQuSDQstGL0LHRgNCw0L3QvdGL0Lkg0L/RgNC+0LXQutGCINCyINGB0LXQu9C10LrRgtC1INC10YHRgtGMINCyINGB0YLQtdC50YLQtSDRgtC+XHJcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChzdGF0ZVtpXSk7IC8vINC00LXQu9Cw0LXQvCDQtdCz0L4g0LDQutGC0LjQstC90YvQvFxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGdldEFjdGl2ZVByb2plY3QoKTsgLy8g0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LXQs9C+INCyINC/0LXRgNC10LzQtdC90L3Rg9GOXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHJlbmRlclByb2plY3QoYWN0aXZlKTsgLy8g0YDQtdC90LTQtdGA0LjQvCDQvdCw0Ygg0L/RgNC+0LXQutGCXHJcbiAgICAgICAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiOyAvLyDQvtGH0LjRidCw0LXQvCDRgdCw0LnQtNCx0LDRgFxyXG4gICAgICAgIHNpZGVCYXIuYXBwZW5kKHByb2plY3QpOyAvLyDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0L3QtdCz0L4g0L3QsNGIINC/0YDQvtC10LrRglxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8v0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDRgtGD0LTRg1xyXG5mdW5jdGlvbiBlZGl0VG9kb0hhbmRsZSgpIHtcclxuICBsZXQgZW5hYmxlID0gZmFsc2U7IC8vINGB0L7Qt9C00LDQtdC8INGE0LvQsNCzINGB0L7RgdGC0L7Rj9C90LjRj1xyXG4gIHNpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtYnRuXCIpKSByZXR1cm47IC8vINC10YHQu9C4INC60LvQuNC6INC90LUg0L/QviDQutC90L7Qv9C60LUg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyAtINC30LDQstC10YDRiNCw0LXQvCDRhNGD0L3QutGG0LjRjlxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQvtGB0YLQsNC90LDQstC70LjQstCw0LXQvCDQtNC10YTQvtC70YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1XHJcblxyXG4gICAgaWYgKCFlbmFibGUpIHtcclxuICAgICAgLy8g0LXRgdC70LggZmFsc2Ug0YLQviDQvdCw0YXQvtC00LjQvCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LTQuNCyINC60LvQuNC60L3Rg9GC0L7QuSDQutC90L7Qv9C60LhcclxuICAgICAgY29uc3QgdG9kb0VsID0gZS50YXJnZXQuY2xvc2VzdChcIi50b2RvLWl0ZW1cIik7XHJcbiAgICAgIGNvbnN0IGVkaXRUYWJsZSA9IHRvZG9FbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRhYmxlXCIpOyAvL9C90LDRhdC+0LTQuNC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINCyINC00LjQstC1INGBINC60LvQsNGB0YHQvtC8IGVkaXRhYmxlXHJcbiAgICAgIGZvciAobGV0IGVkaXQgb2YgZWRpdFRhYmxlKSB7XHJcbiAgICAgICAgZWRpdC5kaXNhYmxlZCA9IGZhbHNlOyAvLyDQtNC10LvQsNC10Lwg0LjRhSDRgNC10LTQsNC60YLQuNGA0YPQtdC80YvQvNC4XHJcbiAgICAgIH1cclxuICAgICAgZW5hYmxlID0gdHJ1ZTsgLy8g0LzQtdC90Y/QtdC8INGE0LvQsNCzINGB0L7RgdGC0L7Rj9C90LjRjyDQvdCwIHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vINC10YHQu9C4INC60LvQuNC60L3Rg9C70Lgg0LLRgtC+0YDQvtC5INGA0LDQtyDRgtC+XHJcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZDsgLy8g0LHQtdGA0LXQvCDQtNCw0YLQsNGB0LXRgiDQutC70LjQutC90YPRgtC+0Lkg0LrQvdC+0L/QutC4XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTsgLy8g0LHQtdGA0LXQvCDRgtC10LrRg9GJ0LjQuSDRgdGC0LXQudGCXHJcbiAgICAgIGZvciAobGV0IHByb2plY3RzIG9mIHN0YXRlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0cy5hcnIpIHtcclxuICAgICAgICAgIGlmIChpZCA9PT0gdG9kby5pZCkge1xyXG4gICAgICAgICAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDRgdC+0LLQv9Cw0LTQtdC90LjQtSDRgtC+XHJcbiAgICAgICAgICAgIC8vINC/0YDQuNGB0LLQsNC40LLQsNC10Lwg0LLRgdC10Lwg0LXQu9C10LzQtdC90YLQsNC8INC90L7QstGL0LUg0LfQvdCw0YfQtdC90LjRjyDQuNC3INCy0LDQu9GM0Y5cclxuICAgICAgICAgICAgY29uc3QgdG9kb0VsID0gZS50YXJnZXQuY2xvc2VzdChcIi50b2RvLWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRUYWJsZSA9IHRvZG9FbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRhYmxlXCIpO1xyXG4gICAgICAgICAgICB0b2RvLnRpdGxlID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVUb2RvXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA9IHRvZG9FbC5xdWVyeVNlbGVjdG9yKFwiLmR1ZURhdGVUb2RvXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB0b2RvLnByaW9yaXR5ID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlUb2RvXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgc2F2ZVN0YXRlKGdldFN0YXRlKCkpOyAvL9C+0LHQvdC+0LLQu9GP0LXQvCBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgZW5hYmxlID0gZmFsc2U7IC8vINC80LXQvdGP0LXQvCDRgdC+0YHRgtC+0Y/QvdC40LVcclxuICAgICAgICAgICAgZm9yIChsZXQgZWRpdCBvZiBlZGl0VGFibGUpIHtcclxuICAgICAgICAgICAgICBlZGl0LmRpc2FibGVkID0gdHJ1ZTsgLy8g0LTQtdC70LDQtdC8INC90LUg0YDQtdC00LDQutGC0LjRgNGD0LXQvNGL0LzQuCDQvdCw0YjQuCDRjdC70LXQvNC10L3RgtGLXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrOyAvLyDQvtGB0YLQsNC90LDQstC+0LjQstCw0LXQvCDRhtC40LrQu1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZpZVRvZG9IYW5kbGVyKCkge1xyXG4gIHNpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idG5cIikpIHtcclxuICAgICAgLy/QtNC+0LHQsNCy0LjRgtGMINGB0L7Qt9C00LDQvdC40LUg0LTQvtC8INC10LvQtdC80LXQvdGC0LAg0YHQviDRgdC/0LjRgdC60L7QvCDQstGB0LXRhSDQtNC+0YHRgtGD0L/QvdGL0YUg0L/RgNC+0LXQutGC0L7QsiDQuCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutCw0LrQvtC5LdGC0L4g0LjQtyDQvdC40YUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LzQtdGC0L7QtNCwIG1vdmllUHJvamVjdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5kZWxldGVUb2RvKCk7XHJcbmV4cG9ydCB7XHJcbiAgaGFuZGxlVG9kbyxcclxuICBzaWRlQmFyLFxyXG4gIHNlbGVjdFByb2plY3QsXHJcbiAgcmVuZGVyU2VsZWN0T3B0aW9ucyxcclxuICBoYW5kbGVTZWxlY3RPcHRpb25zLFxyXG4gIGRlbGV0ZVByb2plY3RIYW5kbGUsXHJcbiAgZWRpdFRvZG9IYW5kbGUsXHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi9yZW5kZXItdG9kby5qc1wiO1xyXG5cclxuLy/RgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDRgNC10L3QtNC10YDQsCDQv9GA0L7QtdC60YLQsCDQutC+0YLQvtGA0LDRjyDQv9GA0LjQvdC40LzQsNC10YIg0L7QsdGK0LXQutGCINGBINC80LXRgtC+0LTQsNC80Lgg0LjQtyBjcmVhdGVQcm9qZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2plY3QpIHtcclxuICAvL9GB0L7Qt9C00LDQtdC8INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQtNC40LIg0LrRg9C00LAg0LHRg9C00LXQvCDRgdC60LvQsNC00YvQstCw0YLRjCDQstGB0LUg0YLRg9C00YNcclxuICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RFbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XHJcblxyXG4gIC8v0YHQvtC30LTQsNC10Lwg0LfQsNCz0L7Qu9C+0LLQvtC6INGBINC90LDQt9Cy0LDQvdC40LXQvCDQstC30Y/RgtGL0Lwg0LjQtyDQuNC80LXQvdC4INC/0YDQvtC10LrRgtCwINC4INC00L7QsdCw0LLQu9GP0LXQvCDQtdCz0L4g0LIg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC00LjQslxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gIHByb2plY3RFbC5hcHBlbmQodGl0bGUpO1xyXG5cclxuICAvL9GB0L7Qt9C00LDQtdC8INC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINC/0YDQvtC10LrRgtCwLlxyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcclxuICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XHJcbiAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbFwiKTtcclxuICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCLQo9C00LDQu9C40YLRjCDQv9GA0L7QtdC60YJcIjtcclxuICAvL9C/0YDQuNGB0LLQsNC40LLQsNC10Lwg0LXQuSDQtNCw0YLQsNGB0LXRgiDQsNC50LTQuCDQuNC3INCw0LnQtNC4INC/0YDQvtC10LrRgtCwXHJcbiAgZGVsZXRlUHJvamVjdEJ0bi5kYXRhc2V0LmlkID0gcHJvamVjdC5pZDtcclxuICBwcm9qZWN0RWwuYXBwZW5kKGRlbGV0ZVByb2plY3RCdG4pO1xyXG5cclxuICAvL9GB0L7Qt9C00LDQtdC8INGC0YPQtNGDINC70LjRgdGCINC00LvRjyDRgNCw0LfQvNC10YnQtdC90LjRjyDQsiDQvdC10Lwg0LLRgdC10YUg0YLRg9C00YMg0YHQvtC00LXRgNC20LDRidC40YXRgdGPINCyINC/0YDQvtC10LrRgtC1XHJcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3RcIik7XHJcblxyXG4gIC8v0LTQtdC70LDQtdC8INGG0LjQutC7INC00LvRjyDQv9C10YDQtdCx0L7RgNCwINCy0YHQtdGFINGC0YPQtNGDINGB0L7QtNC10YDQttCw0YnQuNGF0YHRjyDQsiDRhdGA0LDQvdC40LvQuNGJ0LUg0L/RgNC+0LXQutGC0LBcclxuICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QuYXJyKSB7XHJcbiAgICAvL9GA0LXQvdC00LXRgNC40Lwg0YLRg9C00YMg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC90LAg0LrQsNC20LbQvtC5INC40YLQtdGA0LDRhtC40Lgg0LIg0L3QsNGIINGC0YPQtNGDINC70LjRgdGCINC00LjQslxyXG4gICAgdG9kb0xpc3QuYXBwZW5kKHJlbmRlclRvZG8odG9kbykpO1xyXG4gIH1cclxuICAvL9C00L7QsdCw0LLQu9GP0LXQvCDQsiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LTQuNCyINGC0YPQtNGD0LvQuNGB0YIg0Lgg0YDQtdGC0LXRgNC90LjQvCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LTQuNCyXHJcbiAgcHJvamVjdEVsLmFwcGVuZCh0b2RvTGlzdCk7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0RWw7XHJcbn1cclxuIiwiLy/RgdC+0LfQtNCw0LXQvCDRhNGD0LrRhtC40Y4g0YDQtdC90LTQtdGA0LAg0YLRg9C00YMsINC60L7RgtC+0YDQsNGPINC/0YDQuNC90LjQvNCw0LXRgiDQvtCx0YzQtdC60YIg0LzQtdGC0L7QtNC+0LIg0LjQtyBjcmVhdGVUb2RvLCDQtNCw0LvQtdC1INC/0LXRgNC10LTQsNC00LjQvCDQtdCz0L4g0LIg0LrQvtC90YLRgNC+0LvQu9C10YDQtVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kbyh0b2RvKSB7XHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDQtNC40LIg0LrRg9C00LAg0LHRg9C00LXQvCDQv9C+0LzQtdGJ0LDRgtGMINC00YDRg9Cz0LjQtSDQtdC70LXQvNC10L3RgtGLXHJcbiAgY29uc3QgdG9kb0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RvRWwuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcclxuICBjb25zdCBidG5Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidG5Ub2RvLmNsYXNzTGlzdC5hZGQoXCJidG4tdG9kby1ib3hcIik7XHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDRgtGD0LTRg1xyXG4gIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImJ0bi10b2RvXCIpO1xyXG4gIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tZWxcIik7XHJcbiAgLy/Qv9GA0LjRgdCy0LDQuNCy0LDQtdC8INC10Lkg0LTQsNGC0LDRgdC10YIg0LDQudC00Lgg0LjQtyDQvdCw0YjQtdCz0L4g0L7QsdGK0LXQutGC0LAg0LzQtdGC0L7QtNC+0LIg0YLRg9C00YMsINGH0YLQvtCx0Ysg0LIg0LTQsNC70YzQvdC10LnRiNC10Lwg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70Y/Qu9GB0Y8g0YLRg9C00YMg0YEg0YLQsNC60LjQvCDQsNC50LTQuCDQuNC3INGF0YDQsNC90LjQu9C40YnQsCDQsiDQv9GA0L7QtdC60YLQtVxyXG4gIGRlbGV0ZVRvZG9CdG4uZGF0YXNldC5pZCA9IHRvZG8uaWQ7XHJcbiAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRvZG9CdG5cIik7XHJcbiAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xyXG4gIC8v0YHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YIgdGV4dGFyZWEgINC4INC00LXQu9Cw0LXQvCDQtdCz0L4g0L3QtdGA0LXQtNCw0LrRgtC40YDRg9C10LzRi9C8IGRpc2FibGVkID0gdHJ1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbFwiKTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdGFibGVcIik7XHJcbiAgZGVzY3JpcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgLy/QsdC10YDQtdC8INC30L3QsNGH0LXQvdC40LUg0LjQtyB0b2RvINC4INC30LDQv9C40YHRi9Cy0LDQtdC8INC10LPQviDQsiDQvdCw0Ygg0Y3Qu9C10LzQtdC90YJcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XHJcblxyXG4gIC8v0YHQvtC30LTQsNC10Lwg0LjQvdC/0YPRgiDRgSDRgtC40L/QvtC8IHRleHQg0Lgg0LTQtdC70LDQtdC8INC10LPQviBkaXNhYmxlZCDQtNC70Y8g0YLQvtCz0L4g0YfRgtC+0LHRiyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvNC+0LMg0LjQt9C80LXQvdC40YLRjCDRgtC10LrRgiDQsdC10Lcg0L3QsNC20LDRgtC40Y8g0L3QsCDQutC90L7Qv9C60YMg0YDQtdC00LDQutGC0L7RgNC40LLQsNC90LjRj1xyXG4gIGNvbnN0IHRpdGxlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0aXRsZVRvZG8uY2xhc3NMaXN0LmFkZChcInRleHRcIik7XHJcbiAgdGl0bGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsXCIpO1xyXG4gIHRpdGxlVG9kby50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgdGl0bGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKTtcclxuICB0aXRsZVRvZG8uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIHRpdGxlVG9kby5jbGFzc0xpc3QuYWRkKFwidGl0bGVUb2RvXCIpO1xyXG5cclxuICAvL9Cx0LXRgNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3INGC0YPQtNGDINC4INC30LDQv9C40YHRi9Cy0LDQtdC8INC10LPQviDQsiDQstCw0LvRjNGOINC90LDRiNC10LPQviDRjdC70LXQvNC10L3RgtCwXHJcbiAgdGl0bGVUb2RvLnZhbHVlID0gdG9kby50aXRsZTtcclxuXHJcbiAgLy/RgdC+0LfQtNCw0LXQvCDRgdC10LvQtdC60YIg0Lgg0YLRgNC4INC+0L/RhtC40Lgg0YLQsNC60LbQtSDQtNC10LvQsNC10Lwg0LjRhSBkaXNhYmxlZFxyXG4gIGNvbnN0IHByaW9yaXR5VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgcHJpb3JpdHlUb2RvLmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKTtcclxuICBwcmlvcml0eVRvZG8uY2xhc3NMaXN0LmFkZChcImZvcm0tZWxcIik7XHJcbiAgcHJpb3JpdHlUb2RvLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVRvZG9cIik7XHJcbiAgcHJpb3JpdHlUb2RvLmRpc2FibGVkID0gdHJ1ZTtcclxuICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb24xLnRleHRDb250ZW50ID0gXCJsb3dcIjtcclxuICBvcHRpb24xLnZhbHVlID0gXCJsb3dcIjtcclxuICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb24yLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcclxuICBvcHRpb24yLnZhbHVlID0gXCJtZWRpdW1cIjtcclxuICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb24zLnRleHRDb250ZW50ID0gXCJoaWdoXCI7XHJcbiAgb3B0aW9uMy52YWx1ZSA9IFwiaGlnaFwiO1xyXG5cclxuICBwcmlvcml0eVRvZG8uYXBwZW5kKG9wdGlvbjEpO1xyXG4gIHByaW9yaXR5VG9kby5hcHBlbmQob3B0aW9uMik7XHJcbiAgcHJpb3JpdHlUb2RvLmFwcGVuZChvcHRpb24zKTtcclxuXHJcbiAgLy/QsdC10YDQtdC8INC30L3QsNGH0LXQvdC40LUg0LjQtyDRgtGD0LTRgyDQuCDQv9GA0LjRgdCy0LDQtdCy0LDQtdC8INC10LPQviDQvdCw0YjQtdC80YMg0YHQtdC70LXQutGC0YNcclxuICBwcmlvcml0eVRvZG8udmFsdWUgPSB0b2RvLnByaW9yaXR5O1xyXG5cclxuICAvL9GB0L7Qt9C00LDQtdC8INC40L3Qv9GD0YIg0YEg0YLQuNC/0L7QvCBkYXRlINC4INC00LXQu9Cw0LXQvCDQtdCz0L4gZGlzYWJsZWRcclxuICBjb25zdCBkdWVEYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkdWVEYXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVRvZG9cIik7XHJcbiAgZHVlRGF0ZVRvZG8uY2xhc3NMaXN0LmFkZChcImZvcm0tZWxcIik7XHJcbiAgZHVlRGF0ZVRvZG8uY2xhc3NMaXN0LmFkZChcImVkaXRhYmxlXCIpO1xyXG4gIGR1ZURhdGVUb2RvLmRpc2FibGVkID0gdHJ1ZTtcclxuICBkdWVEYXRlVG9kby50eXBlID0gXCJkYXRlXCI7XHJcblxyXG4gIC8v0LHQtdGA0LXQvCDQt9C90LDRh9C10L3QuNC1INC40Lcg0YLRg9C00YMg0Lgg0L/RgNC40YHQstCw0LXQstCw0LXQvCDQtdCz0L4g0LIg0LLQsNC70YzRjiDQvdCw0YjQtdCz0L4g0Y3Qu9C10LzQtdC90YLQsFxyXG4gIGR1ZURhdGVUb2RvLnZhbHVlID0gdG9kby5kdWVEYXRlO1xyXG5cclxuICAvL9GB0L7Qt9C00LDQtdC8INC60L3QvtC/0LrRgyDRgNC10LTQsNC60YLQvtGA0L7QstCw0L3QuNGPICwg0LIg0LHRg9C00YPRidC10Lwg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvtGC0L7RgNGD0Y4g0LLRgdC1INC90LXQsNC60YLQuNCy0L3Ri9C1INC/0L7Qu9GPIGRpc2FibGVkID0gdHJ1ZSDRgdGC0LDQvdGD0YIgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBlZGl0QnRuLmRhdGFzZXQuaWQgPSB0b2RvLmlkO1xyXG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcclxuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcclxuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tdG9kb1wiKTtcclxuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsXCIpO1xyXG5cclxuICAvL9C00L7QsdCw0LLQu9GP0LXQvCDQstGB0LUg0YHQvtC30LTQsNC90L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0LIg0LTQuNCyINGC0YPQtNGDINC4INGA0LXRgtC10YDQvdC40Lwg0LXQs9C+XHJcbiAgdG9kb0VsLmFwcGVuZCh0aXRsZVRvZG8pO1xyXG4gIHRvZG9FbC5hcHBlbmQoZGVzY3JpcHRpb24pO1xyXG4gIHRvZG9FbC5hcHBlbmQocHJpb3JpdHlUb2RvKTtcclxuXHJcbiAgdG9kb0VsLmFwcGVuZChkdWVEYXRlVG9kbyk7XHJcbiAgYnRuVG9kby5hcHBlbmQoZGVsZXRlVG9kb0J0bik7XHJcbiAgYnRuVG9kby5hcHBlbmQoZWRpdEJ0bik7XHJcbiAgdG9kb0VsLmFwcGVuZChidG5Ub2RvKTtcclxuXHJcbiAgcmV0dXJuIHRvZG9FbDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGhhbmRsZVRvZG8sXHJcbiAgc2lkZUJhcixcclxuICByZW5kZXJTZWxlY3RPcHRpb25zLFxyXG4gIGhhbmRsZVNlbGVjdE9wdGlvbnMsXHJcbiAgZGVsZXRlUHJvamVjdEhhbmRsZSxcclxuICBlZGl0VG9kb0hhbmRsZSxcclxufSBmcm9tIFwiLi9yZW5kZXIvY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vY29yZS9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3QgfSBmcm9tIFwiLi9yZW5kZXIvcmVuZGVyLXByb2plY3QuanNcIjtcclxuaW1wb3J0IHsgbG9hZFN0YXRlIH0gZnJvbSBcIi4vY29yZS9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRBY3RpdmVQcm9qZWN0LCBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vY29yZS9hcHAtc3RhdGUuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL2NvcmUvdG9kby5qc1wiO1xyXG5cclxuLy8g0KLQvtC70YzQutC+INGB0L7Qt9C00LDQtdC8INC+0LHRitC10LrRglxyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0KCkge1xyXG4gIHJldHVybiBjcmVhdGVQcm9qZWN0KFwiR2VuZXJhbFwiKTtcclxufVxyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0LfQsNCz0YDRg9C30LrQuCDQtNCw0L3QvdGL0YUg0LjQtyBsb2NhbHN0b3JhZ2VcclxuZnVuY3Rpb24gc3RvcmFnZUxvYWQoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBsb2FkU3RhdGUoKTsgLy8g0LHQtdGA0LXQvCDQstGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyBsb2NhbFN0b3JhZ2VcclxuXHJcbiAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gMS4g0KHQvtC30LTQsNC10LwgR2VuZXJhbCwg0LXRgdC70Lgg0L/Rg9GB0YLQvlxyXG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZURlZmF1bHQoKTtcclxuICAgIGFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIDIuINCS0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LXQvCDQtNCw0L3QvdGL0LUg0LjQtyBsb2NhbFN0b3JhZ2VcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBwcm9qZWN0c1tpXTtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdERhdGEubmFtZSk7XHJcblxyXG4gICAgICBmb3IgKGxldCB0b2RvRGF0YSBvZiBwcm9qZWN0RGF0YS5hcnIpIHtcclxuICAgICAgICBjb25zdCB0b2RvID0gY3JlYXRlVG9kbyh0b2RvRGF0YSk7XHJcbiAgICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAzLiDQldCU0JjQndCQ0K8g0KLQntCn0JrQkCDQoNCV0J3QlNCV0KDQkCDQn9Ce0KHQm9CVINCX0JDQk9Cg0KPQl9Ca0JhcclxuICBjb25zdCBhbGxQcm9qZWN0cyA9IGdldFN0YXRlKCk7XHJcbiAgaWYgKGFsbFByb2plY3RzLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IGZpcnN0UHJvamVjdCA9IGFsbFByb2plY3RzWzBdO1xyXG4gICAgc2V0QWN0aXZlUHJvamVjdChmaXJzdFByb2plY3QpO1xyXG5cclxuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHNpZGVCYXIuYXBwZW5kKHJlbmRlclByb2plY3QoZmlyc3RQcm9qZWN0KSk7XHJcblxyXG4gICAgcmVuZGVyU2VsZWN0T3B0aW9ucygpO1xyXG4gIH1cclxufVxyXG5cclxuZWRpdFRvZG9IYW5kbGUoKTtcclxuaGFuZGxlVG9kbygpO1xyXG5zdG9yYWdlTG9hZCgpO1xyXG5kZWxldGVQcm9qZWN0SGFuZGxlKCk7XHJcbmhhbmRsZVNlbGVjdE9wdGlvbnMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9