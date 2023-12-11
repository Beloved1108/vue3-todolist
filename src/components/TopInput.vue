<template>
    <div class="header">
        <h2>TodoList</h2>
        <div class="box">
            <input type="text" placeholder="请输入待办事项..." class="input" v-model="input">
            <button>添加</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 90px;
    background:#43bdff;
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