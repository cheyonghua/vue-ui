<template>
    <div>
        <pax-navbar title="滑动单元格">
            <router-link to="/index"
                         slot="left">
                <pax-icon name="back"></pax-icon>
            </router-link>
        </pax-navbar>
        <div class="pax-swipe-cell">
            <span @touchstart="touchstart"
                  @touchmove="touchmove">
                <div class="swipe-cell-content">
                    <slot>
                        <span>标题</span>
                        <span>文字</span>
                    </slot>
                    <div class="right-button"
                         ref="btn">
                        <pax-button>确定</pax-button>
                        <pax-button type="warning">修改</pax-button>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      right_item: {},
      //   超过拉这个值，才完全划过去，不然回到初始位置
      safeValue: 60,
      start_position: [],
      end_position: []
    }
  },
  mounted () {
    this.right_item = this.$refs.btn
    // 初始化右边滑块位置
    this.initialize()
  },
  methods: {
    touchstart (e) {
      //   debugger
      this.start_position = [
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      ]
    },
    touchmove (e) {
      this.end_position = [
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      ]
    },
    // 动态改变值
    translateValue (value) {
      // 模板字符串：可以当做普通字符串，可以定义多行字符串，也可以在字符串中嵌入变量
      return `translate3d(${value}px,0,0)`
    },
    initialize () {
      //   debugger
      //   getBoundingCilentReact获取元素位置
      let elWidth = this.right_item.getBoundingClientRect().width
      //   初始化右边滑块位置
      this.right_item.style.transform = this.translateValue(Math.abs(elWidth))
    }
  }
}
</script>

<style lang="less" scoped>
.pax-swipe-cell {
  line-height: 21px;
  height: 21px;
  padding: 16px 17px;
  position: relative;
  .swipe-cell-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right-button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      transform: translate3d();
      //   width: 120px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      right_item: {},
      //   超过拉这个值，才完全划过去，不然回到初始位置
      safeValue: 60,
      start_position: [],
      end_position: []
    };
  },
  mounted() {
    this.right_item = this.$refs.btn;
    // 初始化右边滑块位置
    this.initialize();
  },
  methods: {
    touchstart(e) {
      //   debugger
      this.start_position = [
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      ];
    },
    touchmove(e) {
      this.end_position = [
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      ];
    },
    // 动态改变值
    translateValue(value) {
      // 模板字符串：可以当做普通字符串，可以定义多行字符串，也可以在字符串中嵌入变量
      return `translate3d(${value}px,0,0)`;
    },
    initialize() {
      //   debugger
      //   getBoundingCilentReact获取元素位置
      let elWidth = this.right_item.getBoundingClientRect().width;
      //   初始化右边滑块位置
      this.right_item.style.transform = this.translateValue(Math.abs(elWidth));
    }
  }
};
</script>
