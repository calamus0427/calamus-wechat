'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classifyBook = function (_wepy$component) {
    _inherits(classifyBook, _wepy$component);

    function classifyBook() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, classifyBook);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = classifyBook.__proto__ || Object.getPrototypeOf(classifyBook)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            currentTab: 'a',
            culture: {},
            popular: {},
            literature: {},
            life: {},
            economy: {},
            technology: {}
        }, _this.methods = {
            gotodetail: function gotodetail(e) {
                _wepy2.default.navigateTo({
                    url: 'bookList?classifyId=' + e.target.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(classifyBook, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var culture, popular, literature, life, economy, technology;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('classify-book');
                                _context.prev = 1;
                                _context.next = 4;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '2',
                                    method: _config.api.common.classify.method
                                });

                            case 4:
                                culture = _context.sent;

                                this.culture = culture.data;

                                // 流行
                                _context.next = 8;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '3',
                                    method: _config.api.common.classify.method
                                });

                            case 8:
                                popular = _context.sent;

                                this.popular = popular.data;

                                // 文学
                                _context.next = 12;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '4',
                                    method: _config.api.common.classify.method
                                });

                            case 12:
                                literature = _context.sent;

                                this.literature = literature.data;

                                // 生活
                                _context.next = 16;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '5',
                                    method: _config.api.common.classify.method
                                });

                            case 16:
                                life = _context.sent;

                                this.life = life.data;

                                // 经管
                                _context.next = 20;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '6',
                                    method: _config.api.common.classify.method
                                });

                            case 20:
                                economy = _context.sent;

                                this.economy = economy.data;

                                // 科技
                                _context.next = 24;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '7',
                                    method: _config.api.common.classify.method
                                });

                            case 24:
                                technology = _context.sent;

                                this.technology = technology.data;

                                this.$apply();
                                _context.next = 32;
                                break;

                            case 29:
                                _context.prev = 29;
                                _context.t0 = _context['catch'](1);

                                _wepy2.default.showModal({
                                    title: '提示',
                                    content: '\u83B7\u53D6classify\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165.'
                                });

                            case 32:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 29]]);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'changeCurrent',
        value: function changeCurrent(currentTab) {
            this.currentTab = currentTab;
            this.$apply();
        }
    }]);

    return classifyBook;
}(_wepy2.default.component);

