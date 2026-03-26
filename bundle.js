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
  --shadow-box: 2px 2px 2px brown;
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

#form-project {
  grid-area: "form-project";
  margin-left: var(--fs-lg);
  justify-self: start;
  background-color: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: clamp(250px, 15vw, 600px);
  height: clamp(150px, 20vh, 800px);
}
#form-todo {
  grid-area: "form-todo";
  display: flex;

  flex-flow: column wrap;
  width: clamp(400px, 40vw, 600px);
}
#form-todo button {
  padding: 4px;
  color: var(--text-color);
  align-self: start;
  background-color: var(--button-color);
}
#done {
  align-self: start;
}
#side-bar {
  margin-left: var(--fs-lg);
  justify-self: start;
  grid-area: "side-bar";
}
body {
  background-color: var(--bg-color);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: clamp(200px, 30vw, 500px), 1fr;
  grid-template-rows: minmax(150px, 1fr), minmax(200px, 2fr);
  grid-template-areas:
    "form-project form-todo"
    "side-bar side-bar";
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,QAAQ;EACR,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,oCAAoC;EACpC,+BAA+B;EAC/B,gCAAgC;;EAEhC,iBAAiB;EACjB,iCAAiC;EACjC,iCAAiC;EACjC,mCAAmC;;EAEnC,SAAS;EACT,YAAY;EACZ,eAAe;EACf,aAAa;;EAEb,UAAU;EACV,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;EACnB,iCAAiC;EACjC,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,gCAAgC;EAChC,iCAAiC;AACnC;AACA;EACE,sBAAsB;EACtB,aAAa;;EAEb,sBAAsB;EACtB,gCAAgC;AAClC;AACA;EACE,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,qCAAqC;AACvC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,qDAAqD;EACrD,0DAA0D;EAC1D;;uBAEqB;AACvB","sourcesContent":[":root {\r\n  /*цвета*/\r\n  --primary-color: blue;\r\n  --text-color: white;\r\n  --bg-color: green;\r\n  --shadow-text: 1px 1px 2px lightblue;\r\n  --shadow-box: 2px 2px 2px brown;\r\n  --button-color: rgb(81, 81, 232);\r\n\r\n  /*размеры шрифта*/\r\n  --fs-sm: clamp(0.8rem, 2vw, 1rem);\r\n  --fs-md: clamp(1rem, 3vw, 1.5rem);\r\n  --fs-lg: clamp(1.5rem, 4vw, 2.5rem);\r\n\r\n  /*шрифты*/\r\n  --fm-logo: d;\r\n  --fm-project: p;\r\n  --fm--todo: j;\r\n\r\n  /*отступы*/\r\n  --spacing-sm: 0.5rem;\r\n  --spasing-md: 1rem;\r\n  --spasing-lg: 2rem;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#form-project {\r\n  grid-area: \"form-project\";\r\n  margin-left: var(--fs-lg);\r\n  justify-self: start;\r\n  background-color: var(--bg-color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: start;\r\n  width: clamp(250px, 15vw, 600px);\r\n  height: clamp(150px, 20vh, 800px);\r\n}\r\n#form-todo {\r\n  grid-area: \"form-todo\";\r\n  display: flex;\r\n\r\n  flex-flow: column wrap;\r\n  width: clamp(400px, 40vw, 600px);\r\n}\r\n#form-todo button {\r\n  padding: 4px;\r\n  color: var(--text-color);\r\n  align-self: start;\r\n  background-color: var(--button-color);\r\n}\r\n#done {\r\n  align-self: start;\r\n}\r\n#side-bar {\r\n  margin-left: var(--fs-lg);\r\n  justify-self: start;\r\n  grid-area: \"side-bar\";\r\n}\r\nbody {\r\n  background-color: var(--bg-color);\r\n  display: grid;\r\n  justify-items: center;\r\n  align-items: center;\r\n  grid-template-columns: clamp(200px, 30vw, 500px), 1fr;\r\n  grid-template-rows: minmax(150px, 1fr), minmax(200px, 2fr);\r\n  grid-template-areas:\r\n    \"form-project form-todo\"\r\n    \"side-bar side-bar\";\r\n}\r\n"],"sourceRoot":""}]);
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
let state = [];
let active = null;

const getState = () => {
  return [...state];
};
const addProject = (project) => {
  if (state.includes(project)) return;
  state.push(project);
  return state;
};
const removeProject = (project) => {
  if (!state.includes(project)) return;
  const index = state.indexOf(project);
  state.splice(index, 1);
  return state;
};
const setActiveProject = (project) => {
  active = project;
  return active;
};
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
function createProject(name) {
  let arr = [];
  const id = crypto.randomUUID();
  const addTodo = (todo) => {
    if (arr.includes(todo)) return null;
    arr.push(todo);
  };
  const removeTodo = (todo) => {
    if (!arr.includes(todo)) return null;
    const index = arr.indexOf(todo);
    arr.splice(index, 1);
    return arr;
  };
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
const saveState = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};
const loadState = () => {
  const data = localStorage.getItem("state");
  if (data === null) return [];
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
function createTodo({ title, description, dueDate, priority }) {
  let done = false;
  const id = crypto.randomUUID();
  const toggle = () => {
    done = !done;
  };
  return { toggle, title, description, dueDate, priority, done, id };
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
/* harmony export */   handleSelectOptions: () => (/* binding */ handleSelectOptions),
/* harmony export */   handleTodo: () => (/* binding */ handleTodo),
/* harmony export */   renderSelectOptions: () => (/* binding */ renderSelectOptions),
/* harmony export */   selectProject: () => (/* binding */ selectProject),
/* harmony export */   sideBar: () => (/* binding */ sideBar)
/* harmony export */ });
/* harmony import */ var _core_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/todo.js */ "./src/core/todo.js");
/* harmony import */ var _core_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/project.js */ "./src/core/project.js");
/* harmony import */ var _render_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-todo.js */ "./src/render/render-todo.js");
/* harmony import */ var _render_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-project.js */ "./src/render/render-project.js");
/* harmony import */ var _core_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/storage.js */ "./src/core/storage.js");
/* harmony import */ var _core_app_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/app-state.js */ "./src/core/app-state.js");








