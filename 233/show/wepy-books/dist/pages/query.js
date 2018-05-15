'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _search = require('./../components/queryPage/search.js');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Query = function (_wepy$page) {
    _inherits(Query, _wepy$page);

    function Query() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Query);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Query.__proto__ || Object.getPrototypeOf(Query)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '搜索',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.components = {
            search: _search2.default
        }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Query, [{
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onLoad',
        value: function onLoad() {
            console.log('query页面加载');
        }
    }]);

    return Query;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Query , 'pages/query'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwiY29uZmlnIiwiY29tcG9uZW50cyIsInNlYXJjaCIsImRhdGEiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMLHNDQUEwQixJQURyQjtBQUVMLHNDQUEwQixPQUZyQjtBQUdMLDRDQUFnQztBQUgzQixTLFFBTVRDLFUsR0FBYTtBQUNUQztBQURTLFMsUUFJYkMsSSxHQUFPLEUsUUFHUEMsTyxHQUFVLEU7Ozs7O2lDQUdELENBQ1I7OztpQ0FDUTtBQUNMQyxvQkFBUUMsR0FBUixDQUFZLFdBQVo7QUFDSDs7OztFQXJCOEIsZUFBS0MsSTs7a0JBQW5CUixLIiwiZmlsZSI6InF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9xdWVyeVBhZ2Uvc2VhcmNoJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn5pCc57SiJyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnI2ZmNzcwMCdcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIHNlYXJjaFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ56aG16Z2i5Yqg6L29JylcclxuICAgIH1cclxuXHJcbn1cclxuIl19