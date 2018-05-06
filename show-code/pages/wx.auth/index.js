//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
  },
  onLoad: function () {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // dosometjing
            }
          })
        }
      }
    })
  }
})
