import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux";
import store from "./store/index"
import Todo from "./components/Todo"
import "bootstrap/dist/css/bootstrap.css"
ReactDom.render(
    <Provider store={store}>
        <Todo/>
    </Provider>
    ,window.root);