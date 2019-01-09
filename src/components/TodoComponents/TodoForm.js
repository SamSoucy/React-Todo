import React from "react";

const TodoForm =(props) => {
    return(
        <from onSubmit ={props.addTodo}>
        <input
            value={props.todo}
            type="text"
            name="todo"
            placeholder = "Todo"
            onChange ={props.handleChanges}
            />
            <button>Add Todo</button>
            <button>Clear Compleated</button>
        </from>
    );
}

export default TodoForm;