'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var store = {
    setStorage: function setStorage(obj) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var o;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            for (o in obj) {
                                _wepy2.default.setStorage({
                                    key: o,
                                    data: obj[o]
                                });
                            }

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
};
exports.default = store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JhZ2UuanMiXSwibmFtZXMiOlsic3RvcmUiLCJzZXRTdG9yYWdlIiwib2JqIiwibyIsImtleSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVE7QUFDSkMsY0FESSxzQkFDT0MsR0FEUCxFQUNXO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCLGlDQUFRQyxDQUFSLElBQWFELEdBQWIsRUFBaUI7QUFDYiwrQ0FBS0QsVUFBTCxDQUFnQjtBQUNaRyx5Q0FBS0QsQ0FETztBQUVaRSwwQ0FBTUgsSUFBSUMsQ0FBSjtBQUZNLGlDQUFoQjtBQUlIOztBQU5pQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9wQjtBQVJTLENBQWQ7a0JBVWdCSCxLIiwiZmlsZSI6InN0b3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuY29uc3Qgc3RvcmUgPSB7XHJcbiAgICBhc3luYyBzZXRTdG9yYWdlKG9iail7XHJcbiAgICAgICBmb3IobGV0IG8gaW4gb2JqKXtcclxuICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICBrZXk6IG8sXHJcbiAgICAgICAgICAgICAgIGRhdGE6IG9ialtvXVxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgIHN0b3JlXHJcbiJdfQ==