const formProject = document.getElementById("form-project");
const selectProject = document.getElementById("select-project");
const projectName = document.getElementById("project-name");

const sideBtn = document.getElementById("side-btn");
const sideBar = document.getElementById("side-bar");

const add = document.getElementById("add");
const title = document.getElementById("title");
const description = document.getElementById("description");
const done = document.getElementById("done");
const dueDate = document.getElementById("due-date");
const selectTodo = document.getElementById("select-todo");
const priority1 = document.getElementById("priority1");
const priority2 = document.getElementById("priority2");
const priority3 = document.getElementById("priority3");

function handleProject(todo) {
  const name = projectName.value;
  const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)();

  for (let i = 0; i < state.length; i++) {
    if (name === state[i].name) {
      const project = state[i];
      project.addTodo(todo);

      (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.setActiveProject)(project);
      const todoEl = (0,_render_todo_js__WEBPACK_IMPORTED_MODULE_2__.renderTodo)(todo);
      sideBar.append(todoEl);
      return;
    }
  }
  const project = (0,_core_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(name);
  project.addTodo(todo);
  (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.addProject)(project);
  renderSelectOptions();
  (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.setActiveProject)(project);
  const projectEl = (0,_render_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(project);
  sideBar.append(projectEl);
  if (Array.from(selectProject.options).find((opt) => opt.value === name))
    return;
}

function handleTodo() {
  add.addEventListener("click", (e) => {
    e.preventDefault();

    if (!title.value || !description.value || !dueDate.value) {
      alert("Заполните поля");
      return;
    }

    const todo = (0,_core_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)({
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
      priority: selectTodo.value,
    });

    const nameValue = projectName.value?.trim();

    if (!nameValue) {
      let project = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getActiveProject)();

      if (!project || (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)().length === 0) {
        project = (0,_core_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("General");
        (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.addProject)(project);
        (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.setActiveProject)(project);
      }

      project.addTodo(todo);

      sideBar.innerHTML = "";
      sideBar.append((0,_render_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(project));

      renderSelectOptions();
    } else {
      handleProject(todo);
    }

    (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveState)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)());
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

function deleteProjectHandle() {
  sideBar.addEventListener("click", (e) => {
    if (!e.target.classList.contains("delete-project-btn")) return;

    const id = e.target.dataset.id;
    const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)();
    const projectToRemove = state.find((p) => p.id === id);

    if (projectToRemove) {
      (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.removeProject)(projectToRemove);
      (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveState)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)());

      renderSelectOptions();

      if ((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getActiveProject)()?.id === id) {
        sideBar.innerHTML = "";
        const newState = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)();
        if (newState.length > 0) {
          (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.setActiveProject)(newState[0]);
          sideBar.append((0,_render_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(newState[0]));
        }
      } else {
        sideBar.innerHTML = "";
        sideBar.append((0,_render_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getActiveProject)()));
      }
    }
  });
}

