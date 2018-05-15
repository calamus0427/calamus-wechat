'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _storage = require('./../../utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import interfaces from '../../interfaces/index'
var Me = function (_wepy$component) {
    _inherits(Me, _wepy$component);

    function Me() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Me);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Me.__proto__ || Object.getPrototypeOf(Me)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            userInfo: {},
            isLogin: false,
            personShow: true
        }, _this.methods = {
            userInfoHandler: function userInfoHandler(e) {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var userInfo;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(e.errMsg !== 'getUserInfo:fail auth deny')) {
                                        _context.next = 7;
                                        break;
                                    }

                                    userInfo = JSON.parse(e.detail.rawData);
                                    _context.next = 4;
                                    return _storage2.default.setStorage({
                                        'userInfo': userInfo
                                    });

                                case 4:
                                    _this2.isLogin = true;
                                    _this2.userInfo = userInfo;
                                    _this2.$apply();

                                case 7:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            },
            personChange: function personChange(e) {
                wx.setStorageSync('personShow', e.detail.value);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Me, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var userInfo, Person;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _wepy2.default.getStorage({
                                    key: 'userInfo'
                                });

                            case 3:
                                userInfo = _context2.sent;
                                Person = wx.getStorageSync('personShow');

                                console.log(Person);
                                if (Person !== '') {
                                    this.personShow = Person;
                                } else {
                                    this.personShow = true;
                                }
                                this.userInfo = userInfo.data;
                                this.isLogin = true;
                                this.$apply();
                                _context2.next = 15;
                                break;

                            case 12:
                                _context2.prev = 12;
                                _context2.t0 = _context2['catch'](0);

                                this.isLogin = false;

                            case 15:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 12]]);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Me;
}(_wepy2.default.component);

exports.default = Me;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbIk1lIiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VySW5mbyIsImlzTG9naW4iLCJwZXJzb25TaG93IiwibWV0aG9kcyIsInVzZXJJbmZvSGFuZGxlciIsImUiLCJlcnJNc2ciLCJKU09OIiwicGFyc2UiLCJkZXRhaWwiLCJyYXdEYXRhIiwic2V0U3RvcmFnZSIsIiRhcHBseSIsInBlcnNvbkNoYW5nZSIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCJ2YWx1ZSIsImdldFN0b3JhZ2UiLCJrZXkiLCJQZXJzb24iLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUNxQkEsRTs7Ozs7Ozs7Ozs7Ozs7a0xBRWpCQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDSEMsc0JBQVUsRUFEUDtBQUVIQyxxQkFBUyxLQUZOO0FBR0hDLHdCQUFZO0FBSFQsUyxRQU1QQyxPLEdBQVU7QUFDQUMsMkJBREEsMkJBQ2dCQyxDQURoQixFQUNtQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUNqQkEsRUFBRUMsTUFBRixLQUFhLDRCQURJO0FBQUE7QUFBQTtBQUFBOztBQUViTiw0Q0FGYSxHQUVGTyxLQUFLQyxLQUFMLENBQVdILEVBQUVJLE1BQUYsQ0FBU0MsT0FBcEIsQ0FGRTtBQUFBO0FBQUEsMkNBR1gsa0JBQU1DLFVBQU4sQ0FBaUI7QUFDbkIsb0RBQVlYO0FBRE8scUNBQWpCLENBSFc7O0FBQUE7QUFNakIsMkNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsMkNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsMkNBQUtZLE1BQUw7O0FBUmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVXhCLGFBWEs7QUFZTkMsd0JBWk0sd0JBWU9SLENBWlAsRUFZVTtBQUNaUyxtQkFBR0MsY0FBSCxDQUFrQixZQUFsQixFQUFnQ1YsRUFBRUksTUFBRixDQUFTTyxLQUF6QztBQUNIO0FBZEssUzs7Ozs7Ozs7Ozs7Ozs7dUNBa0JtQixlQUFLQyxVQUFMLENBQWdCO0FBQ2pDQyx5Q0FBSztBQUQ0QixpQ0FBaEIsQzs7O0FBQWpCbEIsd0M7QUFHQW1CLHNDLEdBQVNMLEdBQUdNLGNBQUgsQ0FBa0IsWUFBbEIsQzs7QUFDYkMsd0NBQVFDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBLG9DQUFJQSxXQUFXLEVBQWYsRUFBbUI7QUFDZix5Q0FBS2pCLFVBQUwsR0FBa0JpQixNQUFsQjtBQUNILGlDQUZELE1BRU87QUFDSCx5Q0FBS2pCLFVBQUwsR0FBa0IsSUFBbEI7QUFDSDtBQUNELHFDQUFLRixRQUFMLEdBQWdCQSxTQUFTRCxJQUF6QjtBQUNBLHFDQUFLRSxPQUFMLEdBQWUsSUFBZjtBQUNBLHFDQUFLVyxNQUFMOzs7Ozs7OztBQUVBLHFDQUFLWCxPQUFMLEdBQWUsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTVDb0IsZUFBS3NCLFM7O2tCQUFoQjFCLEUiLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnXHJcbi8vIGltcG9ydCBpbnRlcmZhY2VzIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXNlckluZm86IHt9LFxyXG4gICAgICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgICAgIHBlcnNvblNob3c6IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGFzeW5jIHVzZXJJbmZvSGFuZGxlcihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmVyck1zZyAhPT0gJ2dldFVzZXJJbmZvOmZhaWwgYXV0aCBkZW55Jykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShlLmRldGFpbC5yYXdEYXRhKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgc3RvcmUuc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJJbmZvJzogdXNlckluZm8sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2luID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBlcnNvbkNoYW5nZShlKSB7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdwZXJzb25TaG93JywgZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICd1c2VySW5mbydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IFBlcnNvbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCdwZXJzb25TaG93JylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coUGVyc29uKVxyXG4gICAgICAgICAgICBpZiAoUGVyc29uICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzb25TaG93ID0gUGVyc29uXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvblNob3cgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJJbmZvLmRhdGFcclxuICAgICAgICAgICAgdGhpcy5pc0xvZ2luID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvZ2luID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=