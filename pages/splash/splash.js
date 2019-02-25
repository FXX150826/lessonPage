// pages/splash/splash.js

Page({
  data: {
    images: [
      {
        id: 1,
        title: "bj1.jpg",
        image: "../../images/slide20.jpeg"
      },
      {
        id: 2,
        title: "bg2.jpg",
        image: "../../images/slide12.jpg"
      },
      {
        id: 3,
        title: "bg3.jpg",
        image: "../../images/slide10.jpeg"
      }
    ]
  },
  handleStart: function (e) {
    wx.switchTab({
      url: '../firstPage/firstPage',
    })
  }
})