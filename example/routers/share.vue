<template>
  <div>
   <pax-cell @click.native="_click" title="小于5个"></pax-cell>
   <pax-share v-model="show"></pax-share>
  </div>
</template>
<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        _click(){
          this.show=true
        }
    }
}
</script>
<style lang="less" scoped>

</style>
