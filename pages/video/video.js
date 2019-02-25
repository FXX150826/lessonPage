// pages/video/video.js
//获取应用实例  
var app = getApp()
Page({
  data: {
    "video": [
      {
        "id": 1,
        "title": "AE",
        "subTitle": "AdobeAfterEffects简称“AE”是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。属于层类型后期软件。Adobe After Effects软件可以帮助您高效且精确地创建无数种引人注目的动态图形和震撼人心的视觉效果。利用与其他Adobe软件无与伦比的紧密集成和高度灵活的2D和3D合成，以及数百种预设的效果和动画，为您的电影、视频、DVD和MacromediaFlash作品增添令人耳目一新的效果",
        "image": "../../images/AE.jpg",
        "lesson": [
          {
            "lesson_class": "纷飞散落文字",
            "path": "../../videos/AE/纷飞散落文字.mp4"
          }
        ]
      },
      {
        "id": 2,
        "title": "PS",
        "subTitle": "AdobePhotoshop，简称“PS”，是由AdobeSystems开发和发行的图像处理软件。Photoshop主要处理以像素所构成的数字图像。使用其众多的编修与绘图工具，可以有效地进行图片编辑工作。ps有很多功能，在图像、图形、文字、视频、出版等各方面都有涉及。2003年，Adobe Photoshop8被更名为AdobePhotoshopCS。2013年7月，Adobe公司推出了新版本的PhotoshopCC，自此，PhotoshopCS6作为AdobeCS系列的最后一个版本被新的CC系列取代",
        "image": "../../images/ps.jpg",
        "lesson": [
          {
            "lesson_class": "A01-初识PS",
            "path": "../../videos/PS/A01-初识PS.mp4"
          },
          {
            "lesson_class": "A02-安装与启动",
            "path": "../../videos/PS/A02-安装与启动.mp4"
          },
          {
            "lesson_class": "A04-新建文档1参数设置",
            "path": "../../videos/PS/A04-新建文档1参数设置.mp4"
          },
          {
            "lesson_class": "A05-新建文档2文档大小",
            "path": "../../videos/PS/A05-新建文档2文档大小.mp4"
          },
          {
            "lesson_class": "A06-打开与保存",
            "path": "../../videos/PS/A06-打开与保存.mp4"
          }
        ]
      }, {
        "id": 3,
        "title": "PR",
        "subTitle": "AdobePremiere是一款常用的视频编辑软件，由Adobe公司推出。现在常用的版本有CS4、CS5、CS6、CC、CC2014、CC2015、CC2017以及CC2018版本。AdobePremiere是一款编辑画面质量比较好的软件，有较好的兼容性，且可以与Adobe公司推出的其他软件相互协作。目前这款软件广泛应用于广告制作和电视节目制作中。",
        "image": "../../images/pr.jpg",
        "lesson": [
          {
            "lesson_class": "摄像机视图效果",
            "path": "../../videos/PR/摄像机视图效果.mp4"
          },
          {
            "lesson_class": "羽化视频边缘",
            "path": "../../videos/PR/羽化视频边缘.mp4"
          },
          {
            "lesson_class": "裁剪视频文件",
            "path": "../../videos/PR/裁剪视频文件.mp4"
          },
          {
            "lesson_class": "视频翻转效果",
            "path": "../../videos/PR/视频翻转效果.mp4"
          },
          {
            "lesson_class": "视频色彩平衡校正",
            "path": "../../videos/PR/视频色彩平衡校正.mp4"
          }
        ]
      }
    ],
    /** 
    * 页面配置 
    */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },

  onLoad: function (options) {
    var that = this;
    var theLesson = that.data.video[options.id-1];
    // var theLesson = that.data.video[2];
    wx.setNavigationBarTitle({
      title: theLesson.lesson[0].lesson_class
    })
    that.setData({
      theLesson: theLesson,
      video_url: theLesson.lesson[0].path
    })
    console.log(theLesson);
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },

  onReady: function (res) {
    //页面渲染完成后，创建一个video的上下文对象，并赋值给this.videoContext
    this.videoContext = wx.createVideoContext('myVideo', this);
  },
  //输入框的内容，默认为空
  intputValue: "",
  bindInputBlur: function (e) {
    console.log(e);
    this.intputValue = e.detail.value;
  },
  sendDanmu: function (e) {
    console.log(e);
    this.videoContext.sendDanmu({
      text: this.intputValue,
      color: "pink",
    });
  },

  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  chooseVideo: function (e) {
    var that = this;
    var video_url = e.currentTarget.dataset.hi.path;
    console.log(video_url);
    this.videoContext.pause();
    //动态更改微信小程序的标题
    wx.setNavigationBarTitle({
      title: e.currentTarget.dataset.hi.lesson_class
    })
    that.setData({
      video_url: video_url
    })
  }
}) 