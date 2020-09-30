"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Alert = function Alert(_ref) {
  var message = _ref.message,
      theme = _ref.theme;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alert alert-".concat(theme, " alert-dismissible fade show"),
    role: "alert"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Close")), /*#__PURE__*/_react["default"].createElement("strong", null, message));
};

Alert.propTypes = {
  message: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};
var _default = Alert;
exports["default"] = _default;