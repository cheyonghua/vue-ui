<template>
  <div>
    <pax-according>
      <pax-according-item v-for="(item,index) in arr"
                          :key="index"
                          :title="item.title">
        <pax-cell islink
                  v-for="(option,index) in item.menu"
                  :key="index"
                  :title="option"
                  :to="'/'+option"></pax-cell>
      </pax-according-item>
    </pax-according>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {
          title: '风格',
          menu: ['button', 'icon']
        },
        {
          title: '数据展示',
          menu: [
            'according',
            'cell',
            'checkbox',
            'icon',
            'layout',
            'navbar',
            'radio',
            'search',
            'tab'
          ]
        },
        {
          title: '数据录入',
          menu: ['swipecell']
        }
      ]
    }
  },
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
