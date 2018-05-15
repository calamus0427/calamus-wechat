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

var myRoom = function (_wepy$component) {
    _inherits(myRoom, _wepy$component);

    function myRoom() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, myRoom);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myRoom.__proto__ || Object.getPrototypeOf(myRoom)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            borrowData: {},
            appointData: {},
            collectData: {}
        }, _this.methods = {
            gotoCollect: function gotoCollect() {
                _wepy2.default.navigateTo({
                    url: 'collect'
                });
            },
            gotoAppointment: function gotoAppointment() {
                _wepy2.default.navigateTo({
                    url: 'appointment'
                });
            },
            gotoLend: function gotoLend() {
                _wepy2.default.navigateTo({
                    url: 'lendRoom'
                });
            }
        }, _this.events = {}, _this.mixins = [_login2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(myRoom, [{
        key: 'againLoad',
        value: function againLoad() {
            this.onLoad();
        }
    }, {
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var lendBooks, collectBooks, appointBooks;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return this.getStoreById();

                            case 3:
                                _context.next = 5;
                                return _wepy2.default.request({
                                    url: _config.api.lendBook.getLendBooks.url + this.userId,
                                    method: _config.api.lendBook.getLendBooks.method
                                });

                            case 5:
                                lendBooks = _context.sent;
                                _context.next = 8;
                                return _wepy2.default.request({
                                    url: _config.api.collectBook.getCollectBook.url + this.userId,
                                    method: _config.api.collectBook.getCollectBook.method
                                });

                            case 8:
                                collectBooks = _context.sent;
                                _context.next = 11;
                                return _wepy2.default.request({
                                    url: _config.api.appointBook.getAppointBook.url + this.userId,
                                    method: _config.api.appointBook.getAppointBook.method
                                });

                            case 11:
                                appointBooks = _context.sent;

                                this.appointData = appointBooks.data;
                                this.collectData = collectBooks.data;
                                this.borrowData = lendBooks.data;
                                this.$apply();
                                _context.next = 21;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context['catch'](0);

                                console.log('me-书籍出错', _context.t0);

                            case 21:

                                console.log('me-myRoom');

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 18]]);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return myRoom;
}(_wepy2.default.component);

