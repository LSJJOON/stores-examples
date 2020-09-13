import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  title: string;
  isDone: boolean;
  id: string;
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

function TodoCard({ className, title, isDone, id, onToggle, onDelete }: Props) {
  console.log("todo render");
  return (
    <Container className={className}>
      <Title>{`title: ${title}  ${isDone ? "V" : "O"}`}</Title>
      <DoneToggleButton onClick={() => onToggle(id)}>
        <ButtonTitle>{`${isDone ? "cancel" : "done"}`}</ButtonTitle>
      </DoneToggleButton>
      <DelteButton onClick={() => onDelete(id)}>
        <ButtonTitle>delete</ButtonTitle>
      </DelteButton>
    </Container>
  );
}

function shouldUpdate(prevProps: Props, nextProps: Props) {
  return prevProps.isDone === nextProps.isDone;
}

export default memo(TodoCard, shouldUpdate);
