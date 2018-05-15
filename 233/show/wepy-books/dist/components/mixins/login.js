'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../interfaces/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var login = function (_wepy$mixin) {
    _inherits(login, _wepy$mixin);

    function login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = login.__proto__ || Object.getPrototypeOf(login)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            userId: ''
        }, _this.methods = {
            tap: function tap() {
                this.mixin = 'mixin data was changed';
                console.log('mixin method tap');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(login, [{
        key: 'getStoreById',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var userId, _userId;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('进入了');
                                _context.prev = 1;
                                _context.next = 4;
                                return _wepy2.default.getStorage({
                                    key: 'userId'
                                });

                            case 4:
                                userId = _context.sent;

                                this.userId = userId.data;
                                this.$apply();
                                _context.next = 23;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);
                                _context.prev = 11;
                                _context.next = 14;
                                return _index2.default.login1();

                            case 14:
                                _context.next = 16;
                                return _wepy2.default.getStorage({
                                    key: 'userId'
                                });

                            case 16:
                                _userId = _context.sent;


                                this.userId = _userId.data;
                                this.$apply();
                                _context.next = 23;
                                break;

                            case 21:
                                _context.prev = 21;
                                _context.t1 = _context['catch'](11);

                            case 23:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 9], [11, 21]]);
            }));

            function getStoreById() {
                return _ref2.apply(this, arguments);
            }

            return getStoreById;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            console.log('mixin onLoad');
        }
    }]);

    return login;
}(_wepy2.default.mixin);

exports.default = login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwiZGF0YSIsInVzZXJJZCIsIm1ldGhvZHMiLCJ0YXAiLCJtaXhpbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdG9yYWdlIiwia2V5IiwiJGFwcGx5IiwibG9naW4xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQyxvQkFBUTtBQURMLFMsUUFHUEMsTyxHQUFVO0FBQ05DLGVBRE0saUJBQ0E7QUFDRixxQkFBS0MsS0FBTCxHQUFhLHdCQUFiO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDSDtBQUpLLFM7Ozs7Ozs7Ozs7Ozs7QUFPTkQsd0NBQVFDLEdBQVIsQ0FBWSxLQUFaOzs7dUNBRXVCLGVBQUtDLFVBQUwsQ0FBZ0I7QUFDL0JDLHlDQUFLO0FBRDBCLGlDQUFoQixDOzs7QUFBZlAsc0M7O0FBR0oscUNBQUtBLE1BQUwsR0FBY0EsT0FBT0QsSUFBckI7QUFDQSxxQ0FBS1MsTUFBTDs7Ozs7Ozs7O3VDQUdVLGdCQUFZQyxNQUFaLEU7Ozs7dUNBQ2EsZUFBS0gsVUFBTCxDQUFnQjtBQUMvQkMseUNBQUs7QUFEMEIsaUNBQWhCLEM7OztBQUFmUCx1Qzs7O0FBSUoscUNBQUtBLE1BQUwsR0FBY0EsUUFBT0QsSUFBckI7QUFDQSxxQ0FBS1MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQVFIO0FBQ0xKLG9CQUFRQyxHQUFSLENBQVksY0FBWjtBQUNIOzs7O0VBcEM4QixlQUFLRixLOztrQkFBbkJMLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgaW50ZXJmYWNlc3MgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9naW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXNlcklkOiAnJ1xyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICB0YXAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWl4aW4gPSAnbWl4aW4gZGF0YSB3YXMgY2hhbmdlZCdcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21peGluIG1ldGhvZCB0YXAnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGdldFN0b3JlQnlJZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6L+b5YWl5LqGJylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXNlcklkID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3VzZXJJZCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQuZGF0YVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGludGVyZmFjZXNzLmxvZ2luMSgpXHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICd1c2VySWQnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkLmRhdGFcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWl4aW4gb25Mb2FkJylcclxuICAgIH1cclxufVxyXG4iXX0=