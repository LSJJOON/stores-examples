import React from "react";
import styled from "styled-components";
import ContextProvider from "src/stores/context/TodoProvider";
import ContextTodoList from "src/ContextTodoList";
import reduxStore from "src/stores/redux/rootStore";
import { Provider as ReduxProvider } from "react-redux";
import ReduxTodoList from "src/ReduxTodoList";
import { Provider as MobxProvider } from "mobx-react";
import MobxTodoList from "src/MobxTodoList";
import MobxRootStore from "src/stores/mobx/RootStore";

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
      <ContextProvider>
        <Title>Context</Title>
        <ContextTodoList />
      </ContextProvider>
      <ReduxProvider store={reduxStore}>
        <Title>Redux</Title>
        <ReduxTodoList />
      </ReduxProvider>
      <MobxProvider store={MobxRootStore}>
        <Title>Mobx</Title>
        <MobxTodoList />
      </MobxProvider>
    </Container>
  );
}

export default App;
