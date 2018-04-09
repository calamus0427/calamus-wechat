//utils.js
// const util = require('../../utils/util.js')
var app = getApp();
import WeCropper from '../we-cropper/we-cropper.js'

const WATERMARK_FONT = '@we-cropper'
const device = wx.getSystemInfoSync()

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
    modelList: [{ 'id': 'top', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/topShow.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/top.png' }, 
      { 'id': 'right', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/rightShow.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/right.png' },
      { 'id': 'bottom', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/bottomShow.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/bottom.png' }, 
      { 'id': 'left', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/leftShow.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/left.png' }],
    currentModel:'top',
    currentModelUrl: 'http://p3i10hjs7.bkt.clouddn.com/top.png',
    // currentModelWidth:'100%',
    // currentModelHeight:'100rpx',
    // urlRequest: "http://www.calamus.xyz/api/getUserMsg.php",
    getImgUrl:"https://thirty.coocaa.com/index",
    urlRequest: "https://thirty.coocaa.com/file/upload_img",
    //TODO:可拖动头像参数
    x:0, 
    y:0,
    //透明度
    alpha:1,
    //动画
    animationData:{},
    openID:'',
    appId: 'wx962b62db6998d015',
    appSecret: '0e1fc9230d701c333d013b557bd34033'
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
    console.log(e.detail.x)
    this.setData({
      alpha: (e.detail.x / 100).toFixed(2)
    })
    // if (e.detail.x <= 16.2){
    //   this.setData({
    //     alpha: 0.10
    //   })
    // }else{
    //   this.setData({
    //     alpha: (e.detail.x / 162).toFixed(2)
    //   })
    // }
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
        console.log("11", avatarUrl)
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

    // animation.scale(2, 2).rotate(45).step();
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
      // currentModelHeight: event.target.dataset.height,
      // currentModelWidth: event.target.dataset.width
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
    wx.showToast({
      title: '下载中...',
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
        openID:this.data.openID,    
        position: this.data.currentModel,
        alpha:this.data.alpha
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
            console.log("down",res)
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function (res) {
                console.log(res)
              },
              fail: function (res) {
                wx.showModal({
                  title: '错误提示',
                  content: '取消下载',
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
