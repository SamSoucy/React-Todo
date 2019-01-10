import React from "react";

const TodoForm= props =>{
    return(
        <form onSubmit ={props.addTodo}>
        {}
        <input
            value={props.task}
            type="text"
            name="task"
            placeholder = "...todo"
            onChange ={props.handleChanges}
            />
            <button type="submit">Add Todo</button>
            <button onClick={props.clear}>Clear Compleated</button>
        </form>
    );
}

export default TodoForm;