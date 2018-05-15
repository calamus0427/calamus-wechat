'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

var _login = require('./../mixins/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import login from '../mixins/login'
var operation = function (_wepy$component) {
    _inherits(operation, _wepy$component);

    function operation() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, operation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = operation.__proto__ || Object.getPrototypeOf(operation)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            count: 0
        }, _this.methods = {
            gotoEditInfo: function gotoEditInfo() {
                _wepy2.default.navigateTo({
                    url: 'editInfo'
                });
            },
            gotoDongtai: function gotoDongtai() {
                _wepy2.default.navigateTo({
                    url: 'message'
                });
            },
            gotoChat: function gotoChat() {
                _wepy2.default.navigateTo({
                    url: 'chat'
                });
            }
        }, _this.watch = {
            count: function count(newValue, oldValue) {
                if (newValue > 0) {
                    var com = this.$root.$com.index.$com.search;

                    this.$invoke(com, 'RemindToShow');
                }
            }
        }, _this.mixins = [_login2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(operation, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.getStoreById();

                            case 2:
                                _context.next = 4;
                                return this.getSendBooks();

                            case 4:
                                _context.next = 6;
                                return this.getAllRecentOutDateBooks();

                            case 6:
                                _context.next = 8;
                                return this.getAllOutDateBooks();

                            case 8:
                                this.$apply();
                                console.log('me-operation');

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
        // 获取推送

    }, {
        key: 'getSendBooks',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var books, count;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.message.getSendBooks.url + '/' + this.userId,
                                    method: _config.api.message.getSendBooks.method
                                });

                            case 2:
                                books = _context2.sent;
                                count = void 0;

                                if (books.data.sendBookMsgCustoms === null) {
                                    count = 0;
                                } else {
                                    count = books.data.sendBookMsgCustoms.length;
                                }
                                this.count += count;
                                console.log('推送:', books);

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getSendBooks() {
                return _ref3.apply(this, arguments);
            }

            return getSendBooks;
        }()
        // 获取近七日内要归还的图书

    }, {
        key: 'getAllRecentOutDateBooks',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var books, count;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.message.getAllRecentOutDateBooks.url + '/' + this.userId,
                                    method: _config.api.message.getAllRecentOutDateBooks.method
                                });

                            case 2:
                                books = _context3.sent;
                                count = books.data.dateCount;

                                this.count += count;
                                console.log('归还:', books);

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getAllRecentOutDateBooks() {
                return _ref4.apply(this, arguments);
            }

            return getAllRecentOutDateBooks;
        }()
        // 获取已超期的图书

    }, {
        key: 'getAllOutDateBooks',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var books, count;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.message.getAllOutDateBooks.url + '/' + this.userId,
                                    method: _config.api.message.getAllOutDateBooks.method
                                });

                            case 2:
                                books = _context4.sent;
                                count = books.data.dateCount;

                                this.count += count;
                                console.log('超期:', books);

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getAllOutDateBooks() {
                return _ref5.apply(this, arguments);
            }

            return getAllOutDateBooks;
        }()
    }]);

    return operation;
}(_wepy2.default.component);

