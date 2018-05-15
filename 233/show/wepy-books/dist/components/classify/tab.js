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

var tab = function (_wepy$component) {
    _inherits(tab, _wepy$component);

    function tab() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tab.__proto__ || Object.getPrototypeOf(tab)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            class: ['tab-hover', '', '', '', '', '', '']

        }, _this.methods = {
            changeCurrent: function changeCurrent(currentTab) {
                var num = currentTab.charCodeAt() - 97;
                var arr = this.class;
                for (var i = 0; i < arr.length; i++) {
                    if (i === num) {
                        arr[i] = 'tab-hover';
                    } else {
                        arr[i] = '';
                    }
                }
                this.class = arr;
                this.$invoke('../classifyBook', 'changeCurrent', currentTab);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(tab, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log('classify-tab');
        }
    }]);

    return tab;
}(_wepy2.default.component);

exports.default = tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJ0YWIiLCJjb21wb25lbnRzIiwiZGF0YSIsImNsYXNzIiwibWV0aG9kcyIsImNoYW5nZUN1cnJlbnQiLCJjdXJyZW50VGFiIiwibnVtIiwiY2hhckNvZGVBdCIsImFyciIsImkiLCJsZW5ndGgiLCIkaW52b2tlIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztvTEFFakJDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNIQyxtQkFBTyxDQUFDLFdBQUQsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDOztBQURKLFMsUUFJUEMsTyxHQUFVO0FBQ05DLHlCQURNLHlCQUNRQyxVQURSLEVBQ29CO0FBQ3RCLG9CQUFJQyxNQUFNRCxXQUFXRSxVQUFYLEtBQTBCLEVBQXBDO0FBQ0Esb0JBQUlDLE1BQU0sS0FBS04sS0FBZjtBQUNBLHFCQUFLLElBQUlPLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsSUFBSUUsTUFBeEIsRUFBZ0NELEdBQWhDLEVBQXFDO0FBQ2pDLHdCQUFJQSxNQUFNSCxHQUFWLEVBQWU7QUFDWEUsNEJBQUlDLENBQUosSUFBUyxXQUFUO0FBQ0gscUJBRkQsTUFFTztBQUNIRCw0QkFBSUMsQ0FBSixJQUFTLEVBQVQ7QUFDSDtBQUNKO0FBQ0QscUJBQUtQLEtBQUwsR0FBYU0sR0FBYjtBQUNBLHFCQUFLRyxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsZUFBaEMsRUFBaUROLFVBQWpEO0FBRUg7QUFkSyxTOzs7OztpQ0FpQkQ7QUFDTE8sb0JBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0g7Ozs7RUE1QjRCLGVBQUtDLFM7O2tCQUFqQmYsRyIsImZpbGUiOiJ0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBjbGFzczogWyd0YWItaG92ZXInLCAnJywgJycsICcnLCAnJywgJycsICcnXVxyXG5cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgY2hhbmdlQ3VycmVudChjdXJyZW50VGFiKSB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSBjdXJyZW50VGFiLmNoYXJDb2RlQXQoKSAtIDk3XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSB0aGlzLmNsYXNzXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gbnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gJ3RhYi1ob3ZlcidcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsYXNzID0gYXJyXHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnLi4vY2xhc3NpZnlCb29rJywgJ2NoYW5nZUN1cnJlbnQnLCBjdXJyZW50VGFiKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGFzc2lmeS10YWInKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==