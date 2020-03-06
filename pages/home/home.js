// pages/home/home.js
//getApp()获取App()产生的示例对象
const app=getApp();
// console.log(app.globalData.name)
// console.log(app.globalData.age)

//注册一个页面
/************监听页面的生命周期函数************** */
Page({
  data:{

  },
  handleGetUserInfo(event){
    console.log(event)
  },
  //页面被加载出来时
  onLoad: function (options) {
    //console.log('onLoad');
  },
  // onLoad() {} es6的写法
  //页面显示出来时
  onShow: function () {
   // console.log('onShow')
  },
  //页面初次渲染完成
  onReady: function () {
    //console.log('onReady')
  },
 //监听页面隐藏
  onHide: function () {
   // console.log('onHide')
  },
  //监听页面卸载 比如点关于页面左上角的返回按钮进入到首页时，关于页面被卸载 此时执行onUnload
  onUnload: function () {
   // console.log('onUnload')
  },
 
 //监听页面滚动
 onPageScroll(obj){
   console.log(obj)
 },
 //监听页面滚动到底部
 onReachBottom(){
   console.log("页面滚动到底部")
 },
//监听用户下拉
onPullDownRefresh(){
  console.log("下拉刷新")
}



})