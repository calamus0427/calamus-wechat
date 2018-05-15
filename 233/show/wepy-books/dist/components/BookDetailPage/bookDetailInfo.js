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

var bookDetailInfo = function (_wepy$component) {
    _inherits(bookDetailInfo, _wepy$component);

    function bookDetailInfo() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, bookDetailInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = bookDetailInfo.__proto__ || Object.getPrototypeOf(bookDetailInfo)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            book: [],
            relevantBook: [],
            isShow: false,
            typeId: '',
            noteBook: [],
            noteShow: false

        }, _this.methods = {
            gotoBookList: function gotoBookList() {
                _wepy2.default.navigateTo({
                    url: 'bookList?typeId=' + this.typeId
                });
            },
            gotocatalog: function gotocatalog() {
                _wepy2.default.navigateTo({
                    url: 'catalog?isbn=' + this.book.isbn10
                });
            },
            gotoAuthor: function gotoAuthor() {
                _wepy2.default.navigateTo({
                    url: 'author?isbn=' + this.book.isbn10
                });
            }
        }, _this.events = {
            'bookData': function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book, id, typeId) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _this.book = book;

                                    if (typeId) {
                                        _context.next = 6;
                                        break;
                                    }

                                    _this.$emit('loadComplete', true);
                                    console.log('相关加载完成');
                                    _this.$apply();
                                    return _context.abrupt('return', false);

                                case 6:
                                    _context.prev = 6;
                                    _context.next = 9;
                                    return _this.getRelevantBook(typeId);

                                case 9:
                                    _context.next = 11;
                                    return _this.getNoteBook(book.id);

                                case 11:
                                    _this.$emit('loadComplete', true);
                                    _this.$apply();
                                    _context.next = 19;
                                    break;

                                case 15:
                                    _context.prev = 15;
                                    _context.t0 = _context['catch'](6);

                                    console.log(_context.t0);
                                    console.log('相关图书出错');

                                case 19:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2, [[6, 15]]);
                }));

                return function bookData(_x, _x2, _x3) {
                    return _ref2.apply(this, arguments);
                };
            }()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(bookDetailInfo, [{
        key: 'getRelevantBook',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(typeId) {
                var relevantBook;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.common.relevant.url + typeId,
                                    method: _config.api.common.relevant.method
                                });

                            case 2:
                                relevantBook = _context2.sent;

                                this.relevantBook = relevantBook.data;
                                this.typeId = typeId;
                                this.isShow = true;

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getRelevantBook(_x4) {
                return _ref3.apply(this, arguments);
            }

            return getRelevantBook;
        }()
    }, {
        key: 'getNoteBook',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _wepy2.default.request({
                                    url: 'https://api.douban.com/v2/book/' + id + '/annotations',
                                    header: {
                                        'Content-Type': 'json'
                                    }
                                });

                            case 2:
                                res = _context3.sent;

                                console.log(res);

                                if (!(res.data.annotations.length === 0)) {
                                    _context3.next = 8;
                                    break;
                                }

                                this.noteShow = false;
                                this.$apply();
                                return _context3.abrupt('return', false);

                            case 8:
                                this.noteBook = res.data.annotations;
                                this.noteShow = true;
                                this.$apply();

                            case 11:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getNoteBook(_x5) {
                return _ref4.apply(this, arguments);
            }

            return getNoteBook;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:

                                console.log('BookDetail-DetailInfo');

                            case 1:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function onLoad() {
                return _ref5.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return bookDetailInfo;
}(_wepy2.default.component);

exports.default = bookDetailInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tEZXRhaWxJbmZvLmpzIl0sIm5hbWVzIjpbImJvb2tEZXRhaWxJbmZvIiwiY29tcG9uZW50cyIsImRhdGEiLCJib29rIiwicmVsZXZhbnRCb29rIiwiaXNTaG93IiwidHlwZUlkIiwibm90ZUJvb2siLCJub3RlU2hvdyIsIm1ldGhvZHMiLCJnb3RvQm9va0xpc3QiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ290b2NhdGFsb2ciLCJpc2JuMTAiLCJnb3RvQXV0aG9yIiwiZXZlbnRzIiwiaWQiLCIkZW1pdCIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJnZXRSZWxldmFudEJvb2siLCJnZXROb3RlQm9vayIsInJlcXVlc3QiLCJjb21tb24iLCJyZWxldmFudCIsIm1ldGhvZCIsImhlYWRlciIsInJlcyIsImFubm90YXRpb25zIiwibGVuZ3RoIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsYzs7Ozs7Ozs7Ozs7Ozs7OzBNQUVqQkMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLGtCQUFNLEVBREg7QUFFSEMsMEJBQWMsRUFGWDtBQUdIQyxvQkFBUSxLQUhMO0FBSUhDLG9CQUFRLEVBSkw7QUFLSEMsc0JBQVUsRUFMUDtBQU1IQyxzQkFBVTs7QUFOUCxTLFFBU1BDLE8sR0FBVTtBQUNOQyx3QkFETSwwQkFDUztBQUNYLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDhDQUF3QixLQUFLTjtBQURqQixpQkFBaEI7QUFHSCxhQUxLO0FBTU5PLHVCQU5NLHlCQU1RO0FBQ1YsK0JBQUtGLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUssa0JBQWtCLEtBQUtULElBQUwsQ0FBVVc7QUFEckIsaUJBQWhCO0FBR0gsYUFWSztBQVdOQyxzQkFYTSx3QkFXTztBQUNULCtCQUFLSixVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLGlCQUFpQixLQUFLVCxJQUFMLENBQVVXO0FBRHBCLGlCQUFoQjtBQUdIO0FBZkssUyxRQWlCVkUsTSxHQUFTO0FBQ0w7QUFBQSxvRkFBWSxpQkFBT2IsSUFBUCxFQUFhYyxFQUFiLEVBQWlCWCxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1IsMENBQUtILElBQUwsR0FBWUEsSUFBWjs7QUFEUSx3Q0FFSEcsTUFGRztBQUFBO0FBQUE7QUFBQTs7QUFHSiwwQ0FBS1ksS0FBTCxDQUFXLGNBQVgsRUFBMkIsSUFBM0I7QUFDQUMsNENBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsMENBQUtDLE1BQUw7QUFMSSxxRUFNRyxLQU5IOztBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQVNFLE1BQUtDLGVBQUwsQ0FBcUJoQixNQUFyQixDQVRGOztBQUFBO0FBQUE7QUFBQSwyQ0FVRSxNQUFLaUIsV0FBTCxDQUFpQnBCLEtBQUtjLEVBQXRCLENBVkY7O0FBQUE7QUFXSiwwQ0FBS0MsS0FBTCxDQUFXLGNBQVgsRUFBMkIsSUFBM0I7QUFDQSwwQ0FBS0csTUFBTDtBQVpJO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWNKRiw0Q0FBUUMsR0FBUjtBQUNBRCw0Q0FBUUMsR0FBUixDQUFZLFFBQVo7O0FBZkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESyxTOzs7Ozs7a0dBb0JhZCxNOzs7Ozs7O3VDQUNPLGVBQUtrQixPQUFMLENBQWE7QUFDbENaLHlDQUFLLFlBQUlhLE1BQUosQ0FBV0MsUUFBWCxDQUFvQmQsR0FBcEIsR0FBMEJOLE1BREc7QUFFbENxQiw0Q0FBUSxZQUFJRixNQUFKLENBQVdDLFFBQVgsQ0FBb0JDO0FBRk0saUNBQWIsQzs7O0FBQXJCdkIsNEM7O0FBSUoscUNBQUtBLFlBQUwsR0FBb0JBLGFBQWFGLElBQWpDO0FBQ0EscUNBQUtJLE1BQUwsR0FBY0EsTUFBZDtBQUNBLHFDQUFLRCxNQUFMLEdBQWMsSUFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FFY1ksRTs7Ozs7Ozt1Q0FDRSxlQUFLTyxPQUFMLENBQWE7QUFDekJaLDZFQUF1Q0ssRUFBdkMsaUJBRHlCO0FBRXpCVyw0Q0FBUTtBQUNKLHdEQUFnQjtBQURaO0FBRmlCLGlDQUFiLEM7OztBQUFaQyxtQzs7QUFNSlYsd0NBQVFDLEdBQVIsQ0FBWVMsR0FBWjs7c0NBQ0lBLElBQUkzQixJQUFKLENBQVM0QixXQUFULENBQXFCQyxNQUFyQixLQUFnQyxDOzs7OztBQUNoQyxxQ0FBS3ZCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxxQ0FBS2EsTUFBTDtrRUFDTyxLOzs7QUFFWCxxQ0FBS2QsUUFBTCxHQUFnQnNCLElBQUkzQixJQUFKLENBQVM0QixXQUF6QjtBQUNBLHFDQUFLdEIsUUFBTCxHQUFnQixJQUFoQjtBQUNBLHFDQUFLYSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUFGLHdDQUFRQyxHQUFSLENBQVksdUJBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvRW9DLGVBQUtZLFM7O2tCQUE1QmhDLGMiLCJmaWxlIjoiYm9va0RldGFpbEluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib29rRGV0YWlsSW5mbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYm9vazogW10sXHJcbiAgICAgICAgcmVsZXZhbnRCb29rOiBbXSxcclxuICAgICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gICAgICAgIHR5cGVJZDogJycsXHJcbiAgICAgICAgbm90ZUJvb2s6IFtdLFxyXG4gICAgICAgIG5vdGVTaG93OiBmYWxzZVxyXG5cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgZ290b0Jvb2tMaXN0KCkge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgYm9va0xpc3Q/dHlwZUlkPSR7dGhpcy50eXBlSWR9YFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ290b2NhdGFsb2coKSB7XHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGBjYXRhbG9nP2lzYm49YCArIHRoaXMuYm9vay5pc2JuMTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvdG9BdXRob3IoKSB7XHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdhdXRob3I/aXNibj0nICsgdGhpcy5ib29rLmlzYm4xMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgICAnYm9va0RhdGEnOiBhc3luYyAoYm9vaywgaWQsIHR5cGVJZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvb2sgPSBib29rXHJcbiAgICAgICAgICAgIGlmICghdHlwZUlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2FkQ29tcGxldGUnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ebuOWFs+WKoOi9veWujOaIkCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRSZWxldmFudEJvb2sodHlwZUlkKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXROb3RlQm9vayhib29rLmlkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZENvbXBsZXRlJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ebuOWFs+WbvuS5puWHuumUmScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRSZWxldmFudEJvb2sodHlwZUlkKSB7XHJcbiAgICAgICAgbGV0IHJlbGV2YW50Qm9vayA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYXBpLmNvbW1vbi5yZWxldmFudC51cmwgKyB0eXBlSWQsXHJcbiAgICAgICAgICAgIG1ldGhvZDogYXBpLmNvbW1vbi5yZWxldmFudC5tZXRob2RcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmVsZXZhbnRCb29rID0gcmVsZXZhbnRCb29rLmRhdGFcclxuICAgICAgICB0aGlzLnR5cGVJZCA9IHR5cGVJZFxyXG4gICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Tm90ZUJvb2soaWQpIHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkuZG91YmFuLmNvbS92Mi9ib29rLyR7aWR9L2Fubm90YXRpb25zYCxcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuYW5ub3RhdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZVNob3cgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vdGVCb29rID0gcmVzLmRhdGEuYW5ub3RhdGlvbnNcclxuICAgICAgICB0aGlzLm5vdGVTaG93ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Jvb2tEZXRhaWwtRGV0YWlsSW5mbycpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==