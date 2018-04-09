'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_wepy$component) {
    _inherits(Category, _wepy$component);

    function Category() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Category);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Category.__proto__ || Object.getPrototypeOf(Category)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            list: {
                type: Object,
                default: []
            },
            col: {
                type: [String, Number],
                default: 4
            }
        }, _this.computed = {
            style_width: function style_width() {
                var col = this.col;
                return 1 / col * 100 + '%';
            },
            style_height: function style_height() {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Category, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log(this.list);
        }
    }]);

    return Category;
}(_wepy2.default.component);

exports.default = Category;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJjb2wiLCJTdHJpbmciLCJOdW1iZXIiLCJjb21wdXRlZCIsInN0eWxlX3dpZHRoIiwic3R5bGVfaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQU07QUFDSkMsc0JBQU1DLE1BREY7QUFFSkMseUJBQVM7QUFGTCxhQURBO0FBS05DLGlCQUFLO0FBQ0RILHNCQUFLLENBQUNJLE1BQUQsRUFBUUMsTUFBUixDQURKO0FBRURILHlCQUFRO0FBRlA7QUFMQyxTLFFBYVJJLFEsR0FBVztBQUNQQyx1QkFETyx5QkFDTTtBQUNULG9CQUFNSixNQUFNLEtBQUtBLEdBQWpCO0FBQ0EsdUJBQVcsSUFBRUEsR0FBSCxHQUFRLEdBQWxCO0FBQ0gsYUFKTTtBQUtQSyx3QkFMTywwQkFLTyxDQUViO0FBUE0sUzs7Ozs7aUNBSEY7QUFDUEMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLWCxJQUFqQjtBQUNEOzs7O0VBYm1DLGVBQUtZLFM7O2tCQUF0QmQsUSIsImZpbGUiOiJjYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogW11cbiAgICB9LFxuICAgIGNvbDoge1xuICAgICAgICB0eXBlOltTdHJpbmcsTnVtYmVyXSxcbiAgICAgICAgZGVmYXVsdDo0XG4gICAgfVxuICB9O1xuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcbiAgfVxuICBjb21wdXRlZCA9IHtcbiAgICAgIHN0eWxlX3dpZHRoKCl7XG4gICAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2w7XG4gICAgICAgICAgcmV0dXJuIGAkeygxL2NvbCkqMTAwfSVgO1xuICAgICAgfSxcbiAgICAgIHN0eWxlX2hlaWdodCgpe1xuICAgICAgICAgIFxuICAgICAgfVxuICB9XG59XG4iXX0=