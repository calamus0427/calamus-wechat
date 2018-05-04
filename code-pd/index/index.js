Page({
  data: {
    src:'',
    modelList: [{ 'id': 'template_bottom1.png', width: '100%', height: '100%', direction: 'none', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-bottom11.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/bottom1.png' },
      { 'id': 'template_bottom2.png', width: '100%', height: '100%', direction: 'none', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-bottom12.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/bottom2.png' },
      { 'id': 'template_bottom3.png', width: '100%',  height: '100%', direction: 'none', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-bottom13.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/bottom3.png' },
      { 'id': 'template_top1.png', width: '100%',  height: '100%', direction: 'none', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-top11.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/top1.png' },
      { 'id': 'template_angel_red1.png',  width: '60px', height: '60px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-red11.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/red1.png' },
      { 'id': 'template_angel_red2.png',  width: '60px', height: '60px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-red12.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/66-red2.png' },
      { 'id': 'template_angel_blue1.png',  width: '60px', height: '60px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-blue11.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/blue1.png' },
      { 'id': 'template_angel_blue2.png', width: '60px', height: '60px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-blue12.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/66-blue2.png' },
      { 'id': 'template_angel_purple1.png', width: '60px', height: '60px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-purple11.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/purple1.png' },
      { 'id': 'template_angel_purple2.png', width: '60px', height: '60px', direction: 'all', 'modelUrl': 'http://p3i10hjs7.bkt.clouddn.com/show-purple12.png', 'url': 'http://p3i10hjs7.bkt.clouddn.com/purple2.png' }],
    currentModel: 'template_bottom1.png',
    currentModelUrl: 'http://p3i10hjs7.bkt.clouddn.com/bottom1.png',
    currentHeight:'100%',
    currentWidth:'100%',
    currentDirection:'none',
    tips:'拖动右边的进度条可以调节透明度哦~',
    getImgUrl:"https://thirty.coocaa.com/index",
    urlRequest: "https://thirty.coocaa.com/file/upload_img",
    //可拖动头像参数
    x:0, 
    y:0,
    //透明度
    alpha:1,
    //动画
    animationData:{},
    openID:'',
    code:'',
    appId: 'wx962b62db6998d015',
    appSecret: '0e1fc9230d701c333d013b557bd34033',
    // 滚动条
    scrollLeft:0 ,
    scrollX:0,
    windowWidth:'',
    loading:false
  },
  onLoad:function(){    
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          windowWidth: (res.windowWidth - 180) / 2 + 180
        })
      }
    })   
  },
  onReady:function(){
      this.setData({
        loading:false
      })    
  },
  // 滚动条
  getleft(e) {
    this.setData({
      scrollX:(e.detail.scrollLeft/e.detail.scrollWidth)*120
    })
  } ,
  changePosition(e) {
   if (e.detail.y <= 12.8){
      this.setData({
        alpha: 0.10
      })
    }else{
      this.setData({
        alpha: (e.detail.y / 128).toFixed(2)
      })
    }
  },
  changeHat(e) {
    console.log("iphone6无法响应",e.detail);
    this.setData({
      x: (e.detail.x/120).toFixed(2),
      y: (e.detail.y/120).toFixed(2)
    })
  },
  authUser:function(){
  },
  submitModel: function (event) {
    var model = event.target.dataset.id;
    var currentDirection = event.target.dataset.direction;
    this.setData({
      currentModel: event.target.dataset.id,
      currentModelUrl: event.target.dataset.url,
      currentWidth: event.target.dataset.width,
      currentHeight: event.target.dataset.height,
      currentDirection: event.target.dataset.direction                  
    })
    if (currentDirection == 'none' ){
      this.setData({
        tips:'拖动右边的进度条可以调节透明度哦~'
      })
    }else{
      this.setData({
        tips: '帽子是可以移动的~'
      })
    }
  },
  downloadImg: function () {
    console.log("x,y", this.data.x,this.data.y);
    var _this = this ;
    // var fenxiang = '';
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
      data: {
        avatarUrl: this.data.src,
        code:this.data.code,
        openID:this.data.openID,    
        position: this.data.currentModel,
        alpha: alpha,
        x: this.data.x,
        y: this.data.y,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {        
        var data = res.data[0];
        var fenxiang = res.data[1];
        wx.hideToast();
        wx.downloadFile({
          url: data,
          success: function (res) {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function (res) {
                wx.showToast({
                  title: '头像保存成功',
                  icon: 'success',
                  duration: 1000,
                  complete:function(){
                    setTimeout(function(){
                      wx.previewImage({
                        current: fenxiang, 
                        urls: [fenxiang], 
                      })
                    },1000)
                    
                  }
                })
                
              },
              fail: function (res) {
                wx.getSetting({
                  success(res) {
                    if (!res.authSetting['scope.writePhotosAlbum']) {
                      wx.showModal({
                        title: '警告',
                        content: '您拒绝授权保存到相册，将无法保存图片。',
                        success: function (res) {                         
                          if (res.confirm) {
                            wx.openSetting({
                              success: (res) => {
                                console.log(res);
                              }
                            })
                          }                          
                        },
                        fail:function(res){
                        }
                      }) 
                    }else{
                      wx.showModal({
                        title: '提示',
                        content: '取消下载头像'
                      }) 
                    }
                  }                  
                })
                              
              }
            })         
          },
          fail: function () {
            wx.showModal({
              title: '错误',
              content: '下载失败，请重试',
              success: function (res) {
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
