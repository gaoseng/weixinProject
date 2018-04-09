'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = ['default', 'primary', 'warn'];

var User = function (_wepy$page) {
  _inherits(User, _wepy$page);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '用户',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#049BFF'
    }, _this.data = {
      defaultSize: 'default',
      primarySize: 'default',
      warnSize: 'default',
      disabled: false,
      plain: false,
      loading: false
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return User;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsidHlwZXMiLCJVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZGF0YSIsImRlZmF1bHRTaXplIiwicHJpbWFyeVNpemUiLCJ3YXJuU2l6ZSIsImRpc2FibGVkIiwicGxhaW4iLCJsb2FkaW5nIiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLE1BQXZCLENBQVo7O0lBQ3FCQyxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QjtBQUh2QixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxTQURSO0FBRUxDLG1CQUFhLFNBRlI7QUFHTEMsZ0JBQVUsU0FITDtBQUlMQyxnQkFBVSxLQUpMO0FBS0xDLGFBQU8sS0FMRjtBQU1MQyxlQUFTO0FBTkosSyxRQVNQQyxPLEdBQVUsRTs7OztFQWZzQixlQUFLQyxJOztrQkFBbEJiLEkiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG52YXIgdHlwZXMgPSBbJ2RlZmF1bHQnLCAncHJpbWFyeScsICd3YXJuJ11cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUqOaItycsXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzA0OUJGRidcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBkZWZhdWx0U2l6ZTogJ2RlZmF1bHQnLFxuICAgIHByaW1hcnlTaXplOiAnZGVmYXVsdCcsXG4gICAgd2FyblNpemU6ICdkZWZhdWx0JyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgcGxhaW46IGZhbHNlLFxuICAgIGxvYWRpbmc6IGZhbHNlXG4gIH07XG4gIFxuICBtZXRob2RzID0ge1xuICAgIFxuICB9O1xufVxuIl19