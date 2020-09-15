import { observable } from "mobx";
import { v1 as uuidv1 } from "uuid";
import TodoListStore from "src/stores/mobx/TodoListStore";

interface Props {
  title: string;
  todoListStore: TodoListStore;
}

class Todo {
  public id: string = uuidv1();
  public title: string;
  @observable public isDone: boolean = false;
  private todoListStore: TodoListStore;

  constructor({ title, todoListStore }: Props) {
    this.title = title;
    this.todoListStore = todoListStore;
  }

  public toggle = () => {
    this.isDone = !this.isDone;
  };

  public deleteTodo = () => {
    this.todoListStore.deleteTodo(this.id);
  };
}

export default Todo;
