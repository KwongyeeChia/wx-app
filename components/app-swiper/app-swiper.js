// components/app-swiper/app-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cur_item: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiper_item: function (event) {
      console.log(event)
      // 当前滑块索引
      let current_index = event.detail.current;
      console.log('swiper')
      this.setData({
        cur_item: current_index
      })
    },
    tap_tab: function (event) {
      let tab_index = event.currentTarget.dataset.index;
      console.log('cur 发生改变 会触发swiper事件')
      this.setData({
        cur_item: tab_index
      })
    }
  }
})
