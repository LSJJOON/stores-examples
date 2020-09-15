const ADD_TODO = "todo/ADD_TODO" as const;
const TOGGLE = "todo/TOGGLE" as const;
const DELETE_TODO = "todo/DELETE_TODO" as const;

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggle>
  | ReturnType<typeof deleteTodo>;

export function addTodo(title: string) {
  return {
    type: ADD_TODO,
    title,
  };
}

export function toggle(id: string) {
  return {
    type: TOGGLE,
    id,
  };
}

export function deleteTodo(id: string) {
  return {
    type: DELETE_TODO,
    id,
  };
}
