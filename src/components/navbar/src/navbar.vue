<template>
     <div style="padding:0 10px">
         <div class="cyh-navbar-content">
         <div class="cyh-navbar-item cyh-navbar-left">
            <slot name="left"></slot>
         </div>
         <div class="cyh-navbar-center">
            <slot name="center">{{title}}</slot>
         </div>
         <div class="cyh-navbar-item cyh-navbar-right">
            <slot name="right"></slot>
         </div>
     </div>
     </div>
</template>
<script>
export default {
    name:'cyh-navbar',
    props:{
        title:{
            type:String,
        }
    }
}
</script>
<style scoped lang="less">
.cyh-navbar-content{
    height: 64px;
    line-height: 64px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    .cyh-navbar-item{
        height: 100%;
        flex:1;
        display: flex;
        &.cyh-navbar-right{
            justify-content: flex-end
        }
    }
    .cyh-navbar-center{
       height: 100%;
       width:50%;
       text-align: center
    }
}
</style>

