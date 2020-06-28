<template>
  <div>
    <pax-navbar title="上拉菜单">
      <router-link to="/index" slot="left">
        <pax-icon name="back"></pax-icon>
      </router-link>
      <span slot="right">
        <pax-icon name="setting" color="red"></pax-icon>
        <pax-icon name="trash" color="#000"></pax-icon>
      </span>
    </pax-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    
}
}
</script>
<style scoped lang="less">

</style>
