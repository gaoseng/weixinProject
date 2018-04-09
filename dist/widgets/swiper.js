'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_wepy$component) {
  _inherits(Swiper, _wepy$component);

  function Swiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Object,
        default: []
      }
    }, _this.data = {
      autoplay: true,
      interval: 1000,
      circular: true,
      indicatorDots: true,
      indicatorColor: 'rgba(255, 255, 255, 0.6)',
      indicatorActiveColor: 'rgba(255, 255, 255, 1)'
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImRhdGEiLCJhdXRvcGxheSIsImludGVydmFsIiwiY2lyY3VsYXIiLCJpbmRpY2F0b3JEb3RzIiwiaW5kaWNhdG9yQ29sb3IiLCJpbmRpY2F0b3JBY3RpdmVDb2xvciIsImNvbXB1dGVkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTO0FBRkw7QUFEQSxLLFFBTVJDLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLGdCQUFVLElBRkw7QUFHTEMsZ0JBQVUsSUFITDtBQUlMQyxxQkFBYyxJQUpUO0FBS0xDLHNCQUFnQiwwQkFMWDtBQU1MQyw0QkFBc0I7QUFOakIsSyxRQVFQQyxRLEdBQVcsRTs7OztFQWZ1QixlQUFLQyxTOztrQkFBcEJkLE0iLCJmaWxlIjoic3dpcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMTAwMCxcbiAgICBjaXJjdWxhcjogdHJ1ZSxcbiAgICBpbmRpY2F0b3JEb3RzOnRydWUsXG4gICAgaW5kaWNhdG9yQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKSdcbiAgfTtcbiAgY29tcHV0ZWQgPSB7XG4gIH07XG4gIFxufVxuIl19