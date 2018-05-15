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

var lendRoom = function (_wepy$page) {
    _inherits(lendRoom, _wepy$page);

    function lendRoom() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, lendRoom);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = lendRoom.__proto__ || Object.getPrototypeOf(lendRoom)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '我的借阅',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.$repeat = {}, _this.$props = { "load": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
            load: _load2.default
        }, _this.data = {
            books: [],
            count: '',
            allCheck: false,
            check: [],
            barCode: {
                show: false,
                url: ''
            },
            loadShow: true

        }, _this.methods = {
            returnBook: function returnBook() {
                var _this2 = this;

                var isCheck = this.check.some(function (item) {
                    return item === true;
                });
                if (!isCheck) {
                    wx.showModal({
                        title: '提示',
                        content: '请选择要归还的书籍~'
                    });
                    return false;
                }
                var str3 = 'http://qr.liantu.com/api.php?text=' + this.userId + '/?',
                    str = '';
                this.check.forEach(function (item, index) {
                    if (item) {
                        str += '$book=';
                        str += _this2.books[index].bookId;
                    }
                });
                str = str.slice(1);
                str = str3 + str + '!?' + str;
                this.barCode.url = str;
                this.barCode.show = true;
                wx.showLoading({
                    title: '正在生成二维码...'

                });
            },
            CheckAll: function CheckAll() {
                this.allCheck = !this.allCheck;
                var array = new Array(this.count);
                array.fill(this.allCheck);
                this.check = array;
                this.$apply();
            },
            CheckItem: function CheckItem(index) {
                this.check[index] = !this.check[index];
            },
            cancel: function cancel() {
                this.onLoad();
            },
            hideloading: function hideloading() {
                wx.hideLoading();
            }
        }, _this.mixins = [_login2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(lendRoom, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var lendBooks, array, i, fillArray;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.getStoreById();

                            case 2:
                                _context.next = 4;
                                return _wepy2.default.request({
                                    url: _config.api.lendBook.getLendBooks.url + this.userId,
                                    method: _config.api.lendBook.getLendBooks.method
                                });

                            case 4:
                                lendBooks = _context.sent;

                                console.log(lendBooks);
                                array = lendBooks.data.lendBookCustoms || [];

                                for (i = 0; i < array.length; i++) {
                                    array[i].lendTime = this.formatDate(array[i].lendTime);
                                    array[i].shouldReturnTime = this.formatDate(array[i].shouldReturnTime);
                                }
                                this.count = lendBooks.data.dateCount;
                                fillArray = new Array(lendBooks.data.dateCount);

                                this.check = fillArray.fill(false);
                                this.books = array;
                                this.barCode.show = false;
                                this.loadShow = false;
                                this.$apply();

                            case 15:
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
    }, {
        key: 'formatDate',
        value: function formatDate(date) {
            var unixTimestamp = new Date(date);
            return unixTimestamp.toLocaleString();
        }
    }]);

    return lendRoom;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(lendRoom , 'pages/lendRoom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbmRSb29tLmpzIl0sIm5hbWVzIjpbImxlbmRSb29tIiwiY29uZmlnIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibG9hZCIsImRhdGEiLCJib29rcyIsImNvdW50IiwiYWxsQ2hlY2siLCJjaGVjayIsImJhckNvZGUiLCJzaG93IiwidXJsIiwibG9hZFNob3ciLCJtZXRob2RzIiwicmV0dXJuQm9vayIsImlzQ2hlY2siLCJzb21lIiwiaXRlbSIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3RyMyIsInVzZXJJZCIsInN0ciIsImZvckVhY2giLCJpbmRleCIsImJvb2tJZCIsInNsaWNlIiwic2hvd0xvYWRpbmciLCJDaGVja0FsbCIsImFycmF5IiwiQXJyYXkiLCJmaWxsIiwiJGFwcGx5IiwiQ2hlY2tJdGVtIiwiY2FuY2VsIiwib25Mb2FkIiwiaGlkZWxvYWRpbmciLCJoaWRlTG9hZGluZyIsIm1peGlucyIsImdldFN0b3JlQnlJZCIsInJlcXVlc3QiLCJsZW5kQm9vayIsImdldExlbmRCb29rcyIsIm1ldGhvZCIsImxlbmRCb29rcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5kQm9va0N1c3RvbXMiLCJpIiwibGVuZ3RoIiwibGVuZFRpbWUiLCJmb3JtYXREYXRlIiwic2hvdWxkUmV0dXJuVGltZSIsImRhdGVDb3VudCIsImZpbGxBcnJheSIsImRhdGUiLCJ1bml4VGltZXN0YW1wIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNMLHNDQUEwQixNQURyQjtBQUVMLHNDQUEwQixPQUZyQjtBQUdMLDRDQUFnQztBQUgzQixTLFFBTVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxZQUFXLEVB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QUFNbUIsQ0FBTixFQUFTSSxnQkFBVCxHQUE0QixLQUFLRCxVQUFMLENBQWdCdEIsTUFBTW1CLENBQU4sRUFBU0ksZ0JBQXpCLENBQTVCO0FBQ0g7QUFDRCxxQ0FBS2hELEtBQUwsR0FBYXdDLFVBQVUxQyxJQUFWLENBQWVtRCxTQUE1QjtBQUNJQyx5QyxHQUFZLElBQUl4QixLQUFKLENBQVVjLFVBQVUxQyxJQUFWLENBQWVtRCxTQUF6QixDOztBQUNoQixxQ0FBSy9DLEtBQUwsR0FBYWdELFVBQVV2QixJQUFWLENBQWUsS0FBZixDQUFiO0FBQ0EscUNBQUs1QixLQUFMLEdBQWEwQixLQUFiO0FBQ0EscUNBQUt0QixPQUFMLENBQWFDLElBQWIsR0FBb0IsS0FBcEI7QUFDQSxxQ0FBS0UsUUFBTCxHQUFnQixLQUFoQjtBQUNBLHFDQUFLc0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUVPdUIsSSxFQUFNO0FBQ2IsZ0JBQUlDLGdCQUFnQixJQUFJQyxJQUFKLENBQVNGLElBQVQsQ0FBcEI7QUFDQSxtQkFBT0MsY0FBY0UsY0FBZCxFQUFQO0FBQ0g7Ozs7RUFsR2lDLGVBQUtDLEk7O2tCQUF0QmhFLFEiLCJmaWxlIjoibGVuZFJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9taXhpbnMvbG9naW4nXHJcbmltcG9ydCBsb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGVuZFJvb20gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+aIkeeahOWAn+mYhScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyNmZjc3MDAnXHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImxvYWRcIjp7XCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICBsb2FkXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGJvb2tzOiBbXSxcclxuICAgICAgICBjb3VudDogJycsXHJcbiAgICAgICAgYWxsQ2hlY2s6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrOiBbXSxcclxuICAgICAgICBiYXJDb2RlOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB1cmw6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkU2hvdzogdHJ1ZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHJldHVybkJvb2soKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0NoZWNrID0gdGhpcy5jaGVjay5zb21lKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAoIWlzQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fpgInmi6nopoHlvZLov5jnmoTkuabnsY1+JyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3RyMyA9ICdodHRwOi8vcXIubGlhbnR1LmNvbS9hcGkucGhwP3RleHQ9JyArIHRoaXMudXNlcklkICsgJy8/JyxcclxuICAgICAgICAgICAgICAgIHN0ciA9ICcnXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2suZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9ICckYm9vaz0nXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IHRoaXMuYm9va3NbaW5kZXhdLmJvb2tJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMSlcclxuICAgICAgICAgICAgc3RyID0gc3RyMyArIHN0ciArICchPycgKyBzdHJcclxuICAgICAgICAgICAgdGhpcy5iYXJDb2RlLnVybCA9IHN0clxyXG4gICAgICAgICAgICB0aGlzLmJhckNvZGUuc2hvdyA9IHRydWVcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmraPlnKjnlJ/miJDkuoznu7TnoIEuLi4nLFxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBDaGVja0FsbCgpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxDaGVjayA9ICF0aGlzLmFsbENoZWNrXHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IG5ldyBBcnJheSh0aGlzLmNvdW50KVxyXG4gICAgICAgICAgICBhcnJheS5maWxsKHRoaXMuYWxsQ2hlY2spXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2sgPSBhcnJheVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBDaGVja0l0ZW0oaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1tpbmRleF0gPSAhdGhpcy5jaGVja1tpbmRleF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbmNlbCgpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZWxvYWRpbmcoKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtaXhpbnMgPSBbbG9naW5dXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRTdG9yZUJ5SWQoKVxyXG4gICAgICAgIC8vIOWAn+mYhVxyXG4gICAgICAgIGxldCBsZW5kQm9va3MgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGFwaS5sZW5kQm9vay5nZXRMZW5kQm9va3MudXJsICsgdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgIG1ldGhvZDogYXBpLmxlbmRCb29rLmdldExlbmRCb29rcy5tZXRob2RcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmRCb29rcylcclxuICAgICAgICBsZXQgYXJyYXkgPSBsZW5kQm9va3MuZGF0YS5sZW5kQm9va0N1c3RvbXMgfHwgW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycmF5W2ldLmxlbmRUaW1lID0gdGhpcy5mb3JtYXREYXRlKGFycmF5W2ldLmxlbmRUaW1lKVxyXG4gICAgICAgICAgICBhcnJheVtpXS5zaG91bGRSZXR1cm5UaW1lID0gdGhpcy5mb3JtYXREYXRlKGFycmF5W2ldLnNob3VsZFJldHVyblRpbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnQgPSBsZW5kQm9va3MuZGF0YS5kYXRlQ291bnRcclxuICAgICAgICBsZXQgZmlsbEFycmF5ID0gbmV3IEFycmF5KGxlbmRCb29rcy5kYXRhLmRhdGVDb3VudClcclxuICAgICAgICB0aGlzLmNoZWNrID0gZmlsbEFycmF5LmZpbGwoZmFsc2UpXHJcbiAgICAgICAgdGhpcy5ib29rcyA9IGFycmF5XHJcbiAgICAgICAgdGhpcy5iYXJDb2RlLnNob3cgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubG9hZFNob3cgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICAgIGxldCB1bml4VGltZXN0YW1wID0gbmV3IERhdGUoZGF0ZSlcclxuICAgICAgICByZXR1cm4gdW5peFRpbWVzdGFtcC50b0xvY2FsZVN0cmluZygpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==