function deleteTodo() {
  sideBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteTodoBtn")) {
      const deleteTodoBtn = e.target;

      const id = deleteTodoBtn.dataset.id;
      const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)();
      for (let i = 0; i < state.length; i++) {
        const projects = state[i];

        for (let todo of projects.arr) {
          if (id === todo.id) {
            projects.removeTodo(todo);
            e.target.closest("div").remove();
            (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveState)((0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)());
            break;
          }
        }
      }
    }
  });
}
function renderSelectOptions() {
  selectProject.innerHTML = "";
  let stateName = [];
  const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)();
  for (let i = 0; i < state.length; i++) {
    stateName.push(state[i].name);
  }
  for (let j = 0; j < stateName.length; j++) {
    const option = document.createElement("option");
    option.textContent = stateName[j];
    option.value = stateName[j];
    selectProject.append(option);
  }
}
function handleSelectOptions() {
  selectProject.addEventListener("change", (e) => {
    const name = selectProject.value;
    const state = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getState)();
    for (let i = 0; i < state.length; i++) {
      if (name === state[i].name) {
        (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.setActiveProject)(state[i]);
        const active = (0,_core_app_state_js__WEBPACK_IMPORTED_MODULE_5__.getActiveProject)();
        const project = (0,_render_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(active);
        sideBar.innerHTML = "";
        sideBar.append(project);
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


function renderProject(project) {
  const projectEl = document.createElement("div");

  projectEl.classList.add("project-container");

  const title = document.createElement("h2");
  title.textContent = project.name;
  projectEl.append(title);

 
  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.add("delete-project-btn");
  deleteProjectBtn.textContent = "Удалить проект"; // Сделаем текст понятнее
  deleteProjectBtn.dataset.id = project.id;
  projectEl.append(deleteProjectBtn);

 
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");

  for (let todo of project.arr) {
    todoList.append((0,_render_todo_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(todo));
  }

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
function renderTodo(todo) {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo-item");
  const doneInput = document.createElement("input");

  doneInput.type = "checkbox";

  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.dataset.id = todo.id;
  deleteTodoBtn.textContent = "X";
  deleteTodoBtn.classList.add("deleteTodoBtn");

  const description = document.createElement("textarea");
  description.disabled = true;
  description.classList.add("description");
  description.textContent = todo.description;

  const titleTodo = document.createElement("input");
  titleTodo.type = "text";
  titleTodo.disabled = true;
  titleTodo.classList.add("titleTodo");
  titleTodo.value = todo.title;

  const priorityTodo = document.createElement("select");
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

  priorityTodo.value = todo.priority;

  const dueDateTodo = document.createElement("input");
  dueDateTodo.disabled = true;
  dueDateTodo.type = "date";
  dueDateTodo.value = todo.dueDate;

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.classList.add("edit-btn");

  todoEl.append(titleTodo);
  todoEl.append(description);
  todoEl.append(priorityTodo);
  todoEl.append(deleteTodoBtn);
  todoEl.append(doneInput);
  todoEl.append(dueDateTodo);
  todoEl.append(editBtn);
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

function storageLoad() {
  const projects = (0,_core_storage_js__WEBPACK_IMPORTED_MODULE_4__.loadState)();

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

(0,_render_controller_js__WEBPACK_IMPORTED_MODULE_1__.handleTodo)();
storageLoad();
(0,_render_controller_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectHandle)();
(0,_render_controller_js__WEBPACK_IMPORTED_MODULE_1__.handleSelectOptions)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBUVU7QUFDa0I7QUFDUztBQUNiO0FBQytCO0FBQ2pDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK0RBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBVTtBQUNkLElBQUk7QUFDSjtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQSxzQkFBc0IsK0RBQWE7QUFDbkM7QUFDQTtBQUNBLHFCQUFxQix5REFBVTtBQUMvQjtBQUNBO0FBQ0EsTUFBTSw4REFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBUTtBQUM5QjtBQUNBO0FBQ0EsSUFBSSxvRUFBZ0I7QUFDcEI7QUFDQSxJQUFJLDBEQUFPO0FBQ1gsSUFBSSwwREFBTyxRQUFRLHdFQUFhO0FBQ2hDO0FBQ0EsSUFBSSwwRUFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUVBQVU7QUFDVjtBQUNBLDBFQUFtQjtBQUNuQiwwRUFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb3JlL2FwcC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2NvcmUvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2NvcmUvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2NvcmUvdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3JlbmRlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvcmVuZGVyL3JlbmRlci1wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvcmVuZGVyL3JlbmRlci10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAvKtGG0LLQtdGC0LAqL1xyXG4gIC0tcHJpbWFyeS1jb2xvcjogYmx1ZTtcclxuICAtLXRleHQtY29sb3I6IHdoaXRlO1xyXG4gIC0tYmctY29sb3I6IGdyZWVuO1xyXG4gIC0tc2hhZG93LXRleHQ6IDFweCAxcHggMnB4IGxpZ2h0Ymx1ZTtcclxuICAtLXNoYWRvdy1ib3g6IDJweCAycHggMnB4IGJyb3duO1xyXG4gIC0tYnV0dG9uLWNvbG9yOiByZ2IoODEsIDgxLCAyMzIpO1xyXG5cclxuICAvKtGA0LDQt9C80LXRgNGLINGI0YDQuNGE0YLQsCovXHJcbiAgLS1mcy1zbTogY2xhbXAoMC44cmVtLCAydncsIDFyZW0pO1xyXG4gIC0tZnMtbWQ6IGNsYW1wKDFyZW0sIDN2dywgMS41cmVtKTtcclxuICAtLWZzLWxnOiBjbGFtcCgxLjVyZW0sIDR2dywgMi41cmVtKTtcclxuXHJcbiAgLyrRiNGA0LjRhNGC0YsqL1xyXG4gIC0tZm0tbG9nbzogZDtcclxuICAtLWZtLXByb2plY3Q6IHA7XHJcbiAgLS1mbS0tdG9kbzogajtcclxuXHJcbiAgLyrQvtGC0YHRgtGD0L/RiyovXHJcbiAgLS1zcGFjaW5nLXNtOiAwLjVyZW07XHJcbiAgLS1zcGFzaW5nLW1kOiAxcmVtO1xyXG4gIC0tc3Bhc2luZy1sZzogMnJlbTtcclxufVxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jZm9ybS1wcm9qZWN0IHtcclxuICBncmlkLWFyZWE6IFwiZm9ybS1wcm9qZWN0XCI7XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWZzLWxnKTtcclxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgd2lkdGg6IGNsYW1wKDI1MHB4LCAxNXZ3LCA2MDBweCk7XHJcbiAgaGVpZ2h0OiBjbGFtcCgxNTBweCwgMjB2aCwgODAwcHgpO1xyXG59XHJcbiNmb3JtLXRvZG8ge1xyXG4gIGdyaWQtYXJlYTogXCJmb3JtLXRvZG9cIjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIHdpZHRoOiBjbGFtcCg0MDBweCwgNDB2dywgNjAwcHgpO1xyXG59XHJcbiNmb3JtLXRvZG8gYnV0dG9uIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbn1cclxuI2RvbmUge1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG59XHJcbiNzaWRlLWJhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWZzLWxnKTtcclxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIGdyaWQtYXJlYTogXCJzaWRlLWJhclwiO1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAwcHgsIDMwdncsIDUwMHB4KSwgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDE1MHB4LCAxZnIpLCBtaW5tYXgoMjAwcHgsIDJmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiZm9ybS1wcm9qZWN0IGZvcm0tdG9kb1wiXHJcbiAgICBcInNpZGUtYmFyIHNpZGUtYmFyXCI7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGdDQUFnQzs7RUFFaEMsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsbUNBQW1DOztFQUVuQyxTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhOztFQUViLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7O0VBRWIsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELDBEQUEwRDtFQUMxRDs7dUJBRXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC8q0YbQstC10YLQsCovXFxyXFxuICAtLXByaW1hcnktY29sb3I6IGJsdWU7XFxyXFxuICAtLXRleHQtY29sb3I6IHdoaXRlO1xcclxcbiAgLS1iZy1jb2xvcjogZ3JlZW47XFxyXFxuICAtLXNoYWRvdy10ZXh0OiAxcHggMXB4IDJweCBsaWdodGJsdWU7XFxyXFxuICAtLXNoYWRvdy1ib3g6IDJweCAycHggMnB4IGJyb3duO1xcclxcbiAgLS1idXR0b24tY29sb3I6IHJnYig4MSwgODEsIDIzMik7XFxyXFxuXFxyXFxuICAvKtGA0LDQt9C80LXRgNGLINGI0YDQuNGE0YLQsCovXFxyXFxuICAtLWZzLXNtOiBjbGFtcCgwLjhyZW0sIDJ2dywgMXJlbSk7XFxyXFxuICAtLWZzLW1kOiBjbGFtcCgxcmVtLCAzdncsIDEuNXJlbSk7XFxyXFxuICAtLWZzLWxnOiBjbGFtcCgxLjVyZW0sIDR2dywgMi41cmVtKTtcXHJcXG5cXHJcXG4gIC8q0YjRgNC40YTRgtGLKi9cXHJcXG4gIC0tZm0tbG9nbzogZDtcXHJcXG4gIC0tZm0tcHJvamVjdDogcDtcXHJcXG4gIC0tZm0tLXRvZG86IGo7XFxyXFxuXFxyXFxuICAvKtC+0YLRgdGC0YPQv9GLKi9cXHJcXG4gIC0tc3BhY2luZy1zbTogMC41cmVtO1xcclxcbiAgLS1zcGFzaW5nLW1kOiAxcmVtO1xcclxcbiAgLS1zcGFzaW5nLWxnOiAycmVtO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1wcm9qZWN0IHtcXHJcXG4gIGdyaWQtYXJlYTogXFxcImZvcm0tcHJvamVjdFxcXCI7XFxyXFxuICBtYXJnaW4tbGVmdDogdmFyKC0tZnMtbGcpO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICB3aWR0aDogY2xhbXAoMjUwcHgsIDE1dncsIDYwMHB4KTtcXHJcXG4gIGhlaWdodDogY2xhbXAoMTUwcHgsIDIwdmgsIDgwMHB4KTtcXHJcXG59XFxyXFxuI2Zvcm0tdG9kbyB7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJmb3JtLXRvZG9cXFwiO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICB3aWR0aDogY2xhbXAoNDAwcHgsIDQwdncsIDYwMHB4KTtcXHJcXG59XFxyXFxuI2Zvcm0tdG9kbyBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbn1cXHJcXG4jZG9uZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuI3NpZGUtYmFyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1mcy1sZyk7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwic2lkZS1iYXJcXFwiO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyMDBweCwgMzB2dywgNTAwcHgpLCAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxNTBweCwgMWZyKSwgbWlubWF4KDIwMHB4LCAyZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImZvcm0tcHJvamVjdCBmb3JtLXRvZG9cXFwiXFxyXFxuICAgIFxcXCJzaWRlLWJhciBzaWRlLWJhclxcXCI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgc3RhdGUgPSBbXTtcclxubGV0IGFjdGl2ZSA9IG51bGw7XHJcblxyXG5jb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcclxuICByZXR1cm4gWy4uLnN0YXRlXTtcclxufTtcclxuY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgaWYgKHN0YXRlLmluY2x1ZGVzKHByb2plY3QpKSByZXR1cm47XHJcbiAgc3RhdGUucHVzaChwcm9qZWN0KTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gIGlmICghc3RhdGUuaW5jbHVkZXMocHJvamVjdCkpIHJldHVybjtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4T2YocHJvamVjdCk7XHJcbiAgc3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcbmNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gIGFjdGl2ZSA9IHByb2plY3Q7XHJcbiAgcmV0dXJuIGFjdGl2ZTtcclxufTtcclxuY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IHtcclxuICByZXR1cm4gYWN0aXZlO1xyXG59O1xyXG5leHBvcnQge1xyXG4gIGdldFN0YXRlLFxyXG4gIGdldEFjdGl2ZVByb2plY3QsXHJcbiAgc2V0QWN0aXZlUHJvamVjdCxcclxuICByZW1vdmVQcm9qZWN0LFxyXG4gIGFkZFByb2plY3QsXHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgY29uc3QgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgaWYgKGFyci5pbmNsdWRlcyh0b2RvKSkgcmV0dXJuIG51bGw7XHJcbiAgICBhcnIucHVzaCh0b2RvKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgaWYgKCFhcnIuaW5jbHVkZXModG9kbykpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih0b2RvKTtcclxuICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgcmV0dXJuIGFycjtcclxuICB9O1xyXG4gIGNvbnN0IG1vdmllVG9kbyA9ICh0b2RvLCB0YXJnZXRQcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAodGFyZ2V0UHJvamVjdC5hcnIuaW5jbHVkZXModG9kbykpIHJldHVybiBudWxsO1xyXG4gICAgdGFyZ2V0UHJvamVjdC5hZGRUb2RvKHRvZG8pO1xyXG4gICAgcmVtb3ZlVG9kbyh0b2RvKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBhcnIsIG5hbWUsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIG1vdmllVG9kbywgaWQgfTtcclxufVxyXG4iLCJjb25zdCBzYXZlU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcbn07XHJcbmNvbnN0IGxvYWRTdGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZVwiKTtcclxuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG59O1xyXG5leHBvcnQgeyBzYXZlU3RhdGUsIGxvYWRTdGF0ZSB9O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSkge1xyXG4gIGxldCBkb25lID0gZmFsc2U7XHJcbiAgY29uc3QgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgIGRvbmUgPSAhZG9uZTtcclxuICB9O1xyXG4gIHJldHVybiB7IHRvZ2dsZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSwgaWQgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4uL2NvcmUvdG9kby5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4uL2NvcmUvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vcmVuZGVyLXRvZG8uanNcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3JlbmRlci1wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IHNhdmVTdGF0ZSwgbG9hZFN0YXRlIH0gZnJvbSBcIi4uL2NvcmUvc3RvcmFnZS5qc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRTdGF0ZSxcclxuICBnZXRBY3RpdmVQcm9qZWN0LFxyXG4gIHNldEFjdGl2ZVByb2plY3QsXHJcbiAgcmVtb3ZlUHJvamVjdCxcclxuICBhZGRQcm9qZWN0LFxyXG59IGZyb20gXCIuLi9jb3JlL2FwcC1zdGF0ZS5qc1wiO1xyXG5cclxuY29uc3QgZm9ybVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tcHJvamVjdFwiKTtcclxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XHJcblxyXG5jb25zdCBzaWRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWJ0blwiKTtcclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1iYXJcIik7XHJcblxyXG5jb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IGRvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbmVcIik7XHJcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlXCIpO1xyXG5jb25zdCBzZWxlY3RUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtdG9kb1wiKTtcclxuY29uc3QgcHJpb3JpdHkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eTFcIik7XHJcbmNvbnN0IHByaW9yaXR5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHkyXCIpO1xyXG5jb25zdCBwcmlvcml0eTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5M1wiKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3QodG9kbykge1xyXG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcclxuICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChuYW1lID09PSBzdGF0ZVtpXS5uYW1lKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBzdGF0ZVtpXTtcclxuICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xyXG5cclxuICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgY29uc3QgdG9kb0VsID0gcmVuZGVyVG9kbyh0b2RvKTtcclxuICAgICAgc2lkZUJhci5hcHBlbmQodG9kb0VsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChuYW1lKTtcclxuICBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICByZW5kZXJTZWxlY3RPcHRpb25zKCk7XHJcbiAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcclxuICBjb25zdCBwcm9qZWN0RWwgPSByZW5kZXJQcm9qZWN0KHByb2plY3QpO1xyXG4gIHNpZGVCYXIuYXBwZW5kKHByb2plY3RFbCk7XHJcbiAgaWYgKEFycmF5LmZyb20oc2VsZWN0UHJvamVjdC5vcHRpb25zKS5maW5kKChvcHQpID0+IG9wdC52YWx1ZSA9PT0gbmFtZSkpXHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRvZG8oKSB7XHJcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghdGl0bGUudmFsdWUgfHwgIWRlc2NyaXB0aW9uLnZhbHVlIHx8ICFkdWVEYXRlLnZhbHVlKSB7XHJcbiAgICAgIGFsZXJ0KFwi0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9GPXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oe1xyXG4gICAgICB0aXRsZTogdGl0bGUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgZHVlRGF0ZTogZHVlRGF0ZS52YWx1ZSxcclxuICAgICAgcHJpb3JpdHk6IHNlbGVjdFRvZG8udmFsdWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYW1lVmFsdWUgPSBwcm9qZWN0TmFtZS52YWx1ZT8udHJpbSgpO1xyXG5cclxuICAgIGlmICghbmFtZVZhbHVlKSB7XHJcbiAgICAgIGxldCBwcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xyXG5cclxuICAgICAgaWYgKCFwcm9qZWN0IHx8IGdldFN0YXRlKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJHZW5lcmFsXCIpO1xyXG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xyXG5cclxuICAgICAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBzaWRlQmFyLmFwcGVuZChyZW5kZXJQcm9qZWN0KHByb2plY3QpKTtcclxuXHJcbiAgICAgIHJlbmRlclNlbGVjdE9wdGlvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhhbmRsZVByb2plY3QodG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVN0YXRlKGdldFN0YXRlKCkpO1xyXG4gICAgcmVzZXRJbnB1dHMoKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiByZXNldElucHV0cygpIHtcclxuICBzZWxlY3RUb2RvLnZhbHVlID0gXCJsb3dcIjtcclxuICB0aXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xyXG4gIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEhhbmRsZSgpIHtcclxuICBzaWRlQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvamVjdC1idG5cIikpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0VG9SZW1vdmUgPSBzdGF0ZS5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XHJcblxyXG4gICAgaWYgKHByb2plY3RUb1JlbW92ZSkge1xyXG4gICAgICByZW1vdmVQcm9qZWN0KHByb2plY3RUb1JlbW92ZSk7XHJcbiAgICAgIHNhdmVTdGF0ZShnZXRTdGF0ZSgpKTtcclxuXHJcbiAgICAgIHJlbmRlclNlbGVjdE9wdGlvbnMoKTtcclxuXHJcbiAgICAgIGlmIChnZXRBY3RpdmVQcm9qZWN0KCk/LmlkID09PSBpZCkge1xyXG4gICAgICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgaWYgKG5ld1N0YXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNldEFjdGl2ZVByb2plY3QobmV3U3RhdGVbMF0pO1xyXG4gICAgICAgICAgc2lkZUJhci5hcHBlbmQocmVuZGVyUHJvamVjdChuZXdTdGF0ZVswXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaWRlQmFyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgc2lkZUJhci5hcHBlbmQocmVuZGVyUHJvamVjdChnZXRBY3RpdmVQcm9qZWN0KCkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xyXG4gIHNpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlVG9kb0J0blwiKSkge1xyXG4gICAgICBjb25zdCBkZWxldGVUb2RvQnRuID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICBjb25zdCBpZCA9IGRlbGV0ZVRvZG9CdG4uZGF0YXNldC5pZDtcclxuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZVtpXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0cy5hcnIpIHtcclxuICAgICAgICAgIGlmIChpZCA9PT0gdG9kby5pZCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5yZW1vdmVUb2RvKHRvZG8pO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiZGl2XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzYXZlU3RhdGUoZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgc2VsZWN0UHJvamVjdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGxldCBzdGF0ZU5hbWUgPSBbXTtcclxuICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgc3RhdGVOYW1lLnB1c2goc3RhdGVbaV0ubmFtZSk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgc3RhdGVOYW1lLmxlbmd0aDsgaisrKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3RhdGVOYW1lW2pdO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gc3RhdGVOYW1lW2pdO1xyXG4gICAgc2VsZWN0UHJvamVjdC5hcHBlbmQob3B0aW9uKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlU2VsZWN0T3B0aW9ucygpIHtcclxuICBzZWxlY3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBzZWxlY3RQcm9qZWN0LnZhbHVlO1xyXG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobmFtZSA9PT0gc3RhdGVbaV0ubmFtZSkge1xyXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3Qoc3RhdGVbaV0pO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGdldEFjdGl2ZVByb2plY3QoKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcmVuZGVyUHJvamVjdChhY3RpdmUpO1xyXG4gICAgICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBzaWRlQmFyLmFwcGVuZChwcm9qZWN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1vdmllVG9kb0hhbmRsZXIoKSB7XHJcbiAgc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWJ0blwiKSkge1xyXG4gICAgICAvL9C00L7QsdCw0LLQuNGC0Ywg0YHQvtC30LTQsNC90LjQtSDQtNC+0Lwg0LXQu9C10LzQtdC90YLQsCDRgdC+INGB0L/QuNGB0LrQvtC8INCy0YHQtdGFINC00L7RgdGC0YPQv9C90YvRhSDQv9GA0L7QtdC60YLQvtCyINC4INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60LDQutC+0Lkt0YLQviDQuNC3INC90LjRhSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQvNC10YLQvtC00LAgbW92aWVQcm9qZWN0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRlbGV0ZVRvZG8oKTtcclxuZXhwb3J0IHtcclxuICBoYW5kbGVUb2RvLFxyXG4gIHNpZGVCYXIsXHJcbiAgc2VsZWN0UHJvamVjdCxcclxuICByZW5kZXJTZWxlY3RPcHRpb25zLFxyXG4gIGhhbmRsZVNlbGVjdE9wdGlvbnMsXHJcbiAgZGVsZXRlUHJvamVjdEhhbmRsZSxcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuL3JlbmRlci10b2RvLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgcHJvamVjdEVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgcHJvamVjdEVsLmFwcGVuZCh0aXRsZSk7XHJcblxyXG4gXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xyXG4gIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcItCj0LTQsNC70LjRgtGMINC/0YDQvtC10LrRglwiOyAvLyDQodC00LXQu9Cw0LXQvCDRgtC10LrRgdGCINC/0L7QvdGP0YLQvdC10LVcclxuICBkZWxldGVQcm9qZWN0QnRuLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xyXG4gIHByb2plY3RFbC5hcHBlbmQoZGVsZXRlUHJvamVjdEJ0bik7XHJcblxyXG4gXHJcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3RcIik7XHJcblxyXG4gIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC5hcnIpIHtcclxuICAgIHRvZG9MaXN0LmFwcGVuZChyZW5kZXJUb2RvKHRvZG8pKTtcclxuICB9XHJcblxyXG4gIHByb2plY3RFbC5hcHBlbmQodG9kb0xpc3QpO1xyXG5cclxuICByZXR1cm4gcHJvamVjdEVsO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2RvKHRvZG8pIHtcclxuICBjb25zdCB0b2RvRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9FbC5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xyXG4gIGNvbnN0IGRvbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHJcbiAgZG9uZUlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZVRvZG9CdG4uZGF0YXNldC5pZCA9IHRvZG8uaWQ7XHJcbiAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRvZG9CdG5cIik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGRlc2NyaXB0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdCB0aXRsZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGl0bGVUb2RvLnR5cGUgPSBcInRleHRcIjtcclxuICB0aXRsZVRvZG8uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIHRpdGxlVG9kby5jbGFzc0xpc3QuYWRkKFwidGl0bGVUb2RvXCIpO1xyXG4gIHRpdGxlVG9kby52YWx1ZSA9IHRvZG8udGl0bGU7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgcHJpb3JpdHlUb2RvLmRpc2FibGVkID0gdHJ1ZTtcclxuICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb24xLnRleHRDb250ZW50ID0gXCJsb3dcIjtcclxuICBvcHRpb24xLnZhbHVlID0gXCJsb3dcIjtcclxuICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb24yLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcclxuICBvcHRpb24yLnZhbHVlID0gXCJtZWRpdW1cIjtcclxuICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb24zLnRleHRDb250ZW50ID0gXCJoaWdoXCI7XHJcbiAgb3B0aW9uMy52YWx1ZSA9IFwiaGlnaFwiO1xyXG5cclxuICBwcmlvcml0eVRvZG8uYXBwZW5kKG9wdGlvbjEpO1xyXG4gIHByaW9yaXR5VG9kby5hcHBlbmQob3B0aW9uMik7XHJcbiAgcHJpb3JpdHlUb2RvLmFwcGVuZChvcHRpb24zKTtcclxuXHJcbiAgcHJpb3JpdHlUb2RvLnZhbHVlID0gdG9kby5wcmlvcml0eTtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZHVlRGF0ZVRvZG8uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGR1ZURhdGVUb2RvLnR5cGUgPSBcImRhdGVcIjtcclxuICBkdWVEYXRlVG9kby52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcclxuXHJcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xyXG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xyXG5cclxuICB0b2RvRWwuYXBwZW5kKHRpdGxlVG9kbyk7XHJcbiAgdG9kb0VsLmFwcGVuZChkZXNjcmlwdGlvbik7XHJcbiAgdG9kb0VsLmFwcGVuZChwcmlvcml0eVRvZG8pO1xyXG4gIHRvZG9FbC5hcHBlbmQoZGVsZXRlVG9kb0J0bik7XHJcbiAgdG9kb0VsLmFwcGVuZChkb25lSW5wdXQpO1xyXG4gIHRvZG9FbC5hcHBlbmQoZHVlRGF0ZVRvZG8pO1xyXG4gIHRvZG9FbC5hcHBlbmQoZWRpdEJ0bik7XHJcbiAgcmV0dXJuIHRvZG9FbDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGhhbmRsZVRvZG8sXHJcbiAgc2lkZUJhcixcclxuICByZW5kZXJTZWxlY3RPcHRpb25zLFxyXG4gIGhhbmRsZVNlbGVjdE9wdGlvbnMsXHJcbiAgZGVsZXRlUHJvamVjdEhhbmRsZSxcclxuICBoYW5kbGVGaWx0ZXJzLFxyXG59IGZyb20gXCIuL3JlbmRlci9jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9jb3JlL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3JlbmRlci9yZW5kZXItcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RhdGUgfSBmcm9tIFwiLi9jb3JlL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldEFjdGl2ZVByb2plY3QsIGFkZFByb2plY3QgfSBmcm9tIFwiLi9jb3JlL2FwcC1zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vY29yZS90b2RvLmpzXCI7XHJcblxyXG4vLyDQotC+0LvRjNC60L4g0YHQvtC30LTQsNC10Lwg0L7QsdGK0LXQutGCXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHQoKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVByb2plY3QoXCJHZW5lcmFsXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9yYWdlTG9hZCgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGxvYWRTdGF0ZSgpO1xyXG5cclxuICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAxLiDQodC+0LfQtNCw0LXQvCBHZW5lcmFsLCDQtdGB0LvQuCDQv9GD0YHRgtC+XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlRGVmYXVsdCgpO1xyXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gMi4g0JLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC00LDQvdC90YvQtSDQuNC3IGxvY2FsU3RvcmFnZVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IHByb2plY3RzW2ldO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHRvZG9EYXRhIG9mIHByb2plY3REYXRhLmFycikge1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKHRvZG9EYXRhKTtcclxuICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIDMuINCV0JTQmNCd0JDQryDQotCe0KfQmtCQINCg0JXQndCU0JXQoNCQINCf0J7QodCb0JUg0JfQkNCT0KDQo9CX0JrQmFxyXG4gIGNvbnN0IGFsbFByb2plY3RzID0gZ2V0U3RhdGUoKTtcclxuICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgZmlyc3RQcm9qZWN0ID0gYWxsUHJvamVjdHNbMF07XHJcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGZpcnN0UHJvamVjdCk7XHJcblxyXG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc2lkZUJhci5hcHBlbmQocmVuZGVyUHJvamVjdChmaXJzdFByb2plY3QpKTtcclxuXHJcbiAgICByZW5kZXJTZWxlY3RPcHRpb25zKCk7XHJcbiAgfVxyXG59XHJcblxyXG5oYW5kbGVUb2RvKCk7XHJcbnN0b3JhZ2VMb2FkKCk7XHJcbmRlbGV0ZVByb2plY3RIYW5kbGUoKTtcclxuaGFuZGxlU2VsZWN0T3B0aW9ucygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=