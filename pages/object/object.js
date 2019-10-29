// pages/object.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false
  },
  tab: function () {
    this.setData({
      loading: true
    })
    // 显示完loading后 , 就可接着做之后的事情 , 接着做耗时的操作
    console.log("我是loading之后的事情");

    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 2000);
  },
  tabs: function () {
    wx.showToast({
      // 显示提示框
      title: "已送审",
      icon: "success",
      duration: 1500
    })
    // 微信提示框需自行调用 隐藏函数 才可行
    wx.hideToast()
  },
  tabError: function () {
    wx.showModal({
      title: "连公子",
      content: "当前服务有延时 , 请重新进入小程序 , 在进行操作",
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm) {
          console.log("点击了确定按钮");
        } else if (res.cancel) {
          console.log("点击了取消按钮");
        }
      }
    })
  },
  // handleTap: function (evt) {
  //   console.log(evt);
  //   console.log(evt.target);
  //   console.log(evt.currentTarget);
  //   console.log(evt.type);
  //   console.log(evt.timeStamp);
  // },
  // handleTap1: function () {
  //   console.log(1);

  // },
  // handleTap2: function () {
  //   console.log(2);

  // },
  // handleTap3: function () {
  //   console.log(3);

  // },
  // handleTap4: function () {
  //   console.log(4);

  // },
  getData: function () {
    wx.request({
      url: 'https://test.com/getinfo?id=1&version=1.0.0',
      data: {
        id: 1,
        version: "1.0.0"
      },
      success: function (res) {
        console.log(res);
      }
    })
  },
  postData: function () {
    wx.request({
      url: "https://test.com/postdata",
      method: "post",
      header: { "content-type": "application/json" },
      data: {
        a: {
          b: [1, 2, 3],
          c: { d: "test" }
        }
      },
      success: function (res) {
        console.log(res);

      }
    })
  },
  onLoad: function () {
    // 兼容 , 判断此API是否存在
    // if (wx.openBluetoothAdapter()) {
    //   wx.openBluetoothAdapter()
    // } else {
    //   // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
    //   wx.showModal({
    //     title: '提示',
    //     content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    //   })
    // }

    // wx.request({
    //   url: 'https://test.com/getinfo',
    //   success: function (res) {
    //     console.log(res)// 服务器回包信息
    //   }, fail() {

    //   }
    // })
  }
})