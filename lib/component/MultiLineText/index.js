"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MultiLineText = function MultiLineText(_ref) {
  var children = _ref.children,
      line = _ref.line,
      unfold = _ref.unfold,
      style = _ref.style,
      unfoldColor = _ref.unfoldColor;
  var componentChildren = [];

  var _useState = (0, _react.useState)("展开"),
      _useState2 = _slicedToArray(_useState, 2),
      unfoldText = _useState2[0],
      setUnfoldText = _useState2[1];

  var _useState3 = (0, _react.useState)({
    overflow: "hidden",
    display: "-webkit-box",
    wordBreak: "break-all",
    webkitBoxOrient: "vertical",
    webkitLineClamp: line.toString()
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      defaultStyle = _useState4[0],
      setDefaultStyle = _useState4[1];

  var unfoldStyle = {
    color: unfoldColor,
    cursor: "pointer"
  };

  var handleUnfold = function handleUnfold() {
    if (unfoldText === "展开") {
      setDefaultStyle({
        overflow: "hidden",
        display: "-webkit-box",
        wordBreak: "break-all"
      });
      setUnfoldText("收起");
    } else {
      setDefaultStyle({
        overflow: "hidden",
        display: "-webkit-box",
        wordBreak: "break-all",
        webkitBoxOrient: "vertical",
        webkitLineClamp: line.toString()
      });
      setUnfoldText("展开");
    }
  };

  if (children.length > 0) {
    componentChildren.push( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      key: "text",
      style: defaultStyle
    }, children), unfold && /*#__PURE__*/_react["default"].createElement("span", {
      style: unfoldStyle,
      onClick: handleUnfold
    }, unfoldText)));
  }

  return /*#__PURE__*/(0, _react.createElement)('div', {
    style: Object.assign({}, style)
  }, componentChildren);
};

MultiLineText.defaultProps = {
  line: 1,
  unfold: false,
  style: {},
  unfoldColor: "rgb(152, 216, 131)"
};
MultiLineText.propTypes = {
  Line: _propTypes["default"].string,
  unfold: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  unfoldColor: _propTypes["default"].string
};
var _default = MultiLineText;
exports["default"] = _default;