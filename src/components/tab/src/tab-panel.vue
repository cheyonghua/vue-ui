<template>
    <div class="pax-tab-panel-item" :class="classes">
       <slot></slot>
    </div>
</template>
<script>
export default {
    name:'pax-tab-panel',
    props:{
       label:{
       type:String,
       default:""
     },
       tabkey:{
       type:String,
       default:"" 
     }
    },
    data(){
        return{
          iscurrent:false
        }
    },
    computed:{
     classes(){
        //  debugger
        return this.$parent.activeIndex===this.tabkey||this.iscurrent?"pax-tab-active":"";
     }
    },
    methods:{

    },
    watch:{
    //   label(){
    //       this.$parent.init()
    //   },
    },
    mounted(){
      this.$nextTick(()=>{
          this.$parent.init()
      })
    }
}
</script>


