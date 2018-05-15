'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _classifyIndex = require('./../../classify/classifyIndex.js');

var _classifyIndex2 = _interopRequireDefault(_classifyIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import header from '../../classify/header'
// import tab from '../../classify/tab'
// import classifyBook from '../../classify/classifyBook'


var Message = function (_wepy$component) {
    _inherits(Message, _wepy$component);

    function Message() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            // userHeader: header,
            // tab,
            // classifyBook,
            classifyIndex: _classifyIndex2.default
        }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('classify');

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

    return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJjb21wb25lbnRzIiwiY2xhc3NpZnlJbmRleCIsImRhdGEiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBSEE7QUFDQTtBQUNBOzs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUVqQkMsVSxHQUFhO0FBQ1Q7QUFDQTtBQUNBO0FBQ0FDO0FBSlMsUyxRQU9iQyxJLEdBQU8sRSxRQUdQQyxPLEdBQVUsRTs7Ozs7Ozs7Ozs7QUFLTkMsd0NBQVFDLEdBQVIsQ0FBWSxVQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakI2QixlQUFLQyxTOztrQkFBckJQLE8iLCJmaWxlIjoiY2xhc3NpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuLy8gaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi9jbGFzc2lmeS9oZWFkZXInXHJcbi8vIGltcG9ydCB0YWIgZnJvbSAnLi4vLi4vY2xhc3NpZnkvdGFiJ1xyXG4vLyBpbXBvcnQgY2xhc3NpZnlCb29rIGZyb20gJy4uLy4uL2NsYXNzaWZ5L2NsYXNzaWZ5Qm9vaydcclxuaW1wb3J0IGNsYXNzaWZ5SW5kZXggZnJvbSAnLi4vLi4vY2xhc3NpZnkvY2xhc3NpZnlJbmRleCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIC8vIHVzZXJIZWFkZXI6IGhlYWRlcixcclxuICAgICAgICAvLyB0YWIsXHJcbiAgICAgICAgLy8gY2xhc3NpZnlCb29rLFxyXG4gICAgICAgIGNsYXNzaWZ5SW5kZXhcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG5cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xhc3NpZnknKVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=