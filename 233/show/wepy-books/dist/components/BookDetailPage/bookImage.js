'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bookImage = function (_wepy$component) {
    _inherits(bookImage, _wepy$component);

    function bookImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, bookImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = bookImage.__proto__ || Object.getPrototypeOf(bookImage)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            book: []
        }, _this.methods = {}, _this.events = {
            'bookData': function bookData(data) {
                _this.book = data;
                _this.$emit('loadComplete', true);
                console.log('图片加载完成');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(bookImage, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log('BookDetail-image');
        }
    }]);

    return bookImage;
}(_wepy2.default.component);

exports.default = bookImage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tJbWFnZS5qcyJdLCJuYW1lcyI6WyJib29rSW1hZ2UiLCJjb21wb25lbnRzIiwiZGF0YSIsImJvb2siLCJtZXRob2RzIiwiZXZlbnRzIiwiJGVtaXQiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUVqQkMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBREgsUyxRQUdQQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVM7QUFDTCx3QkFBWSxrQkFBQ0gsSUFBRCxFQUFVO0FBQ2xCLHNCQUFLQyxJQUFMLEdBQVlELElBQVo7QUFDQSxzQkFBS0ksS0FBTCxDQUFXLGNBQVgsRUFBMkIsSUFBM0I7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFMSSxTOzs7OztpQ0FPQTtBQUNMRCxvQkFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0g7Ozs7RUFuQmtDLGVBQUtDLFM7O2tCQUF2QlQsUyIsImZpbGUiOiJib29rSW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9va0ltYWdlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBib29rOiBbXVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgICAnYm9va0RhdGEnOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvb2sgPSBkYXRhXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xvYWRDb21wbGV0ZScsIHRydWUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflm77niYfliqDovb3lrozmiJAnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQm9va0RldGFpbC1pbWFnZScpXHJcbiAgICB9XHJcbn1cclxuIl19