'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _login = require('./../components/mixins/login.js');

var _login2 = _interopRequireDefault(_login);

var _load = require('./../components/load.js');

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collect = function (_wepy$page) {
    _inherits(Collect, _wepy$page);

    function Collect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Collect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collect.__proto__ || Object.getPrototypeOf(Collect)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '我的收藏',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.$repeat = {}, _this.$props = { "load": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
            load: _load2.default
        }, _this.data = {
            collectBooks: '',
            loadShow: true
        }, _this.mixins = [_login2.default], _this.methods = {
            gotodetail: function gotodetail(isbn, typeId, id) {
                _wepy2.default.navigateTo({
                    url: 'bookDetail?isbn=' + isbn + '&typeId=' + typeId + '&id=' + id
                });
            },
            delete_item: function delete_item(e) {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var id;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    id = e.target.dataset.fav_id;

                                    wx.showModal({
                                        title: '提示',
                                        content: '是否删除?',
                                        success: function () {
                                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                                    while (1) {
                                                        switch (_context.prev = _context.next) {
                                                            case 0:
                                                                if (!res.confirm) {
                                                                    _context.next = 12;
                                                                    break;
                                                                }

                                                                _context.prev = 1;
                                                                _context.next = 4;
                                                                return _wepy2.default.request({
                                                                    url: _config.api.collectBook.deleteCollectBooks.url + '/' + id,
                                                                    method: _config.api.collectBook.deleteCollectBooks.method
                                                                });

                                                            case 4:
                                                                wx.showToast({
                                                                    title: '成功删除本书',
                                                                    icon: 'success',
                                                                    duration: 2000
                                                                });
                                                                _context.next = 7;
                                                                return _this2.getCollectBooks();

                                                            case 7:
                                                                _context.next = 12;
                                                                break;

                                                            case 9:
                                                                _context.prev = 9;
                                                                _context.t0 = _context['catch'](1);

                                                                console.log(_context.t0);

                                                            case 12:
                                                            case 'end':
                                                                return _context.stop();
                                                        }
                                                    }
                                                }, _callee, _this2, [[1, 9]]);
                                            }));

                                            return function success(_x) {
                                                return _ref2.apply(this, arguments);
                                            };
                                        }()
                                    });

                                case 2:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this2);
                }))();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Collect, [{
        key: 'getCollectBooks',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var collectBooks;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _wepy2.default.request({
                                    url: _config.api.collectBook.getCollectBook.url + this.userId,
                                    method: _config.api.collectBook.getCollectBook.method
                                });

                            case 2:
                                collectBooks = _context3.sent;

                                this.collectBooks = collectBooks.data;
                                this.loadShow = false;
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getCollectBooks() {
                return _ref3.apply(this, arguments);
            }

            return getCollectBooks;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.getStoreById();

                            case 2:
                                this.getCollectBooks();

                            case 3:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function onLoad() {
                return _ref4.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Collect;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Collect , 'pages/collect'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3QuanMiXSwibmFtZXMiOlsiQ29sbGVjdCIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxvYWQiLCJkYXRhIiwiY29sbGVjdEJvb2tzIiwibG9hZFNob3ciLCJtaXhpbnMiLCJtZXRob2RzIiwiZ290b2RldGFpbCIsImlzYm4iLCJ0eXBlSWQiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJkZWxldGVfaXRlbSIsImUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiZmF2X2lkIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInJlcXVlc3QiLCJjb2xsZWN0Qm9vayIsImRlbGV0ZUNvbGxlY3RCb29rcyIsIm1ldGhvZCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImdldENvbGxlY3RCb29rcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb2xsZWN0Qm9vayIsInVzZXJJZCIsIiRhcHBseSIsImdldFN0b3JlQnlJZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2pCQyxNLEdBQVM7QUFDTCxzQ0FBMEIsTUFEckI7QUFFTCxzQ0FBMEIsT0FGckI7QUFHTCw0Q0FBZ0M7QUFIM0IsUyxRQU1WQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsWUFBVyxFQUFaLEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkM7QUFETSxTLFFBSVZDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVO0FBRlAsUyxRQUlQQyxNLEdBQVMsaUIsUUFFVEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxJQURMLEVBQ1dDLE1BRFgsRUFDbUJDLEVBRG5CLEVBQ3VCO0FBQ3pCLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLHFCQUFxQkosSUFBckIsR0FBNEIsVUFBNUIsR0FBeUNDLE1BQXpDLEdBQWtELE1BQWxELEdBQTJEQztBQURwRCxpQkFBaEI7QUFHSCxhQUxLO0FBTUFHLHVCQU5BLHVCQU1ZQyxDQU5aLEVBTWU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkosc0NBRGEsR0FDUkksRUFBRUMsTUFBRixDQUFTQyxPQUFULENBQWlCQyxNQURUOztBQUVqQkMsdUNBQUdDLFNBQUgsQ0FBYTtBQUNUQywrQ0FBTyxJQURFO0FBRVRDLGlEQUFTLE9BRkE7QUFHVEM7QUFBQSxnSEFBUyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBQ0RBLElBQUlDLE9BREg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVFQUdTLGVBQUtDLE9BQUwsQ0FBYTtBQUNmYix5RUFBUSxZQUFJYyxXQUFKLENBQWdCQyxrQkFBaEIsQ0FBbUNmLEdBQTNDLFNBQWtERixFQURuQztBQUVma0IsNEVBQVEsWUFBSUYsV0FBSixDQUFnQkMsa0JBQWhCLENBQW1DQztBQUY1QixpRUFBYixDQUhUOztBQUFBO0FBT0dWLG1FQUFHVyxTQUFILENBQWE7QUFDVFQsMkVBQU8sUUFERTtBQUVUVSwwRUFBTSxTQUZHO0FBR1RDLDhFQUFVO0FBSEQsaUVBQWI7QUFQSDtBQUFBLHVFQVlTLE9BQUtDLGVBQUwsRUFaVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWNHQyx3RUFBUUMsR0FBUjs7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhTLHFDQUFiOztBQUZpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlCcEI7QUEvQkssUzs7Ozs7Ozs7Ozs7Ozt1Q0FtQ21CLGVBQUtULE9BQUwsQ0FBYTtBQUNsQ2IseUNBQUssWUFBSWMsV0FBSixDQUFnQlMsY0FBaEIsQ0FBK0J2QixHQUEvQixHQUFxQyxLQUFLd0IsTUFEYjtBQUVsQ1IsNENBQVEsWUFBSUYsV0FBSixDQUFnQlMsY0FBaEIsQ0FBK0JQO0FBRkwsaUNBQWIsQzs7O0FBQXJCekIsNEM7O0FBSUoscUNBQUtBLFlBQUwsR0FBb0JBLGFBQWFELElBQWpDO0FBQ0EscUNBQUtFLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxxQ0FBS2lDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBR00sS0FBS0MsWUFBTCxFOzs7QUFDTixxQ0FBS04sZUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpFNkIsZUFBS08sSTs7a0JBQXJCNUMsTyIsImZpbGUiOiJjb2xsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbWl4aW5zL2xvZ2luJ1xyXG5pbXBvcnQgbG9hZCBmcm9tICcuLi9jb21wb25lbnRzL2xvYWQnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+aIkeeahOaUtuiXjycsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyNmZjc3MDAnXHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImxvYWRcIjp7XCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICBsb2FkXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBjb2xsZWN0Qm9va3M6ICcnLFxyXG4gICAgICAgIGxvYWRTaG93OiB0cnVlXHJcbiAgICB9XHJcbiAgICBtaXhpbnMgPSBbbG9naW5dXHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBnb3RvZGV0YWlsKGlzYm4sIHR5cGVJZCwgaWQpIHtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2Jvb2tEZXRhaWw/aXNibj0nICsgaXNibiArICcmdHlwZUlkPScgKyB0eXBlSWQgKyAnJmlkPScgKyBpZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZGVsZXRlX2l0ZW0oZSkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmZhdl9pZFxyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+aYr+WQpuWIoOmZpD8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAke2FwaS5jb2xsZWN0Qm9vay5kZWxldGVDb2xsZWN0Qm9va3MudXJsfS8ke2lkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29sbGVjdEJvb2suZGVsZXRlQ29sbGVjdEJvb2tzLm1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip/liKDpmaTmnKzkuaYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q29sbGVjdEJvb2tzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0Q29sbGVjdEJvb2tzKCkge1xyXG4gICAgICAgIGxldCBjb2xsZWN0Qm9va3MgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGFwaS5jb2xsZWN0Qm9vay5nZXRDb2xsZWN0Qm9vay51cmwgKyB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgbWV0aG9kOiBhcGkuY29sbGVjdEJvb2suZ2V0Q29sbGVjdEJvb2subWV0aG9kXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmNvbGxlY3RCb29rcyA9IGNvbGxlY3RCb29rcy5kYXRhXHJcbiAgICAgICAgdGhpcy5sb2FkU2hvdyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0U3RvcmVCeUlkKClcclxuICAgICAgICB0aGlzLmdldENvbGxlY3RCb29rcygpXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=