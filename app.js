App({
  //生命周期函数 后台大概存活2个小时 所以2小时之内进入的话不会重新初始化
  //监听小程序初始化
  onLaunch(options) {
   // console.log("小程序初始化完成了");
    //wx.getUserInfo为异步调用
    wx.getUserInfo({
      //数据拿到之后再进行回调
      success:function(res){
       // console.log(res)
      }
    })  
  },
  //监听小程序启动或者切前台(小程序显示出来)
  onShow:function(options){
   // console.log(options)
  },
  //监听小程序切后台(界面被隐藏时)
  onHide() {
    //console.log('onHide');
  },
  //错误监听函数
  onError(msg) {
   // console.log(msg)
  },
  //全局的数据 在此定义的可以在所有其他地方进行共享
  globalData:{
    name:'code',
    age:18

  }
})