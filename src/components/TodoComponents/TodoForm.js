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
            <button className="subBut" type="submit">Add Todo</button>
            <button className="clearBut" onClick={props.clear}>Clear Compleated</button>
        </form>
    );
}

export default TodoForm;