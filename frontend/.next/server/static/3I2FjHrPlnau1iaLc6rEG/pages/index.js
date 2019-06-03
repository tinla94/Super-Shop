module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MainButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FormButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button__FormButton",
  componentId: "icrr16-0"
})(["padding:1.5rem 2.5rem;margin:2rem 0 1rem 0;font-size:1.5rem;letter-spacing:.3rem;color:white;border:none;box-shadow:1px 4px 4px rgba(0,0,0,0.4);cursor:pointer;transition:all .3s;background-image:linear-gradient(to right,#493382 0%,#5052b5 50%,#493382 100%);&:hover{transform:translateY(-2px) scale(1.1);}&:active,&:focus{box-shadow:1px 2px 4px rgba(0,0,0,0.4);}"]);
var MainButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button__MainButton",
  componentId: "icrr16-1"
})(["padding:1.5rem 2.5rem;margin:2rem 0 1rem 0;font-size:1.5rem;letter-spacing:.3rem;color:white;border:none;box-shadow:1px 4px 4px rgba(0,0,0,0.4);cursor:pointer;transition:all .3s;background-color:", ";&:hover{transform:translateY(-2px) scale(1.1);}&:active,&:focus{box-shadow:1px 2px 4px rgba(0,0,0,0.4);border:none;}"], function (props) {
  return props.theme.mainColor;
});
var CheckoutButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button__CheckoutButton",
  componentId: "icrr16-2"
})(["padding:1.5rem 2.5rem;margin:2rem 0 1rem 0;font-size:2rem;letter-spacing:.3rem;color:white;border:none;box-shadow:1px 4px 4px rgba(0,0,0,0.4);cursor:pointer;transition:all .3s;background-image:linear-gradient(to right,#3e4094 0%,#5052b5 50%,#3e4094 100%);;&:hover{transform:translateY(-2px) scale(1.1);}&:active,&:focus{box-shadow:1px 2px 4px rgba(0,0,0,0.4);border:none;}"]);


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/font/PageBrand.js

var PageBrand = external_styled_components_default.a.span.withConfig({
  displayName: "PageBrand",
  componentId: "mdkdsh-0"
})(["color:", ";font-weight:bold;"], function (props) {
  return props.theme.subColor;
});
/* harmony default export */ var font_PageBrand = (PageBrand);
// CONCATENATED MODULE: ./components/styles/home/HomeStyles.js

var HomeStyles = external_styled_components_default.a.div.withConfig({
  displayName: "HomeStyles",
  componentId: "zrkm9q-0"
})(["margin:0;padding:0;width:100%;height:100vh;background-image:linear-gradient( to right bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.6) ),url('/static/images/background1.jpg');background-size:cover;background-position:center center;color:white;text-align:center;.home-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;}.home-title{font-size:4rem;letter-spacing:.3rem;margin-bottom:2.5rem;}.home-title-sub{font-size:2.8rem;letter-spacing:.3rem;}p{letter-spacing:.15rem;font-size:1.5rem;margin:1rem 0;}"]);
/* harmony default export */ var home_HomeStyles = (HomeStyles);
// EXTERNAL MODULE: ./components/styles/button/Button.js
var Button = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Home/Home.js






var Home_Home = function Home() {
  return external_react_default.a.createElement(home_HomeStyles, null, external_react_default.a.createElement("div", {
    className: "home-content"
  }, external_react_default.a.createElement("h1", {
    className: "home-title"
  }, "Greeting from ", external_react_default.a.createElement(font_PageBrand, null, "SuperShoes")), external_react_default.a.createElement("h2", {
    className: "home-title-sub"
  }, "Your ", external_react_default.a.createElement(font_PageBrand, null, "Footwear"), " To Everywhere"), external_react_default.a.createElement("p", null, "Explore our shop today to find your matching shoes!!!"), external_react_default.a.createElement(link_default.a, {
    href: "/items"
  }, external_react_default.a.createElement(Button["c" /* MainButton */], null, "Explore Now"))));
};

/* harmony default export */ var components_Home_Home = (Home_Home);
// CONCATENATED MODULE: ./pages/index.js



var pages_Home = function Home() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Home_Home, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })

/******/ });