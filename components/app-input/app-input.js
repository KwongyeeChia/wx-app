// components/wx-header/wx-header.js
Component({
  /**
   * 组件的属性列表 在 properties 定义段中，属性名采用驼峰写法
   */
  properties: {
    nameText: {
      type: String,
      value: ''
    },
    phoneText : {
      type: String,
      value: ''
    },
    remarksText: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 私有组件方法用下划线开头
    _getValue(e) {
      let input_index = e.currentTarget.dataset.index;
      let trigger_detail = {}; // trigger detail对象
      //  获取父组件的值
      if (input_index == 0) {
        this.nameText = e.detail.value;
      } else if (input_index == 1) {
        this.phoneText = e.detail.value;
      } else {
        this.remarksText = e.detail.value;
      }
      let nameText = this.nameText;
      let phoneText = this.phoneText;
      let remarksText = this.remarksText;

      trigger_detail.nameText = nameText;
      trigger_detail.phoneText = phoneText;
      trigger_detail.remarksText = remarksText;
      // 修改子组件中的数据
      this.setData({
        data: trigger_detail
      })
      // 触发的事件对象是 trigger_detail
      // 使用这个方法 使得父组件bind:myevent 得以实现
      this.triggerEvent('childEvent', trigger_detail)
    }
  }
})
