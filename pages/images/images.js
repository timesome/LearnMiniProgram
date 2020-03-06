// pages/images/images.js
Page({
  data:{
    img_src:""
  },
  handleChooseAlbum(){
    //系统API 让用户在相册中选择图片
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        // tempFilePath可以作为img标签的src属性显示图片
        const path = res.tempFilePaths;
        //console.log(tempFilePaths);
        this.setData({
          img_src : path
        })
      }
     
    })
  }
})