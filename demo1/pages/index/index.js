//utils.js
const util = require('../../utils/util.js')

Page({
  data: {
    showChange:false,
    src:'',
    is_modal_Hidden: false,
    is_modal_Msg: '我是一个自定义组件',
    showModel:false,
    modelList: [{ 'id': '1', 'url': '../../img/1.png' }, { 'id': '2', 'url': '../../img/bg.jpg' },
      { 'id': '3', 'url': '../../img/sunny.jpg' }, { 'id': '4', 'url': '../../img/sunny1.jpg' }],
    currentModel:''
  },
  nextPage: function () {
    console.log("next");
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {

  },
  submitModel:function(event){
    console.log(event.target.dataset.id);
    this.setData({
      currentModel: event.target.dataset.id
    })
    var _this = this ;
    wx.request({
      url: 'https://www.cnblogs.com/mvc/blog/ViewCountCommentCout.aspx?postId=6270319',
      data: {
        model: this.data.currentModel,
        img: this.data.src
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('request success', res);
        _this.setData({
          // src:res
        })
      },
      fail:function(res){
        console.log("fail",res)
      }
    })
  },
  authUser:function(){
    var _this = this ;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              var that = _this;
              wx.getUserInfo({
                success: function (res) {
                  var userInfo = res.userInfo 
                  var nickName = userInfo.nickName
                  var avatarUrl = userInfo.avatarUrl
                  that.setData({
                    src: avatarUrl
                  });
                  //TODO：上传图片
                }
              })
            },
            fail(){
              _this.setData({
                src: "http://p3i10hjs7.bkt.clouddn.com/user.jpg"
              })
            }
          })
        }else{
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              _this.setData({
                src: avatarUrl
              });
              //TODO：上传图片
            }
          })
        }
        _this.setData({
          showChange:true
        })
      },
      fail(res){
        console.log(res);
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