exports.default = classifyBook;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5Qm9vay5qcyJdLCJuYW1lcyI6WyJjbGFzc2lmeUJvb2siLCJjb21wb25lbnRzIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJjdWx0dXJlIiwicG9wdWxhciIsImxpdGVyYXR1cmUiLCJsaWZlIiwiZWNvbm9teSIsInRlY2hub2xvZ3kiLCJtZXRob2RzIiwiZ290b2RldGFpbCIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGFyZ2V0IiwiZGF0YXNldCIsImlkIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJjb21tb24iLCJjbGFzc2lmeSIsIm1ldGhvZCIsIiRhcHBseSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLHdCQUFZLEdBRFQ7QUFFSEMscUJBQVMsRUFGTjtBQUdIQyxxQkFBUyxFQUhOO0FBSUhDLHdCQUFZLEVBSlQ7QUFLSEMsa0JBQU0sRUFMSDtBQU1IQyxxQkFBUyxFQU5OO0FBT0hDLHdCQUFZO0FBUFQsUyxRQVNQQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ0tDLENBREwsRUFDUTtBQUNWLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLHlCQUF5QkYsRUFBRUcsTUFBRixDQUFTQyxPQUFULENBQWlCQztBQURuQyxpQkFBaEI7QUFHSDtBQUxLLFM7Ozs7Ozs7Ozs7OztBQVFOQyx3Q0FBUUMsR0FBUixDQUFZLGVBQVo7Ozt1Q0FHd0IsZUFBS0MsT0FBTCxDQUFhO0FBQzdCTix5Q0FBSyxZQUFJTyxNQUFKLENBQVdDLFFBQVgsQ0FBb0JSLEdBQXBCLEdBQTBCLEdBREY7QUFFN0JTLDRDQUFRLFlBQUlGLE1BQUosQ0FBV0MsUUFBWCxDQUFvQkM7QUFGQyxpQ0FBYixDOzs7QUFBaEJuQix1Qzs7QUFJSixxQ0FBS0EsT0FBTCxHQUFlQSxRQUFRRixJQUF2Qjs7QUFFQTs7dUNBQ29CLGVBQUtrQixPQUFMLENBQWE7QUFDN0JOLHlDQUFLLFlBQUlPLE1BQUosQ0FBV0MsUUFBWCxDQUFvQlIsR0FBcEIsR0FBMEIsR0FERjtBQUU3QlMsNENBQVEsWUFBSUYsTUFBSixDQUFXQyxRQUFYLENBQW9CQztBQUZDLGlDQUFiLEM7OztBQUFoQmxCLHVDOztBQUlKLHFDQUFLQSxPQUFMLEdBQWVBLFFBQVFILElBQXZCOztBQUVBOzt1Q0FDdUIsZUFBS2tCLE9BQUwsQ0FBYTtBQUNoQ04seUNBQUssWUFBSU8sTUFBSixDQUFXQyxRQUFYLENBQW9CUixHQUFwQixHQUEwQixHQURDO0FBRWhDUyw0Q0FBUSxZQUFJRixNQUFKLENBQVdDLFFBQVgsQ0FBb0JDO0FBRkksaUNBQWIsQzs7O0FBQW5CakIsMEM7O0FBSUoscUNBQUtBLFVBQUwsR0FBa0JBLFdBQVdKLElBQTdCOztBQUVBOzt1Q0FDaUIsZUFBS2tCLE9BQUwsQ0FBYTtBQUMxQk4seUNBQUssWUFBSU8sTUFBSixDQUFXQyxRQUFYLENBQW9CUixHQUFwQixHQUEwQixHQURMO0FBRTFCUyw0Q0FBUSxZQUFJRixNQUFKLENBQVdDLFFBQVgsQ0FBb0JDO0FBRkYsaUNBQWIsQzs7O0FBQWJoQixvQzs7QUFJSixxQ0FBS0EsSUFBTCxHQUFZQSxLQUFLTCxJQUFqQjs7QUFFQTs7dUNBQ29CLGVBQUtrQixPQUFMLENBQWE7QUFDN0JOLHlDQUFLLFlBQUlPLE1BQUosQ0FBV0MsUUFBWCxDQUFvQlIsR0FBcEIsR0FBMEIsR0FERjtBQUU3QlMsNENBQVEsWUFBSUYsTUFBSixDQUFXQyxRQUFYLENBQW9CQztBQUZDLGlDQUFiLEM7OztBQUFoQmYsdUM7O0FBSUoscUNBQUtBLE9BQUwsR0FBZUEsUUFBUU4sSUFBdkI7O0FBRUE7O3VDQUN1QixlQUFLa0IsT0FBTCxDQUFhO0FBQ2hDTix5Q0FBSyxZQUFJTyxNQUFKLENBQVdDLFFBQVgsQ0FBb0JSLEdBQXBCLEdBQTBCLEdBREM7QUFFaENTLDRDQUFRLFlBQUlGLE1BQUosQ0FBV0MsUUFBWCxDQUFvQkM7QUFGSSxpQ0FBYixDOzs7QUFBbkJkLDBDOztBQUlKLHFDQUFLQSxVQUFMLEdBQWtCQSxXQUFXUCxJQUE3Qjs7QUFFQSxxQ0FBS3NCLE1BQUw7Ozs7Ozs7O0FBRUEsK0NBQUtDLFNBQUwsQ0FBZTtBQUNYQywyQ0FBTyxJQURJO0FBRVhDO0FBRlcsaUNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNTXhCLFUsRUFBWTtBQUN0QixpQkFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxpQkFBS3FCLE1BQUw7QUFDSDs7OztFQTVFcUMsZUFBS0ksUzs7a0JBQTFCNUIsWSIsImZpbGUiOiJjbGFzc2lmeUJvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjbGFzc2lmeUJvb2sgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgY3VycmVudFRhYjogJ2EnLFxyXG4gICAgICAgIGN1bHR1cmU6IHt9LFxyXG4gICAgICAgIHBvcHVsYXI6IHt9LFxyXG4gICAgICAgIGxpdGVyYXR1cmU6IHt9LFxyXG4gICAgICAgIGxpZmU6IHt9LFxyXG4gICAgICAgIGVjb25vbXk6IHt9LFxyXG4gICAgICAgIHRlY2hub2xvZ3k6IHt9XHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGdvdG9kZXRhaWwoZSkge1xyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnYm9va0xpc3Q/Y2xhc3NpZnlJZD0nICsgZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xhc3NpZnktYm9vaycpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8g5paH5YyWXHJcbiAgICAgICAgICAgIGxldCBjdWx0dXJlID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLmNvbW1vbi5jbGFzc2lmeS51cmwgKyAnMicsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5jb21tb24uY2xhc3NpZnkubWV0aG9kLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmN1bHR1cmUgPSBjdWx0dXJlLmRhdGFcclxuXHJcbiAgICAgICAgICAgIC8vIOa1geihjFxyXG4gICAgICAgICAgICBsZXQgcG9wdWxhciA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5jb21tb24uY2xhc3NpZnkudXJsICsgJzMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29tbW9uLmNsYXNzaWZ5Lm1ldGhvZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGFyID0gcG9wdWxhci5kYXRhXHJcblxyXG4gICAgICAgICAgICAvLyDmloflraZcclxuICAgICAgICAgICAgbGV0IGxpdGVyYXR1cmUgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBhcGkuY29tbW9uLmNsYXNzaWZ5LnVybCArICc0JyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmNvbW1vbi5jbGFzc2lmeS5tZXRob2QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubGl0ZXJhdHVyZSA9IGxpdGVyYXR1cmUuZGF0YVxyXG5cclxuICAgICAgICAgICAgLy8g55Sf5rS7XHJcbiAgICAgICAgICAgIGxldCBsaWZlID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLmNvbW1vbi5jbGFzc2lmeS51cmwgKyAnNScsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5jb21tb24uY2xhc3NpZnkubWV0aG9kLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxpZmUgPSBsaWZlLmRhdGFcclxuXHJcbiAgICAgICAgICAgIC8vIOe7j+euoVxyXG4gICAgICAgICAgICBsZXQgZWNvbm9teSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5jb21tb24uY2xhc3NpZnkudXJsICsgJzYnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29tbW9uLmNsYXNzaWZ5Lm1ldGhvZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5lY29ub215ID0gZWNvbm9teS5kYXRhXHJcblxyXG4gICAgICAgICAgICAvLyDnp5HmioBcclxuICAgICAgICAgICAgbGV0IHRlY2hub2xvZ3kgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBhcGkuY29tbW9uLmNsYXNzaWZ5LnVybCArICc3JyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmNvbW1vbi5jbGFzc2lmeS5tZXRob2QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudGVjaG5vbG9neSA9IHRlY2hub2xvZ3kuZGF0YVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDojrflj5ZjbGFzc2lmeeWksei0pe+8jOivt+WFs+mXremHjeaWsOi/m+WFpS5gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlQ3VycmVudChjdXJyZW50VGFiKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gY3VycmVudFRhYlxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxufVxyXG4iXX0=