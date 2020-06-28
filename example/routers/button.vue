<template>
  <div>
    <pax-navbar title="按钮">
      <router-link to="/index"
                   slot="left">
        <pax-icon name="back"></pax-icon>
      </router-link>
      <span slot="right">
        <pax-icon name="setting"
                  color="red"></pax-icon>
        <pax-icon name="trash"
                  color="#000"></pax-icon>
      </span>
    </pax-navbar>
    <pax-button size="small"
                inline
                @click.native="clickSearch">0123456789.,~＄€￥￡_+-×÷＝·%‰/*＊元万亿</pax-button>
    <!-- <pax-button size="small"
                inline
                @click.native="clickTab">分段控件</pax-button>
    <pax-button size="small"
                inline
                @click.native="clickLayout">布局</pax-button>
    <pax-button size="small"
                inline
                @click.native="clickRadio">单选框</pax-button>
    <pax-button size="small"
                inline
                @click.native="clickCheckbox">多选框</pax-button>
    <pax-button size="small"
                inline
                @click.native="clickIcon">icon</pax-button>
    <pax-button size="small"
                inline
                @click.native="clickNavbar">导航栏</pax-button>
    <pax-button size="small"
                inline
                @click.native="clickAccording">折叠菜单</pax-button>
    <pax-button size="small"
                inline
                @click.native="clickCell">列表单元格</pax-button> -->
  </div>
</template>
<script>
export default {
  methods: {
    clickSearch () {
      this.$router.push('/search')
    },
    clickTab () {
      this.$router.push('/tab')
    },
    clickLayout () {
      this.$router.push('/layout')
    },
    clickRadio () {
      this.$router.push('/radio')
    },
    clickCheckbox () {
      this.$router.push('/checkbox')
    },
    clickIcon () {
      this.$router.push('/icon')
    },
    clickNavbar () {
      this.$router.push('/navbar')
    },
    clickAccording () {
      this.$router.push('/according')
    },
    clickCell () {
      this.$router.push('/cell')
    }
  }
}
</script>
<style scoped lang="less">
.pax-btn-inline {
  font-family: wow;
}
@font-face {
  font-family: wow;
  font-size: 30px;
  src: url("../../src/assets/font/Wow-Medium.otf");
}
</style>
