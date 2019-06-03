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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query CURRENT_USER_QUERY {\n    me {\n      id\n      email\n      name\n      permissions\n      cart {\n        id\n        quantity\n        item {\n          id\n          price\n          image\n          title\n          description\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY
  }), function (payload) {
    return console.log(payload) || props.children(payload);
  });
};

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-134dr6l-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.5);border-left:5px solid #493382;color:red;p{margin:0;font-weight:400;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error"
      }, error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react-adopt"
var external_react_adopt_ = __webpack_require__(17);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/User/User.js
var User = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(9);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Cart/RemoveFromCart.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation removeFromCart($id: ID!) {\n    removeFromCart(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var BigButton = external_styled_components_default.a.button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-1vwi8nq-0"
})(["font-size:3rem;background:none;border:0;color:white;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.purpleOne;
});
var REMOVE_FROM_CART_MUTATION = external_graphql_tag_default()(_templateObject());

var RemoveFromCart_RemoveFromCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RemoveFromCart, _React$Component);

  function RemoveFromCart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RemoveFromCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RemoveFromCart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "update", function (cache, payload) {
      // 1. first read the cache
      var data = cache.readQuery({
        query: User["a" /* CURRENT_USER_QUERY */]
      }); // 2. remove that item from the cart

      var cartItemId = payload.data.removeFromCart.id;
      data.me.cart = data.me.cart.filter(function (cartItem) {
        return cartItem.id !== cartItemId;
      }); // 3. write it back to the cache

      cache.writeQuery({
        query: User["a" /* CURRENT_USER_QUERY */],
        data: data
      });
    });

    return _this;
  }

  _createClass(RemoveFromCart, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: REMOVE_FROM_CART_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        optimisticResponse: {
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id
          }
        }
      }, function (removeFromCart, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return external_react_default.a.createElement(BigButton, {
          disabled: loading,
          onClick: function onClick() {
            removeFromCart().catch(function (err) {
              return alert(err.message);
            });
          },
          title: "Delete Item"
        }, "\xD7");
      });
    }
  }]);

  return RemoveFromCart;
}(external_react_default.a.Component);

/* harmony default export */ var Cart_RemoveFromCart = (RemoveFromCart_RemoveFromCart);
// CONCATENATED MODULE: ./components/Cart/CartItem.js





var CartItemStyles = external_styled_components_default.a.li.withConfig({
  displayName: "CartItem__CartItemStyles",
  componentId: "obaiwf-0"
})(["padding:1rem 0;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{margin-right:10px;}h3,p{margin:0;}"], function (props) {
  return props.theme.lightgrey;
});

var CartItem_CartItem = function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  // Check if the item exist
  if (!cartItem.item) return external_react_default.a.createElement(CartItemStyles, null, "This item has been removed!", external_react_default.a.createElement(Cart_RemoveFromCart, {
    id: cartItem.id
  }));
  return external_react_default.a.createElement(CartItemStyles, null, external_react_default.a.createElement("img", {
    width: "100",
    src: cartItem.item.image,
    alt: cartItem.item.title
  }), external_react_default.a.createElement("div", {
    className: "cart-item-details"
  }, external_react_default.a.createElement("h3", null, cartItem.item.title), external_react_default.a.createElement("p", null, Object(formatMoney["a" /* default */])(cartItem.item.price * cartItem.quantity), ' - ', external_react_default.a.createElement("em", null, cartItem.quantity, " \xD7 ", Object(formatMoney["a" /* default */])(cartItem.item.price), " each"))), external_react_default.a.createElement(Cart_RemoveFromCart, {
    id: cartItem.id
  }));
};

/* harmony default export */ var Cart_CartItem = (CartItem_CartItem);
// CONCATENATED MODULE: ./lib/calcTotalPrice.js
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}
// CONCATENATED MODULE: ./components/styles/cart/CartStyles.js

var CartStyles = external_styled_components_default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "nxlhl8-0"
})(["padding:1rem;position:relative;background:", ";position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;color:white;letter-spacing:.3rem;", ";header{border-bottom:5px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;color:white;p{margin:0;letter-spacing:.2rem;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], function (props) {
  return props.theme.purpleTwo;
}, function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.purpleThree;
}, function (props) {
  return props.theme.purpleThree;
});
/* harmony default export */ var cart_CartStyles = (CartStyles);
// CONCATENATED MODULE: ./components/styles/cart/Supreme.js

