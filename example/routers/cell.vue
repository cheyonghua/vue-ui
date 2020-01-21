<template>
    <div>
         <cyh-navbar title="列表单元格">
         <router-link to="/index" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
       </cyh-navbar>
        <cyh-cell islink title="薛之谦" value="认真的血" to="/index"></cyh-cell>
    </div>
</template>
