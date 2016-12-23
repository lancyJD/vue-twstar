//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    result: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  scanoQR: function () {
    var self = this
    wx.scanCode({
      success: function(res){
        console.log(res);
        self.setData({
          result:JSON.stringify(res)
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
