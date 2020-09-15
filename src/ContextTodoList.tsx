import React from "react";
import TodoContext from "src/stores/context/TodoContext";
import styled from "styled-components";
import TodoCard from "src/TodoCard";
import TodoForm from "src/TodoForm";

const TodoItemsContainer = styled.div`
  width: 200px;
  flex-direction: column;
  display: flex;
`;

const TodoItem = styled(TodoCard)`
  margin-bottom: 8px;
`;

function TodoList() {
  return (
    <TodoContext.Consumer>
      {({ todos, addTodo, toggle, deleteTodo }) => {
        return (
          <>
            <TodoItemsContainer>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  isDone={todo.isDone}
                  onToggle={toggle}
                  onDelete={deleteTodo}
                />
              ))}
            </TodoItemsContainer>
            <TodoForm onAddTodo={addTodo} />
          </>
        );
      }}
    </TodoContext.Consumer>
  );
}

export default TodoList;
