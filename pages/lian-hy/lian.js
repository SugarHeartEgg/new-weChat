// 获取全局变量实例
const app = getApp();
// 模块化引入
var valueMultiply = require('../mod/moduleA')
var result = valueMultiply(4)
//Page Object
Page({
  data: {
    test: "我是lian页的template",
    elemColor: 'blue',
    elemFont: '60rpx',
    bottomSize: '20rpx',
    value: result
  },
  toTeam() {
    //拿到点击的index下标
    // var index = e.currentTarget.dataset.index
    // 将对象转为string
    // var queryBean = JSON.stringify(that.data.queryList[index])
    // wx.navigateTo({
    //   // 然后在给到指定的参数
    //   // url: '../team/team?id=queryBean'
    //   url: '../team/team?id=1&other=abc'

    // })

    // 这种跳转 tabBar的 需要调用switchTab
    wx.switchTab({ url: '../team/team' })
  },
  onLoad: function (option) {
    // 初次加载触发 , 在没有销毁前只会触发一次
    console.log("我是onLoad");
    console.log("我是onLoad:option参数", option);
  },
  onShow: function () {
    // onLoad 触发完成后 会触发onShow 当去到别的页面 在返回时也会触发onShow
    console.log("我是onShow");
  },
  onHide: function () {
    console.log("我是onHide");
  },
  onUnload: function () {
    // onUnload回调生命周期函数 是在 (关闭当前页面，跳转到应用内的某个页面 或者 
    // 关闭当前页面，返回上一页面或多级页面 触发)
    // 也就是 会被微信客户端销毁回收的页面才会触发onUnload
    console.log("我是onUnload");
  },
  onReady: function () {
    console.log("我是onReady");
  },
  onPullDownRefresh: function () {
    console.log("我是下拉刷新");
    wx.stopPullDownRefresh()
  },
  onReachBottom: function () {
    console.log("我是上拉触底");
  },
  onPageScroll: function () {
    console.log("我是页面滚动监听");
  },
  onShareAppMessage: function () {
    console.log("我是用户转发处理事件");
    return {
      // 使用转发功能 , 可自定义字段地址
      title: "连公子"
    }
  }
});