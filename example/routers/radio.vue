<template>
    <div>
       <cyh-navbar title="单元框">
         <router-link to="/index" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
       </cyh-navbar>
        <!--  有value的单选框-->
        <cyh-radio :options="option" v-model="val"></cyh-radio>
        <div>选项值:{{val}}</div>
        <!-- 单选框 -->
        <cyh-radio :options="option2" v-model="val2"></cyh-radio>
        <div>选项值:{{val2}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            option2:["选项一","选项二","选项三"],
            option:[
                {label:"选项一", value:"值1",disabled:true},
                {label:"选项二", value:"值2",disabled:false},
                {label:"选项三", value:"值3",disabled:true}
            ],
            val:"值1",
            val2:"选项一"
        }
    }
}
</script>
