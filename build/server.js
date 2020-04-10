require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*========= begin authActions   ===========*/
const REQUEST_AUTH = 'REQUEST_AUTH';
/* harmony export (immutable) */ __webpack_exports__["a"] = REQUEST_AUTH;

const RECEIVE_AUTH = 'RECEIVE_AUTH';
/* harmony export (immutable) */ __webpack_exports__["b"] = RECEIVE_AUTH;


const SAVE_AUTH = 'SAVE_AUTH';
/* harmony export (immutable) */ __webpack_exports__["c"] = SAVE_AUTH;

const DELETE_AUTH = 'DELETE_AUTH';
/* harmony export (immutable) */ __webpack_exports__["d"] = DELETE_AUTH;


const REQUEST_ACCESS_KEYS = 'REQUEST_ACCESS_KEYS';
/* harmony export (immutable) */ __webpack_exports__["e"] = REQUEST_ACCESS_KEYS;

const RECEIVE_ACCESS_KEYS = 'RECEIVE_ACCESS_KEYS';
/* harmony export (immutable) */ __webpack_exports__["f"] = RECEIVE_ACCESS_KEYS;


const REQUEST_REMOVE_ACCESS_KEY = 'REQUEST_REMOVE_ACCESS_KEY';
/* harmony export (immutable) */ __webpack_exports__["g"] = REQUEST_REMOVE_ACCESS_KEY;

const RECEIVE_REMOVE_ACCESS_KEY = 'RECEIVE_REMOVE_ACCESS_KEY';
/* harmony export (immutable) */ __webpack_exports__["h"] = RECEIVE_REMOVE_ACCESS_KEY;


const REQUEST_PATCH_ACCESS_KEY = 'REQUEST_PATCH_ACCESS_KEY';
/* harmony export (immutable) */ __webpack_exports__["i"] = REQUEST_PATCH_ACCESS_KEY;

const RECEIVE_PATCH_ACCESS_KEY = 'RECEIVE_PATCH_ACCESS_KEY';
/* harmony export (immutable) */ __webpack_exports__["j"] = RECEIVE_PATCH_ACCESS_KEY;


const REQUEST_CREATE_ACCESS_KEY = 'REQUEST_CREATE_ACCESS_KEY';
/* harmony export (immutable) */ __webpack_exports__["k"] = REQUEST_CREATE_ACCESS_KEY;

const RECEIVE_CREATE_ACCESS_KEY = 'RECEIVE_CREATE_ACCESS_KEY';
/* harmony export (immutable) */ __webpack_exports__["l"] = RECEIVE_CREATE_ACCESS_KEY;


const OPEN_POP_SHOW_KEY = 'OPEN_POP_SHOW_KEY';
/* harmony export (immutable) */ __webpack_exports__["m"] = OPEN_POP_SHOW_KEY;

const CLOSE_POP_SHOW_KEY = 'CLOSE_POP_SHOW_KEY';
/* harmony export (immutable) */ __webpack_exports__["n"] = CLOSE_POP_SHOW_KEY;

/*========= end authActions   ===========*/

/*========= begin usersActions   ===========*/
const USER_LOGOUT = 'USER_LOGOUT';
/* harmony export (immutable) */ __webpack_exports__["L"] = USER_LOGOUT;

const LOGIN_CHANGE_ACCOUNT_INPUT = 'LOGIN_CHANGE_ACCOUNT_INPUT';
/* harmony export (immutable) */ __webpack_exports__["M"] = LOGIN_CHANGE_ACCOUNT_INPUT;

const LOGIN_CHANGE_PASSWORD_INPUT = 'LOGIN_CHANGE_PASSWORD_INPUT';
/* harmony export (immutable) */ __webpack_exports__["N"] = LOGIN_CHANGE_PASSWORD_INPUT;


const REQUEST_LOGIN = 'REQUEST_LOGIN';
/* harmony export (immutable) */ __webpack_exports__["O"] = REQUEST_LOGIN;

const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
/* harmony export (immutable) */ __webpack_exports__["P"] = RECEIVE_LOGIN;

const RECEIVE_LOGIN_ERROR = 'RECEIVE_LOGIN_ERROR';
/* harmony export (immutable) */ __webpack_exports__["Q"] = RECEIVE_LOGIN_ERROR;


const PASSWORD_CHANGE_OLD_INPUT = 'PASSWORD_CHANGE_OLD_INPUT';
/* harmony export (immutable) */ __webpack_exports__["R"] = PASSWORD_CHANGE_OLD_INPUT;

const PASSWORD_CHANGE_NEW_INPUT = 'PASSWORD_CHANGE_NEW_INPUT';
/* harmony export (immutable) */ __webpack_exports__["S"] = PASSWORD_CHANGE_NEW_INPUT;

const PASSWORD_CHANGE_NEW_CONFIRM_INPUT = 'PASSWORD_CHANGE_NEW_CONFIRM_INPUT';
/* harmony export (immutable) */ __webpack_exports__["T"] = PASSWORD_CHANGE_NEW_CONFIRM_INPUT;


const REQUEST_MODIFY_PASSWORD = 'REQUEST_MODIFY_PASSWORD';
/* harmony export (immutable) */ __webpack_exports__["U"] = REQUEST_MODIFY_PASSWORD;

const RECEIVE_MODIFY_PASSWORD = 'RECEIVE_MODIFY_PASSWORD';
/* harmony export (immutable) */ __webpack_exports__["V"] = RECEIVE_MODIFY_PASSWORD;

const RECEIVE_MODIFY_PASSWORD_ERROR = 'RECEIVE_MODIFY_PASSWORD_ERROR';
/* harmony export (immutable) */ __webpack_exports__["W"] = RECEIVE_MODIFY_PASSWORD_ERROR;

/*========= end usersActions   ===========*/

/*========= begin registersActions   ===========*/
const REGISTER_CHANGE_EMAIL_INPUT = 'REGISTER_CHANGE_EMAIL_INPUT';
/* harmony export (immutable) */ __webpack_exports__["u"] = REGISTER_CHANGE_EMAIL_INPUT;


const REQUEST_REGISTER_CHECK_EMAIL = 'REQUEST_REGISTER_CHECK_EMAIL';
/* harmony export (immutable) */ __webpack_exports__["v"] = REQUEST_REGISTER_CHECK_EMAIL;

const RECEIVE_REGISTER_CHECK_EMAIL = 'RECEIVE_REGISTER_CHECK_EMAIL';
/* harmony export (immutable) */ __webpack_exports__["w"] = RECEIVE_REGISTER_CHECK_EMAIL;

const RECEIVE_REGISTER_CHECK_EMAIL_ERROR = 'RECEIVE_REGISTER_CHECK_EMAIL_ERROR';
/* harmony export (immutable) */ __webpack_exports__["x"] = RECEIVE_REGISTER_CHECK_EMAIL_ERROR;


const REGISTER_CHANGE_VALIDATE_CODE_INPUT = 'REGISTER_CHANGE_VALIDATE_CODE_INPUT';
/* harmony export (immutable) */ __webpack_exports__["y"] = REGISTER_CHANGE_VALIDATE_CODE_INPUT;


const REQUEST_REGISTER_SEND_VALIDATE_CODE = 'REQUEST_REGISTER_SEND_VALIDATE_CODE';
/* harmony export (immutable) */ __webpack_exports__["z"] = REQUEST_REGISTER_SEND_VALIDATE_CODE;

const RECEIVE_REGISTER_SEND_VALIDATE_CODE = 'RECEIVE_REGISTER_SEND_VALIDATE_CODE';
/* harmony export (immutable) */ __webpack_exports__["A"] = RECEIVE_REGISTER_SEND_VALIDATE_CODE;

const RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR = 'RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR';
/* harmony export (immutable) */ __webpack_exports__["B"] = RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR;


const REQUEST_REGISTER_CHECK_CODE_EXISTS = 'REQUEST_REGISTER_CHECK_CODE_EXISTS';
/* harmony export (immutable) */ __webpack_exports__["C"] = REQUEST_REGISTER_CHECK_CODE_EXISTS;

const RECEIVE_REGISTER_CHECK_CODE_EXISTS = 'RECEIVE_REGISTER_CHECK_CODE_EXISTS';
/* harmony export (immutable) */ __webpack_exports__["D"] = RECEIVE_REGISTER_CHECK_CODE_EXISTS;

const RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR = 'RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR';
/* harmony export (immutable) */ __webpack_exports__["E"] = RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR;


const REGISTER_CHANGE_PASSWORD_INPUT = 'REGISTER_CHANGE_PASSWORD_INPUT';
/* harmony export (immutable) */ __webpack_exports__["F"] = REGISTER_CHANGE_PASSWORD_INPUT;

const REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT = 'REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT';
/* harmony export (immutable) */ __webpack_exports__["G"] = REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT;


const REQUEST_REGISTER = 'REQUEST_REGISTER';
/* harmony export (immutable) */ __webpack_exports__["H"] = REQUEST_REGISTER;

const RECEIVE_REGISTER = 'RECEIVE_REGISTER';
/* harmony export (immutable) */ __webpack_exports__["I"] = RECEIVE_REGISTER;

const RECEIVE_REGISTER_ERROR = 'RECEIVE_REGISTER_ERROR';
/* harmony export (immutable) */ __webpack_exports__["J"] = RECEIVE_REGISTER_ERROR;


const RECEIVE_REGISTER_CLEAN = 'RECEIVE_REGISTER_CLEAN';
/* harmony export (immutable) */ __webpack_exports__["K"] = RECEIVE_REGISTER_CLEAN;

/*========= end registersActions   ===========*/

/*========= begin routesActions   ===========*/
const SET_BACK_HISTORY = 'SET_BACK_HISTORY';
/* harmony export (immutable) */ __webpack_exports__["q"] = SET_BACK_HISTORY;

const GO_BACK_HISTORY = 'GO_BACK_HISTORY';
/* harmony export (immutable) */ __webpack_exports__["r"] = GO_BACK_HISTORY;

const SHOW_HOME = 'SHOW_HOME';
/* harmony export (immutable) */ __webpack_exports__["s"] = SHOW_HOME;

const SHOW_LOGIN = 'SHOW_LOGIN';
/* harmony export (immutable) */ __webpack_exports__["t"] = SHOW_LOGIN;

/*========= end routesActions   ===========*/

/*========= begin productsActions ===========*/
const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
/* harmony export (immutable) */ __webpack_exports__["X"] = REQUEST_PRODUCTS;

const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
/* harmony export (immutable) */ __webpack_exports__["Y"] = RECEIVE_PRODUCTS;

const SHOW_POP_ADD_APP = 'SHOW_POP_ADD_APP';
/* harmony export (immutable) */ __webpack_exports__["Z"] = SHOW_POP_ADD_APP;

const CLOSE_POP_ADD_APP = 'CLOSE_POP_ADD_APP';
/* harmony export (immutable) */ __webpack_exports__["_0"] = CLOSE_POP_ADD_APP;

const POP_ADD_APP_INPUT = 'POP_ADD_APP_INPUT';
/* harmony export (immutable) */ __webpack_exports__["_1"] = POP_ADD_APP_INPUT;

const REQUEST_ADD_PRODUCTS = 'REQUEST_ADD_PRODUCTS';
/* harmony export (immutable) */ __webpack_exports__["_2"] = REQUEST_ADD_PRODUCTS;

const RECEIVE_ADD_PRODUCTS = 'RECEIVE_ADD_PRODUCTS';
/* harmony export (immutable) */ __webpack_exports__["_3"] = RECEIVE_ADD_PRODUCTS;

const REQUEST_PRODUCTS_DEPLOYMENTS = 'REQUEST_PRODUCTS_DEPLOYMENTS';
/* harmony export (immutable) */ __webpack_exports__["_4"] = REQUEST_PRODUCTS_DEPLOYMENTS;

const RECEIVE_PRODUCTS_DEPLOYMENTS = 'RECEIVE_PRODUCTS_DEPLOYMENTS';
/* harmony export (immutable) */ __webpack_exports__["_5"] = RECEIVE_PRODUCTS_DEPLOYMENTS;

/*========= end productsActions   ===========*/

/*========= begin msgStackActions ===========*/
const MSG_STACK_SHOW_MSG = 'MSG_STACK_SHOW_MSG';
/* harmony export (immutable) */ __webpack_exports__["o"] = MSG_STACK_SHOW_MSG;

const MSG_STACK_CLOSE_MSG = 'MSG_STACK_CLOSE_MSG';
/* harmony export (immutable) */ __webpack_exports__["p"] = MSG_STACK_CLOSE_MSG;

/*========= end msgStackActions   ===========*/

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(107);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(108);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(106);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["setBackHistory"] = setBackHistory;
/* harmony export (immutable) */ __webpack_exports__["goBackHistory"] = goBackHistory;
/* harmony export (immutable) */ __webpack_exports__["showHome"] = showHome;
/* harmony export (immutable) */ __webpack_exports__["showLogin"] = showLogin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(4);


function setBackHistory(history = "/") {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["q" /* SET_BACK_HISTORY */],
    payload: history
  };
}

function goBackHistory() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["r" /* GO_BACK_HISTORY */] };
}

function showHome() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["s" /* SHOW_HOME */] };
}

