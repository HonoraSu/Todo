import React,{Component} from "react";
import {connect} from "react-redux";
import actions from "../store/actions"
class TodoList extends Component{
    //根据state中type筛选todos值
    filterTodo=()=>{
        let myTodos=[];
        switch (this.props.type){
            case "all":
              myTodos = this.props.todos;
              break;
            case "finish":
              myTodos = this.props.todos.filter(item=>{
                  return item.isSeleted;
              })
              break;
            case "unfinish":
              myTodos = this.props.todos.filter(item=>{
                  return !item.isSeleted;
              });
              break;
        }
        return myTodos;
    }
    render(){
        return <ul className="list-group" >
            {this.filterTodo().map((item,index)=>{
               return  <li className="list-group-item" key={index}>
                   <input type="checkbox" checked={item.isSeleted} onChange={()=>{
                       this.props.changeSelected(item.id)
                   }}/>
                   {item.content}
                   <button className="btn btn-xs pull-right btn-danger" onClick ={()=>{
                       this.props.delete(item.id);
                   }}>删除</button>
               </li>
            })}
        </ul>
    }
}
export default  connect((state)=>({...state}),actions)(TodoList);