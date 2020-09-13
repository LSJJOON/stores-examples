import React, { useState } from "react";
import TodoContext from "src/stores/context/TodoContext";
import styled from "styled-components";
import TodoCard from "src/TodoCard";

const TodoItemsContainer = styled.div`
  width: 200px;
  flex-direction: column;
  display: flex;
`;

const TodoItem = styled(TodoCard)`
  margin-bottom: 8px;
`;

const TodoInput = styled.input`
  height: 50px;
`;

const AddButton = styled.button`
  height: 50px;
`;

function TodoList() {
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

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
            <TodoInput value={input} onChange={handleChange} />
            <AddButton
              onClick={() => {
                addTodo(input);
                setInput("");
              }}
            >
              추가
            </AddButton>
          </>
        );
      }}
    </TodoContext.Consumer>
  );
}

export default TodoList;
