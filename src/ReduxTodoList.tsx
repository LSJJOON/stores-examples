import React from "react";
import styled from "styled-components";
import TodoCard from "src/TodoCard";
import TodoForm from "src/TodoForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/stores/redux/rootStore";
import { addTodo, deleteTodo, toggle } from "src/stores/redux/todoActions";

const TodoItemsContainer = styled.div`
  width: 200px;
  flex-direction: column;
  display: flex;
`;

const TodoItem = styled(TodoCard)`
  margin-bottom: 8px;
`;

function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const onAddTodo = (title: string) => {
    dispatch(addTodo(title));
  };
  const onToggle = (id: string) => {
    dispatch(toggle(id));
  };
  const onDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <TodoItemsContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
            onToggle={onToggle}
            onDelete={onDeleteTodo}
          />
        ))}
      </TodoItemsContainer>
      <TodoForm onAddTodo={onAddTodo} />
    </>
  );
}

export default TodoList;
