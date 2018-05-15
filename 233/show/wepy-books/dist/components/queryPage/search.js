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
            clearShow: false,
            inputValue: '',
            searchBooks: [],
            lastTime: '',
            flag: false,
            historyArray: [],
            books: [],
            personShow: true
        }, _this.mixins = [_login2.default], _this.methods = {
            inputChange: function inputChange(e) {
                this.inputValue = this.trim(e.detail.value);
                e.detail.value !== '' ? this.clearShow = true : this.clearShow = false;
                if (this.trim(this.inputValue)) {
                    console.log(this.inputValue, '=inputValue');
                    this.throttle(this.findBooks, e.timestamp, 300, 500)();
                    this.lastTime = e.timestamp;
                }
            },
            clearInput: function clearInput() {
                this.inputValue = '';
                this.clearShow = false;
                console.log('clear');
            },
            queryBook: function queryBook() {
                // console.log(this.$pages)
                this.setHistory();
                _wepy2.default.navigateTo({
                    url: 'bookList?searchValue=' + this.inputValue
                });
            },
            queryBookByHistory: function queryBookByHistory(name) {
                _wepy2.default.navigateTo({
                    url: 'bookList?searchValue=' + name
                });
            },
            backToIndex: function backToIndex() {
                _wepy2.default.navigateBack({
                    delta: 1
                });
            },
            gotodetail: function gotodetail(isbn, typeId, id, bookName) {
                this.setHistory(bookName);
                _wepy2.default.navigateTo({
                    url: 'bookDetail?isbn=' + isbn + '&typeId=' + typeId + '&id=' + id
                });
            },
            clearHistory: function clearHistory() {
                var _this2 = this;

                wx.showModal({
                    title: '提示',
                    content: '确认删除历史记录?',
                    success: function success(res) {
                        if (res.confirm) {
                            _this2.historyArray = [];
                            _this2.$apply();
                            wx.setStorageSync('historyArray', []);
                        } else {
                            return false;
                        }
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(search, [{
        key: 'findBooks',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var searchBooks;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _wepy2.default.request({
                                    url: _config.api.common.search.url + this.inputValue,
                                    method: _config.api.common.search.method
                                });

                            case 3:
                                searchBooks = _context.sent;


                                if (searchBooks.data.books.length < 1000) {
                                    this.searchBooks = searchBooks.data;
                                }
                                this.$apply();
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](0);

                                console.log('搜索图书出错');

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 8]]);
            }));

            function findBooks() {
                return _ref2.apply(this, arguments);
            }

            return findBooks;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.getStoreById();

                            case 2:
                                this.getPerson();
                                this.getHistory();
                                _context2.next = 6;
                                return this.findPersonalBooks();

                            case 6:
                                console.log('queryPage-searchHearder');

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad() {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'onShow',
        value: function onShow() {

            this.getHistory();
            this.inputValue = '';
            this.$apply();
        }
    }, {
        key: 'throttle',
        value: function throttle(method, time, delay, duration) {
            var begin = time;
            var that = this;
            return function () {
                var args = arguments;
                clearTimeout(method.tId);
                console.log(time, '当前', that.lastTime, '开始', time - that.lastTime, '时间差');
                if (begin - that.lastTime >= duration) {
                    console.log('进入了1');
                    method.apply(that, args);
                } else {
                    method.tId = setTimeout(function () {
                        console.log('进入了222 ');
                        method.apply(that, args);
                    }, delay);
                }
            };
        }
    }, {
        key: 'trim',
        value: function trim(str) {
            if (str == null) {
                str = '';
            }
            return str.replace(/(^\s*)|(\s*$)/g, '');
        }
    }, {
        key: 'getHistory',
        value: function getHistory() {
            var historyArray = wx.getStorageSync('historyArray') || [];
            this.historyArray = historyArray;
        }
    }, {
        key: 'getPerson',
        value: function getPerson() {

            var Person = wx.getStorageSync('personShow');
            console.log(Person);
            if (Person !== '') {
                this.personShow = Person;
            } else {
                this.personShow = true;
            }
            this.$apply();
        }
    }, {
        key: 'setHistory',
        value: function setHistory(name) {
            var array = this.historyArray;
            if (array.length > 10) {
                array.pop();
            }
            array.unshift(name || this.inputValue);
            this.historyArray = array;
            wx.setStorageSync('historyArray', array);
        }
    }, {
        key: 'findPersonalBooks',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var books;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _wepy2.default.request({
                                    url: _config.api.user.findPersonalBooks.url + this.userId,
                                    method: _config.api.user.findPersonalBooks.method
                                });

                            case 3:
                                books = _context3.sent;

                                this.books = books.data.books;
                                this.$apply();
                                console.log(books);
                                _context3.next = 12;
                                break;

                            case 9:
                                _context3.prev = 9;
                                _context3.t0 = _context3['catch'](0);

                                console.log(_context3.t0);

                            case 12:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 9]]);
            }));

            function findPersonalBooks() {
                return _ref4.apply(this, arguments);
            }

            return findPersonalBooks;
        }()
    }]);

    return search;
}(_wepy2.default.component);

