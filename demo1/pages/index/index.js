//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '如果明天是晴天就好了',
    text:[{
      'name':"nihao",
      'danyinhao':'111'
    },{
        'name': "nihao",
        'danyinhao': '111'
    }],
    weather:{},
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };

    wx.request({
      // url: 'https://tj.nineton.cn/Heart/index/all?city=CHGD050000', 
      url:'https://api.seniverse.com/v3/weather/daily.json?key=ocny7hqye90ipuhe&location=beijing&language=zh-Hans&unit=c&start=0&days=5',
        data: {
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: res =>{
          console.log(res.data.results[0])
          app.globalData.weather = res.data.results[0]
          this.setData({
            weather: res.data.results[0],
          })
          console.log(app.globalData.weather);
        }
      }) 
  },
  getUserInfo: function(res) {
    console.log(e)
    app.globalData.weather = res.data.weather[0]
    this.setData({
      weather: res.data.weather[0],
    })
  },
  getWeather: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  loadWeatherData: function () {
    var apiURL = "http://www.sojson.com/open/api/weather/json.shtml?city=" + '深圳';
    wx.request({
      url: apiURL,
      success: function (res) {
        console.log(res);
        app.globalData.weatherData = res.data;
      }
    });
  },
  chooseImg:function(){
    wx.chooseImage({
      count: 0,
      sizeType: [],
      sourceType: [],
      success: function (res) { 
        console.log(res)
        wx.previewImage({
          urls: [res.tempFilePaths[0]],
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }

})
