'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _bookImage = require('./../components/BookDetailPage/bookImage.js');

var _bookImage2 = _interopRequireDefault(_bookImage);

var _bookInfo = require('./../components/BookDetailPage/bookInfo.js');

var _bookInfo2 = _interopRequireDefault(_bookInfo);

var _bookOperation = require('./../components/BookDetailPage/bookOperation.js');

var _bookOperation2 = _interopRequireDefault(_bookOperation);

var _bookDetailInfo = require('./../components/BookDetailPage/bookDetailInfo.js');

var _bookDetailInfo2 = _interopRequireDefault(_bookDetailInfo);

var _load = require('./../components/load.js');

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookDetail = function (_wepy$page) {
    _inherits(BookDetail, _wepy$page);

    function BookDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BookDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BookDetail.__proto__ || Object.getPrototypeOf(BookDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '书籍详情',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.components = {
            bookImage: _bookImage2.default,
            bookInfo: _bookInfo2.default,
            bookOperation: _bookOperation2.default,
            bookDetailInfo: _bookDetailInfo2.default,
            load: _load2.default
        }, _this.data = {
            wait: true,
            loadData: [],
            loadNum: 0
        }, _this.events = {
            'loadComplete': function loadComplete(p1, $event) {
                var comLength = Object.getOwnPropertyNames(_this.$com).length;
                // console.log(comLength,$event)
                _this.loadNum += 1;
                if (_this.loadNum === comLength - 1) {
                    _this.wait = false;
                }
            }
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BookDetail, [{
        key: 'onShow',
        value: function onShow() {
            // this.$invoke('bookOperation',getUserInfo)
        }
    }, {
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var book;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _wepy2.default.request({
                                    url: 'https://api.douban.com/v2/book/isbn/' + params.isbn,
                                    header: {
                                        'Content-Type': 'json'
                                    }
                                });

                            case 3:
                                book = _context.sent;

                                if (params.isbn === '9787115433145') {
                                    params.id = 4086;
                                    params.typeId = 151;
                                }
                                this.$broadcast('bookData', book.data, params.id, params.typeId);
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](0);

                                console.log('豆瓣出错');

                            case 11:
                                console.log('BookDetail页面加载');

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 8]]);
            }));

            function onLoad(_x) {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return BookDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(BookDetail , 'pages/bookDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tEZXRhaWwuanMiXSwibmFtZXMiOlsiQm9va0RldGFpbCIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJib29rSW1hZ2UiLCJib29rSW5mbyIsImJvb2tPcGVyYXRpb24iLCJib29rRGV0YWlsSW5mbyIsImxvYWQiLCJkYXRhIiwid2FpdCIsImxvYWREYXRhIiwibG9hZE51bSIsImV2ZW50cyIsInAxIiwiJGV2ZW50IiwiY29tTGVuZ3RoIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIiRjb20iLCJsZW5ndGgiLCJtZXRob2RzIiwicGFyYW1zIiwicmVxdWVzdCIsInVybCIsImlzYm4iLCJoZWFkZXIiLCJib29rIiwiaWQiLCJ0eXBlSWQiLCIkYnJvYWRjYXN0IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxNLEdBQVM7QUFDTCxzQ0FBMEIsTUFEckI7QUFFTCxzQ0FBMEIsT0FGckI7QUFHTCw0Q0FBZ0M7QUFIM0IsUyxRQU1UQyxVLEdBQWE7QUFDVEMsMENBRFM7QUFFVEMsd0NBRlM7QUFHVEMsa0RBSFM7QUFJVEMsb0RBSlM7QUFLVEM7QUFMUyxTLFFBT2JDLEksR0FBTztBQUNIQyxrQkFBTSxJQURIO0FBRUhDLHNCQUFVLEVBRlA7QUFHSEMscUJBQVM7QUFITixTLFFBS1BDLE0sR0FBUztBQUNMLDRCQUFnQixzQkFBQ0MsRUFBRCxFQUFLQyxNQUFMLEVBQWdCO0FBQzVCLG9CQUFJQyxZQUFZQyxPQUFPQyxtQkFBUCxDQUEyQixNQUFLQyxJQUFoQyxFQUFzQ0MsTUFBdEQ7QUFDQTtBQUNBLHNCQUFLUixPQUFMLElBQWdCLENBQWhCO0FBQ0Esb0JBQUksTUFBS0EsT0FBTCxLQUFpQkksWUFBWSxDQUFqQyxFQUFvQztBQUNoQywwQkFBS04sSUFBTCxHQUFZLEtBQVo7QUFFSDtBQUVKO0FBVkksUyxRQVlUVyxPLEdBQVUsRTs7Ozs7aUNBR0Q7QUFDTDtBQUNIOzs7O2lHQUNZQyxNOzs7Ozs7Ozt1Q0FFWSxlQUFLQyxPQUFMLENBQWE7QUFDMUJDLHlDQUFLLHlDQUF5Q0YsT0FBT0csSUFEM0I7QUFFMUJDLDRDQUFRO0FBQ0osd0RBQWdCO0FBRFo7QUFGa0IsaUNBQWIsQzs7O0FBQWJDLG9DOztBQU1KLG9DQUFJTCxPQUFPRyxJQUFQLEtBQWdCLGVBQXBCLEVBQXFDO0FBQ2pDSCwyQ0FBT00sRUFBUCxHQUFZLElBQVo7QUFDQU4sMkNBQU9PLE1BQVAsR0FBZ0IsR0FBaEI7QUFDSDtBQUNELHFDQUFLQyxVQUFMLENBQWdCLFVBQWhCLEVBQTRCSCxLQUFLbEIsSUFBakMsRUFBdUNhLE9BQU9NLEVBQTlDLEVBQWtETixPQUFPTyxNQUF6RDs7Ozs7Ozs7QUFFQUUsd0NBQVFDLEdBQVIsQ0FBWSxNQUFaOzs7QUFFSkQsd0NBQVFDLEdBQVIsQ0FBWSxnQkFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJEZ0MsZUFBS0MsSTs7a0JBQXhCaEMsVSIsImZpbGUiOiJib29rRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBib29rSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Cb29rRGV0YWlsUGFnZS9ib29rSW1hZ2UnXHJcbmltcG9ydCBib29rSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tEZXRhaWxQYWdlL2Jvb2tJbmZvJ1xyXG5pbXBvcnQgYm9va09wZXJhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tEZXRhaWxQYWdlL2Jvb2tPcGVyYXRpb24nXHJcbmltcG9ydCBib29rRGV0YWlsSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tEZXRhaWxQYWdlL2Jvb2tEZXRhaWxJbmZvJ1xyXG5pbXBvcnQgbG9hZCBmcm9tICcuLi9jb21wb25lbnRzL2xvYWQnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+S5puexjeivpuaDhScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyNmZjc3MDAnXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgICBib29rSW1hZ2UsXHJcbiAgICAgICAgYm9va0luZm8sXHJcbiAgICAgICAgYm9va09wZXJhdGlvbixcclxuICAgICAgICBib29rRGV0YWlsSW5mbyxcclxuICAgICAgICBsb2FkXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHdhaXQ6IHRydWUsXHJcbiAgICAgICAgbG9hZERhdGE6IFtdLFxyXG4gICAgICAgIGxvYWROdW06IDBcclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgICAnbG9hZENvbXBsZXRlJzogKHAxLCAkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbUxlbmd0aCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuJGNvbSkubGVuZ3RoXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbUxlbmd0aCwkZXZlbnQpXHJcbiAgICAgICAgICAgIHRoaXMubG9hZE51bSArPSAxXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWROdW0gPT09IGNvbUxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FpdCA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIC8vIHRoaXMuJGludm9rZSgnYm9va09wZXJhdGlvbicsZ2V0VXNlckluZm8pXHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQocGFyYW1zKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGJvb2sgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZG91YmFuLmNvbS92Mi9ib29rL2lzYm4vJyArIHBhcmFtcy5pc2JuLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdqc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYgKHBhcmFtcy5pc2JuID09PSAnOTc4NzExNTQzMzE0NScpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5pZCA9IDQwODZcclxuICAgICAgICAgICAgICAgIHBhcmFtcy50eXBlSWQgPSAxNTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ2Jvb2tEYXRhJywgYm9vay5kYXRhLCBwYXJhbXMuaWQsIHBhcmFtcy50eXBlSWQpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ixhueTo+WHuumUmScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCb29rRGV0YWls6aG16Z2i5Yqg6L29JylcclxuICAgIH1cclxuXHJcbn1cclxuIl19