function showLogin() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["t" /* SHOW_LOGIN */] };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["fetchAuth"] = fetchAuth;
/* harmony export (immutable) */ __webpack_exports__["saveAuth"] = saveAuth;
/* harmony export (immutable) */ __webpack_exports__["deleteAuth"] = deleteAuth;
/* harmony export (immutable) */ __webpack_exports__["requestAccessKeys"] = requestAccessKeys;
/* harmony export (immutable) */ __webpack_exports__["receiveAccessKeys"] = receiveAccessKeys;
/* harmony export (immutable) */ __webpack_exports__["fetchAccessKeys"] = fetchAccessKeys;
/* harmony export (immutable) */ __webpack_exports__["requestRemoveAccessKey"] = requestRemoveAccessKey;
/* harmony export (immutable) */ __webpack_exports__["receiveRemoveAccessKey"] = receiveRemoveAccessKey;
/* harmony export (immutable) */ __webpack_exports__["reomveAccessKey"] = reomveAccessKey;
/* harmony export (immutable) */ __webpack_exports__["requestPatchAccessKey"] = requestPatchAccessKey;
/* harmony export (immutable) */ __webpack_exports__["receivePatchAccessKey"] = receivePatchAccessKey;
/* harmony export (immutable) */ __webpack_exports__["patchAccessKey"] = patchAccessKey;
/* harmony export (immutable) */ __webpack_exports__["requestCreateAccessKey"] = requestCreateAccessKey;
/* harmony export (immutable) */ __webpack_exports__["receiveCreateAccessKey"] = receiveCreateAccessKey;
/* harmony export (immutable) */ __webpack_exports__["createAccessKey"] = createAccessKey;
/* harmony export (immutable) */ __webpack_exports__["openPopShowKey"] = openPopShowKey;
/* harmony export (immutable) */ __webpack_exports__["closePopShowKey"] = closePopShowKey;
/* harmony export (immutable) */ __webpack_exports__["checkResponseAuth"] = checkResponseAuth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routesActions_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msgStackActions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_RestApi__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function requestAuth() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* REQUEST_AUTH */]
  };
}

function receiveAuth(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* RECEIVE_AUTH */],
    payload: data
  };
}

function fetchAuth(isLogin = false) {
  return dispatch => {
    dispatch(requestAuth());
    let auth = sessionStorage.getItem('auth');
    if (!__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isEmpty(auth)) {
      dispatch(receiveAuth(auth));
    } else {
      dispatch(receiveAuth(null));
      if (isLogin) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__routesActions_js__["showLogin"])());
      }
    }
  };
}

function saveAuth(auth) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* SAVE_AUTH */],
    payload: auth
  };
}

function deleteAuth() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["d" /* DELETE_AUTH */]
  };
}

function requestAccessKeys() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["e" /* REQUEST_ACCESS_KEYS */]
  };
}

function receiveAccessKeys(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["f" /* RECEIVE_ACCESS_KEYS */],
    payload: data
  };
}

function fetchAccessKeys() {
  return dispatch => {
    dispatch(requestAccessKeys());
    return __WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].getAccessKeys().then(data => {
      dispatch(receiveAccessKeys(data));
    });
  };
}

function requestRemoveAccessKey() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["g" /* REQUEST_REMOVE_ACCESS_KEY */]
  };
}

function receiveRemoveAccessKey(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["h" /* RECEIVE_REMOVE_ACCESS_KEY */],
    payload: data
  };
}

function reomveAccessKey(name) {
  return dispatch => {
    dispatch(requestRemoveAccessKey());
    return __WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].removeAccessKey(name).then(data => {
      if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'status') !== "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Failed to delete key: " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'errorMessage'), "danger"));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Deleted key: " + name, "success"));
      }
      dispatch(receiveRemoveAccessKey(data));
    });
  };
}

function requestPatchAccessKey() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["i" /* REQUEST_PATCH_ACCESS_KEY */]
  };
}

function receivePatchAccessKey(name, data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["j" /* RECEIVE_PATCH_ACCESS_KEY */],
    payload: _extends({ friendlyName: name }, data)
  };
}

function patchAccessKey(name, friendlyName = null, ttl = 0) {
  return dispatch => {
    dispatch(requestPatchAccessKey());
    return __WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].patchAccessKey(name, friendlyName, ttl).then(data => {
      if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'status') !== "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Changing key failed: " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'errorMessage'), "danger"));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Key modified: " + friendlyName, "success"));
      }
      dispatch(receivePatchAccessKey(name, data));
    }).catch(function (e) {
      console.log(e);
    });
  };
}

function requestCreateAccessKey() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["k" /* REQUEST_CREATE_ACCESS_KEY */]
  };
}

function receiveCreateAccessKey(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["l" /* RECEIVE_CREATE_ACCESS_KEY */],
    payload: data
  };
}

function createAccessKey() {
  return dispatch => {
    dispatch(requestCreateAccessKey());
    return __WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].createAccessKey().then(data => {
      if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'status') !== "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Fail to create key: " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'errorMessage'), "danger"));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Created key: " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'results.accessKey.friendlyName'), "success"));
      }
      dispatch(openPopShowKey(__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'results.accessKey.name')));
      dispatch(receiveCreateAccessKey(data));
    });
  };
}

function openPopShowKey(key) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["m" /* OPEN_POP_SHOW_KEY */],
    payload: key
  };
}

function closePopShowKey() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["n" /* CLOSE_POP_SHOW_KEY */]
  };
}

function checkResponseAuth(dispatch, data) {
  if (data.httpCode == 401) {
    dispatch(fetchAuth(true));
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["logout"] = logout;
/* harmony export (immutable) */ __webpack_exports__["loginChangeAccountInput"] = loginChangeAccountInput;
/* harmony export (immutable) */ __webpack_exports__["loginChangePasswordInput"] = loginChangePasswordInput;
/* harmony export (immutable) */ __webpack_exports__["fetchLogin"] = fetchLogin;
/* harmony export (immutable) */ __webpack_exports__["passwordChangeOldInput"] = passwordChangeOldInput;
/* harmony export (immutable) */ __webpack_exports__["passwordChangeNewInput"] = passwordChangeNewInput;
/* harmony export (immutable) */ __webpack_exports__["passwordChangeNewConfirmInput"] = passwordChangeNewConfirmInput;
/* harmony export (immutable) */ __webpack_exports__["modifyPassword"] = modifyPassword;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_RestApi__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__msgStackActions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);







function logout() {
  return dispatch => {
    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__authActions__["deleteAuth"])());
    return dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["L" /* USER_LOGOUT */] });
  };
}

function loginChangeAccountInput(account) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["M" /* LOGIN_CHANGE_ACCOUNT_INPUT */],
    payload: account
  };
}

function loginChangePasswordInput(password) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["N" /* LOGIN_CHANGE_PASSWORD_INPUT */],
    payload: password
  };
}

function requestLogin() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["O" /* REQUEST_LOGIN */]
  };
}

function receiveLogin(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["P" /* RECEIVE_LOGIN */],
    payload: data
  };
}

function receiveLoginError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["Q" /* RECEIVE_LOGIN_ERROR */],
    payload: error
  };
}

function fetchLogin(account, password) {
  return dispatch => {
    dispatch(requestLogin());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].login(account, password).then(data => {
      var auth = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(data, 'results.tokens');
      if (!__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isEmpty(auth)) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__authActions__["saveAuth"])(auth));
        dispatch(receiveLogin(data));
      } else {
        dispatch(receiveLoginError({ errorMessage: __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(data, 'errorMessage') }));
      }
    });
  };
}

function passwordChangeOldInput(oldPassword) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["R" /* PASSWORD_CHANGE_OLD_INPUT */],
    payload: oldPassword
  };
}

function passwordChangeNewInput(newPassword) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["S" /* PASSWORD_CHANGE_NEW_INPUT */],
    payload: newPassword
  };
}

function passwordChangeNewConfirmInput(newPasswordConfirm) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["T" /* PASSWORD_CHANGE_NEW_CONFIRM_INPUT */],
    payload: newPasswordConfirm
  };
}

function requestModifyPassword() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["U" /* REQUEST_MODIFY_PASSWORD */]
  };
}

function receiveModifyPassword(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["V" /* RECEIVE_MODIFY_PASSWORD */],
    payload: data
  };
}

function receiveModifyPasswordError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["W" /* RECEIVE_MODIFY_PASSWORD_ERROR */],
    payload: error
  };
}

function modifyPassword(oldPassword, newPassword) {
  return dispatch => {
    dispatch(requestModifyPassword());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].password(oldPassword, newPassword).then(data => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__authActions__["checkResponseAuth"])(dispatch, data);
      if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(data, 'status') == "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__authActions__["deleteAuth"])());
        dispatch(receiveModifyPassword(data));
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__routesActions__["showLogin"])());
      } else {
        dispatch(receiveModifyPasswordError({ message: __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(data, 'message') }));
      }
    });
  };
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick }),
      children
    );
  }
}

Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buffer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(26);
let instance = null;




const TIMEOUT = 10000;

class RestApi {
  constructor() {
    if (instance) return instance;
    instance = this;
    if (false) {
      this.baseURI = _.get(common, 'api.devURL', 'http://localhost:3000');
    } else {
      this.baseURI = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(__WEBPACK_IMPORTED_MODULE_2__config__["c" /* common */], 'api.URL', 'http://localhost:3000');
    }
    this.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    this.dealResponse = this.dealResponse.bind(this);
    this.jsonDecode = this.jsonDecode.bind(this);
    this.setAuthToken = this.setAuthToken.bind(this);
    this.deleteAuthToken = this.deleteAuthToken.bind(this);
  }

  setUUID(sessid, aQQGuid) {
    this.uuid = sessid;
    this.aQQGuid = aQQGuid;
  }

  getProducts() {
    return this.get('/apps').then(this.jsonDecode);
  }

  login(account, password) {
    return this.post('/auth/login', { account: account, password: password, minutes: 43200 }).then(this.jsonDecode);
  }

  getAccessKeys() {
    return this.get('/accessKeys').then(this.jsonDecode);
  }

  getDeployments(appName) {
    return this.get(`/apps/${appName}/deployments`).then(data => {
      if (data.httpCode == 200) {
        var rs = this.jsonDecode(data);
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
          return { status: "OK", httpCode: data.httpCode, results: rs };
        } else {
          return rs;
        }
      } else {
        return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
      }
    });
  }

  addProducts(appName, os, platform) {
    return this.post('/apps', { name: appName, os: os, platform: platform }).then(data => {
      if (data.httpCode == 200) {
        var rs = this.jsonDecode(data);
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
          return { status: "OK", httpCode: data.httpCode, results: rs };
        } else {
          return rs;
        }
      } else {
        return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
      }
    });
  }

  removeAccessKey(name) {
    return this.delete(`/accessKeys/${encodeURI(name)}`).then(data => {
      if (data.httpCode == 200) {
        var rs = this.jsonDecode(data);
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
          return { status: "OK", httpCode: data.httpCode, results: rs };
        } else {
          return rs;
        }
      } else {
        return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
      }
    });
  }

  patchAccessKey(name, friendlyName = null, ttl = 0) {
    return this.patch(`/accessKeys/${encodeURI(name)}`, { friendlyName, ttl }).then(data => {
      if (data.httpCode == 200) {
        var rs = this.jsonDecode(data);
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
          return { status: "OK", httpCode: data.httpCode, results: rs };
        } else {
          return rs;
        }
      } else {
        return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
      }
    });
  }

  createAccessKey() {
    var time = new Date().getTime();
    var friendlyName = `Login-${time}`;
    var ttl = 30 * 2 * 24 * 60 * 60 * 1000;
    var createdBy = friendlyName;
    var isSession = true;
    return this.post(`/accessKeys`, { friendlyName, ttl, createdBy, isSession }).then(data => {
      if (data.httpCode == 200) {
        var rs = this.jsonDecode(data);
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
          return { status: "OK", httpCode: data.httpCode, results: rs };
        } else {
          return rs;
        }
      } else {
        return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
      }
    });
  }

  checkEmailExists(email) {
    return this.get(`/users/exists?email=${encodeURI(email)}`).then(this.jsonDecode);
  }

  sendRegisterCode(email) {
    return this.post(`/users/registerCode`, { email }).then(this.jsonDecode);
  }

  checkRegisterCodeExists(email, code) {
    let query = `email=${encodeURI(email)}&token=${encodeURI(code)}`;
    return this.get(`/users/registerCode/exists?${query}`).then(this.jsonDecode);
  }

  register(email, password, token) {
    return this.post(`/users`, { email, password, token }).then(this.jsonDecode);
  }

  password(oldPassword, newPassword) {
    return this.patch(`/users/password`, { oldPassword, newPassword }).then(this.jsonDecode);
  }

  buildReadmeUrl() {
    return `${this.baseURI}/README.md`;
  }

  buildWebUsageUrl() {
    return `${this.baseURI}/WEB_USAGE.md`;
  }

  dealResponse(response) {
    var self = this;
    return response.text().then(text => {
      if (false) {
        console.log(self.headers);
        console.log(response.url);
        console.log(text);
      }
      return { httpCode: response.status, text: text };
    });
  }

  jsonDecode(response) {
    try {
      return JSON.parse(response.text);
    } catch (e) {
      return { status: 'ERROR', httpCode: response.httpCode, errorCode: 0, errorMessage: e.message, results: response.text };
    }
  }

  get(uri) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])(this.baseURI + uri, {
      method: 'GET',
      headers: this.headers,
      timeout: TIMEOUT
    }).then(this.dealResponse).catch(function (e) {
      return { httpCode: 0, text: '网络错误，请重试!' };
    });
  }

  post(uri, params = {}) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])(this.baseURI + uri, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(params),
      timeout: TIMEOUT
    }).then(this.dealResponse).catch(function (e) {
      return { httpCode: 0, text: '网络错误，请重试!' };
    });
  }

  patch(uri, params = {}) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])(this.baseURI + uri, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(params),
      timeout: TIMEOUT
    }).then(this.dealResponse).catch(function (e) {
      return { httpCode: 0, text: '网络错误，请重试!' };
    });
  }

  delete(uri, params = {}) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])(this.baseURI + uri, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify(params),
      timeout: TIMEOUT
    }).then(this.dealResponse).catch(function (e) {
      return { httpCode: 0, text: '网络错误，请重试!' };
    });
  }

  isAuth() {
    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(this.headers.Authorization) ? false : true;
  }

  getHeaders() {
    return this.headers;
  }

  deleteAuthToken() {
    delete this.headers.Authorization;
  }

  setAuthToken(creds) {
    if (typeof creds === 'string') {
      var index = creds.indexOf(':');
      if (index !== -1) {
        creds = [creds.substr(0, index), creds.substr(index + 1)];
      }
    }

    if (!Array.isArray(creds)) creds = [].slice.call(arguments);

    switch (creds.length) {
      case 0:
        creds = ['', ''];
        break;
      case 1:
        creds.push('');
        break;
      case 2:
        break;
      default:
        throw new Error('auth option can only have two keys `[user, pass]`');
    }

    if (typeof creds[0] !== 'string') throw new Error('auth option `user` must be a string');

    if (typeof creds[1] !== 'string') throw new Error('auth option `pass` must be a string');

    if (!creds[0] && !creds[1]) delete this.headers.Authorization;else this.headers.Authorization = 'Basic ' + new __WEBPACK_IMPORTED_MODULE_0_buffer___default.a.Buffer(creds.join(':')).toString('base64');

    return this;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (new RestApi());

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["addShowMsg"] = addShowMsg;
/* harmony export (immutable) */ __webpack_exports__["closeMsg"] = closeMsg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



function addShowMsg(text, type = "info", showTime = 10) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["o" /* MSG_STACK_SHOW_MSG */],
    payload: { text, type, showTime }
  };
}

