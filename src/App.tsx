import React from "react";
import styled from "styled-components";
import TodoProvider from "src/stores/context/TodoProvider";
import ContextTodoList from "src/ContextTodoList";

const Container = styled.div`
  flex: 1;
  background: #fff;
	display: flex;
	flex-direction: column;
	width: 100%
	height: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 32px;
`;
function App() {
  return (
    <TodoProvider>
      <Container>
        <Title>Lets gogogo</Title>
        <ContextTodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;
