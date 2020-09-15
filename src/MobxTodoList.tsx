import React from "react";
import styled from "styled-components";
import TodoCard from "src/MobxTodoCard";
import TodoForm from "src/TodoForm";
import { inject, observer } from "mobx-react";
import TodoListStore from "src/stores/mobx/TodoListStore";

interface InjectedProps {
  todoListStore?: TodoListStore;
}

const TodoItemsContainer = styled.div`
  width: 200px;
  flex-direction: column;
  display: flex;
`;

const TodoItem = styled(TodoCard)`
  margin-bottom: 8px;
`;

function TodoList({ todoListStore }: InjectedProps) {
  const { todos, addTodo } = todoListStore!;

  return (
    <>
      <TodoItemsContainer>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodoItemsContainer>
      <TodoForm onAddTodo={addTodo} />
    </>
  );
}

export default inject(({ store }) => ({ todoListStore: store.todoListStore }))(
  observer(TodoList)
);