function closeMsg(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["p" /* MSG_STACK_CLOSE_MSG */],
    payload: id
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_css__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layout_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function Layout(props) {
  return _jsx('div', {}, void 0, props.children);
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Layout_css___default.a)(Layout));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable max-len */

const port = process.env.PORT || 3001;
/* harmony export (immutable) */ __webpack_exports__["a"] = port;

// export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
const host = process.env.WEBSITE_HOSTNAME || 'https://appsync-server.nativescript.org';
/* harmony export (immutable) */ __webpack_exports__["d"] = host;


const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X
  }

};
/* harmony export (immutable) */ __webpack_exports__["b"] = analytics;


const common = {
  api: {
    URL: 'https://appsync-server.nativescript.org', // production code-push-server address
    devURL: 'https://appsync-server.nativescript.org' // development code-push-server address
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = common;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Footer__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MsgStackContainer__ = __webpack_require__(60);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_5__components_Footer__["a" /* default */], {});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_7__MsgStackContainer__["a" /* default */], {});

class LayoutContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    const { auth, actions } = this.props;
    return _jsx(__WEBPACK_IMPORTED_MODULE_6__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
      isAuth: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(auth, 'isAuth')
    }), this.props.children, _ref, _ref2);
  }
}

function mapStateToProps(state, ownProps) {
  return { 'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}) };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(LayoutContainer));

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requestProducts"] = requestProducts;
/* harmony export (immutable) */ __webpack_exports__["receiveProducts"] = receiveProducts;
/* harmony export (immutable) */ __webpack_exports__["getProducts"] = getProducts;
/* harmony export (immutable) */ __webpack_exports__["showPopAddApp"] = showPopAddApp;
/* harmony export (immutable) */ __webpack_exports__["closePopAddApp"] = closePopAddApp;
/* harmony export (immutable) */ __webpack_exports__["popAddAppInput"] = popAddAppInput;
/* harmony export (immutable) */ __webpack_exports__["requestAddProducts"] = requestAddProducts;
/* harmony export (immutable) */ __webpack_exports__["receiveAddProducts"] = receiveAddProducts;
/* harmony export (immutable) */ __webpack_exports__["addProducts"] = addProducts;
/* harmony export (immutable) */ __webpack_exports__["requestDeployments"] = requestDeployments;
/* harmony export (immutable) */ __webpack_exports__["receiveDeployments"] = receiveDeployments;
/* harmony export (immutable) */ __webpack_exports__["fetchDeployments"] = fetchDeployments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_RestApi__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__msgStackActions__ = __webpack_require__(14);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








function requestProducts() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["X" /* REQUEST_PRODUCTS */]
  };
}

function receiveProducts(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["Y" /* RECEIVE_PRODUCTS */],
    payload: data
  };
}

function getProducts() {
  return dispatch => {
    dispatch(requestProducts());
    return __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].getProducts().then(data => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__authActions__["checkResponseAuth"])(dispatch, data);
      dispatch(receiveProducts(data));
    });
  };
}

function showPopAddApp() {
  return { type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["Z" /* SHOW_POP_ADD_APP */] };
}

function closePopAddApp() {
  return { type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_0" /* CLOSE_POP_ADD_APP */] };
}

function popAddAppInput(params) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_1" /* POP_ADD_APP_INPUT */],
    payload: params
  };
}

function requestAddProducts() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_2" /* REQUEST_ADD_PRODUCTS */]
  };
}

function receiveAddProducts(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_3" /* RECEIVE_ADD_PRODUCTS */],
    payload: data
  };
}

function addProducts(appName, os, platform) {
  return dispatch => {
    dispatch(requestAddProducts());
    return __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].addProducts(appName, os, platform).then(data => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__authActions__["checkResponseAuth"])(dispatch, data);
      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(data, 'status') !== "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__msgStackActions__["addShowMsg"])("创建应用: " + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(data, 'errorMessage'), "danger"));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__msgStackActions__["addShowMsg"])("创建 " + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(data, 'results.app.name') + " 应用成功", "success"));
      }
      dispatch(receiveAddProducts(data));
      dispatch(getProducts());
    });
  };
}

function requestDeployments(appName) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_4" /* REQUEST_PRODUCTS_DEPLOYMENTS */],
    payload: appName
  };
}

function receiveDeployments(appName, data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_5" /* RECEIVE_PRODUCTS_DEPLOYMENTS */],
    payload: _extends({ appName }, data)
  };
}

function fetchDeployments(appName) {
  return dispatch => {
    dispatch(requestDeployments(appName));
    return __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].getDeployments(appName).then(data => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__authActions__["checkResponseAuth"])(dispatch, data);
      dispatch(receiveDeployments(appName, data));
    });
  };
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(12);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






function Footer() {
  return _jsx('footer', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.container
  }, void 0, _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.text
  }, void 0, '\xA9 NativeScript AppSync'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
  }, void 0, '\xB7'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
    to: '/'
  }, void 0, 'Home'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
  }, void 0, '\xB7'), _jsx('a', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
    target: '_blank',
    href: 'https://github.com/EddyVerbruggen/nativescript-app-sync-server/issues/new'
  }, void 0, 'Report an issue')));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Navigation__ = __webpack_require__(46);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx('span', {}, void 0, 'NativeScript AppSync');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Toggle, {});

class Header extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  render() {
    return _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"], {
      style: { fontWeight: 400 },
      inverse: true,
      collapseOnSelect: true
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Header, {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Brand, {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.brand,
      to: '/'
    }, void 0, _ref)), _ref2), __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(this.props, 'noNav') !== true ? _jsx(__WEBPACK_IMPORTED_MODULE_6__Navigation__["a" /* default */], {
      isAuth: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(this.props, 'isAuth')
    }) : null);
  }
}

Header.defaultProps = {
  isAuth: false,
  noNav: false
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Header_css___default.a)(Header));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const createBrowserHistory = __webpack_require__(114).createBrowserHistory;

// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && createBrowserHistory());

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployments", function() { return deployments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appDetails", function() { return appDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_productsActions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






const apps = {

  path: '/apps',

  action({ store }) {
    return _asyncToGenerator(function* () {
      if (false) {
        setTimeout(function () {
          store.dispatch(getProducts());
        }, 100);
      }
      const ProductListContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(63).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: 'Manage apps',
        chunk: 'apps',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */], {}, void 0, _jsx(ProductListContainer, {}))
      };
    })();
  }

};

const deployments = {
  path: '/apps/:appName/:deploymentName',

  action({ store, params }) {
    return _asyncToGenerator(function* () {
      if (false) {
        // setTimeout(() => {
        //   store.dispatch(getProducts());
        // }, 100);
      }
      var appName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(params, 'appName');
      var deploymentName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(params, 'deploymentName');
      const DeploymentContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(57).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: `${deploymentName} ${appName}`,
        chunk: 'deployment',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */], {}, void 0, _jsx(DeploymentContainer, {
          appName: appName,
          deploymentName: deploymentName
        }))
      };
    })();
  }
};

const appDetails = {
  path: '/apps/:appName',

  action({ store, params }) {
    return _asyncToGenerator(function* () {
      var appName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(params, 'appName');
      if (false) {
        setTimeout(function () {
          store.dispatch(fetchDeployments(appName));
        }, 100);
      }
      const ProductContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(62).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: `${appName} 详情`,
        chunk: 'product',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */], {}, void 0, _jsx(ProductContainer, {
          appName: appName
        }))
      };
    })();
  }
};



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ChangePassword__ = __webpack_require__(38);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











class ChangePasswordContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentDidMount() {
    if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
      let path = location.pathname;
      if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(location.search)) {
        path += `?${location.search}`;
      }
      this.props.actions.setBackHistory(path);
      this.props.actions.fetchAuth(true);
    }
  }

  render() {
    const { password, actions } = this.props;
    let oldPassword = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'oldPassword');
    let newPassword = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'newPassword');
    return _jsx(__WEBPACK_IMPORTED_MODULE_7__components_ChangePassword__["a" /* default */], {
      isFetching: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'isFetching'),
      oldPassword: oldPassword,
      oldPasswordInputChange: actions.passwordChangeOldInput,
      newPassword: newPassword,
      newPasswordInputChange: actions.passwordChangeNewInput,
      newPasswordConfirm: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'newPasswordConfirm'),
      newPasswordConfirmInputChange: actions.passwordChangeNewConfirmInput,
      submit: () => actions.modifyPassword(oldPassword, newPassword),
      error: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'error')
    });
  }
}

function mapStateToProps(state, ownProps) {
  return { password: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'password') };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Home__ = __webpack_require__(41);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_5__components_Home__["a" /* default */], {
  html: '<h1>NativeScript AppSync service</h1>\n' + '<p>After <a href="./login">logging in</a>, you can...</p>\n' + '<h4><a href="./accessKeys">go here to get an access key</a></h4>\n' + '<h4><a href="./apps">or go here to manage your apps</a></h4>\n' + '<h1>Enjoy! 🚀</h1>'
});

class HomeContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return _ref;
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_4__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(HomeContainer));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localFetch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(16);
/* unused harmony reexport Request */
/* unused harmony reexport Headers */
/* unused harmony reexport Response */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





__WEBPACK_IMPORTED_MODULE_1_node_fetch___default.a.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;
__WEBPACK_IMPORTED_MODULE_1_node_fetch__["Response"].Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${__WEBPACK_IMPORTED_MODULE_2__config__["d" /* host */]}${url}`;
}

function localFetch(url, options) {
  return __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(localUrl(url), options);
}



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_LogoutContainer__ = __webpack_require__(59);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





const login = {
  path: '/login',

  action({ store }) {
    return _asyncToGenerator(function* () {
      if (false) {}
      const LoginContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(58).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: 'Log in',
        chunk: 'login',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {}, void 0, _jsx(LoginContainer, {}))
      };
    })();
  }

};

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2__containers_LogoutContainer__["a" /* default */], {}));

const logout = {

  path: '/logout',

  action() {
    return _asyncToGenerator(function* () {
      return {
        title: 'Log out',
        component: _ref
      };
    })();
  }
};



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__ = __webpack_require__(17);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




const users = {

  path: '/users',

  action({ store }) {
    return _asyncToGenerator(function* () {
      if (false) {}
      const ChangePasswordContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(24).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: 'Change password',
        chunk: 'changePassword',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */], {}, void 0, _jsx(ChangePasswordContainer, {}))
      };
    })();
  }

};

const settings = {

  path: '/users/settings',

  action({ store }) {
    return _asyncToGenerator(function* () {
      if (false) {}
      const ChangePasswordContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(24).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: 'Change password',
        chunk: 'changePassword',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */], {}, void 0, _jsx(ChangePasswordContainer, {}))
      };
    })();
  }

};



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(91);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_universal_router__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pretty_error__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_App__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Html__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_error_ErrorPage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage_css__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_json__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_configureStore__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_configureStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__store_configureStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config__ = __webpack_require__(16);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */














 // eslint-disable-line import/no-unresolved



const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

if (false) {
  app.enable('trust proxy');
}

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      const store = __WEBPACK_IMPORTED_MODULE_14__store_configureStore___default()({}, { cookie: req.headers.cookie });

      const css = new Set();

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        // Initialize a new Redux store
        // http://redux.js.org/docs/basics/UsageWithReact.html
        store
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_6_universal_router___default.a.resolve(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* default */], _extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);
      data.children = __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_8__components_App___default.a, {
        context: context
      }, void 0, route.component));
      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_13__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_13__assets_json___default.a.client.js];
      data.state = context.store.getState();
      if (__WEBPACK_IMPORTED_MODULE_13__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_13__assets_json___default.a[route.chunk].js);
      }

      const html = __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Html__["a" /* default */], data));
      res.status(route.status || 200);
      res.send(`<!doctype html>${html}`);
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_7_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default.a.renderToStaticMarkup(_jsx(__WEBPACK_IMPORTED_MODULE_9__components_Html__["a" /* default */], {
    title: 'Internal Server Error',
    description: err.message,
    styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage_css___default.a._getCss() }]
  }, void 0, __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_10__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], {
    error: err
  }))));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
app.listen(__WEBPACK_IMPORTED_MODULE_15__config__["a" /* port */], () => {
  console.log(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_15__config__["a" /* port */]}/`);
});
/* eslint-enable no-console */

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerChangeEmailInput"] = registerChangeEmailInput;
/* harmony export (immutable) */ __webpack_exports__["registerCheckEmail"] = registerCheckEmail;
/* harmony export (immutable) */ __webpack_exports__["registerChangeValidateCodeInput"] = registerChangeValidateCodeInput;
/* harmony export (immutable) */ __webpack_exports__["registerSendValidateCode"] = registerSendValidateCode;
/* harmony export (immutable) */ __webpack_exports__["registerCheckCodeExists"] = registerCheckCodeExists;
/* harmony export (immutable) */ __webpack_exports__["registerChangePasswordInput"] = registerChangePasswordInput;
/* harmony export (immutable) */ __webpack_exports__["registerChangePasswordConfirmInput"] = registerChangePasswordConfirmInput;
/* harmony export (immutable) */ __webpack_exports__["register"] = register;
/* harmony export (immutable) */ __webpack_exports__["registerClean"] = registerClean;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_RestApi__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);




