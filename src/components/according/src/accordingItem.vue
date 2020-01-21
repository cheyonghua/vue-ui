<template>
    <div style="padding:0 10px">
        <div class="pax-according-header"
             @click="rotateAccording">
            <div class="pax-according-header-content">{{title}}</div>
            <div class="pax-according-header-arrow"
                 :class="show?'pax-according-rotate':''">
                <pax-icon name="back"></pax-icon>
            </div>
        </div>
        <div class="pax-according-content"
             :style="styleHeight">
            <div ref="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'pax-according-item',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      show: false,
      styleHeight: { height: 0 }
    }
  },
  methods: {
    rotateAccording () {
      this.show = !this.show
      //   debugger
      if (this.show) {
        this.styleHeight = { height: this.$refs.content.offsetHeight + 'px' }
      } else {
        this.styleHeight = { height: 0 }
      }
    }
  }
}
</script>

<style scoped lang="less">
.pax-according-header {
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pax-according-header-arrow {
    transform: rotate(270deg);
    &.pax-according-rotate {
      transform: rotate(90deg);
      transition: transform 0.3s linear;
      //   transition:transform .3s linear
    }
  }
}
.pax-according-content {
  overflow: hidden;
  // height:规定设置过度效果的css属性名称，
  //.3s :定义过度效果的时间，默认是0
  //规定过度效果的时间曲线，linear:匀速，ease:逐渐变慢，ease-in:加速，ease-out：减速，ease-in-out：加速再减速
  transition: height 0.3s ease-out;
}
</style>
