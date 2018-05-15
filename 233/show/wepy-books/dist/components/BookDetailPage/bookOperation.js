'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _login = require('./../mixins/login.js');

var _login2 = _interopRequireDefault(_login);

var _config = require('./../../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bookOperation = function (_wepy$component) {
    _inherits(bookOperation, _wepy$component);

    function bookOperation() {
        var _ref,
            _this5 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, bookOperation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = bookOperation.__proto__ || Object.getPrototypeOf(bookOperation)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            state: {
                isCollect: false,
                isInCar: false,
                isAppoint: false
            },
            bookId: '',
            count: {
                bookCount: '',
                bookBorrowCount: ''
            },
            isRegister: false,
            inTheSale: true
        }, _this.mixins = [_login2.default], _this.methods = {
            lendBook: function lendBook() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!(_this2.checkInthesale() === false)) {
                                        _context2.next = 2;
                                        break;
                                    }

                                    return _context2.abrupt('return', false);

                                case 2:
                                    if (!(_this2.checkRegister() === false)) {
                                        _context2.next = 4;
                                        break;
                                    }

                                    return _context2.abrupt('return', false);

                                case 4:
                                    if (!_this2.state.isInCar) {
                                        _context2.next = 7;
                                        break;
                                    }

                                    wx.showModal({
                                        title: '提示',
                                        content: '\u8BE5\u4E66\u5DF2\u7ECF\u5728\u60A8\u7684\u4E66\u5305\u91CC\u4E86\u54E6~'
                                    });
                                    return _context2.abrupt('return', false);

                                case 7:
                                    if (!(_this2.count.bookBorrowCount === 0)) {
                                        _context2.next = 10;
                                        break;
                                    }

                                    wx.showModal({
                                        title: '提示',
                                        content: '\u8BE5\u4E66\u7684\u53EF\u501F\u6570\u91CF\u4E3A0,\u60A8\u53EF\u4EE5\u9884\u7EA6\u6B64\u4E66,\u82E5\u6B64\u4E66\u6709\u5E93\u5B58,\u6211\u4EEC\u4F1A\u5728\u7B2C\u4E00\u65F6\u95F4\u901A\u77E5\u60A8~'
                                    });
                                    return _context2.abrupt('return', false);

                                case 10:
                                    wx.showModal({
                                        title: '提示',
                                        content: '确认借阅此书',
                                        success: function () {
                                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                                    while (1) {
                                                        switch (_context.prev = _context.next) {
                                                            case 0:
                                                                if (!res.confirm) {
                                                                    _context.next = 13;
                                                                    break;
                                                                }

                                                                _context.prev = 1;
                                                                _context.next = 4;
                                                                return _wepy2.default.request({
                                                                    url: '' + _config.api.lendBook.insertToCar.url,
                                                                    method: _config.api.lendBook.insertToCar.method,
                                                                    data: {
                                                                        userId: _this2.userId,
                                                                        bookId: _this2.bookId
                                                                    }
                                                                });

                                                            case 4:
                                                                _this2.state.isInCar = true;
                                                                _this2.$apply();
                                                                _context.next = 11;
                                                                break;

                                                            case 8:
                                                                _context.prev = 8;
                                                                _context.t0 = _context['catch'](1);

                                                                console.log(_context.t0);

                                                            case 11:
                                                                _context.next = 14;
                                                                break;

                                                            case 13:
                                                                return _context.abrupt('return', false);

                                                            case 14:
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

                                case 11:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this2);
                }))();
            },
            orderBook: function orderBook() {
                var _this3 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    if (!(_this3.checkInthesale() === false)) {
                                        _context5.next = 2;
                                        break;
                                    }

                                    return _context5.abrupt('return', false);

                                case 2:
                                    if (!(_this3.checkRegister() === false)) {
                                        _context5.next = 4;
                                        break;
                                    }

                                    return _context5.abrupt('return', false);

                                case 4:
                                    if (!_this3.state.isAppoint) {
                                        _context5.next = 7;
                                        break;
                                    }

                                    wx.showModal({
                                        title: '提示',
                                        content: '\u60A8\u5DF2\u7ECF\u9884\u7EA6\u4E86\u8BE5\u4E66\u54E6~'
                                    });
                                    return _context5.abrupt('return');

                                case 7:
                                    if (_this3.count.bookBorrowCount === 0) {
                                        wx.showModal({
                                            title: '提示',
                                            content: '该书可借数量为0,是否推送消息?,设置为推送后,此书若有库存,我们将第一时间提醒向您提醒',
                                            success: function () {
                                                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(res) {
                                                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                                        while (1) {
                                                            switch (_context3.prev = _context3.next) {
                                                                case 0:
                                                                    if (!res.confirm) {
                                                                        _context3.next = 13;
                                                                        break;
                                                                    }

                                                                    _context3.prev = 1;
                                                                    _context3.next = 4;
                                                                    return _wepy2.default.request({
                                                                        url: _config.api.appointBook.addSendBookMsg.url + '/' + _this3.userId + '/' + _this3.bookId,
                                                                        method: _config.api.appointBook.addSendBookMsg.method
                                                                    });

                                                                case 4:
                                                                    wx.showToast({
                                                                        title: '成功设置推送消息',
                                                                        icon: 'success',
                                                                        duration: 2000
                                                                    });
                                                                    return _context3.abrupt('return', true);

                                                                case 8:
                                                                    _context3.prev = 8;
                                                                    _context3.t0 = _context3['catch'](1);

                                                                    console.log(_context3.t0);

                                                                case 11:
                                                                    _context3.next = 14;
                                                                    break;

                                                                case 13:
                                                                    return _context3.abrupt('return', false);

                                                                case 14:
                                                                case 'end':
                                                                    return _context3.stop();
                                                            }
                                                        }
                                                    }, _callee3, _this3, [[1, 8]]);
                                                }));

                                                return function success(_x2) {
                                                    return _ref3.apply(this, arguments);
                                                };
                                            }()
                                        });
                                    }
                                    if (_this3.count.bookBorrowCount > 0) {
                                        wx.showModal({
                                            title: '提示',
                                            content: '是否预约此书?',
                                            success: function () {
                                                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(res) {
                                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                                        while (1) {
                                                            switch (_context4.prev = _context4.next) {
                                                                case 0:
                                                                    if (!res.confirm) {
                                                                        _context4.next = 14;
                                                                        break;
                                                                    }

                                                                    _context4.prev = 1;
                                                                    _context4.next = 4;
                                                                    return _wepy2.default.request({
                                                                        url: '' + _config.api.appointBook.addAAppointment.url,
                                                                        // url: api.appointBook.addAAppointment.url,
                                                                        method: _config.api.appointBook.addAAppointment.method,
                                                                        data: {
                                                                            userId: _this3.userId,
                                                                            bookId: _this3.bookId
                                                                        }
                                                                    });

                                                                case 4:
                                                                    _this3.state.isAppoint = true;
                                                                    _this3.$apply();
                                                                    wx.showToast({
                                                                        title: '成功预约此书',
                                                                        icon: 'success',
                                                                        duration: 2000
                                                                    });
                                                                    _context4.next = 12;
                                                                    break;

                                                                case 9:
                                                                    _context4.prev = 9;
                                                                    _context4.t0 = _context4['catch'](1);

                                                                    console.log(_context4.t0);

                                                                case 12:
                                                                    _context4.next = 15;
                                                                    break;

                                                                case 14:
                                                                    return _context4.abrupt('return', false);

                                                                case 15:
                                                                case 'end':
                                                                    return _context4.stop();
                                                            }
                                                        }
                                                    }, _callee4, _this3, [[1, 9]]);
                                                }));

                                                return function success(_x3) {
                                                    return _ref4.apply(this, arguments);
                                                };
                                            }()
                                        });
                                    }

                                case 9:
                                case 'end':
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, _this3);
                }))();
            },
            collectBook: function collectBook() {
                var _this4 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                    var content;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    // 如果未收藏
                                    content = '';

                                    if (!_this4.state.isCollect) {
                                        content = '确认收藏本书?';
                                    } else {
                                        content = '确认取消收藏本书?';
                                    }
                                    wx.showModal({
                                        title: '提示',
                                        content: content,
                                        success: function () {
                                            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(res) {
                                                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                                    while (1) {
                                                        switch (_context6.prev = _context6.next) {
                                                            case 0:
                                                                if (!res.confirm) {
                                                                    _context6.next = 8;
                                                                    break;
                                                                }

                                                                _context6.next = 3;
                                                                return _wepy2.default.request({
                                                                    url: '' + _config.api.collectBook.insertOrDeleteCollect.url,
                                                                    method: _config.api.collectBook.insertOrDeleteCollect.method,
                                                                    data: {
                                                                        uid: _this4.userId,
                                                                        bid: _this4.bookId
                                                                    }
                                                                });

                                                            case 3:
                                                                wx.showToast({
                                                                    title: '成功',
                                                                    icon: 'success',
                                                                    duration: 2000
                                                                });
                                                                _this4.state.isCollect = !_this4.state.isCollect;
                                                                _this4.$apply();
                                                                _context6.next = 9;
                                                                break;

                                                            case 8:
                                                                return _context6.abrupt('return', false);

                                                            case 9:
                                                            case 'end':
                                                                return _context6.stop();
                                                        }
                                                    }
                                                }, _callee6, _this4);
                                            }));

                                            return function success(_x4) {
                                                return _ref5.apply(this, arguments);
                                            };
                                        }()
                                    });

                                case 3:
                                case 'end':
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, _this4);
                }))();
            }
        }, _this.events = {
            'bookData': function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data, bookId) {
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    _this.bookId = bookId;

                                    if (bookId) {
                                        _context8.next = 7;
                                        break;
                                    }

                                    _this.inTheSale = false;
                                    _this.$apply();
                                    _this.$emit('loadComplete', true);
                                    console.log('操作加载完成');
                                    return _context8.abrupt('return', false);

                                case 7:
                                    _this.$apply();
                                    // 通过mixins里获取userId
                                    _context8.next = 10;
                                    return _this.getStoreById();

                                case 10:
                                    _context8.next = 12;
                                    return _this.getUserInfo();

                                case 12:
                                    _context8.next = 14;
                                    return _this.checkOutState();

                                case 14:

                                    _this.$emit('loadComplete', true);

                                case 15:
                                case 'end':
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, _this5);
                }));

                return function bookData(_x5, _x6) {
                    return _ref6.apply(this, arguments);
                };
            }()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(bookOperation, [{
        key: 'onLoad',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:

                                console.log('BookDetail-Operation');

                            case 1:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));

            function onLoad() {
                return _ref7.apply(this, arguments);
            }

            return onLoad;
        }()
        // 查询是否收藏,借阅,预约

    }, {
        key: 'checkOutState',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var isCollect, isInCar, isAppoint;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                _context10.prev = 0;
                                _context10.next = 3;
                                return _wepy2.default.request({
                                    url: _config.api.collectBook.isCollect.url,
                                    method: _config.api.collectBook.isCollect.method,
                                    data: {
                                        uid: this.userId,
                                        bid: this.bookId
                                    }
                                });

                            case 3:
                                isCollect = _context10.sent;
                                _context10.next = 6;
                                return _wepy2.default.request({
                                    url: _config.api.lendBook.isInCar.url + this.userId + '/' + this.bookId,
                                    method: _config.api.lendBook.isInCar.method
                                });

                            case 6:
                                isInCar = _context10.sent;
                                _context10.next = 9;
                                return _wepy2.default.request({
                                    url: _config.api.appointBook.isAppoint.url,
                                    method: _config.api.appointBook.isAppoint.method,
                                    data: {
                                        userId: this.userId,
                                        bookId: this.bookId
                                    }
                                });

                            case 9:
                                isAppoint = _context10.sent;

                                this.state.isCollect = isCollect.data.issuccess;
                                this.state.isInCar = isInCar.data.issuccess;
                                this.state.isAppoint = isAppoint.data.issuccess;
                                this.$apply();
                                _context10.next = 19;
                                break;

                            case 16:
                                _context10.prev = 16;
                                _context10.t0 = _context10['catch'](0);

                                console.log(_context10.t0);

                            case 19:
                            case 'end':
                                return _context10.stop();
                        }
                    }
                }, _callee10, this, [[0, 16]]);
            }));

            function checkOutState() {
                return _ref8.apply(this, arguments);
            }

            return checkOutState;
        }()
        // 是否注册

    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var userDetaiInfo;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                _context11.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.user.userInfo.url + this.userId,
                                    method: _config.api.user.userInfo.method
                                });

                            case 2:
                                userDetaiInfo = _context11.sent;

                                this.isRegister = userDetaiInfo.data.isregister;
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));

            function getUserInfo() {
                return _ref9.apply(this, arguments);
            }

            return getUserInfo;
        }()
        // 获得馆藏书目,可借书目

    }, {
        key: 'getCount',
        value: function getCount(bookCount, bookBorrowCount) {
            this.count.bookCount = bookCount;
            this.count.bookBorrowCount = bookBorrowCount;
        }

        // 检查是否注册

    }, {
        key: 'checkRegister',
        value: function checkRegister() {
            if (!this.isRegister) {
                wx.showModal({
                    title: '提示',
                    content: '\u60A8\u8FD8\u672A\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F,\u662F\u5426\u8DF3\u8F6C\u5230\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F\u9875?~',
                    success: function success(res) {
                        if (res.confirm) {
                            _wepy2.default.navigateTo({
                                url: 'editInfo'
                            });
                        } else {
                            return false;
                        }
                    }
                });
                return false;
            }
        }
    }, {
        key: 'checkInthesale',
        value: function checkInthesale() {
            if (!this.inTheSale) {
                wx.showModal({
                    title: '提示',
                    content: '该图书暂未上架~敬请期待!'
                });
                return false;
            }
        }
    }]);

    return bookOperation;
}(_wepy2.default.component);

