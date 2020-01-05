// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    red: [], //推荐数据数组
  },


  getCurrentVideo(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.bilibili.com/index/ding.json',
      success(res) {
        // console.log(res.data.movie, '<-res.data.movie->');
        if (res.statusCode === 200) {
          let movie = res.data.movie;

          let keys = Object.keys(movie);

          for (let i = 0; i < keys.length; i++) {
            if (movie[i].aid === parseInt(videoId)) {
              that.setData({
                detail: movie[i]
              })
            }
          }
        }
      }
    })
  },

  getRecommend() {
    let that = this;
    wx.request({
      url: 'https://www.bilibili.com/index/catalogy/5-3day.json',
      success(res) {
        // console.log(res, '<-res->');
        if (res.statusCode === 200) {
          let list = res.data.hot.list
          that.setData({
            red: list
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getRecommend();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})