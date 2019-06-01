webpackHotUpdate("static/development/pages/item.js",{

/***/ "./components/Item/SingleItem.js":
/*!***************************************!*\
  !*** ./components/Item/SingleItem.js ***!
  \***************************************/
/*! exports provided: SingleItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleItem", function() { return SingleItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/ErrorMessage */ "./components/Utils/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteItem */ "./components/Item/DeleteItem.js");
/* harmony import */ var _Cart_AddToCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Cart/AddToCart */ "./components/Cart/AddToCart.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/tintinla/Documents/Projects/Super-Shoes/frontend/components/Item/SingleItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query SINGLE_ITEM_QUERY( $id: ID!) {\n        item(where: {id: $id }) {\n            id \n            title\n            description\n            largeImage\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var SingleItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "SingleItem__SingleItemStyles",
  componentId: "c09622-0"
})(["width:100%;.singleitem-top{display:flex;align-items:center;padding:3rem 5rem 0 5rem;h2{font-size:2.6rem;letter-spacing:.3rem;}&-details{margin-left:3rem;}&-buttons{width:100%;padding:1rem 0;}}img{width:50%;height:auto;border:1px solid black;box-shadow:2px 2px 2px rgba(0,0,0,0.5);border-radius:.5rem;transition:all .3s;&:hover{transform:scale(1.1);}}span{margin-right:2.5rem;font-size:2rem;cursor:pointer;&:nth-child(1){color:", "}&:nth-child(2){color:", "}&:nth-child(3){color:", "}&:hover{color:", ";}}.singleitem-bottom{padding:5rem 5rem 0 5rem !important;font-size:2rem;letter-spacing:.2rem;h3{font-size:3rem;letter-spacing:.4rem;}}"], function (props) {
  return props.theme.purpleOne;
}, function (props) {
  return props.theme.purpleTwo;
}, function (props) {
  return props.theme.purpleThree;
}, function (props) {
  return props.theme.lightgrey;
});
var SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var SingleItem =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleItem, _Component);

  function SingleItem() {
    _classCallCheck(this, SingleItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleItem).apply(this, arguments));
  }

  _createClass(SingleItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
        query: SINGLE_ITEM_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Loading..."); // Check item length

        if (!data.item) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "No Item Found for ", _this.props.id);
        var item = data.item;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleItemStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, "Super Shoes | ", item.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "singleitem-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.largeImage,
          alt: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "singleitem-top-details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, item.user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "singleitem-top-buttons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: {
            pathname: 'update',
            query: {
              id: item.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faPen"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart_AddToCart__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faShoppingCart"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faTrash"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "singleitem-bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, item.description)));
      }));
    }
  }]);

  return SingleItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (SingleItem);

/***/ })

})
//# sourceMappingURL=item.js.56b532777d706e7359d1.hot-update.js.map