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

var bookInfo = function (_wepy$component) {
    _inherits(bookInfo, _wepy$component);

    function bookInfo() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, bookInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = bookInfo.__proto__ || Object.getPrototypeOf(bookInfo)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            book: [],
            count: {},
            rank: ''
        }, _this.methods = {}, _this.events = {
            'bookData': function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book, id) {
                    var data;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _this.book = book;
                                    _this.rank = _this.getRating(book.rating.average / 2);

                                    if (id) {
                                        _context.next = 9;
                                        break;
                                    }

                                    _this.count.bookCount = '未上架';
                                    _this.count.bookBorrowCount = '未上架';
                                    _this.$apply();
                                    _this.$emit('loadComplete', true);
                                    console.log('info加载完成');
                                    return _context.abrupt('return', false);

                                case 9:
                                    _this.bookId = id;
                                    _context.prev = 10;
                                    _context.next = 13;
                                    return _wepy2.default.request({
                                        url: _config.api.common.bookCount.url + id,
                                        method: _config.api.common.bookCount.method
                                    });

                                case 13:
                                    data = _context.sent;

                                    _this.count = data.data;
                                    _this.$invoke('../bookOperation', 'getCount', data.data.bookCount, data.data.bookBorrowCount);
                                    _this.$emit('loadComplete', true);
                                    _this.$apply();
                                    _context.next = 23;
                                    break;

                                case 20:
                                    _context.prev = 20;
                                    _context.t0 = _context['catch'](10);

                                    console.log(_context.t0);

                                case 23:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2, [[10, 20]]);
                }));

                return function bookData(_x, _x2) {
                    return _ref2.apply(this, arguments);
                };
            }()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(bookInfo, [{
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log('BookDetail-info');

                            case 1:
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
        key: 'getRating',
        value: function getRating(rating) {
            if (rating > 5 || rating < 0) throw new Error('数字不在范围内');
            return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating);
        }
    }]);

    return bookInfo;
}(_wepy2.default.component);

