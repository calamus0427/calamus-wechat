//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
  },
  onLoad: function () {
  },
  showToast:function (){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})
