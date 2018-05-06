//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
  },
  onLoad: function () {
    wx.previewImage({
      current: 'http://p79mwfmry.bkt.clouddn.com/1.jpg',
      urls: ['http://p79mwfmry.bkt.clouddn.com/1.jpg'],
    })
  }
})
