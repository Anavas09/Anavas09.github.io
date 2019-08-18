webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MasterPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MasterPage */ "./components/MasterPage.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_BitcoinPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BitcoinPrice */ "./components/BitcoinPrice.js");
/* harmony import */ var _components_BitcoinNews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BitcoinNews */ "./components/BitcoinNews.js");
/* harmony import */ var _components_BitcoinEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BitcoinEvents */ "./components/BitcoinEvents.js");


var _jsxFileName = "/home/angel/Documentos/React/React Con Hooks/bitcoinapp/pages/index.js";






 //import 'bootstrap/dist/css/bootstrap.min.css';

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MasterPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Precio del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_BitcoinPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    price: props.price,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Proximos eventos sobre Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_BitcoinEvents__WEBPACK_IMPORTED_MODULE_8__["default"], {
    events: props.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var criptomoneda, moneda, precio, noticias, eventos, priceResp, newsResp, eventsResp;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          criptomoneda = 'BTC';
          moneda = 'USD';
          _context.next = 4;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(criptomoneda, "&tsyms=").concat(moneda));

        case 4:
          precio = _context.sent;
          _context.next = 7;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-16&sortBy=publishedAt&apiKey=599b31bd0d614939b8b56da004c5c638&language=es');

        case 7:
          noticias = _context.sent;
          _context.next = 10;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=KMFG4XO47WWJGSWOYYC7');

        case 10:
          eventos = _context.sent;
          _context.next = 13;
          return precio.json();

        case 13:
          priceResp = _context.sent;
          _context.next = 16;
          return noticias.json();

        case 16:
          newsResp = _context.sent;
          _context.next = 19;
          return eventos.json();

        case 19:
          eventsResp = _context.sent;
          return _context.abrupt("return", {
            price: priceResp.DISPLAY[criptomoneda][moneda],
            news: newsResp.articles,
            events: eventsResp.events
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f5bbc506c1fca9fdbde1.hot-update.js.map