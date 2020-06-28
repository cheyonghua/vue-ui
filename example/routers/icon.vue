<template>
    <div style="height:100%">
        <pax-navbar title="icon">
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
        <ul class="pax-icon-content">
            <li v-for="(item,index) in arr"
                :key="index"
                class="pax-icon-item">
                <!-- <span class="iconfont" :class="item" style="margin-bottom:10px"></span> -->
                <pax-icon :name="item"
                          color="red"
                          fontSize="24px"></pax-icon>
                <span style="margin-top:10px;">{{item}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        'back',
        'all',
        'address',
        'calculator',
        'call',
        'camera',
        'check_cricle',
        'check'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.pax-icon-content {
  display: flex;
  // justify-content: center;
  // height: 100%;
  flex-wrap: wrap;
  .pax-icon-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 25%;
  }
}
</style>
