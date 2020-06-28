# 异步转同步
```js
// return new promise配上then,完成异步转同步
getlist() {
    return new Promise((resolve,reject)=>{
        fetchSome().then(response=>{
            this.listType=response.data
            // 不能忘记这个resolve
            resolve()
        })
    })  
},
getData() {
    return new Promise((resolve,reject)=>{
        fetchData().then(response=>{
            this.dataList=response.data
            resolve()
        })
    })  
},
// return new promise配上then,完成异步转同步，第一种方式
mounted(){
    // 先执行玩getlist,再getdata
    this.getlist().then(res=>{
        this.getData()
    })
}，
// async,await配合promise来使用，异步转同步，第二种方式
async yibu(){
    await this.getlist()
    await this.getData()
}
```