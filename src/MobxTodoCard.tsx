import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import TodoStore from "src/stores/mobx/TodoStore";

interface Props {
  className?: string;
  todo: TodoStore;
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

function TodoCard({ className, todo }: Props) {
  const { title, isDone, toggle, deleteTodo } = todo;

  console.log("mobx todo render");

  return (
    <Container className={className}>
      <Title>{`title: ${title}  ${isDone ? "V" : "O"}`}</Title>
      <DoneToggleButton onClick={toggle}>
        <ButtonTitle>{`${isDone ? "cancel" : "done"}`}</ButtonTitle>
      </DoneToggleButton>
      <DelteButton onClick={deleteTodo}>
        <ButtonTitle>delete</ButtonTitle>
      </DelteButton>
    </Container>
  );
}

export default observer(TodoCard);
