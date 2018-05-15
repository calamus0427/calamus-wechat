'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _storage = require('./../utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
    getUserInfo: function getUserInfo() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loginData, userinfo;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _wepy2.default.login();

                        case 2:
                            loginData = _context.sent;

                            console.log('登录成功', loginData);
                            _context.next = 6;
                            return _wepy2.default.getUserInfo();

                        case 6:
                            userinfo = _context.sent;

                            console.log('获取信息成功', userinfo);
                            userinfo.code = loginData.code;
                            return _context.abrupt('return', userinfo);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    login: function login() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var userinfoRaw, userinfo;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            userinfoRaw = {};
                            userinfo = {};
                            _context2.prev = 2;
                            _context2.next = 5;
                            return interfaces.getUserInfo();

                        case 5:
                            userinfoRaw = _context2.sent;
                            _context2.next = 8;
                            return _wepy2.default.request({
                                url: _config.api.user.login.url + userinfoRaw.code,
                                method: _config.api.user.login.method,
                                dataType: 'json',
                                data: {}
                            });

                        case 8:
                            userinfo = _context2.sent;
                            _context2.next = 11;
                            return _storage2.default.setStorage({
                                'userId': userinfo.data.user.id,
                                'userInfo': userinfoRaw.userInfo

                            });

                        case 11:
                            console.log('数据已存储');
                            _context2.next = 18;
                            break;

                        case 14:
                            _context2.prev = 14;
                            _context2.t0 = _context2['catch'](2);

                            console.log(_context2.t0);
                            if (_context2.t0.errMsg === "getUserInfo:fail auth deny") {
                                _wepy2.default.showModal({
                                    title: '提示',
                                    content: '\u7531\u4E8E\u60A8\u521A\u624D\u62D2\u7EDD\u4E86\u6388\u6743\u767B\u5F55,\u7531\u4E8E\u5FAE\u4FE1\u7684\u7279\u6B8A\u6027,\u8BF7\u91CD\u65B0\u4E0B\u8F7D\u5C0F\u7A0B\u5E8F\u5E76\u5141\u8BB8\u6388\u6743(*^__^*) .'
                                });
                            }

                        case 18:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[2, 14]]);
        }))();
    },
    login1: function login1() {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var loginData, userinfo;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _wepy2.default.login();

                        case 3:
                            loginData = _context3.sent;
                            _context3.next = 6;
                            return _wepy2.default.request({
                                url: _config.api.user.login.url + loginData.code,
                                method: _config.api.user.login.method,
                                dataType: 'json',
                                data: {}
                            });

                        case 6:
                            userinfo = _context3.sent;

                            console.log(userinfo.data, 'from interface');
                            _context3.next = 10;
                            return _storage2.default.setStorage({
                                'userId': userinfo.data.user.id
                            });

                        case 10:
                            _context3.next = 15;
                            break;

                        case 12:
                            _context3.prev = 12;
                            _context3.t0 = _context3['catch'](0);

                            console.log('登录失败');

                        case 15:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this3, [[0, 12]]);
        }))();
    }
};

exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsImxvZ2luIiwibG9naW5EYXRhIiwiY29uc29sZSIsImxvZyIsInVzZXJpbmZvIiwiY29kZSIsInVzZXJpbmZvUmF3IiwicmVxdWVzdCIsInVybCIsInVzZXIiLCJtZXRob2QiLCJkYXRhVHlwZSIsImRhdGEiLCJzZXRTdG9yYWdlIiwiaWQiLCJ1c2VySW5mbyIsImVyck1zZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImxvZ2luMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQSxhQUFhO0FBQ1RDLGVBRFMseUJBQ0s7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUNRLGVBQUtDLEtBQUwsRUFEUjs7QUFBQTtBQUNWQyxxQ0FEVTs7QUFFaEJDLG9DQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQkYsU0FBcEI7QUFGZ0I7QUFBQSxtQ0FHTyxlQUFLRixXQUFMLEVBSFA7O0FBQUE7QUFHVkssb0NBSFU7O0FBSWhCRixvQ0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JDLFFBQXRCO0FBQ0FBLHFDQUFTQyxJQUFULEdBQWdCSixVQUFVSSxJQUExQjtBQUxnQiw2REFNVEQsUUFOUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9uQixLQVJjO0FBU1RKLFNBVFMsbUJBU0Q7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTk0sdUNBRE0sR0FDUSxFQURSO0FBRU5GLG9DQUZNLEdBRUssRUFGTDtBQUFBO0FBQUE7QUFBQSxtQ0FLY04sV0FBV0MsV0FBWCxFQUxkOztBQUFBO0FBS05PLHVDQUxNO0FBQUE7QUFBQSxtQ0FNVyxlQUFLQyxPQUFMLENBQWE7QUFDMUJDLHFDQUFLLFlBQUlDLElBQUosQ0FBU1QsS0FBVCxDQUFlUSxHQUFmLEdBQXFCRixZQUFZRCxJQURaO0FBRTFCSyx3Q0FBUSxZQUFJRCxJQUFKLENBQVNULEtBQVQsQ0FBZVUsTUFGRztBQUcxQkMsMENBQVUsTUFIZ0I7QUFJMUJDLHNDQUFNO0FBSm9CLDZCQUFiLENBTlg7O0FBQUE7QUFNTlIsb0NBTk07QUFBQTtBQUFBLG1DQWFBLGtCQUFNUyxVQUFOLENBQWlCO0FBQ25CLDBDQUFVVCxTQUFTUSxJQUFULENBQWNILElBQWQsQ0FBbUJLLEVBRFY7QUFFbkIsNENBQVlSLFlBQVlTOztBQUZMLDZCQUFqQixDQWJBOztBQUFBO0FBa0JOYixvQ0FBUUMsR0FBUixDQUFZLE9BQVo7QUFsQk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBb0JORCxvQ0FBUUMsR0FBUjtBQUNBLGdDQUFJLGFBQUVhLE1BQUYsS0FBYSw0QkFBakIsRUFBK0M7QUFDM0MsK0NBQUtDLFNBQUwsQ0FBZTtBQUNYQywyQ0FBTyxJQURJO0FBRVhDO0FBRlcsaUNBQWY7QUFJSDs7QUExQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0QmIsS0FyQ2M7QUFzQ1RDLFVBdENTLG9CQXNDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FFaUIsZUFBS3BCLEtBQUwsRUFGakI7O0FBQUE7QUFFREMscUNBRkM7QUFBQTtBQUFBLG1DQUdjLGVBQUtNLE9BQUwsQ0FBYTtBQUM5QkMscUNBQUssWUFBSUMsSUFBSixDQUFTVCxLQUFULENBQWVRLEdBQWYsR0FBcUJQLFVBQVVJLElBRE47QUFFOUJLLHdDQUFRLFlBQUlELElBQUosQ0FBU1QsS0FBVCxDQUFlVSxNQUZPO0FBRzlCQywwQ0FBVSxNQUhvQjtBQUk5QkMsc0NBQU07QUFKd0IsNkJBQWIsQ0FIZDs7QUFBQTtBQUdIUixvQ0FIRzs7QUFVUEYsb0NBQVFDLEdBQVIsQ0FBWUMsU0FBU1EsSUFBckIsRUFBMEIsZ0JBQTFCO0FBVk87QUFBQSxtQ0FXRCxrQkFBTUMsVUFBTixDQUFpQjtBQUNuQiwwQ0FBVVQsU0FBU1EsSUFBVCxDQUFjSCxJQUFkLENBQW1CSztBQURWLDZCQUFqQixDQVhDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBZVBaLG9DQUFRQyxHQUFSLENBQVksTUFBWjs7QUFmTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCZDtBQXhEYyxDQUFuQjs7a0JBMkRlTCxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdXRpbHMvc3RvcmFnZSdcclxuY29uc3QgaW50ZXJmYWNlcyA9IHtcclxuICAgIGFzeW5jIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luRGF0YSA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXmiJDlip8nLCBsb2dpbkRhdGEpXHJcbiAgICAgICAgY29uc3QgdXNlcmluZm8gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5L+h5oGv5oiQ5YqfJywgdXNlcmluZm8pXHJcbiAgICAgICAgdXNlcmluZm8uY29kZSA9IGxvZ2luRGF0YS5jb2RlXHJcbiAgICAgICAgcmV0dXJuIHVzZXJpbmZvXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHVzZXJpbmZvUmF3ID0ge31cclxuICAgICAgICBsZXQgdXNlcmluZm8gPSB7fVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB1c2VyaW5mb1JhdyA9IGF3YWl0IGludGVyZmFjZXMuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgICAgICB1c2VyaW5mbyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGFwaS51c2VyLmxvZ2luLnVybCArIHVzZXJpbmZvUmF3LmNvZGUsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS51c2VyLmxvZ2luLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF3YWl0IHN0b3JlLnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJJZCc6IHVzZXJpbmZvLmRhdGEudXNlci5pZCxcclxuICAgICAgICAgICAgICAgICd1c2VySW5mbyc6IHVzZXJpbmZvUmF3LnVzZXJJbmZvXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5bey5a2Y5YKoJylcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIGlmIChlLmVyck1zZyA9PT0gXCJnZXRVc2VySW5mbzpmYWlsIGF1dGggZGVueVwiKSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDnlLHkuo7mgqjliJrmiY3mi5Lnu53kuobmjojmnYPnmbvlvZUs55Sx5LqO5b6u5L+h55qE54m55q6K5oCnLOivt+mHjeaWsOS4i+i9veWwj+eoi+W6j+W5tuWFgeiuuOaOiOadgygqXl9fXiopIC5gXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvZ2luMSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpbkRhdGEgPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgICAgICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLnVzZXIubG9naW4udXJsICsgbG9naW5EYXRhLmNvZGUsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaS51c2VyLmxvZ2luLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJpbmZvLmRhdGEsJ2Zyb20gaW50ZXJmYWNlJylcclxuICAgICAgICAgICAgYXdhaXQgc3RvcmUuc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAndXNlcklkJzogdXNlcmluZm8uZGF0YS51c2VyLmlkLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZXNcclxuIl19