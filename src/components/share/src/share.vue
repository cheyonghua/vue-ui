<template>
  <div>
    <pax-mask v-model="show"></pax-mask>
    <div class="pax-share" :class="show?'pax-share-active':''">
      <div class="pax-share-item"></div>
      <div class="pax-share-content"></div>
    </div>
  </div>
</template>
<script>
export default {
    name:'pax-share',
    props:{
      value:{
          type:Boolean
      }
    },
    data(){
        return{
            show:this.value
        }
    }
}
</script>
<style lang="less" scoped>
.pax-share{
    position: fixed;
    background-color: #fff;
    z-index: 9998;
    width:100%;
    bottom: 0;
    left: 0;
    transform: translate(0,100%);
    &-active{
        transform: translate(0,0);
    }
    &-item{
        height: 60px;
    }
    &-content{
        height: 60px;
    }
}
</style>
