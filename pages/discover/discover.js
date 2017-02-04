// pages/discover/discover.js
Page({
  data: {
    items: [{
      img: "../../images/img.jpg",
      title: "【云南六大名米之一元阳红梯红米】传承1300多年，哈尼族古法农耕",
      city: "元阳商城",
      num: "3155"
    }, {
      img: "../../images/img.jpg",
      title: "给我一包麦片，我能泡出一个世界",
      city: "极果优品",
      num: "5"
    }, {
      img: "../../images/img.jpg",
      title: "Garmin佳明 Forerunner235 GPS智能跑步腕表",
      city: "元阳商城",
      num: "3155"
    }, {
      img: "../../images/img.jpg",
      title: "为声音而造造，为感情而生。Beats Solo3 Wireless",
      city: "极果优品",
      num: "15"
    }, {
      img: "../../images/img.jpg",
      title: "写代码从娃娃抓起|可以教宝宝变成的玩具",
      city: "差评黑市",
      num: "159"
    }, {
      img: "../../images/img.jpg",
      title: "黑科技改变生活|用一支体温计告诉你何时备孕",
      city: "棒米品牌旗舰店",
      num: "149"
    }]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  upper: function () {
    //滚动到顶部
    console.log("滚动到顶部")
  },
  lower: function () {
    //滚动到底部
    console.log("滚动到底部")
  },
  toDetail: function (e) {
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../detail/detail?id=' + index,
    })
  }
})