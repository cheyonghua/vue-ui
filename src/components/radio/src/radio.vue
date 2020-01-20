<template>
  <div>
    <div class="cyh-radio" v-for="(item,index) in option" :key="index" @click="select(item)">
        <p class="cyh-radio-title">{{(item.label)?(item.label):item}}</p>
        <div class="cyh-radio-checkbox">
            <input type="checkbox" :disabled="item.disabled" :checked="(item.value)?(item.value==value):(item==value)" :true-value="trueValue" :false-value="falseValue">
            <span class="cyh-radio-span">
                <i></i>
            </span>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'cyh-radio',
    props:{
      options:{
          type:Array
      },
      trueValue:{
        type:Boolean,
        default:false
      },
      falseValue:{
         type:Boolean,
         default:false
      },
      value:{
         type:String
      }
    },
    data(){
        return {
        //   val:"true",
          title:"选项1",
          option:this.options
        }
    },
    methods:{
        select(option){
          if(option.disabled) return;
          this.$emit('input',(option.value)?(option.value):(option))
        }
    }
}
</script>
<style lang="less" scoped>
.cyh-radio{
 display: flex;
 justify-content:space-between;
 align-items: center;
 height: 40px; 
 padding: 0 10px;
 .cyh-radio-span{
    width:30px;
    height:30px;
    background-color:#EA8E49;
    border-radius:50%;
    color:#EA8E49
}
}

</style>

