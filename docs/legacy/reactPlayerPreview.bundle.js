(self["webpackChunk_streamlayer_web_os_demo_app"] = self["webpackChunk_streamlayer_web_os_demo_app"] || []).push([[353],{

/***/ 52400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = function __defNormalProp(obj, key, value) {
  return key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};
var __export = function __export(target, all) {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = function __copyProps(to, from, except, desc) {
  if (from && _typeof(from) === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
      _step;
    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: function get() {
            return from[key];
          },
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = function __toESM(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod);
};
var __toCommonJS = function __toCommonJS(mod) {
  return __copyProps(__defProp({}, "__esModule", {
    value: true
  }), mod);
};
var __publicField = function __publicField(obj, key, value) {
  __defNormalProp(obj, _typeof(key) !== "symbol" ? key + "" : key, value);
  return value;
};
var Preview_exports = {};
__export(Preview_exports, {
  default: function _default() {
    return Preview;
  }
});
module.exports = __toCommonJS(Preview_exports);
var import_react = __toESM(__webpack_require__(73581));
var ICON_SIZE = "64px";
var cache = {};
var Preview = /*#__PURE__*/function (_import_react$Compone) {
  "use strict";

  function Preview() {
    var _this;
    _classCallCheck(this, Preview);
    _this = _callSuper(this, Preview, arguments);
    __publicField(_this, "mounted", false);
    __publicField(_this, "state", {
      image: null
    });
    __publicField(_this, "handleKeyPress", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        _this.props.onClick();
      }
    });
    return _this;
  }
  _inherits(Preview, _import_react$Compone);
  return _createClass(Preview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.fetchImage(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
        url = _this$props.url,
        light = _this$props.light;
      if (prevProps.url !== url || prevProps.light !== light) {
        this.fetchImage(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "fetchImage",
    value: function fetchImage(_ref) {
      var _this2 = this;
      var url = _ref.url,
        light = _ref.light,
        oEmbedUrl = _ref.oEmbedUrl;
      if (import_react.default.isValidElement(light)) {
        return;
      }
      if (typeof light === "string") {
        this.setState({
          image: light
        });
        return;
      }
      if (cache[url]) {
        this.setState({
          image: cache[url]
        });
        return;
      }
      this.setState({
        image: null
      });
      return window.fetch(oEmbedUrl.replace("{url}", url)).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.thumbnail_url && _this2.mounted) {
          var image = data.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
          _this2.setState({
            image: image
          });
          cache[url] = image;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        light = _this$props2.light,
        onClick = _this$props2.onClick,
        playIcon = _this$props2.playIcon,
        previewTabIndex = _this$props2.previewTabIndex,
        previewAriaLabel = _this$props2.previewAriaLabel;
      var image = this.state.image;
      var isElement = import_react.default.isValidElement(light);
      var flexCenter = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      };
      var styles = {
        preview: _objectSpread({
          width: "100%",
          height: "100%",
          backgroundImage: image && !isElement ? "url(".concat(image, ")") : void 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer"
        }, flexCenter),
        shadow: _objectSpread({
          background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
          borderRadius: ICON_SIZE,
          width: ICON_SIZE,
          height: ICON_SIZE,
          position: isElement ? "absolute" : void 0
        }, flexCenter),
        playIcon: {
          borderStyle: "solid",
          borderWidth: "16px 0 16px 26px",
          borderColor: "transparent transparent transparent white",
          marginLeft: "7px"
        }
      };
      var defaultPlayIcon = /* @__PURE__ */import_react.default.createElement("div", {
        style: styles.shadow,
        className: "react-player__shadow"
      }, /* @__PURE__ */import_react.default.createElement("div", {
        style: styles.playIcon,
        className: "react-player__play-icon"
      }));
      return /* @__PURE__ */import_react.default.createElement("div", _objectSpread({
        style: styles.preview,
        className: "react-player__preview",
        onClick: onClick,
        tabIndex: previewTabIndex,
        onKeyPress: this.handleKeyPress
      }, previewAriaLabel ? {
        "aria-label": previewAriaLabel
      } : {}), isElement ? light : null, playIcon || defaultPlayIcon);
    }
  }]);
}(import_react.Component);

/***/ })

}]);