exports.default = myRoom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Um9vbS5qcyJdLCJuYW1lcyI6WyJteVJvb20iLCJkYXRhIiwiYm9ycm93RGF0YSIsImFwcG9pbnREYXRhIiwiY29sbGVjdERhdGEiLCJtZXRob2RzIiwiZ290b0NvbGxlY3QiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ290b0FwcG9pbnRtZW50IiwiZ290b0xlbmQiLCJldmVudHMiLCJtaXhpbnMiLCJvbkxvYWQiLCJnZXRTdG9yZUJ5SWQiLCJyZXF1ZXN0IiwibGVuZEJvb2siLCJnZXRMZW5kQm9va3MiLCJ1c2VySWQiLCJtZXRob2QiLCJsZW5kQm9va3MiLCJjb2xsZWN0Qm9vayIsImdldENvbGxlY3RCb29rIiwiY29sbGVjdEJvb2tzIiwiYXBwb2ludEJvb2siLCJnZXRBcHBvaW50Qm9vayIsImFwcG9pbnRCb29rcyIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUVqQkMsSSxHQUFPO0FBQ0hDLHdCQUFZLEVBRFQ7QUFJSEMseUJBQWEsRUFKVjtBQU9IQyx5QkFBYTtBQVBWLFMsUUFXUEMsTyxHQUFVO0FBQ05DLHVCQURNLHlCQUNRO0FBQ1YsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUs7QUFETyxpQkFBaEI7QUFHSCxhQUxLO0FBTU5DLDJCQU5NLDZCQU1ZO0FBQ2QsK0JBQUtGLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUs7QUFETyxpQkFBaEI7QUFHSCxhQVZLO0FBV05FLG9CQVhNLHNCQVdLO0FBQ1AsK0JBQUtILFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUs7QUFETyxpQkFBaEI7QUFHSDtBQWZLLFMsUUFpQlZHLE0sR0FBUyxFLFFBR1RDLE0sR0FBUyxpQjs7Ozs7b0NBRUc7QUFDUixpQkFBS0MsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7dUNBSWEsS0FBS0MsWUFBTCxFOzs7O3VDQUVnQixlQUFLQyxPQUFMLENBQWE7QUFDL0JQLHlDQUFLLFlBQUlRLFFBQUosQ0FBYUMsWUFBYixDQUEwQlQsR0FBMUIsR0FBZ0MsS0FBS1UsTUFEWDtBQUUvQkMsNENBQVEsWUFBSUgsUUFBSixDQUFhQyxZQUFiLENBQTBCRTtBQUZILGlDQUFiLEM7OztBQUFsQkMseUM7O3VDQU1xQixlQUFLTCxPQUFMLENBQWE7QUFDbENQLHlDQUFLLFlBQUlhLFdBQUosQ0FBZ0JDLGNBQWhCLENBQStCZCxHQUEvQixHQUFxQyxLQUFLVSxNQURiO0FBRWxDQyw0Q0FBUSxZQUFJRSxXQUFKLENBQWdCQyxjQUFoQixDQUErQkg7QUFGTCxpQ0FBYixDOzs7QUFBckJJLDRDOzt1Q0FNcUIsZUFBS1IsT0FBTCxDQUFhO0FBQ2xDUCx5Q0FBSyxZQUFJZ0IsV0FBSixDQUFnQkMsY0FBaEIsQ0FBK0JqQixHQUEvQixHQUFxQyxLQUFLVSxNQURiO0FBRWxDQyw0Q0FBUSxZQUFJSyxXQUFKLENBQWdCQyxjQUFoQixDQUErQk47QUFGTCxpQ0FBYixDOzs7QUFBckJPLDRDOztBQUlKLHFDQUFLdkIsV0FBTCxHQUFtQnVCLGFBQWF6QixJQUFoQztBQUNBLHFDQUFLRyxXQUFMLEdBQW1CbUIsYUFBYXRCLElBQWhDO0FBQ0EscUNBQUtDLFVBQUwsR0FBa0JrQixVQUFVbkIsSUFBNUI7QUFDQSxxQ0FBSzBCLE1BQUw7Ozs7Ozs7O0FBRUFDLHdDQUFRQyxHQUFSLENBQVksU0FBWjs7OztBQUdKRCx3Q0FBUUMsR0FBUixDQUFZLFdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuRTRCLGVBQUtDLFM7O2tCQUFwQjlCLE0iLCJmaWxlIjoibXlSb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uL21peGlucy9sb2dpbidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXlSb29tIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYm9ycm93RGF0YToge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFwcG9pbnREYXRhOiB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdERhdGE6IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBnb3RvQ29sbGVjdCgpIHtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2NvbGxlY3QnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb3RvQXBwb2ludG1lbnQoKSB7XHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdhcHBvaW50bWVudCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvdG9MZW5kKCkge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnbGVuZFJvb20nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge1xyXG5cclxuICAgIH1cclxuICAgIG1peGlucyA9IFtsb2dpbl1cclxuXHJcbiAgICBhZ2FpbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkxvYWQoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldFN0b3JlQnlJZCgpXHJcbiAgICAgICAgICAgIC8vIOWAn+mYhVxyXG4gICAgICAgICAgICBsZXQgbGVuZEJvb2tzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLmxlbmRCb29rLmdldExlbmRCb29rcy51cmwgKyB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmxlbmRCb29rLmdldExlbmRCb29rcy5tZXRob2RcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIOiXj+S5plxyXG4gICAgICAgICAgICBsZXQgY29sbGVjdEJvb2tzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLmNvbGxlY3RCb29rLmdldENvbGxlY3RCb29rLnVybCArIHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29sbGVjdEJvb2suZ2V0Q29sbGVjdEJvb2subWV0aG9kXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvLyDpooTnuqZcclxuICAgICAgICAgICAgbGV0IGFwcG9pbnRCb29rcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5hcHBvaW50Qm9vay5nZXRBcHBvaW50Qm9vay51cmwgKyB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmFwcG9pbnRCb29rLmdldEFwcG9pbnRCb29rLm1ldGhvZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmFwcG9pbnREYXRhID0gYXBwb2ludEJvb2tzLmRhdGFcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSA9IGNvbGxlY3RCb29rcy5kYXRhXHJcbiAgICAgICAgICAgIHRoaXMuYm9ycm93RGF0YSA9IGxlbmRCb29rcy5kYXRhXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWUt5Lmm57GN5Ye66ZSZJywgZXJyb3IpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnbWUtbXlSb29tJylcclxuICAgIH1cclxuXHJcbn1cclxuIl19