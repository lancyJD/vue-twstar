//app.js
var wilddog = require('wilddog-weapp-all'); 
App({
  onLaunch: function () {
    var that = this
     var config = {
      syncURL: 'https://lusa.wilddogio.com',
      authDomain: 'lusa.wilddog.com'
    }
  
     wilddog.initializeApp(config);
      
   console.log(wilddog);
  //  //或者使用Promise
  //  wilddog.auth().signInWeapp().then(function(user){
    
  //    console.log(user);
  //   }).catch(function(err){
      
  //      console.log(err);
  //   });
 
    // this.todoRef= wilddog.sync().ref('/data');
    
    // // ref.on('value', function(data){
    // //  console.log(data.val());
    // // })
    // //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})