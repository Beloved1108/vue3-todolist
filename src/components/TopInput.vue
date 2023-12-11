<template>
    <div class="header">
        <h2>TodoList</h2>
        <div class="box">
            <input type="text" placeholder="请输入待办事项..." class="input" v-model.trim="input">
            <button @click="add">添加</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from "vuex"
const input = ref("");
const store = useStore()
const add = ()=>{
    //将收集到的input内容添加到store的list中
    if(!input.value){
        input.value = ''
        return alert("请输入有效内容！")
    }
    // 传递过去的payload不应该是个input的值,还包括一些其他的状态, 一般情况下需要给数据添加一个唯一的id，用来通过事件快速的找到他
    // 设置唯一的id方法：js内部：1.利用时间戳 new Date().getTime() 2.利用随机数 Math.random()
    store.commit('addList',{
        value:input.value,//收集的文本值
        isDone:false,//完成与否的状态
        isEdited:false,//编辑与否的状态
        id:Math.random()//唯一的id
        })

}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 90px;
    background:#43bdff;
    margin-bottom: 5px;
    h2{
        text-align: center;
        font-weight: 800;
        color: white;
    }
    .box{
        margin: 5px auto;
        width: 650px;
        height:50px;
        padding:0 10px;
        input{
            width: 420px;
            height: 30px;
            margin: 5px 10px 5px 100px;
        }
        button{
            width: 50px;
            height: 30px;
            margin: 5px 10px;
        }
    }
}
</style>