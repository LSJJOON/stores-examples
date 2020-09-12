import { createContext } from "react";

interface State {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggle: (id: string) => void;
}

const initialState: State = {
  todos: [],
  addTodo: (title) => undefined,
  deleteTodo: (id) => undefined,
  toggle: (id) => undefined,
};
const TodoContext = createContext(initialState);

export default TodoContext;
