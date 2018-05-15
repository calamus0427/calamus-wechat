'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_wepy$component) {
    _inherits(Tab, _wepy$component);

    function Tab() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            active: {
                twoWay: true
            }
        }, _this.data = {}, _this.methods = {
            change: function change(idx, evt) {
                this.active = +idx;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Tab, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log('tabBar');
        }
    }]);

    return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYkJhci5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsImFjdGl2ZSIsInR3b1dheSIsImRhdGEiLCJtZXRob2RzIiwiY2hhbmdlIiwiaWR4IiwiZXZ0IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7OztvTEFFakJDLEssR0FBUTtBQUNKQyxvQkFBUTtBQUNKQyx3QkFBUTtBQURKO0FBREosUyxRQUtSQyxJLEdBQU8sRSxRQUdQQyxPLEdBQVU7QUFDTkMsa0JBRE0sa0JBQ0VDLEdBREYsRUFDT0MsR0FEUCxFQUNZO0FBQ2QscUJBQUtOLE1BQUwsR0FBYyxDQUFDSyxHQUFmO0FBQ0g7QUFISyxTOzs7OztpQ0FNQTtBQUNORSxvQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDSDs7OztFQWxCNEIsZUFBS0MsUzs7a0JBQWpCWCxHIiwiZmlsZSI6InRhYkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBjaGFuZ2UgKGlkeCwgZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9ICtpZHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhYkJhcicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=