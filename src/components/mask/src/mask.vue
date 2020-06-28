<template>
  <div>
    <div class="pax-mask" :style="styleClass"></div>
  </div>
</template>
<script>
export default {
    name:'pax-mask',
    props:{
      zindex:{
          type:Number,
          default:1200
      },
      maskOpacity:{
          type:Number,
          default:0.4
      },
      bgc:{
          type:String,
          default:'rgb(0,0,0)'
      },
      value:{
          type:Boolean,
      }
    },
    data(){
        return{
            show:this.value
        }
    },
    computed:{
        styleClass(){
          let allStyle={'z-index':this.zindex}
          if(this.show){
              allStyle.opacity=this.maskOpacity
              allStyle.backgroundColor=this.bgc
          }
          return allStyle
        }
    }
}
</script>
<style lang="less" scoped>
.pax-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
