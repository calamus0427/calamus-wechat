'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_wepy$page) {
    _inherits(BookList, _wepy$page);

    function BookList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BookList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BookList.__proto__ || Object.getPrototypeOf(BookList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.components = {}, _this.data = {
            books: []
        }, _this.methods = {
            gotodetail: function gotodetail(isbn, typeId, id) {
                _wepy2.default.navigateTo({
                    url: 'bookDetail?isbn=' + isbn + '&typeId=' + typeId + '&id=' + id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BookList, [{
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, data) {
                var books;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                books = [];
                                _context.prev = 1;

                                if (!params.searchValue) {
                                    _context.next = 10;
                                    break;
                                }

                                console.log('search逻辑');
                                _context.next = 6;
                                return _wepy2.default.request({
                                    url: _config.api.common.search.url + params.searchValue,
                                    method: _config.api.common.search.methodk,
                                    header: {
                                        'Content-Type': 'json'
                                    }
                                });

                            case 6:
                                books = _context.sent;

                                _wepy2.default.setNavigationBarTitle({
                                    title: '搜索: ' + params.searchValue
                                });
                                _context.next = 22;
                                break;

                            case 10:
                                if (!params.classifyId) {
                                    _context.next = 17;
                                    break;
                                }

                                _context.next = 13;
                                return _wepy2.default.request({
                                    url: _config.api.common.classifyById.url + params.classifyId,
                                    method: _config.api.common.classifyById.method,
                                    header: {
                                        'Content-Type': 'json'
                                    }
                                });

                            case 13:
                                books = _context.sent;

                                wx.setNavigationBarTitle({
                                    title: params.title
                                });
                                _context.next = 22;
                                break;

                            case 17:
                                if (!params.typeId) {
                                    _context.next = 22;
                                    break;
                                }

                                _context.next = 20;
                                return _wepy2.default.request({
                                    url: _config.api.common.relevant.url + params.typeId,
                                    method: _config.api.common.relevant.method
                                });

                            case 20:
                                books = _context.sent;

                                console.log(books);

                            case 22:
                                this.books = books.data.books;
                                this.$apply();
                                _context.next = 29;
                                break;

                            case 26:
                                _context.prev = 26;
                                _context.t0 = _context['catch'](1);

                                console.log('bookList出错');

                            case 29:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 26]]);
            }));

            function onLoad(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return BookList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(BookList , 'pages/bookList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tMaXN0LmpzIl0sIm5hbWVzIjpbIkJvb2tMaXN0IiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJib29rcyIsIm1ldGhvZHMiLCJnb3RvZGV0YWlsIiwiaXNibiIsInR5cGVJZCIsImlkIiwibmF2aWdhdGVUbyIsInVybCIsInBhcmFtcyIsInNlYXJjaFZhbHVlIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJjb21tb24iLCJzZWFyY2giLCJtZXRob2QiLCJtZXRob2RrIiwiaGVhZGVyIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJjbGFzc2lmeUlkIiwiY2xhc3NpZnlCeUlkIiwid3giLCJyZWxldmFudCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNMLHNDQUEwQixFQURyQjtBQUVMLHNDQUEwQixPQUZyQjtBQUdMLDRDQUFnQztBQUgzQixTLFFBTVRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNIQyxtQkFBTztBQURKLFMsUUFJUEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxJQURMLEVBQ1dDLE1BRFgsRUFDbUJDLEVBRG5CLEVBQ3VCO0FBQ3pCLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLHFCQUFxQkosSUFBckIsR0FBNEIsVUFBNUIsR0FBeUNDLE1BQXpDLEdBQWtELE1BQWxELEdBQTJEQztBQURwRCxpQkFBaEI7QUFHSDtBQUxLLFM7Ozs7O2lDQVFELENBQ1I7Ozs7aUdBQ1lHLE0sRUFBUVQsSTs7Ozs7O0FBQ2JDLHFDLEdBQVEsRTs7O3FDQUVKUSxPQUFPQyxXOzs7OztBQUNQQyx3Q0FBUUMsR0FBUixDQUFZLFVBQVo7O3VDQUNjLGVBQUtDLE9BQUwsQ0FBYTtBQUN2QkwseUNBQUssWUFBSU0sTUFBSixDQUFXQyxNQUFYLENBQWtCUCxHQUFsQixHQUF3QkMsT0FBT0MsV0FEYjtBQUV2Qk0sNENBQVEsWUFBSUYsTUFBSixDQUFXQyxNQUFYLENBQWtCRSxPQUZIO0FBR3ZCQyw0Q0FBUTtBQUNKLHdEQUFnQjtBQURaO0FBSGUsaUNBQWIsQzs7O0FBQWRqQixxQzs7QUFPQSwrQ0FBS2tCLHFCQUFMLENBQTJCO0FBQ3ZCQywyQ0FBTyxTQUFTWCxPQUFPQztBQURBLGlDQUEzQjs7Ozs7cUNBR09ELE9BQU9ZLFU7Ozs7Ozt1Q0FDQSxlQUFLUixPQUFMLENBQWE7QUFDdkJMLHlDQUFLLFlBQUlNLE1BQUosQ0FBV1EsWUFBWCxDQUF3QmQsR0FBeEIsR0FBOEJDLE9BQU9ZLFVBRG5CO0FBRXZCTCw0Q0FBUSxZQUFJRixNQUFKLENBQVdRLFlBQVgsQ0FBd0JOLE1BRlQ7QUFHdkJFLDRDQUFRO0FBQ0osd0RBQWdCO0FBRFo7QUFIZSxpQ0FBYixDOzs7QUFBZGpCLHFDOztBQU9Bc0IsbUNBQUdKLHFCQUFILENBQXlCO0FBQ3JCQywyQ0FBT1gsT0FBT1c7QUFETyxpQ0FBekI7Ozs7O3FDQUdPWCxPQUFPSixNOzs7Ozs7dUNBQ0EsZUFBS1EsT0FBTCxDQUFhO0FBQ3ZCTCx5Q0FBSyxZQUFJTSxNQUFKLENBQVdVLFFBQVgsQ0FBb0JoQixHQUFwQixHQUEwQkMsT0FBT0osTUFEZjtBQUV2QlcsNENBQVEsWUFBSUYsTUFBSixDQUFXVSxRQUFYLENBQW9CUjtBQUZMLGlDQUFiLEM7OztBQUFkZixxQzs7QUFJQVUsd0NBQVFDLEdBQVIsQ0FBWVgsS0FBWjs7O0FBRUoscUNBQUtBLEtBQUwsR0FBYUEsTUFBTUQsSUFBTixDQUFXQyxLQUF4QjtBQUNBLHFDQUFLd0IsTUFBTDs7Ozs7Ozs7QUFFQWQsd0NBQVFDLEdBQVIsQ0FBWSxZQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0QwQixlQUFLYyxJOztrQkFBdEI3QixRIiwiZmlsZSI6ImJvb2tMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJycsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyNmZjc3MDAnXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYm9va3M6IFtdXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBnb3RvZGV0YWlsKGlzYm4sIHR5cGVJZCwgaWQpIHtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2Jvb2tEZXRhaWw/aXNibj0nICsgaXNibiArICcmdHlwZUlkPScgKyB0eXBlSWQgKyAnJmlkPScgKyBpZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQocGFyYW1zLCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IGJvb2tzID0gW11cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnNlYXJjaFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VhcmNo6YC76L6RJylcclxuICAgICAgICAgICAgICAgIGJvb2tzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGFwaS5jb21tb24uc2VhcmNoLnVybCArIHBhcmFtcy5zZWFyY2hWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5jb21tb24uc2VhcmNoLm1ldGhvZGssXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aQnOe0ojogJyArIHBhcmFtcy5zZWFyY2hWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuY2xhc3NpZnlJZCkge1xyXG4gICAgICAgICAgICAgICAgYm9va3MgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYXBpLmNvbW1vbi5jbGFzc2lmeUJ5SWQudXJsICsgcGFyYW1zLmNsYXNzaWZ5SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29tbW9uLmNsYXNzaWZ5QnlJZC5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHBhcmFtcy50aXRsZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMudHlwZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBib29rcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhcGkuY29tbW9uLnJlbGV2YW50LnVybCArIHBhcmFtcy50eXBlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29tbW9uLnJlbGV2YW50Lm1ldGhvZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvb2tzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYm9va3MgPSBib29rcy5kYXRhLmJvb2tzXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYm9va0xpc3Tlh7rplJknKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBhc3luY1xyXG5cclxufVxyXG4iXX0=