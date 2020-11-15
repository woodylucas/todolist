import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
  }
  create(newTodo) {
    this.setState((currState) => ({
      todos: [...currState.todos, newTodo],
    }));
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo key={todo.id} id={todo.id} task={todo.task} />
    ));
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
