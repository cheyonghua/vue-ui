<template>
    <div>
       <cyh-navbar title="折叠菜单">
         <router-link to="/button" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
       </cyh-navbar>
        <cyh-according>
          <cyh-according-item title="李白">
             <cyh-cell islink title="薛之谦" value="认真的血"></cyh-cell>
          </cyh-according-item>
        </cyh-according>
        <cyh-according>
          <cyh-according-item title="杜甫">
             <cyh-cell islink title="薛之谦" value="认真的血"></cyh-cell>
              <cyh-cell islink title="薛之谦" value="认真的血"></cyh-cell>
               <cyh-cell islink title="薛之谦" value="认真的血"></cyh-cell>
          </cyh-according-item>
        </cyh-according>
    </div>
</template>
