var api='http://www.yaoyiwangluo.com/'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ad_img2:'',
    lunbo_img: '',
    xinxis:[],
    chanpin:[],
    heights:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this
    // 广告图片
    wx.request({
      url: api+'wxshop/100-guanggao-tupiandizhi.html',
     success:function(res){
       _this.setData({
         ad_img2:res.data
       })
     }
    })
    // 轮播图
    wx.request({
      url: api + 'wxshop/100-lunbotupian-link.html',
      success: function (res) {
        _this.setData({
          lunbo_img: res.data
        })
      }
    })
    // 最新消息
    wx.request({
      url: 'http://www.yaoyiwangluo.com/wx_news_list.asp',
      success: function (res) {
        _this.setData({
          xinxis:res.data
        })
      }
    })
    // 产品 http://www.yaoyiwangluo.com/wx_CpList_top4.asp
    wx.request({
      url: api+'wx_CpList_top4.asp',
      success: function (res) {
        _this.setData({
          chanpin: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(5454454)
    // var _this = this
    // var query = wx.createSelectorQuery();
    // query.select('#drawID').boundingClientRect();
    // query.exec(function (res) {
    //   //res就是 该元素的信息 数组
    //   console.log(res);
    //   //取高度
    //   _this.setData({
    //     heights: res[0].width,
    //     heights: res[0].height
    //   })
    // }).exec();
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