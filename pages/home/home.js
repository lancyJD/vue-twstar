var app = getApp()
Page({
  data: {
    imgUrls: [
      {imgUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', href_url:'../../pages/play_class/play_class'},
      {imgUrl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', href_url:'../../pages/play_class/play_class'},
      {imgUrl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', href_url:'../../pages/play_class/play_class'}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    current: 0,
data: {},
errorCode: 0,
logined: false,
ret: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var self = this
    // wx.request({
    //   url: 'http://h5.heatup.cn/api/hot/recom/hot_main_info',
    //   headers: { 'Content-Type': 'application/json' },
    //   success: function (res) {
    //       console.log(res.data.data.hot_coach_list);
    //       that.data.hot_coach_list = res.data.data.hot_coach_list;
    //       console.log(res.data.data.mostpop_course_list)
    //       that.data.mostpop_course_list = res.data.data.mostpop_course_list;
    //       console.log(that.data.mostpop_course_list);
    //   }
    // })
    app.todoRef.on('value', function(data){
      self.setData({data:data.val()});
    })
    app.todoRef.bindAsArray(this,'data')
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  changeIndex: function(e) {
     
  },

  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})