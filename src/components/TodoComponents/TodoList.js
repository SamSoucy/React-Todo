// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from "react";
import Todo from "./Todo";

const TodoList = props =>{
    return (
        <div>
            {props.data.map((task, index)=>{
                    return(
                        <Todo 
                        task={task}
                        index={index}
                        toggleData ={props.toggleData}
                        key = {task.id}
                        />);
                    
                    
                })}
            
        </div>
    );
}

export default TodoList;