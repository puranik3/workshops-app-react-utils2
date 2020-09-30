"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
var range = function range(from, to) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var i = from;
  var range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

var Pagination = /*#__PURE__*/function (_Component) {
  _inherits(Pagination, _Component);

  var _super = _createSuper(Pagination);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentPage: 1
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function () {
      _this.props.onPageChange({
        currentPage: _this.state.currentPage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "gotoPrevious", function (event) {
      event.preventDefault();

      _this.setState(function (_ref) {
        var currentPage = _ref.currentPage;
        return _this.getPaginationData().hasPrevious ? {
          currentPage: currentPage - 1
        } : {};
      }, _this.onPageChange);
    });

    _defineProperty(_assertThisInitialized(_this), "gotoPage", function (event, page) {
      event.preventDefault();

      _this.setState({
        currentPage: page
      }, _this.onPageChange);
    });

    _defineProperty(_assertThisInitialized(_this), "gotoNext", function (event) {
      event.preventDefault();

      _this.setState(function (_ref2) {
        var currentPage = _ref2.currentPage;
        return _this.getPaginationData().hasNext ? {
          currentPage: currentPage + 1
        } : {};
      }, _this.onPageChange);
    });

    return _this;
  }

  _createClass(Pagination, [{
    key: "derivedPaginationData",
    value: function derivedPaginationData() {
      var _this$props = this.props,
          pageSize = _this$props.pageSize,
          total = _this$props.total;
      return {
        firstPage: Math.min(1, total / pageSize),
        lastPage: total === 0 ? -1 : Math.ceil(total / pageSize)
      };
    }
  }, {
    key: "getPaginationData",
    value: function getPaginationData() {
      var _this$props2 = this.props,
          pageSize = _this$props2.pageSize,
          total = _this$props2.total,
          numPaginationItems = _this$props2.numPaginationItems;
      var currentPage = this.state.currentPage;

      var _this$derivedPaginati = this.derivedPaginationData(),
          firstPage = _this$derivedPaginati.firstPage,
          lastPage = _this$derivedPaginati.lastPage;

      var firstPaginationItem = Math.max(Math.floor((currentPage - 1) / numPaginationItems) * numPaginationItems + 1, firstPage);
      var lastPaginationItem = Math.min(firstPaginationItem + numPaginationItems - 1, lastPage);
      return {
        hasPrevious: firstPaginationItem > firstPage,
        hasNext: lastPaginationItem < lastPage,
        paginationItems: range(firstPaginationItem, lastPaginationItem),
        currentPageFirst: Math.max(0, (currentPage - 1) * pageSize + 1),
        currentPageLast: Math.min(total, currentPage * pageSize),
        total: total
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$getPaginationDa = this.getPaginationData(),
          hasPrevious = _this$getPaginationDa.hasPrevious,
          hasNext = _this$getPaginationDa.hasNext,
          paginationItems = _this$getPaginationDa.paginationItems,
          currentPageFirst = _this$getPaginationDa.currentPageFirst,
          currentPageLast = _this$getPaginationDa.currentPageLast,
          total = _this$getPaginationDa.total;

      var currentPage = this.state.currentPage;
      var className = this.props.className;
      console.log(this.getPaginationData());
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "pagination pagination-sm my-0"
      }, hasPrevious && /*#__PURE__*/_react["default"].createElement("li", {
        className: "page-item"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "page-link",
        href: "#",
        onClick: this.gotoPrevious
      }, "Previous")), paginationItems.map(function (page) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: "page-item".concat(page === currentPage ? ' active' : ''),
          key: page
        }, /*#__PURE__*/_react["default"].createElement("a", {
          className: "page-link",
          href: "#",
          onClick: function onClick(event) {
            return _this2.gotoPage(event, page);
          }
        }, page));
      }), hasNext && /*#__PURE__*/_react["default"].createElement("li", {
        className: "page-item"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "page-link",
        href: "#",
        onClick: this.gotoNext
      }, "Next"))), /*#__PURE__*/_react["default"].createElement("small", {
        className: "text-muted"
      }, "Showing ", currentPageFirst, " - ", currentPageLast, " of ", total));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.gotoPage({
        preventDefault: function preventDefault() {}
      }, this.state.currentPage);
    }
  }]);

  return Pagination;
}(_react.Component);

_defineProperty(Pagination, "propTypes", {
  pageSize: _propTypes["default"].number.isRequired,
  total: _propTypes["default"].number.isRequired,
  numPaginationItems: _propTypes["default"].number.isRequired,
  onPageChange: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string
});

_defineProperty(Pagination, "defaultProps", {
  pageSize: 10,
  onPageChange: function onPageChange() {}
});

var _default = Pagination;
exports["default"] = _default;