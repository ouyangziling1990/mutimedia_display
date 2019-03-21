// pages/word.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindButtonTap:function(){
    var that = this
    wx.downloadFile({
      // url: "http://bkzs.hfut.edu.cn/upload/xxnr/1424999023411.doc",
      url: "http://192.168.2.16:8899/document-output.pdf",
      success:function(res){
        console.log("download file")
        console.log(res)
        var filePath = res.tempFilePath;
        wx.openDocument({
          filePath: filePath,
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
          }
        })
      }
    })
    
  },
  bindButtonExcel: function () {
    var that = this
    wx.downloadFile({
      url: "http://bkzs.hfut.edu.cn/upload/xxnr/1424999023411.doc",
      success: function (res) {
        console.log("download file")
        console.log(res)
        var filePath = res.tempFilePath;
        wx.openDocument({
          filePath: filePath,
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
          }
        })
      }
    })

  },
  bindButtonpdf: function () {
    var that = this
    wx.downloadFile({
      url: "http://www.ycps.tp.edu.tw/mediafile/1934/news/154/2013-12/2013-12-19-9-55-10-nf1.pdf",
      success: function (res) {
        console.log("download file")
        console.log(res)
        var filePath = res.tempFilePath;
        wx.openDocument({
          filePath: filePath,
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
          }
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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