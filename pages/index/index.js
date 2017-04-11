//index.js
//获取应用实例
import audioList from './data.js'
var app = getApp()
Page({
  data: {
    audioList: audioList,
    audioIndex: 0,
    pauseStatus: true,
  },
  onLoad: function () {
    console.log('onLoad')
    console.log(this.data.audioList.length)
    //  获取本地存储存储audioIndex
    var audioIndexStorage = wx.getStorageSync('audioIndex')
    console.log(audioIndexStorage)
    if (audioIndexStorage) {
      this.setData({audioIndex: audioIndexStorage}) 
    }
  },
  onReady: function (e) {
    console.log('onReady')
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('audio')
  },
  bindTapPrev: function() {
    console.log('bindTapNext')
    let length = this.data.audioList.length
    let audioIndexPrev = this.data.audioIndex
    let audioIndexNow = audioIndexPrev
    if (audioIndexPrev === 0) {
      audioIndexNow = length - 1
    } else {
      audioIndexNow = audioIndexPrev - 1
    }
    this.setData({audioIndex: audioIndexNow})
    let that = this
    setTimeout(() => {
      if (that.data.pauseStatus === true) {
        that.audioCtx.play()
      }
    }, 1000)
    wx.setStorageSync('audioIndex', audioIndexNow)
  },
  bindTapNext: function() {
    console.log('bindTapNext')
    let length = this.data.audioList.length
    let audioIndexPrev = this.data.audioIndex
    let audioIndexNow = audioIndexPrev
    if (audioIndexPrev === length - 1) {
      audioIndexNow = 0
    } else {
      audioIndexNow = audioIndexPrev + 1
    }
    this.setData({audioIndex: audioIndexNow})
    let that = this
    setTimeout(() => {
      if (that.data.pauseStatus === false) {
        that.audioCtx.play()
      }
    }, 1000)
    wx.setStorageSync('audioIndex', audioIndexNow)
  },
  bindTapPlay: function() {
    console.log('bindTapPlay')
    console.log(this.data.pauseStatus)
    if (this.data.pauseStatus === true) {
      this.audioCtx.play()
      this.setData({pauseStatus: false})
    } else {
      this.audioCtx.pause()
      this.setData({pauseStatus: true})
    }
  }
})
