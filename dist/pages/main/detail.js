'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _demo = require('./../../mixins/demo.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
  _inherits(Detail, _wepy$page);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '图书详情'
    }, _this.data = {
      img_banner: '/images/swiper.png',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png',
      icon_shelf: '/images/tabbars/icon-shelf@2x.png',
      navigate: false,
      book: {
        id: '1825',
        name: '假如生活欺骗了你',
        author: '普希金',
        tags: ['诗歌', '普希金'],
        pubtime: '1825年',
        pubcompany: '俄国',
        image: '',
        images: _demo.funImages.slice().map(function (item) {
          return { image: item };
        }),
        stock: 1,
        exist: 0,
        desc: [{ type: 'text', value: '示例tip：下拉本页，随机改变状态~' }, { type: 'image', value: '/images/swiper.png' }, { type: 'text', value: '假如生活欺骗了你，' }, { type: 'text', value: '不要悲伤，不要心急！' }, { type: 'text', value: '忧郁的日子里须要镇静：' }, { type: 'text', value: '相信吧，快乐的日子将会来临！' }, { type: 'text', value: '心儿永远向往着未来；' }, { type: 'text', value: '现在却常是忧郁。' }, { type: 'text', value: '一切都是瞬息，一切都将会过去；' }, { type: 'text', value: '而那过去了的，就会成为亲切的怀恋。' }]
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Detail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/main/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ19iYW5uZXIiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiaWNvbl9zaGVsZiIsIm5hdmlnYXRlIiwiYm9vayIsImlkIiwibmFtZSIsImF1dGhvciIsInRhZ3MiLCJwdWJ0aW1lIiwicHViY29tcGFueSIsImltYWdlIiwiaW1hZ2VzIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwic3RvY2siLCJleGlzdCIsImRlc2MiLCJ0eXBlIiwidmFsdWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLG9CQURQO0FBRUxDLGlCQUFXLCtCQUZOO0FBR0xDLHdCQUFrQixzQ0FIYjtBQUlMQyxrQkFBWSxtQ0FKUDtBQUtMQyxnQkFBVSxLQUxMO0FBTUxDLFlBQU07QUFDSkMsWUFBSSxNQURBO0FBRUpDLGNBQU0sVUFGRjtBQUdKQyxnQkFBUSxLQUhKO0FBSUpDLGNBQU0sQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUpGO0FBS0pDLGlCQUFTLE9BTEw7QUFNSkMsb0JBQVksSUFOUjtBQU9KQyxlQUFPLEVBUEg7QUFRSkMsZ0JBQVEsZ0JBQVVDLEtBQVYsR0FBa0JDLEdBQWxCLENBQXNCLGdCQUFRO0FBQ3BDLGlCQUFPLEVBQUVILE9BQU9JLElBQVQsRUFBUDtBQUNELFNBRk8sQ0FSSjtBQVdKQyxlQUFPLENBWEg7QUFZSkMsZUFBTyxDQVpIO0FBYUpDLGNBQU0sQ0FDSixFQUFDQyxNQUFNLE1BQVAsRUFBZUMsT0FBTyxvQkFBdEIsRUFESSxFQUVKLEVBQUNELE1BQU0sT0FBUCxFQUFnQkMsT0FBTyxvQkFBdkIsRUFGSSxFQUdKLEVBQUNELE1BQU0sTUFBUCxFQUFlQyxPQUFPLFdBQXRCLEVBSEksRUFJSixFQUFDRCxNQUFNLE1BQVAsRUFBZUMsT0FBTyxZQUF0QixFQUpJLEVBS0osRUFBQ0QsTUFBTSxNQUFQLEVBQWVDLE9BQU8sYUFBdEIsRUFMSSxFQU1KLEVBQUNELE1BQU0sTUFBUCxFQUFlQyxPQUFPLGdCQUF0QixFQU5JLEVBT0osRUFBQ0QsTUFBTSxNQUFQLEVBQWVDLE9BQU8sWUFBdEIsRUFQSSxFQVFKLEVBQUNELE1BQU0sTUFBUCxFQUFlQyxPQUFPLFVBQXRCLEVBUkksRUFTSixFQUFDRCxNQUFNLE1BQVAsRUFBZUMsT0FBTyxpQkFBdEIsRUFUSSxFQVVKLEVBQUNELE1BQU0sTUFBUCxFQUFlQyxPQUFPLG1CQUF0QixFQVZJO0FBYkY7QUFORCxLOzs7O0VBSnlCLGVBQUtDLEk7O2tCQUFwQjFCLE0iLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgZnVuSW1hZ2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL2RlbW8nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflm77kuabor6bmg4UnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpbWdfYmFubmVyOiAnL2ltYWdlcy9zd2lwZXIucG5nJyxcbiAgICAgIGljb25fc3RhcjogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXJAMngucG5nJyxcbiAgICAgIGljb25fc3Rhcl9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyLWFjdGl2ZUAyeC5wbmcnLFxuICAgICAgaWNvbl9zaGVsZjogJy9pbWFnZXMvdGFiYmFycy9pY29uLXNoZWxmQDJ4LnBuZycsXG4gICAgICBuYXZpZ2F0ZTogZmFsc2UsXG4gICAgICBib29rOiB7XG4gICAgICAgIGlkOiAnMTgyNScsXG4gICAgICAgIG5hbWU6ICflgYflpoLnlJ/mtLvmrLrpqpfkuobkvaAnLFxuICAgICAgICBhdXRob3I6ICfmma7luIzph5EnLFxuICAgICAgICB0YWdzOiBbJ+ivl+atjCcsICfmma7luIzph5EnXSxcbiAgICAgICAgcHVidGltZTogJzE4MjXlubQnLFxuICAgICAgICBwdWJjb21wYW55OiAn5L+E5Zu9JyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBpbWFnZXM6IGZ1bkltYWdlcy5zbGljZSgpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4geyBpbWFnZTogaXRlbSB9XG4gICAgICAgIH0pLFxuICAgICAgICBzdG9jazogMSxcbiAgICAgICAgZXhpc3Q6IDAsXG4gICAgICAgIGRlc2M6IFtcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+ekuuS+i3RpcO+8muS4i+aLieacrOmhte+8jOmaj+acuuaUueWPmOeKtuaAgX4nfSxcbiAgICAgICAgICB7dHlwZTogJ2ltYWdlJywgdmFsdWU6ICcvaW1hZ2VzL3N3aXBlci5wbmcnfSxcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+WBh+WmgueUn+a0u+asuumql+S6huS9oO+8jCd9LFxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn5LiN6KaB5oKy5Lyk77yM5LiN6KaB5b+D5oCl77yBJ30sXG4gICAgICAgICAge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICflv6fpg4HnmoTml6XlrZDph4zpobvopoHplYfpnZnvvJonfSxcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+ebuOS/oeWQp++8jOW/q+S5kOeahOaXpeWtkOWwhuS8muadpeS4tO+8gSd9LFxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn5b+D5YS/5rC46L+c5ZCR5b6A552A5pyq5p2l77ybJ30sXG4gICAgICAgICAge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICfnjrDlnKjljbTluLjmmK/lv6fpg4HjgIInfSxcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+S4gOWIh+mDveaYr+eerOaBr++8jOS4gOWIh+mDveWwhuS8mui/h+WOu++8myd9LFxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn6ICM6YKj6L+H5Y675LqG55qE77yM5bCx5Lya5oiQ5Li65Lqy5YiH55qE5oCA5oGL44CCJ31cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbn1cbiJdfQ==