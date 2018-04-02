//sunny.js


Page({
  data: {
    src:'',
    is_modal_Hidden: false,
    is_modal_Msg: '我是一个自定义组件',
    showModel:false,
  },
  nextPage: function () {
    console.log("next");
    wx.navigateTo({
      url: '../logs/logs'
    })
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
        });
        //TODO：上传图片
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
  chooseModel: function(){
    this.setData({
      showModel: this.data.showModel == true ? false : true
    })
  },
  addIcon: function () {
    var _this = this ;
    wx.showToast({
      title: '正在处理图片，请稍后...',
      icon: 'loading',
      mask: true,
      duration: 10000
    })
    //上传图片

    wx.uploadFile({
      url:'/home/uploadfilenew',
      filePath: _this.data.src,
      name: 'uploadfile_ant',
      formData: {
        // 'imgIndex': i
      },
      header: {
        "Content-Type": "multipart/form-data"
      },
      success: function (res) {
        var data = JSON.parse(res.data);
        //服务器返回格式: { "Catalog": "testFolder", "FileName": "1.jpg", "Url": "https://test.com/1.jpg" }  
        // _this.setData({
        //   productInfo: productInfo
        // });
          wx.hideToast();
      },
      fail: function (res) {
        wx.hideToast();
        wx.showModal({
          title: '错误提示',
          content: '获取更改图片失败,请重试',
          showCancel: false,
          success: function (res) { }
        })
      }
    });

    console.log("add");
  },
  downloadImg: function () {
    var _this = this ;
    //wx.saveImageToPhotosAlbum 需要授权，下载不需要
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
            wx.showModal({
              title: '错误提示',
              content: '下载图片失败,请重试',
              showCancel: false,
              success: function (res) { }
            })
          }
        })
      },
      fail: function () {
        wx.showModal({
          title: '错误提示',
          content: '下载图片图片失败,请重试',
          showCancel: false,
          success: function (res) { }
        })
      }
    })  
  },
});
