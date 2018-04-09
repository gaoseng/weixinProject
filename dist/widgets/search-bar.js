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

var SearchBar = function (_wepy$component) {
  _inherits(SearchBar, _wepy$component);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      placeholder: {
        type: String,
        default: '搜索'
      }
    }, _this.data = {
      inputShowed: false,
      inputVal: ''
    }, _this.computed = {
      computedPlaceholder: function computedPlaceholder() {
        return this.inputVal || this.placeholder;
      }
    }, _this.methods = {
      inputTyping: function inputTyping(e) {
        console.log(e);
        this.inputVal = e.detail.value;
      },
      clearInput: function clearInput() {
        this.inputVal = '';
        console.log(this.inputVal);
        this.$apply();
      },
      showInput: function showInput(isShow) {
        this.inputShowed = isShow === 'true';
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1iYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJjb21wdXRlZCIsImNvbXB1dGVkUGxhY2Vob2xkZXIiLCJtZXRob2RzIiwiaW5wdXRUeXBpbmciLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiY2xlYXJJbnB1dCIsIiRhcHBseSIsInNob3dJbnB1dCIsImlzU2hvdyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLG1CQUFhO0FBQ1hDLGNBQU1DLE1BREs7QUFFWEMsaUJBQVM7QUFGRTtBQURQLEssUUFPUkMsSSxHQUFPO0FBQ0xDLG1CQUFhLEtBRFI7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBS1BDLFEsR0FBVztBQUNUQyx5QkFEUyxpQ0FDYTtBQUNwQixlQUFPLEtBQUtGLFFBQUwsSUFBaUIsS0FBS04sV0FBN0I7QUFDRDtBQUhRLEssUUFLWFMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxDQURKLEVBQ007QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLGFBQUtMLFFBQUwsR0FBZ0JLLEVBQUVHLE1BQUYsQ0FBU0MsS0FBekI7QUFFRCxPQUxPO0FBTVJDLGdCQU5RLHdCQU1JO0FBQ1YsYUFBS1YsUUFBTCxHQUFnQixFQUFoQjtBQUNBTSxnQkFBUUMsR0FBUixDQUFZLEtBQUtQLFFBQWpCO0FBQ0EsYUFBS1csTUFBTDtBQUNELE9BVk87QUFXUkMsZUFYUSxxQkFXRUMsTUFYRixFQVdTO0FBQ2YsYUFBS2QsV0FBTCxHQUFtQmMsV0FBVyxNQUE5QjtBQUNBLGFBQUtGLE1BQUw7QUFDRDtBQWRPLEs7Ozs7RUFsQjJCLGVBQUtHLFM7O2tCQUF2QnRCLFMiLCJmaWxlIjoic2VhcmNoLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aQnOe0oidcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5wdXRTaG93ZWQ6IGZhbHNlLFxuICAgICAgaW5wdXRWYWw6ICcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBjb21wdXRlZFBsYWNlaG9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFZhbCB8fCB0aGlzLnBsYWNlaG9sZGVyXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBpbnB1dFR5cGluZyhlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuaW5wdXRWYWwgPSBlLmRldGFpbC52YWx1ZVxuXG4gICAgICB9LFxuICAgICAgY2xlYXJJbnB1dCgpe1xuICAgICAgICB0aGlzLmlucHV0VmFsID0gJydcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dFZhbClcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHNob3dJbnB1dChpc1Nob3cpe1xuICAgICAgICB0aGlzLmlucHV0U2hvd2VkID0gaXNTaG93ID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFxuICB9XG4iXX0=