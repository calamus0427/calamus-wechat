'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import interfaces from './interfaces'
var _class = function (_wepy$app) {
    _inherits(_class, _wepy$app);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.config = {
            'pages': ['pages/index', 'pages/pay', 'pages/query', 'pages/appointment', 'pages/bookList', 'pages/bookDetail', 'pages/editInfo', 'pages/lendRoom', 'pages/collect', 'pages/message', 'pages/chat', 'pages/catalog', 'pages/author'],
            'window': {
                'backgroundTextStyle': 'light',
                'navigationBarBackgroundColor': '#3b3a40',
                'navigationBarTitleText': 'WeChat',
                'navigationBarTextStyle': 'black'
            }
        };

        _this.use('promisify');
        _this.use('requestfix');
        return _this;
    }

    _createClass(_class, [{
        key: 'onLaunch',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return console.log('appLaunch');

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLaunch() {
                return _ref.apply(this, arguments);
            }

            return onLaunch;
        }()
    }]);

    return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJ1c2UiLCJjb25zb2xlIiwibG9nIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBNEJJLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0F6QmRBLE1BeUJjLEdBekJMO0FBQ0wscUJBQVMsQ0FDTCxhQURLLEVBRUwsV0FGSyxFQUdMLGFBSEssRUFJTCxtQkFKSyxFQUtMLGdCQUxLLEVBTUwsa0JBTkssRUFPTCxnQkFQSyxFQVFMLGdCQVJLLEVBU0wsZUFUSyxFQVVMLGVBVkssRUFXTCxZQVhLLEVBWUwsZUFaSyxFQWFMLGNBYkssQ0FESjtBQWlCTCxzQkFBVTtBQUNOLHVDQUF1QixPQURqQjtBQUVOLGdEQUFnQyxTQUYxQjtBQUdOLDBDQUEwQixRQUhwQjtBQUlOLDBDQUEwQjtBQUpwQjtBQWpCTCxTQXlCSzs7QUFFVixjQUFLQyxHQUFMLENBQVMsV0FBVDtBQUNBLGNBQUtBLEdBQUwsQ0FBUyxZQUFUO0FBSFU7QUFJYjs7Ozs7Ozs7Ozs7dUNBSVNDLFFBQVFDLEdBQVIsQ0FBWSxXQUFaLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQ2UsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuLy8gaW1wb3J0IGludGVyZmFjZXMgZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgJ3BhZ2VzJzogW1xyXG4gICAgICAgICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgICAgICAncGFnZXMvcGF5JyxcclxuICAgICAgICAgICAgJ3BhZ2VzL3F1ZXJ5JyxcclxuICAgICAgICAgICAgJ3BhZ2VzL2FwcG9pbnRtZW50JyxcclxuICAgICAgICAgICAgJ3BhZ2VzL2Jvb2tMaXN0JyxcclxuICAgICAgICAgICAgJ3BhZ2VzL2Jvb2tEZXRhaWwnLFxyXG4gICAgICAgICAgICAncGFnZXMvZWRpdEluZm8nLFxyXG4gICAgICAgICAgICAncGFnZXMvbGVuZFJvb20nLFxyXG4gICAgICAgICAgICAncGFnZXMvY29sbGVjdCcsXHJcbiAgICAgICAgICAgICdwYWdlcy9tZXNzYWdlJyxcclxuICAgICAgICAgICAgJ3BhZ2VzL2NoYXQnLFxyXG4gICAgICAgICAgICAncGFnZXMvY2F0YWxvZycsXHJcbiAgICAgICAgICAgICdwYWdlcy9hdXRob3InXHJcblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ3dpbmRvdyc6IHtcclxuICAgICAgICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxyXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjM2IzYTQwJyxcclxuICAgICAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnV2VDaGF0JyxcclxuICAgICAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcclxuICAgICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25MYXVuY2goKSB7XHJcblxyXG4gICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKCdhcHBMYXVuY2gnKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=