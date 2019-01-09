import React from "react";

const TodoForm =(props) => {
    return(
        <form onSubmit ={props.addTodo}>
        <input
            value={props.todo}
            type="text"
            name="todo"
            placeholder = "...todo"
            onChange ={props.handleChanges}
            />
            <button>Add Todo</button>
            <button>Clear Compleated</button>
        </form>
    );
}

export default TodoForm;