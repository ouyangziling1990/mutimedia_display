// pages/word.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"",
    serverpath:""
  },
  bindButtonWord:function(){
    var that = this
    console.log("下载word程序")
    wx.downloadFile({
      // url: "http://bkzs.hfut.edu.cn/upload/xxnr/1424999023411.doc",
      url: that.data.url + "wujingwei_resume.docx",
      success:function(res){
        
        var filePath = res.tempFilePath;
        wx.openDocument({
          filePath: filePath,
          success(res) {
            console.log("word下载成功")
            const tempFilePaths = res.tempFilePaths
          }
        })
      },
      fail:function(res){
        console.log("文件下载失败")
      },
      complete:function(res){
        console.log("调用结束")
        console.log(that.url)
      }
    })
    
  },
  bindButtonExcel: function () {
    var that = this
    wx.downloadFile({
      url: that.data.url + "work_.xlsx",
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
    console.log("serverpath: " + that.data.serverpath)
    wx.request({
      url:that.data.serverpath,
      success(res){
        console.log(res)
        var file_path1 = res.data.path
        console.log("filename" + file_path1)
        wx.downloadFile({
          url: that.data.url + file_path1,
          success: function (res) {
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
      }
    })
    

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var urlinfo = app.globalData.tmpUrl
    this.setData({
      url:urlinfo,
      serverpath: app.globalData.serverpath
    })
    console.log(urlinfo)
    console.log(this.data.url)
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