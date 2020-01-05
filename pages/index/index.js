Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
        "text": "直播"
      },
      {
        "text": "动画"
      },
      {
        "text": "番剧"
      },
      {
        "text": "国创"
      },
      {
        "text": "漫画"
      },
      {
        "text": "音乐"
      },
      {
        "text": "舞蹈"
      },
      {
        "text": "游戏"
      },
      {
        "text": "科技"
      },
      {
        "text": "数码"
      },
      {
        "text": "生活"
      },
      {
        "text": "鬼畜"
      },
      {
        "text": "时尚"
      },
      {
        "text": "广告"
      },
      {
        "text": "娱乐"
      },
      {
        "text": "专栏"
      },
      {
        "text": "电影"
      }
    ],
    swiperList: [{
        src: '../../images/1.png'
      },
      {
        src: '../../images/2.png'
      },
      {
        src: '../../images/3.png'
      },
      {
        src: '../../images/4.png'
      },
    ],
    dataList: [],
    currentIndexNav: 0,
  },
  activeNav(e) {
    // console.log(222)
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },

  // getNavList() {
  //   let that = this;
  //   wx.request({
  //     url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
  //     success(res) {
  //       console.log(res);
  //       if (res.data.code === 0) {
  //         that.setData({
  //           navList: res.data.data.navList
  //         })
  //       }
  //     }
  //   })
  // },

  // getSwiperList() {
  //   let that = this;
  //   wx.request({
  //     url: '',
  //     success(res) {
  //       console.log(res, '<-res->');
  //       if (res.data.code === 0) {
  //         that.setData({
  //           swiperList: res.data.data.swiperList
  //         })
  //       }
  //     }
  //   })
  // },

  geyVideoList() {
    let that = this;
    wx.request({
      url: 'https://www.bilibili.com/index/ding.json',
      success(res) {
        console.log(res, '<-res->');
        // console.log(res.data.movie, '<-res.data.movie->');
        if (res.statusCode === 200) {
          that.setData({
            dataList: res.data.movie
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getNavList();
    // this.getSwiperList();
    this.geyVideoList();
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