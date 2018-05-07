//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
  },
  onLoad: function () {
  },
  showToast:function (){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 5000
    })
  },
  showToast1: function () {
    //wx.showLoading 和 wx.showToast 同时只能显示一个，但 wx.hideToast/wx.hideLoading 也应当配对使用；
    wx.showToast({
      title: '成功111',
      icon: 'success',
      duration: 5000
    })
  },
  hideToast:function() {
    wx.hideToast()
  },
  showLoading: function () {
    wx.showLoading({
      title: '加载中',
      // mask: 'true',
      success:function(){
        setTimeout(function(){
          wx.hideLoading()
        },3000)
      }
    })
  },
  hideLoading: function () {
    wx.hideLoading()
  },
  showModal: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showActionSheet: function () {
    var itemList = ['菜单0', '菜单1', '菜单2']
    wx.showActionSheet({
      itemList: itemList,
      success: function (res) {
        console.log(res.tapIndex)
        wx.showModal({
          title: '选择菜单',
          content: '您选择了' + itemList[res.tapIndex],
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
})