function registerChangeEmailInput(email) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["u" /* REGISTER_CHANGE_EMAIL_INPUT */],
    payload: email
  };
}

function requestRegisterCheckEmail() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["v" /* REQUEST_REGISTER_CHECK_EMAIL */]
  };
}

function receiveRegisterCheckEmail(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["w" /* RECEIVE_REGISTER_CHECK_EMAIL */],
    payload: data
  };
}

function receiveRegisterCheckEmailError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["x" /* RECEIVE_REGISTER_CHECK_EMAIL_ERROR */],
    payload: error
  };
}

function registerCheckEmail(email) {
  return dispatch => {
    dispatch(requestRegisterCheckEmail());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].checkEmailExists(email).then(data => {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') == "OK" && __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'exists') == false) {
        dispatch(receiveRegisterCheckEmail(data));
      } else {
        var message = `${email} already exists`;
        if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') != "OK") {
          message = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'message');
        }
        dispatch(receiveRegisterCheckEmailError({ message: message }));
      }
    });
  };
}

function registerChangeValidateCodeInput(validateCode) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["y" /* REGISTER_CHANGE_VALIDATE_CODE_INPUT */],
    payload: validateCode
  };
}

function requestRegisterSendValidateCode() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["z" /* REQUEST_REGISTER_SEND_VALIDATE_CODE */]
  };
}

function receiveRegisterSendValidateCode(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["A" /* RECEIVE_REGISTER_SEND_VALIDATE_CODE */],
    payload: data
  };
}

function receiveRegisterSendValidateCodeError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["B" /* RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR */],
    payload: error
  };
}

function registerSendValidateCode(email) {
  return dispatch => {
    dispatch(requestRegisterSendValidateCode());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].sendRegisterCode(email).then(data => {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') == "OK") {
        dispatch(receiveRegisterSendValidateCode(data));
      } else {
        var message = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'message');
        dispatch(receiveRegisterSendValidateCodeError({ message: message }));
      }
    });
  };
}

function requestRegisterCheckCodeExists() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["C" /* REQUEST_REGISTER_CHECK_CODE_EXISTS */]
  };
}

function receiveRegisterCheckCodeExists(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["D" /* RECEIVE_REGISTER_CHECK_CODE_EXISTS */],
    payload: data
  };
}

function receiveRegisterCheckCodeExistsError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["E" /* RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR */],
    payload: error
  };
}

function registerCheckCodeExists(email, validateCode) {
  return dispatch => {
    dispatch(requestRegisterCheckCodeExists());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].checkRegisterCodeExists(email, validateCode).then(data => {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') == "OK") {
        dispatch(receiveRegisterCheckCodeExists(data));
      } else {
        var message = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'message');
        dispatch(receiveRegisterCheckCodeExistsError({ message: message }));
      }
    });
  };
}

function registerChangePasswordInput(password) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["F" /* REGISTER_CHANGE_PASSWORD_INPUT */],
    payload: password
  };
}

function registerChangePasswordConfirmInput(passwordConfirm) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["G" /* REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT */],
    payload: passwordConfirm
  };
}

function requestRegister() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["H" /* REQUEST_REGISTER */]
  };
}

function receiveRegister(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["I" /* RECEIVE_REGISTER */],
    payload: data
  };
}

function receiveRegisterError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["J" /* RECEIVE_REGISTER_ERROR */],
    payload: error
  };
}

function register(email, password, validateCode) {
  return dispatch => {
    dispatch(requestRegister());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].register(email, password, validateCode).then(data => {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') == "OK") {
        dispatch(receiveRegister(data));
      } else {
        var message = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'message');
        dispatch(receiveRegisterError({ message: message }));
      }
    });
  };
}

function registerClean() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["K" /* RECEIVE_REGISTER_CLEAN */] };
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AccessKeys_css__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AccessKeys_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__AccessKeys_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Link__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MyEditor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PopShowKey__ = __webpack_require__(35);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"].Item, {
  active: true
}, void 0, 'Your access keys:'));

class AccessKeys extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData, index) {
    const self = this;
    const moment = __webpack_require__(124);
    return _jsx('tr', {}, __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'id'), _jsx('td', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_7__MyEditor__["a" /* default */], {
      saveData: str => {
        if (!__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.eq(str, __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'friendlyName'))) {
          self.props.patchKey(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'friendlyName'), str);
        }
      },
      value: __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'friendlyName')
    })), _jsx('td', {}, void 0, __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'createdBy')), _jsx('td', {}, void 0, __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'isSession') ? 'session' : 'accessKey'), _jsx('td', {}, void 0, moment(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'createdTime')).fromNow()), _jsx('td', {}, void 0, moment(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'expires')).fromNow()), _jsx('td', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], {
      onClick: () => {
        self.props.removeKey(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(rowData, 'friendlyName'));
      },
      bsStyle: 'danger'
    }, void 0, 'Delete')));
  }

  render() {
    const self = this;
    let tipText = 'No data';
    if (this.props.isFetching) {
      tipText = 'Loading data...';
    }
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__AccessKeys_css___default.a.root
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__PopShowKey__["a" /* default */], {
      showModal: this.props.isShowKey,
      value: this.props.token,
      close: this.props.close
    }), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__AccessKeys_css___default.a.container
    }, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
      style: { marginBottom: '20px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], {
      onClick: () => {
        self.props.createKey();
      },
      bsStyle: 'primary',
      disabled: !!this.props.isCreating
    }, void 0, 'Create key')), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Table"], {
      striped: true,
      bordered: true,
      condensed: true,
      hover: true,
      responsive: true
    }, void 0, _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Name'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Creator'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Type'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Created'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Expiration'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Actions'))), _jsx('tbody', {}, void 0, this.props.rs.length > 0 ? __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.map(this.props.rs, (item, index) => self.renderRow(item, index)) : _jsx('tr', {}, void 0, _jsx('td', {
      colSpan: '6'
    }, void 0, tipText))))));
  }
}
AccessKeys.defaultProps = {
  isFetching: true,
  rs: [],
  removeKey: name => {},
  patchKey: (name, friendlyName = null, ttl = 0) => {},
  isCreating: false,
  createKey: () => {},
  isShowKey: false,
  close: () => {},
  token: ''
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__AccessKeys_css___default.a)(AccessKeys));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Header, {
  closeButton: true
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Title, {}, void 0, 'Key created successfully'));

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["HelpBlock"], {}, void 0, 'Copy the above key, then close me');

class PopShowKey extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  close() {
    this.props.close();
  }

  render() {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"], {
      show: this.props.showModal,
      onHide: this.close
    }, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Body, {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {
      validationState: 'success'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], {
      value: this.props.value,
      onFocus: event => {
        event.target.select();
      },
      onClick: event => {
        event.target.select();
      },
      onMouseOver: event => {
        event.target.select();
      },
      readOnly: true,
      type: 'text'
    }), _ref2)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Footer, {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], {
      onClick: this.close
    }, void 0, 'Close')));
  }
}
PopShowKey.defaultProps = {
  value: '',
  showModal: false,
  close: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (PopShowKey);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_RestApi__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(10);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
  }).isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  getChildContext() {
    return this.props.context;
  }

  componentDidMount() {
    let aQQGuid = localStorage.getItem('aQQ_guid');
    if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(aQQGuid) || aQQGuid.length < 10) {
      aQQGuid = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v1();
      localStorage.setItem('aQQ_guid', aQQGuid);
    }
    let sessid = sessionStorage.getItem('sessid');
    if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(sessid) || sessid.length < 10) {
      sessid = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v1();
      sessionStorage.setItem('sessid', sessid);
    }
    __WEBPACK_IMPORTED_MODULE_4__network_RestApi__["a" /* default */].setUUID(sessid, aQQGuid);
    this.props.context.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_authActions__["fetchAuth"])());
  }

  render() {
    const store = this.props.context.store;
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], {
      store: store
    }, void 0, _jsx('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children)));
  }

}

App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

if (false) {
  module.exports = require('./App.dev');
} else {
  module.exports = __webpack_require__(36);
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ControlLabel"], {}, void 0, 'Old password');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ControlLabel"], {}, void 0, 'New password');

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ControlLabel"], {}, void 0, 'Confirm new password');

class ChangePassword extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.state = { field1: false, field2: false, field3: false };
    this.setOldPassword = this.setOldPassword.bind(this);
    this.setNewPassword = this.setNewPassword.bind(this);
    this.setNewPasswordConfirm = this.setNewPasswordConfirm.bind(this);
  }

  setOldPassword(event) {
    this.props.oldPasswordInputChange(event.target.value);
  }

  setNewPassword(event) {
    this.props.newPasswordInputChange(event.target.value);
  }

  setNewPasswordConfirm(event) {
    this.props.newPasswordConfirmInputChange(event.target.value);
  }

  render() {
    const self = this;
    let isValidate = true;
    let oldPasswordTips = '';
    if (!this.props.oldPassword) {
      isValidate = false;
      oldPasswordTips = 'Old password';
    }
    let newPasswordTips = '';
    let newPasswordConfirmTips = '';
    if (this.props.newPassword.length < 6) {
      newPasswordTips = 'Please enter 6 to 22 characters';
    }
    if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.eq(this.props.newPassword, this.props.newPasswordConfirm)) {
      isValidate = false;
      newPasswordConfirmTips = 'These passwords do not match';
    }
    var disabled = true;
    if (!this.props.isFetching && isValidate) {
      disabled = false;
    }
    return _jsx('div', {
      style: { height: 650, paddingLeft: 20, paddingRight: 20 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Panel"], {
      header: 'Change password',
      style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Form"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], {
      onChange: this.setOldPassword,
      type: 'password',
      value: this.props.oldPassword,
      placeholder: 'Old password',
      onBlur: () => this.setState({ field1: true }),
      autoFocus: true
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {}, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, this.state.field1 ? oldPasswordTips : null)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {}, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], {
      onChange: this.setNewPassword,
      type: 'password',
      value: this.props.newPassword,
      placeholder: 'New password',
      onBlur: () => this.setState({ field2: true })
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {}, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, this.state.field2 ? newPasswordTips : null)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {}, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], {
      onChange: this.setNewPasswordConfirm,
      type: 'password',
      value: this.props.newPasswordConfirm,
      placeholder: 'Repeat the new password',
      onBlur: () => this.setState({ field3: true })
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {}, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, this.state.field3 ? newPasswordConfirmTips : null)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {
      style: { paddingTop: 20 }
    }, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(this.props, 'error.message'))), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], {
      style: { width: "100%" },
      bsStyle: 'primary',
      disabled: disabled,
      onClick: () => {
        if (disabled) {
          return;
        }
        self.props.submit();
      }
    }, void 0, 'Confirm')))));
  }
}
ChangePassword.defaultProps = {
  isFetching: false,
  oldPassword: '',
  oldPasswordInputChange: oldPassword => {},
  newPassword: '',
  newPasswordInputChange: newPassword => {},
  newPasswordConfirm: '',
  newPasswordConfirmInputChange: newPasswordConfirm => {},
  submit: () => {},
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (ChangePassword);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



class Countdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    Countdown.retryTimes = 0;
    this.state = { leftTime: 0 };
    this.leftTimeCount = this.leftTimeCount.bind(this);
    this.leftTimeSplite = this.leftTimeSplite.bind(this);
  }

  componentDidMount() {
    this.leftTimeCount(this.props.leftTime);
  }

  leftTimeCount(time) {
    this.setState({ leftTime: time });
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      if (this.state.leftTime <= 0 && this.timer) {
        Countdown.retryTimes += 1;
        this.props.timeoutCb && this.props.timeoutCb();
        clearInterval(this.timer);
      } else {
        this.setState({ leftTime: this.state.leftTime - this.props.second });
      }
    }, this.props.second * 1000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  componentWillReceiveProps(props) {
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.eq(this.props.leftTime, props.leftTime)) {
      this.leftTimeCount(props.leftTime);
    }
  }

  render() {
    if (this.state.leftTime <= 0) {
      return this.props.renderRetryFunc(Countdown.retryTimes);
    }

    return this.props.renderFunc(this.leftTimeSplite(this.state.leftTime, this.props.level));
  }

  leftTimeSplite(leftTime, showLevel = 4) {
    var day = 0,
        hour = 0,
        minute = 0,
        second = 0; //时间默认值
    if (leftTime > 0) {
      if (showLevel >= 4) {
        day = Math.floor(leftTime / (60 * 60 * 24));
      }
      if (showLevel >= 3) {
        hour = Math.floor(leftTime / (60 * 60)) - day * 24;
      }
      if (showLevel >= 2) {
        minute = Math.floor(leftTime / 60) - day * 24 * 60 - hour * 60;
      }
      second = Math.floor(leftTime) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
    }
    return { day, hour, minute, second };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Countdown;

Countdown.retryTimes = 0;
Countdown.defaultProps = {
  leftTime: 0,
  timeoutCb: () => {},
  renderFunc: () => {},
  renderRetryFunc: retryTimes => {},
  level: 1,
  second: 1
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Deployment_css__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Deployment_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Deployment_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Link__ = __webpack_require__(12);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"].Item, {
  active: true
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */], {
  to: '/apps'
}, void 0, 'Apps'));

