'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Booklist = function (_wepy$component) {
  _inherits(Booklist, _wepy$component);

  function Booklist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Booklist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Booklist.__proto__ || Object.getPrototypeOf(Booklist)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Object,
        default: []
      }
    }, _this.methods = {
      clk: function clk(item) {
        console.log(item, 1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Booklist, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.list);
    }
  }]);

  return Booklist;
}(_wepy2.default.component);

exports.default = Booklist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tsaXN0LmpzIl0sIm5hbWVzIjpbIkJvb2tsaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJtZXRob2RzIiwiY2xrIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMO0FBREEsSyxRQVNSQyxPLEdBQVU7QUFDTkMsU0FETSxlQUNGQyxJQURFLEVBQ0c7QUFDTEMsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWixFQUFpQixDQUFqQjtBQUNIO0FBSEssSzs7Ozs7NkJBSEQ7QUFDUEMsY0FBUUMsR0FBUixDQUFZLEtBQUtSLElBQWpCO0FBQ0Q7Ozs7RUFUbUMsZUFBS1MsUzs7a0JBQXRCWCxRIiwiZmlsZSI6ImJvb2tsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tsaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH1cbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAgIGNsayhpdGVtKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLDEpO1xuICAgICAgfVxuICB9XG59XG4iXX0=