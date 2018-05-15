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

var rank = function (_wepy$component) {
    _inherits(rank, _wepy$component);

    function rank() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, rank);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = rank.__proto__ || Object.getPrototypeOf(rank)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            hootBooks: []
        }, _this.methods = {
            gotodetail: function gotodetail(isbn, typeId, id) {
                console.log(isbn, typeId, id);
                _wepy2.default.navigateTo({
                    url: 'bookDetail?isbn=' + isbn + '&typeId=' + typeId + '&id=' + id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(rank, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var hootBooks, hootBooksData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('index-rank');
                                _context.prev = 1;
                                _context.next = 4;
                                return _wepy2.default.request({
                                    url: _config.api.common.hootBooks.url,
                                    method: _config.api.common.hootBooks.method,
                                    header: {
                                        'Content-Type': 'json'
                                    },
                                    dataType: 'json',
                                    data: {}
                                });

                            case 4:
                                hootBooks = _context.sent;
                                hootBooksData = hootBooks.data.hotBooks;

                                hootBooksData.forEach(function (item, index) {
                                    item.topimgUrl = '../resources/images/top' + (index + 1) + '.png';
                                });
                                this.hootBooks = hootBooksData;
                                this.$emit('indexLoadComplete', true);
                                this.$apply();
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](1);

                                _wepy2.default.showModal({
                                    title: '提示',
                                    content: '\u83B7\u53D6\u70ED\u95E8\u56FE\u4E66\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165.'
                                });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 12]]);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return rank;
}(_wepy2.default.component);

exports.default = rank;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmsuanMiXSwibmFtZXMiOlsicmFuayIsImRhdGEiLCJob290Qm9va3MiLCJtZXRob2RzIiwiZ290b2RldGFpbCIsImlzYm4iLCJ0eXBlSWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVxdWVzdCIsImNvbW1vbiIsIm1ldGhvZCIsImhlYWRlciIsImRhdGFUeXBlIiwiaG9vdEJvb2tzRGF0YSIsImhvdEJvb2tzIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsInRvcGltZ1VybCIsIiRlbWl0IiwiJGFwcGx5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBRWpCQyxJLEdBQU87QUFDSEMsdUJBQVc7QUFEUixTLFFBR1BDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsSUFETCxFQUNXQyxNQURYLEVBQ21CQyxFQURuQixFQUN1QjtBQUN6QkMsd0JBQVFDLEdBQVIsQ0FBWUosSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLEVBQTFCO0FBQ0EsK0JBQUtHLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUsscUJBQXFCTixJQUFyQixHQUE0QixVQUE1QixHQUF5Q0MsTUFBekMsR0FBa0QsTUFBbEQsR0FBMkRDO0FBRHBELGlCQUFoQjtBQUdIO0FBTkssUzs7Ozs7Ozs7Ozs7O0FBVU5DLHdDQUFRQyxHQUFSLENBQVksWUFBWjs7O3VDQUcwQixlQUFLRyxPQUFMLENBQWE7QUFDL0JELHlDQUFLLFlBQUlFLE1BQUosQ0FBV1gsU0FBWCxDQUFxQlMsR0FESztBQUUvQkcsNENBQVEsWUFBSUQsTUFBSixDQUFXWCxTQUFYLENBQXFCWSxNQUZFO0FBRy9CQyw0Q0FBUTtBQUNKLHdEQUFnQjtBQURaLHFDQUh1QjtBQU0vQkMsOENBQVUsTUFOcUI7QUFPL0JmLDBDQUFNO0FBUHlCLGlDQUFiLEM7OztBQUFsQkMseUM7QUFVQWUsNkMsR0FBZ0JmLFVBQVVELElBQVYsQ0FBZWlCLFE7O0FBQ25DRCw4Q0FBY0UsT0FBZCxDQUFzQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDbkNELHlDQUFLRSxTQUFMLEdBQWlCLDZCQUE2QkQsUUFBUSxDQUFyQyxJQUEwQyxNQUEzRDtBQUNILGlDQUZEO0FBR0EscUNBQUtuQixTQUFMLEdBQWlCZSxhQUFqQjtBQUNBLHFDQUFLTSxLQUFMLENBQVcsbUJBQVgsRUFBZ0MsSUFBaEM7QUFDQSxxQ0FBS0MsTUFBTDs7Ozs7Ozs7QUFFQSwrQ0FBS0MsU0FBTCxDQUFlO0FBQ1hDLDJDQUFPLElBREk7QUFFWEM7QUFGVyxpQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDc0IsZUFBS0MsUzs7a0JBQWxCNUIsSSIsImZpbGUiOiJyYW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmFuayBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGhvb3RCb29rczogW11cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgZ290b2RldGFpbChpc2JuLCB0eXBlSWQsIGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzYm4sIHR5cGVJZCwgaWQpXHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdib29rRGV0YWlsP2lzYm49JyArIGlzYm4gKyAnJnR5cGVJZD0nICsgdHlwZUlkICsgJyZpZD0nICsgaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleC1yYW5rJylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyDojrflj5bng63pl6jlm77kuaZcclxuICAgICAgICAgICAgbGV0IGhvb3RCb29rcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5jb21tb24uaG9vdEJvb2tzLnVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmNvbW1vbi5ob290Qm9va3MubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdqc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBob290Qm9va3NEYXRhID0gaG9vdEJvb2tzLmRhdGEuaG90Qm9va3NcclxuICAgICAgICAgICAgaG9vdEJvb2tzRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS50b3BpbWdVcmwgPSAnLi4vcmVzb3VyY2VzL2ltYWdlcy90b3AnICsgKGluZGV4ICsgMSkgKyAnLnBuZydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5ob290Qm9va3MgPSBob290Qm9va3NEYXRhXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2luZGV4TG9hZENvbXBsZXRlJywgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDojrflj5bng63pl6jlm77kuablpLHotKXvvIzor7flhbPpl63ph43mlrDov5vlhaUuYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19