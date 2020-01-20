<template>
    <i class="iconfont" :class="name" :style="styles"></i>
</template>
<script>
export default {
    name:'cyh-icon',
    props:{
        name:{
            type:String
        },
        color:{
            type:String
        },
        fontSize:{
            type:String,
            default:"16px"
        }
    },
    computed:{
        styles(){
            const style={}
            style.color=this.color
            style.fontSize=this.fontSize
            return style
        }
    }
}
</script>
<style scoped>
@import "../../../styles/components/iconfont/iconfont.css";
</style>
