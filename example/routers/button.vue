<template>
    <div>
       <cyh-navbar title="按钮">
         <router-link to="/index" slot="left">
             <cyh-icon name="back"></cyh-icon>
         </router-link>
         <span slot="right">
             <cyh-icon name="setting" color="red"></cyh-icon>
             <cyh-icon name="trash" color="#000"></cyh-icon>
         </span>
       </cyh-navbar>
        <cyh-button size="small" inline @click.native="clickSearch">搜索框</cyh-button>
        <cyh-button size="small" inline @click.native="clickTab">分段控件</cyh-button>
        <cyh-button size="small" inline @click.native="clickLayout">布局</cyh-button>
        <cyh-button size="small" inline @click.native="clickRadio">单选框</cyh-button>
        <cyh-button size="small" inline @click.native="clickCheckbox">多选框</cyh-button>
        <cyh-button size="small" inline @click.native="clickIcon">icon</cyh-button>
        <cyh-button size="small" inline @click.native="clickNavbar">导航栏</cyh-button>
        <cyh-button size="small" inline @click.native="clickAccording">折叠菜单</cyh-button>
        <cyh-button size="small" inline @click.native="clickCell">列表单元格</cyh-button>
    </div>
</template>
<script>
export default {
    methods:{
        clickSearch(){
          this.$router.push('/search')
        },
        clickTab(){
          this.$router.push('/tab') 
        },
        clickLayout(){
          this.$router.push('/layout')
        },
        clickRadio(){
          this.$router.push('/radio')
        },
        clickCheckbox(){
          this.$router.push('/checkbox')
        },
        clickIcon(){
          this.$router.push('/icon')
        },
        clickNavbar(){
          this.$router.push('/navbar')
        },
        clickAccording(){
          this.$router.push('/according')
        },
        clickCell(){
          this.$router.push('/cell')
        }
    }
}
</script>

