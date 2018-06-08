//index.js
//获取应用实例
const app = getApp()
// 父组件拿 属性值 直接 detail即可
Page({
  data: {
    
  },
  editValue: function(e) {
    console.log(e.detail)
  },
  onLaunch:(res)=>{
    console.log(res)
  }
})