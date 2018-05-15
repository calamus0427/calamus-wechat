'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _classifyItem = require('./classifyItem.js');

var _classifyItem2 = _interopRequireDefault(_classifyItem);

var _config = require('./../../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classifyIndex = function (_wepy$component) {
    _inherits(classifyIndex, _wepy$component);

    function classifyIndex() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, classifyIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = classifyIndex.__proto__ || Object.getPrototypeOf(classifyIndex)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "list": { "com": "classifyItem", "props": "type" } }, _this.$props = { "classifyItem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:type.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
            classifyItem: _classifyItem2.default
        }, _this.data = {
            transClassArr: ['tanslate0', 'tanslate1', 'tanslate2', 'tanslate3', 'tanslate4', 'tanslate5', 'tanslate6', 'tanslate7'],
            currentMenuIndex: 0,
            categoryTypeArr: ['文化', '流行', '文学', '生活', '经管', '科技'],
            list: {
                culture: {
                    name: '文化',
                    data: {}
                },
                popular: {
                    name: '流行',
                    data: {}
                },
                literature: {
                    name: '文学',
                    data: {}
                },
                life: {
                    name: '生活',
                    data: {}
                },
                economy: {
                    name: '经管',
                    data: {}
                },
                technology: {
                    name: '科技',
                    data: {}
                }
            }
        }, _this.methods = {
            changeCategory: function changeCategory(index) {
                this.currentMenuIndex = index;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(classifyIndex, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var culture, popular, literature, life, economy, technology;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('classify-index');
                                _context.prev = 1;
                                _context.next = 4;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '2',
                                    method: _config.api.common.classify.method
                                });

                            case 4:
                                culture = _context.sent;

                                this.list['culture'].data = culture.data;

                                // 流行
                                _context.next = 8;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '3',
                                    method: _config.api.common.classify.method
                                });

                            case 8:
                                popular = _context.sent;

                                this.list['popular'].data = popular.data;

                                // 文学
                                _context.next = 12;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '4',
                                    method: _config.api.common.classify.method
                                });

                            case 12:
                                literature = _context.sent;

                                this.list['literature'].data = literature.data;

                                // 生活
                                _context.next = 16;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '5',
                                    method: _config.api.common.classify.method
                                });

                            case 16:
                                life = _context.sent;

                                this.list['life'].data = life.data;

                                // 经管
                                _context.next = 20;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '6',
                                    method: _config.api.common.classify.method
                                });

                            case 20:
                                economy = _context.sent;

                                this.list['economy'].data = economy.data;

                                // 科技
                                _context.next = 24;
                                return _wepy2.default.request({
                                    url: _config.api.common.classify.url + '7',
                                    method: _config.api.common.classify.method
                                });

                            case 24:
                                technology = _context.sent;

                                this.list['technology'].data = technology.data;

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
    }]);

    return classifyIndex;
}(_wepy2.default.component);

