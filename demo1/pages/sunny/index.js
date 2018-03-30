//sunny.js


Page({
  data: {
    src:''
  },
  onLoad: function() {
    var _this = this ;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo //用户基本信息
        var nickName = userInfo.nickName //用户名
        var avatarUrl = userInfo.avatarUrl
        _this.setData({
          src: avatarUrl
        })
      }
    })
  },
  chooseImg: function () {
    var _this = this ;
    wx.chooseImage({
      ount: 1,   
      sizeType: ['compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) { 
        console.log(res.tempFilePaths[0]);
        _this.setData({
          src: res.tempFilePaths[0]
        })
      },
      fail: function (res) {
        wx.hideToast();
        wx.showModal({
          title: '错误提示',
          content: '上传图片失败',
          showCancel: false,
          success: function (res) { }
        })
      } 
  })
  },
  addIcon: function () {
    console.log("add");
  },
  downloadImg: function () {
    var _this = this ;
    wx.downloadFile({
      url: _this.data.src,
      success: function (res) {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res) {
            console.log(res)
          },
          fail: function (res) {
            console.log(res)
            console.log('fail')
          }
        })
      },
      fail: function () {
        console.log('fail')
      }
    })  
  },
});
