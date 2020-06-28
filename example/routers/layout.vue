<template>
    <div>
        <pax-navbar title="布局">
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
        <pax-layout>
            <p slot="top"
               class="pax-layout-top">头部</p>
            <div v-for="(n,index) in 50"
                 :key="index"
                 style="width:100%;height:30px;background-color:#ccc;margin:10px 0"></div>
            <p slot="bottom"
               class="pax-layout-bottom">底部</p>
        </pax-layout>
    </div>
</template>
<style lang="less" scoped>
.pax-layout-top,
.pax-layout-bottom {
  height: 60px;
  background-color: #ddd;
  width: 100%;
  line-height: 60px;
  text-align: center;
}
</style>
