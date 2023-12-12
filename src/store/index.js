import { createStore } from "vuex";
const store = createStore({
    state:()=>{
        return{
            list:[]//任务列表
        }
    },
    mutations:{
        //修改list状态的方法

        // 1.增加list的方法
        addList(state,payload){
            state.list.push(payload)
            // console.log(state.list);
        },
        // 2.删除list的方法
        deleteList(state,id){
            // payload传递过来的id值
            // 根据id找到对应的数组元素，最终删除他
            state.list = state.list.filter((item)=>{
                return item.id != id
            })
            // console.log(state.list);
            
        },
        // 3.切换input-checked状态
        toggleChecked(state,item){
            // item表示选中的item
             state.list.forEach(i => {
               if(i.id === item.id){
                i.isDone = !i.isDone
               }
            });
        },

        //4.切换 span文本<-->可编辑input框 可编辑状态 的方法
        toggleEdited(state,item){
            state.list.forEach((i)=>{
                if(i.id === item.id){
                    i.isEdited = !i.isEdited
                }
            })
        },

        // 5.将可编辑input框失焦 获取最新value值
        toggleValue(state,payload){
            state.list.forEach(item=>{
                if(item.id === payload.item.id){
                    item.value = payload.event.target.value
                }
            })
        },


        //清除已办事项
        clearDone(state){
            state.list = state.list.filter(item=>{
                return !item.isDone
            })
        },

        // 清除全部事项
        clearAll(state){
            state.list =[]
        }
    },
    getters:{
        // 将已经完成的事件过滤出来
        isDone(state){
           return state.list.filter((item)=>{
                return item.isDone
            })
        }, 
        allDone(state){
            // 只有list中所有元素的isDone都为true时，allDone才为true
        return state.list.every(item=>{
                return item.isDone
            })
        }
    }
})
export default store