//app.js
App({
  onLaunch: function () {
    console.log("启动")
    var that = this;
    wx.login({
      success: function (res) {
        wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo;
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})