# element 限制开始时间和结束时间
<template>
   <el-date-picker
          type="date"
          placeholder="选择开始日期"
          v-model="beginTime"
          value-format="yyyy-MM-dd"
          :picker-options="pickerTimeBeg">
   </el-date-picker>
   -
   <el-date-picker
          type="date"
          placeholder="选择结束日期"
          v-model="endTime"
          value-format="yyyy-MM-dd"
          :picker-options="pickerTimeEnd">
  </el-date-picker>
</template>
<script>
export default {
    data() {
        return{
            beginTime:"",
            endTime:"",
            pickerTimeBeg: { //限制开始时间
                disabledDate: (time) => {
                    if (this.endTime != '' && this.endTime) {
                        let timeStr = new Date(this.endTime.replace(/-/g, '/'));
                        return time.getTime() > timeStr;
                    } else {
                        return ''
                    }
                }
            },
            pickerTimeEnd: { //限制结束时间
                disabledDate: (time) => {
                    if (this.beginTime != '' && this.beginTime) {
                        let timeStr = new Date(this.beginTime.replace(/-/g, '/'));
                        return time.getTime() < timeStr;
                    } else {
                        return ''
                    }
                }
            }
        }
    }
}
</script>

# vue-cli连接环境配置

.env 全局默认配置文件，不论什么环境都会加载合并

.env.development 开发环境下的配置文件

.env.production 生产环境下的配置文件

关于文件内容：

注意：属性名必须以VUE_APP_开头，比如VUE_APP_XXX

关于文件的加载：

根据启动命令vue会自动加载对应的环境，vue是根据文件名进行加载的，所以上面说“不要乱起名，也无需专门控制加载哪个文件”

比如执行npm run serve命令，会自动加载.env.development文件

# jsencrypt.js对数据进行加密传输
```js
在Vue项目中使用jsencrypt.js对数据进行加密传输
第一步装包导入，npm install jsencrypt --dep
第二步引入使用，import { JSEncrypt } from 'jsencrypt'，因为我只要密码加密我只用到了加密
  //  加密
    encryptedData(publicKey, data) {
      // 新建JSEncrypt对象
      let encryptor = new JSEncrypt();
      // 设置公钥
      encryptor.setPublicKey(process.env.VUE_APP_PUBLIC_KEY);
      // 加密数据
      return encryptor.encrypt(data);
    },
    // 解密
    decryptData(privateKey,data){
      // 新建JSEncrypt对象
      let decrypt= new JSEncrypt();
      // 设置私钥
      decrypt.setPrivateKey(privateKey);
      // 解密数据
      decrypt.decrypt(secretWord);
    }
第三步，需要加密的文件夹引入这个文件，encryptedData(password)
第四步 在env.production,env.dev添加变量VUE_APP_PUBLIC_KEY，两个环境的VUE_APP_PUBLIC_KEY值不一样，然后相应的运行命令会读取到不同的值
总结：如果要区分生产和开发环境，env文件可以添加不同的变量，然后process.env.的方式去读取，我开发环境的url和生产的url也需要处理，生产需要用https，所以我定义了一个VUE_APP_URL，通过赋予不同值，比如说0,1，在需要用到的地方去判断生产和开发
```
# element的el-cascader 多选，后台只给了最后一级的值，渲染条件要求[父，子]
```js
changeDetSelect(key,treeData){
let arr = []; // 在递归时操作的数组
let returnArr = []; // 存放结果的数组
let depth = 0; // 定义全局层级
// 定义递归函数
function childrenEach(childrenData, depthN) {
  for (var j = 0; j < childrenData.length; j++) {
    depth = depthN; // 将执行的层级赋值 到 全局层级
    arr[depthN] = (childrenData[j].id);
    if (childrenData[j].id == key) {
      returnArr = arr.slice(0, depthN+1); //将目前匹配的数组，截断并保存到结果数组，
      break
    } else {
      if (childrenData[j].nodes) {
        depth ++;
        childrenEach(childrenData[j].nodes, depth);
      }
    }
  }
  return returnArr;
}
return childrenEach(treeData, depth);
},
``










