import React from 'react';
import TodoList from "./components.TodoComponents/TodoList";
import  Todoform from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: todoData,
      todo: "",
    };
  }

  handleChanges = ev => {
    this.setState({[event.target.value]});
  };

  addTodo = ev => {
    ev.preventDefault();
    this.setState({
      data:[
        ...this.state.data,
        {task: this.state.todo, id: math.floor(Math.ramdom()*1000000), compleated:false}
      ],
      todo: ""
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List!</h2>
        <TodoList data ={this.state.todoData} />
        <Todoform
          todo={this.state.todo}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          />
      </div>
    );
  }
}

export default App;
