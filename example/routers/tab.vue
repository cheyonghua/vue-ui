<template>
    <div>
        <pax-navbar title="分段控件">
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
        <pax-tab v-model="tab1">
            <pax-tab-panel label="标签一"
                           tabkey="01">内容一</pax-tab-panel>
            <pax-tab-panel label="标签二"
                           tabkey="02">内容二</pax-tab-panel>
            <pax-tab-panel label="标签三"
                           tabkey="03">内容三</pax-tab-panel>
            <pax-tab-panel label="标签四"
                           tabkey="04">内容四</pax-tab-panel>
        </pax-tab>
        <!-- <pax-tab v-model="tab2">
            <pax-tab-panel label="标签一">内容一</pax-tab-panel>
            <pax-tab-panel label="标签二">内容二</pax-tab-panel>
            <pax-tab-panel label="标签三">内容三</pax-tab-panel>
            <pax-tab-panel label="标签四">内容四</pax-tab-panel>
        </pax-tab> -->
    </div>
</template>
<script>
export default {
  data () {
    return {
      tab1: '01',
      tab2: 0
    }
  },
  watch: {
    tab1 () {
      console.log(this.tab1, 99999)
    }
  }
}
</script>
