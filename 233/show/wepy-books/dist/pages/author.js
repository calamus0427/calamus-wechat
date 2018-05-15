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
var Author = function (_wepy$page) {
    _inherits(Author, _wepy$page);

    function Author() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Author);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Author.__proto__ || Object.getPrototypeOf(Author)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '作者简介',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.components = {}, _this.data = {
            author: '',
            author_intro: ''

        }, _this.mixins = [_login2.default], _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Author, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var book;
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
                                book = _context.sent;


                                this.author = book.data.author;
                                this.author_intro = book.data.author_intro;
                                this.$apply();

                            case 6:
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

    return Author;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Author , 'pages/author'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJjb25maWciLCJjb21wb25lbnRzIiwiZGF0YSIsImF1dGhvciIsImF1dGhvcl9pbnRybyIsIm1peGlucyIsIm1ldGhvZHMiLCJwYXJhbXMiLCJyZXF1ZXN0IiwidXJsIiwiaXNibiIsImhlYWRlciIsImJvb2siLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUNqQkMsTSxHQUFTO0FBQ0wsc0NBQTBCLE1BRHJCO0FBRUwsc0NBQTBCLE9BRnJCO0FBR0wsNENBQWdDO0FBSDNCLFMsUUFNVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0hDLG9CQUFRLEVBREw7QUFFSEMsMEJBQWM7O0FBRlgsUyxRQUtQQyxNLEdBQVMsaUIsUUFFVEMsTyxHQUFVLEU7Ozs7OztpR0FFR0MsTTs7Ozs7Ozt1Q0FDUSxlQUFLQyxPQUFMLENBQWE7QUFDMUJDLHlDQUFLLHlDQUF5Q0YsT0FBT0csSUFEM0I7QUFFMUJDLDRDQUFRO0FBQ0osd0RBQWdCO0FBRFo7QUFGa0IsaUNBQWIsQzs7O0FBQWJDLG9DOzs7QUFPSixxQ0FBS1QsTUFBTCxHQUFjUyxLQUFLVixJQUFMLENBQVVDLE1BQXhCO0FBQ0EscUNBQUtDLFlBQUwsR0FBb0JRLEtBQUtWLElBQUwsQ0FBVUUsWUFBOUI7QUFDQSxxQ0FBS1MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlCNEIsZUFBS0MsSTs7a0JBQXBCZixNIiwiZmlsZSI6ImF1dGhvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9taXhpbnMvbG9naW4nXHJcbi8vIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfkvZzogIXnroDku4snLFxyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ3doaXRlJyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjZmY3NzAwJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYXV0aG9yOiAnJyxcclxuICAgICAgICBhdXRob3JfaW50cm86ICcnXHJcblxyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gW2xvZ2luXVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IGJvb2sgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5kb3ViYW4uY29tL3YyL2Jvb2svaXNibi8nICsgcGFyYW1zLmlzYm4sXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdqc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuYXV0aG9yID0gYm9vay5kYXRhLmF1dGhvclxyXG4gICAgICAgIHRoaXMuYXV0aG9yX2ludHJvID0gYm9vay5kYXRhLmF1dGhvcl9pbnRyb1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbn1cclxuIl19