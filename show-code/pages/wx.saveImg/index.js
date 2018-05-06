//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
  },
  onLoad: function () {
    wx.saveImageToPhotosAlbum({
      filePath: 'http://p79mwfmry.bkt.clouddn.com/1.jpg',
      success(res) {
        console.log("success",res)
      },
      fail(res){
        console.log(res)
      }
    })
  }
  
})
