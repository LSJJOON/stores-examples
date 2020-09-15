import { v1 as uuidv1 } from "uuid";
import { TodoAction } from "src/stores/redux/todoActions";

type State = { todos: Todo[] };
const initialState: State = { todos: [] };

function todoReducer(state = initialState, action: TodoAction): State {
  switch (action.type) {
    case "todo/ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: uuidv1(), title: action.title, isDone: false },
        ],
      };
    case "todo/TOGGLE":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) return { ...todo, isDone: !todo.isDone };
          return todo;
        }),
      };
    case "todo/DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todoReducer;
