<template>
    <div>
       <div class="cyh-search-input">
          <div class="cyh-search-content">
             <!-- focus选择器用于选择具有焦点的元素 -->
             <input type="text" ref="input" v-model="currentValue" @focus="focusValue" :placeholder="placeholder">
             <span class="cyh-search-delete" v-if="currentValue" @click="delteValue">删除</span>
          </div>
          <!-- 这个控制有没有取消 -->
          <div v-if="showCancel" class="cyh-search-cancel" > 
              <!-- 这个控制什么时候出现取消 -->
              <span v-if="buttonShow" @click="cancelValue">取消</span>
          </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"cyh-search",
    props:{
        showCancel:{
            type:Boolean,
            default:false
        },
        // v-model==value+@input
        value:{
            type:String,
            default:''
        },
        placeholder:{
            type:String,
            default:"请输入搜索内容"
        }
    },
    data(){
      return{
        currentValue:this.value,
        buttonShow:false
      }
    },
    watch:{
      currentValue(val){
        //   把值传给父组件
          this.$emit('input',val)
      }
    },
    methods:{
       delteValue(){
         this.currentValue=''
         //光标聚焦
         this.$refs.input.focus()
       },
       cancelValue(){
        // 不能直接更改props的内容，子组件不能修改从父组件传过来的值，单向下绑定，需要新变量值传递，新变量改变的时候不会影响子组件
        //  this.showCancel=false
        //  this.showDelete=false
         this.buttonShow=false
        //  input值置空
         this.currentValue=''
         this.$emit('cancelSearch')
       },
       focusValue(){
        //    光标聚焦。取消出现
           this.buttonShow=true
       }
    }
}
</script>

<style lang="less" scoped>
.cyh-search-input{
    display:flex;
    align-items: center;
    .cyh-search-content{
        flex: 1;
        display:flex;
        align-items: center;
        border:1px solid #ccc;
       
        input{
            flex:1;
            caret-color: #EB8A3F;
        }
        .cyh-search-delete{
            flex-basis: 32px;
            // color:yellow
        }
    }
    .cyh-search-cancel{
        flex-basis: 30px;
    }
}
</style>

