"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

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

var Paragraph = function Paragraph(_ref) {
  var children = _ref.children,
      lineNum = _ref.lineNum,
      isUnfold = _ref.isUnfold,
      style = _ref.style,
      unfoldColor = _ref.unfoldColor,
      unfoldText = _ref.unfoldText,
      foldText = _ref.foldText,
      suffix = _ref.suffix;
  if (suffix.length > 3) throw new Error("Please limit the number of suffixes to 3 characters");

  var _useState = (0, _react.useState)({
    node: unfoldText,
    value: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      foldType = _useState2[0],
      setFoldType = _useState2[1];

  var couterRef = (0, _react.useRef)();

  var pxToNum = function pxToNum(px) {
    return +px.slice(0, -2);
  };

  var thinContent = function thinContent(node) {
    var text = children;
    var originStyle = window.getComputedStyle(node);
    var baseWidth = originStyle.width;
    var baseFontSize = pxToNum(originStyle.fontSize);
    var lineWidth = pxToNum(baseWidth);
    var strNum = Math.floor(lineWidth / baseFontSize);
    var totalStrNum = Math.floor(strNum * lineNum);
    var lastIndex = totalStrNum - children.length;
    var content = '';

    if (children.length > totalStrNum) {
      content = text.slice(0, lastIndex - 3).concat(suffix);
    } else {
      content = text;
    }

    return content;
  };

  (0, _react.useEffect)(function () {
    couterRef.current.textContent = thinContent(couterRef.current);
  }, []);

  var handleFold = function handleFold() {
    if (!foldType.value) {
      couterRef.current.textContent = children;
      setFoldType({
        node: foldText,
        value: 1
      });
    } else {
      couterRef.current.textContent = thinContent(couterRef.current);
      setFoldType({
        node: unfoldText,
        value: 0
      });
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Paragraph-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: couterRef,
    className: "Paragraph-text",
    style: style
  }), isUnfold && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: unfoldColor,
      width: "3em"
    },
    className: "Paragraph-fold",
    onClick: handleFold
  }, foldType.node));
};

Paragraph.defaultProps = {
  lineNum: 1,
  //支持多行溢出的行数  默认(1行)
  isUnfold: true,
  //是否支持展开  默认(true)
  style: {},
  //文本内容的样式
  unfoldColor: "rgb(152, 216, 131)",
  //展开收起的颜色  默认(驿氪绿)
  children: "请添加文本(string格式)",
  //文本  默认(请添加文本(string格式))
  suffix: "...",
  //后缀  默认("...")
  foldText: "收起",
  //收起文案 ，默认(收起)
  unfoldText: "展开" //展开文案 ，默认(展开)

};
Paragraph.propTypes = {
  lineNum: _propTypes["default"].number,
  isUnfold: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  unfoldColor: _propTypes["default"].string,
  children: _propTypes["default"].string,
  foldText: _propTypes["default"].node,
  unfoldText: _propTypes["default"].node,
  suffix: _propTypes["default"].string
};
var _default = Paragraph;
exports["default"] = _default;