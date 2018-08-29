import React,{Component} from "react";
import {connect} from "react-redux";
import actions from "../store/actions"
class TodoFooter extends Component{
    handleClick=(e)=>{
        e.preventDefault();
        //根据state中type值筛选todos
        let val = e.target.parentNode.dataset.type; //h5提供了获取data-开头的自定义属性值
        this.props.changeType(val)
    }
    render(){
        return <ul className="nav nav-pills">
            <li className={this.props.type==="all"?"active":""} data-type="all" onClick={this.handleClick}><a href="#">全部</a></li>
            <li className={this.props.type==="unfinish"?"active":""} data-type="unfinish" onClick={this.handleClick}><a href="#">未完成</a></li>
            <li className={this.props.type==="finish"?"active":""} data-type="finish" onClick={this.handleClick}><a href="#">已完成</a></li>
        </ul>
    }
}
export default connect((state)=>({...state}),actions)(TodoFooter);