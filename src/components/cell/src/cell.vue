<template>
    <div>
       <div class="cell">
         <div class="cyh-cell-mask">{{title}}</div> 
         <div class="cyh-cell-content">{{value}}</div> 
         <div class="cyh-cell-link" v-if="islink">
             <cyh-icon name="forward"></cyh-icon>
        </div> 
       </div>
    </div>
</template>
<script>
export default {
    name:"cyh-cell",
    props:{
        title:String,
        value:String,
        islink:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped lang="less">
.cell{
    display: flex;
    height: 60px;
    align-items: center;
    padding: 0 10px;
    text-align: left;
    .cyh-cell-content{
        flex: 1;
        text-align: right
    }
    .cyh-cell-link{
        margin-left: 10px;
    }
}
</style>

