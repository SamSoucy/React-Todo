import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import  TodoForm from "./components/TodoComponents/TodoForm";
// import "./components/TodoComponents/Todo.css";

const data = [
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
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      task: ""
    };
  }

  handleChanges = ev => {
    this.setState({[ev.target.name]: ev.target.value});
  };

  addTodo = ev => {
    ev.preventDefault();
    this.setState({
      data:[
        ...this.state.data,
        {task: this.state.task, id: Date.now(), completed: false}
      ],
      task: ""
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleData = index => {
    this.setState({
      data: this.state.data.map((task, id) =>{
        if(index !== id){
          return task;
        }else {
          return {
            ...task,
            completed: !task.completed
          };
      }
    })
  });
};

clear = ev =>{
  ev.preventDefault();
  this.setState({
    data: this.state.data.filter(
      task=>task.completed !== true
    )
  })
}

  render() {
    return (
      <div className="App">
        <h2 className="title">To Do List!</h2>
        <TodoList 
        toggleData={this.toggleData}
        data ={this.state.data} />
        <TodoForm
          clear ={this.clear}
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          id = {Date.now()}
          />
      </div>
    );
  }
}

export default App;
