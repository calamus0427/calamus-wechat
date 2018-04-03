//utils.js
// const util = require('../../utils/util.js')

Page({
  data: {
/*轮播图*/
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://img3.coocaa.com/goods/skyworth/banner/8/S88.jpg'
      }, {
        link: '/pages/index/index',
        url: 'http://img3.coocaa.com/goods/skyworth/banner/8/hz1.jpg'
      }, {
        link: '/pages/index/index',
        url: 'http://img3.coocaa.com/goods/skyworth/banner/8/G999.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
/*轮播图*/
    showChange:true,
    src:'http://p3i10hjs7.bkt.clouddn.com/coocaa.jpg',
    is_modal_Hidden: false,
    is_modal_Msg: '我是一个自定义组件',
    showModel:false,
    modelList: [{ 'id': '1', 'url': '../../img/1.png' }, { 'id': '2', 'url': '../../img/bg.jpg' },
      { 'id': '3', 'url': '../../img/sunny.jpg' }, { 'id': '4', 'url': '../../img/sunny1.jpg' }],
    currentModel:'',
    currentModelUrl:'',
    urlRequest: "http://172.20.158.185:8182/file/upload_img",
    x:0,
    y:0
  },
  changePosition(e) {
    console.log("change")
    console.log(e.detail)
  },
  nextPage: function () {
    console.log("next");
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {

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
                  console.log("11",avatarUrl)
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
            }
          })
        }
        _this.setData({
          showChange:false
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
  submitModel: function (event) {
    console.log(event.target.dataset);
    this.setData({
      currentModel: event.target.dataset.id,
      currentModelUrl: event.target.dataset.url
    })
    if (event.target.dataset.id == 1){
      this.setData({
        x: 0,
        y: 0
      })
    } else if (event.target.dataset.id == 2) {
      this.setData({
        x: 240,
        y: 0
      })
    } else if (event.target.dataset.id == 3) {
      this.setData({
        x: 0,
        y: 240
      })
    } else if (event.target.dataset.id == 4) {
      this.setData({
        x: 240,
        y: 240
      })
    }
  },
  downloadImg: function () {
    var _this = this ;
    wx.showToast({
      title: '正在处理图片，请稍后...',
      icon: 'loading',
      mask: true,
      duration: 10000
    })
    wx.request({
      url: this.data.urlRequest,
      // filePath: _this.data.src,
      // name: 'uploadfile_ant',
      data: {
        avatarUrl: this.data.src,
        openId:'oGqMe0Rbif0P2cLyZnZPaH-Sjwr8',    
        model: this.data.currentModel,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var data = JSON.parse(res.data);
        wx.hideToast();
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
              content: '下载图片失败,请重试',
              showCancel: false,
              success: function (res) { }
            })
          }
        }) 
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
  },
});
