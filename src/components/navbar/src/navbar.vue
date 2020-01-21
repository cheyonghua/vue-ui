<template>
     <div style="padding:0 10px">
         <div class="pax-navbar-content">
         <div class="pax-navbar-item pax-navbar-left">
            <slot name="left"></slot>
         </div>
         <div class="pax-navbar-center">
            <slot name="center">{{title}}</slot>
         </div>
         <div class="pax-navbar-item pax-navbar-right">
            <slot name="right"></slot>
         </div>
     </div>
     </div>
</template>
<script>
export default {
    name:'pax-navbar',
    props:{
        title:{
            type:String,
        }
    }
}
</script>
<style scoped lang="less">
.pax-navbar-content{
    height: 64px;
    line-height: 64px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    .pax-navbar-item{
        height: 100%;
        flex:1;
        display: flex;
        &.pax-navbar-right{
            justify-content: flex-end
        }
    }
    .pax-navbar-center{
       height: 100%;
       width:50%;
       text-align: center
    }
}
</style>

