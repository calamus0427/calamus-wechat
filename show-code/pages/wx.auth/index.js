//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    msg:'等待授权'
  },
  onLoad: function () {
   
  },
  auth(){
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          var _this = this;
          wx.authorize({
            scope: 'scope.record',
            success() {
              _this.setData({
                msg: '授权成功'
              })
            }
          })
        }
      },
      fail(res){
        console.log(res)
      }
    })
  }
})