var Supreme = external_styled_components_default.a.h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-13w2v4k-0"
})(["color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:3rem;"]);
/* harmony default export */ var cart_Supreme = (Supreme);
// CONCATENATED MODULE: ./components/styles/CloseButton.js

var CloseButton = external_styled_components_default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "p81tk9-0"
})(["background:", ";color:white;font-size:3rem;border:0;position:absolute;padding:0 1rem;z-index:2;right:0;top:0;cursor:pointer;&:hover{background:#fff;color:", ";}"], function (props) {
  return props.theme.purpleOne;
}, function (props) {
  return props.theme.purpleOne;
});
/* harmony default export */ var styles_CloseButton = (CloseButton);
// EXTERNAL MODULE: ./components/styles/button/Button.js
var Button = __webpack_require__(11);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react-stripe-checkout"
var external_react_stripe_checkout_ = __webpack_require__(18);
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(7);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(10);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./components/Utils/ErrorMessage.js
var ErrorMessage = __webpack_require__(12);

// CONCATENATED MODULE: ./components/Payment/Stripe.js


function Stripe_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Stripe_typeof = function _typeof(obj) { return typeof obj; }; } else { Stripe_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Stripe_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Stripe_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Stripe_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Stripe_createClass(Constructor, protoProps, staticProps) { if (protoProps) Stripe_defineProperties(Constructor.prototype, protoProps); if (staticProps) Stripe_defineProperties(Constructor, staticProps); return Constructor; }

function Stripe_possibleConstructorReturn(self, call) { if (call && (Stripe_typeof(call) === "object" || typeof call === "function")) { return call; } return Stripe_assertThisInitialized(self); }

function Stripe_getPrototypeOf(o) { Stripe_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Stripe_getPrototypeOf(o); }

function Stripe_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Stripe_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Stripe_setPrototypeOf(subClass, superClass); }

function Stripe_setPrototypeOf(o, p) { Stripe_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Stripe_setPrototypeOf(o, p); }

