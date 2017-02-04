// pages/order/order.js
Page({
  data: {
    items: ["全部", "待付款", "待发货", "待收货"],
    currentNav: 0,
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
  swichNav: function (e) {
    this.setData({
      currentNav: e.currentTarget.dataset.idx
    })
  }
})