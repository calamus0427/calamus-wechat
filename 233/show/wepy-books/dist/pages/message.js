'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _login = require('./../components/mixins/login.js');

var _login2 = _interopRequireDefault(_login);

var _load = require('./../components/load.js');

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collect = function (_wepy$page) {
    _inherits(Collect, _wepy$page);

    function Collect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Collect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collect.__proto__ || Object.getPrototypeOf(Collect)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '我的消息',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.$repeat = {}, _this.$props = { "load": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
            load: _load2.default
        }, _this.computed = {
            show: function show() {
                return !this.state.send && !this.state.recent && !this.state.out;
            }
        }, _this.data = {
            book: {
                sendBooks: [],
                recentBooks: [],
                outBooks: []
            },
            state: {
                send: false,
                recent: false,
                out: false
            },
            loadShow: true
        }, _this.mixins = [_login2.default], _this.methods = {
            cancelMsg: function cancelMsg(id) {
                var _this2 = this;

                wx.showModal({
                    title: '提示',
                    content: '确认取消推送该书?',
                    success: function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            if (!res.confirm) {
                                                _context.next = 10;
                                                break;
                                            }

                                            _context.prev = 1;
                                            _context.next = 4;
                                            return _wepy2.default.request({
                                                url: _config.api.appointBook.cancelSendBookMsg.url + id,
                                                method: _config.api.appointBook.cancelSendBookMsg.method
                                            });

                                        case 4:
                                            wx.showToast({
                                                title: '取消成功',
                                                icon: 'success',
                                                duration: 2000
                                            });
                                            _this2.getSendBooks();
                                            _context.next = 10;
                                            break;

                                        case 8:
                                            _context.prev = 8;
                                            _context.t0 = _context['catch'](1);

                                        case 10:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, _this2, [[1, 8]]);
                        }));

                        return function success(_x) {
                            return _ref2.apply(this, arguments);
                        };
                    }()
                });
            },
            reBorrow: function reBorrow(id) {
                var _this3 = this;

                wx.showModal({
                    title: '提示',
                    content: '一本书只可续借一次,是否续借?',
                    success: function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            if (!res.confirm) {
                                                _context2.next = 5;
                                                break;
                                            }

                                            _context2.next = 3;
                                            return _wepy2.default.request({
                                                url: _config.api.lendBook.reBorrow.url + _this3.userId + '/' + id,
                                                method: _config.api.lendBook.reBorrow.method
                                                // data: {
                                                //     id: id,
                                                //     userId: this.userId
                                                // }
                                            });

                                        case 3:
                                            wx.showToast({
                                                title: '续借成功',
                                                icon: 'success',
                                                duration: 2000
                                            });
                                            _this3.getAllRecentOutDateBooks();

                                        case 5:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, _this3);
                        }));

                        return function success(_x2) {
                            return _ref3.apply(this, arguments);
                        };
                    }()
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Collect, [{
        key: 'onLoad',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.getStoreById();

                            case 2:
                                _context3.next = 4;
                                return this.getSendBooks();

                            case 4:
                                _context3.next = 6;
                                return this.getAllRecentOutDateBooks();

                            case 6:
                                _context3.next = 8;
                                return this.getAllOutDateBooks();

                            case 8:
                                this.loadShow = false;
                                this.$apply();

                            case 10:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function onLoad() {
                return _ref4.apply(this, arguments);
            }

            return onLoad;
        }()
        // 获取推送

    }, {
        key: 'getSendBooks',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var sendBooks;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.message.getSendBooks.url + '/' + this.userId,
                                    method: _config.api.message.getSendBooks.method
                                });

                            case 2:
                                sendBooks = _context4.sent;

                                if (sendBooks.data.success) {
                                    this.book.sendBooks = sendBooks.data.sendBookMsgCustoms;
                                    this.state.send = true;
                                } else {
                                    this.state.send = false;
                                }
                                this.$apply();
                                console.log(sendBooks);

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getSendBooks() {
                return _ref5.apply(this, arguments);
            }

            return getSendBooks;
        }()
        // 获取近七日内要归还的图书

    }, {
        key: 'getAllRecentOutDateBooks',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _this4 = this;

                var books, array;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.message.getAllRecentOutDateBooks.url + '/' + this.userId,
                                    method: _config.api.message.getAllRecentOutDateBooks.method
                                });

                            case 2:
                                books = _context5.sent;

                                if (books.data.message === 'error') {
                                    this.state.recent = false;
                                } else {
                                    array = books.data.lendBookCustoms;

                                    array.forEach(function (item, index) {
                                        item.shouldReturnTime = _this4.formatDate(item.shouldReturnTime);
                                    });
                                    this.book.recentBooks = array;
                                    this.state.recent = true;
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getAllRecentOutDateBooks() {
                return _ref6.apply(this, arguments);
            }

            return getAllRecentOutDateBooks;
        }()
        // 获取已超期的图书

    }, {
        key: 'getAllOutDateBooks',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _this5 = this;

                var books, array;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.message.getAllOutDateBooks.url + '/' + this.userId,
                                    method: _config.api.message.getAllOutDateBooks.method
                                });

                            case 2:
                                books = _context6.sent;

                                if (books.data.message === '查询成功') {
                                    this.state.out = true;
                                    array = books.data.lendBookCustoms;

                                    array.forEach(function (item, index) {
                                        item.shouldReturnTime = _this5.formatDate(item.shouldReturnTime);
                                    });
                                    this.book.outBooks = array;
                                } else {
                                    this.state.out = false;
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getAllOutDateBooks() {
                return _ref7.apply(this, arguments);
            }

            return getAllOutDateBooks;
        }()
    }, {
        key: 'formatDate',
        value: function formatDate(date) {
            var unixTimestamp = new Date(date);
            return unixTimestamp.toLocaleString();
        }
    }]);

    return Collect;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Collect , 'pages/message'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiQ29sbGVjdCIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxvYWQiLCJjb21wdXRlZCIsInNob3ciLCJzdGF0ZSIsInNlbmQiLCJyZWNlbnQiLCJvdXQiLCJkYXRhIiwiYm9vayIsInNlbmRCb29rcyIsInJlY2VudEJvb2tzIiwib3V0Qm9va3MiLCJsb2FkU2hvdyIsIm1peGlucyIsIm1ldGhvZHMiLCJjYW5jZWxNc2ciLCJpZCIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJyZXF1ZXN0IiwidXJsIiwiYXBwb2ludEJvb2siLCJjYW5jZWxTZW5kQm9va01zZyIsIm1ldGhvZCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImdldFNlbmRCb29rcyIsInJlQm9ycm93IiwibGVuZEJvb2siLCJ1c2VySWQiLCJnZXRBbGxSZWNlbnRPdXREYXRlQm9va3MiLCJnZXRTdG9yZUJ5SWQiLCJnZXRBbGxPdXREYXRlQm9va3MiLCIkYXBwbHkiLCJtZXNzYWdlIiwic2VuZEJvb2tNc2dDdXN0b21zIiwiY29uc29sZSIsImxvZyIsImJvb2tzIiwiYXJyYXkiLCJsZW5kQm9va0N1c3RvbXMiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4Iiwic2hvdWxkUmV0dXJuVGltZSIsImZvcm1hdERhdGUiLCJkYXRlIiwidW5peFRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2pCQyxNLEdBQVM7QUFDTCxzQ0FBMEIsTUFEckI7QUFFTCxzQ0FBMEIsT0FGckI7QUFHTCw0Q0FBZ0M7QUFIM0IsUyxRQU1WQyxPLEdBQVUsRSxRQUNiQyxNLEdB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LElBQXBCO0FBQ0g7QUFDRCxxQ0FBS2tDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSjs7Ozs7Ozs7Ozs7Ozs7dUNBRXNCLGVBQUtmLE9BQUwsQ0FBYTtBQUMzQkMseUNBQVEsWUFBSWUsT0FBSixDQUFZRixrQkFBWixDQUErQmIsR0FBdkMsU0FBOEMsS0FBS1UsTUFEeEI7QUFFM0JQLDRDQUFRLFlBQUlZLE9BQUosQ0FBWUYsa0JBQVosQ0FBK0JWO0FBRlosaUNBQWIsQzs7O0FBQWRnQixxQzs7QUFJSixvQ0FBSUEsTUFBTXJDLElBQU4sQ0FBV2lDLE9BQVgsS0FBdUIsTUFBM0IsRUFBbUM7QUFDL0IseUNBQUtyQyxLQUFMLENBQVdHLEdBQVgsR0FBaUIsSUFBakI7QUFDSXVDLHlDQUYyQixHQUVuQkQsTUFBTXJDLElBQU4sQ0FBV3VDLGVBRlE7O0FBRy9CRCwwQ0FBTUUsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQkQsNkNBQUtFLGdCQUFMLEdBQXdCLE9BQUtDLFVBQUwsQ0FBZ0JILEtBQUtFLGdCQUFyQixDQUF4QjtBQUNILHFDQUZEO0FBR0EseUNBQUsxQyxJQUFMLENBQVVHLFFBQVYsR0FBcUJrQyxLQUFyQjtBQUNILGlDQVBELE1BT087QUFDSCx5Q0FBSzFDLEtBQUwsQ0FBV0csR0FBWCxHQUFpQixLQUFqQjtBQUNIO0FBQ0QscUNBQUtpQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBRU9hLEksRUFBTTtBQUNiLGdCQUFJQyxnQkFBZ0IsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQXBCO0FBQ0EsbUJBQU9DLGNBQWNFLGNBQWQsRUFBUDtBQUNIOzs7O0VBbkpnQyxlQUFLQyxJOztrQkFBckI5RCxPIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9taXhpbnMvbG9naW4nXHJcbmltcG9ydCBsb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn5oiR55qE5raI5oGvJyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnI2ZmNzcwMCdcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibG9hZFwiOntcInhtbG5zOnd4XCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGxvYWRcclxuICAgIH1cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICAgIHNob3coKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5zdGF0ZS5zZW5kICYmICF0aGlzLnN0YXRlLnJlY2VudCAmJiAhdGhpcy5zdGF0ZS5vdXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGJvb2s6IHtcclxuICAgICAgICAgICAgc2VuZEJvb2tzOiBbXSxcclxuICAgICAgICAgICAgcmVjZW50Qm9va3M6IFtdLFxyXG4gICAgICAgICAgICBvdXRCb29rczogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgIHNlbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWNlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvdXQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkU2hvdzogdHJ1ZVxyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gW2xvZ2luXVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgY2FuY2VsTXNnKGlkKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn56Gu6K6k5Y+W5raI5o6o6YCB6K+l5LmmPycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYXBpLmFwcG9pbnRCb29rLmNhbmNlbFNlbmRCb29rTXNnLnVybCArIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmFwcG9pbnRCb29rLmNhbmNlbFNlbmRCb29rTXNnLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+W5raI5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFNlbmRCb29rcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVCb3Jyb3coaWQpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuIDmnKzkuablj6rlj6/nu63lgJ/kuIDmrKEs5piv5ZCm57ut5YCfPycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBhcGkubGVuZEJvb2sucmVCb3Jyb3cudXJsICsgdGhpcy51c2VySWQgKyAnLycgKyBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmxlbmRCb29rLnJlQm9ycm93Lm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnu63lgJ/miJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxSZWNlbnRPdXREYXRlQm9va3MoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRTdG9yZUJ5SWQoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0U2VuZEJvb2tzKClcclxuICAgICAgICBhd2FpdCB0aGlzLmdldEFsbFJlY2VudE91dERhdGVCb29rcygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRBbGxPdXREYXRlQm9va3MoKVxyXG4gICAgICAgIHRoaXMubG9hZFNob3cgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIC8vIOiOt+WPluaOqOmAgVxyXG4gICAgYXN5bmMgZ2V0U2VuZEJvb2tzKCkge1xyXG4gICAgICAgIGxldCBzZW5kQm9va3MgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAke2FwaS5tZXNzYWdlLmdldFNlbmRCb29rcy51cmx9LyR7dGhpcy51c2VySWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBhcGkubWVzc2FnZS5nZXRTZW5kQm9va3MubWV0aG9kXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoc2VuZEJvb2tzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLmJvb2suc2VuZEJvb2tzID0gc2VuZEJvb2tzLmRhdGEuc2VuZEJvb2tNc2dDdXN0b21zXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VuZCA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgY29uc29sZS5sb2coc2VuZEJvb2tzKVxyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W6L+R5LiD5pel5YaF6KaB5b2S6L+Y55qE5Zu+5LmmXHJcbiAgICBhc3luYyBnZXRBbGxSZWNlbnRPdXREYXRlQm9va3MoKSB7XHJcbiAgICAgICAgbGV0IGJvb2tzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBgJHthcGkubWVzc2FnZS5nZXRBbGxSZWNlbnRPdXREYXRlQm9va3MudXJsfS8ke3RoaXMudXNlcklkfWAsXHJcbiAgICAgICAgICAgIG1ldGhvZDogYXBpLm1lc3NhZ2UuZ2V0QWxsUmVjZW50T3V0RGF0ZUJvb2tzLm1ldGhvZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGJvb2tzLmRhdGEubWVzc2FnZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJlY2VudCA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gYm9va3MuZGF0YS5sZW5kQm9va0N1c3RvbXNcclxuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2hvdWxkUmV0dXJuVGltZSA9IHRoaXMuZm9ybWF0RGF0ZShpdGVtLnNob3VsZFJldHVyblRpbWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYm9vay5yZWNlbnRCb29rcyA9IGFycmF5XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucmVjZW50ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICAvLyDojrflj5blt7LotoXmnJ/nmoTlm77kuaZcclxuICAgIGFzeW5jIGdldEFsbE91dERhdGVCb29rcygpIHtcclxuICAgICAgICBsZXQgYm9va3MgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAke2FwaS5tZXNzYWdlLmdldEFsbE91dERhdGVCb29rcy51cmx9LyR7dGhpcy51c2VySWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBhcGkubWVzc2FnZS5nZXRBbGxPdXREYXRlQm9va3MubWV0aG9kXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoYm9va3MuZGF0YS5tZXNzYWdlID09PSAn5p+l6K+i5oiQ5YqfJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm91dCA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gYm9va3MuZGF0YS5sZW5kQm9va0N1c3RvbXNcclxuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2hvdWxkUmV0dXJuVGltZSA9IHRoaXMuZm9ybWF0RGF0ZShpdGVtLnNob3VsZFJldHVyblRpbWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYm9vay5vdXRCb29rcyA9IGFycmF5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vdXQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgICBsZXQgdW5peFRpbWVzdGFtcCA9IG5ldyBEYXRlKGRhdGUpXHJcbiAgICAgICAgcmV0dXJuIHVuaXhUaW1lc3RhbXAudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==