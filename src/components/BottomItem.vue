<template>
    <div class="bottom" v-if="store.state.list.length">
        <div class="center">
            <input type="checkbox" class="check" :chekced="store.getters.allDone">
            <p>已办事项<span>{{store.getters.isDone.length}}</span>/全部事项<span>{{store.state.list.length}}</span></p>
            <button class="done" @click="delDone">清除已办</button>
            <button class="all" @click="delAll">清除所有</button>
        </div>
    </div>
</template>

<script setup>
import {useStore} from "vuex"
const store = useStore()
const delDone = ()=>{
    store.commit('clearDone')
}
const delAll = ()=>{
    store.commit('clearAll')
}


</script>

<style lang="scss" scoped>
.bottom {
   width: 100%;
   height: 60px;
   background: #3dbff6;
   padding: 10px;
   .center{
    width: 650px;
    height: 30px;
    line-height: 30px;
    margin: 5px auto;
    position: relative;
    .check{
        display: inline-block;
        margin-left: 50px;
        margin-right: 25px;
    }
    p{
        display: inline-block;
    }
    .done{
        position: absolute;
        right: 80px;
        margin: 5px 0;
        
    }
    .all{
        position: absolute;
        right: 10px;
        margin: 5px 0;
    }
   }
}
</style>