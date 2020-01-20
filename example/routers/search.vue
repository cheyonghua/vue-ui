<template>
    <div>
     <cyh-navbar title="搜索框">
         <router-link to="/button" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
     </cyh-navbar>
        <cyh-search showCancel v-model="value1" @cancelSearch="cancelDetail" placeholder="你是我的眼"></cyh-search>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value1:''
        }
    },
    watch:{
        value1(val){
            console.log(val)
        }
    },
    methods:{
        cancelDetail(){
            alert("我是搜索回调")
        }
    }
}
</script>

