<template>
    <div>
        <pax-navbar title="单元框">
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
        <!--  有value的单选框-->
        <pax-radio :options="option"
                   v-model="val"></pax-radio>
        <div>选项值:{{val}}</div>
        <!-- 单选框 -->
        <pax-radio :options="option2"
                   v-model="val2"></pax-radio>
        <div>选项值:{{val2}}</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      option2: ['选项一', '选项二', '选项三'],
      option: [
        { label: '选项一', value: '值1', disabled: true },
        { label: '选项二', value: '值2', disabled: false },
        { label: '选项三', value: '值3', disabled: true }
      ],
      val: '值1',
      val2: '选项一'
    }
  }
}
</script>