exports.default = operation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJvcGVyYXRpb24iLCJkYXRhIiwiY291bnQiLCJtZXRob2RzIiwiZ290b0VkaXRJbmZvIiwibmF2aWdhdGVUbyIsInVybCIsImdvdG9Eb25ndGFpIiwiZ290b0NoYXQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJjb20iLCIkcm9vdCIsIiRjb20iLCJpbmRleCIsInNlYXJjaCIsIiRpbnZva2UiLCJtaXhpbnMiLCJnZXRTdG9yZUJ5SWQiLCJnZXRTZW5kQm9va3MiLCJnZXRBbGxSZWNlbnRPdXREYXRlQm9va3MiLCJnZXRBbGxPdXREYXRlQm9va3MiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJ1c2VySWQiLCJtZXRob2QiLCJib29rcyIsInNlbmRCb29rTXNnQ3VzdG9tcyIsImxlbmd0aCIsImRhdGVDb3VudCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFFakJDLEksR0FBTztBQUNIQyxtQkFBTztBQURKLFMsUUFHUEMsTyxHQUFVO0FBQ05DLHdCQURNLDBCQUNTO0FBQ1gsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUs7QUFETyxpQkFBaEI7QUFHSCxhQUxLO0FBTU5DLHVCQU5NLHlCQU1RO0FBQ1YsK0JBQUtGLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUs7QUFETyxpQkFBaEI7QUFHSCxhQVZLO0FBV05FLG9CQVhNLHNCQVdLO0FBQ1AsK0JBQUtILFVBQUwsQ0FBZ0I7QUFDWkM7QUFEWSxpQkFBaEI7QUFHSDtBQWZLLFMsUUFpQlZHLEssR0FBUTtBQUNKUCxpQkFESSxpQkFDRVEsUUFERixFQUNZQyxRQURaLEVBQ3NCO0FBQ3RCLG9CQUFJRCxXQUFXLENBQWYsRUFBa0I7QUFDZCx3QkFBSUUsTUFBTSxLQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEtBQWhCLENBQXNCRCxJQUF0QixDQUEyQkUsTUFBckM7O0FBRUEseUJBQUtDLE9BQUwsQ0FBYUwsR0FBYixFQUFrQixjQUFsQjtBQUNIO0FBQ0o7QUFQRyxTLFFBU1JNLE0sR0FBUyxpQjs7Ozs7Ozs7Ozs7O3VDQUVDLEtBQUtDLFlBQUwsRTs7Ozt1Q0FDQSxLQUFLQyxZQUFMLEU7Ozs7dUNBQ0EsS0FBS0Msd0JBQUwsRTs7Ozt1Q0FDQSxLQUFLQyxrQkFBTCxFOzs7QUFDTixxQ0FBS0MsTUFBTDtBQUNBQyx3Q0FBUUMsR0FBUixDQUFZLGNBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSjs7Ozs7Ozs7Ozs7O3VDQUVzQixlQUFLQyxPQUFMLENBQWE7QUFDM0JwQix5Q0FBUSxZQUFJcUIsT0FBSixDQUFZUCxZQUFaLENBQXlCZCxHQUFqQyxTQUF3QyxLQUFLc0IsTUFEbEI7QUFFM0JDLDRDQUFRLFlBQUlGLE9BQUosQ0FBWVAsWUFBWixDQUF5QlM7QUFGTixpQ0FBYixDOzs7QUFBZEMscUM7QUFJQTVCLHFDOztBQUNKLG9DQUFJNEIsTUFBTTdCLElBQU4sQ0FBVzhCLGtCQUFYLEtBQWtDLElBQXRDLEVBQTRDO0FBQ3hDN0IsNENBQVEsQ0FBUjtBQUNILGlDQUZELE1BRU87QUFDSEEsNENBQVE0QixNQUFNN0IsSUFBTixDQUFXOEIsa0JBQVgsQ0FBOEJDLE1BQXRDO0FBQ0g7QUFDRCxxQ0FBSzlCLEtBQUwsSUFBY0EsS0FBZDtBQUNBc0Isd0NBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CSyxLQUFuQjs7Ozs7Ozs7Ozs7Ozs7OztBQUdKOzs7Ozs7Ozs7Ozs7dUNBRXNCLGVBQUtKLE9BQUwsQ0FBYTtBQUMzQnBCLHlDQUFRLFlBQUlxQixPQUFKLENBQVlOLHdCQUFaLENBQXFDZixHQUE3QyxTQUFvRCxLQUFLc0IsTUFEOUI7QUFFM0JDLDRDQUFRLFlBQUlGLE9BQUosQ0FBWU4sd0JBQVosQ0FBcUNRO0FBRmxCLGlDQUFiLEM7OztBQUFkQyxxQztBQUlBNUIscUMsR0FBUTRCLE1BQU03QixJQUFOLENBQVdnQyxTOztBQUN2QixxQ0FBSy9CLEtBQUwsSUFBY0EsS0FBZDtBQUNBc0Isd0NBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CSyxLQUFuQjs7Ozs7Ozs7Ozs7Ozs7OztBQUVKOzs7Ozs7Ozs7Ozs7dUNBRXNCLGVBQUtKLE9BQUwsQ0FBYTtBQUMzQnBCLHlDQUFRLFlBQUlxQixPQUFKLENBQVlMLGtCQUFaLENBQStCaEIsR0FBdkMsU0FBOEMsS0FBS3NCLE1BRHhCO0FBRTNCQyw0Q0FBUSxZQUFJRixPQUFKLENBQVlMLGtCQUFaLENBQStCTztBQUZaLGlDQUFiLEM7OztBQUFkQyxxQztBQUlBNUIscUMsR0FBUTRCLE1BQU03QixJQUFOLENBQVdnQyxTOztBQUN2QixxQ0FBSy9CLEtBQUwsSUFBY0EsS0FBZDtBQUNBc0Isd0NBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CSyxLQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFFK0IsZUFBS0ksUzs7a0JBQXZCbEMsUyIsImZpbGUiOiJvcGVyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vbWl4aW5zL2xvZ2luJ1xyXG4vLyBpbXBvcnQgbG9naW4gZnJvbSAnLi4vbWl4aW5zL2xvZ2luJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvcGVyYXRpb24gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBjb3VudDogMFxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBnb3RvRWRpdEluZm8oKSB7XHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdlZGl0SW5mbydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvdG9Eb25ndGFpKCkge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnbWVzc2FnZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvdG9DaGF0KCkge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgY2hhdGBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4gICAgd2F0Y2ggPSB7XHJcbiAgICAgICAgY291bnQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb20gPSB0aGlzLiRyb290LiRjb20uaW5kZXguJGNvbS5zZWFyY2hcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoY29tLCAnUmVtaW5kVG9TaG93JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1peGlucyA9IFtsb2dpbl1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldFN0b3JlQnlJZCgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRTZW5kQm9va3MoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUmVjZW50T3V0RGF0ZUJvb2tzKClcclxuICAgICAgICBhd2FpdCB0aGlzLmdldEFsbE91dERhdGVCb29rcygpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZS1vcGVyYXRpb24nKVxyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W5o6o6YCBXHJcbiAgICBhc3luYyBnZXRTZW5kQm9va3MoKSB7XHJcbiAgICAgICAgbGV0IGJvb2tzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBgJHthcGkubWVzc2FnZS5nZXRTZW5kQm9va3MudXJsfS8ke3RoaXMudXNlcklkfWAsXHJcbiAgICAgICAgICAgIG1ldGhvZDogYXBpLm1lc3NhZ2UuZ2V0U2VuZEJvb2tzLm1ldGhvZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGNvdW50XHJcbiAgICAgICAgaWYgKGJvb2tzLmRhdGEuc2VuZEJvb2tNc2dDdXN0b21zID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gYm9va3MuZGF0YS5zZW5kQm9va01zZ0N1c3RvbXMubGVuZ3RoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gY291bnRcclxuICAgICAgICBjb25zb2xlLmxvZygn5o6o6YCBOicsIGJvb2tzKVxyXG5cclxuICAgIH1cclxuICAgIC8vIOiOt+WPlui/keS4g+aXpeWGheimgeW9kui/mOeahOWbvuS5plxyXG4gICAgYXN5bmMgZ2V0QWxsUmVjZW50T3V0RGF0ZUJvb2tzKCkge1xyXG4gICAgICAgIGxldCBib29rcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYCR7YXBpLm1lc3NhZ2UuZ2V0QWxsUmVjZW50T3V0RGF0ZUJvb2tzLnVybH0vJHt0aGlzLnVzZXJJZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGFwaS5tZXNzYWdlLmdldEFsbFJlY2VudE91dERhdGVCb29rcy5tZXRob2RcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBjb3VudCA9IGJvb2tzLmRhdGEuZGF0ZUNvdW50XHJcbiAgICAgICAgdGhpcy5jb3VudCArPSBjb3VudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCflvZLov5g6JywgYm9va3MpXHJcbiAgICB9XHJcbiAgICAvLyDojrflj5blt7LotoXmnJ/nmoTlm77kuaZcclxuICAgIGFzeW5jIGdldEFsbE91dERhdGVCb29rcygpIHtcclxuICAgICAgICBsZXQgYm9va3MgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAke2FwaS5tZXNzYWdlLmdldEFsbE91dERhdGVCb29rcy51cmx9LyR7dGhpcy51c2VySWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBhcGkubWVzc2FnZS5nZXRBbGxPdXREYXRlQm9va3MubWV0aG9kXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgY291bnQgPSBib29rcy5kYXRhLmRhdGVDb3VudFxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gY291bnRcclxuICAgICAgICBjb25zb2xlLmxvZygn6LaF5pyfOicsIGJvb2tzKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==