exports.default = classifyIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5SW5kZXguanMiXSwibmFtZXMiOlsiY2xhc3NpZnlJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNsYXNzaWZ5SXRlbSIsImRhdGEiLCJ0cmFuc0NsYXNzQXJyIiwiY3VycmVudE1lbnVJbmRleCIsImNhdGVnb3J5VHlwZUFyciIsImxpc3QiLCJjdWx0dXJlIiwibmFtZSIsInBvcHVsYXIiLCJsaXRlcmF0dXJlIiwibGlmZSIsImVjb25vbXkiLCJ0ZWNobm9sb2d5IiwibWV0aG9kcyIsImNoYW5nZUNhdGVnb3J5IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsInVybCIsImNvbW1vbiIsImNsYXNzaWZ5IiwibWV0aG9kIiwiJGFwcGx5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFFbEJDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLGNBQVAsRUFBc0IsU0FBUSxNQUE5QixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sT0FBN0QsRUFBaEIsRUFBc0Ysb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxNQUFwQyxFQUEyQyxRQUFPLE1BQWxELEVBQXlELFNBQVEsT0FBakUsRUFBeUUsT0FBTSxPQUEvRSxFQUF6RyxFQUFoQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQztBQURNLFMsUUFHVkMsSSxHQUFPO0FBQ0hDLDJCQUFlLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsV0FBM0IsRUFB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Ryw0Q0FBUSxZQUFJRixNQUFKLENBQVdDLFFBQVgsQ0FBb0JDO0FBRkksaUNBQWIsQzs7O0FBQW5CViwwQzs7QUFJSixxQ0FBS1AsSUFBTCxDQUFVLFlBQVYsRUFBd0JKLElBQXhCLEdBQStCVyxXQUFXWCxJQUExQzs7QUFFQSxxQ0FBS3NCLE1BQUw7Ozs7Ozs7O0FBRUEsK0NBQUtDLFNBQUwsQ0FBZTtBQUNYQywyQ0FBTyxJQURJO0FBRVhDO0FBRlcsaUNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1RitCLGVBQUtDLFM7O2tCQUEzQmhDLGEiLCJmaWxlIjoiY2xhc3NpZnlJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgY2xhc3NpZnlJdGVtIGZyb20gJy4vY2xhc3NpZnlJdGVtJ1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsYXNzaWZ5SW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwiY2xhc3NpZnlJdGVtXCIsXCJwcm9wc1wiOlwidHlwZVwifX07XHJcbiRwcm9wcyA9IHtcImNsYXNzaWZ5SXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnR5cGUub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGNsYXNzaWZ5SXRlbVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB0cmFuc0NsYXNzQXJyOiBbJ3RhbnNsYXRlMCcsICd0YW5zbGF0ZTEnLCAndGFuc2xhdGUyJywgJ3RhbnNsYXRlMycsICd0YW5zbGF0ZTQnLCAndGFuc2xhdGU1JywgJ3RhbnNsYXRlNicsICd0YW5zbGF0ZTcnXSxcclxuICAgICAgICBjdXJyZW50TWVudUluZGV4OiAwLFxyXG4gICAgICAgIGNhdGVnb3J5VHlwZUFycjogWyfmlofljJYnLCAn5rWB6KGMJywgJ+aWh+WtpicsICfnlJ/mtLsnLCAn57uP566hJywgJ+enkeaKgCddLFxyXG4gICAgICAgIGxpc3Q6IHtcclxuICAgICAgICAgICAgY3VsdHVyZToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aWh+WMlicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9wdWxhcjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+a1geihjCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGl0ZXJhdHVyZToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aWh+WtpicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWZlOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn55Sf5rS7JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVjb25vbXk6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfnu4/nrqEnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge31cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVjaG5vbG9neToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+enkeaKgCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBjaGFuZ2VDYXRlZ29yeShpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNZW51SW5kZXggPSBpbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsYXNzaWZ5LWluZGV4JylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyDmlofljJZcclxuICAgICAgICAgICAgbGV0IGN1bHR1cmUgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBhcGkuY29tbW9uLmNsYXNzaWZ5LnVybCArICcyJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmNvbW1vbi5jbGFzc2lmeS5tZXRob2QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubGlzdFsnY3VsdHVyZSddLmRhdGEgPSBjdWx0dXJlLmRhdGFcclxuXHJcbiAgICAgICAgICAgIC8vIOa1geihjFxyXG4gICAgICAgICAgICBsZXQgcG9wdWxhciA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5jb21tb24uY2xhc3NpZnkudXJsICsgJzMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29tbW9uLmNsYXNzaWZ5Lm1ldGhvZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5saXN0Wydwb3B1bGFyJ10uZGF0YSA9IHBvcHVsYXIuZGF0YVxyXG5cclxuICAgICAgICAgICAgLy8g5paH5a2mXHJcbiAgICAgICAgICAgIGxldCBsaXRlcmF0dXJlID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLmNvbW1vbi5jbGFzc2lmeS51cmwgKyAnNCcsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5jb21tb24uY2xhc3NpZnkubWV0aG9kLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RbJ2xpdGVyYXR1cmUnXS5kYXRhID0gbGl0ZXJhdHVyZS5kYXRhXHJcblxyXG4gICAgICAgICAgICAvLyDnlJ/mtLtcclxuICAgICAgICAgICAgbGV0IGxpZmUgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBhcGkuY29tbW9uLmNsYXNzaWZ5LnVybCArICc1JyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmNvbW1vbi5jbGFzc2lmeS5tZXRob2QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubGlzdFsnbGlmZSddLmRhdGEgPSBsaWZlLmRhdGFcclxuXHJcbiAgICAgICAgICAgIC8vIOe7j+euoVxyXG4gICAgICAgICAgICBsZXQgZWNvbm9teSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS5jb21tb24uY2xhc3NpZnkudXJsICsgJzYnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29tbW9uLmNsYXNzaWZ5Lm1ldGhvZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5saXN0WydlY29ub215J10uZGF0YSA9IGVjb25vbXkuZGF0YVxyXG5cclxuICAgICAgICAgICAgLy8g56eR5oqAXHJcbiAgICAgICAgICAgIGxldCB0ZWNobm9sb2d5ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLmNvbW1vbi5jbGFzc2lmeS51cmwgKyAnNycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5jb21tb24uY2xhc3NpZnkubWV0aG9kLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RbJ3RlY2hub2xvZ3knXS5kYXRhID0gdGVjaG5vbG9neS5kYXRhXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogYOiOt+WPlmNsYXNzaWZ55aSx6LSl77yM6K+35YWz6Zet6YeN5paw6L+b5YWlLmBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19