var _ref2 = _jsx('tbody', {}, void 0);

class Deployment extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
  }

  render() {
    const self = this;
    const tipText = 'No data';
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__Deployment_css___default.a.root
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__Deployment_css___default.a.container
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"].Item, {
      active: true
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */], {
      to: `/apps/${this.props.appName}`
    }, void 0, this.props.appName)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"].Item, {
      active: true
    }, void 0, this.props.deploymentName)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Table"], {
      striped: true,
      bordered: true,
      condensed: true,
      hover: true,
      responsive: true
    }, void 0, _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'AppVersion'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'PackageInfo'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Install Metrics'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Actions'))), _ref2)));
  }
}
Deployment.defaultProps = {
  appName: '',
  deploymentName: ''
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Deployment_css___default.a)(Deployment));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Home_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





class Home extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.root
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.container
    }, void 0, _jsx('div', {
      dangerouslySetInnerHTML: { __html: this.props.html || '' }
    })));
  }
}
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Home_css___default.a)(Home));

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(16);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var _ref = _jsx('meta', {
  charSet: 'utf-8'
});

var _ref2 = _jsx('meta', {
  httpEquiv: 'x-ua-compatible',
  content: 'ie=edge'
});

var _ref3 = _jsx('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
});

var _ref4 = _jsx('link', {
  rel: 'apple-touch-icon',
  href: 'apple-touch-icon.png'
});

var _ref5 = _jsx('link', {
  rel: 'stylesheet',
  href: '/css/bootstrap.min.css'
});

var _ref6 = _jsx('script', {
  src: 'https://www.google-analytics.com/analytics.js',
  async: true,
  defer: true
});

function Html(props) {
  const { title, description, styles, scripts, state, children } = props;
  return _jsx('html', {
    className: 'no-js',
    lang: 'en'
  }, void 0, _jsx('head', {}, void 0, _ref, _ref2, _jsx('title', {}, void 0, title), _jsx('meta', {
    name: 'description',
    content: description
  }), _ref3, _ref4, _ref5, styles.map(style => _jsx('style', {
    id: style.id,
    dangerouslySetInnerHTML: { __html: style.cssText }
  }, style.id))), _jsx('body', {
    style: { minHeight: '100%' }
  }, void 0, _jsx('div', {
    id: 'app',
    dangerouslySetInnerHTML: { __html: children }
  }), state && _jsx('script', {
    dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` }
  }), scripts.map(script => _jsx('script', {
    src: script
  }, script)), __WEBPACK_IMPORTED_MODULE_2__config__["b" /* analytics */].google.trackingId && _jsx('script', {
    dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${__WEBPACK_IMPORTED_MODULE_2__config__["b" /* analytics */].google.trackingId}','auto');ga('send','pageview')` }
  }), __WEBPACK_IMPORTED_MODULE_2__config__["b" /* analytics */].google.trackingId && _ref6));
}

Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null
};


/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(12);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {}, void 0, 'Email address');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {}, void 0, 'Password');

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  to: '/register'
}, void 0, 'Register');

class Login extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor() {
    super();
    this.setInputAccount = this.setInputAccount.bind(this);
    this.setInputPassword = this.setInputPassword.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit() {
    if (this.props.isFetching) {
      return;
    }
    this.props.submit();
  }

  setInputAccount(event) {
    this.props.accountInputChange(event.target.value);
  }

  setInputPassword(event) {
    this.props.passwordInputChange(event.target.value);
  }

  render() {
    return _jsx('div', {
      style: { height: 650, paddingLeft: 20, paddingRight: 20 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Panel"], {
      header: 'Log in',
      style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Form"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
      onChange: this.setInputAccount,
      value: this.props.account,
      type: 'email',
      placeholder: 'Email address',
      autoFocus: true
    })), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
      onChange: this.setInputPassword,
      value: this.props.password,
      type: 'password',
      placeholder: 'Password'
    })), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
      style: { paddingTop: 20 }
    }, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'error.errorMessage'))), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], {
      style: { width: "100%" },
      bsStyle: 'primary',
      onClick: this.submit,
      disabled: this.props.isFetching
    }, void 0, this.props.isFetching ? 'Logging in...' : 'Log in')), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
      style: { paddingTop: 28 }
    }, void 0, _jsx('span', {
      style: { marginRight: 20 }
    }, void 0, 'No account yet?'), _ref3))));
  }
}
Login.defaultProps = {
  isFetching: false,
  account: '',
  accountInputChange: account => {},
  password: '',
  passwordInputChange: password => {},
  submit: (account, password) => {},
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





class MsgStack extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  checkItemsInterval() {
    const self = this;
    if (this.props.items && this.props.items.length > 0) {
      if (this.intervalId) {
        return;
      }
      this.intervalId = setInterval(function () {
        var time = parseInt(new Date().getTime() / 1000);
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(self.props.items, function (item) {
          if (parseInt(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(item, 'time')) + parseInt(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(item, 'showTime')) < time) {
            self.props.close(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(item, 'id'));
          }
        });
      }, 1000);
    } else {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  constructor() {
    super();
    this.intervalId = null;
    this.checkItemsInterval = this.checkItemsInterval.bind(this);
  }

  componentDidMount() {
    setTimeout(this.checkItemsInterval, 200);
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(this.checkItemsInterval, 200);
  }

  render() {
    const self = this;
    return _jsx('div', {}, void 0, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(self.props.items, function (item) {
      var bsStyle = "info";
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.indexOf(["info", "warning", "danger", "success"], item.type) !== -1) {
        bsStyle = item.type;
      }
      return _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Alert"], {
        style: { marginTop: -15 },
        bsStyle: bsStyle,
        onDismiss: () => {
          self.props.close(item.id);
        }
      }, item.id, item.text);
    }));
  }
}

MsgStack.defaultProps = {
  items: [],
  close: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (MsgStack);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





class MyEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);
    this.state = { editorState: __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].createWithContent(__WEBPACK_IMPORTED_MODULE_1_draft_js__["ContentState"].createFromText(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(props, 'value', ''))) };
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(this.props, 'value') != __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(newProps, 'value')) {
      var editorState = __WEBPACK_IMPORTED_MODULE_1_draft_js__["EditorState"].createWithContent(__WEBPACK_IMPORTED_MODULE_1_draft_js__["ContentState"].createFromText(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(newProps, 'value', '')));
      this.setState({ editorState });
    }
  }

  saveData() {
    var str = this.state.editorState.getCurrentContent().getPlainText();
    this.props.saveData(str);
  }

  handleKeyCommand(command) {
    if (command == 'split-block') {
      //saving
      this.saveData();
      return true;
    }
    return false;
  }
  render() {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_draft_js__["Editor"], {
      editorState: this.state.editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange,
      onBlur: this.saveData
    });
  }
}
MyEditor.defaultProps = {
  value: '',
  saveData: str => {}
};
/* harmony default export */ __webpack_exports__["a"] = (MyEditor);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(22);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"], {
  eventKey: 4,
  href: '#'
}, void 0, 'Log in');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"], {
  eventKey: 5,
  href: '#'
}, void 0, 'Register');

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavDropdown"], {
  eventKey: 3,
  title: 'Settings',
  id: 'basic-nav-dropdown'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], {
  eventKey: 3.1
}, void 0, 'Change password'), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], {
  divider: true
}), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], {
  eventKey: 3.2
}, void 0, 'Log out'));

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"], {
  eventKey: 1,
  href: '#'
}, void 0, 'Manage apps');

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"], {
  eventKey: 2,
  href: '#'
}, void 0, 'Access keys');

class Navigation extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    if (selectedKey === 1) {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/apps');
    } else if (selectedKey === 2) {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/accessKeys');
    } else if (selectedKey === 3.1) {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/users/settings');
    } else if (selectedKey === 3.2) {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/logout');
    } else if (selectedKey === 4) {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/login');
    } else if (selectedKey === 5) {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/register');
    }
  }

  render() {
    let loginView = _ref;
    let registerView = _ref2;
    let personNav = _ref3;
    return _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"].Collapse, {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Nav"], {
      onSelect: this.handleSelect
    }, void 0, _ref4, _ref5), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Nav"], {
      onSelect: this.handleSelect,
      pullRight: true
    }, void 0, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'isAuth') === true ? personNav : null, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'isAuth') !== true ? loginView : null, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'isAuth') !== true ? registerView : null));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





const popoverFocus = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Popover"], {
  id: 'popover-trigger-focus'
}, void 0, '\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u548C\u6570\u5B57');

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Header, {
  closeButton: true
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Title, {}, void 0, 'Add app'));

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ControlLabel"], {}, void 0, 'App name');

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"].Feedback, {});

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ControlLabel"], {}, void 0, 'Platform');

var _ref5 = _jsx('option', {
  value: ''
}, void 0, 'Select platform');

var _ref6 = _jsx('option', {
  value: 'iOS'
}, void 0, 'iOS');

var _ref7 = _jsx('option', {
  value: 'Android'
}, void 0, 'Android');

var _ref8 = _jsx('option', {
  value: 'Windows'
}, void 0, 'Windows');

var _ref9 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ControlLabel"], {}, void 0, 'App framework');

var _ref10 = _jsx('option', {
  value: ''
}, void 0, 'Select app framework');

var _ref11 = _jsx('option', {
  value: 'React-Native'
}, void 0, 'React-Native');

var _ref12 = _jsx('option', {
  value: 'Cordova'
}, void 0, 'Cordova');

var _ref13 = _jsx('option', {
  value: 'NativeScript'
}, void 0, 'NativeScript \uD83D\uDE0E');

class PopAddApp extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.close = this.close.bind(this);
    this.setName = this.setName.bind(this);
    this.validateName = this.validateName.bind(this);
    this.setSelect = this.setSelect.bind(this);
    this.setPlatformSelect = this.setPlatformSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setPlatformSelect(event) {
    let select = event.target.value;
    this.props.input({ platform: select });
  }

  setSelect(event) {
    let select = event.target.value;
    this.props.input({ os: select });
  }

  setName(event) {
    let name = event.target.value;
    this.props.input({ appName: name });
  }

  validateName(name) {
    const REGEX = /^\w+$/;
    if (REGEX.test(name)) {
      this.setState({ isShowNameError: false });
    } else {
      this.setState({ isShowNameError: true });
    }
  }

  onSubmit() {
    if (this.props.isOnSubmiting) {
      return;
    }
    this.props.onSubmit();
  }

  close() {
    this.props.close();
  }

  render() {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"], {
      show: this.props.showModal,
      onHide: this.close
    }, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Body, {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {
      style: { display: 'inline-block', width: '40%' },
      validationState: this.props.isShowNameError ? `error` : null
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["OverlayTrigger"], {
      trigger: ["hover"],
      placement: 'bottom',
      overlay: popoverFocus
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], {
      type: 'text',
      onChange: this.setName,
      value: this.props.appName,
      autoFocus: true
    })), _ref3), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {
      style: { display: 'inline-block', width: '20%', paddingLeft: 15 },
      validationState: this.props.isShowOSError ? `error` : null
    }, void 0, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], {
      componentClass: 'select',
      value: this.props.os,
      onChange: this.setSelect
    }, void 0, _ref5, _ref6, _ref7, _ref8)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {
      style: { display: 'inline-block', width: '20%', paddingLeft: 15 },
      validationState: this.props.isShowPlatformError ? `error` : null
    }, void 0, _ref9, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], {
      componentClass: 'select',
      value: this.props.platform,
      onChange: this.setPlatformSelect
    }, void 0, _ref10, _ref11, _ref12, _ref13)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {
      validationState: 'error'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["HelpBlock"], {}, void 0, this.props.errorTip))), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Footer, {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], {
      onClick: this.close
    }, void 0, 'Close'), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], {
      onClick: this.onSubmit,
      disabled: this.props.isOnSubmiting ? true : false
    }, void 0, 'Save')));
  }
}
PopAddApp.defaultProps = {
  onSubmit: name => {},
  isOnSubmiting: false,
  close: () => {},
  input: () => {},
  errorTip: '',
  showModal: false,
  isShowNameError: false,
  isShowOSError: false,
  isShowPlatformError: false,
  os: '',
  platform: '',
  appName: ''
};
/* harmony default export */ __webpack_exports__["a"] = (PopAddApp);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Product_css__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Product_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Product_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Link__ = __webpack_require__(12);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"].Item, {
  active: true
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */], {
  to: '/apps'
}, void 0, 'Apps'));

var _ref2 = _jsx('td', {});

var _ref3 = _jsx('td', {});

var _ref4 = _jsx('td', {});

var _ref5 = _jsx('td', {});

