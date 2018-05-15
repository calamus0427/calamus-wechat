'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pay = function (_wepy$page) {
    _inherits(Pay, _wepy$page);

    function Pay() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Pay);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pay.__proto__ || Object.getPrototypeOf(Pay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': '支付',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#ff7700'
        }, _this.components = {}, _this.data = {
            isshow: true,
            array: [false, false, false, false, false, false],
            imgUrl: ''
        }, _this.methods = {
            show: function show() {
                this.isshow = true;
            },
            click: function click() {
                var array = this.data.array;
                if (array[4] === true) {
                    array[5] = true;
                    this.setData({
                        array: array
                    });
                    wx.showLoading({
                        title: '正在支付',
                        success: function success() {}
                    });
                    setTimeout(function () {
                        wx.hideLoading();
                        wx.showToast({
                            title: '支付成功',
                            icons: 'success'
                        });
                        setTimeout(function () {
                            wx.redirectTo({
                                url: 'index?tab=2'
                            });
                        }, 0);
                    }, 1000);
                    return;
                }
                for (var i = 0; i < array.length; i++) {
                    if (!array[i]) {
                        array[i] = true;
                        break;
                    }
                }
                this.setData({
                    array: array
                });
            },
            del: function del() {
                var array = this.data.array;
                for (var i = array.length; i >= 0; i--) {
                    if (array[i] === true) {
                        array[i] = false;
                        break;
                    }
                }
                this.setData({
                    array: array
                });
            },
            gotoBagCar: function gotoBagCar() {
                wx.redirectTo({
                    url: 'index?tab=2'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Pay, [{
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onLoad',
        value: function onLoad() {
            console.log('pay页面加载');
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

    return Pay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Pay , 'pages/pay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJQYXkiLCJjb25maWciLCJjb21wb25lbnRzIiwiZGF0YSIsImlzc2hvdyIsImFycmF5IiwiaW1nVXJsIiwibWV0aG9kcyIsInNob3ciLCJjbGljayIsInNldERhdGEiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwic2hvd1RvYXN0IiwiaWNvbnMiLCJyZWRpcmVjdFRvIiwidXJsIiwiaSIsImxlbmd0aCIsImRlbCIsImdvdG9CYWdDYXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckltZyIsInVzZXJJbWciLCJnZXRTdG9yYWdlU3luYyIsImF2YXRhclVybCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7b0xBQ2pCQyxNLEdBQVM7QUFDTCxzQ0FBMEIsSUFEckI7QUFFTCxzQ0FBMEIsT0FGckI7QUFHTCw0Q0FBZ0M7QUFIM0IsUyxRQU1UQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDSEMsb0JBQVEsSUFETDtBQUVIQyxtQkFBTyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQUZKO0FBR0hDLG9CQUFRO0FBSEwsUyxRQU1QQyxPLEdBQVU7QUFDTkMsZ0JBRE0sa0JBQ0M7QUFDSCxxQkFBS0osTUFBTCxHQUFjLElBQWQ7QUFDSCxhQUhLO0FBSU5LLGlCQUpNLG1CQUlFO0FBQ0osb0JBQUlKLFFBQVEsS0FBS0YsSUFBTCxDQUFVRSxLQUF0QjtBQUNBLG9CQUFJQSxNQUFNLENBQU4sTUFBYSxJQUFqQixFQUF1QjtBQUNuQkEsMEJBQU0sQ0FBTixJQUFXLElBQVg7QUFDQSx5QkFBS0ssT0FBTCxDQUFhO0FBQ1RMLCtCQUFPQTtBQURFLHFCQUFiO0FBR0FNLHVCQUFHQyxXQUFILENBQWU7QUFDWEMsK0JBQU8sTUFESTtBQUVYQyxpQ0FBUyxtQkFBVyxDQUVuQjtBQUpVLHFCQUFmO0FBTUFDLCtCQUFXLFlBQVc7QUFDbEJKLDJCQUFHSyxXQUFIO0FBQ0FMLDJCQUFHTSxTQUFILENBQWE7QUFDVEosbUNBQU8sTUFERTtBQUVUSyxtQ0FBTztBQUZFLHlCQUFiO0FBSUFILG1DQUFXLFlBQVc7QUFDbEJKLCtCQUFHUSxVQUFILENBQWM7QUFDVkMscUNBQUs7QUFESyw2QkFBZDtBQUdILHlCQUpELEVBSUcsQ0FKSDtBQUtILHFCQVhELEVBV0csSUFYSDtBQVlBO0FBQ0g7QUFDRCxxQkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUloQixNQUFNaUIsTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ25DLHdCQUFJLENBQUNoQixNQUFNZ0IsQ0FBTixDQUFMLEVBQWU7QUFDWGhCLDhCQUFNZ0IsQ0FBTixJQUFXLElBQVg7QUFDQTtBQUNIO0FBQ0o7QUFDRCxxQkFBS1gsT0FBTCxDQUFhO0FBQ1RMLDJCQUFPQTtBQURFLGlCQUFiO0FBR0gsYUF4Q0s7QUF5Q05rQixlQXpDTSxpQkF5Q0E7QUFDRixvQkFBSWxCLFFBQVEsS0FBS0YsSUFBTCxDQUFVRSxLQUF0QjtBQUNBLHFCQUFLLElBQUlnQixJQUFJaEIsTUFBTWlCLE1BQW5CLEVBQTJCRCxLQUFLLENBQWhDLEVBQW1DQSxHQUFuQyxFQUF3QztBQUNwQyx3QkFBSWhCLE1BQU1nQixDQUFOLE1BQWEsSUFBakIsRUFBdUI7QUFDbkJoQiw4QkFBTWdCLENBQU4sSUFBVyxLQUFYO0FBQ0E7QUFDSDtBQUNKO0FBQ0QscUJBQUtYLE9BQUwsQ0FBYTtBQUNUTCwyQkFBT0E7QUFERSxpQkFBYjtBQUdILGFBcERLO0FBcURObUIsc0JBckRNLHdCQXFETztBQUNUYixtQkFBR1EsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSDtBQXpESyxTOzs7OztpQ0E0REQsQ0FFUjs7O2lDQUNRO0FBQ0xLLG9CQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLGlCQUFLQyxVQUFMO0FBQ0g7OztxQ0FDWTtBQUNULGdCQUFJQyxVQUFVakIsR0FBR2tCLGNBQUgsQ0FBa0IsVUFBbEIsRUFBOEJDLFNBQTVDO0FBQ0EsZ0JBQUl4QixlQUFKO0FBQ0EsZ0JBQUksT0FBT3NCLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDaEN0Qix5QkFBUyw2QkFBVDtBQUNILGFBRkQsTUFFTztBQUNIQSx5QkFBU3NCLE9BQVQ7QUFDSDtBQUNELGlCQUFLdEIsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUt5QixNQUFMO0FBQ0g7Ozs7RUE5RjRCLGVBQUtDLEk7O2tCQUFqQmhDLEciLCJmaWxlIjoicGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn5pSv5LuYJyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnI2ZmNzcwMCdcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGlzc2hvdzogdHJ1ZSxcclxuICAgICAgICBhcnJheTogW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgIGltZ1VybDogJydcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNzaG93ID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnJheSA9IHRoaXMuZGF0YS5hcnJheVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlbNF0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGFycmF5WzVdID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheTogYXJyYXlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmraPlnKjmlK/ku5gnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlK/ku5jmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uczogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdpbmRleD90YWI9MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghYXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheVtpXSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBhcnJheTogYXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbCgpIHtcclxuICAgICAgICAgICAgdmFyIGFycmF5ID0gdGhpcy5kYXRhLmFycmF5XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheVtpXSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgYXJyYXk6IGFycmF5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb3RvQmFnQ2FyKCkge1xyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2luZGV4P3RhYj0yJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcblxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXnpobXpnaLliqDovb0nKVxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckltZygpXHJcbiAgICB9XHJcbiAgICBnZXRVc2VySW1nKCkge1xyXG4gICAgICAgIGxldCB1c2VySW1nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJykuYXZhdGFyVXJsXHJcbiAgICAgICAgbGV0IGltZ1VybFxyXG4gICAgICAgIGlmICh0eXBlb2YgdXNlckltZyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaW1nVXJsID0gJy4uL3Jlc291cmNlcy9pY29ucy91c2VyLnBuZydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbWdVcmwgPSB1c2VySW1nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=