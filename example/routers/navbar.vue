<template>
     <pax-navbar title="导航栏">
         <router-link to="/index" slot="left">
             <pax-icon name="back"></pax-icon>
         </router-link>
         <span slot="right">
             <pax-icon name="setting" color="red"></pax-icon>
             <pax-icon name="trash" color="#000"></pax-icon>
         </span>

     </pax-navbar>
</template>
<script>
export default {
   
}
</script>
<style scoped lang="less">

</style>

