import React from "react";

const TodoForm= props =>{
    return(
        <form className="type" onSubmit ={props.addTodo}>
        {}
        <input className="input"
            value={props.task}
            type="text"
            name="task"
            placeholder = "Type your ToDo's"
            onChange ={props.handleChanges}
            />
            <button className="subBut" type="submit">Add ToDo</button>
            <button className="clearBut" onClick={props.clear}>Clear Compleated</button>
        </form>
    );
}

export default TodoForm;