function Stripe_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Stripe_templateObject() {
  var data = Stripe_taggedTemplateLiteral(["\n  mutation createOrder($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        title\n      }\n    }\n  }\n"]);

  Stripe_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Stripe_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var CREATE_ORDER_MUTATION = external_graphql_tag_default()(Stripe_templateObject());

function totalItems(cart) {
  return cart.reduce(function (tally, cartItem) {
    return tally + cartItem.quantity;
  }, 0);
}

var Stripe_Stripe =
/*#__PURE__*/
function (_React$Component) {
  Stripe_inherits(Stripe, _React$Component);

  function Stripe() {
    var _getPrototypeOf2;

    var _this;

    Stripe_classCallCheck(this, Stripe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Stripe_possibleConstructorReturn(this, (_getPrototypeOf2 = Stripe_getPrototypeOf(Stripe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Stripe_defineProperty(Stripe_assertThisInitialized(_this), "onToken",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(res, createOrder) {
        var order;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                external_nprogress_default.a.start(); // manually call the mutation once we have the stripe token

                _context.next = 3;
                return createOrder({
                  variables: {
                    token: res.id
                  }
                }).catch(function (err) {
                  alert(err.message);
                });

              case 3:
                order = _context.sent;
                router_default.a.push({
                  pathname: '/order',
                  query: {
                    id: order.data.createOrder.id
                  }
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Stripe_createClass(Stripe, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(User["b" /* default */], null, function (_ref2) {
        var me = _ref2.data.me;
        return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
          mutation: CREATE_ORDER_MUTATION,
          refetchQueries: [{
            query: User["a" /* CURRENT_USER_QUERY */]
          }]
        }, function (createOrder) {
          return external_react_default.a.createElement(external_react_stripe_checkout_default.a, {
            amount: calcTotalPrice(me.cart),
            name: "Sick Fits",
            description: "Order of ".concat(totalItems(me.cart), " items!"),
            image: me.cart.length && me.cart[0].item && me.cart[0].item.image,
            stripeKey: "pk_test_md1xBTdWlFzacG2zswhnyrgb",
            currency: "USD",
            email: me.email,
            token: function token(res) {
              return _this2.onToken(res, createOrder);
            }
          }, _this2.props.children);
        });
      });
    }
  }]);

  return Stripe;
}(external_react_default.a.Component);

/* harmony default export */ var Payment_Stripe = (Stripe_Stripe);
// CONCATENATED MODULE: ./components/Cart/Cart.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOGGLE_CART_MUTATION; });
function _templateObject2() {
  var data = Cart_taggedTemplateLiteral(["\n    mutation {\n        toggleCart @client\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Cart_templateObject() {
  var data = Cart_taggedTemplateLiteral(["\n    query {\n        cartOpen @client\n    }\n"]);

  Cart_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Cart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var LOCAL_STATE_QUERY = external_graphql_tag_default()(Cart_templateObject());
var TOGGLE_CART_MUTATION = external_graphql_tag_default()(_templateObject2());
var Composed = Object(external_react_adopt_["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return external_react_default.a.createElement(User["b" /* default */], null, render);
  },
  toggleCart: function toggleCart(_ref2) {
    var render = _ref2.render;
    return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: TOGGLE_CART_MUTATION
    }, render);
  },
  localState: function localState(_ref3) {
    var render = _ref3.render;
    return external_react_default.a.createElement(external_react_apollo_["Query"], {
      query: LOCAL_STATE_QUERY
    }, render);
  }
});

var Cart_Cart = function Cart() {
  return external_react_default.a.createElement(Composed, null, function (_ref4) {
    var user = _ref4.user,
        toggleCart = _ref4.toggleCart,
        localState = _ref4.localState;
    var me = user.data.me;
    if (!me) return null;
    return external_react_default.a.createElement(cart_CartStyles, {
      open: localState.data.cartOpen
    }, external_react_default.a.createElement("header", null, external_react_default.a.createElement(styles_CloseButton, {
      onClick: toggleCart,
      title: "close"
    }, "\xD7"), external_react_default.a.createElement(cart_Supreme, null, me.name, "'s Cart"), external_react_default.a.createElement("p", null, "You Have ", me.cart.length, " Item", me.cart.length === 1 ? '' : 's', " in your cart.")), external_react_default.a.createElement("ul", null, me.cart.map(function (cartItem) {
      return external_react_default.a.createElement(Cart_CartItem, {
        key: cartItem.id,
        cartItem: cartItem
      });
    })), external_react_default.a.createElement("footer", null, external_react_default.a.createElement("p", null, Object(formatMoney["a" /* default */])(calcTotalPrice(me.cart))), me.cart.length ? external_react_default.a.createElement(Payment_Stripe, null, external_react_default.a.createElement(Button["a" /* CheckoutButton */], null, "Checkout")) : ''));
  });
};

/* harmony default export */ var components_Cart_Cart = __webpack_exports__["c"] = (Cart_Cart);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/User/User.js
var User = __webpack_require__(4);

// CONCATENATED MODULE: ./components/styles/header/NavStyles.js

var NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-9m6sd9-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;background:", ";a,button{color:", ";padding:1rem 3rem;letter-spacing:.2rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1.3rem;background:none;border:0;cursor:pointer;font-weight:800;@media (max-width:700px){font-size:1.2rem;padding:1rem;}&:before{content:'';width:2px;height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:", ";content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus,&:active{color:#fff;}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.mainColor;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.mainColor;
});
/* harmony default export */ var header_NavStyles = (NavStyles);
// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/Auth/Signout.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation SIGN_OUT_MUTATION {\n        signout {\n            message\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SIGN_OUT_MUTATION = external_graphql_tag_default()(_templateObject());

var Signout_Signout = function Signout(props) {
  return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: User["a" /* CURRENT_USER_QUERY */]
    }]
  }, function (signout) {
    return external_react_default.a.createElement("button", {
      onClick: signout
    }, "Sign Out");
  });
};

/* harmony default export */ var Auth_Signout = (Signout_Signout);
// EXTERNAL MODULE: ./components/Cart/Cart.js + 7 modules
var Cart = __webpack_require__(13);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(8);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Cart/CartCount.js




var AnimationStyles = external_styled_components_default.a.span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-1qhdos6-0"
})(["position:relative;.count{display:block;position:relative;transition:all 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
var Dot = external_styled_components_default.a.div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-1qhdos6-1"
})(["background:", ";color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-weight:100;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"], function (props) {
  return props.theme.darkgrey;
});

