<template>
  <div class="todo-list">
    <TopInput></TopInput>
    <TableList></TableList>
    <BottomItem></BottomItem>
  </div>
</template>

<script setup>
import BottomItem from './components/BottomItem.vue'
import TableList from './components/TableList.vue'
import TopInput from './components/TopInput.vue'
// todolist 到底有多少个状态
// 状态：1.公共状态-》store 2.私有状态-》单个组件
// input框中的输入值===》私有的状态，修改input的时候list会变
// list ===》公共的
// 


</script>

<style lang="scss" scoped>

</style>