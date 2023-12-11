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
        }
    },
    getters:{

    }
})
export default store