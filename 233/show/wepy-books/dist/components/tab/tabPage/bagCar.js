'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _login = require('./../../mixins/login.js');

var _login2 = _interopRequireDefault(_login);

var _config = require('./../../../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import interfaces from '../../../interfaces/index'


var Message = function (_wepy$component) {
    _inherits(Message, _wepy$component);

    function Message() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            carBooks: [],
            allCheck: false,
            check: [],
            count: '',
            canBorrowCount: '',
            barCode: {
                show: false,
                url: ''
            }
        }, _this.methods = {
            CheckAll: function CheckAll() {
                this.allCheck = !this.allCheck;
                var array = new Array(this.count);
                array.fill(this.allCheck);
                this.check = array;
                this.$apply();
            },
            CheckItem: function CheckItem(index) {
                this.check[index] = !this.check[index];
            },
            borrowBook: function borrowBook() {
                var _this2 = this;

                if (this.canBorrowCount === 0) {
                    wx.showToast({
                        title: '\u60A8\u5F53\u524D\u53EF\u501F\u4E66\u7684\u6570\u91CF\u4E3A' + this.canBorrowCount,
                        icon: '../resources/icons/plus.png',
                        duration: 2000
                    });
                    return false;
                }
                var isCheck = this.check.some(function (item) {
                    return item === true;
                });
                if (!isCheck) {
                    wx.showToast({
                        title: '\u8BF7\u9009\u62E9\u8981\u501F\u9605\u7684\u4E66\u7C4D',
                        icon: '../resources/icons/plus.png',
                        duration: 2000
                    });
                    return false;
                }
                var str = '',
                    str1 = '',
                    checkNum = 0;
                this.check.forEach(function (item, index) {
                    if (item) {
                        str += '$book=' + _this2.carBooks[index].bookId + '$costmoney=' + '20';
                        str1 += '$book=' + _this2.carBooks[index].bookId;
                        checkNum += 1;
                    }
                });
                str = str.slice(1);
                str1 = str1.slice(1);
                console.log(str, str1, checkNum, this.canBorrowCount);
                if (checkNum > this.canBorrowCount) {
                    wx.showToast({
                        title: '\u60A8\u5F53\u524D\u53EF\u501F\u4E66\u7684\u6570\u91CF\u4E3A' + this.canBorrowCount,
                        icon: '../resources/icons/plus.png',
                        duration: 2000
                    });
                    return false;
                }

                this.barCode.url = 'http://qr.liantu.com/api.php?text=' + this.userId + '/?' + str + '!?' + str1;
                this.barCode.show = true;
                wx.showLoading({
                    title: '正在生成二维码...'

                });
                this.$apply();
            },
            cancel: function cancel() {
                this.onLoad();
            },
            pay: function pay() {
                wx.redirectTo({
                    url: 'pay'
                });
            },
            hideLoading: function hideLoading() {
                wx.hideLoading();
            },
            deleteItem: function deleteItem(bookId) {
                var _this3 = this;

                wx.showModal({
                    title: '提示',
                    content: '确认从购物车里删除?',
                    success: function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            if (!res.confirm) {
                                                _context.next = 5;
                                                break;
                                            }

                                            _context.next = 3;
                                            return _wepy2.default.request({
                                                url: _config.api.lendBook.deleteBooksFromCar.url + '/' + _this3.userId + '/?book=' + bookId,
                                                method: _config.api.lendBook.deleteBooksFromCar.method
                                            });

                                        case 3:
                                            wx.showToast({
                                                title: '删除成功',
                                                icon: 'success',
                                                duration: 2000
                                            });
                                            _this3.onLoad();

                                        case 5:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, _this3);
                        }));

                        return function success(_x) {
                            return _ref2.apply(this, arguments);
                        };
                    }()
                });
                // wx.showModal({
                //     title: '提示?',
                //     content: '确认从购物车里删除?',
                //     success: function(res) {
                //         if (res.confirm) {
                //             wx.request({
                //                 url: 'https://www.learningwang.cn/books/deleteBooksFromCar/' + that.data.userid + '/?book=' + bookid,
                //                 success: function(res) {
                //                     console.log(res.data)
                //                     that.setData({
                //                         car: res.data.cart_Lend_BookCustoms
                //                     })
                //                     wx.showToast({
                //                         title: '删除成功',
                //                         icon: '../resources/icons/plus.png',
                //                         duration: 2000
                //                     })
                //                 }
                //             })
                //         } else if (res.cancel) {
                //             return;
                //         }
                //     }
                // })
            }
        }, _this.mixins = [_login2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var carBooks, lendBooks, canBorrowCount, count, fillArray;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return this.getStoreById();

                            case 3:
                                _context2.next = 5;
                                return _wepy2.default.request({
                                    url: _config.api.lendBook.getBooksFromCar.url + this.userId,
                                    method: _config.api.lendBook.getBooksFromCar.method
                                });

                            case 5:
                                carBooks = _context2.sent;
                                _context2.next = 8;
                                return _wepy2.default.request({
                                    url: _config.api.lendBook.getLendBooks.url + this.userId,
                                    method: _config.api.lendBook.getLendBooks.method
                                });

                            case 8:
                                lendBooks = _context2.sent;
                                canBorrowCount = 2 - lendBooks.data.dateCount;
                                count = carBooks.data.dataCount;
                                fillArray = new Array(count);

                                this.canBorrowCount = canBorrowCount;
                                this.count = count;
                                this.check = fillArray.fill(false);
                                this.carBooks = carBooks.data.cart_Lend_BookCustoms;
                                this.barCode.show = false;
                                this.$apply();
                                _context2.next = 23;
                                break;

                            case 20:
                                _context2.prev = 20;
                                _context2.t0 = _context2['catch'](0);

                                console.log(_context2.t0);

                            case 23:
                                console.log('bagCar');

                            case 24:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 20]]);
            }));

            function onLoad() {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZ0Nhci5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwiY29tcG9uZW50cyIsImRhdGEiLCJjYXJCb29rcyIsImFsbENoZWNrIiwiY2hlY2siLCJjb3VudCIsImNhbkJvcnJvd0NvdW50IiwiYmFyQ29kZSIsInNob3ciLCJ1cmwiLCJtZXRob2RzIiwiQ2hlY2tBbGwiLCJhcnJheSIsIkFycmF5IiwiZmlsbCIsIiRhcHBseSIsIkNoZWNrSXRlbSIsImluZGV4IiwiYm9ycm93Qm9vayIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJpc0NoZWNrIiwic29tZSIsIml0ZW0iLCJzdHIiLCJzdHIxIiwiY2hlY2tOdW0iLCJmb3JFYWNoIiwiYm9va0lkIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwidXNlcklkIiwic2hvd0xvYWRpbmciLCJjYW5jZWwiLCJvbkxvYWQiLCJwYXkiLCJyZWRpcmVjdFRvIiwiaGlkZUxvYWRpbmciLCJkZWxldGVJdGVtIiwic2hvd01vZGFsIiwiY29udGVudCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwicmVxdWVzdCIsImxlbmRCb29rIiwiZGVsZXRlQm9va3NGcm9tQ2FyIiwibWV0aG9kIiwibWl4aW5zIiwiZ2V0U3RvcmVCeUlkIiwiZ2V0Qm9va3NGcm9tQ2FyIiwiZ2V0TGVuZEJvb2tzIiwibGVuZEJvb2tzIiwiZGF0ZUNvdW50IiwiZGF0YUNvdW50IiwiZmlsbEFycmF5IiwiY2FydF9MZW5kX0Jvb2tDdXN0b21zIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFGQTs7O0lBR3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFFakJDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNIQyxzQkFBVSxFQURQO0FBRUhDLHNCQUFVLEtBRlA7QUFHSEMsbUJBQU8sRUFISjtBQUlIQyxtQkFBTyxFQUpKO0FBS0hDLDRCQUFnQixFQUxiO0FB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Q0FBYTtBQUMvQnZDLHlDQUFLLFlBQUl3QyxRQUFKLENBQWFNLFlBQWIsQ0FBMEI5QyxHQUExQixHQUFnQyxLQUFLMEIsTUFEWDtBQUUvQmdCLDRDQUFRLFlBQUlGLFFBQUosQ0FBYU0sWUFBYixDQUEwQko7QUFGSCxpQ0FBYixDOzs7QUFBbEJLLHlDO0FBSUFsRCw4QyxHQUFpQixJQUFJa0QsVUFBVXZELElBQVYsQ0FBZXdELFM7QUFDcENwRCxxQyxHQUFRSCxTQUFTRCxJQUFULENBQWN5RCxTO0FBQ3RCQyx5QyxHQUFZLElBQUk5QyxLQUFKLENBQVVSLEtBQVYsQzs7QUFDaEIscUNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EscUNBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNBLHFDQUFLRCxLQUFMLEdBQWF1RCxVQUFVN0MsSUFBVixDQUFlLEtBQWYsQ0FBYjtBQUNBLHFDQUFLWixRQUFMLEdBQWdCQSxTQUFTRCxJQUFULENBQWMyRCxxQkFBOUI7QUFDQSxxQ0FBS3JELE9BQUwsQ0FBYUMsSUFBYixHQUFvQixLQUFwQjtBQUNBLHFDQUFLTyxNQUFMOzs7Ozs7OztBQUVBa0Isd0NBQVFDLEdBQVI7OztBQUVKRCx3Q0FBUUMsR0FBUixDQUFZLFFBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuSzZCLGVBQUsyQixTOztrQkFBckI5RCxPIiwiZmlsZSI6ImJhZ0Nhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyBpbXBvcnQgaW50ZXJmYWNlcyBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vLi4vbWl4aW5zL2xvZ2luJ1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGNhckJvb2tzOiBbXSxcclxuICAgICAgICBhbGxDaGVjazogZmFsc2UsXHJcbiAgICAgICAgY2hlY2s6IFtdLFxyXG4gICAgICAgIGNvdW50OiAnJyxcclxuICAgICAgICBjYW5Cb3Jyb3dDb3VudDogJycsXHJcbiAgICAgICAgYmFyQ29kZToge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIENoZWNrQWxsKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbENoZWNrID0gIXRoaXMuYWxsQ2hlY2tcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gbmV3IEFycmF5KHRoaXMuY291bnQpXHJcbiAgICAgICAgICAgIGFycmF5LmZpbGwodGhpcy5hbGxDaGVjaylcclxuICAgICAgICAgICAgdGhpcy5jaGVjayA9IGFycmF5XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9LFxyXG4gICAgICAgIENoZWNrSXRlbShpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrW2luZGV4XSA9ICF0aGlzLmNoZWNrW2luZGV4XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9ycm93Qm9vaygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuQm9ycm93Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGDmgqjlvZPliY3lj6/lgJ/kuabnmoTmlbDph4/kuLoke3RoaXMuY2FuQm9ycm93Q291bnR9YCxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnLi4vcmVzb3VyY2VzL2ljb25zL3BsdXMucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpc0NoZWNrID0gdGhpcy5jaGVjay5zb21lKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAoIWlzQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGDor7fpgInmi6nopoHlgJ/pmIXnmoTkuabnsY1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICcuLi9yZXNvdXJjZXMvaWNvbnMvcGx1cy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHN0ciA9ICcnLFxyXG4gICAgICAgICAgICAgICAgc3RyMSA9ICcnLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tOdW0gPSAwXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2suZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9ICckYm9vaz0nICsgdGhpcy5jYXJCb29rc1tpbmRleF0uYm9va0lkICsgJyRjb3N0bW9uZXk9JyArICcyMCdcclxuICAgICAgICAgICAgICAgICAgICBzdHIxICs9ICckYm9vaz0nICsgdGhpcy5jYXJCb29rc1tpbmRleF0uYm9va0lkXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tOdW0gKz0gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMSlcclxuICAgICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyLCBzdHIxLCBjaGVja051bSwgdGhpcy5jYW5Cb3Jyb3dDb3VudClcclxuICAgICAgICAgICAgaWYgKGNoZWNrTnVtID4gdGhpcy5jYW5Cb3Jyb3dDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogYOaCqOW9k+WJjeWPr+WAn+S5pueahOaVsOmHj+S4uiR7dGhpcy5jYW5Cb3Jyb3dDb3VudH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICcuLi9yZXNvdXJjZXMvaWNvbnMvcGx1cy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFyQ29kZS51cmwgPSAnaHR0cDovL3FyLmxpYW50dS5jb20vYXBpLnBocD90ZXh0PScgKyB0aGlzLnVzZXJJZCArICcvPycgKyBzdHIgKyAnIT8nICsgc3RyMVxyXG4gICAgICAgICAgICB0aGlzLmJhckNvZGUuc2hvdyA9IHRydWVcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmraPlnKjnlJ/miJDkuoznu7TnoIEuLi4nLFxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2VsKCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXkoKSB7XHJcbiAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAncGF5J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZUxvYWRpbmcoKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZUl0ZW0oYm9va0lkKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn56Gu6K6k5LuO6LSt54mp6L2m6YeM5Yig6ZmkPycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIOeCueWHu+ehruWumlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHthcGkubGVuZEJvb2suZGVsZXRlQm9va3NGcm9tQ2FyLnVybH0vJHt0aGlzLnVzZXJJZH0vP2Jvb2s9JHtib29rSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmxlbmRCb29rLmRlbGV0ZUJvb2tzRnJvbUNhci5tZXRob2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+aPkOekuj8nLFxyXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogJ+ehruiupOS7jui0reeJqei9pumHjOWIoOmZpD8nLFxyXG4gICAgICAgICAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubGVhcm5pbmd3YW5nLmNuL2Jvb2tzL2RlbGV0ZUJvb2tzRnJvbUNhci8nICsgdGhhdC5kYXRhLnVzZXJpZCArICcvP2Jvb2s9JyArIGJvb2tpZCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhcjogcmVzLmRhdGEuY2FydF9MZW5kX0Jvb2tDdXN0b21zXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICcuLi9yZXNvdXJjZXMvaWNvbnMvcGx1cy5wbmcnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gW2xvZ2luXVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyDojrflj5bnlKjmiLdpZFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldFN0b3JlQnlJZCgpXHJcblxyXG4gICAgICAgICAgICAvLyDojrflj5botK3nianovabkuabnsY1cclxuICAgICAgICAgICAgbGV0IGNhckJvb2tzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLmxlbmRCb29rLmdldEJvb2tzRnJvbUNhci51cmwgKyB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmxlbmRCb29rLmdldEJvb2tzRnJvbUNhci5tZXRob2RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8g6I635Y+W5bey5YCf6ZiF5pWw6YePXHJcbiAgICAgICAgICAgIGxldCBsZW5kQm9va3MgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBhcGkubGVuZEJvb2suZ2V0TGVuZEJvb2tzLnVybCArIHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkubGVuZEJvb2suZ2V0TGVuZEJvb2tzLm1ldGhvZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgY2FuQm9ycm93Q291bnQgPSAyIC0gbGVuZEJvb2tzLmRhdGEuZGF0ZUNvdW50XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGNhckJvb2tzLmRhdGEuZGF0YUNvdW50XHJcbiAgICAgICAgICAgIGxldCBmaWxsQXJyYXkgPSBuZXcgQXJyYXkoY291bnQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuQm9ycm93Q291bnQgPSBjYW5Cb3Jyb3dDb3VudFxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnRcclxuICAgICAgICAgICAgdGhpcy5jaGVjayA9IGZpbGxBcnJheS5maWxsKGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLmNhckJvb2tzID0gY2FyQm9va3MuZGF0YS5jYXJ0X0xlbmRfQm9va0N1c3RvbXNcclxuICAgICAgICAgICAgdGhpcy5iYXJDb2RlLnNob3cgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdiYWdDYXInKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=