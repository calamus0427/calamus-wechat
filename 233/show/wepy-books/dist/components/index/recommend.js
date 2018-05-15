'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var recommend = function (_wepy$component) {
    _inherits(recommend, _wepy$component);

    function recommend() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, recommend);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = recommend.__proto__ || Object.getPrototypeOf(recommend)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            recommendBooks: []
        }, _this.methods = {
            gotodetail: function gotodetail(isbn, typeId, id) {
                console.log(isbn, typeId, id);
                _wepy2.default.navigateTo({
                    url: 'bookDetail?isbn=' + isbn + '&typeId=' + typeId + '&id=' + id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(recommend, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _recommend;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('index-recommend');
                                _context.prev = 1;
                                _context.next = 4;
                                return _wepy2.default.request({
                                    url: _config.api.common.recommend.url,
                                    method: _config.api.common.recommend.method,
                                    header: {
                                        'Content-Type': 'json'
                                    },
                                    dataType: 'json',
                                    data: {}
                                });

                            case 4:
                                _recommend = _context.sent;

                                this.recommendBooks = _recommend.data.books;
                                this.$emit('indexLoadComplete', true);
                                this.$apply();
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](1);

                                _wepy2.default.showModal({
                                    title: '提示',
                                    content: '\u83B7\u53D6\u6BCF\u65E5\u63A8\u8350\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165.'
                                });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 10]]);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return recommend;
}(_wepy2.default.component);

exports.default = recommend;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJyZWNvbW1lbmQiLCJkYXRhIiwicmVjb21tZW5kQm9va3MiLCJtZXRob2RzIiwiZ290b2RldGFpbCIsImlzYm4iLCJ0eXBlSWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVxdWVzdCIsImNvbW1vbiIsIm1ldGhvZCIsImhlYWRlciIsImRhdGFUeXBlIiwiYm9va3MiLCIkZW1pdCIsIiRhcHBseSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNqQkMsSSxHQUFPO0FBQ0hDLDRCQUFnQjtBQURiLFMsUUFHUEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxJQURMLEVBQ1dDLE1BRFgsRUFDbUJDLEVBRG5CLEVBQ3VCO0FBQ3pCQyx3QkFBUUMsR0FBUixDQUFZSixJQUFaLEVBQWtCQyxNQUFsQixFQUEwQkMsRUFBMUI7QUFDQSwrQkFBS0csVUFBTCxDQUFnQjtBQUNaQyx5QkFBSyxxQkFBcUJOLElBQXJCLEdBQTRCLFVBQTVCLEdBQXlDQyxNQUF6QyxHQUFrRCxNQUFsRCxHQUEyREM7QUFEcEQsaUJBQWhCO0FBR0g7QUFOSyxTOzs7Ozs7Ozs7Ozs7O0FBVU5DLHdDQUFRQyxHQUFSLENBQVksaUJBQVo7Ozt1Q0FHMEIsZUFBS0csT0FBTCxDQUFhO0FBQy9CRCx5Q0FBSyxZQUFJRSxNQUFKLENBQVdiLFNBQVgsQ0FBcUJXLEdBREs7QUFFL0JHLDRDQUFRLFlBQUlELE1BQUosQ0FBV2IsU0FBWCxDQUFxQmMsTUFGRTtBQUcvQkMsNENBQVE7QUFDSix3REFBZ0I7QUFEWixxQ0FIdUI7QUFNL0JDLDhDQUFVLE1BTnFCO0FBTy9CZiwwQ0FBTTtBQVB5QixpQ0FBYixDOzs7QUFBbEJELDBDOztBQVVKLHFDQUFLRSxjQUFMLEdBQXNCRixXQUFVQyxJQUFWLENBQWVnQixLQUFyQztBQUNBLHFDQUFLQyxLQUFMLENBQVcsbUJBQVgsRUFBZ0MsSUFBaEM7QUFDQSxxQ0FBS0MsTUFBTDs7Ozs7Ozs7QUFFQSwrQ0FBS0MsU0FBTCxDQUFlO0FBQ1hDLDJDQUFPLElBREk7QUFFWEM7QUFGVyxpQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9CMkIsZUFBS0MsUzs7a0JBQXZCdkIsUyIsImZpbGUiOiJyZWNvbW1lbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVjb21tZW5kIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICByZWNvbW1lbmRCb29rczogW11cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgZ290b2RldGFpbChpc2JuLCB0eXBlSWQsIGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzYm4sIHR5cGVJZCwgaWQpXHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdib29rRGV0YWlsP2lzYm49JyArIGlzYm4gKyAnJnR5cGVJZD0nICsgdHlwZUlkICsgJyZpZD0nICsgaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleC1yZWNvbW1lbmQnKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIOiOt+WPluavj+aXpeaOqOiNkFxyXG4gICAgICAgICAgICBsZXQgcmVjb21tZW5kID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLmNvbW1vbi5yZWNvbW1lbmQudXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29tbW9uLnJlY29tbWVuZC5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5yZWNvbW1lbmRCb29rcyA9IHJlY29tbWVuZC5kYXRhLmJvb2tzXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2luZGV4TG9hZENvbXBsZXRlJywgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDojrflj5bmr4/ml6XmjqjojZDlpLHotKXvvIzor7flhbPpl63ph43mlrDov5vlhaUuYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=