'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _userInfo = require('./../../me/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _operation = require('./../../me/operation.js');

var _operation2 = _interopRequireDefault(_operation);

var _myRoom = require('./../../me/myRoom.js');

var _myRoom2 = _interopRequireDefault(_myRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import interfaces from '../../../interfaces'


var Me = function (_wepy$component) {
    _inherits(Me, _wepy$component);

    function Me() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Me);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Me.__proto__ || Object.getPrototypeOf(Me)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            userInfo: _userInfo2.default,
            operation: _operation2.default,
            myRoom: _myRoom2.default

        }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Me, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                console.log('me');

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

    return Me;
}(_wepy2.default.component);

exports.default = Me;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIk1lIiwiY29tcG9uZW50cyIsInVzZXJJbmZvIiwib3BlcmF0aW9uIiwibXlSb29tIiwiZGF0YSIsIm1ldGhvZHMiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBSEE7OztJQUlxQkEsRTs7Ozs7Ozs7Ozs7Ozs7a0xBRWpCQyxVLEdBQWE7QUFDVEMsd0NBRFM7QUFFVEMsMENBRlM7QUFHVEM7O0FBSFMsUyxRQU9iQyxJLEdBQU8sRSxRQUlQQyxPLEdBQVUsRTs7Ozs7Ozs7Ozs7O0FBSU5DLHdDQUFRQyxHQUFSLENBQVksSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpCd0IsZUFBS0MsUzs7a0JBQWhCVCxFIiwiZmlsZSI6Im1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCBpbnRlcmZhY2VzIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi8uLi9tZS91c2VySW5mbydcclxuaW1wb3J0IG9wZXJhdGlvbiBmcm9tICcuLi8uLi9tZS9vcGVyYXRpb24nXHJcbmltcG9ydCBteVJvb20gZnJvbSAnLi4vLi4vbWUvbXlSb29tJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIHVzZXJJbmZvLFxyXG4gICAgICAgIG9wZXJhdGlvbixcclxuICAgICAgICBteVJvb21cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ21lJylcclxuICAgIH1cclxufVxyXG4iXX0=