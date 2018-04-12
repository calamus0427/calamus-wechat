// 使用 wx.createContext 获取绘图上下文 context
// const ctx = wx.createCanvasContext('canvas')
import util from '../../utils/util.js'

const ctx = wx.createCanvasContext('canvas')
const grd = ctx.createLinearGradient(0, 0, 400, 0)
const img = "../../img/uesr.jpg";
const img2 = "../../img/red1.png";

Page({
  data:{
    canvasWidth:300,
    canvasHeight:200,
    //canvas坐标
    x: 0,
    y: 0,
    status:''
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    console.log(util.ctx);

    // Create linear gradient
    grd.addColorStop(0, 'white')
    grd.addColorStop(1, 'red')

    // let img = "../../img/red1.png";

    // Fill with gradient
    ctx.setFillStyle(grd)
    ctx.fillRect(0, 0, 300, 200)
    // ctx.draw()
    
    ctx.setStrokeStyle("#00ff00")
    ctx.setLineWidth(5)
    ctx.rect(0, 0, 200, 200)
    ctx.stroke()
    ctx.setStrokeStyle("#ff0000")
    ctx.setLineWidth(2)
    ctx.moveTo(160, 100)
    ctx.arc(100, 100, 60, 0, 2 * Math.PI, true)
    ctx.moveTo(140, 100)
    ctx.arc(100, 100, 40, 0, Math.PI, false)
    ctx.moveTo(85, 80)
    ctx.arc(80, 80, 5, 0, 2 * Math.PI, true)
    ctx.moveTo(125, 80)
    ctx.arc(120, 80, 5, 0, 2 * Math.PI, true)
    ctx.stroke()
    // ctx.draw()    
    // ctx.drawImage(img, 120, 20, 66, 66)     
    // ctx.drawImage(img, 200, 20, 66, 66)     
    
    // ctx.drawImage('../../img/red2.png', 10, 20, 66, 66) 
    // ctx.draw()
    // this.drawText()
  },
  saveImg:function(){
    wx.canvasToTempFilePath({
      // x: 0,
      // y: 0,
      // width: 200,
      // height: 200,
      // destWidth: 100,
      // destHeight: 100,
      canvasId: 'canvas',
      // fileType:'jpg',
      success: function (res) {
        console.log(res.tempFilePath)
        wx.previewImage({
          urls: [res.tempFilePath],
        })
      },
      fail(res){
        console.log(res)
      }
    })
  },
  start: function (e) {
    this.setData({
      status:'start',
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move: function (e) {
    this.setData({     
      status:'move',
      x: e.touches[0].x,
      y: e.touches[0].y
    })
    if (this.data.x < 150 || this.data.y < 100 || this.data.x > 267|| this.data.y>167){
      console.log("超出屏幕")
    }else{
      this.drawImage(img, this.data.x - 150, this.data.y - 100, 300, 200) 
      this.drawImage(img2, this.data.x - 33, this.data.y - 33, 66, 66)   
        
      ctx.draw()
        
    }    
  },
  end: function (e) {
    this.setData({
      status:'end',
      hidden: true
    })
  },
  drawText: function (text, x, y, maxWidth){
    ctx.fillText("Hello World!", 200, 50)
    ctx.draw()
  },
  drawImage:function(image,x,y,width,height){
    ctx.drawImage(image, x, y, width, height)
    // ctx.draw()
  }
})