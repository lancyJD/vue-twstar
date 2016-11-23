//index.js  
//获取应用实例  
var app = getApp()  
var storeJson = require('./moke_store')
console.log(storeJson)
Page( {  
  data: {   
    winWidth: 0,  
    winHeight: 0,  
    currentTab: 0, 
    dataIndex: null, 
    //日期
    dateTime: [
      {
        'dateTime':'12.01',
        'week': '周一',
        'isSelected': true
      },
      {
        'dateTime':'12.02',
        'week': '周二',
        'isSelected': false
      },
      {
        'dateTime':'12.03',
        'week': '周三',
        'isSelected': false
      },
      {
        'dateTime':'12.04',
        'week': '周四',
        'isSelected': false
      },
      {
        'dateTime':'12.05',
        'week': '周五',
        'isSelected': false
      },
      {
        'dateTime':'12.06',
        'week': '周六',
        'isSelected': false
      },
      {
        'dateTime':'12.07',
        'week': '周天',
        'isSelected': false
      }
    ],
    storeJson: {
      "data": {
        "course_tip": "",
        "day_week_list": [
          {
            "date": "12.01",
            "store_list": [
              {
                "address": "南山区高新南一道3号富诚大厦5楼",
                "distance": 0,
                "latitude": 22.538610,
                "longitude": 113.954270,
                "store_id": 2,
                "store_name": "富诚大厦店",
                "team_course_list": [
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161107214951_06888663733987727_a352b8bd.jpg",
                    "courseId": 238,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 59.80,
                    "tags": [],
                    "time": "07:30~08:30",
                    "title": "核心对冲-TRX",
                    "vipPrice": 47.84
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161107221344_09547633380459382_36fce8e0.jpg",
                    "courseId": 243,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 30.00,
                    "tags": [],
                    "time": "12:30~13:29",
                    "title": "1元特享-燃脂尊巴舞Zumba",
                    "vipPrice": 1.00
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161107214400_04631687886551311_1048d2d7.jpg",
                    "courseId": 301,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 39.80,
                    "tags": [],
                    "time": "17:00~18:00",
                    "title": "香薰深呼吸瑜珈",
                    "vipPrice": 31.84
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161107221344_09547633380459382_36fce8e0.jpg",
                    "courseId": 242,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 39.80,
                    "tags": [],
                    "time": "17:15~18:15",
                    "title": "尊巴成品舞Zumba",
                    "vipPrice": 31.84
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161108104553_05291887416342897_718da5ed.jpg",
                    "courseId": 309,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 39.80,
                    "tags": [],
                    "time": "17:15~18:14",
                    "title": "TABATA",
                    "vipPrice": 31.84
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161111144758_014975929386126607_bf52cf4f.jpg",
                    "courseId": 304,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 59.80,
                    "tags": [],
                    "time": "18:30~19:30",
                    "title": "空中漫舞瑜珈",
                    "vipPrice": 47.84
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161107214951_06888663733987727_a352b8bd.jpg",
                    "courseId": 311,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 59.80,
                    "tags": [],
                    "time": "18:30~19:30",
                    "title": "腰腹阻力爆破CxworX",
                    "vipPrice": 47.84
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161111144758_014975929386126607_bf52cf4f.jpg",
                    "courseId": 306,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 39.80,
                    "tags": [],
                    "time": "19:40~20:40",
                    "title": "球平衡瑜珈",
                    "vipPrice": 31.84
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161107214951_06888663733987727_a352b8bd.jpg",
                    "courseId": 239,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 59.80,
                    "tags": [],
                    "time": "19:40~20:40",
                    "title": "核心对冲-TRX",
                    "vipPrice": 47.84
                  },
                  {
                    "coachHeadImage": "http://youfang-image.oss-cn-shenzhen.aliyuncs.com/20161109120639_0014705899244110032_ba4985e8.jpg",
                    "courseId": 313,
                    "courseLable": "3",
                    "courseStatus": "1",
                    "price": 30.00,
                    "tags": [],
                    "time": "20:50~21:50",
                    "title": "1元特享-HIIT",
                    "vipPrice": 1.00
                  }
                ]
              }
            ],
            "store_list_count": 14,
            "week": "周四"
          },
          {
            "date": "12.02",
            "store_list": [],
            "store_list_count": 0,
            "week": "周五"
          },
          {
            "date": "12.03",
            "store_list": [],
            "store_list_count": 0,
            "week": "周六"
          },
          {
            "date": "12.04",
            "store_list": [],
            "store_list_count": 0,
            "week": "周日"
          },
          {
            "date": "12.05",
            "store_list": [],
            "store_list_count": 0,
            "week": "周一"
          },
          {
            "date": "12.06",
            "store_list": [],
            "store_list_count": 0,
            "week": "周二"
          },
          {
            "date": "12.07",
            "store_list": [],
            "store_list_count": 0,
            "week": "周三"
          }
        ]
      },
      "errorCode": 0,
      "logined": false,
      "ret": 0
    },
    currentSubTab: 0,
    textTemp: '测试'
  },  
  onLoad: function() {  
    var that = this;  
    // 获取系统信息 
    wx.getSystemInfo( {  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
    }); 
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    });
    
  },  
  openTheMap: function() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    });
  },
  /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  },  
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
    var that = this; 
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  },
  switchWeek: function(e) {
    var self = this; 
    let dataIndex = e.currentTarget.dataset.index;
    let dateTiemTemp = self.data.dateTime;
    let str = '测试'
    for(let i = 0; i < dateTiemTemp.length; i++) {
        if(i == dataIndex) {
           dateTiemTemp[i].isSelected = true;
            str = str + dateTiemTemp[i].week
        } else {
          dateTiemTemp[i].isSelected = false;
        }
      
    }
    self.setData({
      textTemp: str,
      currentSubTab: dataIndex,
      dateTime: dateTiemTemp
    })
  } 
}) 