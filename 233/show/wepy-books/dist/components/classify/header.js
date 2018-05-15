'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import interfaces from '../../interfaces/index'
var header = function (_wepy$component) {
    _inherits(header, _wepy$component);

    function header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = header.__proto__ || Object.getPrototypeOf(header)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            userInfo: {}
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(header, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('classify-header');

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return header;
}(_wepy2.default.component);

exports.default = header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJoZWFkZXIiLCJjb21wb25lbnRzIiwiZGF0YSIsInVzZXJJbmZvIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUVqQkMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLHNCQUFVO0FBRFAsUyxRQUtQQyxPLEdBQVUsRTs7Ozs7Ozs7Ozs7QUFJTkMsd0NBQVFDLEdBQVIsQ0FBWSxpQkFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWQ0QixlQUFLQyxTOztrQkFBcEJQLE0iLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCBpbnRlcmZhY2VzIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlYWRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXNlckluZm86IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsYXNzaWZ5LWhlYWRlcicpXHJcbiAgICB9XHJcbn1cclxuIl19