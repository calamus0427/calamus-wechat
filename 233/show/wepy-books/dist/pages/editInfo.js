'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _storage = require('./../utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditInfo = function (_wepy$page) {
    _inherits(EditInfo, _wepy$page);

    function EditInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EditInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditInfo.__proto__ || Object.getPrototypeOf(EditInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '个人信息',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.components = {}, _this.data = {
            userInfo: {},
            userDetaiInfo: {},
            userId: '',
            isLogin: ''
        }, _this.methods = {
            submitUserDetaiInfo: function submitUserDetaiInfo(e) {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var that, obj, content, str, val;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    that = _this2;
                                    obj = e.detail.value;
                                    content = '';

                                    if (!/^1[34578]\d{9}$/.test(obj.phone)) {
                                        content += ' 手机号';
                                    }
                                    if (!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/.test(obj.idcard)) {
                                        content += ' 身份证号';
                                    }
                                    if (!/^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/.test(obj.Email)) {
                                        content += ' 邮箱';
                                    }

                                    if (!(content !== '')) {
                                        _context.next = 9;
                                        break;
                                    }

                                    wx.showModal({
                                        title: '提示',
                                        content: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684' + content
                                    });
                                    return _context.abrupt('return', false);

                                case 9:
                                    str = '';

                                    for (val in obj) {
                                        str += val;
                                        str += '=';
                                        str += obj[val];
                                        str += '&';
                                    }
                                    str = str.substring(0, str.length - 1);
                                    console.log(str);
                                    wx.showModal({
                                        title: '提示',
                                        content: '确认提交?',
                                        success: function success(res) {
                                            if (res.confirm) {
                                                try {
                                                    _wepy2.default.request({
                                                        url: _config.api.user.editInfo.url + that.userId + '?' + str,
                                                        method: _config.api.user.editInfo.method
                                                    });
                                                    wx.showToast({
                                                        title: '提交成功',
                                                        icon: '../resources//icons/plus',
                                                        duration: 1000
                                                    });
                                                } catch (error) {
                                                    console.log(error);
                                                }
                                            } else if (res.cancel) {}
                                        }
                                    });

                                case 14:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            },
            userInfoHandler: function userInfoHandler(e) {
                var _this3 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var userInfo;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!(e.errMsg !== 'getUserInfo:fail auth deny')) {
                                        _context2.next = 7;
                                        break;
                                    }

                                    userInfo = JSON.parse(e.detail.rawData);
                                    _context2.next = 4;
                                    return _storage2.default.setStorage({
                                        'userInfo': userInfo
                                    });

                                case 4:
                                    _this3.isLogin = true;
                                    _this3.userInfo = userInfo;
                                    _this3.$apply();

                                case 7:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this3);
                }))();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EditInfo, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var userId, userDetaiInfo, userInfo;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _wepy2.default.getStorage({
                                    key: 'userId'
                                });

                            case 3:
                                userId = _context3.sent;

                                this.userId = userId.data;
                                _context3.next = 7;
                                return _wepy2.default.request({
                                    url: _config.api.user.userInfo.url + userId.data,
                                    method: _config.api.user.userInfo.method
                                });

                            case 7:
                                userDetaiInfo = _context3.sent;

                                this.userDetaiInfo = userDetaiInfo.data;
                                this.$apply();
                                _context3.next = 12;
                                return _wepy2.default.getStorage({
                                    key: 'userInfo'
                                });

                            case 12:
                                userInfo = _context3.sent;

                                this.userInfo = userInfo.data;
                                this.isLogin = true;
                                this.$apply();
                                _context3.next = 23;
                                break;

                            case 18:
                                _context3.prev = 18;
                                _context3.t0 = _context3['catch'](0);

                                console.log(_context3.t0);

                                this.isLogin = false;
                                this.$apply();

                            case 23:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 18]]);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return EditInfo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(EditInfo , 'pages/editInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRJbmZvLmpzIl0sIm5hbWVzIjpbIkVkaXRJbmZvIiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VySW5mbyIsInVzZXJEZXRhaUluZm8iLCJ1c2VySWQiLCJpc0xvZ2luIiwibWV0aG9kcyIsInN1Ym1pdFVzZXJEZXRhaUluZm8iLCJlIiwidGhhdCIsIm9iaiIsImRldGFpbCIsInZhbHVlIiwiY29udGVudCIsInRlc3QiLCJwaG9uZSIsImlkY2FyZCIsIkVtYWlsIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsInN0ciIsInZhbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInJlcXVlc3QiLCJ1cmwiLCJ1c2VyIiwiZWRpdEluZm8iLCJtZXRob2QiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJlcnJvciIsImNhbmNlbCIsInVzZXJJbmZvSGFuZGxlciIsImVyck1zZyIsIkpTT04iLCJwYXJzZSIsInJhd0RhdGEiLCJzZXRTdG9yYWdlIiwiJGFwcGx5IiwiZ2V0U3RvcmFnZSIsImtleSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0wsc0NBQTBCLE1BRHJCO0FBRUwsc0NBQTBCLE9BRnJCO0FBR0wsNENBQWdDO0FBSDNCLFMsUUFNVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0hDLHNCQUFVLEVBRFA7QUFFSEMsMkJBQWUsRUFGWjtBQUdIQyxvQkFBUSxFQUhMO0FBSUhDLHFCQUFTO0FBSk4sUyxRQU9QQyxPLEdBQVU7QUFDQUMsK0JBREEsK0JBQ29CQyxDQURwQixFQUN1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkMsd0NBRHFCO0FBRXJCQyx1Q0FGcUIsR0FFZkYsRUFBRUcsTUFB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d0IzQixPQUFPSCxJQUREO0FBRW5DaUMsNENBQVEsWUFBSUYsSUFBSixDQUFTOUIsUUFBVCxDQUFrQmdDO0FBRlMsaUNBQWIsQzs7O0FBQXRCL0IsNkM7O0FBSUoscUNBQUtBLGFBQUwsR0FBcUJBLGNBQWNGLElBQW5DO0FBQ0EscUNBQUs2QyxNQUFMOzt1Q0FDcUIsZUFBS0MsVUFBTCxDQUFnQjtBQUNqQ0MseUNBQUs7QUFENEIsaUNBQWhCLEM7OztBQUFqQjlDLHdDOztBQUdKLHFDQUFLQSxRQUFMLEdBQWdCQSxTQUFTRCxJQUF6QjtBQUNBLHFDQUFLSSxPQUFMLEdBQWUsSUFBZjtBQUNBLHFDQUFLeUMsTUFBTDs7Ozs7Ozs7QUFFQXJCLHdDQUFRQyxHQUFSOztBQUVBLHFDQUFLckIsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQ0FBS3lDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRzBCLGVBQUtHLEk7O2tCQUF0Qm5ELFEiLCJmaWxlIjoiZWRpdEluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdXRpbHMvc3RvcmFnZSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdEluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+S4quS6uuS/oeaBrycsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyNmZjc3MDAnXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB1c2VySW5mbzoge30sXHJcbiAgICAgICAgdXNlckRldGFpSW5mbzoge30sXHJcbiAgICAgICAgdXNlcklkOiAnJyxcclxuICAgICAgICBpc0xvZ2luOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgYXN5bmMgc3VibWl0VXNlckRldGFpSW5mbyhlKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSAnJ1xyXG4gICAgICAgICAgICBpZiAoISgvXjFbMzQ1NzhdXFxkezl9JC8udGVzdChvYmoucGhvbmUpKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCArPSAnIOaJi+acuuWPtydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISgvXlsxLTldXFxkezV9WzEtOV1cXGR7M30oKDBcXGQpfCgxWzAtMl0pKSgoWzB8MXwyXVxcZCl8M1swLTFdKVxcZHs0fSQvLnRlc3Qob2JqLmlkY2FyZCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ICs9ICcg6Lqr5Lu96K+B5Y+3J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKC9eW19cXC4wLTlhLXotXStAKFswLTlhLXpdWzAtOWEtei1dK1xcLil7MSw0fVthLXpdezIsM30kLy50ZXN0KG9iai5FbWFpbCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ICs9ICcg6YKu566xJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYOivt+i+k+WFpeato+ehrueahCR7Y29udGVudH1gXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHN0ciA9ICcnXHJcbiAgICAgICAgICAgIGZvciAodmFyIHZhbCBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIHN0ciArPSB2YWxcclxuICAgICAgICAgICAgICAgIHN0ciArPSAnPSdcclxuICAgICAgICAgICAgICAgIHN0ciArPSBvYmpbdmFsXVxyXG4gICAgICAgICAgICAgICAgc3RyICs9ICcmJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cilcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTmj5DkuqQ/JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAke2FwaS51c2VyLmVkaXRJbmZvLnVybCArIHRoYXQudXNlcklkfT8ke3N0cn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLnVzZXIuZWRpdEluZm8ubWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJy4uL3Jlc291cmNlcy8vaWNvbnMvcGx1cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyB1c2VySW5mb0hhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5lcnJNc2cgIT09ICdnZXRVc2VySW5mbzpmYWlsIGF1dGggZGVueScpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IEpTT04ucGFyc2UoZS5kZXRhaWwucmF3RGF0YSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHN0b3JlLnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICd1c2VySW5mbyc6IHVzZXJJbmZvLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAndXNlcklkJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZC5kYXRhXHJcbiAgICAgICAgICAgIGxldCB1c2VyRGV0YWlJbmZvID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLnVzZXIudXNlckluZm8udXJsICsgdXNlcklkLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS51c2VyLnVzZXJJbmZvLm1ldGhvZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnVzZXJEZXRhaUluZm8gPSB1c2VyRGV0YWlJbmZvLmRhdGFcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAndXNlckluZm8nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB1c2VySW5mby5kYXRhXHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=