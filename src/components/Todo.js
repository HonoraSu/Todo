import React,{Component} from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
class App extends  Component{
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                   <div className="panel panel-info">
                       <div className="panel-heading">
                           <TodoHeader/>
                       </div>
                       <div className="panel-body">
                           <TodoList/>
                       </div>
                       <div className="panel-footer">
                           <TodoFooter/>
                       </div>
                   </div>
                </div>
            </div>


        </div>
    }
}
export default App;