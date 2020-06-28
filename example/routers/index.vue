<template>
  <div>
    <pax-according according>
      <pax-according-item v-for="(item,index) in arr" :key="index" :title="item.title" :open="openIndex.indexOf(index)>-1" :index="index" @passIndex="passIndex">
        <pax-cell  v-for="(option,index) in item.menu" :key="index" :title="option" :to="'/'+option"></pax-cell>
      </pax-according-item>
    </pax-according>
  </div>
</template>
<script>
export default {
  data () {
    return {
      openIndex:[],
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
            'tab',
          ]
        },
        {
          title: '数据录入',
          menu: ['swipecell','account','share']
        }
      ]
    }
  },
  methods: {
    passIndex(index,show){
      // debugger
      console.log(index,show,990)
      if(show){
        // debugger
        // 如果已经存在openIndex中，不保存
        if(this.openIndex.indexOf(index)>-1) return
        this.openIndex.push(index)
        console.log(this.openIndex,88)
      }else{
        let indexs=this.openIndex.indexOf(index)
        console.log(indexs)
        this.openIndex.splice(indexs,1)
      }
      console.log(this.openIndex,999)
      // debugger
      // 存的时候要转成字符串，sessionstorage默认只能存字符串，所以要转成字符串
      sessionStorage.setItem('pax-index-index',JSON.stringify(this.openIndex))
    }
  },
  created(){
    console.log("33")
   if(!sessionStorage.getItem('pax-index-index')) return
  //  取的时候要转成js对象
    this.openIndex=this.openIndex.concat(JSON.parse(sessionStorage.getItem('pax-index-index')))
  },
  mounted(){
    sessionStorage.removeItem('pax-index-index')
  },
  beforeRouteLeave(to,from,next){
    // 离开这个路由之前，存下session,因为先前remove，再切换回来不会触发rotateAccording，也就不会再次存session
    sessionStorage.setItem('pax-index-index',JSON.stringify(this.openIndex))
    next()
  }
}
</script>
