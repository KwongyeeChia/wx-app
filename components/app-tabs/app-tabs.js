// components/wx-tabs/wx-tabs.js
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
    store_offetTopVal: 0,
    tofloor: 'floor-1',
    floor_array: [
      {
        id: 'floor-1',
        title: '一楼打酱油'
      },
      {
        id: 'floor-2',
        title: '二楼来喝水'
      },
      {
        id: 'floor-3',
        title: '三楼吃火锅'
      },
      {
        id: 'floor-4',
        title: '四楼来要饭'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 触顶 / 左边 事件
    scrolltoupper: (event) => {
      console.log(event)
      console.log('左上')
    },
    // 触底 / 右边 事件
    scrolltolower: (event) => {
      console.log(event)
      console.log('右下')
    },
    scroller: function (event) {
      // 获取距离顶部的值
      // let offsetTop = event.detail.scrollTop;
      // this.setData({
      //   store_offetTopVal: offsetTop
      // })
    },
    backToTop: function (event) {
      this.setData({
        store_offetTopVal: 0
      })
    },
    jumpfloor: function (para) {
      this.setData({
        tofloor: para.currentTarget.dataset.jumpindex
      })
    }
  }
})
