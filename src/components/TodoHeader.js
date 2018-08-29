import React,{Component} from "react";
import {connect} from "react-redux";
import actions from "../store/actions";
class TodoHeader extends Component {
    getNum(){
      return  this.props.todos.filter(item=>!item.isSeleted).length;
    }
    render(){
        return <nav className="navbar text-center" >
            <div className="h4">
                你还有{this.getNum()}件事未完成~</div>
            <input type="text" className="form-control" onKeyDown={(e)=>{
                if(e.keyCode === 13){
                    this.props.add({id:Math.random(),isSeleted:false,content:e.target.value});
                    e.target.value = "";
                }
            }}/>
        </nav>
    }
}
export default connect((state)=>{
    console.log(state);
    return {...state};
},actions)(TodoHeader)