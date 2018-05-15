'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var load = function (_wepy$component) {
    _inherits(load, _wepy$component);

    function load() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, load);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = load.__proto__ || Object.getPrototypeOf(load)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            index: ''
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(load, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('load');
                                if (this.$root.$name === 'index') {
                                    this.index = 1;
                                } else {
                                    this.index = 0;
                                }

                            case 2:
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

    return load;
}(_wepy2.default.component);

exports.default = load;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWQuanMiXSwibmFtZXMiOlsibG9hZCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW5kZXgiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsIiRyb290IiwiJG5hbWUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFFakJDLFUsR0FBYSxFLFFBSWJDLEksR0FBTztBQUNIQyxtQkFBTztBQURKLFMsUUFJUEMsTyxHQUFVLEU7Ozs7Ozs7Ozs7O0FBR05DLHdDQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLG9DQUFJLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixPQUF6QixFQUFrQztBQUM5Qix5Q0FBS0wsS0FBTCxHQUFhLENBQWI7QUFDSCxpQ0FGRCxNQUVPO0FBQ0gseUNBQUtBLEtBQUwsR0FBYSxDQUFiO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsQnlCLGVBQUtNLFM7O2tCQUFsQlQsSSIsImZpbGUiOiJsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvYWQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBpbmRleDogJydcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkJylcclxuICAgICAgICBpZiAodGhpcy4kcm9vdC4kbmFtZSA9PT0gJ2luZGV4Jykge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=