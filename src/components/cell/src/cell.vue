<template>
    <div>
        <div class="cell"
             @click="handClick">
            <div class="pax-cell-mask">{{title}}</div>
            <div class="pax-cell-content">{{value}}</div>
            <div class="pax-cell-link"
                 v-if="islink">
                <pax-icon name="forward"></pax-icon>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'pax-cell',
  props: {
    title: String,
    value: String,
    islink: {
      type: Boolean,
      default: false
    },
    to: String
  },
  methods: {
    handClick () {
      // debugger
      // indexof -1 没有出现为-1
      if (this.to.indexOf('/') == 0) {
        // debugger
        this.$router.push(this.to)
      } else {
        window.location.href = this.to
      }
    }
  }
}
</script>

<style scoped lang="less">
.cell {
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 10px;
  text-align: left;
  .pax-cell-content {
    flex: 1;
    text-align: right;
  }
  .pax-cell-link {
    margin-left: 10px;
  }
}
</style>
