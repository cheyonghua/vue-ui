<template>
    <div>
       <cyh-navbar title="多选框">
         <router-link to="/button" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
       </cyh-navbar>
        <!--  有value的单选框-->
        <cyh-checkbox :options="option" v-model="val"></cyh-checkbox>
        <div>选项值:{{val}}</div>
        <!-- 单选框 -->
        <cyh-checkbox :options="option2" v-model="val2"></cyh-checkbox>
        <div>选项值:{{val2}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            option:[
                {label:"选项一", value:"值1",disabled:false},
                {label:"选项二", value:"值2",disabled:false},
                {label:"选项三", value:"值3",disabled:false}
            ],
            val:["值1"],
            option2:["选项一","选项二","选项三"],
            val2:["选项一","选项二"]
        }
    }
}
</script>
