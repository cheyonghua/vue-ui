<template>
    <div>
        <pax-navbar title="滑动单元格">
            <router-link to="/index"
                         slot="left">
                <pax-icon name="back"></pax-icon>
            </router-link>
        </pax-navbar>
        <div class="pax-swipe-cell">
            <div class="swipe-cell-content">
                <span>标题</span>
                <span>文字</span>
                <div class="right-button">

                </div>
            </div>
        </div>

    </div>
</template>
<style lang="less" scoped>
.pax-swipe-cell {
  line-height: 21px;
  height: 21px;
  padding: 16px 17px;
  .swipe-cell-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

<script>
export default {
  data () {
    return {}
  },
  watch: {},
  methods: {}
}
</script>
