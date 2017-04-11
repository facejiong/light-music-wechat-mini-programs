//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    audioList: [
      {
        src:'http://dl.stream.qqmusic.qq.com/C4000039ca2a2wTGTP.m4a?vkey=C143595FEDB5445287196C2F1AEBC3A962AB62F92750397EE75470ED6386A593C9A01FF23E3F78136FE6772D368C9D9F6B0DE9E3EF18FD29&guid=2943454662&uin=2279763407&fromtag=66',
        poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004CDl3Z0LfA0V.jpg?max_age=2592000',
        name:'Muyuuka',
        author: 'RURUTIA'
      }, {
        src:'http://dl.stream.qqmusic.qq.com/C400002D9dGu3JxQCY.m4a?vkey=739894D640919CE02A3D08FDE86A76EFB2502A689FE564385930E27AEF9566C5C86F4D1084AF2DFADF2C4B4DA19993C528D4BBD1F21182E0&guid=2943454662&uin=2279763407&fromtag=66',
        poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000001IDYP1MwhCZ.jpg?max_age=2592000',
        name: '时间的魔法',
        author: 'Leaf',
      }, {
        src: 'http://dl.stream.qqmusic.qq.com/C400000VqWGW4bDU9u.m4a?vkey=00B3393126FA49D95870059242BDA5406246AF4C61431D88A7CC3B7457C1CBA186B229EECBB273D5BD470EFEBE6560C58291ED85FC3D3FFB&guid=2943454662&uin=2279763407&fromtag=66',
        poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003vakYm0rpNYr.jpg?max_age=2592000',
        name: '晚安了今天',
        author: 'MOSAIC'
      }, {
        src: 'http://dl.stream.qqmusic.qq.com/C400004LmbVD2qNWbz.m4a?vkey=89C89418379C3AAD1396A80161662479CE6F2F9E46AB7E634A18F9AE45F3E95CAD31B9759A2CF5B188F23368BE99533C1A6016EE63857FF6&guid=2943454662&uin=2279763407&fromtag=66',
        poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001w2CWK3hzN6r.jpg?max_age=2592000',
        name: '晚安娜娜',
        author: '平野義久'
      }, {
        src: 'http://dl.stream.qqmusic.qq.com/C400001N4Ots19SsDU.m4a?vkey=92C7D6FC25563E4CE34C926C3C7DCD1FB4C180B365907E6AFA332216174DA4D7CF12A67FC19C87D09BE8FDC506BC45E93A21B2D668A56F55&guid=2943454662&uin=2279763407&fromtag=66',
        poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Uflih088lIb.jpg?max_age=2592000',
        name: '羽翼',
        author: '折戸伸治'
      }
    ],
    src: 'http://dl.stream.qqmusic.qq.com/C4000039ca2a2wTGTP.m4a?vkey=C143595FEDB5445287196C2F1AEBC3A962AB62F92750397EE75470ED6386A593C9A01FF23E3F78136FE6772D368C9D9F6B0DE9E3EF18FD29&guid=2943454662&uin=2279763407&fromtag=66',
    audioIndex: 2,
    pauseStatus: true,
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('audio')
    // this.audioCtx.play()
  },
  //事件处理函数
  bindViewTap: function() {
    this.setData({src: 'http://dl.stream.qqmusic.qq.com/C400001N4Ots19SsDU.m4a?vkey=92C7D6FC25563E4CE34C926C3C7DCD1FB4C180B365907E6AFA332216174DA4D7CF12A67FC19C87D09BE8FDC506BC45E93A21B2D668A56F55&guid=2943454662&uin=2279763407&fromtag=66'})
    let that = this
    setTimeout(() => {
      that.audioCtx.play()
    }, 1000)
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
})
