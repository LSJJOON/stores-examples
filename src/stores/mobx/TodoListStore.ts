import { observable } from "mobx";
import TodoStore from "src/stores/mobx/TodoStore";

class TodoList {
  @observable public todos: TodoStore[] = [];

  public addTodo = (title: string) => {
    this.todos.push(new TodoStore({ title, todoListStore: this }));
  };

  public deleteTodo = (id: string) => {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  };
}

export default TodoList;
