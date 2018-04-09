'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _demo = require('./../mixins/demo.js');

var _searchBar = require('./../widgets/search-bar.js');

var _searchBar2 = _interopRequireDefault(_searchBar);

var _swiper = require('./../widgets/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _category = require('./../components/index-component/category.js');

var _category2 = _interopRequireDefault(_category);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _booklist = require('./../widgets/booklist.js');

var _booklist2 = _interopRequireDefault(_booklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_test2.default], _this.config = {
      navigationBarTitleText: '首页',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#049BFF'
    }, _this.$repeat = {}, _this.$props = { "SearchBar": { "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText" }, "Swiper": { "v-bind:list.sync": "swipers" }, "Category": { "v-bind:list.sync": "categorys", "col": "4" }, "Booklist": { "v-bind:list.sync": "booklists" } }, _this.$events = {}, _this.components = {
      SearchBar: _searchBar2.default,
      Swiper: _swiper2.default,
      Category: _category2.default,
      Booklist: _booklist2.default
    }, _this.data = {
      searchText: 'book',
      swipers: [
      // 占位图，防止请求错误无图显示
      { image: '/images/swiper.png' }],
      categorys: [{ title: '今', image: _demo.funImages[0] }, { title: '晚', image: _demo.funImages[1] }, { title: '吃', image: _demo.funImages[2] }, { title: '鸡', image: _demo.funImages[3] }],
      booklists: [{ id: 0, title: '', image: _demo.booklistImages[0] }, { id: 1, title: '', image: _demo.booklistImages[1] }, { id: 2, title: '', image: _demo.booklistImages[2] }, { id: 3, title: '', image: _demo.booklistImages[3] }, { id: 4, title: '', image: _demo.booklistImages[4] }, { id: 5, title: '', image: _demo.booklistImages[5] }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      console.log('--------下拉刷新-------');
      // wx.hideNavigationBarLoading() //完成停止加载
      setTimeout(function () {
        wx.stopPullDownRefresh(); //停止下拉刷新
      }, 1000);
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      // 处理轮播图
      this.swipers.push({ image: '/images/swiper.png' });
      this.$apply();
      console.log(this);
      this.test();
    }
  }, {
    key: 'test',
    value: function test() {
      // this.tap();
      console.log(this);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwibWl4aW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2VhcmNoQmFyIiwiU3dpcGVyIiwiQ2F0ZWdvcnkiLCJCb29rbGlzdCIsImRhdGEiLCJzZWFyY2hUZXh0Iiwic3dpcGVycyIsImltYWdlIiwiY2F0ZWdvcnlzIiwidGl0bGUiLCJib29rbGlzdHMiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Iiwid3giLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicHVzaCIsIiRhcHBseSIsInRlc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsZ0IsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCO0FBSHZCLEssUUFZVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDJCQUEwQixZQUE3QyxFQUFiLEVBQXdFLFVBQVMsRUFBQyxvQkFBbUIsU0FBcEIsRUFBakYsRUFBZ0gsWUFBVyxFQUFDLG9CQUFtQixXQUFwQixFQUFnQyxPQUFNLEdBQXRDLEVBQTNILEVBQXNLLFlBQVcsRUFBQyxvQkFBbUIsV0FBcEIsRUFBakwsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVEMsb0NBRFM7QUFFVEMsOEJBRlM7QUFHVEMsa0NBSFM7QUFJVEM7QUFKUyxLLFFBTVZDLEksR0FBTztBQUNMQyxrQkFBWSxNQURQO0FBRUxDLGVBQVM7QUFDUDtBQUNBLFFBQUNDLE9BQU8sb0JBQVIsRUFGTyxDQUZKO0FBT0xDLGlCQUFXLENBQ1QsRUFBQ0MsT0FBTyxHQUFSLEVBQWFGLE9BQU8sZ0JBQVUsQ0FBVixDQUFwQixFQURTLEVBRVQsRUFBQ0UsT0FBTyxHQUFSLEVBQWFGLE9BQU8sZ0JBQVUsQ0FBVixDQUFwQixFQUZTLEVBR1QsRUFBQ0UsT0FBTyxHQUFSLEVBQWFGLE9BQU8sZ0JBQVUsQ0FBVixDQUFwQixFQUhTLEVBSVQsRUFBQ0UsT0FBTyxHQUFSLEVBQWFGLE9BQU8sZ0JBQVUsQ0FBVixDQUFwQixFQUpTLENBUE47QUFhTEcsaUJBQVcsQ0FDVCxFQUFDQyxJQUFHLENBQUosRUFBTUYsT0FBTSxFQUFaLEVBQWVGLE9BQU0scUJBQWUsQ0FBZixDQUFyQixFQURTLEVBRVQsRUFBQ0ksSUFBRyxDQUFKLEVBQU1GLE9BQU0sRUFBWixFQUFlRixPQUFNLHFCQUFlLENBQWYsQ0FBckIsRUFGUyxFQUdULEVBQUNJLElBQUcsQ0FBSixFQUFNRixPQUFNLEVBQVosRUFBZUYsT0FBTSxxQkFBZSxDQUFmLENBQXJCLEVBSFMsRUFJVCxFQUFDSSxJQUFHLENBQUosRUFBTUYsT0FBTSxFQUFaLEVBQWVGLE9BQU0scUJBQWUsQ0FBZixDQUFyQixFQUpTLEVBS1QsRUFBQ0ksSUFBRyxDQUFKLEVBQU1GLE9BQU0sRUFBWixFQUFlRixPQUFNLHFCQUFlLENBQWYsQ0FBckIsRUFMUyxFQU1ULEVBQUNJLElBQUcsQ0FBSixFQUFNRixPQUFNLEVBQVosRUFBZUYsT0FBTSxxQkFBZSxDQUFmLENBQXJCLEVBTlM7QUFiTixLOzs7Ozt3Q0FoQlk7QUFDZkssY0FBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0Y7QUFDTUMsaUJBQVcsWUFBTTtBQUNmQyxXQUFHQyxtQkFBSCxHQURlLENBQ1U7QUFDMUIsT0FGRCxFQUVHLElBRkg7QUFHUDs7OzhCQWlDUTtBQUNQO0FBQ0EsV0FBS1YsT0FBTCxDQUFhVyxJQUFiLENBQWtCLEVBQUNWLE9BQU8sb0JBQVIsRUFBbEI7QUFDQSxXQUFLVyxNQUFMO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsV0FBS00sSUFBTDtBQUNEOzs7MkJBQ0s7QUFDSjtBQUNBUCxjQUFRQyxHQUFSLENBQVksSUFBWjtBQUNEOzs7O0VBeERnQyxlQUFLTyxJOztrQkFBbkI5QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGZ1bkltYWdlcyxib29rbGlzdEltYWdlcyB9IGZyb20gJy4uL21peGlucy9kZW1vJ1xuICBpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL3dpZGdldHMvc2VhcmNoLWJhcidcbiAgaW1wb3J0IFN3aXBlciBmcm9tICcuLi93aWRnZXRzL3N3aXBlcidcbiAgaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtY29tcG9uZW50L2NhdGVnb3J5J1xuICBpbXBvcnQgdGVzdCBmcm9tICcuLi9taXhpbnMvdGVzdCdcbiAgaW1wb3J0IEJvb2tsaXN0IGZyb20gJy4uL3dpZGdldHMvYm9va2xpc3QnXG4gIFxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW3Rlc3RdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtScsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwNDlCRkYnXG4gICAgfVxuICAgIG9uUHVsbERvd25SZWZyZXNoKCl7XG4gICAgICDjgIDjgIBjb25zb2xlLmxvZygnLS0tLS0tLS3kuIvmi4nliLfmlrAtLS0tLS0tJylcbiAgICAgIC8vIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpIC8v5a6M5oiQ5YGc5q2i5Yqg6L29XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpIC8v5YGc5q2i5LiL5ouJ5Yi35pawXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNlYXJjaEJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifSxcIlN3aXBlclwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcInN3aXBlcnNcIn0sXCJDYXRlZ29yeVwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcImNhdGVnb3J5c1wiLFwiY29sXCI6XCI0XCJ9LFwiQm9va2xpc3RcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJib29rbGlzdHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICBTZWFyY2hCYXIsXG4gICAgIFN3aXBlcixcbiAgICAgQ2F0ZWdvcnksXG4gICAgIEJvb2tsaXN0XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzZWFyY2hUZXh0OiAnYm9vaycsXG4gICAgICBzd2lwZXJzOiBbXG4gICAgICAgIC8vIOWNoOS9jeWbvu+8jOmYsuatouivt+axgumUmeivr+aXoOWbvuaYvuekulxuICAgICAgICB7aW1hZ2U6ICcvaW1hZ2VzL3N3aXBlci5wbmcnfSxcbiAgICAgICAgLy8ge2ltYWdlOiAnL2ltYWdlcy9zd2lwZXIucG5nJ31cbiAgICAgIF0sXG4gICAgICBjYXRlZ29yeXM6IFtcbiAgICAgICAge3RpdGxlOiAn5LuKJywgaW1hZ2U6IGZ1bkltYWdlc1swXX0sXG4gICAgICAgIHt0aXRsZTogJ+aZmicsIGltYWdlOiBmdW5JbWFnZXNbMV19LFxuICAgICAgICB7dGl0bGU6ICflkIMnLCBpbWFnZTogZnVuSW1hZ2VzWzJdfSxcbiAgICAgICAge3RpdGxlOiAn6bihJywgaW1hZ2U6IGZ1bkltYWdlc1szXX1cbiAgICAgIF0sXG4gICAgICBib29rbGlzdHM6IFtcbiAgICAgICAge2lkOjAsdGl0bGU6JycsaW1hZ2U6Ym9va2xpc3RJbWFnZXNbMF19LFxuICAgICAgICB7aWQ6MSx0aXRsZTonJyxpbWFnZTpib29rbGlzdEltYWdlc1sxXX0sXG4gICAgICAgIHtpZDoyLHRpdGxlOicnLGltYWdlOmJvb2tsaXN0SW1hZ2VzWzJdfSxcbiAgICAgICAge2lkOjMsdGl0bGU6JycsaW1hZ2U6Ym9va2xpc3RJbWFnZXNbM119LFxuICAgICAgICB7aWQ6NCx0aXRsZTonJyxpbWFnZTpib29rbGlzdEltYWdlc1s0XX0sXG4gICAgICAgIHtpZDo1LHRpdGxlOicnLGltYWdlOmJvb2tsaXN0SW1hZ2VzWzVdfSxcbiAgICAgICAgXG4gICAgICBdXG4gICAgfVxuICAgIG9uUmVhZHkoKXtcbiAgICAgIC8vIOWkhOeQhui9ruaSreWbvlxuICAgICAgdGhpcy5zd2lwZXJzLnB1c2goe2ltYWdlOiAnL2ltYWdlcy9zd2lwZXIucG5nJ30pO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICB0aGlzLnRlc3QoKTtcbiAgICB9XG4gICAgdGVzdCgpe1xuICAgICAgLy8gdGhpcy50YXAoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH1cblxuICAgIFxuICB9XG4iXX0=