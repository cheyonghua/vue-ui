<template>
   <div>
     <ul>
       <li class="cyh-tab-item" v-for="(item,index) in arr" :key="index" :class="item.tabkey===activeIndex||index===activeIndex?'cyh-tab-active':''" @click="clickTab(item.tabkey,index)">
        {{item.label}}
       </li>
     </ul>
     <div class="cyh-tab-panel">
         <slot></slot>
     </div>
   </div>
</template>
<script>
export default {
    name:'cyh-tab',
    props:{
     value:[Number,String]
    },
    data(){
        return{
          arr:[],
          activeIndex:this.value||0
        }
    },
    watch:{
      value(val){
        // debugger
        let tabDetail=this.$children.filter(item=>
           item.$options.name==='cyh-tab-panel'
         )
        //  debugger
        // 这个是为了没有tabkey情况下，index
       tabDetail.map((item,index)=>{
         if(val===index){
          //  debugger
           this.$set(item,'iscurrent',true)
         }else{
           this.$set(item,'iscurrent',false)
         }
       })
     }
    },
    methods:{
        // 把新的tabkey传回去
        clickTab(tabkey,index){
          // debugger
        //  this.tabkey=val
        // debugger
        // tabkey的情况
        if(this.tabkey){
          this.$emit("input",tabkey)
         this.activeIndex=tabkey
        }else{
           //  index的情况
          this.$emit("input",index)
          this.activeIndex=index
         }
        },
        init(){
         this.arr=[]
         let tabDetail=this.$children.filter(item=>
           item.$options.name==='cyh-tab-panel'
         )
         tabDetail.map(item=>{
          this.arr.push({
            label:item.label,
            tabkey:item.tabkey
          })

         })
          // debugger
         
        }
    }

}
</script>
<style lang="less" scoped>
@import '../../../styles/components/tab.less';
</style>


