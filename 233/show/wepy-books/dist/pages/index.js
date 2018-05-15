'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../components/tab/tabPage/index.js');

var _index2 = _interopRequireDefault(_index);

var _classify = require('./../components/tab/tabPage/classify.js');

var _classify2 = _interopRequireDefault(_classify);

var _bagCar = require('./../components/tab/tabPage/bagCar.js');

var _bagCar2 = _interopRequireDefault(_bagCar);

var _me = require('./../components/tab/tabPage/me.js');

var _me2 = _interopRequireDefault(_me);

var _tabBar = require('./../components/tab/tabBar.js');

var _tabBar2 = _interopRequireDefault(_tabBar);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '求知微图书',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:active.sync": "currentTab" } }, _this.$events = {}, _this.components = {
            index: _index2.default,
            classify: _classify2.default,
            bagcar: _bagCar2.default,
            me: _me2.default,
            tab: _tabBar2.default
        }, _this.data = {
            currentTab: 0
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onShow',
        value: function onShow() {
            console.log('index show');
            this.$invoke('bagcar', 'onLoad');
            this.$invoke('me/userInfo', 'onLoad');
            this.$invoke('me/myRoom', 'onLoad');
        }
    }, {
        key: 'onLoad',
        value: function onLoad(params) {
            if (typeof params.tab !== 'undefined') {
                this.currentTab = params.tab;
            }
            console.log('index页面加载');
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW5kZXgiLCJjbGFzc2lmeSIsImJhZ2NhciIsIm1lIiwidGFiIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsIiRpbnZva2UiLCJwYXJhbXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMLHNDQUEwQixPQURyQjtBQUVMLHNDQUEwQixPQUZyQjtBQUdMLDRDQUFnQztBQUgzQixTLFFBTVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsWUFBeEMsRUFBUCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQyxrQ0FETTtBQUVOQyx3Q0FGTTtBQUdOQyxvQ0FITTtBQUlOQyw0QkFKTTtBQUtOQztBQUxNLFMsUUFRVkMsSSxHQUFPO0FBQ0hDLHdCQUFZO0FBRFQsUyxRQUlQQyxPLEdBQVUsRTs7Ozs7aUNBR0Q7QUFDTEMsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsaUJBQUtDLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLFFBQXZCO0FBQ0EsaUJBQUtBLE9BQUwsQ0FBYSxhQUFiLEVBQTRCLFFBQTVCO0FBQ0EsaUJBQUtBLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLFFBQTFCO0FBQ0g7OzsrQkFDTUMsTSxFQUFRO0FBQ1gsZ0JBQUksT0FBT0EsT0FBT1AsR0FBZCxLQUFzQixXQUExQixFQUF1QztBQUNuQyxxQkFBS0UsVUFBTCxHQUFrQkssT0FBT1AsR0FBekI7QUFDSDtBQUNESSxvQkFBUUMsR0FBUixDQUFZLFdBQVo7QUFDSDs7OztFQXBDOEIsZUFBS0csSTs7a0JBQW5CbEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgaW5kZXggZnJvbSAnLi4vY29tcG9uZW50cy90YWIvdGFiUGFnZS9pbmRleCdcclxuaW1wb3J0IGNsYXNzaWZ5IGZyb20gJy4uL2NvbXBvbmVudHMvdGFiL3RhYlBhZ2UvY2xhc3NpZnknXHJcbmltcG9ydCBiYWdjYXIgZnJvbSAnLi4vY29tcG9uZW50cy90YWIvdGFiUGFnZS9iYWdDYXInXHJcbmltcG9ydCBtZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYi90YWJQYWdlL21lJ1xyXG5pbXBvcnQgdGFiIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiL3RhYkJhcidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+axguefpeW+ruWbvuS5picsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyNmZjc3MDAnXHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWN0aXZlLnN5bmNcIjpcImN1cnJlbnRUYWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGluZGV4LFxyXG4gICAgICAgIGNsYXNzaWZ5LFxyXG4gICAgICAgIGJhZ2NhcixcclxuICAgICAgICBtZSxcclxuICAgICAgICB0YWJcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGN1cnJlbnRUYWI6IDBcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5kZXggc2hvdycpXHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdiYWdjYXInLCAnb25Mb2FkJylcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ21lL3VzZXJJbmZvJywgJ29uTG9hZCcpXHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdtZS9teVJvb20nLCAnb25Mb2FkJylcclxuICAgIH1cclxuICAgIG9uTG9hZChwYXJhbXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy50YWIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHBhcmFtcy50YWJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luZGV46aG16Z2i5Yqg6L29JylcclxuICAgIH1cclxuXHJcbn1cclxuIl19