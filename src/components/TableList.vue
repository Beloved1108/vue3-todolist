<template>
    <div class="content">
        <h2 v-if="!store.state.list.length">暂无代办事项</h2>
        <ul v-else>
            <li class="list" v-for="item in store.state.list" :key="item.id">
                <div class="center">
                     <input type="checkbox" class="check" 
                     :checked="item.isDone"
                     @change="toggleIsDone(item)"
                     >
                     <span 
                     v-if="!item.isEdited"
                     :class="{done:item.isDone}"
                     @click="toggleIsEdited(item)">{{item.value}}</span>

                    <input v-else 
                    type="text" 
                    class="input" 
                    :value="item.value"
                    @blur="toggleValue($event,item)"
                    v-focus/>
                    <button class="delete" @click="del(item.id)">删除</button>
                </div>
                
            </li>
        </ul>
        
    </div>
</template>

<script setup>
import {useStore} from "vuex"
const store = useStore()
const del = (id)=>{
    console.log(id);
    store.commit('deleteList',id)
}

const toggleIsDone = (item)=>{
    store.commit('toggleChecked',item)
}
const toggleIsEdited = (item)=>{
    store.commit('toggleEdited',item)
}
const toggleValue = (event,item)=>{
    // console.log(event.target.value,'event');
    // console.log(item,'item');
    store.commit('toggleValue',{event,item})
    store.commit('toggleEdited',item)
}
// Vue3中的setup语法中如何自定义一个指令 
const vFocus ={
    //当添加指令的元素挂载后，执行对应的逻辑
    mounted(el){
        // console.log(el,'el');
        el.focus()
        // input 框自动获取焦点
    }
}
</script>

<style lang="scss" scoped>
.content{
    width:100%;
    height: 100%;
    h2{
        text-align: center;
        margin: 20px auto;
    }
       ul{
        list-style: none;
        .list{
            // width: 650px;
            width: 100%;
            margin: 0 auto; 
            padding: 20px;
            height: 60px;
            border-bottom: 1px solid #eee;
            .center{
                width: 650px;
                margin: 0 auto;
                position: relative;
                .check{
                margin-left: 50px;
                margin-right: 25px;
                }
                span{
                    font-size: 18px;
                    &.done{
                        text-decoration: line-through;
                        color: red;
                    }
                }
               
                .input{
                    width: 400px;
                    height: 20px;
                    // border: 0;
                    // outline: none;
                    // background:#f9f9f9 ;
                    font-size: 18px;
                }
                .input:focus{
                    border: 3px solid #cccccc;
                    
                }
                button{
                    position: absolute;
                    right: 100px;
                    display: none;
                }
            
            }
           
            
        }
        .list:hover{
            background: #f9f9f9;
            .delete{
                display: inline-block;
            }
        }
    }
    
    
}
</style>