<template>
  <div class="pax-checkbox-content">
    <div class="pax-checkbox" v-for="(item,index) in options" :key="index" @click="select(item)">
        <p class="pax-radio-title">{{(item.label)?(item.label):item}}</p>
        <div class="pax-radio-checkbox">
          <!-- 如果该选中value存在于父传子value中，也就是>-1，匹配到相应的value,那么checked的值就是true，否则就是false -->
          <!-- 后来发现该input没有用 -->
            <input type="checkbox" :disabled="item.disabled" :checked="(item.value)?(value.indexOf(item.value)>-1?true:false):(value.indexOf(item)>-1?true:false)">
            <span :class="{'pax-radio-circel' :value.indexOf(item.value?(item.value):item)>-1}">
              <i></i>
            </span>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'pax-checkbox',
    props:{
      options:{
          type:Array
      },
      value:{
         type:Array,
         default:[]
      }
    },
    data(){
        return {
        //   val:"true",
          title:"选项1",
        //   checked:true
        }
    },
    methods:{
        select(option){
          if(option.disabled) return;
          let selectValue=option.value?option.value:option;
        //   debugger
          if(this.value.indexOf(selectValue)>-1){
            // selectvalue在value里面存在的索引index
            //debugger
            //  选择的值存在已经存在选择的val数组，那么需要去除该选择值
            this.value.splice(this.value.indexOf(selectValue),1)
          }else{
            // debugger
            // 等于-1不存在，那么需要添加
            this.value.push(selectValue);
            let newArr=[];
            for(let i=0,len=this.options.length;i<len;i++){
              let optionsArr=this.options[i].value?this.options[i].value:this.options[i]
              if(this.value.indexOf(optionsArr)>-1){
                  newArr.push(optionsArr)
              }
            }
            // debugger
            this.$emit('input',newArr) 
          } 
        }
    }
}
</script>
<style lang="less" scoped>
.pax-checkbox-content{
  padding-right: 30px;
}

.pax-checkbox{
 display: flex;
 justify-content:space-between;
 align-items: center;
 height: 40px; 
 padding: 0 10px;
 input{
   width:0;
   display: none
 }
 .pax-radio-circel{
    width:20px;
    height:20px;
    position: relative;
    i{
      position: absolute;
      width:8px;
      height:15px;
      border-bottom: 2px solid #EA8E49;
      border-right: 2px solid #EA8E49;
      top:45%;
      left: 50%;
      transform: translate(-50%,-50%) rotate(45deg) scale(1)
    }
}
}

</style>