exports.default = search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJkYXRhIiwiY2xlYXJTaG93IiwiaW5wdXRWYWx1ZSIsInNlYXJjaEJvb2tzIiwibGFzdFRpbWUiLCJmbGFnIiwiaGlzdG9yeUFycmF5IiwiYm9va3MiLCJwZXJzb25TaG93IiwibWl4aW5zIiwibWV0aG9kcyIsImlucHV0Q2hhbmdlIiwiZSIsInRyaW0iLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0aHJvdHRsZSIsImZpbmRCb29rcyIsInRpbWVzdGFtcCIsImNsZWFySW5wdXQiLCJxdWVyeUJvb2siLCJzZXRIaXN0b3J5IiwibmF2aWdhdGVUbyIsInVybCIsInF1ZXJ5Qm9va0J5SGlzdG9yeSIsIm5hbWUiLCJiYWNrVG9JbmRleCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZ290b2RldGFpbCIsImlzYm4iLCJ0eXBlSWQiLCJpZCIsImJvb2tOYW1lIiwiY2xlYXJIaXN0b3J5Iiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsIiRhcHBseSIsInNldFN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsImNvbW1vbiIsIm1ldGhvZCIsImxlbmd0aCIsImdldFN0b3JlQnlJZCIsImdldFBlcnNvbiIsImdldEhpc3RvcnkiLCJmaW5kUGVyc29uYWxCb29rcyIsInRpbWUiLCJkZWxheSIsImR1cmF0aW9uIiwiYmVnaW4iLCJ0aGF0IiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInRJZCIsImFwcGx5Iiwic2V0VGltZW91dCIsInN0ciIsInJlcGxhY2UiLCJnZXRTdG9yYWdlU3luYyIsIlBlcnNvbiIsImFycmF5IiwicG9wIiwidW5zaGlmdCIsInVzZXIiLCJ1c2VySWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7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O0FBQ0E1Qix3Q0FBUUMsR0FBUixDQUFZVixLQUFaOzs7Ozs7OztBQUVBUyx3Q0FBUUMsR0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdKd0IsZUFBS3lELFM7O2tCQUFwQjNFLE0iLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWl4aW5zL2xvZ2luJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2ggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBjbGVhclNob3c6IGZhbHNlLFxyXG4gICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgIHNlYXJjaEJvb2tzOiBbXSxcclxuICAgICAgICBsYXN0VGltZTogJycsXHJcbiAgICAgICAgZmxhZzogZmFsc2UsXHJcbiAgICAgICAgaGlzdG9yeUFycmF5OiBbXSxcclxuICAgICAgICBib29rczogW10sXHJcbiAgICAgICAgcGVyc29uU2hvdzogdHJ1ZVxyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gW2xvZ2luXVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBpbnB1dENoYW5nZShlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMudHJpbShlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICAgICAgZS5kZXRhaWwudmFsdWUgIT09ICcnID8gdGhpcy5jbGVhclNob3cgPSB0cnVlIDogdGhpcy5jbGVhclNob3cgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmltKHRoaXMuaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXRWYWx1ZSwgJz1pbnB1dFZhbHVlJylcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3R0bGUodGhpcy5maW5kQm9va3MsIGUudGltZXN0YW1wLCAzMDAsIDUwMCkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IGUudGltZXN0YW1wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsZWFySW5wdXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTaG93ID0gZmFsc2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHF1ZXJ5Qm9vaygpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4kcGFnZXMpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGlzdG9yeSgpXHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdib29rTGlzdD9zZWFyY2hWYWx1ZT0nICsgdGhpcy5pbnB1dFZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcXVlcnlCb29rQnlIaXN0b3J5KG5hbWUpIHtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2Jvb2tMaXN0P3NlYXJjaFZhbHVlPScgKyBuYW1lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrVG9JbmRleCgpIHtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvdG9kZXRhaWwoaXNibiwgdHlwZUlkLCBpZCwgYm9va05hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIaXN0b3J5KGJvb2tOYW1lKVxyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnYm9va0RldGFpbD9pc2JuPScgKyBpc2JuICsgJyZ0eXBlSWQ9JyArIHR5cGVJZCArICcmaWQ9JyArIGlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhckhpc3RvcnkoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn56Gu6K6k5Yig6Zmk5Y6G5Y+y6K6w5b2VPycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeUFycmF5ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaGlzdG9yeUFycmF5JywgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBmaW5kQm9va3MoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hCb29rcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5jb21tb24uc2VhcmNoLnVybCArIHRoaXMuaW5wdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmNvbW1vbi5zZWFyY2gubWV0aG9kXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoQm9va3MuZGF0YS5ib29rcy5sZW5ndGggPCAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJvb2tzID0gc2VhcmNoQm9va3MuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pCc57Si5Zu+5Lmm5Ye66ZSZJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0U3RvcmVCeUlkKClcclxuICAgICAgICB0aGlzLmdldFBlcnNvbigpXHJcbiAgICAgICAgdGhpcy5nZXRIaXN0b3J5KClcclxuICAgICAgICBhd2FpdCB0aGlzLmZpbmRQZXJzb25hbEJvb2tzKClcclxuICAgICAgICBjb25zb2xlLmxvZygncXVlcnlQYWdlLXNlYXJjaEhlYXJkZXInKVxyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG5cclxuICAgICAgICB0aGlzLmdldEhpc3RvcnkoKVxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gICAgdGhyb3R0bGUobWV0aG9kLCB0aW1lLCBkZWxheSwgZHVyYXRpb24pIHtcclxuICAgICAgICB2YXIgYmVnaW4gPSB0aW1lXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50c1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobWV0aG9kLnRJZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGltZSwgJ+W9k+WJjScsIHRoYXQubGFzdFRpbWUsICflvIDlp4snLCB0aW1lIC0gdGhhdC5sYXN0VGltZSwgJ+aXtumXtOW3ricpXHJcbiAgICAgICAgICAgIGlmIChiZWdpbiAtIHRoYXQubGFzdFRpbWUgPj0gZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov5vlhaXkuoYxJylcclxuICAgICAgICAgICAgICAgIG1ldGhvZC5hcHBseSh0aGF0LCBhcmdzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kLnRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/m+WFpeS6hjIyMiAnKVxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZC5hcHBseSh0aGF0LCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cmltKHN0cikge1xyXG4gICAgICAgIGlmIChzdHIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdHIgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCAnJylcclxuICAgIH1cclxuICAgIGdldEhpc3RvcnkoKSB7XHJcbiAgICAgICAgbGV0IGhpc3RvcnlBcnJheSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdoaXN0b3J5QXJyYXknKSB8fCBbXVxyXG4gICAgICAgIHRoaXMuaGlzdG9yeUFycmF5ID0gaGlzdG9yeUFycmF5XHJcbiAgICB9XHJcbiAgICBnZXRQZXJzb24oKSB7XHJcblxyXG4gICAgICAgIGxldCBQZXJzb24gPSB3eC5nZXRTdG9yYWdlU3luYygncGVyc29uU2hvdycpXHJcbiAgICAgICAgY29uc29sZS5sb2coUGVyc29uKVxyXG4gICAgICAgIGlmIChQZXJzb24gIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29uU2hvdyA9IFBlcnNvblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29uU2hvdyA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gICAgc2V0SGlzdG9yeShuYW1lKSB7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5oaXN0b3J5QXJyYXlcclxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgYXJyYXkucG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyYXkudW5zaGlmdChuYW1lIHx8IHRoaXMuaW5wdXRWYWx1ZSlcclxuICAgICAgICB0aGlzLmhpc3RvcnlBcnJheSA9IGFycmF5XHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2hpc3RvcnlBcnJheScsIGFycmF5KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZmluZFBlcnNvbmFsQm9va3MoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGJvb2tzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLnVzZXIuZmluZFBlcnNvbmFsQm9va3MudXJsICsgdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS51c2VyLmZpbmRQZXJzb25hbEJvb2tzLm1ldGhvZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmJvb2tzID0gYm9va3MuZGF0YS5ib29rc1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvb2tzKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=