class Product extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    const self = this;
    const tipText = 'No data';
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__Product_css___default.a.root
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__Product_css___default.a.container
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"].Item, {
      active: true
    }, void 0, this.props.appName)), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Table"], {
      striped: true,
      bordered: true,
      condensed: true,
      hover: true,
      responsive: true
    }, void 0, _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Deployments'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'DeploymentKey'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Description'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Update Metadata'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Install Metrics'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Actions'))), _jsx('tbody', {}, void 0, this.props.items.length > 0 ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(this.props.items, (item, index) => self.renderRow(item, index)) : _jsx('tr', {}, void 0, _jsx('td', {
      colSpan: '6'
    }, void 0, tipText))))));
  }

  renderRow(rowData, index) {
    const deployName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'name');
    return _jsx('tr', {}, index, _jsx('td', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */], {
      to: `/apps/${this.props.appName}/${deployName}`
    }, void 0, deployName)), _jsx('td', {
      style: { textAlign: 'left' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'key')), _ref2, _ref3, _ref4, _ref5);
  }
}
Product.defaultProps = {
  appName: '',
  items: []
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Product_css___default.a)(Product));

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProductList_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ProductList_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Link__ = __webpack_require__(12);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx('td', {});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Breadcrumb"].Item, {
  active: true
}, void 0, 'Apps'));

class ProductList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }
  renderRow(rowData, index) {
    const appName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'name');
    return _jsx('tr', {}, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'name'), _jsx('td', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */], {
      to: `/apps/${appName}`
    }, void 0, appName)), _jsx('td', {
      style: { textAlign: 'left' }
    }, void 0, _jsx('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'collaborators'), (item, email) => _jsx('li', {}, email, email, _jsx('span', {
      className: __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.permission
    }, void 0, '(', _jsx('em', {}, void 0, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(item, 'permission')), ')'), __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(item, 'isCurrentAccount') ? _jsx('span', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.label, __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.labelSuccess)
    }, void 0, 'it\'s you') : null)))), _jsx('td', {}, void 0, _jsx('ul', {}, void 0, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'deployments'), (item, email) => _jsx('li', {
      style: item === 'Production' ? { color: 'green' } : null
    }, email, _jsx(__WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */], {
      to: `/apps/${appName}/${item}`
    }, void 0, item))))), _ref);
  }

  render() {
    const self = this;
    const tipText = 'No data';
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.root
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.container
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
      style: { marginBottom: '20px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], {
      onClick: this.props.popAddApp,
      bsStyle: 'primary'
    }, void 0, 'Add an app')), _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Table"], {
      striped: true,
      bordered: true,
      condensed: true,
      hover: true,
      responsive: true
    }, void 0, _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Name'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Member'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Deployments'), _jsx('th', {
      style: { textAlign: 'center' }
    }, void 0, 'Actions'))), _jsx('tbody', {}, void 0, this.props.rs.length > 0 ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(this.props.rs, (item, index) => self.renderRow(item, index)) : _jsx('tr', {}, void 0, _jsx('td', {
      colSpan: '4'
    }, void 0, tipText))))));
  }
}
ProductList.defaultProps = {
  isFetching: true,
  rs: [],
  popAddApp: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a)(ProductList));

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavStep_css__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavStep_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NavStep_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







class NavStep extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  render() {
    let self = this;
    let navArr = [{ key: 1, text: 'Provide your email' }, { key: 2, text: 'Verify email' }, { key: 3, text: 'Set password' }, { key: 4, text: '🚀' }];
    return _jsx('ul', {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_2__NavStep_css___default.a.progress, __WEBPACK_IMPORTED_MODULE_2__NavStep_css___default.a.clearfix)
    }, void 0, __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(navArr, function (item, index) {
      return _jsx('li', {
        className: self.props.step == __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(item, 'key') ? __WEBPACK_IMPORTED_MODULE_2__NavStep_css___default.a.current : null
      }, index, _jsx('i', {}, void 0, __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(item, 'key')), _jsx('span', {}, void 0, __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(item, 'text')), _jsx('em', {}, void 0, _jsx('img', {
        src: __webpack_require__(93)
      })));
    }));
  }
}

NavStep.defaultProps = {
  step: 1
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NavStep_css___default.a)(NavStep));

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Register_css__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Register_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Register_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavStep__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StepOne__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StepTwo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__StepThree__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__StepDone__ = __webpack_require__(52);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_8__StepDone__["a" /* default */], {});

class Register extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  componentWillUnmount() {
    this.props.registerClean();
  }

  render() {
    var stepView = null;
    let step = this.props.step;
    if (step == 1) {
      stepView = _jsx(__WEBPACK_IMPORTED_MODULE_5__StepOne__["a" /* default */], {
        isChecking: this.props.isSubmitStepOne,
        email: this.props.email,
        emailInputChange: this.props.emailInputChange,
        submit: this.props.submitStepOne,
        error: this.props.error
      });
    } else if (step == 2) {
      stepView = _jsx(__WEBPACK_IMPORTED_MODULE_6__StepTwo__["a" /* default */], {
        isChecking: this.props.isSubmitStepTwo,
        validateCode: this.props.validateCode,
        validateCodeInputChange: this.props.validateCodeInputChange,
        isSending: this.props.isSending,
        lastSendTime: this.props.lastSendTime,
        sendValidateCode: this.props.sendValidateCode,
        submit: this.props.submitStepTwo,
        error: this.props.error
      });
    } else if (step == 3) {
      stepView = _jsx(__WEBPACK_IMPORTED_MODULE_7__StepThree__["a" /* default */], {
        isFetching: this.props.isSubmitStepThree,
        password: this.props.password,
        passwordInputChange: this.props.passwordInputChange,
        passwordConfirm: this.props.passwordConfirm,
        passwordConfirmInputChange: this.props.passwordConfirmInputChange,
        submit: this.props.submitStepThree,
        error: this.props.error
      });
    } else if (step == 4) {
      stepView = _ref;
    }
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Register_css___default.a.root
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Register_css___default.a.container
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__NavStep__["a" /* default */], {
      step: step
    }), stepView));
  }
}
Register.defaultProps = {
  step: 1,
  registerClean: () => {},
  email: '',
  emailInputChange: email => {},
  isSubmitStepOne: false,
  submitStepOne: () => {},

  validateCode: '',
  isSending: false,
  lastSendTime: 0,
  sendValidateCode: () => {},
  validateCodeInputChange: validateCode => {},
  isSubmitStepTwo: false,
  submitStepTwo: () => {},

  isSubmitStepThree: false,
  password: '',
  passwordInputChange: password => {},
  passwordConfirm: '',
  passwordConfirmInputChange: passwordConfirm => {},
  submitStepThree: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Register_css___default.a)(Register));

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(12);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('div', {}, void 0, _jsx('span', {}, void 0, 'Congrats! You have successfully registered \uD83D\uDE0A'), _jsx(__WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */], {
  to: '/login',
  style: 'font-weight: bold'
}, void 0, 'Log in'));

function StepDone() {
  return _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Form"], {
    style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], {
    style: { textAlign: 'center' }
  }, void 0, _ref));
}
/* harmony default export */ __webpack_exports__["a"] = (StepDone);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(12);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["ControlLabel"], {}, void 0, 'Email address');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
  to: '/login'
}, void 0, 'Existing account');

var _ref3 = _jsx('a', {
  href: 'https://github.com/EddyVerbruggen/nativescript-app-sync-web/blob/master/EULA.pdf',
  target: '_blank'
}, void 0, 'EULA');

class StepOne extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.setInputEmail = this.setInputEmail.bind(this);
  }

  setInputEmail(event) {
    this.props.emailInputChange(event.target.value);
  }
  render() {
    const self = this;
    var emailIsValidate = __WEBPACK_IMPORTED_MODULE_2_validator___default.a.isEmail(this.props.email);
    var disabled = true;
    if (!this.props.isChecking && emailIsValidate) {
      disabled = false;
    }
    return _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Form"], {
      style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"], {
      onChange: this.setInputEmail,
      value: this.props.email,
      type: 'email',
      placeholder: 'Email address',
      autoComplete: 'off',
      autoFocus: true
    })), _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], {
      style: { paddingTop: 20 }
    }, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'error.message'))), _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], {
      style: { width: "100%" },
      bsStyle: 'primary',
      onClick: () => {
        if (disabled) {
          return;
        }
        self.props.submit();
      },
      disabled: disabled
    }, void 0, 'Next step')), _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], {
      style: { paddingTop: 28, textAlign: 'center' }
    }, void 0, _ref2), _jsx(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], {}, void 0, _jsx('label', {
      style: { fontWeight: 300 }
    }, void 0, 'This service is in BETA. By registering for this service, you agree with its ', _ref3, '.')));
  }
}
StepOne.defaultProps = {
  isChecking: false,
  email: '',
  emailInputChange: email => {},
  submit: () => {},
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (StepOne);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {}, void 0, 'Password');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {}, void 0, 'Confirm password');

class StepThree extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super();
    this.state = { field1: false, field2: false };
    this.setInputPassword = this.setInputPassword.bind(this);
    this.setInputPasswordConfirm = this.setInputPasswordConfirm.bind(this);
  }

  setInputPassword(event) {
    this.setState({ field1: true });
    this.props.passwordInputChange(event.target.value);
  }

  setInputPasswordConfirm(event) {
    this.setState({ field2: true });
    this.props.passwordConfirmInputChange(event.target.value);
  }

  render() {
    const self = this;
    let passwordTips = '';
    let passwordConfirmTips = '';
    if (this.state.field1 && this.props.password.length < 6) {
      passwordTips = 'Must be at least 6 characters';
    }
    if (this.state.field2 && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.eq(this.props.passwordConfirm, this.props.password)) {
      passwordConfirmTips = 'Make sure those passwords are the same';
    }
    let isValidate = false;
    if (this.props.password.length >= 6 && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.eq(this.props.passwordConfirm, this.props.password)) {
      isValidate = true;
    }
    var disabled = true;
    if (!this.props.isFetching && isValidate) {
      disabled = false;
    }
    return _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Form"], {
      style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
      onChange: this.setInputPassword,
      onBlur: () => this.setState({ field1: true }),
      value: this.props.password,
      type: 'password',
      placeholder: 'Password',
      autoComplete: 'off',
      autoFocus: true
    })), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, passwordTips)), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
      onChange: this.setInputPasswordConfirm,
      onBlur: () => this.setState({ field2: true }),
      type: 'password',
      value: this.props.passwordConfirm,
      placeholder: 'Repeat your password',
      autoComplete: 'off'
    })), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, passwordConfirmTips)), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
      style: { paddingTop: 20 }
    }, void 0, _jsx('div', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'error.message'))), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], {
      style: { width: "100%" },
      bsStyle: 'primary',
      onClick: () => {
        if (disabled) {
          return;
        }
        self.props.submit();
      },
      disabled: disabled
    }, void 0, 'Register')));
  }
}
StepThree.defaultProps = {
  isFetching: false,
  password: '',
  passwordInputChange: password => {},
  passwordConfirm: '',
  passwordConfirmInputChange: passwordConfirm => {},
  submit: () => {},
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (StepThree);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Countdown__ = __webpack_require__(39);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], {
  disabled: true
}, void 0, '\u53D1\u9001\u4E2D');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Alert"], {
  bsStyle: 'warning'
}, void 0, 'Check your verification code (make sure to check your SPAM folder!)'));

class StepTwo extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  componentDidMount() {
    if (120 - (parseInt(new Date().getTime() / 1000) - this.props.lastSendTime) <= 0) {
      this.props.sendValidateCode();
    }
  }

  constructor() {
    super();
    this.setInputValidateCode = this.setInputValidateCode.bind(this);
  }

  setInputValidateCode(event) {
    this.props.validateCodeInputChange(event.target.value);
  }

  render() {
    const self = this;
    let leftTime = 120 - (parseInt(new Date().getTime() / 1000) - this.props.lastSendTime);
    let isValidate = this.props.validateCode ? true : false;
    var disabled = true;
    if (!this.props.isChecking && isValidate) {
      disabled = false;
    }
    let countDownView = _jsx(__WEBPACK_IMPORTED_MODULE_3__Countdown__["a" /* default */], {
      leftTime: leftTime < 0 ? 0 : leftTime,
      renderFunc: ({ second }) => {
        return _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], {
          disabled: true
        }, void 0, second);
      },
      renderRetryFunc: times => {
        let sendText = 'Send email';
        if (times > 0) {
          sendText = 'Resend';
        }
        if (self.props.isSending) {
          return _ref;
        }
        return _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], {
          onClick: () => {
            if (!self.props.isSending) {
              self.props.sendValidateCode();
            }
          }
        }, void 0, sendText);
      }
    });
    return _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Form"], {
      style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
      sm: 8,
      style: { marginBottom: 10 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
      onChange: this.setInputValidateCode,
      value: this.props.validateCode,
      type: 'text',
      placeholder: 'Enter the verification code',
      autoComplete: 'off',
      autoFocus: true
    })), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
      sm: 4,
      style: { marginBottom: 10 }
    }, void 0, countDownView)), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
      style: { paddingTop: 20 }
    }, void 0, _jsx('div', {
      style: { color: 'red', paddingLeft: 15 }
    }, void 0, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'error.message'))), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
      style: { textAlign: "center", paddingTop: 20 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], {
      style: { width: "100%" },
      bsStyle: 'primary',
      onClick: () => {
        if (disabled) {
          return;
        }
        self.props.submit();
      },
      disabled: disabled
    }, void 0, 'Next step')));
  }
}
StepTwo.defaultProps = {
  isChecking: false,
  validateCode: '',
  validateCodeInputChange: code => {},
  isSending: false,
  lastSendTime: 0,
  sendValidateCode: () => {},
  submit: () => {},
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (StepTwo);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_AccessKeys__ = __webpack_require__(34);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











class AccessKeysContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentDidMount() {
    if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
      let path = location.pathname;
      if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(location.search)) {
        path += `?${location.search}`;
      }
      this.props.actions.setBackHistory(path);
      this.props.actions.fetchAuth(true);
    }
  }
  render() {
    const { accessKeys, actions } = this.props;
    return _jsx(__WEBPACK_IMPORTED_MODULE_7__components_AccessKeys__["a" /* default */], {
      isFetching: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(accessKeys, 'isFetching'),
      rs: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(accessKeys, 'rs'),
      removeKey: actions.reomveAccessKey,
      patchKey: actions.patchAccessKey,
      isCreating: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(accessKeys, 'isCreating'),
      createKey: actions.createAccessKey,
      isShowKey: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(accessKeys, 'showKey.isOpen'),
      close: actions.closePopShowKey,
      token: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(accessKeys, 'showKey.token')
    });
  }
}

