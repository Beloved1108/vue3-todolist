<template>
    <div class="content">

            <ul>
            <li class="list">
                <div class="center">
                    <input type="checkbox" class="check">
                    <input type="text" value="学习" class="input">
                    <button class="delete">删除</button>
                </div>
                
            </li>
            <li class="list">
                <div class="center">
                    <input type="checkbox" class="check">
                    <input type="text" value="娱乐" class="input">
                    <button class="delete">删除</button>
                </div>
                
            </li>
            <li class="list">
                <div class="center">
                    <input type="checkbox" class="check">
                    <input type="text" value="学习" class="input">
                    <button class="delete">删除</button>
                </div>
                
            </li>
            <li class="list">
                <div class="center">
                    <input type="checkbox" class="check">
                    <input type="text" value="娱乐" class="input">
                    <button class="delete">删除</button>
                </div>
                
            </li>
            <li class="list">
                <div class="center">
                    <input type="checkbox" class="check">
                    <input type="text" value="学习" class="input">
                    <button class="delete">删除</button>
                </div>
                
            </li>
            <li class="list">
                <div class="center">
                    <input type="checkbox" class="check">
                    <input type="text" value="娱乐" class="input">
                    <button class="delete">删除</button>
                </div>
                
            </li>
        </ul>
        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content{
    width:100%;
    height: 100%;
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
                .input{
                    width: 150px;
                    height: 20px;
                    border: 0;
                    outline: none;
                    // background:#f9f9f9 ;
                    font-size: 18px;
                }
                .input:focus{
                    border: 3px solid #00a4ff;
                    
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