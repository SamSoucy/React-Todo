import React from "react";
import "./Todo.css";

const Todo = props => {
    return(
        <div
            className={props.task.completed ? "completed": null}
            onClick={() => props.toggleData(props.index)}
        >
        
        {props.task.task}
        </div>
    );
}

export default Todo;