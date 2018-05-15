'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _login = require('./../components/mixins/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { api } from '../config'
var Catalog = function (_wepy$page) {
    _inherits(Catalog, _wepy$page);

    function Catalog() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Catalog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Catalog.__proto__ || Object.getPrototypeOf(Catalog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '目录',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.components = {}, _this.data = {
            catalog: ''
        }, _this.mixins = [_login2.default], _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Catalog, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _wepy2.default.request({
                                    url: 'https://api.douban.com/v2/book/isbn/' + params.isbn,
                                    header: {
                                        'Content-Type': 'json'
                                    }
                                });

                            case 2:
                                res = _context.sent;

                                this.catalog = res.data.catalog;
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad(_x) {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Catalog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Catalog , 'pages/catalog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiXSwibmFtZXMiOlsiQ2F0YWxvZyIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwiY2F0YWxvZyIsIm1peGlucyIsIm1ldGhvZHMiLCJwYXJhbXMiLCJyZXF1ZXN0IiwidXJsIiwiaXNibiIsImhlYWRlciIsInJlcyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2pCQyxNLEdBQVM7QUFDTCxzQ0FBMEIsSUFEckI7QUFFTCxzQ0FBMEIsT0FGckI7QUFHTCw0Q0FBZ0M7QUFIM0IsUyxRQU1UQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDSEMscUJBQVM7QUFETixTLFFBR1BDLE0sR0FBUyxpQixRQUVUQyxPLEdBQVUsRTs7Ozs7O2lHQUVHQyxNOzs7Ozs7O3VDQUNPLGVBQUtDLE9BQUwsQ0FBYTtBQUN6QkMseUNBQUsseUNBQXlDRixPQUFPRyxJQUQ1QjtBQUV6QkMsNENBQVE7QUFDSix3REFBZ0I7QUFEWjtBQUZpQixpQ0FBYixDOzs7QUFBWkMsbUM7O0FBTUoscUNBQUtSLE9BQUwsR0FBZVEsSUFBSVQsSUFBSixDQUFTQyxPQUF4QjtBQUNBLHFDQUFLUyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUI2QixlQUFLQyxJOztrQkFBckJkLE8iLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9taXhpbnMvbG9naW4nXHJcbi8vIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn55uu5b2VJyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnI2ZmNzcwMCdcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGNhdGFsb2c6ICcnXHJcbiAgICB9XHJcbiAgICBtaXhpbnMgPSBbbG9naW5dXHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZChwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZG91YmFuLmNvbS92Mi9ib29rL2lzYm4vJyArIHBhcmFtcy5pc2JuLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jYXRhbG9nID0gcmVzLmRhdGEuY2F0YWxvZ1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbn1cclxuIl19