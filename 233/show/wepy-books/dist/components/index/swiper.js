'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var swiper = function (_wepy$component) {
    _inherits(swiper, _wepy$component);

    function swiper() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, swiper);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = swiper.__proto__ || Object.getPrototypeOf(swiper)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            imgUrls: ['../resources/images/swiper1.jpg', '../resources/images/swiper2.jpg', '../resources/images/swiper3.jpg']
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(swiper, [{
        key: 'onLoad',
        value: function onLoad() {
            this.$emit('indexLoadComplete', true);
            console.log('index-swiper');
        }
    }]);

    return swiper;
}(_wepy2.default.component);

exports.default = swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJzd2lwZXIiLCJkYXRhIiwiaW1nVXJscyIsIm1ldGhvZHMiLCIkZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBRWpCQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FDTCxpQ0FESyxFQUVMLGlDQUZLLEVBR0wsaUNBSEs7QUFETixTLFFBT1BDLE8sR0FBVSxFOzs7OztpQ0FHRDtBQUNMLGlCQUFLQyxLQUFMLENBQVcsbUJBQVgsRUFBZ0MsSUFBaEM7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0g7Ozs7RUFmK0IsZUFBS0MsUzs7a0JBQXBCUCxNIiwiZmlsZSI6InN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzd2lwZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBpbWdVcmxzOiBbXHJcbiAgICAgICAgICAgICcuLi9yZXNvdXJjZXMvaW1hZ2VzL3N3aXBlcjEuanBnJyxcclxuICAgICAgICAgICAgJy4uL3Jlc291cmNlcy9pbWFnZXMvc3dpcGVyMi5qcGcnLFxyXG4gICAgICAgICAgICAnLi4vcmVzb3VyY2VzL2ltYWdlcy9zd2lwZXIzLmpwZycsXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5kZXhMb2FkQ29tcGxldGUnLCB0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleC1zd2lwZXInKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==