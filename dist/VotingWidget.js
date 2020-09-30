"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _VotingWidget = require("./VotingWidget.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VotingWidget = function VotingWidget(_ref) {
  var upvoteCount = _ref.upvoteCount,
      upvote = _ref.upvote,
      downvote = _ref.downvote;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex flex-column align-items-center"
  }, /*#__PURE__*/_react["default"].createElement(_VotingWidget.VotingButton, {
    className: "fas fa-caret-up",
    onClick: upvote
  }), /*#__PURE__*/_react["default"].createElement("span", null, upvoteCount), /*#__PURE__*/_react["default"].createElement(_VotingWidget.VotingButton, {
    className: "fas fa-caret-down",
    onClick: downvote
  }));
};

VotingWidget.propTypes = {
  upvoteCount: _propTypes["default"].number.isRequired,
  upvote: _propTypes["default"].func.isRequired,
  downvote: _propTypes["default"].func.isRequired
};
var _default = VotingWidget;
exports["default"] = _default;