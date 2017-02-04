// pages/detail/detail.js
var animation;
Page({
  data: {
    showModalStatus: false,
    animationData: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.id)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear',
      delay: 0
    }),
      animation.translateY(300).step(),
      this.setData({
        animationData: animation.export()
      })
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  showModal: function () {
    this.setData({
      showModalStatus: true,
    }),
      animation.translateY(0).step(),
      setTimeout(function () {
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 50)
  },
  hideModal: function () {
    animation.translateY(300).step(),
      this.setData({
        animationData: animation.export(),
      }),
      setTimeout(function () {
        this.setData({
          showModalStatus: false
        })
      }.bind(this), 400)
  },

})