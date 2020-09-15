import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  onAddTodo: (title: string) => void;
}

const TodoInput = styled.input`
  height: 50px;
`;

const AddButton = styled.button`
  height: 50px;
`;

export default function ReduxTodoList({ onAddTodo }: Props) {
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onClickAdd = () => {
    onAddTodo(input);
    setInput("");
  };

  return (
    <>
      <TodoInput value={input} onChange={handleChange} />
      <AddButton onClick={onClickAdd}>추가</AddButton>
    </>
  );
}