var CartCount_CartCount = function CartCount(_ref) {
  var count = _ref.count;
  return external_react_default.a.createElement(AnimationStyles, null, external_react_default.a.createElement(external_react_transition_group_["TransitionGroup"], null, external_react_default.a.createElement(external_react_transition_group_["CSSTransition"], {
    unmountOnExit: true,
    className: "count",
    classNames: "count",
    key: count,
    timeout: {
      enter: 400,
      exit: 400
    }
  }, external_react_default.a.createElement(Dot, null, count))));
};

/* harmony default export */ var Cart_CartCount = (CartCount_CartCount);
// CONCATENATED MODULE: ./components/Header/Nav.js









var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(User["b" /* default */], null, function (_ref) {
    var data = _ref.data;
    var me = data ? data.me : null;
    return external_react_default.a.createElement(header_NavStyles, {
      "data-test": "nav"
    }, external_react_default.a.createElement(link_default.a, {
      href: "/items"
    }, external_react_default.a.createElement("a", null, "Shop")), me && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(link_default.a, {
      href: "/sell"
    }, external_react_default.a.createElement("a", null, "Sell")), external_react_default.a.createElement(link_default.a, {
      href: "/orders"
    }, external_react_default.a.createElement("a", null, "Orders")), external_react_default.a.createElement(link_default.a, {
      href: "/me"
    }, external_react_default.a.createElement("a", null, "Account")), external_react_default.a.createElement(Auth_Signout, null), external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: Cart["b" /* TOGGLE_CART_MUTATION */]
    }, function (toggleCart) {
      return external_react_default.a.createElement("button", {
        onClick: toggleCart
      }, "My Cart", external_react_default.a.createElement(Cart_CartCount, {
        count: me.cart.reduce(function (tally, cartItem) {
          return tally + cartItem.quantity;
        }, 0)
      }));
    })), !me && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(link_default.a, {
      href: "/signin"
    }, external_react_default.a.createElement("a", null, "Sign In")), external_react_default.a.createElement(link_default.a, {
      href: "/signup"
    }, external_react_default.a.createElement("a", null, "Sign Up"))));
  });
};

/* harmony default export */ var Header_Nav = (Nav_Nav);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(7);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(10);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__(21);
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__(22);
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./components/styles/header/DropDown.js

var DropDown = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "sc-13kxea1-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-13kxea1-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";cursor:pointer;img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(external_styled_components_["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-13kxea1-2"
})(["position:relative;input{width:100%;padding:1rem;border:0;font-size:1.2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);

// CONCATENATED MODULE: ./components/Utils/Search.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Search_templateObject() {
  var data = Search_taggedTemplateLiteral(["\n  query SEARCH_ITEMS_QUERY($searchTerm: String!) {\n    items(where: { \n        OR: [\n            { title_contains: $searchTerm },{ description_contains: $searchTerm }\n            ] }) {\n      id\n      image\n      title\n    }\n  }\n"]);

  Search_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Search_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SEARCH_ITEMS_QUERY = external_graphql_tag_default()(Search_templateObject());

function routeToItem(item) {
  router_default.a.push({
    pathname: '/item',
    query: {
      id: item.id
    }
  });
}

var Search_Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      items: [],
      loading: false // user debounce function to delay invoking function after wait milliseconds

    });

    _defineProperty(_assertThisInitialized(_this), "onChange", external_lodash_debounce_default()(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e, client) {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // turn on loading
                _this.setState({
                  loading: true
                }); // Manually query apollo client


                _context.next = 3;
                return client.query({
                  query: SEARCH_ITEMS_QUERY,
                  variables: {
                    searchTerm: e.target.value
                  }
                });

              case 3:
                res = _context.sent;

                // turn off loading
                _this.setState({
                  items: res.data.items,
                  loading: false
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 350));

    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(SearchStyles, null, external_react_default.a.createElement(external_downshift_default.a, {
        onChange: routeToItem,
        itemToString: function itemToString(item) {
          return item === null ? '' : item.title;
        }
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            highlightedIndex = _ref2.highlightedIndex;
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_apollo_["ApolloConsumer"], null, function (client) {
          return external_react_default.a.createElement("input", getInputProps({
            type: 'search',
            placeholder: 'Search For An Item',
            id: 'search',
            className: _this2.state.loading ? 'loading' : '',
            onChange: function onChange(e) {
              e.persist();

              _this2.onChange(e, client);
            }
          }));
        }), isOpen && external_react_default.a.createElement(DropDown, null, _this2.state.items.map(function (item, index) {
          return external_react_default.a.createElement(DropDownItem, _extends({}, getItemProps({
            item: item
          }), {
            key: item.id,
            highlighted: index === highlightedIndex
          }), external_react_default.a.createElement("img", {
            width: "50",
            src: item.image,
            alt: item.title
          }), item.title);
        }), !_this2.state.items.length && !_this2.state.loading && external_react_default.a.createElement(DropDownItem, null, " Nothing Found ", inputValue)));
      }));
    }
  }]);

  return Search;
}(external_react_default.a.Component);

