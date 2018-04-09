//utils.js
// const util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
/*轮播图*/
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://p3i10hjs7.bkt.clouddn.com/SKYWORTH_30th.png'
      }, {
        link: '/pages/index/index',
        url: 'http://img3.coocaa.com/goods/skyworth/banner/8/hz1.jpg'
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
    showModel:true,
    modelList: [{ 'id': 'template_angel_red1.png', width: '66px', height: '66px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-red1.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/red1.png' }, 
      { 'id': 'template_angel_red2.png', width: '66px', height: '66px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-red2.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/red2.png' },
      { 'id': 'template_angel_blue1.png', width: '66px', height: '66px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-blue1.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/blue1.png' }, 
      { 'id': 'template_angel_blue2.png', width: '66px', height: '66px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-blue2.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/blue2.png' },
      { 'id': 'template_angel_purple1.png', width: '66px', height: '66px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-purple1.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/purple1.png' },
      { 'id': 'template_angel_purple2.png', width: '66px', height: '66px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-purple2.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/purple2.png' },
      { 'id': 'template_bottom1.png', width: '100%', height: '100%', direction: 'none', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-bottom1.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/bottom1.png' },
      { 'id': 'template_bottom2.png', width: '100%', height: '100%', direction: 'none', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-bottom2.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/bottom2.png' },
      { 'id': 'template_bottom3.png', width: '100%', height: '100%', direction: 'none', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-bottom3.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/bottom3.png' },
      { 'id': 'template_top1.png', width: '100%', height: '100%', direction: 'none', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-top1.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/top1.png' }],
    currentModel: 'template_angel_red1.png',
    currentModelUrl: 'http://p3i10hjs7.bkt.clouddn.com/red1.png',
    currentHeight:'66px',
    currentWidth:'66px',
    currentDirection:'none',
    getImgUrl:"https://thirty.coocaa.com/index",
    urlRequest: "https://thirty.coocaa.com/file/upload_img",
    //TODO:可拖动头像参数
    x:0, 
    y:0,
    //透明度
    alpha:1,
    // transform:0,
    //动画
    animationData:{},
    openID:'',
    appId: 'wx962b62db6998d015',
    appSecret: '0e1fc9230d701c333d013b557bd34033',
    // transformAnimation:{}
  },
  onLoad:function(){    
    var _this = this;
    wx.request({
      url: this.data.getImgUrl,
      method: 'GET',
      success: function (res) {
        _this.setData({
          'imgUrls[1].url': res.data
        })
      },
      fail: function(res){
        console.log("fail")
      }
    })
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + _this.data.appId + '&secret=' + _this.data.appSecret+'&js_code=' + res.code + '&grant_type=authorization_code',
            data: {
              code: res.code
            },
            success: function (res) {
              console.log(res);
              _this.setData({
                openID:res.data.openid
              })
            },
            fail: function (res) {
              console.log("openId",res)
              // this.globalData.openId = res.data.openid;
            },
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });  
  },
  changePosition(e) {
    console.log(e.detail.y)
   if (e.detail.y <= 17.8){
      this.setData({
        alpha: 0.10
      })
    }else{
      this.setData({
        alpha: (e.detail.y / 178).toFixed(2)
      })
    }
  },
  changeHat(e) {
    this.setData({
      x: (e.detail.x/174).toFixed(2),
      y: (e.detail.y / 174).toFixed(2)
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
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        _this.setData({
          src: avatarUrl,
          showChange: false
        });
      },
      fail:function(){
        _this.setData({
          src: 'http://p3i10hjs7.bkt.clouddn.com/coocaa.jpg',
          showChange: false
        });
      }
    })
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
    })

    this.animation = animation
    animation.rotate(45).scale(3, 3).step()
    animation.translate(0, 0).step({ duration: 1000 })
    this.setData({
      animationData: animation.export()
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
    this.setData({
      currentModel: event.target.dataset.id,
      currentModelUrl: event.target.dataset.url,
      currentWidth: event.target.dataset.width,
      currentHeight: event.target.dataset.height,
      currentDirection: event.target.dataset.direction        
    })
    if (event.target.dataset.id == "top"){
      this.setData({
        x: 0,
        y: 0
      })
    } else if (event.target.dataset.id == "right") {
      this.setData({
        x: 240,
        y: 0
      })
    } else if (event.target.dataset.id == "bottom") {
      this.setData({
        x: 0,
        y: 240
      })
    } else if (event.target.dataset.id == "left") {
      this.setData({
        x: 0,
        y: 0
      })
    }
  },
  downloadImg: function () {
    var _this = this ;
    var alpha = 1 ;
    wx.showToast({
      title: '下载中...',
      icon: 'loading',
      mask: true,
      duration: 10000
    })
    if (this.data.currentModel == 'template_top1.png' || this.data.currentModel == 'template_bottom1.png' || this.data.currentModel == 'template_bottom2.png' || this.data.currentModel ==  'template_bottom3.png' ) {
      alpha = this.data.alpha;
    }else{
      alpha = 1 ;
    }
    wx.request({
      url: this.data.urlRequest,
      // filePath: _this.data.src,
      // name: 'uploadfile_ant',
      data: {
        avatarUrl: this.data.src,
        openID:this.data.openID,    
        position: this.data.currentModel,
        alpha: alpha,
        // transform: this.data.transform,
        x: this.data.x,
        y: this.data.y,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var data = res.data;
        wx.hideToast();
        wx.downloadFile({
          url: data,
          success: function (res) {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function (res) {
                console.log(res)
              },
              fail: function (res) {
                wx.showModal({
                  title: '警告',
                  content: '您点击了拒绝授权，将无法正常保存图片。请10分钟后再次点击授权，或者删除小程序重新进入。',
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                      wx.openSetting({
                        success: (res) => {
                          console.log(res);
                        }
                      })
                    }
                  }
                })                
              }
            })
          },
          fail: function () {
            wx.showModal({
              title: '警告',
              content: '您点击了拒绝授权，将无法正常保存图片。请10分钟后再次点击授权，或者删除小程序重新进入。',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
            wx.openSetting({
              success: (res) => {
                console.log(res);
              }
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
