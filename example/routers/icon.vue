<template>
    <div style="height:100%">
      <cyh-navbar title="icon">
         <router-link to="/index" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
       </cyh-navbar>
        <ul class="cyh-icon-content">
            <li v-for="(item,index) in arr" :key="index" class="cyh-icon-item">
                <!-- <span class="iconfont" :class="item" style="margin-bottom:10px"></span> -->
                <cyh-icon :name="item" color="red" fontSize="24px"></cyh-icon>
                <span style="margin-top:10px;">{{item}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
          arr:[
              "back","all","address","calculator","call","camera","check_cricle","check",
          ]
        }
    },

}
</script>
<style lang="less" scoped>
.cyh-icon-content{
    display: flex;
    // justify-content: center;
    // height: 100%;
    flex-wrap: wrap;
    .cyh-icon-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    width:25%;
    
}
}
</style>




