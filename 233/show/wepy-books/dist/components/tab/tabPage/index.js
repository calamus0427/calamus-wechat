'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _swiper = require('./../../index/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _rank = require('./../../index/rank.js');

var _rank2 = _interopRequireDefault(_rank);

var _recommend = require('./../../index/recommend.js');

var _recommend2 = _interopRequireDefault(_recommend);

var _search = require('./../../index/search.js');

var _search2 = _interopRequireDefault(_search);

var _load = require('./../../load.js');

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            topSwiper: _swiper2.default,
            rank: _rank2.default,
            recommend: _recommend2.default,
            search: _search2.default,
            load: _load2.default
        }, _this.data = {
            loadNum: 0,
            wait: true
        }, _this.events = {
            'indexLoadComplete': function indexLoadComplete(p1) {
                var comLength = Object.getOwnPropertyNames(_this.$com).length;
                _this.loadNum += 1;
                if (_this.loadNum === comLength - 1) {
                    _this.wait = false;
                }
            }
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log('index');
        }
    }]);

    return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJjb21wb25lbnRzIiwidG9wU3dpcGVyIiwicmFuayIsInJlY29tbWVuZCIsInNlYXJjaCIsImxvYWQiLCJkYXRhIiwibG9hZE51bSIsIndhaXQiLCJldmVudHMiLCJwMSIsImNvbUxlbmd0aCIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCIkY29tIiwibGVuZ3RoIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsVSxHQUFhO0FBQ1RDLHVDQURTO0FBRVRDLGdDQUZTO0FBR1RDLDBDQUhTO0FBSVRDLG9DQUpTO0FBS1RDO0FBTFMsUyxRQU9iQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FETjtBQUVIQyxrQkFBTTtBQUZILFMsUUFJUEMsTSxHQUFTO0FBQ0wsaUNBQXFCLDJCQUFDQyxFQUFELEVBQVE7QUFDekIsb0JBQUlDLFlBQVlDLE9BQU9DLG1CQUFQLENBQTJCLE1BQUtDLElBQWhDLEVBQXNDQyxNQUF0RDtBQUNBLHNCQUFLUixPQUFMLElBQWdCLENBQWhCO0FBQ0Esb0JBQUksTUFBS0EsT0FBTCxLQUFpQkksWUFBWSxDQUFqQyxFQUFvQztBQUNoQywwQkFBS0gsSUFBTCxHQUFZLEtBQVo7QUFFSDtBQUVKO0FBVEksUyxRQVdUUSxPLEdBQVUsRTs7Ozs7aUNBRUQ7QUFDTEMsb0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0g7Ozs7RUEzQmdDLGVBQUtDLFM7O2tCQUFyQnBCLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHN3aXBlciBmcm9tICcuLi8uLi9pbmRleC9zd2lwZXInXHJcbmltcG9ydCByYW5rIGZyb20gJy4uLy4uL2luZGV4L3JhbmsnXHJcbmltcG9ydCByZWNvbW1lbmQgZnJvbSAnLi4vLi4vaW5kZXgvcmVjb21tZW5kJ1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uLy4uL2luZGV4L3NlYXJjaCdcclxuaW1wb3J0IGxvYWQgZnJvbSAnLi4vLi4vbG9hZCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgdG9wU3dpcGVyOiBzd2lwZXIsXHJcbiAgICAgICAgcmFuayxcclxuICAgICAgICByZWNvbW1lbmQsXHJcbiAgICAgICAgc2VhcmNoLFxyXG4gICAgICAgIGxvYWRcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbG9hZE51bTogMCxcclxuICAgICAgICB3YWl0OiB0cnVlXHJcbiAgICB9XHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgICAgJ2luZGV4TG9hZENvbXBsZXRlJzogKHAxKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb21MZW5ndGggPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLiRjb20pLmxlbmd0aFxyXG4gICAgICAgICAgICB0aGlzLmxvYWROdW0gKz0gMVxyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkTnVtID09PSBjb21MZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhaXQgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleCcpXHJcbiAgICB9XHJcbn1cclxuIl19