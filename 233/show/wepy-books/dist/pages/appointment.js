'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _login = require('./../components/mixins/login.js');

var _login2 = _interopRequireDefault(_login);

var _load = require('./../components/load.js');

var _load2 = _interopRequireDefault(_load);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appointment = function (_wepy$page) {
    _inherits(appointment, _wepy$page);

    function appointment() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, appointment);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = appointment.__proto__ || Object.getPrototypeOf(appointment)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '我的预约',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.$repeat = {}, _this.$props = { "load": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
            load: _load2.default
        }, _this.data = {
            count: '',
            books: {},
            allCheck: false,
            check: [],
            loadShow: true
        }, _this.mixins = [_login2.default], _this.methods = {
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
            cancelOrder: function cancelOrder() {
                var _this2 = this;

                var isCheck = this.check.some(function (item) {
                    return item === true;
                });
                if (!isCheck) {
                    wx.showModal({
                        title: '提示',
                        content: '请选择要取消预约的书籍~'
                    });
                    return false;
                }
                wx.showModal({
                    title: '提示',
                    content: '是否取消预约?',
                    success: function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                            var str, i;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            if (!res.confirm) {
                                                _context.next = 12;
                                                break;
                                            }

                                            str = '';

                                            for (i = 0; i < _this2.check.length; i++) {
                                                if (_this2.check[i]) {
                                                    str += '&book=' + _this2.books[i].bookId;
                                                }
                                            }
                                            str = str.slice(1);
                                            _context.prev = 4;
                                            _context.next = 7;
                                            return _wepy2.default.request({
                                                url: _config.api.appointBook.cancleAppointBooks.url + '/' + _this2.userId + '/?' + str,
                                                method: _config.api.appointBook.cancleAppointBooks.method
                                            });

                                        case 7:
                                            _this2.onLoad();
                                            _context.next = 12;
                                            break;

                                        case 10:
                                            _context.prev = 10;
                                            _context.t0 = _context['catch'](4);

                                        case 12:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, _this2, [[4, 10]]);
                        }));

                        return function success(_x) {
                            return _ref2.apply(this, arguments);
                        };
                    }()
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(appointment, [{
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var books, array, i, fillArray;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.getStoreById();

                            case 2:
                                _context2.next = 4;
                                return _wepy2.default.request({
                                    url: _config.api.appointBook.getAppointBook.url + '/' + this.userId,
                                    method: _config.api.appointBook.getAppointBook.method
                                });

                            case 4:
                                books = _context2.sent;

                                console.log(books);
                                array = books.data.appointCustoms;

                                for (i = 0; i < array.length; i++) {
                                    array[i].cancelTime = this.formatDate(array[i].cancelTime);
                                    // array[i].appointmentTime = this.formatDate(array[i].formatDate)
                                }
                                this.count = books.data.dataCount;
                                fillArray = new Array(books.data.dataCount);

                                this.check = fillArray.fill(false);
                                this.books = array;
                                this.loadShow = false;
                                this.$apply();

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad() {
                return _ref3.apply(this, arguments);
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

    return appointment;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(appointment , 'pages/appointment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50LmpzIl0sIm5hbWVzIjpbImFwcG9pbnRtZW50IiwiY29uZmlnIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibG9hZCIsImRhdGEiLCJjb3VudCIsImJvb2tzIiwiYWxsQ2hlY2siLCJjaGVjayIsImxvYWRTaG93IiwibWl4aW5zIiwibWV0aG9kcyIsIkNoZWNrQWxsIiwiYXJyYXkiLCJBcnJheSIsImZpbGwiLCIkYXBwbHkiLCJDaGVja0l0ZW0iLCJpbmRleCIsImNhbmNlbE9yZGVyIiwiaXNDaGVjayIsInNvbWUiLCJpdGVtIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInN0ciIsImkiLCJsZW5ndGgiLCJib29rSWQiLCJzbGljZSIsInJlcXVlc3QiLCJ1cmwiLCJhcHBvaW50Qm9vayIsImNhbmNsZUFwcG9pbnRCb29rcyIsInVzZXJJZCIsIm1ldGhvZCIsIm9uTG9hZCIsImdldFN0b3JlQnlJZCIsImdldEFwcG9pbnRCb29rIiwiY29uc29sZSIsImxvZyIsImFwcG9pbnRDdXN0b21zIiwiY2FuY2VsVGltZSIsImZvcm1hdERhdGUiLCJkYXRhQ291bnQiLCJmaWxsQXJyYXkiLCJkYXRlIiwidW5peFRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTCxzQ0FBMEIsTUFEckI7QUFFTCxzQ0FBMEIsT0FGckI7QUFHTCw0Q0FBZ0M7QUFIM0IsUyxRQU1WQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsWUFBVyxFQUFaLEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkM7QUFETSxTLFFBSVZD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QUFTZ0IsVUFBekIsQ0FBdEI7QUFDQTtBQUNIO0FBQ0QscUNBQUsxQyxLQUFMLEdBQWFDLE1BQU1GLElBQU4sQ0FBVzZDLFNBQXhCO0FBQ0lDLHlDLEdBQVksSUFBSXBDLEtBQUosQ0FBVVIsTUFBTUYsSUFBTixDQUFXNkMsU0FBckIsQzs7QUFDaEIscUNBQUt6QyxLQUFMLEdBQWEwQyxVQUFVbkMsSUFBVixDQUFlLEtBQWYsQ0FBYjtBQUNBLHFDQUFLVCxLQUFMLEdBQWFPLEtBQWI7QUFDQSxxQ0FBS0osUUFBTCxHQUFnQixLQUFoQjtBQUNBLHFDQUFLTyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBRU9tQyxJLEVBQU07QUFDYixnQkFBSUMsZ0JBQWdCLElBQUlDLElBQUosQ0FBU0YsSUFBVCxDQUFwQjtBQUNBLG1CQUFPQyxjQUFjRSxjQUFkLEVBQVA7QUFDSDs7OztFQW5Hb0MsZUFBS0MsSTs7a0JBQXpCMUQsVyIsImZpbGUiOiJhcHBvaW50bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9taXhpbnMvbG9naW4nXHJcbmltcG9ydCBsb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZCdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhcHBvaW50bWVudCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn5oiR55qE6aKE57qmJyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnI2ZmNzcwMCdcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibG9hZFwiOntcInhtbG5zOnd4XCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGxvYWRcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGNvdW50OiAnJyxcclxuICAgICAgICBib29rczoge30sXHJcbiAgICAgICAgYWxsQ2hlY2s6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrOiBbXSxcclxuICAgICAgICBsb2FkU2hvdzogdHJ1ZVxyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gW2xvZ2luXVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgQ2hlY2tBbGwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2sgPSAhdGhpcy5hbGxDaGVja1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBuZXcgQXJyYXkodGhpcy5jb3VudClcclxuICAgICAgICAgICAgYXJyYXkuZmlsbCh0aGlzLmFsbENoZWNrKVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrID0gYXJyYXlcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ2hlY2tJdGVtKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tbaW5kZXhdID0gIXRoaXMuY2hlY2tbaW5kZXhdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWxPcmRlcigpIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hlY2sgPSB0aGlzLmNoZWNrLnNvbWUoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtID09PSB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmICghaXNDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ivt+mAieaLqeimgeWPlua2iOmihOe6pueahOS5puexjX4nLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5piv5ZCm5Y+W5raI6aKE57qmPycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hlY2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IGAmYm9vaz0ke3RoaXMuYm9va3NbaV0uYm9va0lkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHthcGkuYXBwb2ludEJvb2suY2FuY2xlQXBwb2ludEJvb2tzLnVybH0vJHt0aGlzLnVzZXJJZH0vPyR7c3RyfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuYXBwb2ludEJvb2suY2FuY2xlQXBwb2ludEJvb2tzLm1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOmAmui/h21peGluc+iOt+WPlnVzZXJJZFxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0U3RvcmVCeUlkKClcclxuICAgICAgICBsZXQgYm9va3MgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAke2FwaS5hcHBvaW50Qm9vay5nZXRBcHBvaW50Qm9vay51cmx9LyR7dGhpcy51c2VySWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBhcGkuYXBwb2ludEJvb2suZ2V0QXBwb2ludEJvb2subWV0aG9kXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhib29rcylcclxuICAgICAgICBsZXQgYXJyYXkgPSBib29rcy5kYXRhLmFwcG9pbnRDdXN0b21zXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnJheVtpXS5jYW5jZWxUaW1lID0gdGhpcy5mb3JtYXREYXRlKGFycmF5W2ldLmNhbmNlbFRpbWUpXHJcbiAgICAgICAgICAgIC8vIGFycmF5W2ldLmFwcG9pbnRtZW50VGltZSA9IHRoaXMuZm9ybWF0RGF0ZShhcnJheVtpXS5mb3JtYXREYXRlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ID0gYm9va3MuZGF0YS5kYXRhQ291bnRcclxuICAgICAgICBsZXQgZmlsbEFycmF5ID0gbmV3IEFycmF5KGJvb2tzLmRhdGEuZGF0YUNvdW50KVxyXG4gICAgICAgIHRoaXMuY2hlY2sgPSBmaWxsQXJyYXkuZmlsbChmYWxzZSlcclxuICAgICAgICB0aGlzLmJvb2tzID0gYXJyYXlcclxuICAgICAgICB0aGlzLmxvYWRTaG93ID0gZmFsc2VcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgICBsZXQgdW5peFRpbWVzdGFtcCA9IG5ldyBEYXRlKGRhdGUpXHJcbiAgICAgICAgcmV0dXJuIHVuaXhUaW1lc3RhbXAudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=