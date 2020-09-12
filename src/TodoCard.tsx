import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const Container = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const ButtonTitle = styled.div`
  font-weight: normal;
`;

const DoneToggleButton = styled.button``;

const DelteButton = styled.button``;

function TodoCard({ className, todo, onToggle, onDelete }: Props) {
  console.log("TodoCard Render");
  return (
    <Container className={className}>
      <Title>{`title: ${todo.title}  ${todo.isDone ? "V" : "O"}`}</Title>
      <DoneToggleButton onClick={() => onToggle(todo.id)}>
        <ButtonTitle>{`${todo.isDone ? "cancel" : "done"}`}</ButtonTitle>
      </DoneToggleButton>
      <DelteButton onClick={() => onDelete(todo.id)}>
        <ButtonTitle>delete</ButtonTitle>
      </DelteButton>
    </Container>
  );
}

export default TodoCard;
