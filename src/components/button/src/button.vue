<template>
    <button :disabled="disabled" :class="className" :value="value">
      <span v-if="value">{{value}}</span>
      <slot v-else></slot>
    </button>
</template>
<script>
export default {
  name:'cyh-button',
  props:{
     type:{
       default:'primary'
     },
     disabled:{
      type:Boolean,
      default:false
     },
     value:{
      type:String
     },
     inline:{
      type:Boolean,
      default:false
     },
     size:{
      default:'medium'
     }
  },
  data(){
    return{
     
    }
  },
  computed:{
    className(){
      let t=''
      let type=this.type.toLowerCase()
      type=' cyh-btn-'+type
      let size=this.size.toLowerCase()
      // debugger
      size=' cyh-btn-'+size
      if(this.inline){
        t+=' cyh-btn-inline'
      }else{
        t+=' cyh-btn-block'
      } 
      return t+type+size
    }
  },
  methods:{
   
  }
}
</script>
<style lang="less">
.cyh-btn{
  &-small{
   min-width:60px;
   height:28px;
 }
  &-medium{
   min-width:76px;
   height:32px;
  }
  &-large{
   min-width:84px;
   height:42px;
  }
  &-primary{
    background-color: #EB8A3F;
  }
  &-warning{
    background-color: red;
  }
  &-default{
    border:1px solid #EB8A3F
  }
  &-block{
    display: block;
    width:100%
  }
  &-inline{
    display: inline-block
  }
}


</style>


