<template>
     <div>
         <cyh-navbar title="布局">
         <router-link to="/button" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
     </cyh-navbar>
       <cyh-layout>
        <p slot="top" class="pax-layout-top">头部</p>
        <div v-for="(n,index) in 50" :key="index" style="width:100%;height:30px;background-color:#ccc;margin:10px 0"></div>
        <p slot="bottom" class="pax-layout-bottom">底部</p>
    </cyh-layout>
     </div>
</template>
<style lang="less" scoped>
.pax-layout-top,.pax-layout-bottom{
  height:60px;
  background-color:#ddd;
  width:100%;
  line-height:60px;
  text-align:center;
}
</style>
