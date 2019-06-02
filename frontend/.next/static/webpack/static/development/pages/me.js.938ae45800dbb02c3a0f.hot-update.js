webpackHotUpdate("static/development/pages/me.js",{

/***/ "./components/User/Me.js":
/*!*******************************!*\
  !*** ./components/User/Me.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../User/User */ "./components/User/User.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/tintinla/Documents/Projects/Super-Shoes/frontend/components/User/Me.js";






var AccountStyle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Me__AccountStyle",
  componentId: "ddburn-0"
})(["width:100%;margin-top:2rem;color:", ";h2{text-align:center;font-size:3.5rem;letter-spacing:.5rem;}hr{margin:0 10% 1rem 10%;border-top:3px solid ", ";}.account-grid{display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem;align-items:center;margin:0 10% 1rem 10%;@media(max-width:711px){grid-template-columns:1fr;}img{width:100%;height:auto;border-radius:.4rem;box-shadow:2px 2px 2px rgba(0,0,0,0.5);}p{font-size:2rem;margin-bottom:1.5rem;font-weight:600;letter-spacing:.2rem;.account-detail{font-style:italic;color:", ";}}.account-details{width:100%;&-link{a{display:block;font-size:2rem;color:", ";letter-spacing:.3rem;margin:1.5rem 0;&:hover{color:", ";transform:translateY(-2px);}}}}}"], function (props) {
  return props.theme.darkgrey;
}, function (props) {
  return props.theme.darkgrey;
}, function (props) {
  return props.theme.mainColor;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.subColor;
});

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data;
    var me = data ? data.me : null;
    console.log(me);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Account Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "account-grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/images/picture1.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "account-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "ID: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "account-detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, me.id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Username: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "account-detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, me.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Email: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "account-detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, me.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Member Status: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "account-detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, me.permissions[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "account-details-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/orders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Check Your Orders")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Sell Your Item"))))));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=me.js.938ae45800dbb02c3a0f.hot-update.js.map