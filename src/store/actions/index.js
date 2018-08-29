import * as Types from "../action-types";
//actionCreator对象
let actions = {
    add(todo){//todo添加的一条数据
       return {type:Types.ADD,todo}
    },
    changeSelected(id){
        return {type:Types.CHANGE_SELETED,id}
    },
    delete(id){
        return {type:Types.DELETE,id}
    },
    changeType(val){//val 当前的type类型(all,finish,unfinish)
       return {type:Types.CHANGE_TYPE,val}
    }
}
export default actions;