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

var search = function (_wepy$component) {
    _inherits(search, _wepy$component);

    function search() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search.__proto__ || Object.getPrototypeOf(search)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            RemindShow: false
        }, _this.methods = {
            gotoquery: function gotoquery() {
                this.$root.$navigate({
                    url: 'query'
                });
            },
            saoyisao: function saoyisao() {
                wx.scanCode({
                    success: function success(res) {
                        wx.navigateTo({
                            url: 'bookDetail?isbn=' + res.result
                        });
                    }
                });
            },
            ReminToHide: function ReminToHide() {
                this.RemindShow = false;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(search, [{
        key: 'onLoad',
        value: function onLoad() {
            this.$emit('indexLoadComplete', true);
            console.log('index-search');
        }
    }, {
        key: 'RemindToShow',
        value: function RemindToShow() {
            this.RemindShow = true;
            this.$apply();
        }
    }]);

    return search;
}(_wepy2.default.component);

exports.default = search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJkYXRhIiwiUmVtaW5kU2hvdyIsIm1ldGhvZHMiLCJnb3RvcXVlcnkiLCIkcm9vdCIsIiRuYXZpZ2F0ZSIsInVybCIsInNhb3lpc2FvIiwid3giLCJzY2FuQ29kZSIsInN1Y2Nlc3MiLCJyZXMiLCJuYXZpZ2F0ZVRvIiwicmVzdWx0IiwiUmVtaW5Ub0hpZGUiLCIkYXBwbHkiLCIkZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBRWpCQyxJLEdBQU87QUFDSEMsd0JBQVk7QUFEVCxTLFFBR1BDLE8sR0FBVTtBQUNOQyxxQkFETSx1QkFDTTtBQUNSLHFCQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUI7QUFDakJDLHlCQUFLO0FBRFksaUJBQXJCO0FBR0gsYUFMSztBQU1OQyxvQkFOTSxzQkFNSztBQUNQQyxtQkFBR0MsUUFBSCxDQUFZO0FBQ1JDLDZCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDZEgsMkJBQUdJLFVBQUgsQ0FBYztBQUNWTixpQ0FBSyxxQkFBcUJLLElBQUlFO0FBRHBCLHlCQUFkO0FBR0g7QUFMTyxpQkFBWjtBQU9ILGFBZEs7QUFlTkMsdUJBZk0seUJBZVE7QUFDVixxQkFBS2IsVUFBTCxHQUFrQixLQUFsQjtBQUNBLHFCQUFLYyxNQUFMO0FBQ0g7QUFsQkssUzs7Ozs7aUNBcUJEO0FBQ0wsaUJBQUtDLEtBQUwsQ0FBVyxtQkFBWCxFQUFnQyxJQUFoQztBQUNBQyxvQkFBUUMsR0FBUixDQUFZLGNBQVo7QUFDSDs7O3VDQUNjO0FBQ1gsaUJBQUtqQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsaUJBQUtjLE1BQUw7QUFDSDs7OztFQWpDK0IsZUFBS0ksUzs7a0JBQXBCcEIsTSIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgUmVtaW5kU2hvdzogZmFsc2VcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgZ290b3F1ZXJ5KCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb290LiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdxdWVyeSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNhb3lpc2FvKCkge1xyXG4gICAgICAgICAgICB3eC5zY2FuQ29kZSh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2Jvb2tEZXRhaWw/aXNibj0nICsgcmVzLnJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZW1pblRvSGlkZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5SZW1pbmRTaG93ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5kZXhMb2FkQ29tcGxldGUnLCB0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleC1zZWFyY2gnKVxyXG4gICAgfVxyXG4gICAgUmVtaW5kVG9TaG93KCkge1xyXG4gICAgICAgIHRoaXMuUmVtaW5kU2hvdyA9IHRydWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==