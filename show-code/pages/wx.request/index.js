//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    weather: {},
  },
  onLoad: function () {
    wx.getLocation({
      success: res => {
        console.log("location", res, res.latitude, res.longitude);
        wx.request({
          url: 'https://free-api.heweather.com/s6/weather/forecast?' + 'location=' + res.longitude + ',' + res.latitude + '&key=dca2d12042d24afaba7deac3140f3f22',
          data: {
          },
          header: {
            'Content-Type': 'application/json'
          },
          success: res => {
            console.log(res);
            if (res.statusCode === 200) {
              app.globalData.weather = res.data.HeWeather6[0];
              this.setData({
                weather: res.data.HeWeather6[0],
              })
              console.log(res.data.HeWeather6[0]);
            } else {
              console.log(res)
            }

          }
        })
      },
    })
  }
})
