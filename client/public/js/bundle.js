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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Bucketlist = __webpack_require__(/*! ./models/bucket_list.js */ \"./client/src/models/bucket_list.js\");\nconst BLView = __webpack_require__(/*! ./views/bl_view.js */ \"./client/src/views/bl_view.js\");\nconst BLFormView = __webpack_require__(/*! ./views/bl_form_view.js */ \"./client/src/views/bl_form_view.js\")\nconst BLListView = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './views/bl_lsit_view.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n\nconst bucketlist = new Bucketlist\nbucketlist.bindEvents()\n\n\nconst blForm = document.querySelector('#form')\nconst blFormView = new BLFormView(blForm)\nblFormView.bindEvents()\n\n\nconst container = document.querySelector(\"#list\")\nconst blView = new BLView(container)\n\n\n\nblView.render()\nbucketlist.getData()\n\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    console.log(`Publishing on ${channel} : ${payload}`);\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    console.log(`Subscribing on: ${channel}`);\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function(url){\n  this.url = url;\n}\n\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json())\n};\n\nRequestHelper.prototype.post = function(payload){\n  console.log(\"rH\",payload);\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json'}\n  })\n    .then((response) => response.json());\n\n}\n\n\n\n\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/bucket_list.js":
/*!******************************************!*\
  !*** ./client/src/models/bucket_list.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\")\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\n\nconst Bucketlist = function() {\n  this.url = 'http://localhost:3000/api/bucketlist'\n  this.request = new RequestHelper(this.url)\n}\n\n\nBucketlist.prototype.bindEvents = function () {\n  PubSub.subscribe(\"BLView:Activity-submitted\", (event) => {\n    this.postActivity(event.detail)\n  })\n\n};\n\n\n\nBucketlist.prototype.getData = function () {\n  this.request.get()\n  .then((list) => {\n    console.log(\"List - ready\", list);\n    PubSub.publish(\"bucket_list:data-loaded\", list)\n  })\n  .catch(console.error)\n};\n\nBucketlist.prototype.postActivity = function (activity) {\n  console.log(activity);\n  this.request.post(activity)\n    .then((activities) => {\n      console.log(activities);\n      PubSub.publish(\"bucket_list:data-loaded\", activities)\n    })\n    .catch(console.error)\n}\n\n\n\n\nmodule.exports = Bucketlist;\n\n\n//# sourceURL=webpack:///./client/src/models/bucket_list.js?");

/***/ }),

/***/ "./client/src/views/bl_form_view.js":
/*!******************************************!*\
  !*** ./client/src/views/bl_form_view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\n\nconst BLFormView = function(form){\n  this.form = form;\n}\n\n\n\nBLFormView.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (event) => {\n    console.log(event)\n    this.handleSubmit(event)\n  })\n};\n\n\nBLFormView.prototype.handleSubmit = function (event) {\n  event.preventDefault();\n  const newActivity = this.createActivity(event.target)\n  console.log(newActivity);\n  PubSub.publish(\"BLView:Activity-submitted\", newActivity)\n  event.target.reset()\n  // const newActivity = this.createActivity(event.target)\n}\n\nBLFormView.prototype.createActivity = function(form) {\n\n  const newActivity = {\n    activity: form.activity.value\n  }\n  return newActivity\n}\n\n\n\n\n\nmodule.exports = BLFormView ;\n\n\n//# sourceURL=webpack:///./client/src/views/bl_form_view.js?");

/***/ }),

/***/ "./client/src/views/bl_view.js":
/*!*************************************!*\
  !*** ./client/src/views/bl_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\n\nconst ListView = function(container) {\n  this.container = container\n}\n\n\n\n\nListView.prototype.render = function () {\n\n  PubSub.subscribe(\"bucket_list:data-loaded\", (event) => {\n\n    const list = event.detail\n    const listContainer = document.createElement('h3')\n    \n    list.forEach(listItem => listContainer.textContent = list)\n\n  })\n\n};\n\nmodule.exports = ListView;\n\n\n//# sourceURL=webpack:///./client/src/views/bl_view.js?");

/***/ })

/******/ });