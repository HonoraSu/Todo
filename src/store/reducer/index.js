import * as Types from "../action-types";

let initState = {
    type: "all",
    todos: [
        {id: 1, isSeleted: false, content: "睡觉"},
        {id: 2, isSeleted: true, content: "吃饭"}
    ]
};

function todo(state = initState, action) {
    switch (action.type) {
        case Types.ADD:
            return {...state, todos: [...state.todos, action.todo]};
        case Types.CHANGE_SELETED:
            let todos = state.todos.map(item => {
                if (item.id === action.id) {
                    item.isSeleted = !item.isSeleted;
                }
                return item;
            });
            return {...state, todos};
        case Types.DELETE:
            let todos2 = state.todos.filter(item => {
                return item.id !== action.id
            });
            return {...state, todos: todos2};
        case Types.CHANGE_TYPE:
            return {...state,type:action.val}
    }
    return state;
}

export default todo;