function mapStateToProps(state, ownProps) {
  return { 'accessKeys': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'accessKeys', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(AccessKeysContainer));

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Deployment__ = __webpack_require__(40);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











class DeploymentContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  componentDidMount() {
    if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
      let path = location.pathname;
      if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(location.search)) {
        path += `?${location.search}`;
      }
      this.props.actions.setBackHistory(path);
      this.props.actions.fetchAuth(true);
    }
  }
  render() {
    const { appName, deploymentName, actions } = this.props;
    return _jsx(__WEBPACK_IMPORTED_MODULE_7__components_Deployment__["a" /* default */], {
      appName: appName,
      deploymentName: deploymentName
    });
  }
}

DeploymentContainer.defaultProps = {
  appName: '',
  deploymentName: ''
};
function mapStateToProps(state, ownProps) {
  return {
    'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}),
    'products': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'products', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(DeploymentContainer));

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Footer__ = __webpack_require__(20);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();












var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], {});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_8__components_Footer__["a" /* default */], {});

class LoginContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentWillReceiveProps(newProps) {
    if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth') != __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(newProps, 'auth.isAuth') && __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(newProps, 'auth.isAuth')) {
      this.props.actions.goBackHistory();
    }
  }

  componentDidMount() {
    if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
      this.props.actions.goBackHistory();
    }
  }

  render() {
    const { login, actions } = this.props;
    return _jsx('div', {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_6__components_Login__["a" /* default */], {
      isFetching: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'isFetching'),
      account: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'account'),
      password: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'password'),
      accountInputChange: actions.loginChangeAccountInput,
      passwordInputChange: actions.loginChangePasswordInput,
      submit: () => actions.fetchLogin(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'account'), __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'password')),
      error: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'error')
    }), _ref2);
  }
}

function mapStateToProps(state, ownProps) {
  return { 'login': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'login', {}), 'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(LoginContainer));

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_routesActions__ = __webpack_require__(9);








class LogoutContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentDidMount() {
    if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
      this.props.actions.logout();
    }
    this.props.actions.showHome();
  }
  render() {
    return null;
  }
}

function mapStateToProps(state, ownProps) {
  return { 'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(LogoutContainer));

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MsgStack__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_msgStackActions__ = __webpack_require__(14);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









class MsgStackContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    const { msgStack, actions } = this.props;
    return _jsx('div', {
      style: { position: 'fixed', top: 80, right: 20, minWidth: 100, maxWidth: 300 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__components_MsgStack__["a" /* default */], {
      items: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(msgStack, 'rs', []),
      close: id => {
        actions.closeMsg(id);
      }
    }));
  }
}

function mapStateToProps(state, ownProps) {
  return { 'msgStack': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'msgStack', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__actions_msgStackActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(MsgStackContainer));

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_productsActions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_PopAddApp__ = __webpack_require__(47);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };












class PopAddAppContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  componentDidMount() {
    if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
      let path = location.pathname;
      if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(location.search)) {
        path += `?${location.search}`;
      }
      this.props.actions.setBackHistory(path);
      this.props.actions.fetchAuth(true);
    }
  }
  render() {
    const { addProducts, actions } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_PopAddApp__["a" /* default */], _extends({}, addProducts, {
      input: actions.popAddAppInput,
      close: actions.closePopAddApp,
      onSubmit: () => {
        var appName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(addProducts, 'appName');
        var os = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(addProducts, 'os');
        var platform = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(addProducts, 'platform');
        actions.addProducts(appName, os, platform);
      }
    }));
  }
}

PopAddAppContainer.defaultProps = {
  appName: ''
};
function mapStateToProps(state, ownProps) {
  return {
    'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}),
    'addProducts': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'addProducts', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__, __WEBPACK_IMPORTED_MODULE_7__actions_productsActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(PopAddAppContainer));

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Product__ = __webpack_require__(48);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











class ProductContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  componentDidMount() {
    if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
      let path = location.pathname;
      if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(location.search)) {
        path += `?${location.search}`;
      }
      this.props.actions.setBackHistory(path);
      this.props.actions.fetchAuth(true);
    }
  }
  render() {
    const { deployments, appName, actions } = this.props;
    return _jsx(__WEBPACK_IMPORTED_MODULE_7__components_Product__["a" /* default */], {
      appName: appName,
      items: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(deployments, `rs.${appName}`)
    });
  }
}

ProductContainer.defaultProps = {
  appName: ''
};
function mapStateToProps(state, ownProps) {
  return {
    'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}),
    'deployments': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'deployments', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProductContainer));

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_productsActions__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ProductList__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PopAddAppContainer__ = __webpack_require__(61);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();













var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_9__PopAddAppContainer__["a" /* default */], {});

class ProductListContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentDidMount() {
    if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
      let path = location.pathname;
      if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(location.search)) {
        path += `?${location.search}`;
      }
      this.props.actions.setBackHistory(path);
      this.props.actions.fetchAuth(true);
    }
  }
  render() {
    const { products, actions } = this.props;
    return _jsx('div', {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_8__components_ProductList__["a" /* default */], {
      isFetching: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(products, 'isFetching'),
      rs: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(products, 'rs'),
      popAddApp: actions.showPopAddApp
    }));
  }
}

function mapStateToProps(state, ownProps) {
  return {
    'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}),
    'products': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'products', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__, __WEBPACK_IMPORTED_MODULE_7__actions_productsActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProductListContainer));

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_registersActions__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Register__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Header__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Footer__ = __webpack_require__(20);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_6__components_Header__["a" /* default */], {});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_7__components_Footer__["a" /* default */], {});

class RegisterContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    const { register, actions } = this.props;
    let email = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'email');
    let validateCode = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'validateCode');
    return _jsx('div', {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_5__components_Register__["a" /* default */], {
      step: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'step', 1),
      registerClean: actions.registerClean,
      email: email,
      emailInputChange: actions.registerChangeEmailInput,
      isSubmitStepOne: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'isCheckingEmail'),
      submitStepOne: () => actions.registerCheckEmail(email),
      error: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'error'),
      isSending: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'isSending'),
      lastSendTime: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'lastSendTime', 0),
      sendValidateCode: () => actions.registerSendValidateCode(email),
      validateCode: validateCode,
      validateCodeInputChange: actions.registerChangeValidateCodeInput,
      isSubmitStepTwo: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'isSubmitStepTwo'),
      submitStepTwo: () => actions.registerCheckCodeExists(email, validateCode),
      isSubmitStepThree: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'isSubmitStepThree'),
      password: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'password'),
      passwordInputChange: actions.registerChangePasswordInput,
      passwordConfirm: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'passwordConfirm'),
      passwordConfirmInputChange: actions.registerChangePasswordConfirmInput,
      submitStepThree: () => actions.register(email, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'password'), validateCode)
    }), _ref2);
  }
}

function mapStateToProps(state, ownProps) {
  return { 'register': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'register', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_registersActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(RegisterContainer));

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auth;
/* harmony export (immutable) */ __webpack_exports__["b"] = accessKeys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_RestApi__ = __webpack_require__(13);




function auth(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["a" /* REQUEST_AUTH */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["b" /* RECEIVE_AUTH */]:
      var isAuth = false;
      var auth = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload');
      if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(auth)) {
        isAuth = true;
        __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].setAuthToken(['auth', auth]);
      }
      return Object.assign({}, state, {
        token: auth,
        isFetching: false,
        isAuth: isAuth
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["c" /* SAVE_AUTH */]:
      var auth = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload');
      __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].setAuthToken(['auth', auth]);
      sessionStorage.setItem('auth', auth);
      return Object.assign({}, state, { token: auth, isAuth: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["d" /* DELETE_AUTH */]:
      __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].deleteAuthToken();
      sessionStorage.removeItem('auth');
      return Object.assign({}, state, { token: null, isAuth: false });

    default:
      return state;
  }
}

function accessKeys(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["e" /* REQUEST_ACCESS_KEYS */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["f" /* RECEIVE_ACCESS_KEYS */]:
      return Object.assign({}, state, {
        isFetching: false,
        rs: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.accessKeys')
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["g" /* REQUEST_REMOVE_ACCESS_KEY */]:
      return Object.assign({}, state, { isRemoving: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["h" /* RECEIVE_REMOVE_ACCESS_KEY */]:
      var friendlyName = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.friendlyName');
      var data = Object.assign({}, state);
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.remove(data.rs, function (row) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(row, 'friendlyName') == friendlyName;
      });
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(data, 'isRemoving', false);
      return data;
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["i" /* REQUEST_PATCH_ACCESS_KEY */]:
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["j" /* RECEIVE_PATCH_ACCESS_KEY */]:
      var friendlyName = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.friendlyName');
      var data = Object.assign({}, state);
      var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(data.rs, function (row) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(row, 'friendlyName') == friendlyName;
      });
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.accessKey')) {
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(data, `rs.${index}`, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.accessKey'));
      }
      return data;

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["k" /* REQUEST_CREATE_ACCESS_KEY */]:
      return Object.assign({}, state, { isCreating: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["l" /* RECEIVE_CREATE_ACCESS_KEY */]:
      var data = Object.assign({}, state);
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.accessKey')) {
        data.rs.unshift(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.accessKey'));
      }
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(data, 'isCreating', false);
      return data;

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["m" /* OPEN_POP_SHOW_KEY */]:
      var isOpen = false;
      var token = '';
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload')) {
        isOpen = true;
        token = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload');
      }
      return Object.assign({}, state, { showKey: { isOpen, token } });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["n" /* CLOSE_POP_SHOW_KEY */]:
      return Object.assign({}, state, { showKey: { isOpen: false, token: '' } });

    default:
      return state;
  }
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registers__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__msgStack__ = __webpack_require__(67);










const appReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  users: __WEBPACK_IMPORTED_MODULE_3__users__["a" /* users */],
  password: __WEBPACK_IMPORTED_MODULE_3__users__["b" /* password */],
  login: __WEBPACK_IMPORTED_MODULE_3__users__["c" /* login */],
  register: __WEBPACK_IMPORTED_MODULE_4__registers__["a" /* register */],
  auth: __WEBPACK_IMPORTED_MODULE_5__auth__["a" /* auth */],
  accessKeys: __WEBPACK_IMPORTED_MODULE_5__auth__["b" /* accessKeys */],
  routes: __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routes */],
  products: __WEBPACK_IMPORTED_MODULE_7__products__["a" /* products */],
  addProducts: __WEBPACK_IMPORTED_MODULE_7__products__["b" /* addProducts */],
  deployments: __WEBPACK_IMPORTED_MODULE_7__products__["c" /* deployments */],
  msgStack: __WEBPACK_IMPORTED_MODULE_8__msgStack__["a" /* msgStack */]
});

const rootReducer = (state, action) => {
  if (action.type === __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["L" /* USER_LOGOUT */]) {
    let data = Object.assign({}, state);
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'auth', {});
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'users', {});
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'password', {});
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'products', {});
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'accessKeys', {});
    return appReducer(data, action);
  }
  return appReducer(state, action);
};

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = msgStack;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_RestApi__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);





function msgStack(state = { rs: [] }, action) {
  let payload = action.payload;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["o" /* MSG_STACK_SHOW_MSG */]:
      var id = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v4();
      var data = Object.assign({}, state);
      var msg = {
        id,
        type: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(payload, 'type'),
        text: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(payload, 'text'),
        showTime: parseInt(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(payload, 'showTime')),
        time: parseInt(new Date().getTime() / 1000)
      };
      var rs = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'rs', []);
      rs.unshift(msg);
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(data, 'rs', rs);
      return data;

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["p" /* MSG_STACK_CLOSE_MSG */]:
      var id = payload;
      var data = Object.assign({}, state);
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.remove(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'rs', []), item => {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(item, 'id') === id;
      });
      return data;

    default:
      return state;
  }
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = products;
/* harmony export (immutable) */ __webpack_exports__["c"] = deployments;
/* harmony export (immutable) */ __webpack_exports__["b"] = addProducts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(4);




function products(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["X" /* REQUEST_PRODUCTS */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["Y" /* RECEIVE_PRODUCTS */]:
      return Object.assign({}, state, {
        isFetching: false,
        rs: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload.apps')
      });

    default:
      return state;
  }
}

function deployments(state = { rs: {} }, action) {
  let payload = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload');
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_4" /* REQUEST_PRODUCTS_DEPLOYMENTS */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_5" /* RECEIVE_PRODUCTS_DEPLOYMENTS */]:
      var data = Object.assign({}, state, { isFetching: false });
      var appName = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'appName');
      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(data, `rs.${appName}`, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'results.deployments'));
      return data;

    default:
      return state;
  }
}

