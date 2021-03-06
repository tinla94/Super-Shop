webpackHotUpdate("static/development/pages/items.js",{

/***/ "./components/Item/Items.js":
/*!**********************************!*\
  !*** ./components/Item/Items.js ***!
  \**********************************/
/*! exports provided: Items, default, ALL_ITEMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ITEMS_QUERY", function() { return ALL_ITEMS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _Banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Banner/Banner */ "./components/Banner/Banner.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ "./components/Item/Item.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Utils_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utils/Pagination */ "./components/Utils/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "/Users/tintinla/Documents/Projects/Super-Shoes/frontend/components/Item/Items.js";

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
  var data = _taggedTemplateLiteral(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    items(first: $first, skip: $skip, orderBy: createdAt_ASC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_8__["perPage"]);
var Center = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Items__Center",
  componentId: "sc-1avkupz-0"
})(["text-align:center;margin:0 1rem;"]);
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Items__ItemsList",
  componentId: "sc-1avkupz-1"
})(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:1rem;max-width:", ";margin:0 auto 4rem auto;@media (max-width:614px){&{grid-template-columns:1fr 1fr;}}"], function (props) {
  return props.theme.maxWidth;
});
var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "\"Get your shoes today with our great deal!\"",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
        query: ALL_ITEMS_QUERY,
        fetchPolicy: "network-only",
        variables: {
          skip: this.props.page * _config__WEBPACK_IMPORTED_MODULE_8__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_8__["perPage"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, data.items.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
            item: item,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          });
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Items);


/***/ })

})
//# sourceMappingURL=items.js.a98a41ee28158ac8e0fb.hot-update.js.map