/* harmony default export */ var Utils_Search = (Search_Search);
// CONCATENATED MODULE: ./components/Header/Header.js







 // page loading

router_default.a.onRouteChangeStart = function () {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function () {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function () {
  external_nprogress_default.a.remove();
};

var Logo = external_styled_components_default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1o383dx-0"
})(["font-size:3rem;position:relative;z-index:2;letter-spacing:.5rem;a{padding:1rem;color:", ";text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.lightgrey;
});
var StyledHeader = external_styled_components_default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1o383dx-1"
})([".bar{border-top:1px solid ", ";border-bottom:1px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});

var Header_Header = function Header() {
  return external_react_default.a.createElement(StyledHeader, null, external_react_default.a.createElement("div", {
    className: "bar"
  }, external_react_default.a.createElement(Logo, null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "Super Shoes"))), external_react_default.a.createElement(Header_Nav, null)), external_react_default.a.createElement("div", {
    className: "sub-bar"
  }, external_react_default.a.createElement(Utils_Search, null)), external_react_default.a.createElement(Cart["c" /* default */], null));
};

/* harmony default export */ var components_Header_Header = __webpack_exports__["a"] = (Header_Header);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/utils/BannerStyle.js

var BannerStyle = external_styled_components_default.a.div.withConfig({
  displayName: "BannerStyle",
  componentId: "sc-1g2pqs5-0"
})(["width:100%;height:auto;font-size:2.5rem;text-align:center;font-style:italic;letter-spacing:.4rem;color:rgba(0,0,0,0.6);padding:6rem 0;background-image:linear-gradient( to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.7) ),url('/static/images/background3.jpg');background-size:cover;background-position:center center;box-shadow:2px 2px 2px ", ";border-radius:2px;"], function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ var utils_BannerStyle = (BannerStyle);
// CONCATENATED MODULE: ./components/Banner/Banner.js



var Banner_Banner = function Banner(props) {
  return external_react_default.a.createElement(utils_BannerStyle, null, external_react_default.a.createElement("h4", null, props.text));
};

/* harmony default export */ var components_Banner_Banner = __webpack_exports__["a"] = (Banner_Banner);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-adopt");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "m85bme-0"
})(["background:rgba(0,0,0,0.02);border:5px solid white;font-size:1.5rem;line-height:1.5;font-weight:600;padding 10rem 25% 5rem 25%;color:#666;height:45vh;h2{font-size:4rem;letter-spacing:.4rem;}p{font-size:1.1rem;margin:1rem 0;}label{display:block;margin:2rem 0;letter-spacing:.4rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:red;}}input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#493382 0%,#5052b5 50%,#493382 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var FooterStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__FooterStyle",
  componentId: "d2f4bq-0"
})(["position:absolute;left:0;bottom:0;height:2rem;font-size:1.5rem;letter-spacing:.2rem;width:100%;color:", ";padding:2rem 0;display:flex;justify-content:center;align-items:center;background:", ";"], function (props) {
  return props.theme.darkgrey;
}, function (props) {
  return props.theme.mainColor;
});

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterStyle, null, "@2019 Created By: Cuong La");
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./components/Header/Header.js + 6 modules
var Header = __webpack_require__(14);

