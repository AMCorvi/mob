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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var store = null;

var Store = (_class = function Store(isServer, lastUpdate) {
  var _this = this;

  _classCallCheck(this, Store);

  _initDefineProp(this, 'lastUpdate', _descriptor, this);

  _initDefineProp(this, 'light', _descriptor2, this);

  _initDefineProp(this, 'start', _descriptor3, this);

  this.stop = function () {
    return clearInterval(_this.timer);
  };

  this.lastUpdate = lastUpdate;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'lastUpdate', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'light', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'start', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.timer = setInterval(function () {
        _this2.lastUpdate = Date.now();
        _this2.light = true;
      }, 1000);
    };
  }
})), _class);


function initStore(isServer) {
  var lastUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

  if (isServer) {
    return new Store(isServer, lastUpdate);
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate);
    }
    return store;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(6);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/Clock.js


/* harmony default export */ var Clock = (function (props) {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-3493801758' + ' ' + ((props.light ? 'light' : '') || '')
    },
    format(new Date(props.lastUpdate)),
    external__react__default.a.createElement(style__default.a, {
      styleId: '3493801758',
      css: ['div.jsx-3493801758{padding:15px;color:#82FA58;display:inline-block;font:50px menlo,monaco,monospace;background-color:#000;}', '.light.jsx-3493801758{background-color:#999;}']
    })
  );
});

var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};
// CONCATENATED MODULE: ./components/Page.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Page_Page = (_dec = Object(external__mobx_react_["inject"])('store'), _dec(_class = Object(external__mobx_react_["observer"])(_class = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.store.start();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.stop();
    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(
          'h1',
          null,
          this.props.title
        ),
        external__react__default.a.createElement(Clock, { lastUpdate: this.props.store.lastUpdate, light: this.props.store.light }),
        external__react__default.a.createElement(
          'nav',
          null,
          external__react__default.a.createElement(
            link__default.a,
            { href: this.props.linkTo },
            external__react__default.a.createElement(
              'a',
              null,
              'Navigate'
            )
          )
        )
      );
    }
  }]);

  return Page;
}(external__react__default.a.Component)) || _class) || _class);


/* harmony default export */ var components_Page = __webpack_exports__["a"] = (Page_Page);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  _createClass(Counter, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var isServer = !!req;
      var store = Object(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* initStore */])(isServer);
      return { lastUpdate: store.lastUpdate, isServer: isServer };
    }
  }]);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.store = Object(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* initStore */])(props.isServer, props.lastUpdate);
    return _this;
  }

  _createClass(Counter, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["Provider"],
        { store: this.store },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Page__["a" /* default */], { title: 'Other Page', linkTo: '/' })
      );
    }
  }]);

  return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })
/******/ ]);