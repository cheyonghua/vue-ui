<template>
    <div>
        <pax-navbar title="搜索框">
            <router-link to="/index"
                         slot="left">
                <pax-icon name="back"></pax-icon>
            </router-link>
            <span slot="right">
                <pax-icon name="setting"
                          color="red"></pax-icon>
                <pax-icon name="trash"
                          color="#000"></pax-icon>
            </span>
        </pax-navbar>
        <pax-search showCancel
                    v-model="value1"
                    @cancelSearch="cancelDetail"
                    placeholder="你是我的眼"></pax-search>
        <pax-cell v-for="(item,index) in myItems"
                  :title="item"
                  :key="index"
                  islink></pax-cell>
    </div>
</template>
<script>
export default {
  data () {
    return {
      value1: '',
      items: [
        '啊',
        '吖',
        '把',
        '扒',
        '擦',
        '吃',
        '都',
        '嘟嘟',
        '都都',
        '额',
        '嗯嗯',
        '额额'
      ]
    }
  },
  watch: {
    value1 (val) {
      console.log(val)
    }
  },
  computed: {
    myItems () {
      if (this.value1) {
        //   item.includes(this.value1) 存在结果为true
        // filter不对空数组进行检测，不改变原来数组
        return this.items.filter(item => item.includes(this.value1))
      }
      return this.items
    }
  },
  methods: {
    cancelDetail () {
      alert('我是搜索回调')
    }
  }
}
</script>
