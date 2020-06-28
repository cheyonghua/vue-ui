<template>
    <div class="pax-according">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'pax-according',
  props: {
    according:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    open(uid){
      console.log(this.$children,999)
      this.$children.forEach(item => {
        if(item._uid==uid){
          console.log(item.show,333)
          item.show?item.closeItem():item.openItem()
        }else{
          // debugger
          console.log(item,555)
          !this.according&&item.closeItem()
        }
      });
    }
  }
}
</script>