exports.default = bookOperation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tPcGVyYXRpb24uanMiXSwibmFtZXMiOlsiYm9va09wZXJhdGlvbiIsImNvbXBvbmVudHMiLCJkYXRhIiwic3RhdGUiLCJpc0NvbGxlY3QiLCJpc0luQ2FyIiwiaXNBcHBvaW50IiwiYm9va0lkIiwiY291bnQiLCJib29rQ291bnQiLCJib29rQm9ycm93Q291bnQiLCJpc1JlZ2lzdGVyIiwiaW5UaGVTYWxlIiwibWl4aW5zIiwibWV0aG9kcyIsImxlbmRCb29rIiwiY2hlY2tJbnRoZXNhbGUiLCJjaGVja1JlZ2lzdGVyIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInJlcXVlc3QiLCJ1cmwiLCJpbnNlcnRUb0NhciIsIm1ldGhvZCIsInVzZXJJZCIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJvcmRlckJvb2siLCJhcHBvaW50Qm9vayIsImFkZFNlbmRCb29rTXNnIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiYWRkQUFwcG9pbnRtZW50IiwiY29sbGVjdEJvb2siLCJpbnNlcnRPckRlbGV0ZUNvbGxlY3QiLCJ1aWQiLCJiaWQiLCJldmVudHMiLCIkZW1pdCIsImdldFN0b3JlQnlJZCIsImdldFVzZXJJbmZvIiwiY2hlY2tPdXRTdGF0ZSIsImlzc3VjY2VzcyIsInVzZXIiLCJ1c2VySW5mbyIsInVzZXJEZXRhaUluZm8iLCJpc3JlZ2lzdGVyIiwibmF2aWdhdGVUbyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7O3dNQUVqQkMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLG1CQUFPO0FBQ0hDLDJCQUFXLEtBRFI7QUFFSEMseUJBQVMsS0FGTjtBQUdIQywyQkFBVztBQUhSLGFBREo7QUFNSEMsb0JBQVEsRUFOTDtBQU9IQyxtQkFBTztBQUNIQywyQkFB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O0FBRlMsaUNBQWIsQzs7O0FBQXRCd0IsNkM7O0FBSUoscUNBQUt6QyxVQUFMLEdBQWtCeUMsY0FBY2xELElBQWQsQ0FBbUJtRCxVQUFyQztBQUNBLHFDQUFLdkIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVKOzs7O2lDQUNTckIsUyxFQUFXQyxlLEVBQWlCO0FBQ2pDLGlCQUFLRixLQUFMLENBQVdDLFNBQVgsR0FBdUJBLFNBQXZCO0FBQ0EsaUJBQUtELEtBQUwsQ0FBV0UsZUFBWCxHQUE2QkEsZUFBN0I7QUFDSDs7QUFFRDs7Ozt3Q0FDZ0I7QUFDWixnQkFBSSxDQUFDLEtBQUtDLFVBQVYsRUFBc0I7QUFDbEJPLG1CQUFHQyxTQUFILENBQWE7QUFDVEMsMkJBQU8sSUFERTtBQUVUQyxnS0FGUztBQUdUQyw2QkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2QsNEJBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDYiwyQ0FBSzhCLFVBQUwsQ0FBZ0I7QUFDWjVCLHFDQUFLO0FBRE8sNkJBQWhCO0FBR0gseUJBSkQsTUFJTztBQUNILG1DQUFPLEtBQVA7QUFDSDtBQUNKO0FBWFEsaUJBQWI7QUFhQSx1QkFBTyxLQUFQO0FBQ0g7QUFDSjs7O3lDQUNnQjtBQUNiLGdCQUFJLENBQUMsS0FBS2QsU0FBVixFQUFxQjtBQUNqQk0sbUJBQUdDLFNBQUgsQ0FBYTtBQUNUQywyQkFBTyxJQURFO0FBRVRDLDZCQUFTO0FBRkEsaUJBQWI7QUFJQSx1QkFBTyxLQUFQO0FBQ0g7QUFDSjs7OztFQXBSc0MsZUFBS2tDLFM7O2tCQUEzQnZELGEiLCJmaWxlIjoiYm9va09wZXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vbWl4aW5zL2xvZ2luJ1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvb2tPcGVyYXRpb24gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgIGlzQ29sbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzSW5DYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0FwcG9pbnQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib29rSWQ6ICcnLFxyXG4gICAgICAgIGNvdW50OiB7XHJcbiAgICAgICAgICAgIGJvb2tDb3VudDogJycsXHJcbiAgICAgICAgICAgIGJvb2tCb3Jyb3dDb3VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzUmVnaXN0ZXI6IGZhbHNlLFxyXG4gICAgICAgIGluVGhlU2FsZTogdHJ1ZVxyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gW2xvZ2luXVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBhc3luYyBsZW5kQm9vaygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tJbnRoZXNhbGUoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOaYr+WQpuazqOWGjFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1JlZ2lzdGVyKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0luQ2FyKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBg6K+l5Lmm5bey57uP5Zyo5oKo55qE5Lmm5YyF6YeM5LqG5ZOmfmBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudC5ib29rQm9ycm93Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDor6XkuabnmoTlj6/lgJ/mlbDph4/kuLowLOaCqOWPr+S7pemihOe6puatpOS5pizoi6XmraTkuabmnInlupPlrZgs5oiR5Lus5Lya5Zyo56ys5LiA5pe26Ze06YCa55+l5oKofmBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+ehruiupOWAn+mYheatpOS5picsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYCR7YXBpLmxlbmRCb29rLmluc2VydFRvQ2FyLnVybH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmxlbmRCb29rLmluc2VydFRvQ2FyLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tJZDogdGhpcy5ib29rSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0luQ2FyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBvcmRlckJvb2soKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSW50aGVzYWxlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1JlZ2lzdGVyKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0FwcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjlt7Lnu4/pooTnuqbkuobor6Xkuablk6Z+YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50LmJvb2tCb3Jyb3dDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ivpeS5puWPr+WAn+aVsOmHj+S4ujAs5piv5ZCm5o6o6YCB5raI5oGvPyzorr7nva7kuLrmjqjpgIHlkI4s5q2k5Lmm6Iul5pyJ5bqT5a2YLOaIkeS7rOWwhuesrOS4gOaXtumXtOaPkOmGkuWQkeaCqOaPkOmGkicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHthcGkuYXBwb2ludEJvb2suYWRkU2VuZEJvb2tNc2cudXJsfS8ke3RoaXMudXNlcklkfS8ke3RoaXMuYm9va0lkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmFwcG9pbnRCb29rLmFkZFNlbmRCb29rTXNnLm1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip/orr7nva7mjqjpgIHmtojmga8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudC5ib29rQm9ycm93Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5piv5ZCm6aKE57qm5q2k5LmmPycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHthcGkuYXBwb2ludEJvb2suYWRkQUFwcG9pbnRtZW50LnVybH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cmw6IGFwaS5hcHBvaW50Qm9vay5hZGRBQXBwb2ludG1lbnQudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5hcHBvaW50Qm9vay5hZGRBQXBwb2ludG1lbnQubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9va0lkOiB0aGlzLmJvb2tJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQXBwb2ludCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip/pooTnuqbmraTkuaYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGNvbGxlY3RCb29rKCkge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzmnKrmlLbol49cclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSAnJ1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNDb2xsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gJ+ehruiupOaUtuiXj+acrOS5pj8nXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gJ+ehruiupOWPlua2iOaUtuiXj+acrOS5pj8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAke2FwaS5jb2xsZWN0Qm9vay5pbnNlcnRPckRlbGV0ZUNvbGxlY3QudXJsfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5jb2xsZWN0Qm9vay5pbnNlcnRPckRlbGV0ZUNvbGxlY3QubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlkOiB0aGlzLmJvb2tJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0NvbGxlY3QgPSAhdGhpcy5zdGF0ZS5pc0NvbGxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgICAnYm9va0RhdGEnOiBhc3luYyAoZGF0YSwgYm9va0lkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9va0lkID0gYm9va0lkXHJcbiAgICAgICAgICAgIGlmICghYm9va0lkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluVGhlU2FsZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2FkQ29tcGxldGUnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aTjeS9nOWKoOi9veWujOaIkCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIC8vIOmAmui/h21peGluc+mHjOiOt+WPlnVzZXJJZFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldFN0b3JlQnlJZCgpXHJcbiAgICAgICAgICAgIC8vIOafpeivoueUqOaIt+aYr+WQpuazqOWGjFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldFVzZXJJbmZvKClcclxuICAgICAgICAgICAgLy8g5p+l6K+i5piv5ZCm5pS26JePLOWAn+mYhSzpooTnuqZcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jaGVja091dFN0YXRlKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xvYWRDb21wbGV0ZScsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQm9va0RldGFpbC1PcGVyYXRpb24nKVxyXG4gICAgfVxyXG4gICAgLy8g5p+l6K+i5piv5ZCm5pS26JePLOWAn+mYhSzpooTnuqZcclxuICAgIGFzeW5jIGNoZWNrT3V0U3RhdGUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGlzQ29sbGVjdCA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5jb2xsZWN0Qm9vay5pc0NvbGxlY3QudXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29sbGVjdEJvb2suaXNDb2xsZWN0Lm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1aWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGJpZDogdGhpcy5ib29rSWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IGlzSW5DYXIgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBhcGkubGVuZEJvb2suaXNJbkNhci51cmwgKyB0aGlzLnVzZXJJZCArICcvJyArIHRoaXMuYm9va0lkLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkubGVuZEJvb2suaXNJbkNhci5tZXRob2RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IGlzQXBwb2ludCA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5hcHBvaW50Qm9vay5pc0FwcG9pbnQudXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuYXBwb2ludEJvb2suaXNBcHBvaW50Lm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvb2tJZDogdGhpcy5ib29rSWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0NvbGxlY3QgPSBpc0NvbGxlY3QuZGF0YS5pc3N1Y2Nlc3NcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0luQ2FyID0gaXNJbkNhci5kYXRhLmlzc3VjY2Vzc1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzQXBwb2ludCA9IGlzQXBwb2ludC5kYXRhLmlzc3VjY2Vzc1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5piv5ZCm5rOo5YaMXHJcbiAgICBhc3luYyBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICBsZXQgdXNlckRldGFpSW5mbyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYXBpLnVzZXIudXNlckluZm8udXJsICsgdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgIG1ldGhvZDogYXBpLnVzZXIudXNlckluZm8ubWV0aG9kXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSB1c2VyRGV0YWlJbmZvLmRhdGEuaXNyZWdpc3RlclxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIC8vIOiOt+W+l+mmhuiXj+S5puebrizlj6/lgJ/kuabnm65cclxuICAgIGdldENvdW50KGJvb2tDb3VudCwgYm9va0JvcnJvd0NvdW50KSB7XHJcbiAgICAgICAgdGhpcy5jb3VudC5ib29rQ291bnQgPSBib29rQ291bnRcclxuICAgICAgICB0aGlzLmNvdW50LmJvb2tCb3Jyb3dDb3VudCA9IGJvb2tCb3Jyb3dDb3VudFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOajgOafpeaYr+WQpuazqOWGjFxyXG4gICAgY2hlY2tSZWdpc3RlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWdpc3Rlcikge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogYOaCqOi/mOacquWujOWWhOS4quS6uuS/oeaBryzmmK/lkKbot7PovazliLDlrozlloTkuKrkurrkv6Hmga/pobU/fmAsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdlZGl0SW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrSW50aGVzYWxlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pblRoZVNhbGUpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfor6Xlm77kuabmmoLmnKrkuIrmnrZ+5pWs6K+35pyf5b6FISdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==