function addProducts(state = {}, action) {
  let payload = action.payload;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["Z" /* SHOW_POP_ADD_APP */]:
      return { showModal: true };

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_0" /* CLOSE_POP_ADD_APP */]:
      return Object.assign({}, state, { showModal: false });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_1" /* POP_ADD_APP_INPUT */]:
      var appName = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'appName');
      var os = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'os');
      var platform = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'platform');
      if (appName !== undefined) {
        const REGEX = /^\w+$/;
        if (REGEX.test(appName)) {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowNameError', false);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowNameError', true);
        }
      }
      if (os !== undefined) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.indexOf(['iOS', 'Android', 'Windows'], os) !== -1) {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowOSError', false);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowOSError', true);
        }
      }
      if (platform !== undefined) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.indexOf(['React-Native', 'Cordova', 'NativeScript'], platform) !== -1) {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowPlatformError', false);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowPlatformError', true);
        }
      }
      return Object.assign({}, state, payload);

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_2" /* REQUEST_ADD_PRODUCTS */]:
      return Object.assign({}, state, { isOnSubmiting: true });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_3" /* RECEIVE_ADD_PRODUCTS */]:
      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'status') == 'OK') {
        return { isOnSubmiting: false };
      } else {
        return Object.assign({}, state, { isOnSubmiting: false, errorTip: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'errorMessage') });
      }

    default:
      return state;
  }
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



function register(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["u" /* REGISTER_CHANGE_EMAIL_INPUT */]:
      return Object.assign({}, state, { email: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["v" /* REQUEST_REGISTER_CHECK_EMAIL */]:
      return Object.assign({}, state, { isCheckingEmail: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["w" /* RECEIVE_REGISTER_CHECK_EMAIL */]:
      return Object.assign({}, state, { isCheckingEmail: false, step: 2, error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["x" /* RECEIVE_REGISTER_CHECK_EMAIL_ERROR */]:
      return Object.assign({}, state, { isCheckingEmail: false, error: action.payload });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["y" /* REGISTER_CHANGE_VALIDATE_CODE_INPUT */]:
      return Object.assign({}, state, { validateCode: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["z" /* REQUEST_REGISTER_SEND_VALIDATE_CODE */]:
      return Object.assign({}, state, { isSending: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["A" /* RECEIVE_REGISTER_SEND_VALIDATE_CODE */]:
      var lastSendTime = parseInt(new Date().getTime() / 1000);
      return Object.assign({}, state, {
        isSending: false,
        lastSendTime: lastSendTime,
        validateCode: '',
        error: null
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["B" /* RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR */]:
      return Object.assign({}, state, { isSending: false, error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["C" /* REQUEST_REGISTER_CHECK_CODE_EXISTS */]:
      return Object.assign({}, state, { isSubmitStepTwo: true, error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["D" /* RECEIVE_REGISTER_CHECK_CODE_EXISTS */]:
      return Object.assign({}, state, { isSubmitStepTwo: false, step: 3, error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["E" /* RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR */]:
      return Object.assign({}, state, { isSubmitStepTwo: false, error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["F" /* REGISTER_CHANGE_PASSWORD_INPUT */]:
      return Object.assign({}, state, { password: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["G" /* REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT */]:
      return Object.assign({}, state, { passwordConfirm: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["H" /* REQUEST_REGISTER */]:
      return Object.assign({}, state, { isSubmitStepThree: true, error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["I" /* RECEIVE_REGISTER */]:
      return Object.assign({}, state, {
        isSubmitStepThree: false,
        step: 4,
        password: '',
        passwordConfirm: '',
        error: null
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["J" /* RECEIVE_REGISTER_ERROR */]:
      return Object.assign({}, state, { isSubmitStepThree: false, error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["K" /* RECEIVE_REGISTER_CLEAN */]:
      return {};

    default:
      return state;
  }
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(22);




function routes(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["r" /* GO_BACK_HISTORY */]:
      var historyUri = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, 'history', '/');
      __WEBPACK_IMPORTED_MODULE_2__core_history__["a" /* default */].replace(historyUri);
      return Object.assign({}, state, { history: '/' });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["q" /* SET_BACK_HISTORY */]:
      return Object.assign({}, state, { history: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["s" /* SHOW_HOME */]:
      __WEBPACK_IMPORTED_MODULE_2__core_history__["a" /* default */].replace('/');
      return state;

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["t" /* SHOW_LOGIN */]:
      __WEBPACK_IMPORTED_MODULE_2__core_history__["a" /* default */].replace('/login');
      return state;

    default:
      return state;
  }
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = users;
/* harmony export (immutable) */ __webpack_exports__["c"] = login;
/* harmony export (immutable) */ __webpack_exports__["b"] = password;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function users(state = {}, action) {
  switch (action.type) {

    default:
      return state;
  }
}

function login(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["M" /* LOGIN_CHANGE_ACCOUNT_INPUT */]:
      return Object.assign({}, state, { account: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["N" /* LOGIN_CHANGE_PASSWORD_INPUT */]:
      return Object.assign({}, state, { password: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["O" /* REQUEST_LOGIN */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["P" /* RECEIVE_LOGIN */]:
      return Object.assign({}, state, {
        isFetching: false,
        password: '',
        error: null
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["Q" /* RECEIVE_LOGIN_ERROR */]:
      return Object.assign({}, state, {
        isFetching: false,
        error: _extends({}, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'))
      });
    default:
      return state;
  }
}

function password(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["R" /* PASSWORD_CHANGE_OLD_INPUT */]:
      return Object.assign({}, state, { oldPassword: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["S" /* PASSWORD_CHANGE_NEW_INPUT */]:
      return Object.assign({}, state, { newPassword: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["T" /* PASSWORD_CHANGE_NEW_CONFIRM_INPUT */]:
      return Object.assign({}, state, { newPasswordConfirm: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["U" /* REQUEST_MODIFY_PASSWORD */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["V" /* RECEIVE_MODIFY_PASSWORD */]:
      return { isFetching: false };

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["W" /* RECEIVE_MODIFY_PASSWORD_ERROR */]:
      return Object.assign({}, state, { isFetching: false, error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    default:
      return state;
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_authActions__ = __webpack_require__(10);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/accessKeys',

  action({ store }) {
    return _asyncToGenerator(function* () {
      if (false) {
        setTimeout(function () {
          store.dispatch(fetchAccessKeys());
        }, 100);
      }
      const AccessKeysContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(56).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: 'My access keys',
        chunk: 'accessKeys',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */], {}, void 0, _jsx(AccessKeysContainer, {}))
      };
    })();
  }

});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var _ref = _jsx('div', {}, void 0, _jsx('h1', {}, void 0, 'Error'), _jsx('p', {}, void 0, 'Sorry, a critical error occurred on this page.'));

function ErrorPage(props) {
  if (false) {
    const { error } = props;
    return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, error.name), _jsx('p', {}, void 0, error.message), _jsx('pre', {}, void 0, error.stack));
  }

  return _ref;
}


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_LayoutContainer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_RestApi__ = __webpack_require__(13);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action() {
    var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__containers_LayoutContainer__["a" /* default */], {}, void 0, _jsx(HomeContainer, {}));

    return _asyncToGenerator(function* () {
      const HomeContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(25).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: 'AppSync Server',
        chunk: 'home',
        component: _ref
      };
    })();
  },

  actionORIG() {
    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].buildWebUsageUrl(), {
        method: 'get',
        timeout: 5000,
        headers: {
          Accept: 'text/html',
          'Content-Type': 'text/html'
        }
      });
      if (resp.status !== 200) throw new Error(resp.statusText);
      const data = yield resp.text();
      const HomeContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(25).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: 'AppSync Server',
        chunk: 'home',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_2__containers_LayoutContainer__["a" /* default */], {}, void 0, _jsx(HomeContainer, {
          html: data
        }))
      };
    })();
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["a"] = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(74).default, __webpack_require__(27).default, __webpack_require__(27).logout, __webpack_require__(23).default, __webpack_require__(23).appDetails, __webpack_require__(23).deployments, __webpack_require__(72).default, __webpack_require__(28).default, __webpack_require__(28).settings, __webpack_require__(78).default,
  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(77).default],

  action({ next }) {
    return _asyncToGenerator(function* () {
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'}`;
      route.description = route.description || '';

      return route;
    })();
  }

});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var _ref = _jsx('p', {}, void 0, 'Sorry, the page you were trying to view does not exist.');

function NotFound(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container
  }, void 0, _jsx('h1', {}, void 0, props.title), _ref));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound));

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(76);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Page Not Found';

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], {
  title: title
}));

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action() {
    return {
      title,
      component: _ref,
      status: 404
    };
  }

});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/register',

  action({ store }) {
    return _asyncToGenerator(function* () {

      if (false) {}

      const RegisterContainer = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(64).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      return {
        title: 'Register',
        chunk: 'register',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {}, void 0, _jsx(RegisterContainer, {}))
      };
    })();
  }

});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

if (false) {
  module.exports = require('./configureStore.dev');
} else {
  module.exports = __webpack_require__(80);
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(66);




function configureStore(initialState) {
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a];
  const enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware);
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);
  return store;
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._15F5I{padding-left:20px;padding-right:20px}._1RQYM{margin:0 auto;padding:0 0 40px;min-height:480px;max-width:1000px}table{font-size:1.2em;width:100%;text-align:center}", ""]);

// exports
exports.locals = {
	"root": "_15F5I",
	"container": "_1RQYM"
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._1R8uX{padding-left:20px;padding-right:20px}._1-vLN{margin:0 auto;padding:0 0 40px;min-height:480px;max-width:1000px}", ""]);

// exports
exports.locals = {
	"root": "_1R8uX",
	"container": "_1-vLN"
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._3Jihw{width:100%;height:60px;background-color:#222;border-color:#080808}.n1bVC{margin:0 auto;padding:20px 15px;max-width:1000px;text-align:center}._2mr6B{color:hsla(0,0%,100%,.5)}._3HO-I{color:hsla(0,0%,100%,.3)}._1sUkm,._2mr6B{padding:2px 5px;font-size:1em}._1sUkm,._1sUkm:active,._1sUkm:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._1sUkm:hover{color:#fff}", ""]);

// exports
exports.locals = {
	"root": "_3Jihw",
	"container": "n1bVC",
	"text": "_2mr6B",
	"spacer": "_3HO-I",
	"link": "_1sUkm"
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._19lnX{color:lightness(10%));text-decoration:none;font-size:1.75em}", ""]);

// exports
exports.locals = {
	"brand": "_19lnX"
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._3rK2B{padding-left:20px;padding-right:20px}.bf36U{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);

// exports
exports.locals = {
	"root": "_3rK2B",
	"container": "bf36U"
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375;height:100%}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._3bNak{padding-left:20px;padding-right:20px}._2WGpY{margin:0 auto;padding:0 0 40px;min-height:480px;max-width:1000px}table{font-size:1.2em;width:100%;text-align:center}li{list-style:none}li a{text-decoration:none;color:inherit}", ""]);

// exports
exports.locals = {
	"root": "_3bNak",
	"container": "_2WGpY"
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._3AV4k{padding-left:20px;padding-right:20px}._3-pwX{margin:0 auto;padding:0 0 40px;min-height:480px;max-width:1000px}table{font-size:1.2em;width:100%;text-align:center}li{list-style:none}li a{text-decoration:none;color:inherit}._2-yGN{padding-left:10px;padding-right:5px}._3o5bn{padding:2px 4px;font-size:13px;font-style:normal;font-weight:400;display:inline-block;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}._2W088{background-color:#2faa60}._2-yGN em{color:green}", ""]);

// exports
exports.locals = {
	"root": "_3AV4k",
	"container": "_3-pwX",
	"permission": "_2-yGN",
	"label": "_3o5bn",
	"labelSuccess": "_2W088"
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._2PFpa{font-size:62.5%;padding-top:50px;padding-bottom:50px;padding-left:0;margin:0 auto 30px}._2PFpa li{float:left;width:25%;height:45px;line-height:45px;text-align:center;font-size:1.6em;color:#666;background-color:#ededed;position:relative;list-style:none;display:block}._2PFpa li i{display:inline-block;width:20px;height:20px;border-radius:50%;font-style:normal;background-color:#3cb371;color:#fff;margin-right:5px;line-height:1.3}@media (max-width:600px){._2PFpa li span{display:none}}._2PFpa li em{display:inline-block;width:28px;position:absolute;top:-1px;right:-14px;z-index:1}._2PFpa li:last-child em{display:none}._2PFpa .E4Fzb{background-color:#3cb371;color:#fff}._2PFpa .E4Fzb i{color:#3cb371;background-color:#fff}", ""]);

// exports
exports.locals = {
	"progress": "_2PFpa",
	"current": "E4Fzb"
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._2JqUI{padding-left:20px;padding-right:20px}.cDS84{margin:0 auto;padding:0 0 40px;max-width:700px;min-height:480px}", ""]);

// exports
exports.locals = {
	"root": "_2JqUI",
	"container": "cDS84"
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._3whbd{padding-left:20px;padding-right:20px}._1BOHG{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);

// exports
exports.locals = {
	"root": "_3whbd",
	"container": "_1BOHG"
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "49d04bb9.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(81);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./AccessKeys.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./AccessKeys.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(82);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Deployment.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Deployment.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(83);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(84);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(85);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(86);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(87);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Product.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Product.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(88);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./ProductList.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./ProductList.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(89);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/index.js??ref--1-2!./NavStep.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/index.js??ref--1-2!./NavStep.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(90);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Register.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Register.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(92);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
module.exports = __webpack_require__(31);


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map