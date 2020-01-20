<template>
     <cyh-navbar title="导航栏">
         <router-link to="/button" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>

     </cyh-navbar>
</template>
<script>
export default {
   
}
</script>
<style scoped lang="less">

</style>