// EXTERNAL MODULE: ./components/Footer/Footer.js
var Footer = __webpack_require__(20);

// EXTERNAL MODULE: ./components/Banner/Banner.js + 1 modules
var Banner = __webpack_require__(16);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(7);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/styles/form/Form.js
var Form = __webpack_require__(19);

// EXTERNAL MODULE: ./components/styles/button/Button.js
var Button = __webpack_require__(11);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Utils/ErrorMessage.js
var ErrorMessage = __webpack_require__(12);

// CONCATENATED MODULE: ./components/Item/UpdateItem.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_ITEM_MUTATION($id: ID!, $title: String, $description: String, $price: Int) {\n    updateItem(id: $id, title: $title, description: $description, price: $price) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var SINGLE_ITEM_QUERY = external_graphql_tag_default()(_templateObject());
var UPDATE_ITEM_MUTATION = external_graphql_tag_default()(_templateObject2());

var UpdateItem_UpdateItem =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateItem, _Component);

  function UpdateItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_this), "updateItem",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e, updateItemMutation) {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log('Updating Item!!');
                _context.next = 4;
                return updateItemMutation({
                  variables: _objectSpread({
                    id: _this.props.id
                  }, _this.state)
                });

              case 4:
                res = _context.sent;
                console.log('Updated!!');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(UpdateItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Header["a" /* default */], null), external_react_default.a.createElement(Banner["a" /* default */], {
        text: "\"New Shoes. New Style = Great Day!\""
      }), external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: SINGLE_ITEM_QUERY,
        variables: {
          id: this.props.id
        }
      }, function (_ref2) {
        var data = _ref2.data,
            loading = _ref2.loading;
        if (loading) return external_react_default.a.createElement("p", null, "Loading...");
        if (!data.item) return external_react_default.a.createElement("p", null, "No Item Found for ID ", _this2.props.id);
        return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
          mutation: UPDATE_ITEM_MUTATION,
          variables: _this2.state
        }, function (updateItem, _ref3) {
          var loading = _ref3.loading,
              error = _ref3.error;
          return external_react_default.a.createElement(Form["a" /* default */], {
            onSubmit: function onSubmit(e) {
              return _this2.updateItem(e, updateItem);
            }
          }, external_react_default.a.createElement(ErrorMessage["a" /* default */], {
            error: error
          }), external_react_default.a.createElement("h2", null, "Edit Item"), external_react_default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading
          }, external_react_default.a.createElement("label", {
            htmlFor: "title"
          }, "Title", external_react_default.a.createElement("input", {
            type: "text",
            id: "title",
            name: "title",
            placeholder: "Title",
            required: true,
            defaultValue: data.item.title,
            onChange: _this2.handleChange
          })), external_react_default.a.createElement("label", {
            htmlFor: "price"
          }, "Price", external_react_default.a.createElement("input", {
            type: "number",
            id: "price",
            name: "price",
            placeholder: "Price",
            required: true,
            defaultValue: data.item.price,
            onChange: _this2.handleChange
          })), external_react_default.a.createElement("label", {
            htmlFor: "description"
          }, "Description", external_react_default.a.createElement("textarea", {
            id: "description",
            name: "description",
            placeholder: "Enter A Description",
            required: true,
            defaultValue: data.item.description,
            onChange: _this2.handleChange
          })), external_react_default.a.createElement(Button["b" /* FormButton */], {
            type: "submit"
          }, loading ? 'Saving...' : 'Save Changes')));
        });
      }), external_react_default.a.createElement(Footer["a" /* default */], null));
    }
  }]);

  return UpdateItem;
}(external_react_["Component"]);

/* harmony default export */ var Item_UpdateItem = (UpdateItem_UpdateItem);

// CONCATENATED MODULE: ./pages/update.js



var update_Update = function Update(_ref) {
  var query = _ref.query;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Item_UpdateItem, {
    id: query.id
  }));
};

/* harmony default export */ var update = __webpack_exports__["default"] = (update_Update);

/***/ })
/******/ ]);