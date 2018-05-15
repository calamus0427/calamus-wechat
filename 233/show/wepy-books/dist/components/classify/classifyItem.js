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

var classifyItem = function (_wepy$component) {
    _inherits(classifyItem, _wepy$component);

    function classifyItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, classifyItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = classifyItem.__proto__ || Object.getPrototypeOf(classifyItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            type: Object
        }, _this.components = {}, _this.data = {
            url: ['../resources/icons/wenhua/', '../resources/icons/liuxing/', '../resources/icons/wenxue/', '../resources/icons/shenghuo/', '../resources/icons/jingguan/', '../resources/icons/keji/']
        }, _this.methods = {
            gotoBookList: function gotoBookList(id, title) {

                _wepy2.default.navigateTo({
                    url: 'bookList?classifyId=' + id + '&title=' + title
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(classifyItem, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
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

    return classifyItem;
}(_wepy2.default.component);

exports.default = classifyItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5SXRlbS5qcyJdLCJuYW1lcyI6WyJjbGFzc2lmeUl0ZW0iLCJwcm9wcyIsInR5cGUiLCJPYmplY3QiLCJjb21wb25lbnRzIiwiZGF0YSIsInVybCIsIm1ldGhvZHMiLCJnb3RvQm9va0xpc3QiLCJpZCIsInRpdGxlIiwibmF2aWdhdGVUbyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsSyxHQUFRO0FBQ0pDLGtCQUFNQztBQURGLFMsUUFHUkMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLGlCQUFLLENBQUMsNEJBQUQsRUFBK0IsNkJBQS9CLEVBQThELDRCQUE5RCxFQUE0Riw4QkFBNUYsRUFBNEgsOEJBQTVILEVBQTRKLDBCQUE1SjtBQURGLFMsUUFHUEMsTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxFQURQLEVBQ1dDLEtBRFgsRUFDa0I7O0FBRXBCLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pMLGtEQUE0QkcsRUFBNUIsZUFBd0NDO0FBRDVCLGlCQUFoQjtBQUdIO0FBTkssUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBVjRCLGVBQUtFLFM7O2tCQUExQlosWSIsImZpbGUiOiJjbGFzc2lmeUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuLy8gaW1wb3J0IGludGVyZmFjZXMgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsYXNzaWZ5SXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdFxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHVybDogWycuLi9yZXNvdXJjZXMvaWNvbnMvd2VuaHVhLycsICcuLi9yZXNvdXJjZXMvaWNvbnMvbGl1eGluZy8nLCAnLi4vcmVzb3VyY2VzL2ljb25zL3dlbnh1ZS8nLCAnLi4vcmVzb3VyY2VzL2ljb25zL3NoZW5naHVvLycsICcuLi9yZXNvdXJjZXMvaWNvbnMvamluZ2d1YW4vJywgJy4uL3Jlc291cmNlcy9pY29ucy9rZWppLyddXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGdvdG9Cb29rTGlzdChpZCwgdGl0bGUpIHtcclxuXHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGBib29rTGlzdD9jbGFzc2lmeUlkPSR7aWR9JnRpdGxlPSR7dGl0bGV9YFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==