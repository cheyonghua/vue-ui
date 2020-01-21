<template>
    <div>
        <cyh-navbar title="分段控件">
         <router-link to="/index" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
     </cyh-navbar>
        <cyh-tab v-model="tab1">
            <cyh-tab-panel label="标签一" tabkey="01">内容一</cyh-tab-panel>
            <cyh-tab-panel label="标签二" tabkey="02">内容二</cyh-tab-panel>
            <cyh-tab-panel label="标签三" tabkey="03">内容三</cyh-tab-panel>
            <cyh-tab-panel label="标签四" tabkey="04">内容四</cyh-tab-panel>
        </cyh-tab>
         <!-- <cyh-tab v-model="tab2">
            <cyh-tab-panel label="标签一">内容一</cyh-tab-panel>
            <cyh-tab-panel label="标签二">内容二</cyh-tab-panel>
            <cyh-tab-panel label="标签三">内容三</cyh-tab-panel>
            <cyh-tab-panel label="标签四">内容四</cyh-tab-panel>
        </cyh-tab> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            tab1:'01',
            tab2:0

        }
    },
    watch:{
        tab1(){
            console.log(this.tab1,99999)
        }
    }
}
</script>
