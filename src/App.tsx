import React from "react";
import styled from "styled-components";
import TodoProvider from "src/stores/context/TodoProvider";
import ContextTodoList from "src/ContextTodoList";
import reduxStore from "src/stores/redux/rootStore";
import { Provider as ReduxProvider } from "react-redux";
import ReduxTodoList from "src/ReduxTodoList";

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
  margin: 32px 0;
`;
function App() {
  return (
    <Container>
      <TodoProvider>
        <Title>Context</Title>
        <ContextTodoList />
      </TodoProvider>
      <ReduxProvider store={reduxStore}>
        <Title>Redux</Title>
        <ReduxTodoList />
      </ReduxProvider>
    </Container>
  );
}

export default App;
