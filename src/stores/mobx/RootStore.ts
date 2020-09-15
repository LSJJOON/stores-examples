import { observable } from "mobx";
import TodoListStore from "src/stores/mobx/TodoListStore";

export default observable({ todoListStore: new TodoListStore() });
