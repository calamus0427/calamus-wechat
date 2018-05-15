'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_wepy$page) {
    _inherits(Chat, _wepy$page);

    function Chat() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Chat);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chat.__proto__ || Object.getPrototypeOf(Chat)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '客服',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.components = {}, _this.data = {
            arr: [{
                from: 'other',
                icon: '../resources/icons/robot.png',
                msg: '1.借书流程\n2.还书流程\n3.预约流程\n4.动态须知'
            }],
            idid: '',
            input_value: '',
            imgUrl: ''
        }, _this.methods = {
            sendmsg: function sendmsg() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var res, newArr, lg;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(_this2.input_value === '')) {
                                        _context.next = 2;
                                        break;
                                    }

                                    return _context.abrupt('return');

                                case 2:
                                    _context.next = 4;
                                    return _wepy2.default.request({
                                        url: _config.api.common.getChatMessage.url + '/' + _this2.input_value,
                                        method: _config.api.common.getChatMessage.method
                                    });

                                case 4:
                                    res = _context.sent;

                                    console.log(res);
                                    newArr = _this2.arr;
                                    lg = newArr.length;

                                    newArr.push({
                                        from: 'me',
                                        icon: _this2.imgUrl,
                                        msg: _this2.input_value
                                    });
                                    newArr.push({
                                        from: 'other',
                                        icon: '../resources/icons/robot.png',
                                        msg: res.data.text
                                    });
                                    _this2.arr = newArr;
                                    _this2.input_value = '';
                                    _this2.idid = 'id' + lg;
                                    _this2.$apply();

                                case 14:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            },
            addfix: function addfix() {
                this.fix = 'fixed';
            },
            remfix: function remfix() {
                this.fix = '';
            },
            gogo: function gogo(e) {
                this.input_value = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Chat, [{
        key: 'onLoad',
        value: function onLoad() {
            this.getUserImg();
        }
    }, {
        key: 'getUserImg',
        value: function getUserImg() {
            var userImg = wx.getStorageSync('userInfo').avatarUrl;
            var imgUrl = void 0;
            if (typeof userImg === 'undefined') {
                imgUrl = '../resources/icons/user.png';
            } else {
                imgUrl = userImg;
            }
            this.imgUrl = imgUrl;
            this.$apply();
        }
    }]);

    return Chat;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chat , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiQ2hhdCIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwiYXJyIiwiZnJvbSIsImljb24iLCJtc2ciLCJpZGlkIiwiaW5wdXRfdmFsdWUiLCJpbWdVcmwiLCJtZXRob2RzIiwic2VuZG1zZyIsInJlcXVlc3QiLCJ1cmwiLCJjb21tb24iLCJnZXRDaGF0TWVzc2FnZSIsIm1ldGhvZCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJuZXdBcnIiLCJsZyIsImxlbmd0aCIsInB1c2giLCJ0ZXh0IiwiJGFwcGx5IiwiYWRkZml4IiwiZml4IiwicmVtZml4IiwiZ29nbyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImdldFVzZXJJbWciLCJ1c2VySW1nIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImF2YXRhclVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLE0sR0FBUztBQUNMLHNDQUEwQixJQURyQjtBQUVMLHNDQUEwQixPQUZyQjtBQUdMLDRDQUFnQztBQUgzQixTLFFBTVRDLFUsR0FBYSxFLFFBSWJDLEksR0FBTztBQUNIQyxpQkFBSyxDQUNEO0FBQ0lDLHNCQUFNLE9BRFY7QUFFSUMsc0JBQU0sOEJBRlY7QUFHSUMscUJBQUs7QUFIVCxhQURDLENBREY7QUFRSEMsa0JBQU0sRUFSSDtBQVNIQyx5QkFBYSxFQVRWO0FBVUhDLG9CQUFRO0FBVkwsUyxRQWFQQyxPLEdBQVU7QUFDQ0MsbUJBREQscUJBQ1c7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FFVCxPQUFLSCxXQUFMLEtBQXFCLEVBRlo7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLDJDQUtHLGVBQUtJLE9BQUwsQ0FBYTtBQUN6QkMsNkNBQVEsWUFBSUMsTUFBSixDQUFXQyxjQUFYLENBQTBCRixHQUFsQyxTQUF5QyxPQUFLTCxXQURyQjtBQUV6QlEsZ0RBQVEsWUFBSUYsTUFBSixDQUFXQyxjQUFYLENBQTBCQztBQUZULHFDQUFiLENBTEg7O0FBQUE7QUFLVEMsdUNBTFM7O0FBU2JDLDRDQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDSUcsMENBVlMsR0FVQSxPQUFLakIsR0FWTDtBQVdUa0Isc0NBWFMsR0FXSkQsT0FBT0UsTUFYSDs7QUFZYkYsMkNBQU9HLElBQVAsQ0FBWTtBQUNSbkIsOENBQU0sSUFERTtBQUVSQyw4Q0FBTSxPQUFLSSxNQUZIO0FBR1JILDZDQUFLLE9BQUtFO0FBSEYscUNBQVo7QUFLQVksMkNBQU9HLElBQVAsQ0FBWTtBQUNSbkIsOENBQU0sT0FERTtBQUVSQyw4Q0FBTSw4QkFGRTtBQUdSQyw2Q0FBS1csSUFBSWYsSUFBSixDQUFTc0I7QUFITixxQ0FBWjtBQUtBLDJDQUFLckIsR0FBTCxHQUFXaUIsTUFBWDtBQUNBLDJDQUFLWixXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsMkNBQUtELElBQUwsR0FBWSxPQUFPYyxFQUFuQjtBQUNBLDJDQUFLSSxNQUFMOztBQXpCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBCaEIsYUEzQks7QUE0Qk5DLGtCQTVCTSxvQkE0Qkc7QUFDTCxxQkFBS0MsR0FBTCxHQUFXLE9BQVg7QUFDSCxhQTlCSztBQStCTkMsa0JBL0JNLG9CQStCRztBQUNMLHFCQUFLRCxHQUFMLEdBQVcsRUFBWDtBQUNILGFBakNLO0FBa0NORSxnQkFsQ00sZ0JBa0NEQyxDQWxDQyxFQWtDRTtBQUNKLHFCQUFLdEIsV0FBTCxHQUFtQnNCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDSDtBQXBDSyxTOzs7OztpQ0FzQ0Q7QUFDTCxpQkFBS0MsVUFBTDtBQUNIOzs7cUNBQ1k7QUFDVCxnQkFBSUMsVUFBVUMsR0FBR0MsY0FBSCxDQUFrQixVQUFsQixFQUE4QkMsU0FBNUM7QUFDQSxnQkFBSTVCLGVBQUo7QUFDQSxnQkFBSSxPQUFPeUIsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNoQ3pCLHlCQUFTLDZCQUFUO0FBQ0gsYUFGRCxNQUVPO0FBQ0hBLHlCQUFTeUIsT0FBVDtBQUNIO0FBQ0QsaUJBQUt6QixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxpQkFBS2dCLE1BQUw7QUFDSDs7OztFQTNFNkIsZUFBS2EsSTs7a0JBQWxCdkMsSSIsImZpbGUiOiJjaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn5a6i5pyNJyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnI2ZmNzcwMCdcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGFycjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiAnb3RoZXInLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJy4uL3Jlc291cmNlcy9pY29ucy9yb2JvdC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgbXNnOiAnMS7lgJ/kuabmtYHnqItcXG4yLui/mOS5pua1geeoi1xcbjMu6aKE57qm5rWB56iLXFxuNC7liqjmgIHpobvnn6UnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGlkaWQ6ICcnLFxyXG4gICAgICAgIGlucHV0X3ZhbHVlOiAnJyxcclxuICAgICAgICBpbWdVcmw6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBhc3luYyAgc2VuZG1zZygpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0X3ZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2FwaS5jb21tb24uZ2V0Q2hhdE1lc3NhZ2UudXJsfS8ke3RoaXMuaW5wdXRfdmFsdWV9YCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmNvbW1vbi5nZXRDaGF0TWVzc2FnZS5tZXRob2QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IHRoaXMuYXJyXHJcbiAgICAgICAgICAgIGxldCBsZyA9IG5ld0Fyci5sZW5ndGhcclxuICAgICAgICAgICAgbmV3QXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogJ21lJyxcclxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuaW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgbXNnOiB0aGlzLmlucHV0X3ZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZyb206ICdvdGhlcicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnLi4vcmVzb3VyY2VzL2ljb25zL3JvYm90LnBuZycsXHJcbiAgICAgICAgICAgICAgICBtc2c6IHJlcy5kYXRhLnRleHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5hcnIgPSBuZXdBcnJcclxuICAgICAgICAgICAgdGhpcy5pbnB1dF92YWx1ZSA9ICcnXHJcbiAgICAgICAgICAgIHRoaXMuaWRpZCA9ICdpZCcgKyBsZ1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRmaXgoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZml4ID0gJ2ZpeGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtZml4KCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpeCA9ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb2dvKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dF92YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlckltZygpXHJcbiAgICB9XHJcbiAgICBnZXRVc2VySW1nKCkge1xyXG4gICAgICAgIGxldCB1c2VySW1nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJykuYXZhdGFyVXJsXHJcbiAgICAgICAgbGV0IGltZ1VybFxyXG4gICAgICAgIGlmICh0eXBlb2YgdXNlckltZyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaW1nVXJsID0gJy4uL3Jlc291cmNlcy9pY29ucy91c2VyLnBuZydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbWdVcmwgPSB1c2VySW1nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==