exports.default = bookInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tJbmZvLmpzIl0sIm5hbWVzIjpbImJvb2tJbmZvIiwiY29tcG9uZW50cyIsImRhdGEiLCJib29rIiwiY291bnQiLCJyYW5rIiwibWV0aG9kcyIsImV2ZW50cyIsImlkIiwiZ2V0UmF0aW5nIiwicmF0aW5nIiwiYXZlcmFnZSIsImJvb2tDb3VudCIsImJvb2tCb3Jyb3dDb3VudCIsIiRhcHBseSIsIiRlbWl0IiwiY29uc29sZSIsImxvZyIsImJvb2tJZCIsInJlcXVlc3QiLCJ1cmwiLCJjb21tb24iLCJtZXRob2QiLCIkaW52b2tlIiwiRXJyb3IiLCJzdWJzdHJpbmciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs7OExBRWpCQyxVLEdBQWEsRSxRQUdiQyxJLEdBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyxtQkFBTyxFQUZKO0FBR0hDLGtCQUFNO0FBSEgsUyxRQUtQQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVM7QUFDTDtBQUFBLG9GQUFZLGlCQUFPSixJQUFQLEVBQWFLLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1IsMENBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNBLDBDQUFLRSxJQUFMLEdBQVksTUFBS0ksU0FBTCxDQUFlTixLQUFLTyxNQUFMLENBQVlDLE9BQVosR0FBc0IsQ0FBckMsQ0FBWjs7QUFGUSx3Q0FHSEgsRUFIRztBQUFBO0FBQUE7QUFBQTs7QUFJSiwwQ0FBS0osS0FBTCxDQUFXUSxTQUFYLEdBQXVCLEtBQXZCO0FBQ0EsMENBQUtSLEtBQUwsQ0FBV1MsZUFBWCxHQUE2QixLQUE3QjtBQUNBLDBDQUFLQyxNQUFMO0FBQ0EsMENBQUtDLEtBQUwsQ0FBVyxjQUFYLEVBQTJCLElBQTNCO0FBQ0FDLDRDQUFRQyxHQUFSLENBQVksVUFBWjtBQVJJLHFFQVNHLEtBVEg7O0FBQUE7QUFXUiwwQ0FBS0MsTUFBTCxHQUFjVixFQUFkO0FBWFE7QUFBQTtBQUFBLDJDQWFhLGVBQUtXLE9BQUwsQ0FBYTtBQUMxQkMsNkNBQUssWUFBSUMsTUFBSixDQUFXVCxTQUFYLENBQXFCUSxHQUFyQixHQUEyQlosRUFETjtBQUUxQmMsZ0RBQVEsWUFBSUQsTUFBSixDQUFXVCxTQUFYLENBQXFCVTtBQUZILHFDQUFiLENBYmI7O0FBQUE7QUFhQXBCLHdDQWJBOztBQWlCSiwwQ0FBS0UsS0FBTCxHQUFhRixLQUFLQSxJQUFsQjtBQUNBLDBDQUFLcUIsT0FBTCxDQUFhLGtCQUFiLEVBQWlDLFVBQWpDLEVBQTZDckIsS0FBS0EsSUFBTCxDQUFVVSxTQUF2RCxFQUFrRVYsS0FBS0EsSUFBTCxDQUFVVyxlQUE1RTtBQUNBLDBDQUFLRSxLQUFMLENBQVcsY0FBWCxFQUEyQixJQUEzQjtBQUNBLDBDQUFLRCxNQUFMO0FBcEJJO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXNCSkUsNENBQVFDLEdBQVI7O0FBdEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREssUzs7Ozs7Ozs7Ozs7QUE2QkxELHdDQUFRQyxHQUFSLENBQVksaUJBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFTVAsTSxFQUFRO0FBQ2QsZ0JBQUlBLFNBQVMsQ0FBVCxJQUFjQSxTQUFTLENBQTNCLEVBQThCLE1BQU0sSUFBSWMsS0FBSixDQUFVLFNBQVYsQ0FBTjtBQUM5QixtQkFBTyxhQUFhQyxTQUFiLENBQXVCLElBQUlmLE1BQTNCLEVBQW1DLEtBQUtBLE1BQXhDLENBQVA7QUFDSDs7OztFQTlDaUMsZUFBS2dCLFM7O2tCQUF0QjFCLFEiLCJmaWxlIjoiYm9va0luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib29rSW5mbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYm9vazogW10sXHJcbiAgICAgICAgY291bnQ6IHt9LFxyXG4gICAgICAgIHJhbms6ICcnXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAgICdib29rRGF0YSc6IGFzeW5jIChib29rLCBpZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvb2sgPSBib29rXHJcbiAgICAgICAgICAgIHRoaXMucmFuayA9IHRoaXMuZ2V0UmF0aW5nKGJvb2sucmF0aW5nLmF2ZXJhZ2UgLyAyKVxyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50LmJvb2tDb3VudCA9ICfmnKrkuIrmnrYnXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50LmJvb2tCb3Jyb3dDb3VudCA9ICfmnKrkuIrmnrYnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2FkQ29tcGxldGUnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luZm/liqDovb3lrozmiJAnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ib29rSWQgPSBpZFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYXBpLmNvbW1vbi5ib29rQ291bnQudXJsICsgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29tbW9uLmJvb2tDb3VudC5tZXRob2RcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJy4uL2Jvb2tPcGVyYXRpb24nLCAnZ2V0Q291bnQnLCBkYXRhLmRhdGEuYm9va0NvdW50LCBkYXRhLmRhdGEuYm9va0JvcnJvd0NvdW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZENvbXBsZXRlJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Jvb2tEZXRhaWwtaW5mbycpXHJcbiAgICB9XHJcbiAgICBnZXRSYXRpbmcocmF0aW5nKSB7XHJcbiAgICAgICAgaWYgKHJhdGluZyA+IDUgfHwgcmF0aW5nIDwgMCkgdGhyb3cgbmV3IEVycm9yKCfmlbDlrZfkuI3lnKjojIPlm7TlhoUnKVxyXG4gICAgICAgIHJldHVybiAn4piF4piF4piF4piF4piF4piG4piG4piG4piG4piGJy5zdWJzdHJpbmcoNSAtIHJhdGluZywgMTAgLSByYXRpbmcpXHJcbiAgICB9XHJcbn1cclxuIl19