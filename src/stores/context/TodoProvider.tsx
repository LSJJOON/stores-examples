import TodoContext from "src/stores/context/TodoContext";
import React from "react";
import { v1 as uuidv1 } from "uuid";

class TodoProvider extends React.Component {
  state: {
    todos: Todo[];
  } = {
    todos: [],
  };

  public render() {
    return (
      <TodoContext.Provider
        value={{
          todos: this.state.todos,
          addTodo: this.addTodo,
          deleteTodo: this.deleteTodo,
          toggle: this.toggle,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }

  private addTodo = (title: string) => {
    console.log(title);
    const newTodo: Todo = {
      id: uuidv1(),
      title,
      isDone: false,
    };
    const newTodos = this.state.todos.concat([newTodo]);

    this.setState({ todos: newTodos });
  };

  private deleteTodo = (id: string) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
  };

  private toggle = (id: string) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  };
}

export default TodoProvider;
