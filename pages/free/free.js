// pages/free/free.js
Page({
 
  data: {
    images: [

      "../../images/page2.jpg",
      "../../images/page3.jpg",
      "../../images/page5.jpg",
      "../../images/page6.jpg",
      "../../images/page7.jpg",
      "../../images/page8.jpg",
      "../../images/page9.jpg",
    ]
  }, 
   words: "",
  bindInputBlur: function (e) {
    var that = this;
    this.words = e.detail.value;
    console.log(e.detail.value)
  },
  //点击按钮发送
  send: function () {
    var that = this;
    that.setData({
      words:this.words
    })
  }
})